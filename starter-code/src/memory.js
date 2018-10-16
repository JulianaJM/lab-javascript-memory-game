var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = null;
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function() {
  for (var i = 0; i < this.cards.length; i++) {
    var randomIndex = Math.floor(Math.random() * this.cards.length);

    var tmp = this.cards[randomIndex];
    this.cards[randomIndex] = this.cards[this.cards.length - 1];
    this.cards[this.cards.length - 1] = tmp;
    this.cards.length--;
  }
  return undefined;
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard === secondCard) {
    this.pairsGuessed++;
  }
  return firstCard === secondCard;
};

MemoryGame.prototype.isFinished = function() {
  var pairsToGuess = this.cards.length / 2;
  if (this.pairsGuessed === pairsToGuess) return true;
  return false;
};
