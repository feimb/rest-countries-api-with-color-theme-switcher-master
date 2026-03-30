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
        <MainLayout>
            <Link to={"/"}>Back</Link>
            {country && (
                <div>
                    <img src={country.flags.png} alt={country.flags.alt} />
                    <div>
                        <h3>{country.name.common}</h3>
                        <div className="font-extralight text-sm">
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
                                        content: Object.values(country.currencies).map((cur)=> cur.name).join(", ")
                                    },
                                    {
                                        label: "Languages",
                                        content: Object.values(country.languages).join(", ")
                                    }
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
