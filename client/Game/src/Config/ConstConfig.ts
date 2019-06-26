export default class ConstConfig
{
    /** 公共 */
    common = new Common();
    /** 拍摄 */
    studio = new Studio();
}

/** 公共 */
class Common
{

}

/** 拍摄 */
class Studio
{
    /** 选择剧本--海报动画持续时间 */
    readonly Story_StoryIcon_Duration = 700;
    /** 选择剧本--内容渐显持续时间 */
    readonly Story_Content_Duration = 500;
    /** 标签匹配动画间隔 */
    readonly MatchingDisplay_Interval = 500;
    /** 标签匹配列表滚动动画持续时间 */
    readonly MatchingDisplay_Duration = 1000;
    readonly MatchingDisplay_Skip_Interval = 500;
    
    readonly RollingDuration = 1000;
    readonly CommentTweenAlpha = 400;

    /**后续收益-item移除动画时长 */
    readonly Continue_Remove_Duration = 100;

}