import React, { useState, useTransition } from 'react';
// useTransition in Parent component. useDeferredValue in child component
import ProductList from './DeferredTut';


function generateProducts() {
    const products = [];
    for (let i = 0; i < 10000; i++) {
        products.push(`Product ${i + 1}`);
    }
    return products;
}

const dummyProducts = generateProducts();

function filterProducts(filterTerm) {
    if (!filterTerm) {
        return dummyProducts;
    }
    return dummyProducts.filter((product) => product.includes(filterTerm));
}

const TransitionTut = () => {
    const [isPending, startTransition] = useTransition();
    const [filterTerm, setFilterTerm] = useState('');

    const filteredProducts = filterProducts(filterTerm);

    function updateFilterHandler(event) {
        startTransition(() => {
          setFilterTerm(event.target.value);
        });
        // setFilterTerm(event.target.value);
    }

    return (
        <div id="app">
            <input type="text" onChange={updateFilterHandler} />
            {isPending && <p style={{color: 'white'}}>Updating List...</p>}
            <ProductList products={filteredProducts} />
        </div>
    );
}

export default TransitionTut;

