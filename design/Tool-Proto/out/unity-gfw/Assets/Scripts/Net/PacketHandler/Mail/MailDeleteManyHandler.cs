// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Mail
{
    /// <summary>
    ///  批量删除邮件
    /// </summary>
    [MessageHandler(URL = "Mail/MailDeleteMany")]
    public class MailDeleteManyHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<MailDeleteManyResponse>>>();
            var arg = new CommonEventArgs<MailDeleteManyResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<MailDeleteManyResponse>.EventId, arg);
        }   
    }
}