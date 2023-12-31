import "./styles.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <a href="/">
        <div className="logo"><img src="/Logo-tiquin.svg" alt="" /></div>
      </a>
      <div className="firstMenu">
        <nav>
          <ul>
            <li>
              <Link to="/" className="link-styled">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="link-styled">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="link-styled">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="secondMenu">
        <nav>
          <ul>
            <a href="/checkout">
              <button>
                <img src="/Header/shoppingCart.svg" alt="Carrinho de compras" />
              </button>
            </a>
            <a href="/empty">
              <button>
                {" "}
                <img src="/Header/user.svg" alt="user" />
              </button>
            </a>
            <li>
              <img src="/Header/divider.svg" alt="" />
            </li>
            <a href="/empty">
              <button>
                <img src="/Header/filter.svg" alt="filter" />
              </button>
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
