// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Test
{
    [MessageHandler(URL = "test/FinishGuide")]
    public class FinishGuideHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<FinishGuideResponse>>>();
            var arg = new CommonEventArgs<FinishGuideResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<FinishGuideResponse>.EventId, arg);
        }   
    }
}