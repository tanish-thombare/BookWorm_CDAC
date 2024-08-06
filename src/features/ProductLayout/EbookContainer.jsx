import styled from "styled-components";
import EbookProduct from "./EbookProduct";

export default function EbookContainer({ arr }) {
  return (
    <ProductBoxContainer>
      {arr
        .filter((product, index) => index < 4)
        .map((product, index) => (
          <EbookProduct key={index} product={product} />
        ))}
    </ProductBoxContainer>
  );
}

const ProductBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  column-gap: 100px;
  margin-left: 10px;
`;
