// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Movie
{
    /// <summary>
    ///  拍摄电影
    /// </summary>
    [MessageHandler(URL = "movie/MakeFilm")]
    public class MakeFilmHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<MakeFilmResponse>>>();
            var arg = new CommonEventArgs<MakeFilmResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<MakeFilmResponse>.EventId, arg);
        }   
    }
}