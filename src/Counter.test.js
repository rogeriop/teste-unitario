import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Counter from './Counter'


let container = null
beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})
afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})
it('counts when inc clicked', () => {
    act(() => {
        render(<Counter />, container)
    })
    expect(container.textContent).toBe('0Inc.')

    const button = document.querySelector('[data-testid=inc]')

    // simula click no botão
    act(() => {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })
    // console.log(container.textContent)
    expect(container.textContent).toBe('1Inc.')
})