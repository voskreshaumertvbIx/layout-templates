import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { CategoryButton } from "../categories/categories";
import {
  BlogData,
  blogData,
  Gallery,
  resentlyAdded,
  tagsBlog,
} from "./blogData";

//ADD USEDEBAUNCE

interface FiltersProps {
  onFilterChange?: (filteredData: BlogData[]) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  console.log("Rendering Singlepage component");

  const countProductsByCategory = (category: string) => {
    return blogData.filter(
      (blog) => category === "All" || blog.category === category,
    ).length;
  };

  const toggleTag = (tagValue: string) => {
    setSelectedTags((prevTagsValue) =>
      prevTagsValue.includes(tagValue)
        ? prevTagsValue.filter((tag) => tag !== tagValue)
        : [...prevTagsValue, tagValue],
    );
  };

  const categories = ["All", ...new Set(blogData.map((item) => item.category))];

  useEffect(() => {
    const filteredBlog = blogData.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory;
      const matchesTags =
        selectedTags.length === 0 ||
        blog.tags.some((tag) => selectedTags.includes(tag));
      return matchesCategory && matchesTags;
    });
    console.log("Filtered Blogs:", filteredBlog);
    onFilterChange?.(filteredBlog);
  }, [selectedTags, selectedCategory, onFilterChange]);

  return (
    <section>
      <div className="relative w-full border-b border-gray-100">
        <CiSearch className="absolute left-4 top-3.5 h-5 w-5" />
        <input
          type="text"
          placeholder="Search..."
          className="mb-7 w-full rounded border py-3 pl-10 pr-4"
        />
      </div>

      <div className="border-b border-gray-100">
        <h2 className="my-5 text-BodyXL font-medium">Top Categories</h2>
        <div className="flex flex-col gap-1 last-of-type:mb-6">
          {categories.map((category) => (
            <CategoryButton
              key={category}
              count={countProductsByCategory(category)}
              label={category}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          ))}
        </div>
      </div>
      <section className="border-b border-gray-100">
        <h2 className="my-5 text-BodyXL font-medium text-gray-900">
          Popular Tags
        </h2>

        {tagsBlog.map(({ tag, id }) => (
          <button
            key={id}
            onClick={() => toggleTag(tag)}
            className={`my-1 mr-1 rounded-full px-3 py-1 text-BodySmall last-of-type:mb-7 ${
              selectedTags.includes(tag)
                ? "bg-Primary text-White"
                : "bg-gray-100"
            }`}
          >
            {tag}
          </button>
        ))}
      </section>

      <section className="">
        <h2 className="my-5 text-BodyXL font-medium">Our Gallery</h2>
        <div className="grid grid-cols-4 gap-2">
          {Gallery.map((blog: BlogData) => (
            <img
              key={blog.id}
              className="h-[100px] w-[100px] rounded-md object-cover last-of-type:mb-7"
              src={blog.image}
              alt={blog.title}
            />
          ))}
        </div>

        <h2 className="my-5 text-BodyXL font-medium">Recently Added</h2>
        <div>
          {resentlyAdded.map((blog: BlogData) => (
            <section className="mb-5 flex gap-4">
              <img
                className="h-[77px] w-[100px] rounded-md object-cover"
                src={blog.image}
                alt=""
              />
              <div className="flex flex-col justify-between">
                <p className="text-BodyMedium">{blog.title}</p>
                <img
                  className="h-5 w-[100px] object-cover"
                  src="/img/Date.png"
                  alt=""
                />
              </div>
            </section>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Filters;
