import React from "react";
import PropTypes from 'prop-types';

import img from '../assets/image.png';
import RaisedButton from 'material-ui/RaisedButton';

const Home = props => <div>{props.text}</div>;

Home.propTypes = {
	text: PropTypes.string
}

Home.defaultProps = {
	text: 'Hello World'
}

export default Home;
