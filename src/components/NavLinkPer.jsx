import { NavLink } from "react-router-dom";

function NavLinkPer({ to, children, ...props }) {
  return (
    <NavLink
      {...props}
      className={({ isActive }) => (isActive ? "is-active" : undefined)}
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default NavLinkPer;
