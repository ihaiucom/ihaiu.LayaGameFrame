// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Actor
{
    /// <summary>
    ///  赠送忠诚卡
    /// </summary>
    [MessageHandler(URL = "Actor/GiveLoyaltyCard")]
    public class GiveLoyaltyCardHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GiveLoyaltyCardResponse>>>();
            var arg = new CommonEventArgs<GiveLoyaltyCardResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GiveLoyaltyCardResponse>.EventId, arg);
        }   
    }
}