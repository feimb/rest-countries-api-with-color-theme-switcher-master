import { useState } from "react";
import Header  from "./components/Header";
function App() {
    const [dark, setDark] = useState(false);
    function changeTheme(boolean){
        setDark(boolean)
        if (boolean){
            document.documentElement.classList.add("dark")
        }else(
            document.documentElement.classList.remove("dark")
        )
    }
    return (
        <>
            <Header />
        </>
    );
}

export default App;
