import MModel from '../../GameFrame/Module/MModel';
import StoryData from '../DataStructs/StoryData';
import Dictionary from '../../Libs/Helpers/Dictionary';
import StorySeriesData from '../DataStructs/StorySeriesData';
export default class StoryModel extends MModel {
    private dict: Dictionary<string, StorySeriesData>;
    constructor() {
        super();   
        this.dict = new Dictionary<string, StorySeriesData>();
    }

    scrollToUP: boolean = false;

    //存储剧本列表
	setStorySeriesList(msg: Array<any>): void {
		for (let i: number = 0; i < msg.length; i++) {
			let story: StorySeriesData = StorySeriesData.Create(msg[i]);
			this.dict.add(story.id, story);
		}
    }
    
    //获取剧本列表
	getStorySeriesList(): Array<StorySeriesData> {
		let list: Array<StorySeriesData> = [];
		let storys = this.dict.getValues();
		for (let i = 0; i < storys.length; i++) {
            storys[i].index = i;
			list.push(storys[i]);
		}

		// list.sort(function (a: any, b:any):number {
		// 	if (a.time = b.time) {
		// 		return b.id - a.id;
		// 	} 
		// 	return b.time - a.time;
		// });
		
		return list;
    }

    //获取剧本列表by类型
    getStorySeriesListByType(type: number): Array<StorySeriesData> {
        let list: Array<StorySeriesData> = [];
		let storys = this.dict.getValues();
		for (let i = 0; i < storys.length; i++) {
            if (storys[i].type == type){
                list.push(storys[i]);                
            }
        }
        
        return list;
    }
    
    //查询剧本内容
	getStorySeriesData(id: number): StorySeriesData {
		return this.dict.getValue(id);
    }
    
    //存储剧本评论
    setStorySeriesCommentList(id:number ,comments: Array<any>, reset:boolean): void {
        let story: StorySeriesData = this.getStorySeriesData(id);

        if (reset) {
            story.resetCommenList();        
        }
        story.commentList = comments;

        this.scrollToUP = reset;
    }

    //修改某条评论
    changeStorySeriesComment(comment: any, storyId: number): void {
        let story: StorySeriesData = this.getStorySeriesData(storyId);
        story.updateComment(comment);

        this.scrollToUP = false;
    }

    //存储高赞剧本评论
    setMaxStorySeriesCommentList(id:number ,maxcomments: Array<any>): void {
        let story: StorySeriesData = this.getStorySeriesData(id);
        story.maxCommentList = maxcomments;
    }


}

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
///////////////////////////test//////////////////////////////////
/////////////////////////////////////////////////////////////////

class TestStoryBase { // 分库分表数据的基类
    uuid: string = "";
    entityId: number = 0;
}

class TestStoryGruopData extends TestStoryBase {
    storySuitId: number = 0; // 剧本套id
    progress: number = 0; // 集齐剧本进度
    progress2: number = 0; // 剧本目标进度
    status: number = 0; // 状态
    constructor(id: number) {
        super();
        this.storySuitId = id;
    }
}

class TestStoryData extends TestStoryBase {
    storyId: number = 0; // 剧本id
    storyProgressInfo: Array<StoryProgress> | null = null; // 每个剧本所要达成的目标列表
    status: number = 0; // 状态
    progress: number = 0; // 进度
    maxScore: number = 0; // 最高票房
    shootLastTime: number = 0; // 上次拍摄时间
}

class StoryProgress {
    id: number = 0; // 1拍摄剧本 2媒体评分 3票房大卖以上
    progress: number = 0; // 进度
    status: number = 0; // 是否完成
}