import { describe, test, expect } from 'vitest'
import { render, screen } from 'test/test-utils'
import UserPage from './UserPage'

describe('<UserPage />', () => {
  test('should validate that rendered correctly', () => {
    // ? ARRANGE
    render(<UserPage />)

    // ? ASSERT
    expect(screen.getByText(/User Page/i)).toBeDefined()
  })
})
