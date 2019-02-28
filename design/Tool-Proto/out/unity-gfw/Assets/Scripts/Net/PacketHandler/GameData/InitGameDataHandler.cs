// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.GameData
{
    /// <summary>
    ///  请求初始化游戏数据
    /// </summary>
    [MessageHandler(URL = "GameData/InitGameData")]
    public class InitGameDataHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<InitGameDataResponse>>>();
            var arg = new CommonEventArgs<InitGameDataResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<InitGameDataResponse>.EventId, arg);
        }   
    }
}