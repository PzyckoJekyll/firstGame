var game = new Phaser.Game(640, 360, Phaser.AUTO);

var GameState = {
  preload: function(){
      this.load.image('background','asset/images/background.jpg');
      this.load.image('ken','asset/images/Kenshiro.png');
      this.load.image('raul','asset/images/Raul.png');
  },
  create: function(){
      this.background = this.game.add.sprite(0,0,'background');
      this.ken = this.game.add.sprite(this.world.centerX,this.world.centerY,'ken');
      this.ken.anchor.setTo(0.5,0.5);
      this.raul = this.game.add.sprite(this.world.centerX,50,'raul');
      this.raul.anchor.setTo(0.5,0.5);
      this.raul.scale.setTo(0.3);
  },
  update: function(){
      
  } 
};

game.state.add('GameState',GameState);
game.state.start('GameState');
