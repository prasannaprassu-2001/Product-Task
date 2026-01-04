import { useNavigate } from "react-router-dom";
import "../styles/header.css";

const Header = ({ cartCount }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        Innerwear Store
      </h2>

      <div className="cart" onClick={() => navigate("/cart")}>
        🛒 Cart ({cartCount})
      </div>
    </header>
  );
};

export default Header;
