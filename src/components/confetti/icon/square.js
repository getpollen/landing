import { h, Component } from 'preact'

export default class Square extends Component {
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
            id="Confetti-Rectangle"
            transform={`translate(${this.props.x}, ${this.props.y}) rotate(${this.props.rotation})`}
            opacity={this.props.opacity}
            stroke="#FFFFFF"
            stroke-width="5"
          >
            <rect id="Rectangle-3" x="0" y="0" width="22" height="22" rx="6" />
          </g>
        </g>
      </svg>
    )
  }
}
