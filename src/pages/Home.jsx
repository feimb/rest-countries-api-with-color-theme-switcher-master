import MainLayout from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
const Home = () => {
    const navigate = useNavigate();
    return(
        <MainLayout>
            <NavBar />

            
        </MainLayout>
    )
};
export default Home;