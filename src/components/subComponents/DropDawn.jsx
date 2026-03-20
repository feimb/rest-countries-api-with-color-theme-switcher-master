import { useState } from "react";

export default function Dropdown() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("Filter by Region");

    const options = [
        "All Regions",
        "Africa",
        "America",
        "Asia",
        "Europe",
        "Oceania",
    ];

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="w-full bg-el text-text font-light px-4 py-5 rounded-md flex justify-between items-center shadow-sm cursor-pointer gap-4"
            >
                {value === "All Regions" ? "Filter by Region" : value}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class={`lucide lucide-chevron-down-icon lucide-chevron-down ${open ? "rotate-180" : ""} transition-transform duration-200`} 
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>

            {open && (
                <div className="absolute mt-2 w-full bg-el rounded-md shadow-md">
                    {options.map((opt) => (
                        <div
                            key={opt}
                            onClick={() => {
                                setValue(opt);
                                setOpen(false);
                            }}
                            className="px-4 py-2 hover:brightness-90 dark:hover:backdrop-brightness-125 cursor-pointer"
                        >
                            {opt}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
