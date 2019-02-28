// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.GameData
{
    /// <summary>
    ///  选择初始化艺人
    /// </summary>
    [MessageHandler(URL = "GameData/GetInitActor")]
    public class GetInitActorHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetInitActorResponse>>>();
            var arg = new CommonEventArgs<GetInitActorResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetInitActorResponse>.EventId, arg);
        }   
    }
}