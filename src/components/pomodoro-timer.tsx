import React from "react";
import { useInterval } from "../hooks/use-interval";
import { Button } from "./button";
import { Timer } from "./timer";

interface Props {
    pomodoroTime: number;
    shortRestTime: number;
    longRestTime: number;
    cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
    const [mainTime, setMainTime] = React.useState(props.pomodoroTime);

    useInterval(() => {
        setMainTime(mainTime - 1);
    }, 1000);

    return (
        <div className="pomodoro">
            <h2>Yeah!!!You are working!</h2>
            <Timer mainTime={mainTime}></Timer>

            <div className="controls">
                <Button text="Test"></Button>
                <Button text="Test"></Button>
                <Button text="Test"></Button>
            </div>

            <div className="details">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nemo, velit quo, blanditiis cupiditate rem optio voluptas neque quia minima totam placeat a quibusdam fugiat tempora obcaecati. Veritatis, at dicta.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nemo, velit quo, blanditiis cupiditate rem optio voluptas neque quia minima totam placeat a quibusdam fugiat tempora obcaecati. Veritatis, at dicta.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nemo, velit quo, blanditiis cupiditate rem optio voluptas neque quia minima totam placeat a quibusdam fugiat tempora obcaecati. Veritatis, at dicta.</p>
            </div>
        </div>
    );
}
