export default function InputComponent() {
  const inputContainer = document.createElement('div');
  inputContainer.classList.add('input-container');

  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.id = 'ipAddressInput';
  inputField.placeholder = 'Digite o endereço ou IP';
  inputContainer.appendChild(inputField);

  const button = document.createElement('button');
  button.id = 'button';
  button.addEventListener('click', () => console.log('teste'));

  const arrow = document.createElement('div');
  arrow.id = 'arrow';
  button.appendChild(arrow);

  inputContainer.appendChild(button);

  return inputContainer;
}
