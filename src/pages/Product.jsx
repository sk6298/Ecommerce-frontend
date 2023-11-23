import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { mobile } from "../../responsive";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { useDispatch } from "react-redux";
import {addProduct} from '../redux/cartSlice'


const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 50px;

  ${mobile({
    flexDirection: "column",
    padding: "10px",
  })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

  ${mobile({
    height: "40vh",
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;

  ${mobile({
    padding: "10px",
  })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;

  ${mobile({
    width: "100%",
  })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid gray;
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${mobile({
    width: "100%",
  })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;
const Amount = styled.span`
  height: 30px;
  width: 30px;
  border: 1px solid teal;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const url = `/products/find/${id}`;
        const res = await userRequest.get(url);
        setProduct(res.data);
        console.log("Product data", res.data);
      } catch (error) {
        console.log("Fail to fetch product with given id", error);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type == "inc") {
      // increment
      setQuantity(quantity + 1);
    } else {
      // decrease
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  const handleCart = () => {
    // Update cart
    console.log("Color", color, "Size", size, "Quantity", quantity);
    dispatch(addProduct({...product,color,size,quantity}))

  };
  return (
    <Container>
      <Navbar></Navbar>
      <Annoucement></Annoucement>
      {product ? (
        <Wrapper>
          <ImgContainer>
            <Image src={product.img}></Image>
          </ImgContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>$ {product.price}</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                {product.colors.map((color) => (
                  <FilterColor
                    color={color}
                    key={color}
                    onClick={() => setColor(color)}
                  />
                ))}
              </Filter>

              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={(e) => setSize(e.target.value)}>
                  {product.size.map((s) => (
                    <FilterSizeOption key={s} value={s}>
                      {s}
                    </FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>
            </FilterContainer>

            <AddContainer>
              <AmountContainer>
                <RemoveIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => handleQuantity("dec")}
                />
                <Amount>{quantity}</Amount>
                <AddIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => handleQuantity("inc")}
                />
              </AmountContainer>
              <Button onClick={handleCart}>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      ) : (
        <>Oops ! No product found !</>
      )}
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </Container>
  );
};

export default Product;
