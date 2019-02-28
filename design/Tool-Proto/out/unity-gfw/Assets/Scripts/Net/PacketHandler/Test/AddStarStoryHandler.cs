// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Test
{
    /// <summary>
    ///  添加剧本
    /// </summary>
    [MessageHandler(URL = "test/AddStarStory")]
    public class AddStarStoryHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<AddStarStoryResponse>>>();
            var arg = new CommonEventArgs<AddStarStoryResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<AddStarStoryResponse>.EventId, arg);
        }   
    }
}