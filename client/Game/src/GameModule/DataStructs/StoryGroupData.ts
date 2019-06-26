import StoryStackSortConfig from '../../Config/ConfigExtends/StoryStackSortConfig';
import Game from '../../Game';
export default class StoryGroupData {
    
	private _config: StoryStackSortConfig = null;
	public get config(): StoryStackSortConfig {
		return this._config;
	}
	
	public progress: number;
	public progress2: number;
	public status: number;
    private _id : number;
    public get id() : number {
        return this._id;
    }
    public set id(v : number) {
        this._id = v;
        this._config = Game.config.storyStackSort.getConfig(v);
    }
    
    /** 剧本组里剧本是否集齐 */
    public get isCollect(): boolean
		{
			let scripts = [];// this._config.storyId; TODO:YJJ
			let result: boolean = true;
			for (let index = 0; index < scripts.length; index++)
			{
				let scriptId = scripts[index];
				// if (Game.moduleModel.story.hasStoryData(scriptId) == false)
				// {
				// 	result = false;
				// 	break;
				// }
			}
			return result;
		}
}