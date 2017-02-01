const React = require('react')

class Spaceship extends React.Component{
  render(){
    return(
      <div>
        <h1>Name: {this.props.name}</h1>
        <h2>{this.props.speed}</h2>
        <h2>{this.props.hasRockets}</h2>
        <h2>Colors: {this.props.colors.join(', ')}</h2>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
};


module.exports = Spaceship
