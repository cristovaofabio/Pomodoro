import { PomodoroTimer } from './pomodoro-timer';
import { render, screen } from '@testing-library/react';
import React from "react";
import '@testing-library/jest-dom'

describe('POMODORO', () => {
    test('Pomodoro initial state should be stop', () => {
        render(
            <PomodoroTimer
                pomodoroTime={10}
                shortRestTime={2}
                longRestTime={5}
                cycles={4}
            />
        );

        const linkElement = screen.getByText("Yeah!!!You are stop!");
        expect(linkElement).toBeInTheDocument();
    });

    test('Pomodoro has class details', () => {
        render(
            <PomodoroTimer
                pomodoroTime={10}
                shortRestTime={2}
                longRestTime={5}
                cycles={4}
            />
        );

        const linkElement = screen.getByText("Yeah!!!You are stop!");
        expect(linkElement).toBeInTheDocument();
    });
});
