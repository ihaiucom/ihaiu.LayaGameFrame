import GTextField = fairygui.GTextField;

export default class NumberRoller {
    private _label: GTextField;
    private duration: number = 1000;
    private _number: number = 0;
    private get _speedLength(): number
    {
        return Math.floor(this._number / Math.floor(this.duration / this.timeInterval));
    }
    
    private get timeInterval(): number 
    {
        let interval = 17;
        if(this._number > 0) {
            let val = Math.ceil(this.duration / this._number);
            interval < val && (interval = val);
        }
        
        return interval;
    }

    /**
     * 
     * @param target 播放数字动画的label
     * @param duration 播放时长 /毫秒
     * @param speedLength 
     */
    static rolling(target: GTextField, duration: number = 1000) 
    {
        if(isNaN(<any>target.text)) 
            return;
        let roller = new NumberRoller();
        roller._label = target;
        roller.duration = duration;
        roller._number = Number(target.text);
        roller.play();
        console.log(roller._speedLength, roller.duration, roller.timeInterval);
        
    }

    private _numberCurrent = 0;

    private play() {
        Laya.timer.clearAll(this);
        this._numberCurrent = 0;
        // if (this.textLength <= 0)
        //     return;
        Laya.timer.loop(this.timeInterval, this, this.onLoop);
    }

    private onLoop() {
        if(!this._label) {
            Laya.timer.clearAll(this);
        }
        this._numberCurrent += this._speedLength;
        this._label.text = this._numberCurrent + "";
            if (this._numberCurrent >= this._number-this._speedLength) {
                this._numberCurrent = 0;
                Laya.timer.clearAll(this);
                this._label.text = this._number + "";
            }
    }

    stop() {
        Laya.timer.clearAll(this);
        this._label.text = this._number + "";
    }
}