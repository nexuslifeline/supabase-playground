import { useState } from "react";
import { Link } from "react-router-dom";

import AuthSection from "@components/AuthSection/AuthSection";
import Button from "@components/Common/Button/Button";
import Label from "@components/Common/Label/Label";
import TextInput from "@components/Common/TextInput/TextInput";
import PasswordInput from "@components/Common/PasswordInput/PasswordInput";

import { IoLogoGoogle } from "react-icons/io";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthSection>
      <h2 className="mb-1 text-2xl font-bold text-gray-800">
        Create an Account
      </h2>
      <p className="mb-6 text-sm text-gray-500">
        Start your journey with us today.
      </p>
      <Button variant="secondary" block>
        <IoLogoGoogle className="w-5 h-5" />
        Sign up with Google
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
          Sign up
        </Button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/" className="font-semibold hover:underline">
          Sign in now
        </Link>
      </p>
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
    </AuthSection>
  );
};

export default SignUpPage;
