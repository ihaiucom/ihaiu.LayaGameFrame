/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StoryStudioIconAnimationStruct from "../../Generates/CommonGame/StoryStudioIconAnimationStruct";
import Res from '../../../Config/Keys/Res';
import Game from '../../../Game';
import Random from '../../../Libs/Helpers/Random';

export default class StoryStudioIconAnimation extends StoryStudioIconAnimationStruct
{
    icons: string[] = [];
    
    private _storyIcons : string[];
    private get storyIcons() : string[] {
        if(!this._storyIcons) {
            let configList = Game.config.story.configList;
            let icons = [];
            for(let i = 0; i < 3; i++) {
                let index = Random.range(0, configList.length);
                let config = configList[index];
                icons.push(config.iconUrl);
                this['m_icon_'+i].icon = config.iconUrl;
            }
        } 
        return this._storyIcons;
    }
    
    protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        this.storyIcons;
    }
}