import { PageWrapper } from "App.styled";
import ProductCard from "blocks/ProductCard/ProductCard";
import { productsData } from "pages/productArray";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const HomePage: React.FC = () => {
	return (
		<>
			<Helmet>
				<h1>главная - MW Marketplace</h1>
			</Helmet>

			<PageWrapper>
				<ProductGroup>
					<h1>Рекаминдуется товары</h1>

					<ProcictGroupContainer>
						{productsData.map((product) => (
							<ProductCard {...product} key={product.id} />
						))}
					</ProcictGroupContainer>
				</ProductGroup>
			</PageWrapper>
		</>
	);
};

export default HomePage;

const ProductGroup = styled.div`
	margin-top: 20px;

	> *:first-child {
		margin-bottom: 10px;
	}
`;

const ProcictGroupContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
	> * {
		width: 15.555555;
		margin-bottom: 20px;
	}
`;
