// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ManageVisit
{
    /// <summary>
    ///  开始接待
    /// </summary>
    [MessageHandler(URL = "manageVisit/StartRece")]
    public class StartReceHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<StartReceResponse>>>();
            var arg = new CommonEventArgs<StartReceResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<StartReceResponse>.EventId, arg);
        }   
    }
}