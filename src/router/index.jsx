import { Route, BrowserRouter, Routes } from "react-router-dom";

import AuthGuard from "@components/AuthGuard/AuthGuard";
import BaseLayout from "@layout/Base";
import MainLayout from "@layout/Main";
import LoginPage from "@views/LoginPage";
import SignupPage from "@views/SignupPage";
import TimelinePage from "@views/TimelinePage";
import NotFoundPage from "@views/NotFoundPage";
import ResetPasswordPage from "@views/ResetPasswordPage";

const Index = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<BaseLayout />}>
        <Route index element={<LoginPage />} />
        <Route path={`/signup`} element={<SignupPage />} />
        <Route path={`/reset`} element={<ResetPasswordPage />} />
      </Route>
      <Route path={`/`} element={<MainLayout />}>
        <Route element={<AuthGuard />}>
          <Route path={"timeline"} element={<TimelinePage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default Index;
