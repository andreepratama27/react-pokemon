import { render } from 'react-dom'

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
