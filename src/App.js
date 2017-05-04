import { render } from 'react-dom'
import Main from 'components/Main'
import style from './styles/style.scss'

import store from './PokeStore'

render(
  <Main store={store}/>,
  document.getElementById('container-app')
)

