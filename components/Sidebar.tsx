import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import Category from "./Category";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const { categories } = useQuiosco();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center py-2 mb-2">
        <Image width={300} height={100} src={"/assets/img/logo.svg"} alt="Logo" className="w-full object-contain" />

        <button type="button" className="md:hidden mr-2" onClick={() => setOpen(!open)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <div className={`${open ? "block" : "relative overflow-x-hidden transition-all duration-500"}`}>
        <nav
          className={`${
            open ? "right-2 top-20" : "translate-x-[300%] md:block"
          } transition-all md:relative w-auto z-10 bg-white absolute`}
        >
          {categories.map((category) => (
            <Category key={category.id} category={category} closeNavMobile={() => setOpen(false)} />
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
