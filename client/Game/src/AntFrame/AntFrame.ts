import AntFrameConfig from "./AntFrameConfig";
import AntNet from './Net/AntNet';
import AntPlatformBase from './Platform/AntPlatformBase';
import AntPlatformMine from './Platform/AntMine';
import { AntPlatformWX } from './Platform/AntWX';
import Game from "../Game";
declare var net;

export default class AntFrame 
{
    public static LocationUrlParam(name:string):string
    {
        if(Game.browserSetting.isWeixinMinigame) {
            return null;
        }
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }
    public static RandName(min, max, randomFlag:boolean=true){
        let str = "";
        let range = min;
        let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        if(randomFlag){
            range = Math.round(Math.random() * (max-min)) + min;
        }
        for(var i=0; i<range; i++){
            let pos = Math.round(Math.random() * (arr.length-1));
            str += arr[pos];
        }
        return str;
    }
   
    static enableWXLogin = false;
    private static _insPlatform:AntPlatformBase = null;
    public static get platform():AntPlatformBase{
        if(!AntFrame._insPlatform){
            if(Game.browserSetting.isWeixinMinigame && AntFrame.enableWXLogin) {
                AntFrame._insPlatform = new AntPlatformWX();
            }else{
                AntFrame._insPlatform = new AntPlatformMine();
            }
        }
        return AntFrame._insPlatform;
    }

}