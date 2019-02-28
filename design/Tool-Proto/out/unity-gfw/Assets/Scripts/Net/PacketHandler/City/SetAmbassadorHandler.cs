// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.City
{
    /// <summary>
    ///  设置形象大使
    /// </summary>
    [MessageHandler(URL = "city/SetAmbassador")]
    public class SetAmbassadorHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<SetAmbassadorResponse>>>();
            var arg = new CommonEventArgs<SetAmbassadorResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<SetAmbassadorResponse>.EventId, arg);
        }   
    }
}