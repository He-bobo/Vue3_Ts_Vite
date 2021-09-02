import _ from 'lodash-es';
import {createApp} from 'vue';
import {sum} from './js/math';
import mul from './ts/mul';
import "./css/style.css";
import "./css/title.less";
import App from './vue/App.vue';
console.log("HAHA");

console.log(sum(20,30));

console.log(_.join(["abc","cba"],"-"));

const titleEl=document.createElement('div');
titleEl.className='title';
titleEl.innerHTML='Hello Vite';
document.body.appendChild(titleEl);

console.log(mul(20,40)); 


createApp(App).mount('#app')