const personagem = {
    sprites: {
        inicial: 'sprites/inicial.png',
        esquerda: ['sprites/esquerda1.png', 'sprites/esquerda2.png', 'sprites/esquerda3.png', 'sprites/esquerda4.png'],
        direita: 'sprites/direita.png',
        cima: 'sprites/cima.png',
        baixo: 'sprites/baixo.png',
    },
    spriteIndex: 0, // O índice atual do sprite a ser exibido
    movimentoAtual: 'inicial',
    moverParaEsquerda: function() {
        this.movimentoAtual = 'esquerda';
        // Atualiza o spriteIndex para mostrar o próximo sprite da esquerda
        this.spriteIndex = (this.spriteIndex + 1) % this.sprites.esquerda.length;
        document.getElementById('personagem').style.backgroundImage = 'url(' + this.sprites.esquerda[this.spriteIndex] + ')';
    },
    // Resto das funções de movimento aqui...
};
