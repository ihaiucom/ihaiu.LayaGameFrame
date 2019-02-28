// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ClientGM
{
    /// <summary>
    ///  请求奥斯卡数据
    /// </summary>
    [MessageHandler(URL = "ClientGM/gmUpdateOscar")]
    public class GmUpdateOscarHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GmUpdateOscarResponse>>>();
            var arg = new CommonEventArgs<GmUpdateOscarResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GmUpdateOscarResponse>.EventId, arg);
        }   
    }
}