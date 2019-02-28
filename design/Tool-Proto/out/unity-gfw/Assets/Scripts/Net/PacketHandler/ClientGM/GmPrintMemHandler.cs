// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ClientGM
{
    /// <summary>
    ///  打印内存
    /// </summary>
    [MessageHandler(URL = "ClientGM/gmPrintMem")]
    public class GmPrintMemHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GmPrintMemResponse>>>();
            var arg = new CommonEventArgs<GmPrintMemResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GmPrintMemResponse>.EventId, arg);
        }   
    }
}