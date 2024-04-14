SPINE = [0, 0, 7, 0]

VERTICES = [
  [0, -2, 2, -2], // 0
  [0, 0,  0, -2], // 1
  [2, 0, 2, -2],  // 2
  [0, 0,  2, -2], // 3
  [0, -2, 2,  0], // 4
]

SEGMENTS = [
  [],
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


function digit(n) {
  segments = SEGMENTS[n];
  for (let i = 0; i < segments.length; i++) {
    s = segments[i];
    v = VERTICES[s]
    line(v[0],v[1],v[2],v[3]);  
  }
  v = SPINE;
  line(v[0],v[1],v[2],v[3]);  
}

function draw() {
  background(0);
  stroke(255, 170, 20);
  fill(200, 0, 0);
  strokeWeight(.15);
  translate(40, 200);
  scale(70);
  n = frameCount % SEGMENTS.length;
  digit(n);
  stroke(0);
  text(n, 4, 3)
}