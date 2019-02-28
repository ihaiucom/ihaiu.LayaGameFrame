// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Test
{
    [MessageHandler(URL = "test/GetAutoCooperate")]
    public class GetAutoCooperateHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetAutoCooperateResponse>>>();
            var arg = new CommonEventArgs<GetAutoCooperateResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetAutoCooperateResponse>.EventId, arg);
        }   
    }
}