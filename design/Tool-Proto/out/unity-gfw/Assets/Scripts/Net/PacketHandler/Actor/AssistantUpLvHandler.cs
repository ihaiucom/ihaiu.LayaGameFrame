// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-4 19:07:53,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Actor
{
    /// <summary>
    ///  艺人助理升级
    /// </summary>
    [MessageHandler(URL = "Actor/AssistantUpLv")]
    public class AssistantUpLvHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<AssistantUpLvResponse>>>();
            var arg = new CommonEventArgs<AssistantUpLvResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<AssistantUpLvResponse>.EventId, arg);
        }   
    }
}