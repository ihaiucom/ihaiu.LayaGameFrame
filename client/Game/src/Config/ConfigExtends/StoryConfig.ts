/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import StoryConfigStruct from "../ConfigStructs/StoryConfigStruct";
import Game from '../../Game';
import StoryCharactersConfig from './StoryCharactersConfig';
import AvatarConfig from "./AvatarConfig";
import LabelList from "../../GameFrame/PropLabels/LabelList";

export default class StoryConfig extends StoryConfigStruct
{
    labelList = new LabelList();
	get filmIndex()
		{
			return this.id;
		}
		private _newStoryName: string = null;
		/**
		 * 剧本名称
		 */
		get filmName()
		{
			if (!this._newStoryName)
			{
				this._newStoryName = this.storyName;
			}
			return this._newStoryName;
		}
		set filmName(value: any)
		{
			if (!value)
			{
				console.error("剧本名字 有问题 StoryConfig.filmName value=" + value);
			}
			this._newStoryName = value;
		}
		/**
		 * 星级
		 */
		get starNumber()
		{
			return parseInt(Game.config.label.getConfig(this.label_star).name);
		}
		/**
		 * 剧本风格
		 */
		get filmType()
		{
			return Game.config.label.getConfig(this.label_storyType).name
		}
		/**
		 * 剧本元素
		 */
		get storyTags()
		{
			// let result: Array<string> = new Array<string>(this.label_storyTag.length);
			// for (let index: number = 0; index < this.label_storyTag.length; index++)
			// {
			// 	result[index] = Game.config.label.getConfig(this.label_storyTag[index]).name;
			// }
			// return result;
			return
		}
		/**
		 * 电影详情
		 */
		get filmDes()
		{
			return this.introduction;
		}
		/**
		 * 拍摄消耗
		 */
		get filmCosts()
		{
			return this.cost.toString();
		}
		/**
		 * 角色属性
		 */
		get characterProperty()
		{
			let result: Array<StoryCharactersConfig> = new Array<StoryCharactersConfig>(this.storyCharacterId.length);
			for (let index: number = 0; index < this.storyCharacterId.length; index++)
			{
				result[index] = Game.config.storyCharacters.getConfig(this.storyCharacterId[index]);
			}
			return result;
		}


		get avatarConfig(): AvatarConfig
		{
			return Game.config.avatar.getConfig(this.posterName)
		}

		get iconUrl(): string
		{
			if(this.avatarConfig)
			{
				return this.avatarConfig.iconUrl;
			}

			return  "";
		}


		/** 剧本季数 */
		get seasonCount(): number
		{
			return this.season;
		}

		/** 剧本期数 */
		getEpisodeCount(seasonIndex:number): number
		{
			return this.episode;// seasonIndex >= this.seasonCount ? 0 : this.episode[seasonIndex];
		}


		/** 获取 艺人槽位列表 */
		private _characterConfigList: StoryCharactersConfig[];
		get characterConfigList():StoryCharactersConfig[]
		{
			if(!this._characterConfigList)
			{
				this._characterConfigList = [];
				for(let i = 0; i < this.storyCharacterId.length; i ++)
				{
					let config = Game.config.storyCharacters.getConfig(this.storyCharacterId[i]);
					this._characterConfigList.push(config);
				}
			}
			return this._characterConfigList;
		}


		/** 获取 特殊事件 总数 */
		private _eventMax = -1;
		get eventMax(): number
		{
			if(this._eventMax <= 0)
			{
				this._eventMax = 0;
				let dict = {};
				for(let charcterConfig of this.characterConfigList)
				{
					for(let eventId of charcterConfig.storyEventId)
					{
						if(!dict[eventId])
						{
							this._eventMax ++;
							dict[eventId] = true;
						}
					}
				}
			}
			return this._eventMax;
		}

}