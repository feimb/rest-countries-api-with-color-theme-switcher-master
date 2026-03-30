import { Link } from "react-router-dom";
import InfoText from "./subComponents/InfoText";
const CardCountry = ({ src, alt, name, population, region, capital, link }) => {
    const categories = ["Population", "Region", "Capital"];
    const categoriesContent = {
        Population: population,
        Region: region,
        Capital: capital,
    };

    const baseUrl = "https://restcountries.com/v3.1/name";
    return (
        <Link className="bg-el w-[266px] shadow-md rounded-lg" to={`/${link}`}>
            <img
                src={src}
                alt={alt}
                className="h-39 w-full rounded-tl rounded-tr "
            />
            <footer className="p-6 pb-9 font-extralight text-sm">
                <h2 className="text-lg font-bold mb-3">{name}</h2>
                {categories.map((cat) => {
                    return (
                        <InfoText
                            label={cat}
                            content={categoriesContent[cat]}
                        />
                    );
                })}
            </footer>
        </Link>
    );
};
export default CardCountry;
