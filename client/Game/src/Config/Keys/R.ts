
class Sprite
{
    Launch_launch = "Launch/launch.png";
    Unit_Shadow = "Home/shadow.png";
}

class Bg
{
    Studio = 'Studio';
}


class SpineUI
{
    StudioNpc = 'StudioNpc';
    Hourglass = 'Hourglass';
    Spot = 'Spot';
}

class Cursor
{
    CursorHandler = 'Cursor/CursorHandler.png';
}

class Particles
{
    // 拍摄 -- 进度条
    StudioProgress = "StudioProgress";
    StudioScore = "StudioScore";
    StudioPropScore = "StudioPropScore";
    StudioActorShow = "StudioActorShow";
    FlyExp = "FlyExp";
    // 升级--建筑
    UpLevelBuilding_Star = "UpLevelBuilding_Star";
    UpLevelBuilding_HuaBan = "UpLevelBuilding_HuaBan";
    UpLevelBuilding_HuaBanWhite = "UpLevelBuilding_HuaBanWhite";

    // 摆件--升级中
    BuildingLevelShow = "BuildingLevelShow";
    BuildingLevelShow1 = "BuildingLevelShow1";
    
    // 摆件--出现
    DecorationShowIn_1_Star1 = "DecorationShowIn_1_Star1";
    DecorationShowIn_2_Star2 = "DecorationShowIn_2_Star2";
    DecorationShowIn_3_Line = "DecorationShowIn_3_Line";
    DecorationShowIn_4_Glow = "DecorationShowIn_4_Glow";

    // 情报艺人
    InformationActorShow = "InformationActorShow";
    InformationActorShowSmall = "InformationActorShowSmall";
    InformationActorShowBottom = "InformationActorShowBottom";
    
}


export default class R
{
    static sprite = new Sprite();
    static bg = new Bg();
    static cursor = new Cursor();
    static particles = new Particles();
    static spineUI = new SpineUI();
}