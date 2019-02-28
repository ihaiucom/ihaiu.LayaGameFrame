// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.GameData
{
    /// <summary>
    ///  修改玩家的个性签名
    /// </summary>
    [MessageHandler(URL = "GameData/RePerSignatureGameData")]
    public class RePerSignatureGameDataHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<RePerSignatureGameDataResponse>>>();
            var arg = new CommonEventArgs<RePerSignatureGameDataResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<RePerSignatureGameDataResponse>.EventId, arg);
        }   
    }
}