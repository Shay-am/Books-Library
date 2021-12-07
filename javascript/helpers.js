export const qs = selector => document.querySelector(selector);
import { validInputAuthor, validInputTitle, isPriorityChecked, isCategoryChecked } from "./validForm.js";

export const parentToAppend = qs(".parent_tbody");
export const form = qs("form");

export const createElementDomTr = () => document.createElement("tr");

export const createElementDomTd = (value, toAppend) => {
	const td = document.createElement("td");
	td.classList.add("td");
	td.textContent = value;

	return toAppend.append(td);
};

export const validForm = () => {
	validInputTitle();
	validInputAuthor();
	isPriorityChecked();
	isCategoryChecked();
};
