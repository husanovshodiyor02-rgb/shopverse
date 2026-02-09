

const Showcase = () => {
  return (
    <section className="container1">
      <div className="w-full h-auto rounded-[51px] bg-[url('/img1.png')] bg-cover bg-center px-7 py-15 sm:py-25 mt-2 sm:mt-5">
        <p className="font-normal text-xl uppercase text-white">
          Sale up to 20% off
        </p>
        <h1 className="font-bold text-[34px] text-white my-7">
          Apple Watch Ultra 2
        </h1>
        <p className="font-light text-[18px] text-white">
          The most rugged and capable Apple Watch pushes <br /> the limits
          again. Featuring the all-new S9 SiP.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 mt-5">
          <button className="w-35.5 h-9.5 px-3.75 py-0.5 rounded-[35px] bg-[#d75300] font-normal text-[18px] text-white">
            Shop Now
          </button>
          <button className="w-38.5 h-9.5 px-3.75 py-0.5 rounded-[35px] bg-white">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Showcase