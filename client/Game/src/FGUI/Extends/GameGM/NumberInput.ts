import NumberInputStruct from "../../Generates/GameGM/NumberInputStruct";

export default class NumberInput extends NumberInputStruct
{


	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);

		this.m_upButton.onClick(this, this.onClickUpButton);
		this.m_downButton.onClick(this, this.onClickDownButton);
		this.m_upButton.on(laya.events.Event.MOUSE_DOWN, this, this.onMouseDownUpButton);
		this.m_downButton.on(laya.events.Event.MOUSE_DOWN, this, this.onMouseDownDownButton);
		this.m_upButton.on(laya.events.Event.MOUSE_UP, this, this.onMouseUP);
		this.m_downButton.on(laya.events.Event.MOUSE_UP, this, this.onMouseUP);
		this.m_upButton.on(laya.events.Event.MOUSE_OUT, this, this.onMouseUP);
		this.m_downButton.on(laya.events.Event.MOUSE_OUT, this, this.onMouseUP);
	}

	onClickUpButton()
	{
		if (!this.isDowning)
		{
			this.value += this.onceValue;
		}
		this.isDowning = false;
	}

	onClickDownButton()
	{
		if (!this.isDowning)
		{
			this.value -= this.onceValue;
		}

		this.isDowning = false;
	}

	downTimeoutHandler = -1;
	downIntervalHandler = -1;
	upTimeoutHandler = -1;
	isDowning = false;
	onMouseDownUpButton()
	{
		if (this.upTimeoutHandler != -1)
		{
			clearTimeout(this.upTimeoutHandler);
			this.upTimeoutHandler = -1;
		}

		this.downTimeoutHandler = setTimeout(() =>
		{
			this.isDowning = true;
			this.downIntervalHandler = setInterval(() =>
			{
				this.value += this.onceValue;
			}, 10);

		}, 200);
	}


	onMouseDownDownButton()
	{
		if (this.upTimeoutHandler != -1)
		{
			clearTimeout(this.upTimeoutHandler);
			this.upTimeoutHandler = -1;
		}

		this.downTimeoutHandler = setTimeout(() =>
		{
			this.isDowning = true;
			this.downIntervalHandler = setInterval(() =>
			{
				this.value -= this.onceValue;
			}, 10);

		}, 200);
	}

	onMouseUP()
	{
		if (this.downTimeoutHandler != -1)
		{
			clearTimeout(this.downTimeoutHandler);
			this.downTimeoutHandler = -1;
		}

		if (this.downIntervalHandler != -1)
		{
			clearInterval(this.downIntervalHandler);
			this.downIntervalHandler = -1;
		}

		if (this.isDowning)
		{
			this.upTimeoutHandler = setTimeout(() =>
			{
				this.isDowning = false;
			}, 200);
		}
	}

	private get onceValue(): number
	{
		let length = Math.abs(this.value).toString().length - 1;
		let v = 1;
		for (let i = 1; i < length; i++)
		{
			v *= 10;
		}
		return v;
	}



	get value(): number
	{
		if (isNullOrEmpty(this.m_title.text))
		{
			return 0;
		}

		return toInt(this.m_title.text);
	}

	set value(val: number)
	{
		this.m_title.text = val.toString();
	}

}