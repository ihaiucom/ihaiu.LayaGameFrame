// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Rank
{
    /// <summary>
    ///  获取分组总票房排行榜
    /// </summary>
    [MessageHandler(URL = "rank/GetGroupRankList")]
    public class GetGroupRankListHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetGroupRankListResponse>>>();
            var arg = new CommonEventArgs<GetGroupRankListResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetGroupRankListResponse>.EventId, arg);
        }   
    }
}