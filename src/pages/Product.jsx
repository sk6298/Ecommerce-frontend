import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { mobile } from "../../responsive";
const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 50px;

  ${mobile({
    flexDirection:"column",
    padding:"10px"
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
    height:"40vh"
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;

  ${mobile({
    padding: "10px"
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
    width: "100%"
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
    width: "100%"
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
  return (
    <Container>
      <Navbar></Navbar>
      <Annoucement></Annoucement>
      <Wrapper>
        <ImgContainer>
          <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"></Image>
        </ImgContainer>
        <InfoContainer>
          <Title>Cool T shirt</Title>
          <Desc>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            adipisci voluptas eius minima nemo molestias dicta aliquam dolorum
            veritatis maiores.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="white" />
              <FilterColor color="darkblue" />
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>2</Amount>
              <AddIcon />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </Container>
  );
};

export default Product;
