// background falling squares for front page

const colors = [
  // "#7c655a",
  "#b292ac",
  // "#a7cae5",
  "#9fb292"

];

let rectangles = [];

class Rectangle {
  constructor() {
    this.size = random(9,13);
    this.x = random(0 - 50, windowWidth + 50);
    this.y = 0 - random(400, 700);
    this.yspeed = random(0.2,2);
    this.color = colors[floor(random(0, colors.length))];
  }

  move() {
    this.y += this.yspeed;
  }

  check() {
    if (this.y >= windowHeight + 100) {
      this.x = random(0, windowWidth);
      this.y = -100;
    }
  }

  display() {
    noStroke();
    fill(color(this.color));
    ellipse(this.x,this.y,this.size);
    // square(this.x, this.y, this.size);
  }
}

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('indexBackground');
  
}

function draw() {
  background(255);

  for (let i = 0; i < 15; i++) {
    let rectangle = new Rectangle();
    rectangles.push(rectangle);
    rectangles[i].move();
    rectangles[i].check();
    rectangles[i].display();
  }
}