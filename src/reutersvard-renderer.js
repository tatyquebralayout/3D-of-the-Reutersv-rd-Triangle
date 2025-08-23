/**
 * Reutersvärd Triangle - WebGL 3D Renderer
 * Interactive impossible geometry visualization using p5.js WebGL
 * 
 * @fileoverview Main rendering engine for the Reutersvärd Triangle illusion
 * @author Tatiana Barros
 * @version 4.0.0
 * @module ReutersvardRenderer
 */

console.log('📦 ReutersvardRenderer loading...');

// Variáveis globais para armazenar os ângulos de rotação nos eixos X, Y e Z
let rotationX = 0;
let rotationY = 0;
let rotationZ = 0;

/**
 * p5.js setup function - called once at startup
 */
function setup() {
    console.log('🎨 p5.js setup() iniciado...');

    try {
        // Cria um canvas 3D de 600x600 pixels como no original
        const canvas = createCanvas(600, 600, WEBGL);

        // Find canvas container
        const container = document.getElementById('canvas-container');
        if (container) {
            canvas.parent(container);
            console.log('🎨 Canvas attached to container');
        } else {
            console.error('❌ Canvas container not found');
            // Fallback: attach to body
            canvas.parent(document.body);
        }

        console.log('🎨 Canvas 600x600 WEBGL criado');

        // Hide loading indicator
        const loadingElement = document.getElementById('loading');
        if (loadingElement) {
            loadingElement.style.display = 'none';
            console.log('✅ Loading indicator hidden');
        }

        // Immediate test draw with dark background
        background(20);
        fill(255, 0, 0);
        noStroke();
        box(100);
        console.log('🔴 Test red box drawn');

        // Setup controls
        setTimeout(() => {
            setupSliders();
            setupResetButton();
        }, 100);

        // Force initial draw with dark background
        noLoop();
        redraw();

        console.log('✅ p5.js setup() concluído');
    } catch (error) {
        console.error('❌ Erro no setup():', error);
    }
}

/**
 * p5.js draw function - called every frame
 */
function draw() {
    // Define o fundo do canvas como escuro para melhor contraste
    background(20);

    // Aplica as rotações nos eixos X, Y e Z ao objeto 3D
    rotateX(rotationX);
    rotateY(rotationY);
    rotateZ(rotationZ);

    // Desenha o triângulo de Reutersvärd em 3D com o tamanho especificado
    drawReutersvardTriangle3D(150);
}

function setupSliders() {
    console.log('Setting up sliders...');

    // Configura o slider para controlar a rotação no eixo X
    const rotationXSlider = document.getElementById('rotationXSlider');
    if (rotationXSlider) {
        rotationXSlider.addEventListener('input', () => {
            rotationX = radians(rotationXSlider.value);
            redraw();
        });
        console.log('X slider connected');
    }

    // Configura o slider para controlar a rotação no eixo Y
    const rotationYSlider = document.getElementById('rotationYSlider');
    if (rotationYSlider) {
        rotationYSlider.addEventListener('input', () => {
            rotationY = radians(rotationYSlider.value);
            redraw();
        });
        console.log('Y slider connected');
    }

    // Configura o slider para controlar a rotação no eixo Z
    const rotationZSlider = document.getElementById('rotationZSlider');
    if (rotationZSlider) {
        rotationZSlider.addEventListener('input', () => {
            rotationZ = radians(rotationZSlider.value);
            redraw();
        });
        console.log('Z slider connected');
    }
}

function setupResetButton() {
    const resetButton = document.getElementById('reset');
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            rotationX = 0;
            rotationY = 0;
            rotationZ = 0;

            // Update sliders
            const rotationXSlider = document.getElementById('rotationXSlider');
            const rotationYSlider = document.getElementById('rotationYSlider');
            const rotationZSlider = document.getElementById('rotationZSlider');

            if (rotationXSlider) rotationXSlider.value = 0;
            if (rotationYSlider) rotationYSlider.value = 0;
            if (rotationZSlider) rotationZSlider.value = 0;

            redraw();
        });
        console.log('Reset button connected');
    }
}

function drawReutersvardTriangle3D(size) {
    // Calcula a raiz quadrada de 3 para uso nos cálculos geométricos
    const rt3 = sqrt(3);
    // Define a largura e altura do triângulo usando o tamanho especificado
    const dw = size;
    const dh = 2 / rt3 * dw;
    const dh2 = dh / 2;
    const dw2 = dw / 2;

    // Desenha o triângulo principal
    fill(255, 120, 120); // Vermelho mais vibrante
    stroke(255);
    strokeWeight(1);
    beginShape();
    vertex(-dw2, dh2, 0);
    vertex(0, -dh2, 0);
    vertex(dw2, dh2, 0);
    vertex(-dw2, dh2, 0);
    endShape(CLOSE);

    // Desenha a forma complementar à esquerda
    push();
    translate(-dw2, dh2, 0);
    rotateZ(radians(-60));
    fill(120, 255, 120); // Verde mais vibrante
    beginShape();
    vertex(0, 0, 0);
    vertex(dw, 0, 0);
    vertex(dw2, -dh2, 0);
    vertex(-dw2, -dh2, 0);
    endShape(CLOSE);
    pop();

    // Desenha a forma complementar à direita
    push();
    translate(dw2, dh2, 0);
    rotateZ(radians(60));
    fill(120, 120, 255); // Azul mais vibrante
    beginShape();
    vertex(0, 0, 0);
    vertex(-dw, 0, 0);
    vertex(-dw2, -dh2, 0);
    vertex(dw2, -dh2, 0);
    endShape(CLOSE);
    pop();
}

// Make functions global for p5.js
window.setup = setup;
window.draw = draw;

console.log('✅ ReutersvardRenderer loaded and functions exported');