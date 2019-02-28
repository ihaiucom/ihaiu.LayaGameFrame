// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Actor
{
    /// <summary>
    ///  增加训练队列
    /// </summary>
    [MessageHandler(URL = "Actor/ActorExerciseAdd")]
    public class ActorExerciseAddHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<ActorExerciseAddResponse>>>();
            var arg = new CommonEventArgs<ActorExerciseAddResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<ActorExerciseAddResponse>.EventId, arg);
        }   
    }
}