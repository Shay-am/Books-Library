import { qs, createElementDomTd, createElementDomTr, parentToAppend, generateTable } from "./javascript/helpers.js";
import { addItemToLocalStorge, getItemFromLocalStorage } from "./javascript/utils.js";

let form = qs("form");

window.addEventListener("DOMContentLoaded", getItemFromLocalStorage);

form.addEventListener("submit", e => {
	e.preventDefault();
	const data = Object.fromEntries(new FormData(e.target));

	addItemToLocalStorge(data);

	form.reset();
	generateTable(data);
});
