import React from "react";
import { BlogData } from "./blogData";

import Button from "../Reusable component/buttons";

export interface BlogProps {
  blog: BlogData[];
}

const Blog: React.FC<BlogProps> = ({ blog }) => {
  return (
    <div className="grid grid-cols-2">
      {blog.map((info) => (
        <div
          key={info.id}
          className="mb-3 h-[494px] w-[424px] rounded-md border-[1px] border-gray-100"
        >
          <img
            className="h-[324px] w-[424px] rounded-md object-cover"
            src={info.image}
            alt={info.title}
          />
          <div className="mt-2 px-4">
            <img className="mb-1 object-fill" src="/img/Info.png" alt="" />
            <h2 className="text-BodyLarge font-medium">{info.title}</h2>
            <p className="mb-2 mt-1 h-[42px] overflow-hidden overflow-ellipsis text-BodySmall text-gray-400">
              {info.description}
            </p>
            <Button
              navigateTo={`/blog/${info.id}`}
              variant="border"
              className="-ml-5"
              icon={true}
            >
              Read more
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
