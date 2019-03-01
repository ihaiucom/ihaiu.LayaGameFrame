import Random from "../../Libs/Helpers/Random";

export default class Res
{
    static rootFx = "fx/";
    static root = "res/";

    // 获取骨骼动画 -- 骨骼
    static getSpineSKPath(path: string): string
    {
        return Res.root + "spine/" + path + ".sk"
    }

    // 获取骨骼动画 -- 皮肤
    static getSpinePngPath(path: string): string
    {
        return Res.root + "spine/" + path + ".png"
    }

    //获取骨骼动画槽位部件
    static getSpineSoltPartPath(path: string): string
    {
        return Res.root + "spine/SlotTexture/" + path + ".png"
    }

    // 获取Sprite图片
    static getSpritePath(path: string): string
    {
        return Res.root + "sprite/" + path + ".png";
    }
    
    static getSpritePathHasExt(path: string): string
    {
        return Res.root + "sprite/" + path;
    }

    static getRoom(id: string | number): string
    {
        return Res.getSpritePath("Building/" + id);
    }

    //获取拍摄幕帘
    static getCinemaCanvasSK(): string
    {
        return Res.getSpineSKPath("Scene/Scene_SheYingpeng/Scene_SheYingpeng");
    }
    static getCinemaCanvasSkin(): string
    {
        return Res.getSpinePngPath("Scene/Scene_SheYingpeng/Scene_SheYingpeng");
    }

    //获取观众
    static getAudienceSK(): string
    {
        return Res.getSpineSKPath("Scene/Audience01/Audience01");
    }

    static getAudienceSkin(): string
    {
        let skinIndex = Random.rangeBoth(1, 4);
        return Res.getSpinePngPath("Scene/Audience01/Audience0" + skinIndex);
    }

    //获取电影拍摄动画骨骼资源
    static get cinemaHallActorSK(): string
    {
        return Res.getSpineSKPath("Scene/Cinema_Hall/Cinema_Hall1");
    }
    static get cinemaHallActorSkin(): string
    {
        return Res.getSpinePngPath("Scene/Cinema_Hall/Cinema_Hall1");
    }

    static get cinemaHallDoorSK(): string
    {
        return Res.getSpineSKPath("Scene/Cinema_Hall/Cinema_Hall2");
    }
    static get cinemaHallDoorSkin(): string
    {
        return Res.getSpinePngPath("Scene/Cinema_Hall/Cinema_Hall2");
    }

    //获取--特效路径
    static getFx(path: string)
    {
        return Res.rootFx + path + ".part";
    }

}