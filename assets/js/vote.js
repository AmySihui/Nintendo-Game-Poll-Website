const cards = document.querySelectorAll('.card');
const voteButtons = document.querySelectorAll('.vote-button');

window.addEventListener('load', () => {
  const savedVotes = JSON.parse(localStorage.getItem('votes')) || {};

  voteButtons.forEach((button, index) => {
    if (savedVotes[index]) {
      button.classList.add('voted');
      button.textContent = 'Vote Placed';

      cards.forEach((card, cardIndex) => {
        if (cardIndex !== index) {
          card.classList.add('card-disabled');
        }
      });
    }
  });
});

voteButtons.forEach((button, index) => {
  button.addEventListener('click', function () {
    let savedVotes = JSON.parse(localStorage.getItem('votes')) || {};

    if (this.classList.contains('voted')) {
      this.classList.remove('voted');
      this.textContent = 'Vote';

      cards.forEach(card => card.classList.remove('card-disabled'));

      delete savedVotes[index];
    } else {
      this.classList.add('voted');
      this.textContent = 'Vote Placed';

      cards.forEach((card, cardIndex) => {
        if (cardIndex !== index) {
          card.classList.add('card-disabled');
        }
      });

      savedVotes[index] = true;
    }

    localStorage.setItem('votes', JSON.stringify(savedVotes));
  });
});
