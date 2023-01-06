import { describe, test, expect } from 'vitest'
import { render, screen } from 'test/test-utils'
import BlogPage from './BlogPage'

describe('<BlogPage />', () => {
  test('should validate that rendered correctly', () => {
    // ARRANGE
    render(<BlogPage />)

    // assert
    expect(screen.getByText(/Blog Page/i)).toBeDefined()
  })
})
