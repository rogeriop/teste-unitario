import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Empresa from './Empresa'


jest.mock('./MapGoogle', () => {
    const MockedMap = ({ location }) => {
        return <div data-testid='map'>{location}</div>
    }
    return MockedMap
})

let container = null
beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})
afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container=null
})
it('renders', () => {
    act(() => {
        render(<Empresa companyName='devPleno' location={'lat:long'} />, container)
    })
    //console.log(container.textContent)
    expect(
        container.querySelector('[data-testid="company-name"]').textContent).toBe('devPleno')
    expect(
        container.querySelector('[data-testid="map"]').textContent).toBe('lat:long')
    

})