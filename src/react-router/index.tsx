import { useParams } from 'react-router-dom'
function ReactRouter() {
  let { path } = useParams()
  return (
    <div>
      this is React Router: {path}
    </div>
  )
}

export default ReactRouter