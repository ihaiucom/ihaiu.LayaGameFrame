// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ClientGM
{
    /// <summary>
    ///  测试几百个本地缓存同时读取
    /// </summary>
    [MessageHandler(URL = "ClientGM/gmTestLocalStorageRead")]
    public class GmTestLocalStorageReadHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GmTestLocalStorageReadResponse>>>();
            var arg = new CommonEventArgs<GmTestLocalStorageReadResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GmTestLocalStorageReadResponse>.EventId, arg);
        }   
    }
}