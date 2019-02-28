// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Secretary
{
    /// <summary>
    ///  领取奖励
    /// </summary>
    [MessageHandler(URL = "secretary/GetDailyReward")]
    public class GetDailyRewardHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetDailyRewardResponse>>>();
            var arg = new CommonEventArgs<GetDailyRewardResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetDailyRewardResponse>.EventId, arg);
        }   
    }
}