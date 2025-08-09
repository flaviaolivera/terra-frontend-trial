/**
 * Project.js
 *
 * This class handles the initialization of a web project by preloading assets
 * (images and Lottie animations) and managing the transition from the preloader
 * to the main site content using GSAP animations.
 *
 * * REFACTOR NOTES:
 * * - Fixed interaction issues where buttons/accordions were unclickable after preloader
 * * - Changed from blocking asset loading to immediate Main.js initialization
 * * - Assets now load in background while site is already interactive
 * * - Preloader is properly removed from DOM after animation (was just invisible before)
 *
 * Dependencies:
 * - GSAP (GreenSock Animation Platform)
 * - @terrahq/helpers/preloadImages
 * - @terrahq/helpers/preloadLotties
 * * - @js/Main.js (dynamically imported when animation reaches 50%) --> @js/Main.js (loaded immediately for interactivity)
 *
 * Features:
 * - Preloads all `<img>` elements and elements with `.js--lottie-element` class.
 * * - Waits for a simulated async delay before continuing. --> Loads Main.js immediately for instant interactivity
 * - Fades out the preloader element (`.c--preloader-a`) with a GSAP animation.
 * * - Dynamically loads and initializes the Main class when animation is halfway. --> Removes preloader from DOM after animation completes.
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
    this.debug = false;

    this.init();
  }
  async init() {
    // eslint-disable-next-line no-console
    console.log('Project initialized');

    const { default: Main } = await import('@js/Main.js');
    const mainInstance = new Main({
      boostify: this.boostify,
      debug: this.terraDebug,
      lottieInstances: [],
    });

    await this.loadAssetsInBackground(mainInstance);
    mainInstance.initRevealItems();

    const tl = gsap.timeline();
    tl.to('.c--preloader-a', {
      delay: 0.5,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        const preloader = document.querySelector('.c--preloader-a');
        if (preloader) {
          preloader.remove();
        }
      },
    });
  }

  async loadAssetsInBackground(mainInstance) {
    try {
      if (this.DOM.images.length > 0) {
        const { preloadImages } = await import(
          '@terrahq/helpers/preloadImages'
        );
        await preloadImages({
          selector: this.DOM.images,
        });
      }

      if (this.DOM.lotties.length > 0) {
        const { preloadLotties } = await import(
          '@terrahq/helpers/preloadLotties'
        );
        this.lottieInstances = await preloadLotties({
          selector: this.DOM.lotties,
        });

        if (mainInstance && this.lottieInstances) {
          mainInstance.lottieInstances = this.lottieInstances;
        }
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error loading assets in background:', error);
    }
  }
}
export default Project;
