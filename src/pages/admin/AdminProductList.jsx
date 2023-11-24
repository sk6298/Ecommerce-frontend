import styled from "styled-components";
import Navbar from "../../components/Navbar";

const Container = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #dcd5d56e;
`;

const Wrapper = styled.div`
  display: flex;
  width: 80vw;
  justify-content: center;
  box-shadow: 0 0 4px #dfd0d0;
  border-radius: 8px;
  background: white;
`;

const AdminProductList = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper></Wrapper>
      </Container>
    </>
  );
};

export default AdminProductList;
