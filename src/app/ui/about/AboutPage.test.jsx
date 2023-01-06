import { describe, test, expect } from 'vitest'
import { render, screen } from 'test/test-utils'
import AboutPage from './AboutPage'

describe('<AboutPage />', () => {
  test('should validate that rendered correctly', () => {
    // ARRANGE
    render(<AboutPage />)

    // assert
    expect(screen.getByText(/About Page/i)).toBeDefined()
  })
})
