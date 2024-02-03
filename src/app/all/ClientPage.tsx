"use client";

import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "~/server/api/root";
import { api } from "~/trpc/react";
import { CreatePost } from "../_components/create-post";
import Link from "next/link";

export default function ClientPage({
  posts,
}: {
  posts: inferRouterOutputs<AppRouter>["post"]["getAll"];
}) {
  const allPosts = api.post.getAll.useQuery(undefined, { 
    initialData: posts,
    refetchOnMount: false
    });
  console.log(posts)
  return (
    <div className="flex h-full flex-col min-h-screen w-full items-center justify-center">
    <Link href='/'>
    Home
    </Link>
      <ul className="flex flex-col gap-2 divide-y divide-gray-500">
        {allPosts.data.map((p) => (
          <li className="pt-2" key={p.id}>
            {p.name}
          </li>
        ))}
      </ul>
      <div className='pt-4'>
      <span>
      Submitting here will update the trpc cache, and the data will be correct across navigations.
      </span>
      <CreatePost />
      </div>
    </div>
  );
}
