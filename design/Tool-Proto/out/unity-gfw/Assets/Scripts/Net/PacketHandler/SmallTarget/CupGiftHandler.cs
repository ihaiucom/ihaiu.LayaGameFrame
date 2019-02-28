// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-4 15:12:16,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.SmallTarget
{
    [MessageHandler(URL = "smallTarget/CupGift")]
    public class CupGiftHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<CupGiftResponse>>>();
            var arg = new CommonEventArgs<CupGiftResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<CupGiftResponse>.EventId, arg);
        }   
    }
}