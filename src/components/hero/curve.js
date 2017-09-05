import { h, Component } from 'preact'
import style from './style'

export default class Curve extends Component {
  render() {
    return (
      <svg
        viewBox="0 0 1920 635"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={style.heroCurve}
      >
        <defs>
          <rect id="curve-path-1" x="0" y="0" width="1920" height="653" />
          <path
            d="M158.1614,513.051789 C221.1092,455.987122 283.97124,478.567414 342.631042,527.71674 C401.290844,576.866066 477.359915,609.67466 559.260662,527.71674 C641.16141,445.758819 770.116132,278.475535 1100.74895,419.367625 C1431.38178,560.259716 1472.39253,563.469759 1550.00528,243.776997 C1627.61803,-75.9157651 1972.97333,-85.5812124 2073.91279,243.776997 C2141.20576,463.349137 2141.20576,672.840689 2073.91279,872.251653 L139.4114,872.251653 C109.946201,670.828189 116.196201,551.094901 158.1614,513.051789 Z"
            id="curve-path-3"
          />
          <filter
            x="-0.8%"
            y="-2.9%"
            width="101.6%"
            height="103.9%"
            filterUnits="objectBoundingBox"
            id="filter-4"
          >
            <feOffset
              dx="0"
              dy="-9"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            />
            <feGaussianBlur
              stdDeviation="4"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.0315047554 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
        </defs>
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g id="Desktop" transform="translate(0.000000, -133.000000)">
            <g id="Top-Curve" transform="translate(0.000000, 115.000000)">
              <mask id="mask-2" fill="white">
                <use href="#curve-path-1" />
              </mask>
              <use id="Mask" fill="#FFFFFF" opacity="0" href="#curve-path-1" />
              <g id="Curve" mask="url(#mask-2)">
                <g
                  transform="translate(-152.750000, 34.750000)"
                  id="Curve-Path-2"
                >
                  <path
                    d="M22.7738672,583.074891 C85.7216667,526.010224 199.207474,429.72224 279.736062,475.066381 C360.26465,520.410523 431.817412,673.265358 526.925191,537.181477 C622.03297,401.097597 932.159079,295.614935 1204.36114,438.391252 C1476.56321,581.167568 1504.86767,286.50708 1576.00696,170.458586 C1647.14625,54.4100916 1890.28583,-43.8256027 1991.22529,285.532607 C2058.51826,505.104746 2058.51826,695.846298 1991.22529,857.757263 L75.4738998,857.757263 C-1.62465496,712.678793 -19.1913325,621.118003 22.7738672,583.074891 Z"
                    fill="#FCD696"
                    fill-rule="evenodd"
                  />
                  <g fill="none">
                    <use
                      fill="black"
                      fill-opacity="1"
                      filter="url(#filter-4)"
                      href="#curve-path-3"
                    />
                    <use
                      fill="#FFFFFF"
                      fill-rule="evenodd"
                      href="#curve-path-3"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}
