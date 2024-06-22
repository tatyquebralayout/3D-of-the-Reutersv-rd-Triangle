// Variáveis globais para armazenar os ângulos de rotação nos eixos X, Y e Z
let rotationX = 0;
let rotationY = 0;
let rotationZ = 0;

function setup() {
  // Cria um canvas 3D de 600x600 pixels e o anexa ao contêiner no HTML
  const canvas = createCanvas(600, 600, WEBGL);
  canvas.parent('canvas-container');
  
  // Configura o slider para controlar a rotação no eixo X
  const rotationXSlider = select('#rotationXSlider');
  rotationXSlider.input(() => {
    // Atualiza a variável rotationX com o valor do slider convertido para radianos
    rotationX = radians(rotationXSlider.value());
    // Redesenha o canvas com o novo valor de rotação
    redraw();
  });

  // Configura o slider para controlar a rotação no eixo Y
  const rotationYSlider = select('#rotationYSlider');
  rotationYSlider.input(() => {
    // Atualiza a variável rotationY com o valor do slider convertido para radianos
    rotationY = radians(rotationYSlider.value());
    // Redesenha o canvas com o novo valor de rotação
    redraw();
  });

  // Configura o slider para controlar a rotação no eixo Z
  const rotationZSlider = select('#rotationZSlider');
  rotationZSlider.input(() => {
    // Atualiza a variável rotationZ com o valor do slider convertido para radianos
    rotationZ = radians(rotationZSlider.value());
    // Redesenha o canvas com o novo valor de rotação
    redraw();
  });

  // Configura o botão de redefinir
  const resetButton = select('#reset');
  resetButton.mousePressed(() => {
    // Reseta as variáveis de rotação para 0
    rotationX = 0;
    rotationY = 0;
    rotationZ = 0;
    // Atualiza os valores dos sliders para corresponder às variáveis resetadas
    rotationXSlider.value(degrees(rotationX));
    rotationYSlider.value(degrees(rotationY));
    rotationZSlider.value(degrees(rotationZ));
    // Redesenha o canvas com os valores de rotação resetados
    redraw();
  });

  // Inicia o contexto de áudio após uma interação do usuário
  userStartAudio();

  // Desativa o loop de desenho contínuo
  noLoop();
}

function draw() {
  // Define o fundo do canvas como branco
  background(255);
  // Aplica as rotações nos eixos X, Y e Z ao objeto 3D
  rotateX(rotationX);
  rotateY(rotationY);
  rotateZ(rotationZ);

  // Desenha o triângulo de Reutersvärd em 3D com o tamanho especificado
  drawReutersvardTriangle3D(150);
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
  beginShape();
  vertex(-dw2, dh2, 0);
  vertex(0, -dh2, 0);
  vertex(dw2, dh2, 0);
  vertex(-dw2, dh2, 0);
  endShape(CLOSE);

  // Desenha a forma complementar à esquerda
  push();
  translate(-dw2, dh2, 0);
  rotateZ(-60);
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
  rotateZ(60);
  beginShape();
  vertex(0, 0, 0);
  vertex(-dw, 0, 0);
  vertex(-dw2, -dh2, 0);
  vertex(dw2, -dh2, 0);
  endShape(CLOSE);
  pop();
}
