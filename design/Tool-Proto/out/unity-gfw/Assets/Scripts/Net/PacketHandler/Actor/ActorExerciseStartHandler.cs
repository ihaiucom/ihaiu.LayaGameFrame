// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Actor
{
    /// <summary>
    ///  艺人训练开始
    /// </summary>
    [MessageHandler(URL = "Actor/ActorExerciseStart")]
    public class ActorExerciseStartHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<ActorExerciseStartResponse>>>();
            var arg = new CommonEventArgs<ActorExerciseStartResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<ActorExerciseStartResponse>.EventId, arg);
        }   
    }
}