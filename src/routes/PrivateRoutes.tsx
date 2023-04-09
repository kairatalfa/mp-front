import React, { lazy } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { checkPathMatch, paths } from "./helpers";

const AccountSettingPage = lazy(
	() => import("../pages/accountSettingPage/AccountSettingPage")
);
const PrivateRoutes: React.FC = () => {
	const location = useLocation();

	const isMatch = checkPathMatch(location.pathname, paths);
	return (
		<Routes>
			<Route path={paths.accountSetting} element={<AccountSettingPage />} />
			<Route
				path="*"
				element={!isMatch ? <Navigate to={paths.home} /> : null}
			/>
		</Routes>
	);
};

export default PrivateRoutes;
