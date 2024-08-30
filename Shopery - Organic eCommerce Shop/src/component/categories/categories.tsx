import React, { useState } from "react";
import Slider from "react-slider";
import { products } from "../product_cart/product";
import ProductCard from "../product_cart/product_cart";
import { rating } from "./raiting";
import { tags } from "./tags";

const min = 0;
const max = 1000;

interface ProductFilterProps {
  handleAddToCart: (productId: number) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ handleAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [value, setValue] = useState<number[]>([min, max]);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleRating = (ratingValue: string) => {
    setSelectedRatings((prevRatings) =>
      prevRatings.includes(ratingValue)
        ? prevRatings.filter((rating) => rating !== ratingValue)
        : [...prevRatings, ratingValue]
    );
  };

  const toggleTag = (tagValue: string) => {
    setSelectedTags((prevTagsValue) =>
      prevTagsValue.includes(tagValue)
        ? prevTagsValue.filter((tag) => tag !== tagValue)
        : [...prevTagsValue, tagValue]
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
    <section className="grid grid-cols-4 gap-4 p-4">
      <section className="col-span-1 p-4 border rounded-lg">
        <div className="mb-6 flex justify-center space-x-4">
          <button onClick={() => setSelectedCategory("All")}>All</button>
          <button onClick={() => setSelectedCategory("Fresh Fruit")}>
            Fresh Fruit
          </button>
          <button onClick={() => setSelectedCategory("Vegetable")}>
            Vegetables
          </button>
        </div>

        <h2>Price</h2>
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
        <p>
          Price: {value[0]} - {value[1]}
        </p>

        <h2>Rating</h2>
        {rating.map(({ value, img }) => (
          <div key={value} className="flex items-center">
            <input
              type="checkbox"
              checked={selectedRatings.includes(value)}
              onChange={() => toggleRating(value)}
            />
            <img src={img} alt={`Rating ${value}`} />
          </div>
        ))}

        <h2>Popular tag</h2>
        {tags.map(({ tag, id }) => (
          <button
            key={id}
            onClick={() => toggleTag(tag)}
            className={`rounded-lg px-3 py-1 text-BodySmall ${
              selectedTags.includes(tag) ? "bg-Primary" : "bg-gray-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </section>

      <section className="col-span-3">
        <div className="grid grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => handleAddToCart(product.id)}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default ProductFilter;
