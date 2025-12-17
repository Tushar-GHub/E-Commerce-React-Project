import { useEffect } from "react";
import useProducts from "../hooks/useProducts";

const Home = () => {
    const [products, setProducts] = useProducts();
    // console.log(products);

    return (
        <div>
        <section className="hero">
            <div className="heroContent">
            <h1>Discover the Best Products</h1>
            <p>Shop the latest trends at unbeatable prices.</p>
            <button className="btnLarge">Shop Now</button>
            </div>
        </section>

        <section className="categories">
            <h2>Shop by Category</h2>
         <div className="categoryGrid">
             <div className="categoryCard">Electronics</div>
            <div className="categoryCard">Fashion</div>
            <div className="categoryCard">Home</div>
            <div className="categoryCard">Beauty</div>
            </div>
        </section>

        <section className="products">
            <h2>Featured Products</h2>
            <div className="productGrid">

            {products?.slice(4,12).map((product) => {
                return (
                <div key={product.id} className="productCard">
                    <img className="productImage" src={product.thumbnail} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p style={{color: "darkgoldenrod"}}>{product.category}</p>
                    <p>${product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <button className="btn">Add to Cart</button>
                </div>
                )
            })}
      
            </div>
        </section>

        <footer className="footer">
            <p>© 2025 ShopEase. All rights reserved.</p>
        </footer>
        </div>
    )
}

export default Home