import React from "react";
import CollectionItem from '../collection-item/collection-item.component'
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview-container">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemParams }) => (
          <CollectionItem key={id} {...otherItemParams}/>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
