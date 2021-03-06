import {
    assert
} from 'chai'

import {
    REQUEST_FETCH_COMMENTS,
    FAIL_TO_FETCH_COMMENTS,
    RECEIVE_COMMENTS
} from 'actions/fetchComments.js'

import comments from 'reducers/comments.js'

describe('Reducer/ Comments', () => {
    const getInitState = () => {
        return {
            status: 'init',
            data: [],
            error: null
        }
    }
    it('should handle initial state', () => {
        const expected = getInitState()
        const actual = comments(undefined, {})
        assert.deepEqual(expected, actual)
    })

    it('should handle error state', () => {
        const action = {
            type: FAIL_TO_FETCH_COMMENTS,
            error: 'something wrong'
        }
        const expected = {
            status: 'error',
            data: [],
            error: 'something wrong'
        }
        const actual = comments(getInitState(), action)
        assert.deepEqual(expected, actual)
    })

    it('should handle receiving comments', () => {
        const action = {
            type: RECEIVE_COMMENTS,
            comments: [{text: 'gogogog'},{text: 'comecomecome'}]
        }
        const expected = {
            status: 'complete',
            data: [{text: 'gogogog'},{text: 'comecomecome'}],
            error: null
        }
        const actual = comments(getInitState(), action)
        assert.deepEqual(expected, actual)
    })

})