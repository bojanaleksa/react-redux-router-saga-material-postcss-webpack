import { takeLatest, put, call } from 'redux-saga/effects'
import actions from '../actions'
import api from '../api';


function* generic(...data) {
    let func = data[0];
    let params = data[1];
    let type = params.type;
    delete params.type;
	try {
        const data = yield call(api[func], params);
        yield put({ type: actions[type] + actions.SUCCESS, data });
    } catch (error) {
        yield put({ type: actions[type] + actions.ERROR, error })
    }
}

export function* sagas() {
    yield takeLatest(actions.API + '*', generic);
}