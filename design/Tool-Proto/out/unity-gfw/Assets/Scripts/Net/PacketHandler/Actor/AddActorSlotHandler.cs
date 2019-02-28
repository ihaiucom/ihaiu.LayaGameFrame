// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Actor
{
    /// <summary>
    ///  增加艺人槽位
    /// </summary>
    [MessageHandler(URL = "Actor/AddActorSlot")]
    public class AddActorSlotHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<AddActorSlotResponse>>>();
            var arg = new CommonEventArgs<AddActorSlotResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<AddActorSlotResponse>.EventId, arg);
        }   
    }
}