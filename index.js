import join from 'lodash/join';

function HelloComponent() {
  const element = document.createElement('div');
  element.innerText = join(
    ['Hello from bundle size demo', 'with lodash join'],
    ' '
  );
  return element;
}

document.body.appendChild(HelloComponent());
