/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import {render, unmountComponentAtNode} from 'react-dom';
 import {act} from 'react-dom/test-utils';
import Button from '.';

describe('Button', () => {
	let container: Element | null = null;

	beforeEach(() => {
		container = window.document.createElement('div');
		window.document.body.appendChild(container)
	});

	afterEach(() => {
		if (container !== null) {
			unmountComponentAtNode(container);
			container.remove();
			container = null;
		}
	});

	it('render', () => {
		act(() => {
			render(<Button onClick={() => {}}/>, container);
		});
		expect(container?.innerHTML).toBeDefined();
	});

	it('render with children', () => {
		act(() => {
			render(<Button onClick={() => {}}>SUBMIT</Button>, container);
		});
		expect(container?.textContent).toBe('SUBMIT');
	});

	it('render with props size="m"', ()=> {
		act(() => {
			render(<Button onClick={() => {}} size="m"/>, container);
		});
		expect(container?.querySelector('.sizeM')).not.toBeNull();
	});

	it('render with props size="l"', ()=> {
		act(() => {
			render(<Button onClick={() => {}} size="l"/>, container);
		});
		expect(container?.querySelector('.sizeL')).not.toBeNull();
	});

	it('render with props size=false', ()=> {
		act(() => {
			render(<Button onClick={() => {}} />, container);
		});
		expect(container?.querySelector('.sizeL')).not.toBeNull();
	});

	it('render with props color=false', ()=> {
		act(() => {
			render(<Button onClick={() => {}} />, container);
		});
		expect(container?.querySelector('.green')).not.toBeNull();
	});

	it('render with props color="yellow"', ()=> {
		act(() => {
			render(<Button onClick={() => {}} color="yellow"/>, container);
		});
		expect(container?.querySelector('.yellow')).not.toBeNull();
	});

	it('click on the button', () => {
		const onClick = jest.fn();
		act(() => {
			render(<Button onClick={onClick}>Click</Button>, container);
		});

		const button = document.querySelector(".root");
		
		expect(button?.innerHTML).toBe("Click");

		act(() => {
			button?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		act(() => {
			for(let i = 0; i < 5; i++) {
				button?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
			}
		});

		expect(onClick).toHaveBeenCalledTimes(6)
	})
});