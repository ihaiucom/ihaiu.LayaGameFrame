// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Movie
{
    /// <summary>
    ///  推广电影
    /// </summary>
    [MessageHandler(URL = "movie/SpreadMovie")]
    public class SpreadMovieHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<SpreadMovieResponse>>>();
            var arg = new CommonEventArgs<SpreadMovieResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<SpreadMovieResponse>.EventId, arg);
        }   
    }
}