export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      html.addEventListener('click', handleOutsideclick);
    });
    element.setAttribute(outside, '');
  }

  function handleOutsideclick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener('click', handleOutsideclick);
      });
      callback();
    }
  }
}
