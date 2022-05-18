import "./styles.css";
import Nav from "./components/Nav";
import Search from "./components/Search";
import CarouselComponent from "./components/carousel.component";
import "bootstrap/dist/css/bootstrap.css";
// import Icon from "react-crud-icons";

// import "../node_modules/react-crud-icons/dist/react-crud-icons.css";

// class Example extends React.Component {
//   render() {
//     return (
//       <Icon
//         name = "search"
//         theme = "dark"
//         size = "small"
//         // onClick = { doSomething }
//       />
//     );
//   }
// }


const Home = {
  backgroundColor: "gray",
}

function LandingPage() {
  return (
    <div style={Home}>
    <div className="Home">
      <Nav />
      <h1>Welcome to GhostFacers........yada yada blah blah blah insert wat we want to tell people about our site or whatever</h1>
    </div>
    <div>
      <Search />
    </div>
    <div>
      <CarouselComponent />
    </div>
    </div>
  );
}

export default LandingPage;
