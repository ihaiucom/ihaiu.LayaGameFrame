// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-4 19:07:53,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.BeginnerGuide
{
    [MessageHandler(URL = "BeginnerGuide/GuideEndReward")]
    public class GuideEndRewardHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GuideEndRewardResponse>>>();
            var arg = new CommonEventArgs<GuideEndRewardResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GuideEndRewardResponse>.EventId, arg);
        }   
    }
}