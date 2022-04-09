import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid #5656d8;
  border-radius: 5px;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #5656d8;
  color: white;
`;

const Newsletter = () => {
  return (
    <>
      <Container>
        <Title>Newsletter</Title>
        <Desc>Mantente actualizado de los nuevos productos</Desc>
        <InputContainer>
          <Input placeholder="Tu email" />
          <Button>
            <SendIcon />
          </Button>
        </InputContainer>
      </Container>
    </>
  );
};

export default Newsletter;
