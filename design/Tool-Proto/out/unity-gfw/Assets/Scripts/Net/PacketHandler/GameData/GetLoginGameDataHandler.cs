// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.GameData
{
    /// <summary>
    ///  玩家数据初始化提交
    /// </summary>
    [MessageHandler(URL = "GameData/GetLoginGameData")]
    public class GetLoginGameDataHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetLoginGameDataResponse>>>();
            var arg = new CommonEventArgs<GetLoginGameDataResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetLoginGameDataResponse>.EventId, arg);
        }   
    }
}