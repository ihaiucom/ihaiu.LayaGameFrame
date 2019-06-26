import StudioData from "../../../GameModule/DataStructs/StudioData";

export interface IStudioMovieClip
{
    /** 设置拍摄数据 */
    setStudioData(studioData: StudioData);

    /** 生成视图 */
    generate();

    /** 播放 */
    play();
    
    /** 添加视图 */
    addViewBottom(view: fairygui.GObject);
    addViewTop(view: fairygui.GObject);
    
}