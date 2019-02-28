// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-4 19:07:53,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Chat
{
    /// <summary>
    ///  招募集团
    /// </summary>
    [MessageHandler(URL = "chat/recruit")]
    public class RecruitHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<RecruitResponse>>>();
            var arg = new CommonEventArgs<RecruitResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<RecruitResponse>.EventId, arg);
        }   
    }
}