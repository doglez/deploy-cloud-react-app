import NavBar from "@/templates/NavBar";
import { useRouteError } from "react-router-dom";

type Error = {
    data: string;
    status: number;
    statusText: string;
};

const ErrorPage = () => {
    const error = useRouteError() as Error;

    return (
        <>
            <NavBar />
            <div className="container">
                <div
                    id="error-page"
                    className="card"
                    style={{ width: "100%", marginTop: "100px" }}
                >
                    <div className="card-body">
                        <h5 className="card-title">Oops!</h5>
                        <p className="card-text">
                            Sorry, an unexpected error has occurred.
                            <br />
                            <span className="text-danger">{error.data}</span>
                            <br />
                            {error.status}
                            <br />
                            {error.statusText}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;
