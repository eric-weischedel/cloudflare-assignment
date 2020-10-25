export default class BodyTransformer {
  element(element: Element) {
    element.removeAttribute('class');
    element.setAttribute('style', 'background-color: #0C3C22');
  }
}
