// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Cooperate
{
    /// <summary>
    ///  
    /// </summary>
    [MessageHandler(URL = "cooperate/TaskOperate")]
    public class TaskOperateHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<TaskOperateResponse>>>();
            var arg = new CommonEventArgs<TaskOperateResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<TaskOperateResponse>.EventId, arg);
        }   
    }
}