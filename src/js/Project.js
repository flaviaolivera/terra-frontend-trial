/**
 * Project.js
 *
 * This class handles the initialization of a web project by preloading assets
 * (images and Lottie animations) and managing the transition from the preloader
 * to the main site content using GSAP animations.
 *
 * Dependencies:
 * - GSAP (GreenSock Animation Platform)
 * - @terrahq/helpers/preloadImages
 * - @terrahq/helpers/preloadLotties
 * - @js/Main.js (dynamically imported when animation reaches 50%)
 *
 * Features:
 * - Preloads all `<img>` elements and elements with `.js--lottie-element` class.
 * - Waits for a simulated async delay before continuing.
 * - Fades out the preloader element (`.c--preloader-a`) with a GSAP animation.
 * - Dynamically loads and initializes the Main class when animation is halfway.
 *
 * Constructor:
 * - Automatically initializes the process upon instantiation.
 *
 * Example usage:
 *
 * import Project from './Project';
 * new Project();
 *
 */

import gsap from 'gsap';
class Project {
  constructor() {
    this.DOM = {
      images: document.querySelectorAll('img'),
      lotties: document.querySelectorAll('.js--lottie-element'),
    };
    this.debug = false; // Set to true to enable debug mode

    this.init();
  }
  async init() {
    // eslint-disable-next-line no-console
    console.log('Project initialized');
    try {
      // Preload images and lotties

      if (this.DOM.images) {
        const { preloadImages } = await import(
          '@terrahq/helpers/preloadImages'
        );
        await preloadImages({
          selector: this.DOM.images,
        });
      }

      if (this.DOM.lotties) {
        const { preloadLotties } = await import(
          '@terrahq/helpers/preloadLotties'
        );
        this.lottieInstances = await preloadLotties({
          selector: this.DOM.lotties,
        });
      }

      // Simulate another async operation
      await new Promise(resolve => setTimeout(resolve, 2300));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error during project initialization:', error);
    } finally {
      const tl = gsap.timeline({
        onUpdate: async () => {
          // //* Check if the animation is at least 50% complete and the function hasn't been executed yet
          if (tl.progress() >= 0.5 && !this.halfwayExecuted) {
            this.halfwayExecuted = true;
            const { default: Main } = await import('@js/Main.js');
            new Main({
              boostify: this.boostify,
              debug: this.terraDebug,
              lottieInstances: this.lottieInstances,
            });
          }
        },
      });
      tl.to('.c--preloader-a', {
        delay: 0.5,
        opacity: 0,
        duration: 0.5,
      });
    }
  }
}
export default Project;
