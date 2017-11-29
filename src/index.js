import { message } from './components/foo';

// In a file in the same directory
import fruit from './fruits';
console.log(fruit.apple); // prints 'red'

// In another file, also in the same directory
import { apple } from './fruits';
console.log(apple); // prints 'red'

// When using named exports, we can choose to either import the entire thing and then reference the keys on the exported object,
//or we can import one specific key.
