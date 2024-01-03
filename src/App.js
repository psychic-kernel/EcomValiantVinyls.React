import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Components
// import {
//   Card,
//   CardImg,
//   CardBody,
//   CardTitle,
//   CardText,
//   CardSubtitle,
//   Button,
// } from "reactstrap";
// Components
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}
