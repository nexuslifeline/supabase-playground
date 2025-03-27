import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="inline-block">
      <h1 className="text-2xl font-bold tracking-tight">LegacyApp</h1>
    </Link>
  );
};

export default Logo;
