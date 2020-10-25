import socials from '../constants/socials';

export default class SocialTransformer {
  element(element: Element) {
    element.removeAttribute('style');
    for (const social of socials) {
      element.append(`<a href="${social.url}">${social.svg}</a>`, {
        html: true,
      });
    }
  }
}
