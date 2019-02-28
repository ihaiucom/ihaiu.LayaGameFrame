// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Secretary
{
    [MessageHandler(URL = "secretary/OpenSecretary")]
    public class OpenSecretaryHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<OpenSecretaryResponse>>>();
            var arg = new CommonEventArgs<OpenSecretaryResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<OpenSecretaryResponse>.EventId, arg);
        }   
    }
}