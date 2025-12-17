import { NavLink } from "react-router-dom"

const Header = () => {
    const links = [
        {name: "Home", path: "/"},
        {name: "Shop", path: "/shop"},
        {name: "Categories", path: "/categories"},
        {name: "Contact", path: "/contact"}
    ]

  return (
        <header className="navbar">
            <div className="logo">ShopEase</div>
            <nav>
            {links.map((link) => {
                return <NavLink to={link.path} key={link.name} className="navLink">{link.name}</NavLink>
            })}
            </nav>
            <div className="navActions">
            <button className="btnOutline">Login</button>
            <button className="btn">Cart (0)</button>
            </div>
        </header>
  )
}

export default Header