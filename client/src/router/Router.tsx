import { Route, Routes } from "react-router-dom";
import Images from "../pages/Images";
import AboutUsPage from "../pages/AboutUsPage";
import OpeningHours from "../pages/OpeningHours";
import { ROUTES } from "../types/routerPath";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<AboutUsPage />} />
      <Route path={ROUTES.IMAGES} element={<Images />} />
      <Route path={ROUTES.OPENING_HOURS} element={<OpeningHours />} />
    </Routes>
  );
};

export default Router;
