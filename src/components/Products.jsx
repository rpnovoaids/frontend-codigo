import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div `
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

`;
const Title = styled.h2 `
  display: flex;
  font-size: 22px;
  text-align: left;
  margin-left: 30px;
`;



const Products = () => {
  return (

    <>
      <Title>Productos populares</Title>
      <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>

    </>

  );
};

export default Products;
