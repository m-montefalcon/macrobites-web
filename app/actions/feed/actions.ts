"use server";

import { apiFetch } from "@/lib/api/api.config";

export async function fetchPosts() {
  try {
    const res = await apiFetch("/posts");

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return Promise.resolve([]);
  }
}
