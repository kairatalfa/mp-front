import { AppStyles, Footer } from "App.styled";
import { FOOTER_HIGHT } from "consts";
import { colors } from "consts/colors";
import Header from "features/header/Header";
import React, { Suspense } from "react";
import PrivateRoutes from "routes/PrivateRoutes";
import PublicRoutes from "routes/PublicRoutes";
import styled from "styled-components";

const App = () => {
	return (
		<>
			<AppStyles />

			<Header />

			<Suspense fallback={"Loading"}>
				<PublicRoutes />
				<PrivateRoutes />
			</Suspense>
			<Footer>
				<div>Маркетплейс MW</div>
			</Footer>
		</>
	);
};

export default App;
