// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Actor
{
    /// <summary>
    ///  艺人结束训练
    /// </summary>
    [MessageHandler(URL = "Actor/ActorExerciseReward")]
    public class ActorExerciseRewardHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<ActorExerciseRewardResponse>>>();
            var arg = new CommonEventArgs<ActorExerciseRewardResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<ActorExerciseRewardResponse>.EventId, arg);
        }   
    }
}