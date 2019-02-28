// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.ManageProduce
{
    /// <summary>
    ///  生产升级
    /// </summary>
    [MessageHandler(URL = "manageProduce/Uplevel")]
    public class UplevelHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<UplevelResponse>>>();
            var arg = new CommonEventArgs<UplevelResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<UplevelResponse>.EventId, arg);
        }   
    }
}