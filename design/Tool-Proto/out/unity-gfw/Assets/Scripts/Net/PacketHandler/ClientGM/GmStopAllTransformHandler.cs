// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-16 16:02:52,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ClientGM
{
    /// <summary>
    ///  停止所有东西
    /// </summary>
    [MessageHandler(URL = "ClientGM/gmStopAllTransform")]
    public class GmStopAllTransformHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GmStopAllTransformResponse>>>();
            var arg = new CommonEventArgs<GmStopAllTransformResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GmStopAllTransformResponse>.EventId, arg);
        }   
    }
}