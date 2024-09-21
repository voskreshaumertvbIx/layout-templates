import React, { useState } from "react";
import Slider from "react-slider";

import { rating } from "./raiting";
import { tags } from "./tags";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import Button from "../Reusable component/buttons";
import { useProductContext } from "../../hooks/useProductContext";
import ProductCard from "../product_cart/productcard";

const min = 0;
const max = 1000;

interface CategoryButtonProps {
  label: string;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  count: number;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  label,
  selectedCategory,
  setSelectedCategory,
  count,
}) => {
  return (
    <div className="mt-2 flex items-center">
      <button
        className={`h-4 w-4 rounded-full border-[1px] ${
          selectedCategory === label
            ? "border-Primary bg-Primary"
            : "border-gray-100 bg-white"
        }`}
        onClick={() => setSelectedCategory(label)}
      ></button>
      <label className="ml-2 text-BodySmall font-regular">
        {label} ({count})
      </label>
    </div>
  );
};

const ProductFilter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [value, setValue] = useState<number[]>([min, max]);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { products, onAdd } = useProductContext();

  const [isExpanded, setIsExpanded] = useState({
    categories: true,
    price: true,
    rating: true,
    tags: true,
  });

  const toggleSection = (section: keyof typeof isExpanded) => {
    setIsExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const countProductsByCategory = (category: string) => {
    return products.filter(
      (product) => category === "All" || product.type === category,
    ).length;
  };

  const toggleRating = (ratingValue: string) => {
    setSelectedRatings((prevRatings) =>
      prevRatings.includes(ratingValue)
        ? prevRatings.filter((rating) => rating !== ratingValue)
        : [...prevRatings, ratingValue],
    );
  };

  const toggleTag = (tagValue: string) => {
    setSelectedTags((prevTagsValue) =>
      prevTagsValue.includes(tagValue)
        ? prevTagsValue.filter((tag) => tag !== tagValue)
        : [...prevTagsValue, tagValue],
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.type === selectedCategory;
    const matchesPrice = product.price >= value[0] && product.price <= value[1];
    const matchesRating =
      selectedRatings.length === 0 || selectedRatings.includes(product.rating);
    const matchesTags =
      selectedTags.length === 0 ||
      product.tags.some((tag) => selectedTags.includes(tag));
    return matchesCategory && matchesPrice && matchesRating && matchesTags;
  });

  return (
    <div className="container">
      <div className="mt-5 flex items-center justify-between max-2xl:justify-around">
        <button
          onClick={() => setIsModalOpen(true)}
          className="h-[35px] w-[101px] rounded-full bg-Primary text-BodySmall text-White"
        >
          Filter
        </button>
        <p className="text-BodyMedium font-medium text-gray-600">
          <span className="text-BodyMedium text-gray-900">
            {filteredProducts.length}
          </span>{" "}
          Results Found
        </p>
      </div>
      <section className="mt-12 grid grid-cols-4 gap-4">
        <section className="col-span-1 rounded-lg max-xl:p-4 max-lg:hidden">
          <section className="mb-4 flex flex-col items-start space-x-4 border-b border-gray-100">
            <div className="flex w-full items-center justify-between">
              <h2 className="text-BodyXL font-medium text-gray-900">
                All Categories
              </h2>
              <button onClick={() => toggleSection("categories")} className="">
                {isExpanded.categories ? <BsChevronUp /> : <BsChevronDown />}
              </button>
            </div>

            {isExpanded.categories && (
              <div className="mb-5">
                <CategoryButton
                  label="All"
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  count={countProductsByCategory("All")}
                />
                <CategoryButton
                  label="Fresh Fruit"
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  count={countProductsByCategory("Fresh Fruit")}
                />
                <CategoryButton
                  label="Vegetable"
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  count={countProductsByCategory("Vegetable")}
                />
                <CategoryButton
                  label="Cooking"
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  count={countProductsByCategory("Cooking")}
                />
                <CategoryButton
                  label="Snacks"
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  count={countProductsByCategory("Snacks")}
                />
                <CategoryButton
                  label="Beverages"
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  count={countProductsByCategory("Beverages")}
                />
              </div>
            )}
          </section>

          <section className="mb-5 border-b border-gray-100">
            <div className="flex w-full items-center justify-between">
              <h2 className="text-BodyXL font-medium text-gray-900">Price</h2>
              <button onClick={() => toggleSection("price")} className="">
                {isExpanded.price ? <BsChevronUp /> : <BsChevronDown />}
              </button>
            </div>

            {isExpanded.price && (
              <>
                <Slider
                  value={value}
                  onChange={setValue}
                  min={min}
                  max={max}
                  className="my-4 h-1.5 w-full rounded"
                  thumbClassName="h-3 w-3 bg-White border-[1.5px] border-Primary rounded-full cursor-pointer transform -translate-y-1/3"
                  pearling
                  withTracks
                  renderTrack={(props, state) => (
                    <div
                      {...props}
                      className={`${
                        state.index === 1 ? "bg-Primary" : "bg-gray-100"
                      } h-1 rounded`}
                    />
                  )}
                />
                <p className="mb-6 text-BodySmall font-regular">
                  Price:{" "}
                  <span className="text-BodySmall font-medium">
                    {value[0]} - {value[1]}
                  </span>
                </p>
              </>
            )}
          </section>

          <section className="mb-5 border-b border-gray-100">
            <div className="mb-4 flex w-full items-center justify-between">
              <h2 className="text-BodyXL font-medium text-gray-900">Rating</h2>
              <button onClick={() => toggleSection("rating")} className="">
                {isExpanded.rating ? <BsChevronUp /> : <BsChevronDown />}
              </button>
            </div>

            {isExpanded.rating && (
              <>
                {rating.map(({ value, img }) => (
                  <div
                    key={value}
                    className="mb-2 flex items-center last-of-type:mb-5"
                  >
                    <input
                      type="checkbox"
                      checked={selectedRatings.includes(value)}
                      onChange={() => toggleRating(value)}
                    />
                    <img src={img} alt={`Rating ${value}`} />
                  </div>
                ))}
              </>
            )}
          </section>

          <section className="mb-5">
            <div className="mb-4 flex w-full items-center justify-between">
              <h2 className="text-BodyXL font-medium text-gray-900">
                Popular Tags
              </h2>
              <button onClick={() => toggleSection("tags")} className="">
                {isExpanded.tags ? <BsChevronUp /> : <BsChevronDown />}
              </button>
            </div>

            {isExpanded.tags && (
              <>
                {tags.map(({ tag, id }) => (
                  <button
                    key={id}
                    onClick={() => toggleTag(tag)}
                    className={`my-1 mr-1 rounded-full px-3 py-1 text-BodySmall ${
                      selectedTags.includes(tag)
                        ? "bg-Primary text-White"
                        : "bg-gray-100"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </>
            )}
          </section>
          <section className="relative">
            <img
              className="h-[295px] w-full"
              src="img/categorybanner.png"
              alt=""
            />
            <div className="absolute left-[25%] top-2 flex items-baseline">
              <span className="text-Heading05 font-semibold text-Warning">
                79%
              </span>
              <p className="text-BodyXXL font-regular">Discount </p>
            </div>
            <p className="absolute left-[30%] top-[20%] text-BodyMedium font-medium text-gray-700">
              on your first order{" "}
            </p>
            <Button
              icon={true}
              variant="ghost"
              className="absolute left-[27%] top-[30%]"
            >
              Shop now
            </Button>
          </section>
        </section>

       




 {isModalOpen && (
<div className="relative">
<section className="overflow-auto fixed inset-0 z-50 flex items-center  bg-white  max-lg:p-4 flex-col b">
  <div className="flex max-md:flex-col max-md:items-center justify-around w-[85%] ">
  
          <section className="mb-4 flex flex-col items-start space-x-4 ">
            <div className="flex w-full items-center justify-between">
              <h2 className="text-BodyXL font-medium text-gray-900">
                All Categories
              </h2>
            </div>

            {isExpanded.categories && (
              <div className="mb-5">
                <CategoryButton
                  label="All"
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  count={countProductsByCategory("All")}
                />
                <CategoryButton
                  label="Fresh Fruit"
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  count={countProductsByCategory("Fresh Fruit")}
                />
                <CategoryButton
                  label="Vegetable"
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  count={countProductsByCategory("Vegetable")}
                />
                <CategoryButton
                  label="Cooking"
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  count={countProductsByCategory("Cooking")}
                />
                <CategoryButton
                  label="Snacks"
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  count={countProductsByCategory("Snacks")}
                />
                <CategoryButton
                  label="Beverages"
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  count={countProductsByCategory("Beverages")}
                />
              </div>
            )}
          </section>

          <section className="mb-5 w-[150px]">
            <div className="flex w-full items-center justify-between">
              <h2 className="text-BodyXL font-medium text-gray-900">Price</h2>
              
            </div>

            {isExpanded.price && (
              <>
                <Slider
                  value={value}
                  onChange={setValue}
                  min={min}
                  max={max}
                  className="my-4 h-1.5 w-full rounded"
                  thumbClassName="h-3 w-3 bg-White border-[1.5px] border-Primary rounded-full cursor-pointer transform -translate-y-1/3"
                  pearling
                  withTracks
                  renderTrack={(props, state) => (
                    <div
                      {...props}
                      className={`${
                        state.index === 1 ? "bg-Primary" : "bg-gray-100"
                      } h-1 rounded`}
                    />
                  )}
                />
                <p className="mb-6 text-BodySmall font-regular">
                  Price:{" "}
                  <span className="text-BodySmall font-medium">
                    {value[0]} - {value[1]}
                  </span>
                </p>
              </>
            )}
          </section>

          <section className="mb-5">
            <div className="mb-4 flex w-full items-center justify-between">
              <h2 className="text-BodyXL font-medium text-gray-900">Rating</h2>
            </div>

            {isExpanded.rating && (
              <>
                {rating.map(({ value, img }) => (
                  <div
                    key={value}
                    className="mb-2 flex items-center last-of-type"
                  >
                    <input
                      type="checkbox"
                      checked={selectedRatings.includes(value)}
                      onChange={() => toggleRating(value)}
                    />
                    <img src={img} alt={`Rating ${value}`} />
                  </div>
                ))}
              </>
            )}
          </section>
          </div>
          <section className="mb-[30px] w-3/4 flex flex-col justify-center items-center ">
            <div className="mb-4">
              <h2 className="text-BodyXL font-medium text-gray-900 text-center">
                Popular Tags
              </h2>
            </div>

            {isExpanded.tags && (
              <div className="flex flex-wrap justify-center">
                {tags.map(({ tag, id }) => (
                  <button
                    key={id}
                    onClick={() => toggleTag(tag)}
                    className={`my-1 mr-1 rounded-full px-3 py-1 text-BodySmall ${
                      selectedTags.includes(tag)
                        ? "bg-Primary text-White"
                        : "bg-gray-100"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </section>
          <Button onClick={()=>(setIsModalOpen(false))}>Close</Button>
        </section>
</div>
 )}


















        <section className="col-span-3">
          <div className="grid grid-cols-3 gap-4 max-xl:flex max-xl:flex-wrap max-xl:justify-center">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={() => onAdd(product)}
                className={`h-[337px] w-[312px] rounded-lg p-1 max-2xl:w-[280px]`}
              />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProductFilter;
