
function toCapitalizeFirstLetter(str: string) {
	if(!str) return str;
	return str.toUpperCase().slice(0, 1) + str.slice(1).toLowerCase();
}

export default toCapitalizeFirstLetter;