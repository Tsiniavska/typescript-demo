// * Base
import React from 'react';

// * Components
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Page from '../../components/Page/Page';

const Registration: React.FC = () => {
  return (
    <>
      <Page title="Registration">
        <RegistrationForm />
      </Page>
    </>
  );
};

export default Registration;
