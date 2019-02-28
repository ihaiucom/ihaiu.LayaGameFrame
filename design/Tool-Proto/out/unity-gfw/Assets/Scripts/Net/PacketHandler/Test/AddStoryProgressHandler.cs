// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Test
{
    /// <summary>
    ///  添加剧本进度
    /// </summary>
    [MessageHandler(URL = "test/AddStoryProgress")]
    public class AddStoryProgressHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<AddStoryProgressResponse>>>();
            var arg = new CommonEventArgs<AddStoryProgressResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<AddStoryProgressResponse>.EventId, arg);
        }   
    }
}