export class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.velocityY = 0;
    this.gravity = 1;
    this.jumpStrength = -15;
    this.grounded = false;
  }
  jump() {
    if (this.grounded) {
      this.velocityY = this.jumpStrength;
      this.grounded = false;
    }
  }

  update() {
    this.velocityY += this.gravity;
    this.y += this.velocityY;

    if (this.y + this.height >= 620) {
      this.y = 620 - this.height;
      this.velocityY = 0;
      this.grounded = true;
    }
  }

  draw(ctx) {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
