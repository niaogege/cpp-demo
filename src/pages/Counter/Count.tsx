/*
 * @Author: Chendapeng
 * @Date: 2021-07-10 16:43:01
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-05-12 21:57:00
 * @Description: 
 */
import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    data: {
      list: [{
        name: ''
      }],
      name: ''
    }
  },
  reducers: {
    increment: (state) => {
      state.value += 2
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value = state.value + action.payload
    },
    addList: (state) => {
      state.data.list = [{ name: 'cpp' }, { name: 'wmh' }]
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addList } = counterSlice.actions

interface CountreProp {
  counter: {
    value: number
  }
}
export const selectCount = (state: CountreProp) => state.counter.value;

export const incrementSync = (amount: number) => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 2000)
}

export default counterSlice.reducer;