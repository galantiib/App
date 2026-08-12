const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const configuredApiBaseUrl = process.env.REACT_APP_API_BASE_URL;

export const apiBaseUrl = trimTrailingSlash(
  configuredApiBaseUrl || "https://localhost:7132"
);

export const shouldUseBackendApi =
  Boolean(configuredApiBaseUrl) || process.env.NODE_ENV !== "production";

export const staticProductsUrl = `${process.env.PUBLIC_URL}/data/products.json`;
