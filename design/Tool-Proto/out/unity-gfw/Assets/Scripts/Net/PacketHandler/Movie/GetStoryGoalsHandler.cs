// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Movie
{
    /// <summary>
    ///  领取剧本目标奖励
    /// </summary>
    [MessageHandler(URL = "movie/GetStoryGoals")]
    public class GetStoryGoalsHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetStoryGoalsResponse>>>();
            var arg = new CommonEventArgs<GetStoryGoalsResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetStoryGoalsResponse>.EventId, arg);
        }   
    }
}