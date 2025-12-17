import { useEffect, useState } from "react"

const useProducts = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapiserver.reactbd.org/api/amazonproducts/')
        .then(res => res.json())
        .then(json => setItems(json.data))
    }, []);

    return [items, setItems];
}

export default useProducts