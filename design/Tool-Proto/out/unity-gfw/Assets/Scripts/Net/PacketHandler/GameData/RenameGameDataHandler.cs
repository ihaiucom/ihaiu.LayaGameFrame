// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.GameData
{
    /// <summary>
    ///  修改玩家的名字
    /// </summary>
    [MessageHandler(URL = "GameData/RenameGameData")]
    public class RenameGameDataHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<RenameGameDataResponse>>>();
            var arg = new CommonEventArgs<RenameGameDataResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<RenameGameDataResponse>.EventId, arg);
        }   
    }
}