// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Test
{
    /// <summary>
    ///  会议 公务 探班次数全满
    /// </summary>
    [MessageHandler(URL = "test/AddManage")]
    public class AddManageHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<AddManageResponse>>>();
            var arg = new CommonEventArgs<AddManageResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<AddManageResponse>.EventId, arg);
        }   
    }
}