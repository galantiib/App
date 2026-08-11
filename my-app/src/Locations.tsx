import { useEffect, useRef } from "react";
import { Layout } from "./Layout.tsx";

const locations = [
  {
    name: "OZZO Pharm - Head Office",
    type: "Zyre qendrore",
    city: "Prishtine",
    address: "Arberi, Rr Ferid Curri, Prishtina 10000",
    phone: "+383 44 256 193",
    mapQuery: "OZZO Pharm, Rr Ferid Curri, Prishtina 10000, Kosovo",
    coordinates: [42.6609, 21.1546],
  },
  {
    name: "OZONE HAIR CLINIC SH.P.K.",
    type: "Klinike per floke",
    city: "Prishtine",
    address: "Lagjja Arberia, Rruga Vicianum, p.n.",
    phone: "+383 44 411 412",
    mapQuery:
      "OZONE Hair Clinic, Lagjja Arberia, Rruga Vicianum, Prishtina, Kosovo",
    coordinates: [42.6652, 21.1485],
  },
  {
    name: "OZONE Pharmacy - Prishtine",
    type: "Barnatore",
    city: "Prishtine",
    address: "Lagjja Arberia, Rruga Vicianum, p.n.",
    phone: "+383 45 411 412",
    mapQuery:
      "OZONE Pharmacy, Lagjja Arberia, Rruga Vicianum, Prishtina, Kosovo",
    coordinates: [42.665, 21.1489],
  },
  {
    name: "OZONE Pharmacy - Mitrovice",
    type: "Barnatore",
    city: "Mitrovice",
    address: "Rruga Bislim Bajgora, nr. 5",
    phone: "+383 48 411 412",
    mapQuery: "OZONE Pharmacy, Rruga Bislim Bajgora nr. 5, Mitrovica, Kosovo",
    coordinates: [42.89438, 20.87253],
  },
];

const leafletCss = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
const leafletScript = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

const loadLeaflet = () => {
  return new Promise<any>((resolve, reject) => {
    if ((window as any).L) {
      resolve((window as any).L);
      return;
    }

    if (!document.querySelector(`link[href="${leafletCss}"]`)) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = leafletCss;
      document.head.appendChild(stylesheet);
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${leafletScript}"]`
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve((window as any).L));
      existingScript.addEventListener("error", reject);
      return;
    }

    const script = document.createElement("script");
    script.src = leafletScript;
    script.async = true;
    script.onload = () => resolve((window as any).L);
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

const getMapUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const getPhoneUrl = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;

const Locations = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let map: any;
    let isMounted = true;

    const initializeMap = async () => {
      try {
        const L = await loadLeaflet();

        if (!isMounted || !mapRef.current) {
          return;
        }

        map = L.map(mapRef.current, {
          scrollWheelZoom: true,
        }).setView([42.663, 21.151], 14);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; OpenStreetMap contributors",
          maxZoom: 19,
        }).addTo(map);

        const markers = locations.map((location) => {
          const marker = L.marker(location.coordinates).addTo(map);
          marker.bindPopup(
            `<strong>${location.name}</strong><br />${location.city}<br />${location.address}<br />${location.phone}`
          );
          return marker;
        });

        const group = L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.22));
      } catch (error) {
        console.error("Map could not be loaded.", error);
      }
    };

    initializeMap();

    return () => {
      isMounted = false;
      if (map) {
        map.remove();
      }
    };
  }, []);

  return (
    <Layout>
      <section className="locations-hero">
        <div className="locations-copy">
          <span className="eyebrow">Lokacionet</span>
          <h2>Gjeni OZZO Pharm, OZONE Hair Clinic dhe OZONE Pharmacy ne harte.</h2>
          <p>
            Kjo faqe mbledh lokacionet kryesore ne Kosove, me adresa te
            qarta, karta informuese dhe lidhje direkte per navigim.
          </p>
        </div>

        <div className="locations-summary" aria-label="Permbledhje lokacionesh">
          <strong>{locations.length}</strong>
          <span>lokacione te listuara ne Kosove</span>
        </div>
      </section>

      <section className="locations-map-section">
        <div className="locations-map" ref={mapRef} aria-label="Harta e lokacioneve">
          <span>Harta po ngarkohet...</span>
        </div>

        <div className="locations-list" aria-label="Lista e lokacioneve">
          {locations.map((location, index) => (
            <article className="location-card" key={location.name}>
              <span className="location-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <span className="location-type">{location.type}</span>
                <h3>{location.name}</h3>
                <strong className="location-city">{location.city}</strong>
                <p>{location.address}</p>
                <a className="location-phone" href={getPhoneUrl(location.phone)}>
                  {location.phone}
                </a>
              </div>
              <div className="location-actions">
                <a href={getMapUrl(location.mapQuery)} target="_blank" rel="noreferrer">
                  Hap ne Google Maps
                </a>
                <a href={getPhoneUrl(location.phone)}>
                  Telefono
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Locations;
