import { h, Component } from 'preact'

export default class Star extends Component {
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
            id="Confetti-Star"
            transform={`translate(${this.props.x}, ${this.props.y}) rotate(${this.props.rotation})`}
            opacity={this.props.opacity}
            stroke="#FFFFFF"
            stroke-width="5"
          >
            <path
              d="M13.5346589,21.2446443 L7.56447862,24.3833538 L7.56447862,24.3833538 C7.07563403,24.6403546 6.47100688,24.4524081 6.21400607,23.9635635 C6.111667,23.768903 6.07635233,23.545935 6.11352917,23.3291773 L7.25373214,16.6812839 L7.25373214,16.6812839 C7.30937008,16.3568899 7.20182159,16.0258897 6.96613551,15.7961525 L2.13615822,11.0880882 L2.13615822,11.0880882 C1.74067464,10.702587 1.73258234,10.0694738 2.11808355,9.67399019 C2.27159216,9.51650655 2.47273457,9.41401938 2.6903716,9.38239487 L9.36523604,8.41248029 L9.36523604,8.41248029 C9.6909462,8.36515183 9.97251179,8.16058246 10.1181738,7.86543898 L13.1032639,1.81698575 L13.1032639,1.81698575 C13.3476862,1.32173209 13.9473121,1.11839309 14.4425657,1.36281539 C14.6397783,1.46014562 14.7994058,1.61977315 14.8967361,1.81698575 L17.8818262,7.86543898 L17.8818262,7.86543898 C18.0274882,8.16058246 18.3090538,8.36515183 18.634764,8.41248029 L25.3096284,9.38239487 L25.3096284,9.38239487 C25.8561733,9.46181248 26.2348547,9.96925533 26.1554371,10.5158002 C26.1238126,10.7334372 26.0213254,10.9345796 25.8638418,11.0880882 L21.0338645,15.7961525 L21.0338645,15.7961525 C20.7981784,16.0258897 20.6906299,16.3568899 20.7462679,16.6812839 L21.8864708,23.3291773 L21.8864708,23.3291773 C21.9798318,23.8735138 21.614244,24.3904697 21.0699076,24.4838307 C20.8531499,24.5210076 20.6301819,24.4856929 20.4355214,24.3833538 L14.4653411,21.2446443 L14.4653411,21.2446443 C14.1740171,21.0914862 13.8259829,21.0914862 13.5346589,21.2446443 Z"
              id="Star"
            />
          </g>
        </g>
      </svg>
    )
  }
}