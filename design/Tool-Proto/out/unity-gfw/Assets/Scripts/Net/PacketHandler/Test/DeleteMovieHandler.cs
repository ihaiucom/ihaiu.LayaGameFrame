// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Test
{
    /// <summary>
    ///  删除电影
    /// </summary>
    [MessageHandler(URL = "test/DeleteMovie")]
    public class DeleteMovieHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<DeleteMovieResponse>>>();
            var arg = new CommonEventArgs<DeleteMovieResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<DeleteMovieResponse>.EventId, arg);
        }   
    }
}