import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap"
import Nav from "./components/Nav";
<<<<<<< HEAD
import Footer from "../Footer";
=======
import Footer from "./components/Footer";
>>>>>>> 21202c43ce27463404fe4642062488033cefe8ea

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
