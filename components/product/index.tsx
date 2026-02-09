
import { MoveRight } from "lucide-react";


interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number; 
  image: string;
}


const products: Product[] = [
  {
    id: 1,
    name: "Magnetic Case",
    price: 13.49,
    originalPrice: 18.99,
    rating: 4.5,
    image: "/p1.png", 
  },
  {
    id: 2,
    name: "UCOMX Nano 3 in 1",
    price: 39.99,
    originalPrice: 49.99,
    rating: 4,
    image: "/p2.png",
  },
  {
    id: 3,
    name: "NB Fresh Foam",
    price: 71.99,
    originalPrice: 81.99,
    rating: 4.5,
    image: "/p3.png",
  },
  {
    id: 4,
    name: "Bose QuietComfort",
    price: 379.0,
    originalPrice: 429.0,
    rating: 5,
    image: "/p4.png",
  },
  {
    id: 5,
    name: "BUGANI BT Speaker",
    price: 59.93,
    originalPrice: 129.98,
    rating: 4,
    image: "/p5.png",
  },
  {
    id: 6,
    name: "Galaxy Tab A9+",
    price: 169.99,
    originalPrice: 219.99,
    rating: 4.5,
    image: "/p6.png",
  },
  {
    id: 7,
    name: "Acer Aspire 1",
    price: 228.27,
    originalPrice: 300.0,
    rating: 4,
    image: "/p7.png",
  },
  {
    id: 8,
    name: "Redragon M810",
    price: 32.99,
    originalPrice: 39.99,
    rating: 4.5,
    image: "/p8.png",
  },
];


const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex justify-center gap-1 mb-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={star <= rating ? "#FFD700" : "#E5E7EB"}
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
};

export default function PopularProducts() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto font-sans">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-medium text-[30px] text-black">Popular Products</h2>
        <div className="flex items-center gap-2">
          <h2 className="font-normal text-[16px] sm:text-[20px] underline text-black">
            Show More
          </h2>
          <MoveRight />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#F9F9F9] rounded-3xl p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-gray-200"
          >
            <div className="relative w-full h-40 mb-4">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain h-full w-auto max-w-full mix-blend-multiply"
                />
              </div>
            </div>

            <StarRating rating={product.rating} />

            <h3 className="font-bold text-gray-900 text-center text-lg mb-1">
              {product.name}
            </h3>

            <div className="flex items-center gap-2">
              <span className="text-[#D9531E] font-bold text-lg">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-gray-400 text-sm line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
