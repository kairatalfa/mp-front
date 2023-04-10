import Button from "components/button/Button";
import { colors } from "consts/colors";

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface I_ProductsDetails {
  id: number;
  slug?: string;
  imgSrc: string;
  priceRegular: number;
  priceDescounted?: number;
  title: string;
  description: string;
  hideLikes?: boolean;
}

const ProductCard: React.FC<I_ProductsDetails> = ({
  id,
  slug,
  imgSrc,
  priceRegular,
  priceDescounted,
  title,
  description,
  hideLikes = false,
}) => {
  return (
    <Wrapper>
      {!hideLikes && (
        <LikeWrapper data-product-id={id}>{/* <HearEmty /> */}</LikeWrapper>
      )}

      <Link to={`/product/${slug || id}`}>
        <Image src={imgSrc} />
      </Link>
      <PriceWrapper>
        {Number.isInteger(priceDescounted) ? (
          <>
            <PriceDiscounted>{priceDescounted} $</PriceDiscounted>
            <PriceRehularWhenDiscounted>
              {priceRegular}
            </PriceRehularWhenDiscounted>
          </>
        ) : (
          <PriceRegular />
        )}
      </PriceWrapper>

      <Title className="h4">
        <Link to={`/product/${slug || id}`}>{title}</Link>
      </Title>

      <ContainerDesc>
        <Desc>{description}</Desc>
      </ContainerDesc>
      <Button> В карзину</Button>
    </Wrapper>
  );
};

export default ProductCard;

const Wrapper = styled.div``;

const LikeWrapper = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    pointer-events: none;
  }
`;

const Image = styled.img`
  margin-bottom: 10px;
  width: 100%;
  height: 165px;
  border-radius: 4px;
  object-fit: scale-down;
`;
const PriceWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
`;
const PriceRegular = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-right: 10px;
  color: ${colors.primery};
`;

const PriceRehularWhenDiscounted = styled.div`
  text-decoration: line-through;
  color: #999;
  font-size: 15px;
`;

const PriceDiscounted = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-right: 10px;
  color: ${colors.primery};
`;

const Title = styled.h3`
  width: 200px; /* Ширина контейнера */
  overflow: hidden; /* Обрезаем содержимое, выходящее за пределы контейнера */
  white-space: nowrap; /* Запрещаем перенос строк */
  text-overflow: ellipsis; /* Вместо обрезанного текста добавляем многоточие */
  margin-bottom: 5px;
`;

const ContainerDesc = styled.div`
  width: 200px; /* Ширина контейнера */
  overflow: hidden; /* Обрезаем содержимое, выходящее за пределы контейнера */
  white-space: nowrap; /* Запрещаем перенос строк */
  text-overflow: ellipsis; /* Вместо обрезанного текста добавляем многоточие */
`;

const Desc = styled.div`
  margin: 0; /* Убираем отступы у текста */
`;
