// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.GameData
{
    [MessageHandler(URL = "GameData/VisitorAuth")]
    public class VisitorAuthHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<VisitorAuthResponse>>>();
            var arg = new CommonEventArgs<VisitorAuthResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<VisitorAuthResponse>.EventId, arg);
        }   
    }
}