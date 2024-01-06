import { useEffect } from "react"

export const Timer = ({ time, setTime, isStart }) => {

    useEffect(() => {
        let interval = 0;
        if (isStart) {
            interval = setInterval(() => {
                setTime((prevTime) => {
                    /**
                     * @type {Number}
                     */
                    const newTime = prevTime + 0.1;
                    return Number(newTime.toFixed(1));
                })
            }, 100);
        }
        return () => {
            clearInterval(interval);
        }
    }, [isStart, setTime]);

    return (
        <>
            <div className="timer">time :{time}</div>
        </>
    )

}