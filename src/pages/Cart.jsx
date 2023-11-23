/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { mobile } from "../../responsive";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from 'react-stripe-checkout'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userRequest } from "../../requestMethods";

const KEY = import.meta.env.VITE_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({
    padding: "10px"
  })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;

  border: ${(props) => props.type == "filled" && "none"};
  background: ${(props) => (props.type == "filled" ? "black" : "transparent")};
  color: ${(props) => props.type == "filled" && "white"};
`;

const TopTexts = styled.div`
${mobile({
    display:"none"
  })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column"
  })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column"
  })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid gray;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({
    margin: "5px 15px"
  })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({
    marginBottom: "20px"
  })}
`;

const Hr = styled.hr`
  margin: 20px 0;
  background-color: #eee;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type == "total" && 500};
  font-size: ${(props) => props.type == "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const {products,quantity,total} = cart;
  const dispatch = useDispatch();
  const [stripeToken, setStripeToken] = useState(null)
  const navigate = useNavigate()

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {

    const makePaymentRequest = async () => {
      try {
        const res = await userRequest.post('/checkout/payment',{
          tokenId: stripeToken.id,
          amount: 10
        })
        navigate("/success", {
          state: {
            stripeData: res.data,
            cart: cart,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
    makePaymentRequest();
  },[cart.total,navigate,stripeToken])

  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Cart ({cart.quantity})</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {
              products.map(product => (
            <Product key={product._id}>
              <ProductDetail>
                <Image src={product.img} />
                <Details>
                  <ProductName>
                    <b>Product: </b>{product.title}
                  </ProductName>
                  <ProductId>
                    <b>Product ID: </b>{product._id}
                  </ProductId>
                  <ProductColor color={product.color} />
                  <ProductSize>
                    <b>Size: </b> {product.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
              </PriceDetail>
            </Product>
              ))
            }
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Sub Total</SummaryItemText>
              <SummaryItemPrice>$ {total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.2</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.2</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout 
              name="Dukan"
              image="https://img.freepik.com/free-vector/shop-with-sign-we-are-open_23-2148547718.jpg?w=1060&t=st=1700581612~exp=1700582212~hmac=942e17855e201524ed3e45606ef42ef3727bd35eb88b73777262b94f9a8b89c8https://img.freepik.com/free-vector/shop-with-sign-we-are-open_23-2148547718.jpg?w=1060&t=st=1700581612~exp=1700582212~hmac=942e17855e201524ed3e45606ef42ef3727bd35eb88b73777262b94f9a8b89c8"
              billingAddress
              shippingAddress
              description={`Your total is $ ${total}`}
              amount={total * 80}
              token={onToken}
              stripeKey={KEY}
            >
            <SummaryButton>CHECKOUT NOW</SummaryButton>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
