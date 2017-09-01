import { h, Component } from 'preact'
import style from './style'

export default class Curve extends Component {
  render() {
    return (
      <svg
        width="1920px"
        height="119px"
        viewBox="0 0 1920 119"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className={style.footerCurve}
      >
        <defs>
          <rect id="path-1" x="0" y="0" width="1920" height="124" />
          <path
            d="M0,75.7100801 C124.814092,134.346829 255.485323,140.666568 392.013694,94.6692957 C596.80625,25.6733875 736.289107,28.4044865 911.5368,28.4044865 C1086.78449,28.4044865 1244.18776,94.6692957 1377.41265,94.6692957 C1510.63755,94.6692957 1580.57247,43.3225207 1655.98962,43.3225207 C1731.40677,43.3225207 1896.62883,135.260717 1960.38353,102.125671 C2002.88667,80.0356409 2020.11982,45.9937504 2012.08298,0 L13.8394362,0 L0,75.7100801 Z"
            id="path-3"
          />
          <filter
            x="-0.7%"
            y="-10.0%"
            width="101.4%"
            height="123.2%"
            filterUnits="objectBoundingBox"
            id="filter-4"
          >
            <feOffset
              dx="0"
              dy="2"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            />
            <feGaussianBlur
              stdDeviation="4.5"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.11 0"
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
          <g id="Desktop" transform="translate(0.000000, -1355.000000)">
            <g id="Bottom-Curve" transform="translate(0.000000, 1355.000000)">
              <mask id="mask-2" fill="white">
                <use href="#path-1" />
              </mask>
              <use id="Mask" fill-opacity="0" fill="#FFFFFF" href="#path-1" />
              <g id="Group-7" mask="url(#mask-2)">
                <g transform="translate(-35.000000, -25.000000)" id="Path-3">
                  <path
                    d="M41,77.7996434 C120.066206,150.059739 227.894606,163.163944 364.485201,117.112258 C569.371093,48.0347292 681.070463,15.54539 856.398026,15.54539 C1031.72559,15.54539 1065.67789,104.246484 1198.9635,104.246484 C1332.24912,104.246484 1551.71883,54.7621327 1682.86447,56.1266532 C1814.01011,57.4911737 1919.64224,144.812553 1983.426,111.638309 C2025.94851,89.5221468 2049.47318,52.9760437 2054,2 L54.8457437,2 L41,77.7996434 Z"
                    fill="#FCD696"
                    fill-rule="evenodd"
                  />
                  <g fill="none">
                    <use
                      fill="black"
                      fill-opacity="1"
                      filter="url(#filter-4)"
                      href="#path-3"
                    />
                    <use fill="#FFFFFF" fill-rule="evenodd" href="#path-3" />
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
