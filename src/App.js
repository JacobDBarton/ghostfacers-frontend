import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
  <section className="main-page">
    <Nav />
    <Outlet />
  </section>
  );
}
export default App;
