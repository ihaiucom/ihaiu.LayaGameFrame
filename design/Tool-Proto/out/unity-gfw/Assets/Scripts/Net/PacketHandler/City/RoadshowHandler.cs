// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.City
{
    /// <summary>
    ///  路演
    /// </summary>
    [MessageHandler(URL = "city/Roadshow")]
    public class RoadshowHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<RoadshowResponse>>>();
            var arg = new CommonEventArgs<RoadshowResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<RoadshowResponse>.EventId, arg);
        }   
    }
}