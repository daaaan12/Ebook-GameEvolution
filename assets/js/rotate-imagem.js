// Selecione a imagem
const rotatingImage = document.getElementById("rotating-image");

// Variáveis para controlar a rotação
let rotationDegree = 0;
let rotateInterval;

// Função para iniciar a rotação para a esquerda
function startRotateLeft() {
    clearInterval(rotateInterval);
    rotateInterval = setInterval(() => {
        rotationDegree -= 1;
        rotatingImage.style.transform = `rotate(${rotationDegree}deg)`;
    }, 10);
}

// Função para iniciar a rotação para a direita
function startRotateRight() {
    clearInterval(rotateInterval);
    rotateInterval = setInterval(() => {
        rotationDegree += 1;
        rotatingImage.style.transform = `rotate(${rotationDegree}deg)`;
    }, 10);
}

// Função para parar a rotação
function stopRotate() {
    clearInterval(rotateInterval);
}

// Adicione ouvintes de eventos aos botões ou a qualquer elemento que você deseja para controlar a rotação
