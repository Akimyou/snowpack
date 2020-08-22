import { hello } from './hello.js';
import { sayHello } from './sub.js';

console.log('index say: ', hello);
console.log('sub say:', sayHello());

if (import.meta.hot) {
  import.meta.hot.accept();
}
