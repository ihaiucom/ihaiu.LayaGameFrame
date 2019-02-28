// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-30 09:55:27,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.LevGift
{
    [MessageHandler(URL = "levGift/GetLevGift")]
    public class GetLevGiftHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetLevGiftResponse>>>();
            var arg = new CommonEventArgs<GetLevGiftResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetLevGiftResponse>.EventId, arg);
        }   
    }
}