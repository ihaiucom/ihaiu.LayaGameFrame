// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Rank
{
    /// <summary>
    ///  获取分组电影排行榜
    /// </summary>
    [MessageHandler(URL = "rank/GetGroupMovieRankList")]
    public class GetGroupMovieRankListHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetGroupMovieRankListResponse>>>();
            var arg = new CommonEventArgs<GetGroupMovieRankListResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetGroupMovieRankListResponse>.EventId, arg);
        }   
    }
}