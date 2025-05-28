/* eslint-disable */
import { leaderboard } from '@/data/leaderboard'

describe('leaderboard data shape', () => {
  it('is an array', () => {
    expect(Array.isArray(leaderboard)).toBe(true)
  })

  it('each entry has the required fields', () => {
    leaderboard.forEach(entry => {
      expect(entry).toHaveProperty('rank')
      expect(entry).toHaveProperty('username')
      expect(entry).toHaveProperty('score')
      expect(entry).toHaveProperty('total_plays')
      expect(entry).toHaveProperty('average_score')
    })
  })
})
