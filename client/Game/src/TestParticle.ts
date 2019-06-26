import Particle2D from "./EngineParticle/Particle2D";
import ParticleSetting from "./EngineParticle/ParticleSetting";
import Game from "./Game";
import R from "./Config/Keys/R";
import Particle2DCache from './Libs/Helpers/Particle2DCache';
import ParticleGroup from "./Libs/Helpers/ParticleGroup";
import MenuLayer from "./GameFrame/Menu/MenuLayer";

export default class TestParticle
{
    
	async InitSync()
	{
        // let settings = await Game.asset.loadParticleAsync(R.particles.BuildingLevelShow);
		// this.onAssetsLoaded(settings);
		// await this.setSP();
		// await this.setParticleGroup();

		// MenuLayer.root.addChild(Game.system.buildingSuccessDialog);
		
		// Laya.stage.on(Laya.Event.CLICK, this, this.onMouseClick);
	}

	onMouseClick()
	{
		Game.system.buildingSuccessDialog.m_content.play();
	}


    
	private sp: Particle2D;
	public onAssetsLoaded(settings: ParticleSetting): void {
		this.sp = new Particle2D(settings);
		this.sp.emitter.start();
		this.sp.play();
		Laya.stage.addChild(this.sp);

		this.sp.x = Laya.stage.width / 2;
		this.sp.y = Laya.stage.height / 2;
		window['pp'] = this.sp;
		this.sp.graphics.drawCircle(0, 0, 5, '#FF0000', '#00FF00', 5);

		Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
		Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
	}

	public async setSP()
	{
		this.sp = await Particle2DCache.get(R.particles.InformationActorShow);
		this.sp.emitter.start();
		this.sp.play();
		Laya.stage.addChild(this.sp);

		this.sp.x = Laya.stage.width / 2;
		this.sp.y = Laya.stage.height / 2;
		window['pp'] = this.sp;
		this.sp.graphics.drawCircle(0, 0, 5, '#FF0000', '#00FF00', 5);

		Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
		Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
	}

	private group: ParticleGroup;
	public async setParticleGroup()
	{
		// let arr = [
		// 	R.particles.UpLevelBuilding_Star,
		// 	R.particles.UpLevelBuilding_HuaBan,
			
		// 	R.particles.UpLevelBuilding_HuaBanWhite
		// ];

		
		let arr = [
			R.particles.DecorationShowIn_1_Star1,
			R.particles.DecorationShowIn_2_Star2,
			R.particles.DecorationShowIn_3_Line,
			R.particles.DecorationShowIn_4_Glow
		];

		// let arr = [
		// 		R.particles.InformationActorShow,
		// 		R.particles.InformationActorShowSmall,
		// ];

		
		// let arr = [
		// 	R.particles.BuildingLevelShow,
		// 	// R.particles.BuildingLevelShow1
		// ];
		this.group = new ParticleGroup();
		await this.group.init(Laya.stage, arr);
		this.group.addToContainerTop();
		this.group.generateHelperPoint();
		this.group.x = Laya.stage.width / 2;
		this.group.y = Laya.stage.height / 2;
		this.group.play();
		window["group"] = this.group;


		
		Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownGroup);
		Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUpGroup);

	} 

	onMouseDownGroup(e:Laya.Event)
	{
		Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveGroup);
		this.group.x = e.stageX;
		this.group.y = e.stageY;
		

		this.group.play();
	}

	onMouseUpGroup()
	{
		Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveGroup);
	}
	onMouseMoveGroup(e:Laya.Event)
	{
		this.group.x = e.stageX;
		this.group.y = e.stageY;
	}


	onMouseDown(e:Laya.Event)
	{
		Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
		this.sp.x = e.stageX;
		this.sp.y = e.stageY;
	}

	onMouseUp()
	{
		Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
	}
	onMouseMove(e:Laya.Event)
	{
		this.sp.x = e.stageX;
		this.sp.y = e.stageY;
	}
    
}