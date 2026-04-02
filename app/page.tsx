import { redirect } from "next/navigation";

export default function Home() {
  redirect("/feed"); // middleware will redirect to /login if no cookie
}
