export default (text = "HOW ARE YOU GENTLEMEN ? ? ?") => {
	const element = document.createElement("div");
	element.innerHTML = text;
	return element;
};