/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { mobile } from "../../responsive";

import { useParams } from "react-router-dom";
import { useState } from "react";

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
  ${mobile({
    margin:"0 20px",
    display:"flex",
    flexDirection:"column"
  })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({
    marginRight:"0"
  })}
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({
    margin: "10px 0"
  })}
`;
const Option = styled.option``;
const ProductList = () => {
  const params = useParams();
  const cat = params.category;
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest")


  const handleFilters = (e) => {
    const {value,name} = e.target;
    setFilters({
      ...filters,
      [name]:value
    })
  }
  console.log(filters)
  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option value="white">White</Option>
            <Option value="black">Black</Option>
            <Option value="red">Red</Option>
            <Option value="blue">Blue</Option>
            <Option value="green">Green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option value="S">S</Option>
            <Option value="M">M</Option>
            <Option value="L">L</Option>
            <Option value="XL">XL</Option>
            <Option value="XXL">XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select name="sort" onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
           
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}></Products>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </Container>
  );
};

export default ProductList;
