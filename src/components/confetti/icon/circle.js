import { h, Component } from 'preact'

export default class Circle extends Component {
  render() {
    return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" {...this.props}>
        <g
          id="Symbols"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Confetti-Circle"
            transform={`translate(${this.props.x}, ${this.props.y}) rotate(${this.props.rotation})`}
            opacity={this.props.opacity}
            stroke-width="5"
            stroke="#FFFFFF"
          >
            <circle id="Oval-2" cx="10" cy="10" r="10" />
          </g>
        </g>
      </svg>
    )
  }
}
