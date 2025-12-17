import { useEffect, useState } from "react"

const useProducts = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => setItems(json.products))
    }, []);

    return [items, setItems];
}

export default useProducts