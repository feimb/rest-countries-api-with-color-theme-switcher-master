const CardCountry = ({ src, name, population, region, capital }) => {
    const categories = ["Population", "Region", "Capital"];
    const categoriesContent = {
        Population: population,
        Region: region,
        Capital: capital,
    };
    return (
        <div className="bg-el w-[266px]">
            <img src={src} alt="" className="h-39 w-full" />
            <footer className="p-6 pb-9 font-extralight text-sm">
                <h2 className="text-lg font-bold mb-3">{name}</h2>
                {categories.map((cat) => {
                    return (
                        <p className="text-text">
                            <span className="text-text font-normal">{cat}: </span>
                            {categoriesContent[cat]}
                        </p>
                    );
                })}
            </footer>
        </div>
    );
};
export default CardCountry;
