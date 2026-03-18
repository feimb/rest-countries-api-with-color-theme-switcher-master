import { useState } from "react";
import { useDark } from "../hooks/useDark";
const Header = () => {
    const [dark, setDark] = useDark();

    return (
        <header className=" py-6 px-4  sm:px-19 bg-el flex items-center justify-between shadow">
            <h1 className="text-text sm:text-2xl font-extrabold">
                Where in the world?
            </h1>
            <button
                className=" text-text flex items-center gap-2 cursor-pointer   px-1 py-0.5 border rounded-lg border-transparent hover:border-text-secondary"
                onClick={() => setDark((prev) => !prev)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill={dark ? "currentColor" : "none"}
                    stroke={dark ? "none" : "currentColor"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-moon-icon lucide-moon"
                >
                    <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
                </svg>
                <p className="font-nunito text-sm font-semibold">Dark Mode</p>
            </button>
        </header>
    );
};
export default Header;
