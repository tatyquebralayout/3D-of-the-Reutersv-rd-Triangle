# Ilusão Interativa em 3D do Triângulo de Reutersvärd

Este projeto demonstra uma ilusão interativa em 3D do Triângulo de Reutersvärd usando a biblioteca p5.js com WebGL. O projeto permite que os usuários ajustem a rotação nos eixos X, Y e Z para visualizar a ilusão de diferentes ângulos.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

- `index.html`: O arquivo HTML principal que estrutura a página.
- `css/style.css`: O arquivo CSS que contém os estilos da página.
- `js/sketch.js`: O arquivo JavaScript que contém o código p5.js responsável pela animação interativa em 3D.

## Como Usar

Para visualizar e interagir com a animação, siga os passos abaixo:

1. **Clone este repositório**:
    ```sh
    git clone https://github.com/tatyquebralayout/3D-of-the-Reutersv-rd-Triangle.git
    ```

2. **Navegue até o diretório do projeto**:
    ```sh
    cd 3D-of-the-Reutersv-rd-Triangle
    ```

3. **Abra o projeto em um editor de código como o VSCode**.

4. **Instale a extensão Live Server no VSCode**:
    - Abra o VSCode e vá para a aba de extensões.
    - Procure por "Live Server" e instale a extensão.

5. **Inicie o Live Server**:
    - Clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server".
    - O navegador abrirá uma nova aba servindo seu projeto localmente.

## Tecnologias Utilizadas

- **p5.js**: Uma biblioteca JavaScript que facilita o desenho e a manipulação de gráficos.
- **p5.dom.js**: Extensão da biblioteca p5.js para manipulação de elementos DOM.
- **p5.sound.js**: Extensão da biblioteca p5.js para manipulação de áudio.
- **HTML**: Linguagem de marcação utilizada para estruturar o conteúdo da web.
- **CSS**: Linguagem de estilo utilizada para definir a apresentação do conteúdo da web.
- **JavaScript**: Linguagem de programação utilizada para criar comportamentos dinâmicos no projeto.

## Funcionalidades

- **Rotação em X**: Permite ajustar a rotação do triângulo no eixo X.
- **Rotação em Y**: Permite ajustar a rotação do triângulo no eixo Y.
- **Rotação em Z**: Permite ajustar a rotação do triângulo no eixo Z.
- **Redefinir**: Redefine os parâmetros de rotação para seus valores iniciais.

## Estrutura do Código

### Variáveis Globais

- `rotationX`, `rotationY`, `rotationZ`: Armazenam os ângulos de rotação nos eixos X, Y e Z.

### Função `setup`

- **Canvas**: Cria um canvas 3D de 600x600 pixels e o anexa ao contêiner no HTML.
- **Sliders de Rotação**: Configura sliders para controlar a rotação nos eixos X, Y e Z.
- **Botão de Reset**: Configura um botão para redefinir os valores de rotação.

### Função `draw`

- **Fundo**: Limpa o fundo do canvas com branco.
- **Transformações**:
  - **Rotação**: Rotaciona o objeto 3D de acordo com os valores de rotação nos eixos X, Y e Z.
- **Desenho**:
  - **Triângulo de Reutersvärd 3D**: Chama a função para desenhar o triângulo em 3D com o tamanho especificado.

### Função `drawReutersvardTriangle3D`

- **Cálculos Geométricos**:
  - Calcula a raiz quadrada de 3 e usa esse valor para determinar a largura e altura do triângulo.
- **Desenho**:
  - **Triângulo Principal**: Desenha o triângulo principal.
  - **Formas Complementares**: Desenha as formas complementares à esquerda e à direita.

## Autora

Desenvolvido por [Taty Quebra Layout]. 
