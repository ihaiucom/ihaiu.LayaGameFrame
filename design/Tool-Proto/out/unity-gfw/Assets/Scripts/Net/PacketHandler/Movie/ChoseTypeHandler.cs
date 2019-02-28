// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Movie
{
    /// <summary>
    ///  选择剧本类型
    /// </summary>
    [MessageHandler(URL = "movie/ChoseType")]
    public class ChoseTypeHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<ChoseTypeResponse>>>();
            var arg = new CommonEventArgs<ChoseTypeResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<ChoseTypeResponse>.EventId, arg);
        }   
    }
}