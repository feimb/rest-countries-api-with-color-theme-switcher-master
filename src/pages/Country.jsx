import MainLayout from "../components/layout/MainLayout";
import { useParams } from "react-router-dom";
const Country = () => {
    const { name } = useParams();

    return (
        <MainLayout>
            <p className="">uwu</p>
        </MainLayout>
    );
};
export default Country;
