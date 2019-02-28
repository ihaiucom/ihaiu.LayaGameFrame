// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.GameData
{
    /// <summary>
    ///  修改玩家的头像
    /// </summary>
    [MessageHandler(URL = "GameData/RePortraitGameData")]
    public class RePortraitGameDataHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<RePortraitGameDataResponse>>>();
            var arg = new CommonEventArgs<RePortraitGameDataResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<RePortraitGameDataResponse>.EventId, arg);
        }   
    }
}