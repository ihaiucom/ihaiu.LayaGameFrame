// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Test
{
    /// <summary>
    ///  设置小秘书状态
    /// </summary>
    [MessageHandler(URL = "test/SetSecretaryStatus")]
    public class SetSecretaryStatusHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<SetSecretaryStatusResponse>>>();
            var arg = new CommonEventArgs<SetSecretaryStatusResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<SetSecretaryStatusResponse>.EventId, arg);
        }   
    }
}