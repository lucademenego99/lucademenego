import type { Mouse } from "../Mouse";
import { Pos2D } from "./Pos2D";

export class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;

    constructor(x, y, vx, vy, radius, color) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = radius;
        this.color = color;
    }

    update(canvasWidth: number, canvasHeight: number, ctx: CanvasRenderingContext2D, mouse: Mouse) {
        // Make particle bounce to canvas edges
        if (this.x + this.radius > canvasWidth || this.x - this.radius < 0) {
            this.vx = -this.vx;
        }
        if (this.y + this.radius > canvasHeight || this.y - this.radius < 0) {
            this.vy = -this.vy;
        }

        // Check if the particle collides with the mouse
        // const dx = mouse.x - this.x;
        // const dy = mouse.y - this.y;
        // const distance = Math.sqrt(dx * dx + dy * dy);
        // if (distance  < mouse.radius + this.radius) {
        //     if (mouse.x < this.x && this.x < canvasWidth - (this.radius + 10)) {
        //         this.x += 10;
        //     }
        //     if (mouse.x > this.x && this.x > this.radius + 10) {
        //         this.x -= 10;
        //     }
        //     if (mouse.y < this.y && this.y < canvasHeight - (this.radius + 10)) {
        //         this.y += 10;
        //     }
        //     if (mouse.y > this.y && this.y > this.radius + 10) {
        //         this.y -= 10;
        //     }
        // }

        // Update the position
        this.x += this.vx;
        this.y += this.vy;

        // Draw the particle
        this.draw(ctx);
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    position() {
        return new Pos2D(this.x, this.y);
    }
}