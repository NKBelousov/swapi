import React from 'react'
import ReactDOM from 'react-dom'
import * as Modes from '~/constants/modes'

import DataFetcher from './'

describe('DataFetcher', () => {
  test.each(Object.values(Modes))(`should render %p without crashing`, mode => {
    const div = document.createElement('div')
    ReactDOM.render(<DataFetcher data={{
      status: mode,
      data: ['Test'],
    }}
      onRequest={jest.fn()}
    >
      {data => data}
    </DataFetcher>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})