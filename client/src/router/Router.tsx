import { Route, Routes } from "react-router-dom";
import OpeningHours from "@/pages/OpeningHours";
import AboutUsPage from "@/pages/AboutUsPage";
import Images from "@/pages/Images";
import { ROUTES } from "@/types/routerPath";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ABOUT_US} element={<AboutUsPage />} />
      <Route path={ROUTES.IMAGES} element={<Images />} />
      <Route path={ROUTES.OPENING_HOURS} element={<OpeningHours />} />
    </Routes>
  );
};

export default Router;
