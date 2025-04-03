import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({ activeIndex: '1' }),
  actions: {
    setActiveIndex(index: string) {
      this.activeIndex = index
    }
  }
})
