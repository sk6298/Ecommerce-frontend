import styled from "styled-components";
import { popularProducts } from "../assets/mock-data/data";
import Product from "./Product";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product key={item.id} item={item}></Product>
      ))}
    </Container>
  );
};

export default Products;
