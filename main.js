// Set up canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set up particles
const particles = [];
for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: Math.random() * 4 - 2,
    vy: Math.random() * 4 - 2,
    radius: 10,
    color: "#fff"
  });
}

// Set up update function
function update() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Update particle positions and velocities
  particles.forEach(particle => {
    particle.x += particle.vx;
    particle.y += particle.vy;
    
    // Bounce off walls
    if (particle.x < particle.radius || particle.x > canvas.width - particle.radius) {
      particle.vx = -particle.vx;
    }
    if (particle.y < particle.radius || particle.y > canvas.height - particle.radius) {
      particle.vy = -particle.vy;
    }
    
    // Draw particle
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();
  });
  
  // Call update function again
  requestAnimationFrame(update);
}

// Call update function
update();
