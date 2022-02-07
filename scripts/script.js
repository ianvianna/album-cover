import Warning from "./modules/warning.js";
import Value from "./modules/value.js";

const warning = new Warning();
warning.init();

const value = new Value("[data-input]", "[data-button]", "[data-wrong]");
value.init();
