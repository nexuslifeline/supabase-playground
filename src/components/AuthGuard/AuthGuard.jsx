import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { supabase } from "@/supabaseConfig";
import { useSession } from "@store/session";

const AuthGuard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { session, setSession } = useSession();

  useEffect(() => {
    // Get the current session
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setIsLoading(false);
    };

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (isLoading) return null;

  if (!session) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
export default AuthGuard;
