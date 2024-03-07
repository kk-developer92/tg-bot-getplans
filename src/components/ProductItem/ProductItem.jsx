import React from 'react';
import Button from "../Button/Button";
import './ProductItem.css';

const ProductItem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'product ' + className} style={{
            background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.80)), url(${product.image}) center / cover`
        }}>
            <div className={'title'}>{product.title}</div>
            <div className={'area'}>{product.area}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            {/* <Button className={'add-btn'} onClick={onAddHandler}>
                Добавить в корзину
            </Button> */}
        </div>
    );
};

export default ProductItem;
