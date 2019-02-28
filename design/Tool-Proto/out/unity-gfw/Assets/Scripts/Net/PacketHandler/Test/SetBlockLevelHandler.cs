// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Test
{
    [MessageHandler(URL = "test/SetBlockLevel")]
    public class SetBlockLevelHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<SetBlockLevelResponse>>>();
            var arg = new CommonEventArgs<SetBlockLevelResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<SetBlockLevelResponse>.EventId, arg);
        }   
    }
}