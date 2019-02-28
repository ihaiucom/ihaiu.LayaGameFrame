// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-13 19:56:07,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ClientGM
{
    /// <summary>
    ///  打印有多少个fgui的动效
    /// </summary>
    [MessageHandler(URL = "ClientGM/gmTestPrintTotalActiveTweens")]
    public class GmTestPrintTotalActiveTweensHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GmTestPrintTotalActiveTweensResponse>>>();
            var arg = new CommonEventArgs<GmTestPrintTotalActiveTweensResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GmTestPrintTotalActiveTweensResponse>.EventId, arg);
        }   
    }
}