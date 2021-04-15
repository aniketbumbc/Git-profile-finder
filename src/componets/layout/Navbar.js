import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  static defaultProps = {
    title: ' Github profile finder',
    icon: 'fab fa-github',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };
  render() {
    console.log(Navbar.defaultProps);
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={Navbar.defaultProps.icon}></i>
          {Navbar.defaultProps.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
