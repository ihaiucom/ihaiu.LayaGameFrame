import Random from "../../Libs/Helpers/Random";
import StringUtils from "../../Libs/Helpers/StringUtils";

export default class Res
{
    static root = "res/";

    
    // 获取--config目录路径
    static get config():string
    {
        return Res.root + "config/";
    }
    
    // 获取--寻路config目录路径
    static get PathConfig():string
    {
        return Res.root + "config/path/";
    }
    
    // 获取--GM命令config目录路径
    static get GmConfig():string
    {
        return Res.root + "config/gm/";
    }
    

    // 获取--Shader目录路径
    static get shader():string
    {
        return Res.root + "shader/";
    }

    // 获取--Particles目录路径
    static get particles():string
    {
        return Res.root + "particles/";
    }

    // 获取--骨骼动画目录路径
    static get spine():string
    {
        return Res.root + "spine/";
    }

    
    // 获取--UI骨骼动画目录路径
    static get spineUI():string
    {
        return Res.root + "spineUI/";
    }

    
    // 获取--icon图标
    static get fspriteassets():string
    {
        return Res.root + "fspriteassets/";
    }

    static get actorBodyIcon(): string
    {
        return Res.root + "fspriteassets/ActorBodyIcon/";
    }

    static getActorBodyIcon(actorName: string): string
    {
        return Res.actorBodyIcon + `${actorName}.png`;
    }
    
    // 获取骨骼动画 -- 骨骼
    static getSpineSKPathF(boneName: string, skinName: string): string
    {
        return Res.spine + `${boneName}_F/${skinName}_F/${skinName}_F.sk`;
    }
    
    static getSpineSKPathB(boneName: string, skinName: string): string
    {
        return Res.spine + `${boneName}_B/${skinName}_B/${skinName}_B.sk`;
    }


    // 获取骨骼动画 -- 皮肤
    static getSpinePngPathF(boneName: string, skinName: string): string
    {
        return Res.spine + `${boneName}_F/${skinName}_F/${skinName}_F.png`;
    }

    static getSpinePngPathB(boneName: string, skinName: string): string
    {
        return Res.spine + `${boneName}_B/${skinName}_B/${skinName}_B.png`;
    }


    

    // 获取UI骨骼动画 -- 皮肤
    static getSpineUIPngPath(name:string): string
    {
        return Res.spineUI + `${name}.png`;
    }

    static getSpineUISkPath(name: string): string
    {
        return Res.spineUI + `${name}.sk`;
    }



    //获取骨骼动画槽位部件
    static getSpineSoltPartPath(path: string): string
    {
        return Res.spine + "SlotTexture/" + path + ".png"
    }


    // 获取菜单图片Url
    static getMenuIconUrl(path: string): string
    {
        return Res.fspriteassets + "MenuIcon/" + path + ".png";
    }

    
    // 获取背景图片
    static getBgUrl(name: string): string
    {
        return Res.fspriteassets + "Background/" + name + ".png";
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

    

    // 获取--Shader路径--vs
    static getShaderVS(filename: string)
    {
        return Res.shader + filename  + ".vs";
    }

    // 获取--Shader路径--ps
    static getShaderPS(filename: string)
    {
        return Res.shader + filename  + ".fs";
    }

    
    // 获取--Particles路径
    static getParticles(filename: string)
    {
        return Res.particles + filename  + ".part";
    }





}