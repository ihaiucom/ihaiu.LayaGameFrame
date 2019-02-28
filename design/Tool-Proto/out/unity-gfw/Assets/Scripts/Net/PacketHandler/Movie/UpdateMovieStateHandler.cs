// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Movie
{
    /// <summary>
    ///  更新电影状态
    /// </summary>
    [MessageHandler(URL = "movie/UpdateMovieState")]
    public class UpdateMovieStateHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<UpdateMovieStateResponse>>>();
            var arg = new CommonEventArgs<UpdateMovieStateResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<UpdateMovieStateResponse>.EventId, arg);
        }   
    }
}