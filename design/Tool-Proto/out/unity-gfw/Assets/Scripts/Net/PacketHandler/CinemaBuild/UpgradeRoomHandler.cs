// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.CinemaBuild
{
    /// <summary>
    ///  升级房间
    /// </summary>
    [MessageHandler(URL = "CinemaBuild/UpgradeRoom")]
    public class UpgradeRoomHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<UpgradeRoomResponse>>>();
            var arg = new CommonEventArgs<UpgradeRoomResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<UpgradeRoomResponse>.EventId, arg);
        }   
    }
}