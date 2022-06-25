/*
 * @Author: Chendapeng
 * @Date: 2021-07-10 18:28:22
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-07-10 19:14:12
 * @Description: 
 */
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../services/Official/actions/index'
import Link from '../Todos/link'

interface OwnProps {
  filter: any;
}
const mapStateToProps = (state: any, ownProps: OwnProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: OwnProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink