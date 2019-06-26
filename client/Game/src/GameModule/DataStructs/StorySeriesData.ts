import StoryData from "./StoryData";

export default class StorySeriesData {
    private _id: number; 
    private _storySeriesId: number; 
    private _storyId: number;   
    private _name: string; 
    private _storyType: number;
    private _storyData: StoryData;
    private _commentList:Array<any> = [];

    public index: number;
    
    /**
     * 剧本库ID
     */
    set id(val: number) {
        this._id = val;
    }

    get id(): number {
        return this._id;
    }

    /**
     * 剧本系列ID
     */
    set storySeriesId(val: number) {
        this._storySeriesId = val;
    }

    get storySeriesId(): number {
        return this._storySeriesId;
    }

    /**
     * 剧本ID
     */
    set storyId(val: number) {
        this._storyId = val;
    }

    get storyId(): number {
        return this._storyId;
    }

    /**
     * 剧本名称
     */
    set storyName(val: string) {
        this._name = val;
    }

    get storyName(): string {
        return this._name;
    }

    /**
     * 剧本类型 1 金本 2 普通本
     */
    set storyType(val: number) {
        this._storyType = val;
    }

    get storyType(): number {
        return this._storyType;
    }

    /**
     * 剧本数据
     */
    set storyData(val: StoryData) {
        this._storyData = val;
    }

    get storyData(): StoryData {
        return this._storyData;
    }

    /**
     * 类型
     */
    get type(): number{
        return this.storyData.config.label_storyType;
    }

    //创建剧本库单位
	static Create(msg: any): StorySeriesData {
        let storySeries   = new StorySeriesData();
        storySeries.id = msg.id;
        storySeries.storySeriesId = msg.storySeriesId;
        storySeries.storyId = msg.storyId;
        storySeries.storyName = msg.storyName;
        storySeries.storyType = msg.storyType;
        storySeries.storyData = StoryData.Create(msg);


		return storySeries;
    }

    maxCommentList: Array<any> = [];

    /**
     * 剧本留言
     */
    set commentList(val: Array<any>) {
        for (let i = 0; i < val.length; i++) {
            this._commentList.push(val[i]);
        }
    }

    get commentList(): Array<any> {
        return this._commentList;
    }

    /**
     * 重置留言
     */
    resetCommenList(): void {
        this._commentList = [];
    }


    /**
     * 更新留言
     */
    updateComment(comment: any): void {
        for (let i = 0; i < this._commentList.length; i++) {
            if (comment.id == this._commentList[i].id) {
                this._commentList.splice(i, 1, comment);
                break;
            }
        }

        for (let i = 0; i < this.maxCommentList.length; i++) {
            if (comment.id == this.maxCommentList[i].id) {
                this.maxCommentList.splice(i, 1, comment);
                break;
            }
        }
    }
       
}