import { api } from "~/trpc/server";
import ClientPage from "./ClientPage";

export default async function Page() {
  const posts = await api.post.getAll.query();

  return (
  <ClientPage posts={posts} />
  );
}
