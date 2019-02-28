// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Item
{
    /// <summary>
    ///  道具合成
    /// </summary>
    [MessageHandler(URL = "item/Compound")]
    public class CompoundHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<CompoundResponse>>>();
            var arg = new CommonEventArgs<CompoundResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<CompoundResponse>.EventId, arg);
        }   
    }
}