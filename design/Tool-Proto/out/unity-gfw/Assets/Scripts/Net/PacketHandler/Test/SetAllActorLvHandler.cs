// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-7 17:37:08,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Test
{
    /// <summary>
    ///  非雪藏艺人正常升级每次十级
    /// </summary>
    [MessageHandler(URL = "test/SetAllActorLv")]
    public class SetAllActorLvHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<SetAllActorLvResponse>>>();
            var arg = new CommonEventArgs<SetAllActorLvResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<SetAllActorLvResponse>.EventId, arg);
        }   
    }
}