import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-50">
      <h1 className="mb-4 text-6xl font-bold text-green-600">404</h1>
      <h2 className="mb-2 text-2xl font-semibold text-gray-800">
        Page Not Found
      </h2>
      <p className="mb-6 text-gray-500">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
