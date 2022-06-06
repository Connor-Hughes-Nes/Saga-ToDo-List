import { put, takeEvery, all, call } from 'redux-saga/effects'
const ms = 0;
export const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* helloSaga() {
    console.log('Hello, Sagas!')
}

export function* incrementAsync() {
    yield call(delay, 1000)
    yield put({type: 'INCREMENT'})
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}