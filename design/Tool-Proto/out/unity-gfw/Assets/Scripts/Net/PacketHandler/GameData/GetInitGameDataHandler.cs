// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.GameData
{
    [MessageHandler(URL = "GameData/GetInitGameData")]
    public class GetInitGameDataHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetInitGameDataResponse>>>();
            var arg = new CommonEventArgs<GetInitGameDataResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetInitGameDataResponse>.EventId, arg);
        }   
    }
}