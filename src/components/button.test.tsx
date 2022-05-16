import { Button} from './button';
import { render, screen } from '@testing-library/react';
import React from "react";
import '@testing-library/jest-dom'

describe('BUTTON', () => {

    test('Should be contain the a text', () => {
        render(<Button text={'test'} />);
        const linkElement = screen.getByText(/test/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('Should be return a button', () => {
        const nameButton = 'test';

        render(<Button text={nameButton} />);
        const buttonCreated = screen.getByRole('button',{
            name: nameButton
        })
        expect(buttonCreated).toBeInTheDocument();
    });
});
