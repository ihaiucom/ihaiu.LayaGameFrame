import ActorConfig from '../../Config/ConfigExtends/ActorConfig';
import Game from '../../Game';
import LabelConfig from '../../Config/ConfigExtends/LabelConfig';
import AvatarConfig from '../../Config/ConfigExtends/AvatarConfig';
import TEXT from '../../Config/Keys/TEXT';
import Prop from '../../GameFrame/Props/Prop';
import PropList from '../../GameFrame/Props/PropList';
import PropLevelDataList from '../../GameFrame/Props/PropLevelDataList';
import PropHelper from '../../GameFrame/Props/PropHelper';
import NumberInput from '../../FGUI/Extends/GameGM/NumberInput';
import StringUtils from '../../Libs/Helpers/StringUtils';
export default class ActorData 
{

    /** 艺人id */
    public id: number = null;
    /** 艺人等级 */
    public level: number = 0;
    /** 艺人最大等级 */
    public levelMax: number = 0;
    /** 艺人星级 */
    private _star : number = 1;
    public get star() : number {
        return this._star;
    }
    public set star(v : number) {
        if(v <= 0) return;
        // this._star = Number(this.GetLabelConfig(v).field);
    }
    
    /** 艺人进驻建筑id */
    public bulidId: number = 0;
    /** 艺人经验 */
    public exp: number = 0;
    /** 艺人属性 */
    private _propertylist: PropList = new PropList();

    set propertyList(list: any) {
        this._propertylist.clear();
        for (let i = 0; i < list.length; i++) {
            let prop:Prop = Prop.Create(list[i].id, list[i].value);
            this._propertylist.add(prop);
        }
    }

    get propertyList(): any {
        return this._propertylist;
    }

    /** 艺人升级消耗金币数量 */
    get actorLevelUpCostNum(): number {
        return Game.config.actorLevelCost.getConfig(this.level + 1).costMoney;
    }
    /** 艺人皮肤 */
    public skinId: number = -1;
    
    /** 艺人星级等级配置 */
    public get actorStarLevelConfig() 
    {
        return Game.config.actorStarLevel.getLevelStarConfig(this.id, this.level, this.star);
    }


    public get prop(): PropList
    {
        return this.actorStarLevelConfig.propList;
    }

    private _propList: Prop[] = null;
    /** 成长属性 */
    public get propList(): Prop[] {
        this._propList = this.prop.list;
        return this._propList;
    }
    
    /** 艺人名字 */
    private _name: string = "";

    private _config: ActorConfig = null;
    
    /**
     * 
     * @param id 艺人id
     * @param level 艺人等级
     * @param star 艺人星级
     */
    constructor(id: number, level: number,levelmax:number, star: number, name?:string) {
        this.id = id;
        this.level = level;
        this.levelMax = levelmax;
        this.star = star;
        this.name = name;
        this.star = star;
        this._config = Game.config.actor.getConfig(id);
    }

    static Create(actor: any) {
        let a: ActorData = new ActorData(actor.id, actor.level, actor.star, actor.name);
        return a;
    }
    
    /** 设置协议数据 */
	setProtoData(data: any)
	{
		for(let key in data)
		{
			this[key] = data[key];
		}
	}


    /** 获取艺人名字 */
    public get name(): string {
        if(!this._name || this._name.length <= 0) {
            this._name = this.originName;
        }
        return this._name;
    }
    
    public set name(n: string) {
        this._name = n;
    }
    
    /** 艺人原名 */
    public get originName(): string {
        return this._config.name;
    }

    /** 艺人列表等级 文本 */
    public get levelTxt(): string {
        return TEXT.Lv.format(this.level);
    }

    public get levelTxt2(): string {
        return TEXT.LVDot.format(this.level);
    }

    
    public get halfIcon(): string {
        return this.avatarConfig ? this.avatarConfig.halfIconUrl : StringUtils.empty;
    }
    

    public get diamondHeadIcon(): string {
        return this.avatarConfig ? this.avatarConfig.diamondIconUrl : StringUtils.empty;
    }
    
    //头像
    public get headIcon(): string {
        return this.avatarConfig ? this.avatarConfig.iconUrl : StringUtils.empty;
    }

    //全身像
    public get bodyIcon(): string {
        return this.avatarConfig ? this.avatarConfig.bodyIconUrl : StringUtils.empty;
    }

    private _country: string = null;
    
    /** 获取国籍图标 */
    public get countryUrl(): string {
        if(this._country) {
            return this._country;
        }
        if(this._config) {
            let lbConfig = this.GetLabelConfig(this._config.label_country);
            let _avatarConfig = this.GetAvatarConfig(lbConfig.icon);
            return _avatarConfig.iconUrl;
        }
        return `ActorData.ts： ${this.id} 配置错误`;
    }


    /** 获取性别 */
    public get genderName(): string {
        return this.GetLabelConfig(this._config.label_sex).name;
    }

    public get gender(): number {
        return this.GetLabelConfig(this._config.label_sex).id;
    }

    /** 获取性别图标 */    
    public get genderUrl(): string {
        let config = this.GetLabelConfig(this._config.label_sex);
        return this.GetAvatarConfig(config.icon).iconUrl;
    }

    /** 表演类型 文本
     * @description
     * 1401演技派, 1402偶像派 */
    public get showType():string {
        let config = this.GetLabelConfig(this._config.label_showType);
        return config.name;
    }

    /** 
     * 表演类型 图标
     * @description
     * 1401演技派, 1402偶像派 */
    public get showTypeUrl():string {
        let config = this.GetLabelConfig(this._config.label_showType);
        return this.GetAvatarConfig(config.icon).iconUrl;
    }

    /** 年龄类型 文本
     * @description
     * 1401演技派, 1402偶像派 */
    public get ageType():string {
        let config = this.GetLabelConfig(this._config.label_ageType);
        return config.name;
    }

    /** 
     * 年龄类型 图标
     * @description
     * 1401演技派, 1402偶像派 */
    public get ageTypeUrl():string {
        let config = this.GetLabelConfig(this._config.label_ageType);
        return this.GetAvatarConfig(config.icon).iconUrl;
    }

    /**
     * 艺人描述
     */
    public get description(): string {
        return this._config.tips;
    }


    private GetLabelConfig(id: number): LabelConfig {
        return Game.config.label.getConfig(id);
    }

    private GetAvatarConfig(id: number): AvatarConfig {
        return Game.config.avatar.getConfig(id);
    }

    public get config()
    {
        return this._config;
    }

    private _avatarConfig: AvatarConfig;
    public get avatarConfig(): AvatarConfig
    {
        if(this._avatarConfig)
        {
            return this._avatarConfig;
        }
        return this.config.avatarConfig;
    }

    public set avatarConfig(config: AvatarConfig)
    {
        this._avatarConfig = config;
    }

    public get skinAvatarConfig(): AvatarConfig
    {
        if(this.skinId > 0)
        {
            return Game.config.avatar.getConfig(this.skinId);
        }
        return this.avatarConfig;
    }

}