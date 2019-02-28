// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ManageMeeting
{
    /// <summary>
    ///  加价
    /// </summary>
    [MessageHandler(URL = "manageMeeting/Markup")]
    public class MarkupHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<MarkupResponse>>>();
            var arg = new CommonEventArgs<MarkupResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<MarkupResponse>.EventId, arg);
        }   
    }
}