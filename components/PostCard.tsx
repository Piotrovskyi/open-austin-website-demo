import React from "react";
import dayjs from "dayjs";
import PostType from "../interfaces/post";
import Image from "next/image";

const PostCard = React.forwardRef(
  ({ post, onClick }: { post: PostType; onClick?: any }) => {
    return (
      <div
        className="transform transition duration-500 hover:scale-105 cursor-pointer"
        onClick={onClick}
      >
        {post.thumb && (
          <div className="mb-4">
            <Image
              src={post.thumb}
              alt={post.thumbalt}
              width={700}
              height={500}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        )}
        <h2 className="dark:text-gray-200 text-xl font-bold mb-4">
          {post.title}
        </h2>

        <time className="dark:text-gray-500">
          {dayjs(post.date).format("DD MMM YYYY")}
        </time>
      </div>
    );
  }
);

PostCard.displayName = "PostCard";

export default PostCard;
