// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Movie
{
    /// <summary>
    ///  电影发布
    /// </summary>
    [MessageHandler(URL = "movie/PublishMovie")]
    public class PublishMovieHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<PublishMovieResponse>>>();
            var arg = new CommonEventArgs<PublishMovieResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<PublishMovieResponse>.EventId, arg);
        }   
    }
}