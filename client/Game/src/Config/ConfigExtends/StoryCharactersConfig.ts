/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import StoryCharactersConfigStruct from "../ConfigStructs/StoryCharactersConfigStruct";
import PropertyConfig from "./PropertyConfig";
import Game from "../../Game";
import LabelList from "../../GameFrame/PropLabels/LabelList";
import LabelHelper from "../../GameFrame/PropLabels/LabelHelper";
import LabelField from "../../GameFrame/PropLabels/LabelField";

export default class StoryCharactersConfig extends StoryCharactersConfigStruct
{
    private _mainPropConfigs: PropertyConfig[];
    /** 艺人槽 显示2个主属性标签 */
    get mainPropConfigs(): PropertyConfig[]
    {
        if(!this._mainPropConfigs)
        {
            this._mainPropConfigs = [];
            for(let propId of this.randomPropId)
            {
                let config = Game.config.property.getConfig(propId);
                if(config)
                    this._mainPropConfigs.push(config);
            }
        }
        return this._mainPropConfigs;
    }

    
    /** 匹配标签列表 */
    private _matchingLabelFields: string[];
    get matchingLabelFields():string[]
    {
        if(!this._matchingLabelFields)
        {
            this._matchingLabelFields = [
                LabelField.sex, 
                LabelField.country, 
                LabelField.showType,
                LabelField.ageType
            ];


        }
        return this._matchingLabelFields;
    }

    /** 匹配标签列表 */
    private _matchingLabels: LabelList;
    get matchingLabels():LabelList
    {
        if(!this._matchingLabels)
        {
            this._matchingLabels = new LabelList();
            LabelHelper.GenerateConfigLabelListForFields(this, this._matchingLabels, this.matchingLabelFields);


        }
        return this._matchingLabels;
    }
	
}