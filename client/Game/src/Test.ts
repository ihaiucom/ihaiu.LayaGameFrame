import AntNet from "./AntFrame/Net/AntNet";
import AntFrame from "./AntFrame/AntFrame";
import GamerNotifyIconChangeS2C = proto.GamerNotifyIconChangeS2C;

declare var net;
export default class Test
{
    init(): void 
    {

		this.Test();
	}

	async Test(){
		net.config.url = "https://www.magiclvzs.club:5000"
		AntNet.gamerNotifyIconChangeS2C.on((e:GamerNotifyIconChangeS2C)=>{
			console.log("test");
			console.log(e)
		})
		let s2c = await AntFrame.platform.Login();
		console.log(s2c);

		let data = await AntNet.AsyncGamerLoginGetDataC2S();
		console.log(data);

		
	}

    onConfigLoaded(): void 
    {
	}
}