import React from "react";
import { useInterval } from "../hooks/use-interval";
import { formatTime } from '../utils/second-to-time';

interface Props {
    defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
    const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTime);

    useInterval(() => {
        setMainTime(mainTime - 1);
    }, 1000);

    return <div>Hi, how are you? {formatTime(mainTime)}</div>
}
