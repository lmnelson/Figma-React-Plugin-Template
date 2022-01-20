import * as React from 'react';
import {routes} from '../routes';
import PageOne from '../pages/PageOne';
import PageTwo from '../pages/PageTwo';
import {MemoryRouter, Routes, Route, Outlet} from 'react-router';
import PrimaryLayout from '../layouts/PrimaryLayout';

const RoutingContainer = () => {
  return (
    <MemoryRouter initialIndex={0} initialEntries={[`${routes.PAGE_ONE.path}`]}>
      <Routes>
        <Route
          element={
            <PrimaryLayout>
              <Outlet />
            </PrimaryLayout>
          }
        >
          <Route path={routes.PAGE_ONE.path} element={<PageOne />} />
          <Route path={routes.PAGE_TWO.path} element={<PageTwo />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

export default RoutingContainer;
