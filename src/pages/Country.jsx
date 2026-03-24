import { useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import { useLocation } from "react-router-dom";
const Country = () => {
    const location = useLocation()
    useEffect(()=>{
        console.log(location)
    },[])
    return (
        <MainLayout>
            
        </MainLayout>
    );
};
export default Country;
