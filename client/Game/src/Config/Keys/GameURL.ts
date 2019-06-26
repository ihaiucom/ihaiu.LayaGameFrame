import { ServerItem } from "../../GameFrame/Channel/ChannelManager";
import Res from "./Res";

export default class GameURL
{
    
    static get serverCmdUrl(): string
    {
        return Res.GmConfig + 'ServerGM.json';
    }


    static get clientCmdUrl(): string
    {
        return Res.GmConfig + 'ClientGM.json';
    }



    
    private static _serverListUrl =  "ServerList.json";
    static get serverListUrl(): string
    {
        return this._serverListUrl;
    }


    static getServerMainUrl(serverItem: ServerItem)
    {
        if(serverItem)
        {
			if (serverItem.https)
			{
				return "https://" + serverItem.ip + ":" + serverItem.port;
			}
			else
			{
				return "http://" + serverItem.ip + ":" + serverItem.port;
			}
        }
    }



}