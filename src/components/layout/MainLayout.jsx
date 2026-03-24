import Header from "../Header";

const MainLayout = ({ py = "py-7",children }) => {
    return (
        <>
            <Header />
            <main className={`px-4 md:px-10 ${py} text-text`}>{children}</main>
        </>
    );
};
export default MainLayout;
