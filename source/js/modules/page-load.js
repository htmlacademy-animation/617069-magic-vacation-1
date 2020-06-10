export default () => {
  const page = document.querySelector(`body`);

  window.addEventListener(`load`, () => {
    page.classList.add(`page--loaded`);
  });
};
