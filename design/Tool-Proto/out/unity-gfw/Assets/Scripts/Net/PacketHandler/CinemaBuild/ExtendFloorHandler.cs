// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.CinemaBuild
{
    /// <summary>
    ///  扩建楼层
    /// </summary>
    [MessageHandler(URL = "CinemaBuild/ExtendFloor")]
    public class ExtendFloorHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<ExtendFloorResponse>>>();
            var arg = new CommonEventArgs<ExtendFloorResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<ExtendFloorResponse>.EventId, arg);
        }   
    }
}