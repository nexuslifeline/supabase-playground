import { Link } from "react-router-dom";

import Button from "@components/Common/Button/Button";
import Label from "@components/Common/Label/Label";
import TextInput from "@components/Common/TextInput/TextInput";
import PasswordInput from "@components/Common/PasswordInput/PasswordInput";
import AuthSection from "@components/AuthSection/AuthSection";

import { IoLogoGoogle } from "react-icons/io";

const LoginPage = () => {
  return (
    <AuthSection>
      <h2 className="mb-1 text-2xl font-bold text-gray-800">Welcome Back</h2>
      <p className="mb-6 text-sm text-gray-500">
        Login to continue your journey with us.
      </p>
      <Button variant="secondary" block>
        <IoLogoGoogle className="w-5 h-5" />
        Sign in with Google
      </Button>
      <div className="flex items-center my-4">
        <div className="flex-grow h-px bg-gray-300" />
        <span className="mx-2 text-sm text-gray-400">or</span>
        <div className="flex-grow h-px bg-gray-300" />
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label>Email</Label>
          <TextInput type="email" placeholder="Email" />
        </div>
        <div className="space-y-2">
          <Label>Password</Label>
          <PasswordInput />
        </div>
        <Button type="submit" block>
          Sign in
        </Button>
      </form>
      <div className="flex justify-between mt-4 text-sm text-gray-600">
        <Link to="/reset" className="hover:underline">
          Forgot Password?
        </Link>
        <Link to="/signup" className="hover:underline">
          Create an Account
        </Link>
      </div>
    </AuthSection>
  );
};

export default LoginPage;
