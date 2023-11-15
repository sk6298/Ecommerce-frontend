import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import styled from "styled-components";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { mobile } from "../../responsive";
const Container = styled.div`
  display: flex;

  ${mobile({
    flexDirection:"column"
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-size: 40px;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.bg};

  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({
    display:'none'
  })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({
    backgroundColor: "#eee",
  })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>DUKAN.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          fugiat architecto ut! Aperiam delectus sit unde sapiente obcaecati!
          Magnam odit consequatur quidem. Nihil, dolores nam neque at dicta rem
          nostrum.
        </Desc>
        <SocialContainer>
          <SocialIcon bg="blue">
            <Facebook></Facebook>
          </SocialIcon>
          <SocialIcon bg="pink">
            <Instagram></Instagram>
          </SocialIcon>
          <SocialIcon bg="green">
            <WhatsApp></WhatsApp>
          </SocialIcon>
          <SocialIcon bg="skyblue">
            <Twitter></Twitter>
          </SocialIcon>
          <SocialIcon bg="red">
            <Pinterest></Pinterest>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: "10px" }} /> Lorem ipsum dolor sit
          amet consectetur.Pune
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} /> +91 12345 12345
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{ marginRight: "10px" }} /> dukan@support.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
      </Right>
    </Container>
  );
};

export default Footer;
