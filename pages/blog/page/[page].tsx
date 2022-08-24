import { GetStaticPaths, GetStaticProps } from "next";
import PostList from "../../../components/PostList";
import PostType from "../../../interfaces/post";
import { count, listContent } from "../../../lib/api";

type Props = {
  posts: PostType[];
  page: number;
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Page({ posts, pagination, page }: Props) {
  return <PostList posts={posts} pagination={pagination} />;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = parseInt(params?.page as string);
  const posts = listContent<PostType>("blog", page, 10);
  const pagination = {
    current: page,
    pages: Math.ceil(count("blog") / 10),
  };
  return {
    props: {
      page,
      posts,
      pagination,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = Math.ceil(count('blog') / 10);
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};
