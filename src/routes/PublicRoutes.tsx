import React from "react";
import { lazy } from "react";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import { checkPathMatch, paths } from "./helpers";

const HomePage = lazy(() => import("../pages/home-page/HomePage"));
const ProductDetailsPage = lazy(
	() => import("pages/productDetailsPage/ProductDetailsPage")
);

const PublicRoutes: React.FC = () => {
	const location = useLocation();

	const isMatch = checkPathMatch(location.pathname, paths);

	return (
		<Routes>
			<Route path={paths.home} element={<HomePage />} />
			<Route path={paths.productDetails} element={<ProductDetailsPage />} />
			<Route
				path="*"
				element={!isMatch ? <Navigate to={paths.home} /> : null}
			/>
		</Routes>
	);
};

export default PublicRoutes;
