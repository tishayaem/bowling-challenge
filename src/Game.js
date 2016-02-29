
 "use strict";

  function Game() {
   this.frameScore = [];
   this.calcScore = 0;
  }


 Game.prototype.bowl = function(pins) {
   this.frameScore.push(pins);
  };

  Game.prototype.finalScore = function() {

   for (var i = 0; i <= (this.frameScore.length -1); i++) {
     this.calcScore += this.frameScore[i];
     console.log(i + ': ' + this.calcScore);
   }
   return this.calcScore;
 };
