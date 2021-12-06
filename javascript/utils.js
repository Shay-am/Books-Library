import { generateTable } from "./helpers.js";

export const addItemToLocalStorge = book => {
	const books = JSON.parse(localStorage.getItem("books")) || [];
	books.push(book);

	return localStorage.setItem("books", JSON.stringify(books));
};

export const getItemFromLocalStorage = () => {
	const books = JSON.parse(localStorage.getItem("books") || []);

	books.forEach(book => generateTable(book));
};
