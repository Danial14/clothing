import React from 'react';
import CollectionItem from '../collection_iteM.coMponent/collection_iteM.coMponent';
import './collection_preview_style/collection_preview_style.scss';

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((item, index)=>(index < 4)).map(({id, ...otherCollectionItemProps})=>(
                <CollectionItem key={id} {...otherCollectionItemProps}/>
            ))}
        </div>
    </div>
)

export default CollectionPreview;