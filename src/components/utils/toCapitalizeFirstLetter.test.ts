import toCapitalizeFirstLetter from "./toCapitalizeFirstLetter";

describe('toCapitalizeFirstLetter', () => {
	test('Должна принимать любую строку "some String" и возвращать строки, начинающиеся с заглавной "Some string"', () => {
		const str = toCapitalizeFirstLetter('some String')
		expect(str).toBe('Some string');	
	});
	test('Должна принимать пустую строку "" и возвращать пустую строку ""', () => {
		const str = toCapitalizeFirstLetter('');
		expect(str).toBe('');
	});
});