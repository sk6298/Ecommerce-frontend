/* eslint-disable no-unused-vars */
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/userSlice";

const Container = styled.div`
  height: 60px;
  ${mobile({
    height: "50px",
  })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({
    padding: "10px 0",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;

  ${mobile({
    width: "50px",
  })}
`;
const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;

  ${mobile({
    fontSize: "24px",
  })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({
    justifyContent: "center",
    flex: 2,
  })}
`;

const MenuItem = styled.div`
  cursor: pointer;
  font-size: 14px;
  margin-left: 25px;
  ${mobile({
    fontSize: "10px",
    marginLeft: "10px",
  })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input type="text" placeholder="Search" />
            <Search
              style={{
                color: "gray",
                fontSize: 16,
              }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>DUKAN.</Logo>
        </Center>
        <Right>
          {user ? (
            <>
              <MenuItem onClick={handleLogout}>LOG OUT</MenuItem>
              <MenuItem>
                <Link to={"/cart"}>
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </Link>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem>
                <Link to="/register">REGISTER</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/login">LOGIN</Link>
              </MenuItem>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
