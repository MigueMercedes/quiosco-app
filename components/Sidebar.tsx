import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useQuiosco from "../hooks/useQuiosco";
import Category from "./Category";

const Sidebar = () => {
  const { categories } = useQuiosco();
  const [open, setOpen] = useState(false);

  const openBtn = useRef<HTMLButtonElement>(null);

  const handleCloseSidebar = (e: MouseEvent) => {
    if (open && openBtn.current && !openBtn.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseSidebar);

    return () => {
      document.removeEventListener("click", handleCloseSidebar);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <>
      <div className="flex justify-between items-center py-2 mb-2">
        <Image width={300} height={100} src={"/assets/img/logo.svg"} alt="Logo" className="w-full object-contain" />

        <button ref={openBtn} type="button" className="md:hidden mr-2" onClick={() => setOpen(!open)}>
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

      <nav
        className={`${
          open ? "" : "-translate-x-[100%] md:translate-x-0"
        } fixed h-full bg-white transition-all duration-300 w-auto z-[1] md:z-0`}
      >
        {categories.map((category) => (
          <Category key={category.id} category={category} closeNavMobile={() => setOpen(false)} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
