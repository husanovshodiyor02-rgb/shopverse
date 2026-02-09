import Link from "next/link";


const Footer = () => {
  return (
    <footer className="container1">
      <div className="flex flex-col md:flex-row justify-between my-10">
        <div>
          <a href="/">
            <img src="/logo.png" alt="" className="w-30" />
          </a>

          <p className="py-10">@ 2024 Shopverse All Rights Reserved</p>

          <div className="flex items-center gap-2 pb-5">
            <div className="p-1 rounded-full border">
              <a href="https://www.facebook.com/">
                <img className="w-5 h-5" src="/fe.png" alt="" />
              </a>
            </div>
            <div className="p-1 rounded-full border">
              <a href="https://www.instagram.com/">
                <img className="w-5 h-5" src="/in.png" alt="" />
              </a>
            </div>
            <div className="p-1 rounded-full border">
              <a href="https://x.com/">
                <img className="w-5 h-5" src="/tw.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-15">
          <div className="flex flex-col gap-2 text-end">
            <h2 className="font-medium text-xl text-black">Download</h2>
            <Link className="font-light text-lg text-right text-black" href={"https://www.microsoft.com/en-us/windows?r=1"}>
              Windows
            </Link>
            <Link className="font-light text-lg text-right text-black" href={"https://www.apple.com/os/macos/"}>Mac OS</Link>
            <Link className="font-light text-lg text-right text-black" href={"https://www.android.com/"}>Android</Link>
            <Link className="font-light text-lg text-right text-black" href={"https://www.apple.com/os/ios/"}>iOS</Link>
          </div>
          <div className="flex flex-col gap-2 text-end">
            <h2 className="font-medium text-xl text-black">Resources</h2>
            <Link
              className="font-light text-lg text-right text-black"
              href={"/"}
            >
              About
            </Link>
            <Link
              className="font-light text-lg text-right text-black"
              href={"/shop"}
            >
              Shop
            </Link>
            <Link
              className="font-light text-lg text-right text-black"
              href={"/categories"}
            >
              Categories
            </Link>
            <Link
              className="font-light text-lg text-right text-black"
              href={"/help"}
            >
              Help
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer