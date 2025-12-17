import { NavLink } from "react-router-dom"

const Header = () => {
    const links = [
        {name: "Home", path: "/"},
        {name: "Shop", path: "/shop"},
        {name: "Categories", path: "/categories"},
        {name: "Contact", path: "/contact"}
    ]

    const css = {
        navbar :{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
        },

        logo: {
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#0d6efd"
        },
    
        navLink: {
          margin: "0 1rem",
          textDecoration: "none",
          color: "#333",
          fontWeight: 500
        },
    
        navActions: {
          display: "flex",
          gap: "10px"
        },
        
        btn: {
          backgroundColor: "#0d6efd",
          color: "#fff",
          border: "none",
          padding: "0.6rem 1.2rem",
          borderRadius: "5px",
          cursor: "pointer"
        },
    
        btnOutline: {
          background: "transparent",
          border: "1px solid #0d6efd",
          color: "#0d6efd",
          padding: "0.6rem 1.2rem",
          borderRadius: "5px",
          cursor: "pointer"
        }
    }

  return (
        <header style={css.navbar}>
            <div style={css.logo}>ShopEase</div>
            {/* <nav>
            <a style={css.navLink} href="#">Home</a>
            <a style={css.navLink} href="#">Shop</a>
            <a style={css.navLink} href="#">Categories</a>
            <a style={css.navLink} href="#">Contact</a>
            </nav> */}
            <nav>
            {links.map((link) => {
                return <NavLink to={link.path} key={link.name} style={css.navLink}>{link.name}</NavLink>
            })}
            </nav>
            <div style={css.navActions}>
            <button style={css.btnOutline}>Login</button>
            <button style={css.btn}>Cart (0)</button>
            </div>
        </header>
  )
}

export default Header