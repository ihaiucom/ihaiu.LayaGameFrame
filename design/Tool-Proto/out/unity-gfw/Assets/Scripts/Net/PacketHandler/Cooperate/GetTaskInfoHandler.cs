// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Cooperate
{
    /// <summary>
    ///  合作任务界面 2秒一次
    /// </summary>
    [MessageHandler(URL = "cooperate/GetTaskInfo")]
    public class GetTaskInfoHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetTaskInfoResponse>>>();
            var arg = new CommonEventArgs<GetTaskInfoResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetTaskInfoResponse>.EventId, arg);
        }   
    }
}