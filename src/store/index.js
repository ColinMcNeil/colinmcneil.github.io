
export const state = () => ({
  theme: { primaryColor: 'white', secondaryColor: 'black' }
})

export const  mutations = () => ({
  setTheme (state, theme) {
    state.theme = theme
  }
})

