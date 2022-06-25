const initialState = {
  value: 0,
  data: {
    list: [{
      name: ''
    }],
    name: 'xxx'
  }
}
export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state, data: {
          list: [{ name: 'cpp' }, { name: 'wmh' }],
          name: 'cpp + wmh'
        }
      }
    case "DEC":
      return {
        ...state, data: {
          list: [{ name: 'cpp' }],
          name: 'cpp'
        }
      }
    case "RESET":
      return { ...state, data: { name: '', list: [] } }
    default:
      return { ...state }
  }
}

export const add = () => ({ type: 'ADD' })
export const dec = () => ({ type: 'DEC' })
export const reset = () => ({ type: 'RESET' })