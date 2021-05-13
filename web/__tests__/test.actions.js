import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store';
import * as actions from '../app/redux/actions'
import * as constants from '../app/redux/constants'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)


describe('async getUsers', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('triggers START_FETCH and GET_USERS_SUCCESS', () => {
    const store = mockStore({users: []})
    fetchMock.get('/api/users/', {
      status: 200,
      body: [
        {
          id: "aiowbn654",
          first_name: "Kevin",
          last_name: "Bacon",
          emai: "thebacon@kevin.com",
          favorite_color: "red",
          number_of_pets: 0
        }
      ],
      headers: {'content-type': 'application/json'}
    })

      const expectedActions = [
        { type: constants.START_FETCH},
        { type: constants.GET_USERS_SUCCESS, payload: [
          {
            id: "aiowbn654",
            first_name: "Kevin",
            last_name: "Bacon",
            emai: "thebacon@kevin.com",
            favorite_color: "red",
            number_of_pets: 0
          }
        ]}
      ]

      return store.dispatch(actions.GetUsers()).then(() => {
        
        expect(store.getActions()).toEqual(expectedActions)
      })
  });

  it('triggers START_FETCH and GET_USER_BY_ID_SUCCESS', () => {
    const store = mockStore({user: {}})
    fetchMock.get('/api/users/aiowbn654', {
      status: 200,
      body: {
        id: "aiowbn654",
        first_name: "Kevin",
        last_name: "Bacon",
        emai: "thebacon@kevin.com",
        favorite_color: "red",
        number_of_pets: 0
      },
      headers: {'content-type': 'application/json'}
    })

    const expectedActions = [
      { type: constants.START_FETCH},
      { type: constants.GET_USER_BY_ID_SUCCESS, 
        payload: {
          id: "aiowbn654",
          first_name: "Kevin",
          last_name: "Bacon",
          emai: "thebacon@kevin.com",
          favorite_color: "red",
          number_of_pets: 0
        }
      }
    ]

    return store.dispatch(actions.GetUserById('aiowbn654')).then(() => {
      
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('triggers START_FETCH and GET_USERS_FAIL', () => {
      const store = mockStore({error: null})
      fetchMock.get('/api/users/', {throws: new Error('fetch failed')})

      const expectedActions = [
        { type: constants.START_FETCH},
        { type: constants.GET_USERS_FAIL, payload: Error('fetch failed') }
      ]

      return store.dispatch(actions.GetUsers()).then(() => {
        
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('triggers START_FETCH and GET_USER_BY_ID_FAIL', () => {
    const store = mockStore({error: null})
    fetchMock.get('/api/users/asdb1234', {throws: new Error('user does not exist')})

    const expectedActions = [
      { type: constants.START_FETCH},
      { type: constants.GET_USER_BY_ID_FAIL, 
        payload: Error('user does not exist')
      }
    ]

    return store.dispatch(actions.GetUserById('asdb1234')).then(() => {
      
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})