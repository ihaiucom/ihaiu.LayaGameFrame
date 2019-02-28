// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Cooperate
{
    /// <summary>
    ///  主界面合作信息 10秒一次
    /// </summary>
    [MessageHandler(URL = "cooperate/GetInfo")]
    public class GetInfoHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetInfoResponse>>>();
            var arg = new CommonEventArgs<GetInfoResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetInfoResponse>.EventId, arg);
        }   
    }
}