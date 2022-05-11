export function formatTime(seconds: number): string {

    const restHour = seconds % 3600;
    const hour = ((seconds - restHour) / 3600).toString().padStart(2, '0');

    const restMin = restHour % 60;
    const min = ((restHour - restMin) / 60).toString().padStart(2, '0');

    const sec = restMin.toString().padStart(2, '0');
    return `${hour}:${min}:${sec}s`;
}
