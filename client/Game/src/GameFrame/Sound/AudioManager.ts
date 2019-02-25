
import SoundManager = Laya.SoundManager;
import SoundChannel = Laya.SoundChannel;
import Handler = laya.utils.Handler;
import Dictionary from "../../Libs/Helpers/Dictionary";
import Game from "../../Game";
import SoundKey from "../../FGUI/Generates/SoundKey";
//======================
// 声音管理器
//----------------------
export default class AudioManager
{
	// 正在播放中的音效列表
	private soundPlayingDic: Dictionary<string, SoundChannel> = new Dictionary<string, SoundChannel>();
	// 初始化
	install(): void
	{
		// this.muted = this.muted;
		// this.soundMuted = this.soundMuted;
		// this.musicMuted = this.musicMuted;
		// this.musicVolume = this.musicVolume;
		// this.soundVolume = this.soundVolume;

		this.onLogin();

		Game.application.sAppResume.add(this.onAppResume, this);
	}

	onAppResume()
	{
		this.replayMusic();
	}

	onLogin()
	{
		this.muted = this.muted;
		this.soundMuted = this.soundMuted;
		this.musicMuted = this.musicMuted;
		this.musicVolume = this.musicVolume;
		this.soundVolume = this.soundVolume;
	}

	lastMusic: string;

	/**
	 * 播放背景音乐。背景音乐同时只能播放一个，如果在播放背景音乐时再次调用本方法，会先停止之前的背景音乐，再播发当前的背景音乐。
	 * @param soundKey	声音Key。
	 * @param loops		循环次数,0表示无限循环。
	 * @param complete	声音播放完成回调。
	 * @param startTime	声音播放起始时间。
	 * @return SoundChannel对象，通过此对象可以对声音进行控制，以及获取声音信息。
	 */
	playMusic(soundKey: string, loops?: number, complete?: Handler, startTime?: number): SoundChannel
	{
		// if (BrowserDetect.isMobile)
		// 	return;
		this.lastMusic = soundKey;
		if (this.musicMuted)
		{
			return;
		}
		let path = SoundKey.getPath(soundKey);
		SoundManager.stopMusic();
		return SoundManager.playMusic(path, loops, complete, startTime);
	}

	/**
	 * 重新播放背景音乐
	 */
	replayMusic()
	{
		if (this.lastMusic)
		{
			this.playMusic(this.lastMusic);
		}
		else
		{
			this.playMusic(SoundKey.MM_BGM_Cinema);
		}
	}



	/**
	 * 播放音效。音效可以同时播放多个。
	 * @param url			声音文件地址。
	 * @param isStopPreSound 是否停止其它声音
	 * @param loops			循环次数,0表示无限循环。
	 * @param complete		声音播放完成回调  Handler对象。
	 * @param soundClass	使用哪个声音类进行播放，null表示自动选择。
	 * @param startTime		声音播放起始时间。
	 * @return SoundChannel对象，通过此对象可以对声音进行控制，以及获取声音信息。
	 */
	playSound(soundKey: string, isStopPreSound?: boolean, loops?: number, complete?: Handler, startTime?: number): SoundChannel
	{
		if (!this.soundPlayingDic || this.soundPlayingDic === null)
		{
			this.soundPlayingDic = new Dictionary<string, SoundChannel>();
		}
		if (isStopPreSound)
		{
			this.stopAllSound();
			this.soundPlayingDic.clear();
		}
		let path = SoundKey.getPath(soundKey);
		let isPlay = true;
		if (!complete || complete === null)
		{
			complete = Handler.create(this, this.playSoundComplete, [path]);
			if (this.soundPlayingDic.hasKey(path))
			{
				isPlay = false;
			}
		}
		if (isPlay)
		{
			let soundChannel = SoundManager.playSound(path, loops, complete, startTime);
			this.soundPlayingDic.add(path, soundChannel);
		}
		return this.soundPlayingDic.getValue(path);
	}
	// 声音播放完成
	playSoundComplete(path: string)
	{
		if (this.soundPlayingDic.hasKey(path))
		{
			this.soundPlayingDic.remove(path);
		}
	}

	/**
	 * 停止声音播放。此方法能够停止任意声音的播放（包括背景音乐和音效），只需传入对应的声音播放地址。
	 * @param url  声音文件地址。
	 */
	stopSound(soundKey: string): void
	{
		let path = SoundKey.getPath(soundKey);
		if (this.soundPlayingDic.hasKey(path))
		{
			this.soundPlayingDic.remove(path);
		}
		SoundManager.stopSound(path);
	}

