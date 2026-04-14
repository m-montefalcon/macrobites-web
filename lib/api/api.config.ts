const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/v1/api";
export const apiFetch = (path: string, options?: RequestInit) =>
  fetch(`${BASE_URL}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...options,
  });
