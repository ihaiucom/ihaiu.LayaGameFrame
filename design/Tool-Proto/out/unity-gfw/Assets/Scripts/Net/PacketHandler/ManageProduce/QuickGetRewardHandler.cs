// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ManageProduce
{
    /// <summary>
    ///  一键领取
    /// </summary>
    [MessageHandler(URL = "manageProduce/QuickGetReward")]
    public class QuickGetRewardHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<QuickGetRewardResponse>>>();
            var arg = new CommonEventArgs<QuickGetRewardResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<QuickGetRewardResponse>.EventId, arg);
        }   
    }
}