import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const HomePage: React.FC = () => {
	return (
		<div>
			<Helmet>
				<h1>главная - MW Marketplace</h1>
			</Helmet>
			<h1>главная - MW Marketplace</h1>
			<TestD />
		</div>
	);
};

export default HomePage;

const TestD = styled.div`
	background-color: red;
	height: 20px;
`;
