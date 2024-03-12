import { render, screen } from '@testing-library/react'
import App from '~/App'

describe('App', () => {
  it('should render the app', () => {
    render(<App />)
    expect(screen.getByText(/MyApp/i)).toBeInTheDocument()
    expect(screen.getByRole('main')).toHaveAttribute('class', 'container')
  })
})
