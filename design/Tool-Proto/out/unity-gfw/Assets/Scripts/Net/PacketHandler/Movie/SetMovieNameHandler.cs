// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Movie
{
    /// <summary>
    ///  设置电影名字
    /// </summary>
    [MessageHandler(URL = "movie/SetMovieName")]
    public class SetMovieNameHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<SetMovieNameResponse>>>();
            var arg = new CommonEventArgs<SetMovieNameResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<SetMovieNameResponse>.EventId, arg);
        }   
    }
}