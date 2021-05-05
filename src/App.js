import styled from "styled-components";
import Navigation from "./components/Navigation";
import Posts from "./components/Posts";
function App() {
  return (
    <Wrapper className="App">
      <header className="App-header">
        <Navigation />
      </header>{" "}
      <Posts />
    </Wrapper>
  );
}
const Wrapper = styled.div``;
export default App;
