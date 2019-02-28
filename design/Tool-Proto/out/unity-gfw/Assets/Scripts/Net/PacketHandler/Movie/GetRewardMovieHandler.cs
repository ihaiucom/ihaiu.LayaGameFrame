// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Movie
{
    /// <summary>
    ///  领取收益
    /// </summary>
    [MessageHandler(URL = "movie/GetRewardMovie")]
    public class GetRewardMovieHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetRewardMovieResponse>>>();
            var arg = new CommonEventArgs<GetRewardMovieResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetRewardMovieResponse>.EventId, arg);
        }   
    }
}