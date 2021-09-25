import React from 'react';

const ProductComponent = ({ id, title, category, image }) => {
    // const products = useSelector(state => state.allProducts.products);
    return (
        <div style={{ height: '200px', width: '200px', borderWidth: '1px', borderStyle: 'solid', borderColor: 'red' }}>
            <img src={image} style={{ height: '50px', width: '50px'}} alt={title}/>
            <h2>{id}</h2>
            <p>{title}</p>
        </div>
    );
};

export default ProductComponent;