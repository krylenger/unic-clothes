import React, { Component } from "react";
import SHOP_DATA from "./shoppage.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shoppage">
        {collections.map(({ id, ...otherCollectionParams }) => (
          <CollectionPreview key={id} {...otherCollectionParams} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
