import type { Mouse } from "../Mouse";
import { Pos2D } from "./Pos2D";

/**
 * Particle Class
 * It represents a particle contained in the Canvas component.
 * It has a position, a velocity and a radius.
 * It moves and bounces against the walls of the canvas.
 */
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