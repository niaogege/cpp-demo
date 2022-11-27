// import { Dispatch } from "redux";
import { connect } from "react-redux";
import { add, dec, reset } from './commonRedux'
const List = ({
  list = [],
  name = '',
  addList,
  decList,
  reset
}: any) => {
  console.log('list', list);
  console.log('name', name);
  return (
    <div>
      <div>
        name: {name} <br />
        List:
        {
          list.map((item: any) => <div key={item.name}>{item.name}</div>)
        }
        <button onClick={addList}>add数据 + </button>
        <button onClick={decList}>dec数据 - </button>
        <button onClick={reset}>Reset </button>
      </div>
    </div>
  )
}
// dispatch
// const mapDispatch = (dispatch: Dispatch) => ({
//   addList: () => dispatch(add()),
//   decList: () => dispatch(dec()),
//   reset: () => dispatch(reset()),
// })
// bindActionCreators
const actionCreators = {
  addList: add,
  decList: dec,
  reset
}
const mapState = ({
  data: {
    list = [],
    name = ''
  }
}) => ({
  list,
  name
})
export default connect(
  mapState,
  actionCreators
)(List)