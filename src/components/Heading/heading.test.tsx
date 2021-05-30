/**
 * @jest-environment jsdom
 */

import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';
import Heading from '.';

describe('Heading', () => {
	let container: Element | null = null;
	beforeEach(() => {
		container = window.document.createElement('div');
		window.document.body.appendChild(container)
	})
	afterEach(() => {
		if (container !== null) {
			unmountComponentAtNode(container);
			container.remove();
			container = null;
		}
	});
	it('render', () => {
		act(() => {
			render(<Heading />, container);
		});
		expect(container?.innerHTML).toBeDefined();
		
	});

	it('render with children', () => {
		act(() => {
			render(<Heading >Title</Heading>, container);
		});
		expect(container?.textContent).toBe('Title');
		
	});

	it('render with props size="1"', () => {
		act(() => {
			render(<Heading size="1" >Title</Heading>, container);
		});
		expect(container?.querySelector('h1')).not.toBeNull();
	});

	it('render with props className = colorText', () => {
		act(() => {
			render(<Heading className='colorText' />, container);
		});
		expect(container?.getElementsByClassName('colorText')).toHaveLength(1);
	});
});