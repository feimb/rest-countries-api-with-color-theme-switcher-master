import DropDawn from "./subComponents/DropDawn";
const NavBar = () => {
    return (
        <nav className="flex align-items-center justify-between gap-4  ">
            <div className="w-full max-w-md px-8 py-5 bg-el shadow-md flex items-center gap-4 rounded-md ">
                <label htmlFor="searchBar">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-search-icon lucide-search"
                    >
                        <path d="m21 21-4.34-4.34" />
                        <circle cx="11" cy="11" r="8" />
                    </svg>
                </label>

                <input
                    className="outline-none text-sm font-light font-nunito w-full"
                    type="text"
                    id="searchBar"
                    autocomplete="off"
                    placeholder="Search for Country..."
                />
            </div>
            {/* <div className="relative">
                <select
                    defaultValue=""
                    className="appearance-none bg-el px-8 py-5 rounded-md outline-none cursor-pointer putline-none text-sm font-light border-none  focus:outline-none focus:ring-0 focus:border-none"
                >
                    <option value="" disabled hidden>
                        Filter by Region
                    </option>
                    <option value="">All Regions</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-chevron-down-icon lucide-chevron-down"
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </div>
            </div> */}
            <DropDawn />
        </nav>
    );
};
export default NavBar;
