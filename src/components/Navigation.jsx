import styled from "styled-components";

function Navigation() {
  return (
    <Wrapper>
      <h1>Blogify🚀</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #23001e;
  color: #f3e0ec;
  padding: 1.5rem 5rem;

  & > h1 {
    margin: 0px;
  }
`;

export default Navigation;
