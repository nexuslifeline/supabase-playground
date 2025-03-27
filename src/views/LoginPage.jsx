import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { supabase } from "@/supabaseConfig";
import Button from "@components/Common/Button/Button";
import Label from "@components/Common/Label/Label";
import TextInput from "@components/Common/TextInput/TextInput";
import PasswordInput from "@components/Common/PasswordInput/PasswordInput";
import AuthSection from "@components/AuthSection/AuthSection";

import { IoLogoGoogle } from "react-icons/io";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "", general: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailLogin = async e => {
    e.preventDefault();
    setError({ email: "", password: "", general: "" });
    setIsLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      const msg = error.message.toLowerCase();
      if (msg.includes("email"))
        setError(prev => ({ ...prev, email: error.message }));
      else if (msg.includes("password"))
        setError(prev => ({ ...prev, password: error.message }));
      else setError(prev => ({ ...prev, general: error.message }));
    } else {
      navigate("/timeline"); // redirect after successful login
    }

    setIsLoading(false);
  };

  const handleGoogleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/timeline`
      }
    });

    if (error) {
      setError(prev => ({ ...prev, general: error.message }));
    }
  };

  return (
    <AuthSection
      title="Welcome Back"
      description="Login to continue your journey with us."
    >
      {error.general && (
        <p className="mb-2 text-sm text-red-500">{error.general}</p>
      )}
      <Button variant="secondary" block onClick={handleGoogleLogin}>
        <IoLogoGoogle className="w-5 h-5" />
        Sign in with Google
      </Button>
      <div className="flex items-center my-4">
        <div className="flex-grow h-px bg-gray-300" />
        <span className="mx-2 text-sm text-gray-400">or</span>
        <div className="flex-grow h-px bg-gray-300" />
      </div>
      <form className="space-y-4" onSubmit={handleEmailLogin}>
        <div className="space-y-2">
          <Label>Email</Label>
          <TextInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={error.email}
          />
        </div>
        <div className="space-y-2">
          <Label>Password</Label>
          <PasswordInput
            value={password}
            onChange={e => setPassword(e.target.value)}
            error={error.password}
          />
        </div>
        <Button type="submit" block isBusy={isLoading}>
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
