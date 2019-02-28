// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.BeginnerGuide
{
    /// <summary>
    ///  完成一个引导任务
    /// </summary>
    [MessageHandler(URL = "BeginnerGuide/CompleteGuide")]
    public class CompleteGuideHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<CompleteGuideResponse>>>();
            var arg = new CommonEventArgs<CompleteGuideResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<CompleteGuideResponse>.EventId, arg);
        }   
    }
}