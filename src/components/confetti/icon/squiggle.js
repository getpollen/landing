import { h, Component } from 'preact'

export default class Squiggle extends Component {
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
            id="Confetti-Squiggle"
            transform={`translate(${this.props.x}, ${this.props.y}) rotate(${this.props.rotation})`}
            opacity={this.props.opacity}
            stroke-width="5"
            stroke="#FFFFFF"
          >
            <polyline
              id="Path-4"
              points="0 19.273826 2.74991568 8.23203033 15.7541957 11.9955118 20.1959868 0 30.1133339 2.49965734"
            />
          </g>
        </g>
      </svg>
    )
  }
}
