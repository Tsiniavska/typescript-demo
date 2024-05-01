// * Base
import React, { memo } from 'react';

// * Components
import Page from './../../components/Page/Page';

const Customers: React.FC = memo(() => {
  return (
    <>
      <Page title="Customers">
        <p>This page is about our customers</p>
      </Page>
    </>
  );
});

export default Customers;
