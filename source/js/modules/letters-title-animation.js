export default () => {
  class AccentTypographyBuild {
    constructor(elementSelector, timer, classForActivate, property) {
      this._TIME_SPACE = 100;

      this._elementSelector = elementSelector;
      this._timer = timer;
      this._classForActivate = classForActivate;
      this._property = property;
      this._element = document.querySelector(this._elementSelector);
      this._timeOffset = 20;

      this.prepareText();
    }

    createElement(letter, index) {
      const span = document.createElement(`span`);
      span.textContent = letter;
      span.style.transition = `${this._property} ${this._timer}ms ease-out ${this._timeOffset}ms`;
      if (index % 3 === 0) {
        this._timeOffset = (index + 2) * 30;
      } else if (index % 3 === 1) {
        this._timeOffset = (index - 2) * 30;
      } else {
        this._timeOffset = (index + 2) * 30;
      }
      return span;
    }

    prepareText() {
      if (!this._element) {
        return;
      }
      const text = this._element.textContent
        .trim()
        .split(` `)
        .filter((latter) => latter !== ``);

      const content = text.reduce((fragmentParent, word) => {
        const wordElement = Array.from(word).reduce((fragment, letter, index) => {
          fragment.appendChild(this.createElement(letter, index));
          return fragment;
        }, document.createDocumentFragment());
        const wordContainer = document.createElement(`span`);
        wordContainer.classList.add(`text__word`);
        wordContainer.appendChild(wordElement);
        fragmentParent.appendChild(wordContainer);
        return fragmentParent;
      }, document.createDocumentFragment());

      this._element.innerHTML = ``;
      this._element.appendChild(content);
    }

    runAnimation() {
      if (!this._element) {
        return;
      }
      this._element.classList.add(this._classForActivate);
    }

    destroyAnimation() {
      this._element.classList.remove(this._classForActivate);
    }
  }

  const animationTopScreenTextLine = new AccentTypographyBuild(`.intro__title`, 500, `active`, `transform`
  );
  const animationTopScreenDateLine = new AccentTypographyBuild(`.intro__date`, 500, `active`, `transform`
  );
  setTimeout(() => {
    animationTopScreenTextLine.runAnimation();
  }, 500);
  setTimeout(() => {
    animationTopScreenDateLine.runAnimation();
  }, 1000);
};
