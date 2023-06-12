import { Outlet } from "react-router-dom";
import NavBar from "./templates/NavBar";

function App() {
    return (
        <>
            <NavBar />;
            <Outlet />
        </>
    );
}

export default App;
