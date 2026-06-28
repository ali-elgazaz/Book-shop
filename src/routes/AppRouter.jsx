import { Route, Routes } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import App from "../App";
import BooksPage from "../pages/BooksPage";
import AboutPage from "../pages/AboutPage";
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignUpPage";
import ForgetPasPage from "../pages/ForgetPasPage";
import ResetCodePage from "../pages/ResetCodePage";
import ResetPassPage from "../pages/ResetPassPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<App />} />
          <Route path="books" element={<BooksPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<LogInPage />} />
          <Route path="Signup" element={<SignUpPage />} />
          <Route path="forgetPas" element={<ForgetPasPage />} />
          <Route path="reset-code" element={<ResetCodePage />} />
          <Route path="reset-password" element={<ResetPassPage />} />
        </Route>
        <Route path="*" element={<h2>Not found page</h2>} />
      </Routes>
    </>
  );
};

export default AppRouter;
