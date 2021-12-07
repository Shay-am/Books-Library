import { form, createElementDomTd, createElementDomTr, parentToAppend, validForm } from "./helpers.js";

export const addItemToLocalStorge = book => {
	const books = JSON.parse(localStorage.getItem("books")) || [];
	books.push(book);

	return localStorage.setItem("books", JSON.stringify(books));
};

export const getItemFromLocalStorage = () => {
	const books = JSON.parse(localStorage.getItem("books") || "[]");
	return books.forEach(book => generateTable(book));
};

export const handleAddBook = e => {
	e.preventDefault();
	const data = Object.fromEntries(new FormData(e.target));
	validForm();
	addItemToLocalStorge(data);

	form.reset();
	generateTable(data);
};

export const generateTable = obj => {
	const values = Object.values(obj);
	const tr = createElementDomTr();
	for (const value of values) {
		createElementDomTd(value, tr);
	}

	return parentToAppend.append(tr);
};
