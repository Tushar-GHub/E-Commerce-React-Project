import { useState } from "react"

const useProducts = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapiserver.reactbd.org/api/products/1')
        .then(res => res.json())
        .then(data => setItems(data))
    });

    return [items, setItems];
}

export default useProducts;