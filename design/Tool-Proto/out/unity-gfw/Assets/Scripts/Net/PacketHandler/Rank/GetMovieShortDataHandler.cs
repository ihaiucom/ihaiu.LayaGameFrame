// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Rank
{
    /// <summary>
    ///  获取电影基本信息
    /// </summary>
    [MessageHandler(URL = "rank/GetMovieShortData")]
    public class GetMovieShortDataHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetMovieShortDataResponse>>>();
            var arg = new CommonEventArgs<GetMovieShortDataResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetMovieShortDataResponse>.EventId, arg);
        }   
    }
}