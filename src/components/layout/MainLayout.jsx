import Header from "../Header";

const MainLayout = ({ py = "7",children }) => {
    return (
        <>
            <Header />
            <main className={`px-20 py-${py} text-text`}>{children}</main>
        </>
    );
};
export default MainLayout;
