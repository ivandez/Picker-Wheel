import { create } from 'zustand'

const useStore = create((set) => ({
  winner: '',
  removeWinner: () => set({ winner: '' }),
  updateWinner: (newWinner) => set({ winner: newWinner }),
}))

export default useStore