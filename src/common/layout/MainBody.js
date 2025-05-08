import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import PropTypes from 'prop-types';
import './MainBody.css';
import routes from '../../routes/products';

const AppContent = ({ isSidebarExpanded }) => {
  return (
    <main className={`content ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
      <Routes>
           {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          {/* <Route path="/" element={<Navigate to="/business-owners-policy" replace />} /> */}
          <Route path="/" element={<Navigate to="/vehicle-brand" replace />} />
        </Routes>
    </main>
  );
};

AppContent.propTypes = {
  isSidebarExpanded: PropTypes.bool.isRequired,
};

export default AppContent;