	/**
	 * 停止播放所有声音（包括背景音乐和音效）。
	 */
	stopAll(): void
	{
		if (this.soundPlayingDic)
		{
			this.soundPlayingDic.clear();
		}
		SoundManager.stopAll();
	}

	/**
	 * 停止播放所有音效（不包括背景音乐）。
	 */
	stopAllSound(): void
	{
		if (this.soundPlayingDic)
		{
			this.soundPlayingDic.clear();
		}
		SoundManager.stopAllSound();
	}
	/**
	 * 停止播放背景音乐（不包括音效）。
	 * @param url  声音文件地址。
	 */
	stopMusic(): void
	{
		SoundManager.stopMusic();
	}

	private localUseGlobal = true;

	/**
	 * 背景音乐和所有音效是否静音。
	 */
	private _muted: boolean;
	get muted(): boolean
	{
		if (this._muted === undefined)
		{
			this._muted = Game.localStorage.hasItem("sound_muted", this.localUseGlobal) ? Game.localStorage.getBoolean("sound_muted", this.localUseGlobal) : false;
		}
		return this._muted;
	}

	set muted(value: boolean)
	{
		this._muted = value;
		Game.localStorage.setBoolean("sound_muted", value, this.localUseGlobal);
		SoundManager.muted = value;
	}

	/**
	 * 所有音效（不包括背景音乐）是否静音。
	 */
	private _soundMuted: boolean;
	get soundMuted(): boolean
	{
		if (this._soundMuted === undefined)
		{
			this._soundMuted = Game.localStorage.hasItem("sound_soundMuted", this.localUseGlobal) ? Game.localStorage.getBoolean("sound_soundMuted", this.localUseGlobal) : false;
		}
		return this._soundMuted;
	}

	set soundMuted(value: boolean)
	{
		this._soundMuted = value;
		Game.localStorage.setBoolean("sound_soundMuted", value, this.localUseGlobal);
		SoundManager.soundMuted = value;
	}

	/**
	 * 背景音乐（不包括音效）是否静音。
	 */
	private _musicMuted: boolean;
	get musicMuted(): boolean
	{
		if (this._musicMuted === undefined)
		{
			this._musicMuted = Game.localStorage.hasItem("sound_musicMuted", this.localUseGlobal) ? Game.localStorage.getBoolean("sound_musicMuted", this.localUseGlobal) : false;
		}
		return this._musicMuted;
	}

	set musicMuted(value: boolean)
	{
		this._musicMuted = value;
		Game.localStorage.setBoolean("sound_musicMuted", value, this.localUseGlobal);
		SoundManager.musicMuted = value;

		if (value)
		{
			SoundManager.stopMusic();
		}
		else
		{
			this.replayMusic();
		}
	}


	/**
	 * 背景音乐音量。
	 * @default 1
	 */
	private _musicVolume: number;
	get musicVolume(): number
	{
		if (this._musicVolume === undefined)
		{
			this._musicVolume = Game.localStorage.hasItem("sound_musicVolume", this.localUseGlobal) ? Game.localStorage.getFloat("sound_musicVolume", this.localUseGlobal) : 1;
		}
		return this._musicVolume;
	}

	set musicVolume(value: number)
	{
		this._musicVolume = value;
		Game.localStorage.setFloat("sound_musicVolume", value, this.localUseGlobal);
		SoundManager.musicVolume = value;
	}
	/**
	 * 音效音量。
	 * @default 1
	 */
	private _soundVolume: number;
	get soundVolume(): number
	{
		if (this._soundVolume === undefined)
		{
			this._soundVolume = Game.localStorage.hasItem("sound_soundVolume", this.localUseGlobal) ? Game.localStorage.getFloat("sound_soundVolume", this.localUseGlobal) : 1;
		}
		return this._soundVolume;
	}

	set soundVolume(value: number)
	{
		this._soundVolume = value;
		Game.localStorage.setFloat("sound_soundVolume", value, this.localUseGlobal);
		SoundManager.soundVolume = value;
	}

	/**
	 * 失去焦点自动停止音效
	 */
	private _autoStopMusic: boolean
	get autoStopMusic(): boolean
	{
		return this._autoStopMusic;
	}

	set autoStopMusic(value: boolean)
	{
		SoundManager.autoStopMusic = value;
		this._autoStopMusic = value;
	}


}