type typeConcat = (a: string, b: string) => string;

const concat: typeConcat = (a, b) => {
	return a + b;
};

concat("Hello ", "World");

interface IHometask {
	howIDoIt: string,
	simeArray: (string | number)[],
	withData: ({
		[n: string] : string | (string | number)[],
	})[],
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myHometask: IHometask = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

interface IMyArray<T> {
	[n: number]: T,
	reduce(fn: (prev: T, current: T) => T): T,
 };
 
 const tsArrey: IMyArray<number> = [1, 2, 3, 4];
 tsArrey.reduce((prev, next) => prev + next);
