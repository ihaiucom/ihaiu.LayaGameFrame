// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-16 16:02:51,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ClientGM
{
    /// <summary>
    ///  设置cacheAs
    /// </summary>
    [MessageHandler(URL = "ClientGM/gmCacheAs")]
    public class GmCacheAsHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GmCacheAsResponse>>>();
            var arg = new CommonEventArgs<GmCacheAsResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GmCacheAsResponse>.EventId, arg);
        }   
    }
}