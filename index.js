import _ from 'lodash';

function HelloComponent() {
  const element = document.createElement('div');
  element.innerText = _.join(
    ['Hello from bundle size demo', 'with lodash'],
    ' '
  );
  return element;
}

document.body.appendChild(HelloComponent());
