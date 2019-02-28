// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-7 17:37:08,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Item
{
    /// <summary>
    ///  使用碎片礼包道具
    /// </summary>
    [MessageHandler(URL = "item/UsePiecesGiftBag")]
    public class UsePiecesGiftBagHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<UsePiecesGiftBagResponse>>>();
            var arg = new CommonEventArgs<UsePiecesGiftBagResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<UsePiecesGiftBagResponse>.EventId, arg);
        }   
    }
}