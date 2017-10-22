const imgWidth = '480';
const imgHeight = '350';
const palette = {
  counter: 'rgb(66, 66, 92)',
  plate: 'rgb(211, 235, 255)',
  innerPlate: '#2C50D1',
  bread: 'brown'
};

const counterEl = `
  <rect id="counter" x="0" y="250px" fill="${palette.counter}" stroke="none" width="${imgWidth}px" height="100px" />
`;
const plateEl = `
  <circle id="outer-plate" fill="${palette.plate}" stroke="none" cx="-100px" cy="${imgHeight / 2}px" r="50px" />
  <circle id="inner-plate" fill="none" stroke="${palette.innerPlate}" stroke-width="3" cx="-100px" cy="${(imgHeight / 2)}px" r="45px" />
`;
const breadEl = `
  <g x="50px" y="50px">
    <polygon points="25,0 75,0 70,25 0,25" fill="${palette.bread}" />
  </g>
`;

export const illustration = `
<svg x="0px" y="0px" width="${imgWidth}px" height="${imgHeight}px" viewBox="0 0 ${imgWidth} ${imgHeight}">
  ${counterEl}
  ${breadEl}
  ${plateEl}
</svg>
`;
