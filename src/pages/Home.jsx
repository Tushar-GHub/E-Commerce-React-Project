const Home = () => {
    const css = {
    //    * : {
    //         margin : "0",
    //         padding: "0",
    //         boxSizing: "border-box",
    //         fontFamily: "Arial, Helvetica, sans-serif",
    //        },

        body : {
          backgroundColor: "#f8f9fa",
          color: "#333"
        },

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
        },
    
        btnLarge: {
          backgroundColor: "#0d6efd",
          color: "#fff",
          border: "none",
          padding: "1rem 2rem",
          fontSize: "1.1rem",
          borderRadius: "6px",
          cursor: "pointer"
        },
    
        /* ===== Hero ===== */
        hero: {
          height: "60vh",
          background:
            'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1512436991641-6745cdb1723f")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
    
        heroContent: {
          textAlign: "center",
          color: "#fff"
        },
    
        heroTitle: {
          fontSize: "3rem",
          marginBottom: "1rem"
        },
    
        /* ===== Categories ===== */
        categories: {
          padding: "3rem 2rem",
          textAlign: "center"
        },
    
        categoryGrid: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem"
        },
    
        categoryCard: {
          background: "#fff",
          padding: "2rem",
          borderRadius: "10px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "0.3s"
        },
    
        /* ===== Products ===== */
        products: {
          padding: "3rem 2rem"
        },
    
        productGrid: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem",
          marginTop: "2rem"
        },
    
        productCard: {
          background: "#fff",
          padding: "1.5rem",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
        },
    
        productImage: {
          width: "100%",
          borderRadius: "10px"
        },
    
        productTitle: {
          margin: "1rem 0 0.5rem"
        },
    
        productPrice: {
          fontWeight: "bold",
          marginBottom: "1rem"
        },
    
        /* ===== Footer ===== */
        footer: {
          backgroundColor: "#ffffff",
          padding: "1.5rem",
              textAlign: "center",
          marginTop: "3rem",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.05)"
        }
    }
    return (
        <div>
        <header style={css.navbar}>
            <div style={css.logo}>ShopEase</div>
            <nav>
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Categories</a>
            <a href="#">Contact</a>
            </nav>
            <div style={css.navActions}>
            <button style={css.btnOutline}>Login</button>
            <button style={css.btn}>Cart (0)</button>
            </div>
        </header>

        <section style={css.hero}>
            <div style={css.heroContent}>
            <h1>Discover the Best Products</h1>
            <p>Shop the latest trends at unbeatable prices.</p>
            <button style={css.btnLarge}>Shop Now</button>
            </div>
        </section>

        <section style={css.categories}>
            <h2>Shop by Category</h2>
         <div style={css.categoryGrid}>
             <div style={css.categoryCard}>Electronics</div>
            <div style={css.categoryCard}>Fashion</div>
            <div style={css.categoryCard}>Home</div>
            <div style={css.categoryCard}>Beauty</div>
            </div>
        </section>

        <section style={css.products}>
            <h2>Featured Products</h2>
            <div style={css.productGrid}>

            <div style={css.productCard}>
                <img src="https://via.placeholder.com/250" alt="Product" />
                <h3>Wireless Headphones</h3>
                <p>$99.99</p>
                <button style={css.btn}>Add to Cart</button>
            </div>

      
            </div>
        </section>

        <footer style={css.footer}>
            <p>© 2025 ShopEase. All rights reserved.</p>
        </footer>
        </div>
    )
}

export default Home