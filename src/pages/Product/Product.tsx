// * Base
import React, { memo } from 'react';

// * Components
import Page from './../../components/Page/Page';

const Product: React.FC = memo(() => {
  return (
    <>
      <Page title="Product">
        <p>This page is about our product</p>
      </Page>
    </>
  );
});

export default Product;
