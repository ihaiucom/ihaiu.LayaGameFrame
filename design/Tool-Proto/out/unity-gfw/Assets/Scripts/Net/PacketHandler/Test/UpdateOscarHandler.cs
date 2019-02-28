// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Test
{
    /// <summary>
    ///  奥斯卡颁奖
    /// </summary>
    [MessageHandler(URL = "test/UpdateOscar")]
    public class UpdateOscarHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<UpdateOscarResponse>>>();
            var arg = new CommonEventArgs<UpdateOscarResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<UpdateOscarResponse>.EventId, arg);
        }   
    }
}