import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {Input} from './Input';

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({
        url: '', value: ''
    })
}))

describe('List', () => {
    it('loads array of output', () => {
        const { queryByPlaceholderText } = render(<Input />) 
        
        const searchInput = queryByPlaceholderText('Search');

        fireEvent.change(searchInput, {target: {value: 'test'}})
        expect(searchInput.value).toBe('test')
        
    })
})
