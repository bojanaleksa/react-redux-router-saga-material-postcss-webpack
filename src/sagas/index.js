import { takeLatest, put, call } from 'redux-saga/effects';
import actions from '../actions';
import api from '../api';

function* generic(...data) {
    let [func, params] = data;
    let { type } = params;
	try {
        const data = yield call(api[func], params);
        yield put({ type: actions[type] + actions.SUCCESS, data });
    } catch (error) {
        console.error('saga error: ', error);
        yield put({ type: actions[type] + actions.ERROR, error })
    }
}

export function* sagas() {
    yield takeLatest(actions.API + '*', generic);
}