import styled from "styled-components";
import Center from "./Center";
import PrimaryBtn from "./PrimaryBtn";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`;
const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 75%;
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;

export default function Featured() {
  return (
    <Bg>
      <Center>
        <Wrapper>
          <Column>
            <div>
              <Title>Racing Exhaust</Title>
              <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                facilisis ac erat sit amet aliquet. Donec maximus dolor
              </Desc>
              <button>Read more</button>
              <PrimaryBtn size="l">Add to cart</PrimaryBtn>
            </div>
          </Column>
          <Column>
            <img src="https://rezspeedmotoshop.s3.amazonaws.com/1700145206386.jpg" />
          </Column>
        </Wrapper>
      </Center>
    </Bg>
  );
}
