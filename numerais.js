let number = 1;

SPINE = [0, 0, 7, 0]

VERTICES = [
  [0, -2, 2, -2], // 0
  [0, 0,  0, -2], // 1
  [2, 0, 2, -2],  // 2
  [0, 0,  2, -2], // 3
  [0, -2, 2,  0], // 4
]

SEGMENTS = [
  [1], // 1
  [2], // 2
  [3], // 3
  [4], // 4
  [1, 4], // 5
  [0], // 6
  [0, 1], // 7
  [0, 2], // 8
  [0, 1, 2] // 9
]

function setup() {
  createCanvas(600, 600);
  frameRate(1);
  textSize(1);
  textStyle(BOLD)
  textAlign(CENTER, CENTER);
}

EXP10 = [0, 1, 2, 3]

function digit(d, exp10) {
  if (d < 1 || d > 9) {
        throw new Error('Digit must be between 1 and 9, was ' + d);
    }
  if (! EXP10.includes(exp10)) {
        throw new Error('Exponent must be in [' + EXP10 + '], was ' + exp10);
  }
  vSign = (exp10 === 1 || exp10 === 3) ? 1 : -1;
  segments = SEGMENTS[d-1];
  for (let i = 0; i < segments.length; i++) {
    s = segments[i];
    v = VERTICES[s];
    line(v[0],v[1]*vSign,v[2],v[3]*vSign);
  }
}

function numeral(n) {
  line(SPINE[0],SPINE[1],SPINE[2],SPINE[3]);
  for (let exp10 = 1; exp10 < 3; exp10++) {
    let pow10 = 10 ** exp10;
    let d = n % pow10;
    console.log(n, exp10, pow10, d);
    if (d > 0) digit(d, exp10);
  }

}

function draw() {
  background(0);
  stroke(255, 170, 20);
  fill(200, 0, 0);
  strokeWeight(0.15);
  translate(40, 200);
  scale(70);
  numeral(number);
  stroke(0);
  text(number, 4, 3)
  number++;
}