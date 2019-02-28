// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-4 15:12:16,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.SmallTarget
{
    /// <summary>
    ///  等级礼包
    /// </summary>
    [MessageHandler(URL = "smallTarget/LevGift")]
    public class LevGiftHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<LevGiftResponse>>>();
            var arg = new CommonEventArgs<LevGiftResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<LevGiftResponse>.EventId, arg);
        }   
    }
}