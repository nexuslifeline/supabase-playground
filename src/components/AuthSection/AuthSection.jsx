import { Link } from "react-router-dom";

import UserPhoto from "@components/UserPhoto/UserPhoto";
import ProfilePhoto from "@assets/profile.jpeg";

const AuthSection = ({ children, title, description }) => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="flex w-full max-w-4xl overflow-hidden bg-white rounded-lg shadow-md">
        {/* Left: Form Section */}
        <div className="w-full px-10 py-10 md:w-1/2">
          {title && (
            <h2 className="mb-1 text-2xl font-bold text-gray-800">{title}</h2>
          )}
          {description && (
            <p className="mb-4 text-sm text-gray-500">{description}</p>
          )}

          {children}

          <p className="mt-4 text-xs text-gray-400">
            By signing up, you agree to our{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        {/* Right: Testimonial or Info Section */}
        <div className="items-center justify-center hidden p-10 bg-gray-100 md:flex md:w-1/2">
          <blockquote className="max-w-md text-sm text-gray-700">
            <p className="mb-4 italic">
              “<span className="font-semibold">LegacyApp</span> helped me
              rediscover stories I thought were lost. The experience has been
              nothing short of magical.”
            </p>
            <footer className="flex items-center gap-2">
              <UserPhoto src={ProfilePhoto} size="w-8 h-8" />
              <span className="text-xs font-medium text-gray-500">
                @johndoe
              </span>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default AuthSection;
