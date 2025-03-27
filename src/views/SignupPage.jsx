import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseConfig";

import AuthSection from "@components/AuthSection/AuthSection";
import Button from "@components/Common/Button/Button";
import Label from "@components/Common/Label/Label";
import TextInput from "@components/Common/TextInput/TextInput";
import PasswordInput from "@components/Common/PasswordInput/PasswordInput";

import { IoLogoGoogle } from "react-icons/io";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isBusy, setIsBusy] = useState(false);
  const [message, setMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    return newErrors;
  };

  const handleSignUp = async e => {
    e.preventDefault();
    setMessage("");
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsBusy(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setIsBusy(false);

    if (error) {
      setMessage(`❌ ${error.message}`);
    } else {
      setMessage("✅ Registration successful! Please check your email.");
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: window.location.origin
        }
      });
    } catch (error) {
      console.error("Google Sign-in Error:", error);
      setMessage(`❌ ${error.message || "Google sign-in failed."}`);
    }
  };

  return (
    <AuthSection
      title="Create an Account"
      description="Start your journey with us today."
    >
      <Button variant="secondary" block onClick={handleGoogleSignUp}>
        <IoLogoGoogle className="w-5 h-5" />
        Sign up with Google
      </Button>

      <div className="flex items-center my-4">
        <div className="flex-grow h-px bg-gray-300" />
        <span className="mx-2 text-sm text-gray-400">or</span>
        <div className="flex-grow h-px bg-gray-300" />
      </div>

      <form className="space-y-4" onSubmit={handleSignUp}>
        <div className="space-y-2">
          <Label>Email</Label>
          <TextInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={errors.email}
          />
        </div>

        <div className="space-y-2">
          <Label>Password</Label>
          <PasswordInput
            value={password}
            onChange={e => setPassword(e.target.value)}
            error={errors.password}
          />
        </div>

        <Button type="submit" block isBusy={isBusy}>
          Sign up
        </Button>
      </form>

      {message && (
        <p className="mt-4 text-sm text-center text-gray-700">{message}</p>
      )}

      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/" className="font-semibold hover:underline">
          Sign in now
        </Link>
      </p>
    </AuthSection>
  );
};

export default SignUpPage;
