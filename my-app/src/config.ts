const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

export const apiBaseUrl = trimTrailingSlash(
  process.env.REACT_APP_API_BASE_URL || "https://localhost:7132"
);
