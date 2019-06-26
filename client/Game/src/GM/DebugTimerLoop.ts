export default class DebugTimerLoop
{
    caller: any;
    method: Function;

    key: string;

    beginTime: number;
    callTime: number;
    enable: boolean = true;

    callNum = 0;
    costTime = 0;
    costTimeToal = 0;

    get evaluateCost(): number
    {
        if (this.callNum > 0)
        {
            return Math.round(this.costTimeToal / this.callNum);
        }
        return this.costTime;
    }

    toString(): string
    {
        return `${this.key}  callTime:${this.callTime} callNum:${this.callNum}  costTime:${this.costTime}  costTimeToal:${this.costTimeToal}  evaluateCost:${this.evaluateCost}`;
    }
}
