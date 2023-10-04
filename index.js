const userInfo = require('./information.js');

const {name, campus} = userInfo;

const cowsay = require ("cowsay");
console.log(cowsay.say({
    text : `Hello I'm ${name} from ${campus} campus `,
    e : "oO",
    T : "U "
}));
