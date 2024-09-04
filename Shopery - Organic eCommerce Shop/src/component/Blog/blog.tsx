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
        <div key={info.id} className="w-[424px] h-[494px] border-[1px] border-gray-100 rounded-md mb-3">
          <img className="w-[424px] h-[324px] object-cover rounded-md " src={info.image} alt={info.title} />
          <div className="px-4 mt-2">
          <img className="object-fill mb-1" src='/img/Info.png' alt="" />
          <h2 className="text-BodyLarge font-medium">{info.title}</h2>
          <p className="mt-1 text-gray-400 text-BodySmall mb-2 h-[42px] overflow-hidden overflow-ellipsis">{info.description}</p>
          <Button navigateTo={`/blog/${info.id}`} variant="border" className="-ml-5" icon={true}>Read more</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
