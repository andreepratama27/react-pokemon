import {
  ModalContainer,
  ModalDialog
} from 'react-modal-dialog'

class Pokedex extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      image: '',
      isShowingModal: false
    }
  }

  handleClick () {
    this.setState({
      isShowingModal: true
    })
  }

  renderImage (id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  }

  render () {
    return (
        <div className="pokedex-box">
            <div className="box-image">
                <img src={ this.renderImage(this.props.id) } alt="" />
            </div>
            <div className="box-text">
                { this.props.data.name }
            </div>
        </div>
    )
  }

}

export default Pokedex
