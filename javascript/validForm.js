const qs = selector => document.querySelector(selector);

const errorTextTitle = qs(".title-text_error");
const inputTitle = qs("#title");

const errorTextAuthor = qs(".author-text_error");
const inputAuthor = qs("#author");

const inputPriorit = qs(".priority_fieldset");
const errortextPriority = qs(".priority-text_error");

const inputCategory = qs("#category-select");
const errorTextCategory = qs(".category-text_error");

const handleToggleClassIsValid = (input, text) => {
	input.classList.remove("error");
	text.classList.add("hidden");
};
const handleToggleClassIsInValid = (input, text) => {
	input.classList.add("error");
	text.classList.remove("hidden");
};

const ruleValidInput = (inputValid, errorField, num, fn) => {
	let input = inputValid;
	let text = errorField;
	return input.value.length >= num ? handleToggleClassIsValid(input, text) : handleToggleClassIsInValid(input, text);
};

const isPrioritySelected = (input, text, name) => {
	const radios = document.querySelectorAll(`input[name=${name}]`);
	const selected = [...radios].some(radio => radio.checked);

	return selected ? handleToggleClassIsValid(input, text) : handleToggleClassIsInValid(input, text);
};

const isCategorySelected = (input, text) =>
	input.value ? handleToggleClassIsValid(input, text) : handleToggleClassIsInValid(input, text);

export const validInputTitle = () => ruleValidInput(inputTitle, errorTextTitle, 1);
export const validInputAuthor = () => ruleValidInput(inputAuthor, errorTextAuthor, 3);
export const isPriorityChecked = () => isPrioritySelected(inputPriorit, errortextPriority, "priority");
export const isCategoryChecked = () => isCategorySelected(inputCategory, errorTextCategory);
