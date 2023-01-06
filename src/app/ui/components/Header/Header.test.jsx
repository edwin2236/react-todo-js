import { describe, expect, test } from 'vitest'
import { render, screen } from 'test/test-utils'
import Header from '.'
import { MemoryRouter } from 'react-router-dom'

describe('<Header />', () => {
  test('should validate that rendered correctly', () => {
    // arrange
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    // act
    const titles = screen.getAllByText('LOGO')

    // assert
    expect(titles).toHaveLength(2)
  })
})
