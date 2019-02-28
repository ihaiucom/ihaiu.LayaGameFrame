import AntNet from "../bin/libs/AntFrame/Net/AntNet";
import { GamerNotifyIconChangeS2C } from "../bin/libs/AntFrame/Net/proto";
import AntFrame from "../bin/libs/AntFrame/AntFrame";

declare var net;
export default class Test
{
    init(): void 
    {

		net.config.url = "https://www.magiclvzs.club:5000"
		this.Test();
	}

	async Test(){
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