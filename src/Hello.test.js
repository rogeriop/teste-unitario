import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import Hello from './Hello'

let container = null
beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})
afterEach(() => {
    ReactDOM.unmountComponentAtNode(container)
    container.remove()
    container= null
})

it('renders the name', () => {
    act(() => {
        ReactDOM.render(<Hello name='Rogério' />, container)
    })
    const p = container.querySelector('p')
    expect(p.textContent).toBe('Olá Rogério!')

})

it('renders no name', () => {
    act(() => {
        ReactDOM.render(<Hello />, container)
    })
    const p = container.querySelector('p')
    expect(p.textContent).toBe('Olá !')

})
