// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Rank
{
    /// <summary>
    ///  签约影院
    /// </summary>
    [MessageHandler(URL = "rank/ChoseTheater")]
    public class ChoseTheaterHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<ChoseTheaterResponse>>>();
            var arg = new CommonEventArgs<ChoseTheaterResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<ChoseTheaterResponse>.EventId, arg);
        }   
    }
}