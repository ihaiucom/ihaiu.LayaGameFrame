// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Actor
{
    /// <summary>
    ///  赠送艺人资产
    /// </summary>
    [MessageHandler(URL = "Actor/GiveActorAssets")]
    public class GiveActorAssetsHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GiveActorAssetsResponse>>>();
            var arg = new CommonEventArgs<GiveActorAssetsResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GiveActorAssetsResponse>.EventId, arg);
        }   
    }
}