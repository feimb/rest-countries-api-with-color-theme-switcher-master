import { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { useLocation, Link, useParams } from "react-router-dom";
import { getCountryByCode } from "../api/countries";
const Country = () => {
    const location = useLocation();
    const [country, setCountry] = useState(null);
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
                    </div>
                </div>
            )}
        </MainLayout>
    );
};
export default Country;
