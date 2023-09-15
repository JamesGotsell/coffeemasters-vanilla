import Store from './services/Store.js';
import API from './services/API.js';
import Router from './services/Router.js';
// Link my Web Components
import { MenuPage } from './components/MenuPage.js';
import { DetailsPage } from './components/DetailsPage.js';
import { OrderPage } from './components/OrderPage.js';
import { ProductItem } from './components/ProductItem.js'
import { CartItem } from './components/CartItem.js';
import { loadData } from "./services/Menu.js";

window.app = {}
app.store = Store;
app.router = Router

console.log(app.store)
window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is ready");
    loadData();
    app.router.init()
    
  
});


function log() {
    console.log("boom ting")
}
window.addEventListener('load', log)


const $ = function(args){ return document.querySelector(args);}
const $$ = function(args){ return document.querySelectorAll(args);}

HTMLElement.prototype.on = function(a, b, c){ return this.addEventListener(a, b, c); }
HTMLElement.prototype.off = function(a, b){ return this.removeEventListener(a, b); }
HTMLElement.prototype.$ = function(s){ return this.querySelector(s); }
HTMLElement.prototype.$$ = function(s){ return this.querySelectorAll(s); }


window.addEventListener("appcartchange", event => {
    const badge = document.getElementById("badge");
    const qty = app.store.cart.reduce(
        (acc, item) => acc + item.quantity, 0
    );
    badge.textContent = qty;
    badge.hidden = qty == 0;
})
