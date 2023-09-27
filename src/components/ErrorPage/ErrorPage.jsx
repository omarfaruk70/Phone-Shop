import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div>
            <h1>Opps!!! Something went Wrong 😎</h1>
            <Link to={'/'}>
            <button className="bg-blue-400 px-5 py-2 rounded-md">Go Home</button>
            </Link>
            </div>
        </div>
    );
};

export default ErrorPage;