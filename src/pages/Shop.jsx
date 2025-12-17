import useProducts from "../hooks/useProducts"

const Shop = () => {
    const [products, setProducts] = useProducts();

    return (
        <>
        <section className="products">
            <h1>Shop Items</h1>
        <div className="productGrid">
          {products.map((product) => {
            return (
                <div key={product.id} className="productCard">
                    <img className="productImage" src={product.thumbnail} alt={product.title} />
                    <h3 className="productTitle">{product.title}</h3>
                    <p style={{color: "darkgoldenrod"}}>{product.category}</p>
                    <p>${product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <button className="btn">Add to Cart</button>
                </div>
            )
          })}
          </div>
        </section>
        </>
    )
}

export default Shop