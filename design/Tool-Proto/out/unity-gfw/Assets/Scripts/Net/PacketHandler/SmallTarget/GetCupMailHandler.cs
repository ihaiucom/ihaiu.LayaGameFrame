// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-4 15:12:16,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.SmallTarget
{
    [MessageHandler(URL = "smallTarget/GetCupMail")]
    public class GetCupMailHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetCupMailResponse>>>();
            var arg = new CommonEventArgs<GetCupMailResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetCupMailResponse>.EventId, arg);
        }   
    }
}