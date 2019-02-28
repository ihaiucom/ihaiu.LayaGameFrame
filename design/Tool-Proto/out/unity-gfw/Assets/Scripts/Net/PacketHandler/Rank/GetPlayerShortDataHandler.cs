// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Rank
{
    /// <summary>
    ///  获取玩家基本信息
    /// </summary>
    [MessageHandler(URL = "rank/GetPlayerShortData")]
    public class GetPlayerShortDataHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetPlayerShortDataResponse>>>();
            var arg = new CommonEventArgs<GetPlayerShortDataResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetPlayerShortDataResponse>.EventId, arg);
        }   
    }
}