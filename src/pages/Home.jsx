import MainLayout from "../components/layout/MainLayout";
import NavBar from "../components/NavBar";
import CardCountry from "../components/CardCountry";
import { getAllCountry } from "../api/countries";
import { useState, useEffect } from "react";
const Home = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("");
    useEffect(() => {
        const fetchContries = async () => {
            try {
                const data = await getAllCountry();
                setCountries(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchContries();
    }, []);

    const filterCountries = countries.filter((c) => {
        const texto = search.toLowerCase()
        return (
        
        (region === "" || c.region === region ) && c.name.common.toLowerCase().includes(texto)
    ) 
    });
    return (
        <MainLayout>
            <NavBar setSearch={setSearch} setRegion={setRegion}/>
            <section className=" pt-7 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-18 place-items-center">
                {/* <CardCountry
                    src="https://flagcdn.com/w320/de.png"
                    name="Gearmany"
                    region="Europa"
                    capital="Bearlin"
                    population="81,770,900" 
                /> */}
                {filterCountries.map((country) => {
                    return (
                        <CardCountry
                            src={country.flags.png}
                            alt={country.flags.alt}
                            name={country.name.common}
                            region={country.region}
                            capital={country.capital?.[0] || "No capital"}
                            population={country.population}
                            link={country.cca2}
                            key={country.cca2}
                        />
                    );
                })}
            </section>
        </MainLayout>
    );
};
export default Home;
