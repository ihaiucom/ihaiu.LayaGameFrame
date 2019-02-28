// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Rank
{
    /// <summary>
    ///  领取排行榜奖励
    /// </summary>
    [MessageHandler(URL = "rank/GetServerListReward")]
    public class GetServerListRewardHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetServerListRewardResponse>>>();
            var arg = new CommonEventArgs<GetServerListRewardResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetServerListRewardResponse>.EventId, arg);
        }   
    }
}