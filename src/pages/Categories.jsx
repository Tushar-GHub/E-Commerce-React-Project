import { useMemo } from "react";
import useProducts from "../hooks/useProducts";

const Categories = () => {
    const [products, setProducts] = useProducts();

    const categories = useMemo(() => {
          return [...new Set(products.map(p => p.category))];
        }, [products]);

    return (
        <section className="categories">
            <h2>Shop by Category</h2>
            <div className="categoryGrid">
              {categories.map((category) => {
                return <div className="categoryCard" key={category}>{category}</div>
              })}
            </div>
        </section>
    )
}

export default Categories