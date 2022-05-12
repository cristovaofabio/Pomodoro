import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App() {
    return (
        <div className="container">
            <PomodoroTimer
                pomodoroTime={1400}
                shortRestTime={300}
                longRestTime={900}
                cycles={4}
            />
        </div>
    );
}

export default App;
