import { MoveRight } from "lucide-react";
import Image from "next/image";

const Tranding = () => {
  return (
    <section className="container1">
      <div className="flex flex-col sm:flex-row items-center justify-between mt-10">
        <h2 className="font-medium text-[18px] md:text-[24px] text-black">
          Trending Categories
        </h2>
        <div className="flex items-center gap-2">
          <h2 className="font-normal text-[16px] sm:text-[20px] underline text-black">
            Show More
          </h2>
          <MoveRight />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between mt-10 mx-15 sm:mx-7">
        <div>
          <img src="/tr1.png" alt="" />
          <h3 className="font-medium text-[23px] text-black text-center my-5">
            Mobiles
          </h3>
        </div>
        <div>
          <img src="/tr2.png" alt="" />
          <h3 className="font-medium text-[23px] text-black text-center my-5">
            Laptops
          </h3>
        </div>
        <div>
          <img src="/tr3.png" alt="" />
          <h3 className="font-medium text-[23px] text-black text-center my-5">
            Headphones
          </h3>
        </div>
        <div>
          <img src="/tr4.png" alt="" />
          <h3 className="font-medium text-[23px] text-black text-center my-5">
            Monitors & TVs
          </h3>
        </div>
        <div>
          <img src="/tr5.png" alt="" />
          <h3 className="font-medium text-[23px] text-black text-center my-5">
            Speakers
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl overflow-hidden bg-gray-100 flex flex-col items-center justify-center text-center p-6">
          <h2 className="font-medium text-[37px] text-black">Nike, Adidas</h2>
          <p className="font-normal text-[20px] text-black mt-1">MIN 40% OFF</p>
          <Image
            src="/img2.png"
            alt="Nike, Adidas"
            width={390}
            height={210}
            className="mt-4"
          />
          <button className="mt-4 px-6 py-1.5 bg-orange-500 font-normal text-[16px] text-white rounded-full hover:bg-orange-600 transition">
            Shop Now
          </button>
        </div>

        <div className="rounded-xl overflow-hidden bg-gray-100 flex flex-col items-center justify-center text-center p-6">
          <h2 className="font-medium text-[37px] text-black">PlayStation 5</h2>
          <p className="font-normal text-[20px] text-black mt-1">MIN 25% OFF</p>
          <Image
            src="/img3.png"
            alt="PlayStation 5"
            width={390}
            height={210}
            className="mt-4"
          />
          <button className="mt-4 px-6 py-1.5 bg-orange-500 font-normal text-[16px] text-white rounded-full hover:bg-orange-600 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Tranding