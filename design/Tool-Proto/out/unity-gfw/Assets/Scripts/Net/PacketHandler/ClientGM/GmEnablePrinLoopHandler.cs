// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-16 16:04:39,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ClientGM
{
    /// <summary>
    ///  是否打印loop开关
    /// </summary>
    [MessageHandler(URL = "ClientGM/gmEnablePrinLoop")]
    public class GmEnablePrinLoopHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GmEnablePrinLoopResponse>>>();
            var arg = new CommonEventArgs<GmEnablePrinLoopResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GmEnablePrinLoopResponse>.EventId, arg);
        }   
    }
}