import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

export const Person = ({ name }: { name: string }) => <div>Name is {name}</div>

function App() {
    return (
        <div className="container">
            <PomodoroTimer
                pomodoroTime={10}
                shortRestTime={2}
                longRestTime={5}
                cycles={4}
            />
        </div>
    );
}

export default App;
