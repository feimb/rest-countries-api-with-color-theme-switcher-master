import MainLayout from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    return(
        <MainLayout>
            <p className="">uwu</p>
            <button
                onClick={() => navigate("/country/argentina")}
            >dajdld</button>
        </MainLayout>
    )
};
export default Home;