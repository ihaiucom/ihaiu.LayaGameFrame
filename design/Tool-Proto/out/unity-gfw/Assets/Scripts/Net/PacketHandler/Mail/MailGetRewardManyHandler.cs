// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Mail
{
    /// <summary>
    ///  批量领取邮件
    /// </summary>
    [MessageHandler(URL = "Mail/MailGetRewardMany")]
    public class MailGetRewardManyHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<MailGetRewardManyResponse>>>();
            var arg = new CommonEventArgs<MailGetRewardManyResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<MailGetRewardManyResponse>.EventId, arg);
        }   
    }
}