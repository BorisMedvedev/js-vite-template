import '../scss/style.scss';
import { renderCart } from './createCart';
import { loadJsonData } from "./getApi";

const res = await loadJsonData();

renderCart(res);

console.log(res);
