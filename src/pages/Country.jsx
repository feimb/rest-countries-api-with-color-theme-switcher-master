import { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { Link, useParams } from "react-router-dom";
import { getCountryByCode } from "../api/countries";
import Skeleton from "react-loading-skeleton";
import CountryInfo from "../components/CountryInfo";
import CountryInfoSkeleton from "../components/skeleton/CountryInfoSkeleton";
const Country = () => {
    const [country, setCountry] = useState(null);

    //     const leftInfo = [
    //     { label: "Native Name", content: Object.values(country.name.nativeName)[0].common },
    //     { label: "Population", content: country.population },
    //     { label: "Region", content: country.region },
    //     { label: "Sub Region", content: country.subregion },
    //     { label: "Capital", content: country.capital },
    // ];
    // const rightInfo = [
    // { label: "Top Level Domain", content: country.tld },
    // { label: "Curriencies", content: country.population },
    // { label: "Region", content: country.region },
    // { label: "Sub Region", content: country.subregion },
    // ];
    const { code } = useParams();
    useEffect(() => {
        async function fetchCountry() {
            try {
                const data = await getCountryByCode(code);

                setCountry(data[0]);

                console.log(data[0]);
            } catch (err) {
                console.error(err);
            }
        }
        fetchCountry();
    }, [code]);
    const borders = country?.borders || [];
    console.log(country);
    console.log(country?.borders);
    return (
        <MainLayout py="py-16">
            <Link
                to={"/"}
                className="mb-10 px-8 py-2 bg-el max-w-min rounded shadow-2xl text-text flex items-start gap-3 hover:opacity-80 transition"
            >
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
                    class="lucide lucide-move-left-icon lucide-move-left"
                >
                    <path d="M6 8L2 12L6 16" />
                    <path d="M2 12H22" />
                </svg>
                Back
            </Link>
            {!country ? (
                <CountryInfoSkeleton />
            ) : (
                <CountryInfo country={country} borders={borders} code={code} />
            )}
        </MainLayout>
    );
};
export default Country;
