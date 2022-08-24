import React from "react";
import Pagination from "./Pagination";
import Link from "next/link";
import PostType from "../interfaces/post";
import PostCard from "./PostCard";

type Props = {
  posts: PostType[];
  pagination: {
    current: number;
    pages: number;
  };
};

export default function PostList({ posts, pagination }: Props) {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl mb-8 mt-12 font-bold dark:text-gray-200">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        {posts.map((post) => {
          return (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <PostCard post={post} />
            </Link>
          );
        })}
      </div>

      <Pagination
        current={pagination.current}
        pages={pagination.pages}
        link={{
          href: (page) => (page === 1 ? "/blog" : "/blog/page/[page]"),
          as: (page) => (page === 1 ? '' : "/blog/page/" + page),
        }}
      />
    </div>
  );
}
