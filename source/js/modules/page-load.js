export default () => {
  const page = document.querySelector(`body`);

  document.addEventListener(`DOMContentLoaded`, () => {
    setTimeout(() => {
      page.classList.add(`page--loaded`);
    }, 50);
  });
};
