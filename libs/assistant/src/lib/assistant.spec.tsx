import { render } from '@testing-library/react'

import Assistant from './assistant'

describe('Assistant', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Assistant />)
    expect(baseElement).toBeTruthy()
  })
})
