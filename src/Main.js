import { render } from 'react-dom'
import Pokedex from 'components/Pokedex'
import style from './styles/style.scss'

import store from './PokeStore'

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
