/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioMovieClipSkillActorStruct from "../../Generates/ModuleStudioMovieClip00Common/StudioMovieClipSkillActorStruct";

export default class StudioMovieClipSkillActor extends StudioMovieClipSkillActorStruct
{
    setActorIcon(icon: string)
    {
        this.m_icon.icon = icon;
        this.m_shadow.icon = icon;
    }
}