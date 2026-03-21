import MainLayout from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import CardCountry from "../components/CardCountry";
const Home = () => {
    const navigate = useNavigate();
    return (
        <MainLayout>
            <NavBar />
            <section className=" pt-7 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-18 place-items-center">
                <CardCountry
                    src="https://flagcdn.com/w320/de.png"
                    name="Gearmany"
                    region="Europa"
                    capital="Bearlin"
                    population="81,770,900"
                />
                <CardCountry
                    src="https://flagcdn.com/w320/de.png"
                    name="Gearmany"
                    region="Europa"
                    capital="Bearlin"
                    population="81,770,900"
                />
                <CardCountry
                    src="https://flagcdn.com/w320/de.png"
                    name="Gearmany"
                    region="Europa"
                    capital="Bearlin"
                    population="81,770,900"
                />
                <CardCountry
                    src="https://flagcdn.com/w320/de.png"
                    name="Gearmany"
                    region="Europa"
                    capital="Bearlin"
                    population="81,770,900"
                />
            </section>
        </MainLayout>
    );
};
export default Home;
