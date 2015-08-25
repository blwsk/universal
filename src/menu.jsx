import React from 'react/addons';
import { Link } from 'react-router';

const Menu = React.createClass({

  componentDidMount() {},

  getInitialState() {
    return {};
  },

  render: function() {

    return (
      <div className="menu">
        <ul>
          <li><Link to="one">One</Link></li>
          <li><Link to="two">Two</Link></li>
          <li><Link to="three">Three</Link></li>
        </ul>
      </div>
    );
  }
});

export default Menu;