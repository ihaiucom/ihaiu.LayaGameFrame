// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Cooperate
{
    /// <summary>
    ///  审批
    /// </summary>
    [MessageHandler(URL = "cooperate/Approve")]
    public class ApproveHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<ApproveResponse>>>();
            var arg = new CommonEventArgs<ApproveResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<ApproveResponse>.EventId, arg);
        }   
    }
}