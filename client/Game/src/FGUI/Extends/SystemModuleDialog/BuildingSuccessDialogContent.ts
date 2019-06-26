/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingSuccessDialogContentStruct from "../../Generates/SystemModuleDialog/BuildingSuccessDialogContentStruct";
import BuildingData, { BuildingSucceeType } from "../../../GameModule/DataStructs/BuildingData";
import ParticleGroup from "../../../Libs/Helpers/ParticleGroup";
import R from "../../../Config/Keys/R";
import BuildingEffItem from "./BuildingEffItem";
import Game from "../../../Game";
import PropField from "../../../GameFrame/Props/PropField";
import TEXT from "../../../Config/Keys/TEXT";
import PropId from "../../../GameFrame/Props/PropId";
import { BuildingType } from "../../../GameModule/DataEnums/BuildingType";

export default class BuildingSuccessDialogContent extends BuildingSuccessDialogContentStruct
{

    private buildingData: BuildingData;

    private effectDataList: Array<any>;

    private particleGroup: ParticleGroup;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
    
        this.m_listEffect.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);

        this.initParticleGroup();
    }

    private async initParticleGroup()
    {
        this.particleGroup = new ParticleGroup();
        await this.particleGroup.init(
            this.displayObject,
            [
                R.particles.UpLevelBuilding_Star,
                R.particles.UpLevelBuilding_HuaBan,
                R.particles.UpLevelBuilding_HuaBanWhite,
            ]);

        this.particleGroup.addToContainerBottom();
            
		// this.particleGroup.generateHelperPoint();
		this.particleGroup.x = this.width * 0.5;
		this.particleGroup.y = this.height * 0.5;

    }

    //List刷新回调
    renderListItem(index: number, item: BuildingEffItem): void  {
        item.RenderItem(this.effectDataList[index], this.buildingData.successType);
    }

    buildSuccess(): void {
        let building: BuildingData = this.buildingData;
        this.effectDataList = Game.config.building.getConfig(this.buildingData.id).tip3
    }

    levelSuccess(): void {
        let building: BuildingData = this.buildingData;

        // 等级
        this.effectDataList.push({last: building.lastLevelConfig.level, now: building.levelConfig.level});
        // 建筑效果
        
        let lastpropList   = building.lastLevelConfig.propList;
        let nowpropList = building.levelConfig.propList;
        if (building.id == BuildingType.CommerceDepartment) {
            let last_storyProbabilityCl = lastpropList.get(PropId[PropField.storyProbabilityCl]).val + "%";
            let last_storyNum = lastpropList.get(PropId[PropField.storyNum]).val;
            let now_storyProbabilityCl = nowpropList.get(PropId[PropField.storyProbabilityCl]).val + "%";
            let now_storyNum = nowpropList.get(PropId[PropField.storyNum]).val;

            this.effectDataList.push({ effect: "成功概率加成：", last: last_storyProbabilityCl, now: now_storyProbabilityCl });
            this.effectDataList.push({ effect: "每日创作次数：", last: last_storyNum, now: now_storyNum })
        } else {
            let last_produceNum = lastpropList.get(PropId[PropField.produceNum]);
            let last_produceCd = lastpropList.get(PropId[PropField.produceCd]);
            let last_reserve = lastpropList.get(PropId[PropField.reserve]);
            let now_produceNum = nowpropList.get(PropId[PropField.produceNum]);
            let now_produceCd = nowpropList.get(PropId[PropField.produceCd]);
            let now_reserve = nowpropList.get(PropId[PropField.reserve]);

            let lastSpeed = Math.floor((60 * 60) / last_produceCd.val * last_produceNum.val);
            let nowSpeed = Math.floor((60 * 60) / now_produceCd.val * now_produceNum.val);

            this.effectDataList.push({ effect: "每小时产量：", last: lastSpeed, now: nowSpeed });
            this.effectDataList.push({ effect: "建筑储量：", last: last_reserve.val, now: now_reserve.val })
        }
        

        
        
    }

    breakSuccess(): void {
        let building: BuildingData = this.buildingData;
        this.effectDataList.push(format(TEXT.BuildOpenBre, building.name, building.breLevelMax));
        this.effectDataList.push(TEXT.BuildOpenNewCell);
    }


    //成功效果
    buildingSuccessShow(): void {
        let building: BuildingData = this.buildingData;
       
        this.effectDataList = [];
        switch (building.successType) {
            case BuildingSucceeType.Build:
                this.buildSuccess();
                break;
            case BuildingSucceeType.Level:
                this.levelSuccess();
                break;
            case BuildingSucceeType.Break:
                this.breakSuccess();
                break;
            default:
                break;
        }

        this.m_success.selectedIndex = building.successType;
        this.m_listEffect.numItems = this.effectDataList.length;
        this.m_listEffect.resizeToFit();
    }

    

    //弹窗显示
    open(datasource: BuildingData): void  {
        this.buildingData = datasource;
        this.buildingSuccessShow();
        this.play();
    }

    play()
    {
        this.m_t0.setAutoPlay(false);
        this.m_t0.play(null, 1, 0, 0);
        if(this.particleGroup)
        {
            this.particleGroup.addToContainerBottom();
            this.particleGroup.play(2000);
        }
    }

    //弹窗关闭
    close(): void  {
        this.m_t0.stop();
        if(this.particleGroup)
            this.particleGroup.stop();
        
    }
}