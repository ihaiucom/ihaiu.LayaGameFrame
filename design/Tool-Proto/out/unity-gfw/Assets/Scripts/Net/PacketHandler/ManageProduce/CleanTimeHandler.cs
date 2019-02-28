// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ManageProduce
{
    /// <summary>
    ///  清除倒计时
    /// </summary>
    [MessageHandler(URL = "manageProduce/cleanTime")]
    public class CleanTimeHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<CleanTimeResponse>>>();
            var arg = new CommonEventArgs<CleanTimeResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<CleanTimeResponse>.EventId, arg);
        }   
    }
}