export const tagsBlog = [
  { tag: "Healthy", id: 1 },
  { tag: "Low fat", id: 2 },
  { tag: "Vegetarian", id: 3 },
  { tag: "Kid foods", id: 4 },
  { tag: "Vitamins", id: 5 },
  { tag: "Bread", id: 6 },
  { tag: "Meat", id: 7 },
  { tag: "Snacks", id: 8 },
  { tag: "Tiffin", id: 9 },
  { tag: "Lunch", id: 10 },
  { tag: "Dinner", id: 11 },
  { tag: "Breakfast", id: 12 },
  { tag: "Fruit", id: 13 },
];

export interface BlogData {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
  category: string;
  tags: string[];
}

export const blogData: BlogData[] = [
  {
    id: 1,
    title: "Healthy Avocado Salad",
    image: "/img/blogImg/blog1.jpg",
    description: "Discover the freshness of avocado in this simple yet delightful salad. Perfect for a light and healthy meal.",
    link: "/blogs/healthy-avocado-salad",
    category: "Salads",
    tags: ["Healthy", "Vitamins", "Lunch"]
  },
  {
    id: 2,
    title: "Chocolate Lava Cake",
    image: "/img/blogImg/blog2.jpg",
    description: "Indulge in the rich, gooey center of this classic chocolate lava cake. A must-try for all dessert lovers.",
    link: "/blogs/chocolate-lava-cake",
    category: "Desserts",
    tags: ["Snacks", "Desserts"]
  },
  {
    id: 3,
    title: "Sushi Rolls at Home",
    image: "/img/blogImg/blog3.jpg",
    description: "Learn how to make delicious sushi rolls at home with our step-by-step guide. A fun and tasty adventure.",
    link: "/blogs/sushi-rolls-at-home",
    category: "Main Course",
    tags: ["Healthy", "Dinner"]
  },
  {
    id: 4,
    title: "Vegan Tacos",
    image: "/img/blogImg/blog4.webp",
    description: "These vegan tacos are bursting with flavor and texture. Perfect for a plant-based twist on a classic dish.",
    link: "/blogs/vegan-tacos",
    category: "Vegan",
    tags: ["Vegetarian", "Dinner"]
  },
  {
    id: 5,
    title: "Classic Italian Pizza",
    image: "/img/blogImg/blog5.jpg",
    description: "Experience the taste of Italy with this authentic pizza recipe. Crispy crust, fresh toppings, and full of flavor.",
    link: "/blogs/classic-italian-pizza",
    category: "Main Course",
    tags: ["Bread", "Dinner"]
  },
  {
    id: 6,
    title: "Mediterranean Quinoa Bowl",
    image: "/img/blogImg/blog6.jfif",
    description: "Enjoy a healthy and satisfying quinoa bowl packed with Mediterranean flavors. Perfect for lunch or dinner.",
    link: "/blogs/mediterranean-quinoa-bowl",
    category: "Health",
    tags: ["Healthy", "Vitamins", "Lunch"]
  },
  {
    id: 7,
    title: "Homemade Ice Cream",
    image: "/img/blogImg/blog7.jpg",
    description: "Learn how to make your own creamy, delicious ice cream at home. Perfect for a summer treat.",
    link: "/blogs/homemade-ice-cream",
    category: "Desserts",
    tags: ["Snacks", "Desserts"]
  },
  {
    id: 8,
    title: "Gluten-Free Pancakes",
    image: "/img/blogImg/blog8.jpg",
    description: "Fluffy and delicious, these gluten-free pancakes are a perfect start to your day. Easy to make and enjoy!",
    link: "/blogs/gluten-free-pancakes",
    category: "Breakfast",
    tags: ["Breakfast", "Healthy"]
  },
  {
    id: 9,
    title: "BBQ Chicken Wings",
    image: "/img/blogImg/blog9.jpg",
    description: "Crispy, juicy, and coated in a sweet and tangy BBQ sauce, these chicken wings are perfect for any occasion.",
    link: "/blogs/bbq-chicken-wings",
    category: "Snacks",
    tags: ["Meat", "Snacks"]
  },
  {
    id: 10,
    title: "Creamy Mushroom Pasta",
    image: "/img/blogImg/blog10.webp",
    description: "Indulge in this rich and creamy mushroom pasta, packed with flavor and perfect for a cozy dinner.",
    link: "/blogs/creamy-mushroom-pasta",
    category: "Main Course",
    tags: ["Dinner", "Healthy"]
  },
  {
    id: 11,
    title: "Fresh Fruit Smoothies",
    image: "/img/blogImg/blog11.jpg",
    description: "Refresh yourself with these vibrant and healthy fruit smoothies. A delicious way to enjoy fresh fruits.",
    link: "/blogs/fresh-fruit-smoothies",
    category: "Drinks",
    tags: ["Fruit", "Vitamins", "Drinks"]
  },
  {
    id: 12,
    title: "Spicy Thai Curry",
    image: "/img/blogImg/blog12.jpg",
    description: "Warm up with this spicy and aromatic Thai curry, made with fresh ingredients and authentic flavors.",
    link: "/blogs/spicy-thai-curry",
    category: "Main Course",
    tags: ["Dinner", "Healthy"]
  },
  {
    id: 13,
    title: "Vegan Brownies",
    image: "/img/blogImg/blog13.jpg",
    description: "Decadent and fudgy, these vegan brownies are a treat you won’t believe are plant-based. Perfect for dessert!",
    link: "/blogs/vegan-brownies",
    category: "Desserts",
    tags: ["Vegan", "Desserts"]
  },
  {
    id: 14,
    title: "Grilled Salmon with Herbs",
    image: "/img/blogImg/blog14.jpg",
    description: "Simple yet flavorful, this grilled salmon with fresh herbs is a perfect healthy meal for any day of the week.",
    link: "/blogs/grilled-salmon-with-herbs",
    category: "Main Course",
    tags: ["Meat", "Dinner"]
  },
  {
    id: 15,
    title: "Avocado Toast Variations",
    image: "/img/blogImg/blog15.jpg",
    description: "Explore different ways to enjoy avocado toast with these creative and delicious variations. Perfect for any time of day.",
    link: "/blogs/avocado-toast-variations",
    category: "Breakfast",
    tags: ["Breakfast", "Healthy"]
  },
  {
    id: 16,
    title: "Homemade Granola Bars",
    image: "/img/blogImg/blog16.jpg",
    description: "These homemade granola bars are easy to make and perfect for a healthy snack on the go.",
    link: "/blogs/homemade-granola-bars",
    category: "Snacks",
    tags: ["Snacks", "Healthy"]
  },
  {
    id: 17,
    title: "Classic Roast Chicken",
    image: "/img/blogImg/blog17.jpg",
    description: "A perfectly roasted chicken with crispy skin and juicy meat. A classic recipe that never fails.",
    link: "/blogs/classic-roast-chicken",
    category: "Main Course",
    tags: ["Meat", "Dinner"]
  },
  {
    id: 18,
    title: "Berry Smoothie Bowl",
    image: "/img/blogImg/blog18.jpg",
    description: "Start your day with a refreshing and nutritious berry smoothie bowl, topped with your favorite fruits and nuts.",
    link: "/blogs/berry-smoothie-bowl",
    category: "Breakfast",
    tags: ["Breakfast", "Fruit", "Healthy"]
  },
  {
    id: 19,
    title: "Beef Tacos",
    image: "/img/blogImg/blog19.webp",
    description: "Juicy beef tacos with all the classic toppings. Perfect for a quick and delicious meal.",
    link: "/blogs/beef-tacos",
    category: "Main Course",
    tags: ["Meat", "Dinner"]
  },
  {
    id: 20,
    title: "Zucchini Fritters",
    image: "/img/blogImg/blog20.jpg",
    description: "Crispy on the outside and tender on the inside, these zucchini fritters are a delicious way to enjoy your vegetables.",
    link: "/blogs/zucchini-fritters",
    category: "Appetizers",
    tags: ["Vegetarian", "Healthy"]
  }
];
export const comments = [
  {
    
    name: "Annette Black",
    date: "26 Apr, 2021",
    text: "In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam."
  },
  {
    name: "Devon Lane",
    date: "24 Apr, 2021",
    text: "Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. Nam hendrerit, velit ut aliquam euismod, nibh tortor rutrum nisi, ac sodales nunc eros porta nisi. Sed scelerisque, est eget aliquam venenatis, est sem tempor eros."
  },
  {
    name: "Jacob Jones",
    date: "20 Apr, 2021",
    text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
  },
  {
    name: "Jane Cooper",
    date: "18 Apr, 2021",
    text: "Pellentesque feugiat, nibh vel vehicula pretium, nibh nibh bibendum elit, a volutpat arcu dui nec orci. Aenean dui odio, ullamcorper quis turpis ac, volutpat imperdiet ex."
  },
  {
    name: "Darrell Steward",
    date: "7 Apr, 2021",
    text: "Nulla molestie interdum ultricies."
  }
];

export const Gallery = blogData.slice(0, 8);
 export const resentlyAdded = blogData.slice(blogData.length - 3, blogData.length);