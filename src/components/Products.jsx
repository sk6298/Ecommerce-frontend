/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { popularProducts } from "../assets/mock-data/data";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";
import { publicReqest, userRequest } from "../../requestMethods";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({cat,sort,filters}) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(()=> {
    const getProducts = async() => {
      try {
        const url = cat ? `/products?category=${cat}` : "/products"
        const res = await userRequest.get(url);
        console.log("Response :", res)
        setProducts(res.data);
      } catch (error) {
        console.log("Failed API call",error);
        setProducts(popularProducts);//TODO: remove later
      }
    }
    getProducts()
  },[cat]);

  useEffect(()=> {
    cat && setFilteredProducts(
      products.filter(item => {
        return Object.entries(filters).every(([key,value]) => {
          item[key].includes(value);
        })
      })
    )
  },[cat,filters,products])

  useEffect(() => {
    if (sort == "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort == "asc"){
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort == "desc"){
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => (
            <Product key={item._id} item={item}></Product>
          ))
        : products.slice(0,8).map((item) => <Product key={item.id} item={item}></Product>)}
    </Container>
  );
};

export default Products;
