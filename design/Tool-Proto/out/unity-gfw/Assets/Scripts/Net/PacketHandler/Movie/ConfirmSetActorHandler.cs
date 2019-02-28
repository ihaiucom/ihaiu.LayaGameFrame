// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Movie
{
    /// <summary>
    ///  确认艺人选择
    /// </summary>
    [MessageHandler(URL = "movie/ConfirmSetActor")]
    public class ConfirmSetActorHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<ConfirmSetActorResponse>>>();
            var arg = new CommonEventArgs<ConfirmSetActorResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<ConfirmSetActorResponse>.EventId, arg);
        }   
    }
}