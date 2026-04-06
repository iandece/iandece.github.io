<template>
  <canvas ref="canvas" class="fixed inset-0 -z-10 pointer-events-none"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useColorMode } from '@vueuse/core';

const canvas = ref(null);
let ctx, animationId;

const colorMode = useColorMode();

const MAX_POINTS = 20;
let points = [];

class LightPoint {
  constructor(w, h) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;

    this.size = Math.random() * 1 + 0.5;
    this.maxSize = this.size + Math.random() * 3;

    this.life = 0;
    this.maxLife = 100 + Math.random() * 80;

    this.opacity = 0;
    this.color = this.getBaseColor();
  }

  getBaseColor() {
    if (colorMode.value === 'dark') {
      const colors = [
        [120, 140, 255],
        [180, 120, 255],
        [120, 220, 255],
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    } else {
      const colors = [
        [180, 190, 220],
        [160, 180, 255],
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  }

  update() {
    this.life++;

    // grow
    this.size += (this.maxSize - this.size) * 0.05;

    // fade in/out
    const progress = this.life / this.maxLife;
    this.opacity = Math.sin(progress * Math.PI);

    // color shift near end
    if (progress > 0.7) {
      this.color[0] += 0.3;
      this.color[1] += 0.2;
      this.color[2] += 0.5;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

    ctx.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${this.opacity * 0.8})`;
    ctx.fill();
  }

  isDead() {
    return this.life >= this.maxLife;
  }
}

const spawn = (w, h) => {
  if (points.length < MAX_POINTS && Math.random() < 0.05) {
    points.push(new LightPoint(w, h));
  }
};

const draw = () => {
  const w = canvas.value.width;
  const h = canvas.value.height;

  ctx.clearRect(0, 0, w, h);

  spawn(w, h);

  points = points.filter((p) => !p.isDead());

  points.forEach((p) => {
    p.update();
    p.draw(ctx);
  });

  animationId = requestAnimationFrame(draw);
};

const resize = () => {
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;
};

onMounted(() => {
  ctx = canvas.value.getContext('2d');

  resize();
  draw();

  window.addEventListener('resize', resize);
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener('resize', resize);
});
</script>
