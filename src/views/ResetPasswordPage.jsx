import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "@components/Common/Button/Button";
import Label from "@components/Common/Label/Label";
import TextInput from "@components/Common/TextInput/TextInput";
import PasswordInput from "@components/Common/PasswordInput/PasswordInput";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // You can replace this with actual logic
    console.log("Reset email sent to:", email);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
      {/* Card */}
      <div className="w-full max-w-md p-8 text-center bg-white rounded-md shadow-md">
        <h2 className="mb-2 text-2xl font-semibold text-gray-800">
          Reset Your Password
        </h2>
        <p className="mb-6 text-sm text-gray-500">
          Type in your email and we'll send you a link to reset your password
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>Email</Label>
            <TextInput type="email" placeholder="Email" />
          </div>

          <Button type="submit" block>
            Send Reset Email
          </Button>
        </form>

        <p className="mt-6 text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-sm font-medium text-gray-800 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
