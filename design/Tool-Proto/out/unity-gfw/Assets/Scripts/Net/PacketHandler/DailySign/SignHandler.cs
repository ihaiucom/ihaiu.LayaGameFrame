// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.DailySign
{
    /// <summary>
    ///  签到
    /// </summary>
    [MessageHandler(URL = "dailySign/sign")]
    public class SignHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<SignResponse>>>();
            var arg = new CommonEventArgs<SignResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<SignResponse>.EventId, arg);
        }   
    }
}