export default (text = "HOW ARE YOU GENTLEMEN ? ? ?") => {

	const wrapper = document.createElement("div");

	const element = document.createElement("p");
	element.innerHTML = text;
	const element2 = document.createElement("p");
	element2.innerHTML = "ALL YOUR BASE ARE BELONG TO US ! ! !";

    wrapper.appendChild(element);
    wrapper.appendChild(element2);

	return wrapper;
};