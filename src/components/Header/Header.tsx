import { Container, LogoutBtn, Logo } from "..";
import { useNavItems } from "../../hooks";
import { useAppSelector } from "../../store/store";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const authStatus = useAppSelector((state) => state.authReducer.status);
  const navItems = useNavItems();

  return (
    <header className="bg-gray-500 py-3 shadow">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="ml-auto flex">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => navigate(item.slug)}
                    className="inline-bock rounded-full px-6 py-2 duration-200 hover:bg-blue-100"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
