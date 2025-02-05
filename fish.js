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

var fish;

function preload() {
    this.load.image('sea', './assets/bg_azul-escuro.png');

    //load logo
    this.load.image('logo', './assets/logo-inteli_branco.png');

    //load fish
    this.load.image('fish', './assets/peixes/peixe_listra.png')
}

function create() {
    this.add.image(400, 300, 'sea');

    //add logo to screen
    this.add.image(400, 525, 'logo').setScale(0.5);

    fish = this.add.image(400, 300, 'fish');

    fish.setFlip(true, false);

    this.add.text(30, 20, 'Meu nome é Reimar :)', { font: '36px Al Nile'});

    
}

function update() {
    // add controls to fish
    fish.x = this.input.x;
    fish.y = this.input.y;
}