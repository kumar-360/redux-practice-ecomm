import React, { useEffect } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { removeSelectedProduct, setProducts } from '../redux/actions/productActions';
import { Link } from 'react-router-dom';

const ProductListing = () => {
    const products = useSelector(state => state.allProducts.products);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => dispatch(setProducts(data)))
            .catch(err => console.log(err));
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [dispatch]);
    const renderProducts = products.map((product) => {
        return (
            <Link to={`/products/${product.id}`} key={product.id}>
                <Col md={3}>
                    <ProductComponent id={product.id} title={product.title} category={product.category} image={product.image} />
                </Col>
            </Link>
        );
    });
    return (
        <Row>
            {renderProducts}
        </Row>
    );
};

export default ProductListing;