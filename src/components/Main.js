import Pokedex from 'components/Pokedex'
import { observer } from 'mobx-react'

@observer
class Main extends React.Component {
  render () {
    return (
        <div className='pokedex-container'>
            {
              this.props.store.pokemon.map((v, i) => {
                return (
                  <Pokedex name={v} key={i} />
                )
              })
            }
        </div>
    )
  }
}

export default Main
