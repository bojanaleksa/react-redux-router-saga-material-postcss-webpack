import React from "react";
import PropTypes from 'prop-types';

class App extends React.Component {

	componentWillMount() {
		this.props.onCreate();
	}

 	render() {
    	return <div>
    		<div>We are here: {this.props.location} </div>
    		{this.props.children}
    	</div>
  	}

}

App.propTypes = {
	onCreate: PropTypes.func.isRequired,
	location: PropTypes.string
}

App.defaultProps = {

}

export default App;