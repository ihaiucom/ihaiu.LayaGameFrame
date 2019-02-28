// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Actor
{
    /// <summary>
    ///  艺人改名
    /// </summary>
    [MessageHandler(URL = "Actor/ActorChangeName")]
    public class ActorChangeNameHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<ActorChangeNameResponse>>>();
            var arg = new CommonEventArgs<ActorChangeNameResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<ActorChangeNameResponse>.EventId, arg);
        }   
    }
}