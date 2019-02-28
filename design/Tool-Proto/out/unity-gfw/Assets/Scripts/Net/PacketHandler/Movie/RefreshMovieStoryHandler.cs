// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-30 09:55:27,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Movie
{
    /// <summary>
    ///  刷新电影剧本
    /// </summary>
    [MessageHandler(URL = "movie/RefreshMovieStory")]
    public class RefreshMovieStoryHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<RefreshMovieStoryResponse>>>();
            var arg = new CommonEventArgs<RefreshMovieStoryResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<RefreshMovieStoryResponse>.EventId, arg);
        }   
    }
}