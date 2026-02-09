
import { MoveRight } from "lucide-react";


interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  slug: string;
}


const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Accessorize Like a Pro",
    date: "10th January 2024",
    image: "/bl1.png",
    slug: "accessorize-like-a-pro",
  },
  {
    id: 2,
    title: "10 Timeless Wardrobe Staples",
    date: "3rd February 2024",
    image: "/bl2.png", 
    slug: "timeless-wardrobe",
  },
  {
    id: 3,
    title: "The Art of Sustainable Fashion",
    date: "1st March 2024",
    image: "/bl3.png",
    slug: "sustainable-fashion",
  },
];

const Blog = () => {
  return (
    <section className=" container1">
      <div className="py-12 px-4">
        <div className="bg-[#F3F4F6] rounded-4xl p-8 md:p-16 mb-16 relative overflow-hidden flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10 flex flex-col items-start space-y-4">
            <span className="text-sm md:text-base font-semibold text-gray-800 tracking-wider uppercase">
              Galaxy Sale is live now
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
              Galaxy S24 | S24+
            </h1>
            <p className="text-gray-600 text-lg max-w-md">
              Get up to $1,000 in trade-in credit from participating carriers.
              Terms apply.
            </p>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 relative flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-100 md:h-100">
              <img
                src="/ph.png"
                alt="Galaxy S24 Phones"
                className="object-contain w-full h-full drop-shadow-xl transform md:scale-125 md:translate-x-10"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Our Blogs</h2>
            <div className="flex items-center gap-2">
              <h2 className="font-normal text-[16px] sm:text-[20px] underline text-black">
                Show More
              </h2>
              <MoveRight />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-4/3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-100 h-85 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <div className="flex justify-between items-center mt-4 border-t border-gray-100 pt-3">
                  <span className="text-gray-500 text-sm font-medium">
                    {post.date}
                  </span>
                  <p className="text-gray-900 text-sm font-semibold border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-all">
                    Read More &rarr;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Blog;