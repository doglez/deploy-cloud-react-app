import { HOST_URL } from "@/config/Constants";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img
                        src={`${HOST_URL}/img/edteam-logo.png`}
                        alt="EdTeam-logo"
                        height="32"
                        className="d-inline-block align-text-top"
                    />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="about" className="nav-link">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div style={{ marginBottom: "35px" }} />
        </>
    );
};

export default NavBar;
