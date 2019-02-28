// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Rank
{
    /// <summary>
    ///  获取全服排行榜
    /// </summary>
    [MessageHandler(URL = "rank/GetServerRankList")]
    public class GetServerRankListHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetServerRankListResponse>>>();
            var arg = new CommonEventArgs<GetServerRankListResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetServerRankListResponse>.EventId, arg);
        }   
    }
}