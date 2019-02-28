// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.City
{
    /// <summary>
    ///  占领城市
    /// </summary>
    [MessageHandler(URL = "city/HoldCity")]
    public class HoldCityHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<HoldCityResponse>>>();
            var arg = new CommonEventArgs<HoldCityResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<HoldCityResponse>.EventId, arg);
        }   
    }
}