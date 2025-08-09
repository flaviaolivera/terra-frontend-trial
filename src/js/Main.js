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
      closeOthers: false,
    });
  }

  events() {
    if (this.DOM.playBtn) {
      this.DOM.playBtn.addEventListener('click', () => {
        if (window.WL && window.WL['lottieSection']) {
          window.WL['lottieSection'].play();
        }
      });
    }

    if (this.DOM.pauseBtn) {
      this.DOM.pauseBtn.addEventListener('click', () => {
        if (window.WL && window.WL['lottieSection']) {
          window.WL['lottieSection'].pause();
        }
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
}
export default Main;
