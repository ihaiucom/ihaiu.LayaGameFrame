// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ManageVisit
{
    /// <summary>
    ///  开始探班
    /// </summary>
    [MessageHandler(URL = "manageVisit/StartVisit")]
    public class StartVisitHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<StartVisitResponse>>>();
            var arg = new CommonEventArgs<StartVisitResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<StartVisitResponse>.EventId, arg);
        }   
    }
}