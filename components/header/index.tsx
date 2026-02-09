"use client";
import { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingBag, Menu, X } from "lucide-react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="container1 flex items-center justify-between">
        <div className="py-3">
          <a href="/">
            <img src="/logo.png" alt="" className="w-30" />
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-10 font-normal text-[20px] text-center text-black">
          <Link href={"/"}>About</Link>
          <Link href={"/shop"}>Shop</Link>
          <Link href={"/categories"}>Categories</Link>
          <Link href={"/help"}>Help</Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 w-56 py-1.5 px-5 rounded-[54px] bg-[#d9d9d9]">
            <div className="cursor-pointer">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input type="text" placeholder="Search for “Phones”" />
          </div>
          <Heart className="cursor-pointer" />
          <ShoppingBag className="cursor-pointer" />

          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 p-4 font-medium text-lg">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/shop" onClick={() => setMenuOpen(false)}>
                Shop
              </Link>
            </li>
            <li>
              <Link href="/categories" onClick={() => setMenuOpen(false)}>
                Categories
              </Link>
            </li>
            <li>
              <Link href="/help" onClick={() => setMenuOpen(false)}>
                Help
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;
