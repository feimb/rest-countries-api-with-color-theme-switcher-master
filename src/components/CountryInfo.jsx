import { Link } from "react-router-dom";
import InfoText from "./subComponents/InfoText";
const CountryInfo = ({ country, borders, code }) => {
    return (
        <div className=" flex flex-col lg:flex-row gap-12 items-start ">
            <img
                src={country.flags.svg}
                alt={country.flags.alt}
                className="w-full max-w-lg shadow-lg"
            />
            <div className="flex-1 p-6 ">
                <h3 className="text-3xl font-bold mb-6">
                    {country.name.common}
                </h3>
                <div className="md:flex font-extralight text-sm  items-baseline gap-20">
                    <div className="">
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
                                style={"mt-2"}
                            />
                        ))}
                    </div>
                    <div className="mt-10 md:mt-0">
                        {[
                            {
                                label: "Top Level Domain",
                                content: country.tld[0],
                            },
                            {
                                label: "Currencies",
                                content: Object.values(country.currencies)
                                    .map((cur) => cur.name)
                                    .join(", "),
                            },
                            {
                                label: "Languages",
                                content: Object.values(country.languages).join(
                                    ", ",
                                ),
                            },
                        ].map((item) => (
                            <InfoText
                                label={item.label}
                                content={item.content}
                                style={"mt-2"}
                            />
                        ))}
                    </div>
                </div>

                <footer className="mt-8  md:flex gap-2 items-baseline">
                    <p className="">Border Countries:</p>
                    <div className="mt-4 md:mt-0 flex gap-2  flex-wrap">
                        {borders.length > 0 ? (
                            borders.map((code) => (
                                <Link
                                    className="bg-el px-4 py-2 text-text font-light shadow rounded-xs"
                                    to={`/${code}`}
                                >
                                    {code}
                                </Link>
                            ))
                        ) : (
                            <span>No border countries</span>
                        )}
                    </div>
                </footer>
            </div>
        </div>
    );
};
export default CountryInfo;