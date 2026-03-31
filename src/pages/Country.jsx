import { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { useLocation, Link, useParams } from "react-router-dom";
import { getCountryByCode } from "../api/countries";
import InfoText from "../components/subComponents/InfoText";
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

    return (
        <MainLayout py="py-16">
            <Link
                to={"/"}
                className="px-8 py-2 bg-el max-w-min rounded shadow-2xl text-text flex items-start gap-3 hover:opacity-80 transition"
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
            {country && (
                <div className="mt-10 flex flex-col lg:flex-row gap-12 items-start ">
                    <img
                        src={country.flags.svg}
                        alt={country.flags.alt}
                        className="w-full max-w-lg shadow-lg"
                    />
                    <div className="flex-1 p-6">
                        <h3 className="text-3xl font-bold mb-6">{country.name.common}</h3>
                        <div className=" font-extralight text-sm flex">
                            <div>   
                                {[
                                    {
                                        label: "Native Name",
                                        content: Object.values(
                                            country.name.nativeName,
                                        )[0].common,
                                    },
                                    {
                                        label: "Population",
                                        content: country.population,
                                    },
                                    {
                                        label: "Region",
                                        content: country.region,
                                    },
                                    {
                                        label: "Sub Region",
                                        content: country.subregion,
                                    },
                                    {
                                        label: "Capital",
                                        content: country.capital,
                                    },
                                ].map((item) => (
                                    <InfoText
                                        label={item.label}
                                        content={item.content}
                                    />
                                ))}
                            </div>
                            <div>
                                {[
                                    {
                                        label: "Top Level Domain",
                                        content: country.tld[0],
                                    },
                                    {
                                        label: "Currencies",
                                        content: Object.values(
                                            country.currencies,
                                        )
                                            .map((cur) => cur.name)
                                            .join(", "),
                                    },
                                    {
                                        label: "Languages",
                                        content: Object.values(
                                            country.languages,
                                        ).join(", "),
                                    },
                                ].map((item) => (
                                    <InfoText
                                        label={item.label}
                                        content={item.content}
                                    />
                                ))}
                            </div>
                        </div>

                        <footer>
                            <p>Border Countries:</p>
                            <div>
                                <Link></Link>
                            </div>
                        </footer>
                    </div>
                </div>
            )}
        </MainLayout>
    );
};
export default Country;
