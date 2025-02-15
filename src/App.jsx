import styled from "styled-components";
import {
  //   createBrowserRouter,
  //   RouterProvider,
  BrowserRouter,
  Routes,
  Route,
  //   Link,
} from "react-router-dom";
import Homepage from "./pages/Homepage"

const Container = styled.div`
  background: #F4F4FA;
  height: 120vh;
`;

function App() {
  return (
    <BrowserRouter basename="/">
      <Container>
      {/* <BrowserRouter basename=""> */}
      <Routes>
            <Route path="/">
              <Route index element={<Homepage/>}/>
              
            </Route>
          </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
