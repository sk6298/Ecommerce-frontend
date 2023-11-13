import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;
`;
const Option = styled.option``;
const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select>
            <Option disabled selected>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>Size</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
           
          </Select>
        </Filter>
      </FilterContainer>
      <Products></Products>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </Container>
  );
};

export default ProductList;
