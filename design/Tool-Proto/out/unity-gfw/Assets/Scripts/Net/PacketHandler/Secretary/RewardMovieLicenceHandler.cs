// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Secretary
{
    /// <summary>
    ///  领取拍摄许可证
    /// </summary>
    [MessageHandler(URL = "secretary/RewardMovieLicence")]
    public class RewardMovieLicenceHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<RewardMovieLicenceResponse>>>();
            var arg = new CommonEventArgs<RewardMovieLicenceResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<RewardMovieLicenceResponse>.EventId, arg);
        }   
    }
}