// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ManageProduce
{
    /// <summary>
    ///  领取奖励
    /// </summary>
    [MessageHandler(URL = "manageProduce/GetReward")]
    public class GetRewardHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetRewardResponse>>>();
            var arg = new CommonEventArgs<GetRewardResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetRewardResponse>.EventId, arg);
        }   
    }
}