import Link from "next/link";

export function NavbarToFeed() {
  return (
    <Link href={`/feed`} className="rounded-md border p-2 hover:bg-gray-100">
      Feed
    </Link>
  );
}
export function NavbarToProfile() {
  return (
    <Link href={`/profile`} className="rounded-md border p-2 hover:bg-gray-100">
      Profile
    </Link>
  );
}
export function NavbarToSavedPosts() {
  return (
    <Link
      href={`/saved-posts`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      Saved Posts
    </Link>
  );
}
