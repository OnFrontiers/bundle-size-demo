function HelloComponent() {
  const element = document.createElement('div');
  element.innerText = 'Hello from bundle size demo';
  return element;
}

document.body.appendChild(HelloComponent());
