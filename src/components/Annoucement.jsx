import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;
const Annoucement = () => {
  return <Container>
    Super Deal! Free Shipping on Orders Over $100
  </Container>;
};

export default Annoucement;
