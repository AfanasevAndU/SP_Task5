import { NavLink } from "react-router-dom";
import { Button } from "../button";
import { HeaderContainer } from "./header.styles";

export const Header = () => (
  <HeaderContainer>
    <span>SPA по фильмам /</span>
    <NavLink to="/">{<Button>Главная страница</Button>}</NavLink>
    <NavLink to="/search">{<Button>Поиск</Button>}</NavLink>
  </HeaderContainer>
);
