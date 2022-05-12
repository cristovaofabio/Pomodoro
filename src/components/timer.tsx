import { formatTime } from '../utils/second-to-time';

interface Props {
    mainTime: number;
}

export function Timer(props: Props): JSX.Element {
    return (
        <div className="timer">
            {formatTime(props.mainTime)}
        </div>
    );
}
