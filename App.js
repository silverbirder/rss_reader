import React, { Component } from 'react';

import {
  Provider,
} from 'react-redux'

import configureStore from './src/store/configureStore'

const store = configureStore()

import TodoApp from './src/native/containers/TodoApp.react'

export default class extends Component {
  render() {
    return (
      <Provider store={store} >
        <TodoApp />
      </Provider>
    )
  }
}