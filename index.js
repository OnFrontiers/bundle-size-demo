function HelloComponent() {
  const button = document.createElement('button');
  button.innerText = 'Hello';
  button.onclick = () => {
    // webpackChunkName is a directive that defines the bundle name
    return import(
      /* webpackChunkName: "lodash" */
      'lodash/join'
    ).then(({ default: join }) => {
      const greeting = join(
        ['Hello from bundle size demo', 'with lodash loaded dynamically'],
        ' '
      );
      alert(greeting);
    });
  };
  return button;
}

document.body.appendChild(HelloComponent());
