// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ClientGM
{
    /// <summary>
    ///  测试几百个本地缓存同时存储
    /// </summary>
    [MessageHandler(URL = "ClientGM/gmTestLocalStorageSave")]
    public class GmTestLocalStorageSaveHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GmTestLocalStorageSaveResponse>>>();
            var arg = new CommonEventArgs<GmTestLocalStorageSaveResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GmTestLocalStorageSaveResponse>.EventId, arg);
        }   
    }
}