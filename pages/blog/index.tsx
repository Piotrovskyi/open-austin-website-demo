import React from "react";

import { GetStaticProps } from "next";
import PostList from "../../components/PostList";
import { count, listContent } from "../../lib/api";
import PostType from "../../interfaces/post";

type Props = {
  posts: PostType[];
  pagination: {
    current: number;
    pages: number;
  };
};

const Blog = ({ posts = [], pagination }: Props) => {
  return (
    <PostList posts={posts} pagination={pagination} />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = listContent<PostType>('blog', 1, 10);

  const pagination = {
    current: 1,
    pages: Math.ceil(count('blog') / 10),
  };

  return {
    props: {
      posts,
      pagination,
    },
  };
};

export default Blog;
