/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationParseViewStruct from "../../Generates/ModuleInformation/InformationParseViewStruct";
import InformationParseData from '../../../GameModule/DataStructs/InformationParseData';
import Res from '../../../Config/Keys/Res';
import R from '../../../Config/Keys/R';
import InformationNoMatchItem from './InformationNoMatchItem';
import Game from '../../../Game';
import IntelligencePaseResultType = proto.IntelligencePaseResultType;
import IntelligencePaseType = proto.IntelligencePaseType;
import InformationModel from "../../../GameModule/DataModels/InformationModel";
import InformationData from '../../../GameModule/DataStructs/InformationData';
import InformationNoMatchSpecialItem from "./InformationNoMatchSpecialItem";
import ParticleGroup from "../../../Libs/Helpers/ParticleGroup";

export default class InformationParseView extends InformationParseViewStruct 
{
    type: IntelligencePaseResultType
    parseData: InformationParseData;

    /**情报model */
    get informationModel(): InformationModel
    {
        return Game.moduleModel.information;
    }

    get dataList(): InformationData[]
    {
        let list = [];
        if(this.parseData)
            list = this.parseData.informations;
        return list;
    }
    
    onWindowInited(): void
    {
        this.setParticleGroup();
        this.m_list.itemRenderer = Laya.Handler.create(this, this.itemRenderer, null, false);
        this.m_list.itemProvider = Laya.Handler.create(this, this.itemProvider, null, false);
    }
    onWindowShow(): void
    {
        this.clear();
    }
    onWindowHide(): void
    {
        this.clear();
    }  
    
    itemRenderer(index: number, item: InformationNoMatchItem|InformationNoMatchSpecialItem)
    {
        let data = this.dataList[index];
        item.updateData(data);
        let idx = this.parseData.notMatchIntelligencesId.findIndex((id)=>{
            return id == data.id;
        })
        if(-1 != idx)
        {
            let delay = index *(this.totalDuration/this.dataList.length);
            Laya.timer.once(delay, this, ()=>{
                item.setNotMatch();
            }, null, false);
        }
    }

    itemProvider(index: number)
    {
        if(this.parseData.infoType == IntelligencePaseType.IntelligencePaseType_Special)
        {
            return InformationNoMatchSpecialItem.URL;
        }
        else
        {
            return InformationNoMatchItem.URL;
        }
    }
    
    
    setData(data: InformationParseData)  
    {
        this.parseData = data;
        if(Game.moduleModel.information.isTest)
        {
            this.type = IntelligencePaseResultType.IntelligencePaseResultType_ActorExit;
            this.startParsing();
        }
        else
        {
            this.type = data.type;
            this.m_list.numItems = this.dataList.length;
            this.startParsing();
        }
    }

    private readonly totalDuration: number = 2000;

    async startParsing()
    {
       
        this.playParticles();
        this.m_actor.m_showActor.setSelectedIndex(0);
        this.m_actress.m_showActor.setSelectedIndex(0);
        let interval = this.totalDuration / 4;
        for (let i = 0; i < 4; i++) {
            Laya.timer.once(interval*i, this, this.play, [i],false);
        }
        Laya.timer.once(2100, this, this.playResult, null,false);
        
    }

    private group1: ParticleGroup;
	private group2: ParticleGroup;

    public async setParticleGroup()
	{
		await this.setupParticles();
    } 
    async setupParticles()
    {
        let arr1 = [
            R.particles.InformationActorShow,
            R.particles.InformationActorShowSmall,
        ];
        this.group1 = new ParticleGroup();
        await this.group1.init(Laya.stage, arr1);
        // this.group1.generateHelperPoint();
        this.group1.x = Laya.stage.width / 2;
        this.group1.y = Laya.stage.height / 3;

        let arr2 = [
            R.particles.InformationActorShowBottom,
        ];
        this.group2 = new ParticleGroup();
        await this.group2.init(Laya.stage, arr2);
        // this.group2.generateHelperPoint();
        this.group2.x = Laya.stage.width / 2;
        this.group2.y = Laya.stage.height / 3 * 2;
    }
    playParticles()
    {
        this.group1.addToContainerTop();
        this.group1.play();
        this.group2.addToContainerTop();
        this.group2.play();
    }

    stopParticles()
    {
        this.group1.stop();
        this.group2.stop();
    }

    play(index: number)
    {
        let name = "";
        let randomNames = [R.actorIcon.CaiXukun,R.actorIcon.OuyangNana,R.actorIcon.WangJunkai,R.actorIcon.DiLiReBa]
        name = Res.getActorBodyIcon(randomNames[index]);
        if(index == 0 || index == 2)
        {
            this.m_actor.m_shadow.m_icon.icon = name;
            this.m_actor.m_t0.play(null, 1, 0, 0);
        }
        else
        {
            this.m_actress.m_shadow.m_icon.icon = name;
            this.m_actress.m_t0.play(null, 1, 0, 0);
        }
    }

    playResult()
    {
        this.stopParticles();
        switch (this.type) {
            case IntelligencePaseResultType.IntelligencePaseResultType_Actor:
                {
                    this.showActor();
                }
                break;
            case IntelligencePaseResultType.IntelligencePaseResultType_ActorExit:
                {
                    this.showActor();
                    Laya.timer.once(1000, this, this.showDialog, null,false);
                }
                break;
            case IntelligencePaseResultType.IntelligencePaseResultType_Item:
                {
                    this.m_stepCtrl.setSelectedPage("failed");
                    this.m_actor.m_showActor.setSelectedIndex(0);
                    this.m_actor.m_shadow.alpha = 1;
                    this.m_actor.m_shadow.m_icon.icon = Res.getActorBodyIcon(R.actorIcon.DiLiReBa);
                    this.m_ani_failed.play();
                    Laya.timer.once(700, this, this.showDialog, null,false);
                }
                break;

            default:
                break;
        }
    }

    showActor()
    {
        this.m_stepCtrl.setSelectedPage("actor");
        this.m_actor.m_content.m_icon.icon = this.parseData.actorIcon;
        this.m_actor.m_showActor.setSelectedIndex(1);
    }

    async showDialog()
    {
        let result = await Game.system.rewardDialog(this.parseData.items);
        fairygui.Events.dispatch(Laya.Event.CLICK, this.m_nextBtn.displayObject);
    }



    clear()
    {
        this.m_stepCtrl.setSelectedPage("match");
        Laya.timer.clearAll(this);
    }
}