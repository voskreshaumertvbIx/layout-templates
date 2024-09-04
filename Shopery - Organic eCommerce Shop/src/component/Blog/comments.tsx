import React from "react";
import { comments } from "./blogData";
import Button from "../Reusable component/buttons";

const Comments = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-BodyXL font-medium mb-4">Comments</h2>
      {comments.map((comment) => (
        <section className="mb-4 flex items-start border-b border-gray-100 last-of-type:border-none">
          <img className="mr-2 " src="/img/face.png" alt="" />
          <div className="flex flex-col text-BodySmall">
            <p className="text-gray-400">
              <span className="font-medium text-gray-900 mr-2">{comment.name}</span>
              {""}
              {comment.date}
            </p>
            <p className="mb-4 text-gray-600">{comment.text}</p>
          </div>
        </section>
      ))}

      <Button className="border-2 border-Primary" variant="ghost">Load More</Button>
    </div>
  );
};

export default Comments;
