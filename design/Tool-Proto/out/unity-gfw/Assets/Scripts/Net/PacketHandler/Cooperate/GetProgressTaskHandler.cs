// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Cooperate
{
    /// <summary>
    ///  领取进度奖励
    /// </summary>
    [MessageHandler(URL = "cooperate/GetProgressTask")]
    public class GetProgressTaskHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetProgressTaskResponse>>>();
            var arg = new CommonEventArgs<GetProgressTaskResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetProgressTaskResponse>.EventId, arg);
        }   
    }
}