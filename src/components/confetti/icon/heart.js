import { h, Component } from 'preact'

export default class Heart extends Component {
  render() {
    return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" {...this.props}>
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Desktop"
            fill-rule="nonzero"
            stroke-width="5"
            stroke="#FFFFFF"
            transform={`translate(${this.props.x}, ${this.props.y}) rotate(${this.props.rotation})`}
            opacity={this.props.opacity}
          >
            <path
              d="M146.700006,0 C144.229206,0 141.932406,1.11360004 140.400006,3.01680012 C138.867606,1.11360004 136.570805,0 134.100005,0 C129.633605,0 126.000005,3.63360014 126.000005,8.10000032 C126.000005,17.6844007 139.459206,28.2300011 140.032806,28.6740011 C140.140806,28.7580011 140.270406,28.8000011 140.400006,28.8000011 C140.529606,28.8000011 140.659206,28.7580011 140.767206,28.6740011 C141.340806,28.2300011 154.800006,17.6844007 154.800006,8.10000032 C154.800006,3.63360014 151.166406,0 146.700006,0 Z"
              id="Shape"
            />
          </g>
        </g>
      </svg>
    )
  }
}
