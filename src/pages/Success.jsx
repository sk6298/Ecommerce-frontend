/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { userRequest } from "../../requestMethods";

const Container = styled.div`
  height: "100vh";
  display: "flex";
  flex-direction: "column";
  align-items: "center";
  justify-content: "center";
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 20px;
`;
const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state && location.state.stripeData || null;
  const cart = location.state && location.state.cart || null;
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: "",
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item.quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch (error) {
        console.log(error);
      }
    };

    data && console.info("Creating order ....");
    // createOrder();
  }, [cart, data, orderId]);

  return (
    <Container>
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <Button onClick={() => navigate("/")}>Go to Homepage</Button>
    </Container>
  );
};

export default Success;
