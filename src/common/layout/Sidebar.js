import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from "../../routes/products";
import './Sidebar.css';

const AppSidebar = ({ isExpanded, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div onClick={toggleSidebar} className={`toggle-btn ${ isExpanded ? 'change' : ''}`}>
         <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <nav>
        <ul>
        {routes.map(route=>{
                return <li><NavLink to={route.path} >{route.name}</NavLink></li>
            })}
        </ul>
      </nav>
    </aside>
  );
};

AppSidebar.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default AppSidebar;
