import { render } from 'react-dom'
import style from './styles/style.scss'

const Main = () => {
  return (
    <div>
        <h1>Hello</h1>
    </div>
  )
}

render(
  <Main />,
  document.getElementById('container')
)
