import React from 'react';
import '../shop.coMponent/shop_style/shop.scss';
import SHOP_DATA from './shopdata';
import CollectionPreview from '../collection_preview.coMponent/collection_preview';

class Shop extends React.Component{
    constructor(){
        super();
        this.state = {
            collections: SHOP_DATA
        };
    }
    render(){
        const {collections} = this.state;
        return(
            <div>
            <h1>Shop</h1>
            {collections.map(({id, ...otherProps})=>(<CollectionPreview key={id} {...otherProps}/>))}
            </div>
        );
    }
}
export default Shop;