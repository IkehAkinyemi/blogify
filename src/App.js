import styled from "styled-components";
import Navigation from "./components/Navigation";
import Posts from "./components/Posts";
function App() {
  return (
    <Wrapper className="App">
      <header className="App-header">
        <Navigation />
        <Posts />
      </header>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
export default App;
