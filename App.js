import React, { Component } from 'react';

import {
  Provider,
} from 'react-redux'

import configureStore from './src/store/configureStore'

const store = configureStore()

import RssReader from './src/native/containers/rss_reader.react'

export default class extends Component {
  render() {
    return (
      <Provider store={store} >
        <RssReader />
      </Provider>
    )
  }
}