// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Cooperate
{
    /// <summary>
    ///  取消公开邀请
    /// </summary>
    [MessageHandler(URL = "cooperate/CancelCooperate")]
    public class CancelCooperateHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<CancelCooperateResponse>>>();
            var arg = new CommonEventArgs<CancelCooperateResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<CancelCooperateResponse>.EventId, arg);
        }   
    }
}