// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.CinemaBuild
{
    /// <summary>
    ///  建造房间
    /// </summary>
    [MessageHandler(URL = "CinemaBuild/BuildRoom")]
    public class BuildRoomHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<BuildRoomResponse>>>();
            var arg = new CommonEventArgs<BuildRoomResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<BuildRoomResponse>.EventId, arg);
        }   
    }
}