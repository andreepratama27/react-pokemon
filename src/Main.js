import { render } from 'react-dom'
import Pokedex from 'components/Pokedex'

const Main = () => {
  return (
    <div className="pokedex-container">
        <Pokedex />
        <Pokedex />
        <Pokedex />
    </div>
  )
}

render(
  <Main />,
  document.getElementById('container')
)
