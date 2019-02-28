// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Test
{
    /// <summary>
    ///  清除小秘书使用次数
    /// </summary>
    [MessageHandler(URL = "test/CleanSecretaryTimes")]
    public class CleanSecretaryTimesHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<CleanSecretaryTimesResponse>>>();
            var arg = new CommonEventArgs<CleanSecretaryTimesResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<CleanSecretaryTimesResponse>.EventId, arg);
        }   
    }
}