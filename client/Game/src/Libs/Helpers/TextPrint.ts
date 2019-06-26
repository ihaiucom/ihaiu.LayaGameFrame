import Mathf from '../Mathf';
import GTextField = fairygui.GTextField;

export default class TextPrint
{
    private label: GTextField;
    private timeInterval: number = 100;
    private timeDuration: number = 3000;
    private textSpeedLength: number = 1;

    private _text: string = "";
    get text(): string
    {
        return this._text;
    }

    set text(val: string)
    {
        this._text = val;
    }


    init(label: GTextField, text: string, timeInterval: number = 100, timeDuration: number = 3000, textSpeedLength: number = 2)
    {
        this.label = label;
        this.text = text;
        this.timeInterval = timeInterval;
        this.timeDuration = timeDuration;
        this.textSpeedLength = textSpeedLength;
    }

    playByDuration()
    {
        this.textSpeedLength = Math.ceil(this.text.length / (this.timeDuration / this.timeInterval));
        this.play();
    }

    playBySpeed()
    {
        this.timeDuration = (this.text.length / this.textSpeedLength) * this.timeInterval;
        this.play();
    }

    private textIndex = 0;
    private textLength = 1;
    private textCurrent = "";
    private play()
    {
        Laya.timer.clearAll(this);
        this.textIndex = 0;
        this.textLength = this.text.length;
        this.textCurrent = "";
        if(this.textLength <= 0)
            return;
        Laya.timer.loop(this.timeInterval, this, this.onLoop);
    }

    private onLoop()
    {
        console.log("onLoop",this.textCurrent);
        
        this.textIndex += this.textSpeedLength;
        if(this.textIndex > this.textLength)
        {
            this.textIndex = this.textLength;
            Laya.timer.clearAll(this);
        }

        this.textCurrent = this.text.substring(0, this.textIndex);
        this.label.text = this.textCurrent;
    }

    stop()
    {
        Laya.timer.clearAll(this);
        if(this.label)
            this.label.text = this.text;
    }

}