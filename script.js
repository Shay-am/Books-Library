import { form, validForm } from "./javascript/helpers.js";
import { getItemFromLocalStorage, handleAddBook } from "./javascript/utils.js";

form.addEventListener("input", validForm);

form.addEventListener("submit", handleAddBook);

window.addEventListener("DOMContentLoaded", getItemFromLocalStorage);
