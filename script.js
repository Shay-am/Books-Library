import { form, validForm } from "./javascript/helpers.js";
import { getItemFromLocalStorage, handleAddBook } from "./javascript/utils.js";

window.addEventListener("DOMContentLoaded", getItemFromLocalStorage);
form.addEventListener("input", validForm);

form.addEventListener("submit", handleAddBook);
