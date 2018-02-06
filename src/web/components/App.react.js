import React from 'react'

import {
  Provider,
} from 'react-redux'

import configureStore from '../../store/configureStore'

const store = configureStore()

import TodoApp from '../containers/TodoApp.react'

import createReactClass from 'create-react-class'

export default createReactClass({
  render() {
    return (
      <Provider store={store} >
        <TodoApp />
      </Provider>
    )
  }
})
