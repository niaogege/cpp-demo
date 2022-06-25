export default function counterReducer(state = 0, action: any) {
  switch (action.type) {
    case 'cpp':
      return state + 10;
    case 'wmh':
      return state - 10;
    default:
      return state
  }
}