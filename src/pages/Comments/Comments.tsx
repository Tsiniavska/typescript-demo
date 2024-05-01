// * Base
import { memo } from 'react';
import { Outlet } from 'react-router-dom';

// * Components
import Page from '../../components/Page/Page';

const Comments = memo(() => (
  <Page title="Comments">
    <Outlet />
  </Page>
));

export default Comments;
