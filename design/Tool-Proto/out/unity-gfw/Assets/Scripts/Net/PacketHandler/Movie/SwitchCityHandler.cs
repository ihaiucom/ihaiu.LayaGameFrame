// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Movie
{
    /// <summary>
    ///  切换城市
    /// </summary>
    [MessageHandler(URL = "movie/SwitchCity")]
    public class SwitchCityHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<SwitchCityResponse>>>();
            var arg = new CommonEventArgs<SwitchCityResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<SwitchCityResponse>.EventId, arg);
        }   
    }
}