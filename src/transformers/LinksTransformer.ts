import links from '../constants/links';

export default class LinksTransformer {
  element(element: Element) {
    for (const link of links) {
      element.append(`<a href="${link.url}">${link.name}</a>`, {
        html: true,
      });
    }
  }
}
