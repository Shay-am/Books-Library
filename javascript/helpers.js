export const qs = selector => document.querySelector(selector);
export const parentToAppend = qs(".parent_tbody");

const title = qs("title");
const author = qs("author");
const prioryty = qs("prioryty");
const category = qs("category");

export const createElementDomTr = () => document.createElement("tr");

export const createElementDomTd = () => document.createElement("td");

export const generateTable = ({ title, author, priority, category }) => {
	const tr = createElementDomTr();
	const elementTdtitle = createElementDomTd();
	const elementTdauthor = createElementDomTd();
	const elementTdpriority = createElementDomTd();
	const elementTdcategory = createElementDomTd();

	elementTdtitle.textContent = title;
	elementTdauthor.textContent = author;
	elementTdpriority.textContent = priority;
	elementTdcategory.textContent = category;

	tr.append(elementTdtitle, elementTdauthor, elementTdpriority, elementTdcategory);
	parentToAppend.append(tr);
};
