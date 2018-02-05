export class Person {
  constructor(value) {
    this.name = value;
  }
  greet() {
    return `Hello from ${this.name}`;
  }
}

document.onload = (function() {
  let button = document.createElement('button');
  button.textContent = 'click me';
  button.addEventListener('click', () => {
    alert(
      (function() {
        let person = new Person('Maciek');
        return person.greet();
      })()
    );
  });
  document.getElementById('here').appendChild(button);
})();
