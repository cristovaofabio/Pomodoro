import {Person} from './App';
import { render, screen } from '@testing-library/react';
import React from "react";
import '@testing-library/jest-dom'

describe('APP INITIALIZATION', () => {
    test('Should be return a name', () => {
        render(<Person name='Fabio'/>);
        const linkElement = screen.getByText(/Name is Fabio/i);
        expect(linkElement).toBeInTheDocument();
    });
});
