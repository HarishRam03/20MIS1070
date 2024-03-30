import React from "react";
import { useState } from "react";
const Content= () => {
    const [items, setltemsl] = useState(
        [
            { 
                "productName": "Laptop 1",
                "price": 2236,
                "rating": 4.7,
                "discount": 63,
                "availability":"yes"
            },
            { 
                "productName": "Laptop 13",
                "price": 1244,
                "rating": 4.5,
                "discount": 45,
                "availability":"out-of-stock"
            },
            { 
                "productName": "Laptop 3",
                "price": 9102,
                "rating": 4.44,
                "discount": 98,
                "availability":"yes"
            },
            
        ])
            const [currentPage, setCurrentPage] = useState(1);

            const nextPage = () => {
              setCurrentPage(currentPage + 1);
            };
          


    const handleClick= (e) =>{
        console.log(e.target)
    }
    const [count,setCount]=useState(0);
    function increament(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
    return(
        <main>
            {items.map((item, index) => (
                    <div key={index}>
                        <p>Name:     {item.productName}</p>
                        <p>Price:    {item.price}</p>
                        <p>Rating:   {item.rating}</p>
                        <p>Discount: {item.discount}%</p>
                        <p>Availability: {item.availability}</p>
                        <button onClick={nextPage}>View Product</button>
                        <button>Add to Cart</button>
                        <button onClick={decrement}>-</button>
                        <span>{count}</span>
                        <button onClick={increament}>+</button>
                    </div>
                ))}
            
        </main>
        
    )
}

export default Content