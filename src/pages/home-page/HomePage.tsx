import { PageWrapper } from "App.styled";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const HomePage: React.FC = () => {
	return (
		<div>
			<Helmet>
				<h1>главная - MW Marketplace</h1>
			</Helmet>
			<PageWrapper>
				<h1>главная</h1>
			</PageWrapper>
		</div>
	);
};

export default HomePage;
