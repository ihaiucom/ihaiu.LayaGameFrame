// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Movie
{
    /// <summary>
    ///  接受媒体访问
    /// </summary>
    [MessageHandler(URL = "movie/AcceptMediaVisit")]
    public class AcceptMediaVisitHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<AcceptMediaVisitResponse>>>();
            var arg = new CommonEventArgs<AcceptMediaVisitResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<AcceptMediaVisitResponse>.EventId, arg);
        }   
    }
}