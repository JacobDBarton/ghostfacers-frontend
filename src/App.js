import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap"
import Nav from "./components/Nav";
import Footer from "./Footer";

function App() {
  return (
    <Container bg="dark">
      <Nav />
      <Outlet />
      <Footer />
    </Container>
  );
}
export default App;
