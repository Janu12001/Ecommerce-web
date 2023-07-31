import Footer from "../features/common/Footer";
import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
      <Footer></Footer>
    </div>
  );
}

export default Home;
