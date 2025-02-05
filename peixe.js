var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image('mar', './assets/bg_azul-escuro.png');

    //load logo
    this.load.image('logo', './assets/logo-inteli_branco.png');

    //load fish
    this.load.image('peixe', './assets/peixes/peixe_listra.png')
}

function create() {
    this.add.image(400, 300, 'mar');

    //add logo to screen
    this.add.image(400, 525, 'logo').setScale(0.5);

    peixinho = this.add.image(400, 300, 'peixe');

    peixinho.setFlip(true, false);

    this.add.text(30, 20, 'Meu nome é Reimar :)', { font: '36px Al Nile'});

    
}

function update() {
    // add controls to fish
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}