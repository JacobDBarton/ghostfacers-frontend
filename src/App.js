import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap"
import Nav from "./components/Nav";

function App() {
  return (
    <Container bg="dark">
      <Nav />
      <Outlet />
    </Container>
  );
}
export default App;
