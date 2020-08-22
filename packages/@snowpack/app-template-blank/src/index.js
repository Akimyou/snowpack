import { hello } from './hello.js';
import { sayHello } from './sub.js';
import count from './count.json'

console.log('index say: ', hello);
console.log('sub say:', sayHello());

setInterval(() => {
  console.log('count', count);
}, 1000);

if (import.meta.hot) {
  import.meta.hot.accept();
}
