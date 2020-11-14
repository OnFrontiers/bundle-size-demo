import moment from 'moment';

function HelloComponent() {
  const element = document.createElement('div');
  element.innerText = `Now ${moment().format('L LT')}`;
  return element;
}

document.body.appendChild(HelloComponent());
