import Pokedex from 'components/Pokedex'
import { observer } from 'mobx-react'

@observer
class Main extends React.Component {
  render () {
    return (
        <div className='pokedex-container'>
            {
              this.props.store.data.map((v, i) => {
                return (
                  <Pokedex data={v} id={i + 1} key={i} />
                )
              })
            }
        </div>
    )
  }
}

export default Main
