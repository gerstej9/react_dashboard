const Logo = ({ height = 36, width = 36, style = { margin: '11px 7px 6px -6px' } }) => (
  <div style={style}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 84.82 92.28"
      height={height}
      width={width}
    >
      <defs>
        <style>{`.cls-1{fill:url(#New_Gradient_Swatch);}`}</style>
        <linearGradient id="New_Gradient_Swatch" x1="14.38" y1="80.76" x2="70.44" y2="11.53" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ba0095"/>
          <stop offset="0.39" stopColor="#ea536c"/>
          <stop offset="0.55" stopColor="#f47240"/>
          <stop offset="1" stopColor="#ffc24d"/>
        </linearGradient>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path className="cls-1" d="M42.41,92.28a4.45,4.45,0,0,1-2.18-.56L2.35,70.92A4.54,4.54,0,0,1,0,67V25.34a4.51,4.51,0,0,1,2.35-4L40.23.56a4.51,4.51,0,0,1,4.36,0L82.47,21.37a4.51,4.51,0,0,1,2.35,4V30.5c0,.17,0,.33,0,.5s0,.33,0,.49V67a4.54,4.54,0,0,1-2.35,4L44.59,91.72A4.45,4.45,0,0,1,42.41,92.28ZM9.78,64.66,42.41,82.59,75.76,64.27V39.85L55.82,50.62a4.53,4.53,0,0,1-4.4.05l-6.19-3.56a2.89,2.89,0,0,0-2.86-.06ZM9.06,28V53.55L41.56,35.3a4.53,4.53,0,0,1,4.37,0l6.24,3.38a2.9,2.9,0,0,0,2.73,0L75.63,27.94,42.41,9.7Z"/>
        </g>
      </g>
    </svg>
  </div>
);

export default Logo;
