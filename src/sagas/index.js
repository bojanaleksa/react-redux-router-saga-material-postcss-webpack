import { takeLatest, put, call } from 'redux-saga/effects'
import actions from '../actions'
import api from '../api';


function* basicInit() {
    try {
        const data = yield call(api.basicFunction);
        yield put({ type: actions.BASIC_ACTION_SUCCESS, data })
    } catch (error) {
        yield put({ type: actions.BASIC_ACTION_ERROR, error })
    }
}

export function* sagas() {
    yield takeLatest(actions.BASIC_ACTION, basicInit);
}