export default () => {
  const animationText = document.querySelectorAll(`.rules__item p`);
  const animationLink = document.querySelector(`.rules__link`);

  animationText.forEach((item, index, array) => {
    item.addEventListener(`animationend`, () => {
      if (index === array.length - 1) {
        animationLink.classList.add(`rules__link--show`);
      }
    });
  });

  animationLink.addEventListener(`animationend`, () => {
    animationLink.classList.remove(`rules__link--show`);
  });
};
