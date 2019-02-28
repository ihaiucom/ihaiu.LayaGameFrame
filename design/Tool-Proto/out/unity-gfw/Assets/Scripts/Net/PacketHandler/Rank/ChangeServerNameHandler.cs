// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Rank
{
    /// <summary>
    ///  修改服务器名称
    /// </summary>
    [MessageHandler(URL = "rank/ChangeServerName")]
    public class ChangeServerNameHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<ChangeServerNameResponse>>>();
            var arg = new CommonEventArgs<ChangeServerNameResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<ChangeServerNameResponse>.EventId, arg);
        }   
    }
}