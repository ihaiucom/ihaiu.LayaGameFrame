import TEXT from "../Config/Keys/TEXT";
import StringUtils from "../Libs/Helpers/StringUtils";

export default class GameStringHelper
{
    /**
     * 获取剧本全名 "《{0} 第{1}季》 第{3}期"
     * @param name 剧本名称
     * @param season  第几季
     * @param episode  第几期
     * @param episodeMax  最大期数
     */
    public static StoryNameAll(name: string, season: int = 1, episode:int = 1, episodeMax=1)
    {
        // 《{0}》
        // if(season <= 1 && episode <= 1 && episodeMax <= 1)
        //     return TEXT.StudioStoryName.format(name);

        // "《{0}》 2"
        if(season <= 1 )
            return TEXT.StudioStoryNameEpisode.format(name, StringUtils.GetChineseNum(episode));

        // "《{0} 第{1}季》"
        // if(season > 1 &&  episode <= 1 && episodeMax <= 1)
        //     return TEXT.StudioStoryNameSeason.format(name, StringUtils.GetChineseNum(season));

        // "《{0} 第{1}季》 第{3}期"
        // return TEXT.StudioStoryNameAll.format(name, StringUtils.GetChineseNum(season), StringUtils.GetChineseNum(episode));
        return TEXT.StudioStoryNameAll.format(name, season, StringUtils.GetChineseNum(episode));
        
    }

    /**
     * 获取剧本 "第{0}季 第{1}期"
     * @param name 剧本名称
     * @param season  第几节
     * @param episode  第几期
     * @param episodeMax  最大期数
     */
    public static StorySeasonEpisode(season: int = 1, episode:int = 1, episodeMax=1)
    {
        // "第{1}期"
        if(season <= 1 && episode > 1)
            return TEXT.StudioStoryEpisode.format(StringUtils.GetChineseNum(episode));

            
        // "第{0}季"
        if(season > 1 &&  episode <= 1 && episodeMax <= 1)
            return TEXT.StudioStorySeason.format(StringUtils.GetChineseNum(season));
            
        // "第{0}季 第{1}期"
        return TEXT.StudioStorySeasonEpisode.format(StringUtils.GetChineseNum(season), StringUtils.GetChineseNum(episode));
    }

}