// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Secretary
{
    /// <summary>
    ///  申请拍摄许可证
    /// </summary>
    [MessageHandler(URL = "secretary/ApplyMovieLicence")]
    public class ApplyMovieLicenceHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<ApplyMovieLicenceResponse>>>();
            var arg = new CommonEventArgs<ApplyMovieLicenceResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<ApplyMovieLicenceResponse>.EventId, arg);
        }   
    }
}