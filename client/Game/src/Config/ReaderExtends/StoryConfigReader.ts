/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////


import StoryConfig from '../ConfigExtends/StoryConfig';
import Dictionary from '../../Libs/Helpers/Dictionary';
import LabelHelper from "../../GameFrame/PropLabels/LabelHelper";
import StoryConfigReaderStruct from '../ReaderStructs/StoryConfigReaderStruct';

export default class StoryConfigReader extends StoryConfigReaderStruct {
    private _groupDict: Dictionary<number, StoryConfig[]> = new Dictionary<number, StoryConfig[]>();
    private _groupList: Array<StoryConfig[]> = new Array<StoryConfig[]>();

    onGameLoadedAll() {
        super.onGameLoadedAll();
        let groups = this._groupDict;
        let list = this.configs.getValues();
        for (let i = 0; i < list.length; i++) {
            let config: StoryConfig = list[i];
            let group: StoryConfig[];
            if (groups.hasKey(config.storyStackSortId)) {
                group = groups.getValue(config.storyStackSortId);
            }
            else {
                group = [];
                groups.add(config.storyStackSortId, group);
                this._groupList.push(group);
            }
            group.push(config);
            
            LabelHelper.GenerateConfigLabelList(config, config.labelList);

            
        }
    }

    public getGroup(stack_sort: number): StoryConfig[] {
        return this._groupDict.getValue(stack_sort);
    }

    public get groupList(): Array<StoryConfig[]> {
        return this._groupList;
    }
}