import { connect } from 'react-redux'
import TheComponent from '../components/App';
import actions from '../actions';

import { getPath } from '../selectors';

const mapStateToProps = (state, ownProps) => {
    return {
    	location: getPath(state)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCreate: () => {
          dispatch({type: actions.BASIC_ACTION})
        }
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(TheComponent)

export default App;