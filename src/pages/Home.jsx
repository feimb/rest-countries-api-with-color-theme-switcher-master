import MainLayout from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import CardCountry from "../components/CardCountry";
import { getAllCountry } from "../api/countries";
import { useState, useEffect } from "react";
const Home = () => {
    const navigate = useNavigate();
    const [countries, setCountries] = useState([]);
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

    console.log(countries);
    return (
        <MainLayout>
            <NavBar />
            <section className=" pt-7 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-18 place-items-center">
                {/* <CardCountry
                    src="https://flagcdn.com/w320/de.png"
                    name="Gearmany"
                    region="Europa"
                    capital="Bearlin"
                    population="81,770,900"
                /> */}
                {countries.map((country) => {
                    return (
                        <CardCountry
                            src={country.flags.png}
                            alt={country.flags.alt}
                            name={country.name.common}
                            region={country.region}
                            capital={country.capital?.[0] || "No capital"}
                            population={country.population}
                            key={country.cca3}
                        />
                    );
                })}
            </section>
        </MainLayout>
    );
};
export default Home;
