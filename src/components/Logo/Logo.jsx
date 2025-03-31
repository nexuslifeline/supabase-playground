import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="inline-block">
      <h1 className="text-3xl font-semibold tracking-tight">
        legacy.<span className="font-bold text-blue-500">app</span>
      </h1>
    </Link>
  );
};

export default Logo;
