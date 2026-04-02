const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/v1/api";

const apiFetch = (path: string, options?: RequestInit) =>
  fetch(`${BASE_URL}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...options,
  });

export async function apiRegister(
  email: string,
  password: string,
  name: string,
) {
  console.log("Registering user:", { email, name });
  const res = await apiFetch("/auth/register", {
    method: "POST",
    body: JSON.stringify({ email, password, name }),
  });
  if (!res.ok) throw await res.json();
  return res.json(); // { user }
}

export async function apiLogin(email: string, password: string) {
  const res = await apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw await res.json();
  return res.json(); // { user }
}

export async function apiLogout() {
  const res = await apiFetch("/auth/logout", { method: "POST" });
  if (!res.ok) throw await res.json();
  return res.json();
}

export async function apiMe() {
  const res = await apiFetch("/auth/me");
  if (!res.ok) return null; // not authenticated
  return res.json(); // full user
}
