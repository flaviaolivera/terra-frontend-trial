import Collapsify from '@terrahq/collapsify';
import RevealItem from './modules/RevealItem';
class Main {
  constructor(options = {}) {
    this.DOM = {
      revealItems: document.querySelectorAll('.js--reveal-item'),
      playBtn: document.querySelector('.js--play'),
      pauseBtn: document.querySelector('.js--pause'),
      lottieElements: document.querySelectorAll('.js--lottie-element'),
    };
    this.instances = [];
    this.lottieInstances = options.lottieInstances || [];
    this.init();
    this.events();
  }

  init() {
    this.instances['collapsify'] = [];
    this.instances['collapsify'][0] = new Collapsify({
      onToggle: (isOpen, element) => {
        this.handleAccordionToggle(isOpen, element);
      },
    });
  }

  events() {
    if (this.DOM.playBtn) {
      this.DOM.playBtn.addEventListener('click', () => {
        this.lottieInstances.forEach(instance => {
          if (instance && typeof instance.play === 'function') {
            instance.play();
          }
        });
      });
    }

    if (this.DOM.pauseBtn) {
      this.DOM.pauseBtn.addEventListener('click', () => {
        this.lottieInstances.forEach(instance => {
          if (instance && typeof instance.pause === 'function') {
            instance.pause();
          }
        });
      });
    }
  }

  initRevealItems() {
    this.instances['RevealInstances'] = [];
    this.DOM.revealItems.forEach((item, index) => {
      this.instances['RevealInstances'][index] = new RevealItem({
        element: item,
      });
    });
  }

  handleAccordionToggle(isOpen, element) {
    const button = element.querySelector('.c--accordion-a__item__hd');
    const arrow = button.querySelector('.c--accordion-a__item__hd__artwork');

    if (arrow) {
      if (isOpen) {
        arrow.style.transform = 'rotate(180deg)';
        button.setAttribute('aria-expanded', 'true');
      } else {
        arrow.style.transform = 'rotate(0deg)';
        button.setAttribute('aria-expanded', 'false');
      }
    }
  }
}
export default Main;
