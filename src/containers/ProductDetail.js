import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectedProduct } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductDetail = () => {
    const [pending, setPending] = useState(true);
    const product = useSelector(state => state.selectedProduct);
    const id = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id.productId}`)
            .then(res => res.json())
            .then(data => {
                dispatch(selectedProduct(data));
                setPending(false);
            })
            .catch(err => console.log(err));
    }, [id.productId,dispatch]);
    // const product = products.filter((item) => {
    //     return item.id == id.productId;
    // });
    return (
        <>
            Product Detail ---
            {pending ? 'Loading...' : <ProductComponent id={product.id} title={product.title} category={product.category} image={product.image} />}
        </>
    );
};

export default ProductDetail;