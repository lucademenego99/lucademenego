<script lang="ts">
    import { onMount } from "svelte";
    import type { Mouse } from "../Mouse";
    import { Particle } from "../classes/Particle";
    import { Pos2D } from "../classes/Pos2D";

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    let particles: Array<Particle> = [];
    let mouse: Mouse;

    onMount(() => {
        mouse = {
            x: undefined,
            y: undefined,
            radius: 80,
        };

        const box = canvas.parentElement.getBoundingClientRect();
        canvas.width = box.width;
        canvas.height = box.height;

        // Add event listener on mouse move
        window.addEventListener("mousemove", (e) => {
            var bounds = canvas.getBoundingClientRect();
            mouse.x =
                ((e.clientX - bounds.left) / (bounds.right - bounds.left)) *
                canvas.width;
            mouse.y =
                ((e.clientY - bounds.top) / (bounds.bottom - bounds.top)) *
                canvas.height;
        });

        // Add event listener on mouse out
        window.addEventListener("mouseout", () => {
            mouse.x = undefined;
            mouse.y = undefined;
        }),
            (ctx = canvas.getContext("2d"));
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Create an array of particles
        for (let i = 0; i < (canvas.width * canvas.height) / 30000; i++) {
            const radius = Math.random() * 4 + 1;
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const vx = (Math.random() - 0.5) * 5;
            const vy = (Math.random() - 0.5) * 5;
            const color = "white";

            particles.push(new Particle(x, y, vx, vy, radius, color));
        }

        // Start the animation loop
        animate();

        // Check for resize event of the window, and update the canvas size
        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    });

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update(canvas.width, canvas.height, ctx, mouse);
        }
        linkParticles();
    }

    function linkParticles() {
        for (let i = 0; i < particles.length; i++) {
            // Check if the particle can link with the mouse
            const distance = Math.sqrt(
                Math.pow(particles[i].x - mouse.x, 2) +
                    Math.pow(particles[i].y - mouse.y, 2)
            );
            if (distance < 200) {
                connect(
                    distance,
                    particles[i].position(),
                    new Pos2D(mouse.x, mouse.y),
                    true
                );
            }

            for (let j = 0; j < particles.length; j++) {
                // If the distance between the particles is less than a predefined value, then connect them with a line
                const distance = Math.sqrt(
                    Math.pow(particles[i].x - particles[j].x, 2) +
                        Math.pow(particles[i].y - particles[j].y, 2)
                );
                if (distance < 150) {
                    connect(
                        distance,
                        particles[i].position(),
                        particles[j].position()
                    );
                }
            }
        }
    }

    function connect(
        distance: number,
        pos1: Pos2D,
        pos2: Pos2D,
        isMouse = false
    ) {
        if (isMouse) {
            ctx.strokeStyle = `rgba(155, 55, 255, ${1 - distance / 300})`;
            ctx.lineWidth = 1.0;
        } else {
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 200})`;
            ctx.lineWidth = 0.3;
        }
        ctx.beginPath();
        ctx.moveTo(pos1.x, pos1.y);
        ctx.lineTo(pos2.x, pos2.y);
        ctx.stroke();
    }
</script>

<canvas bind:this={canvas} />

<style>
    canvas {
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>
