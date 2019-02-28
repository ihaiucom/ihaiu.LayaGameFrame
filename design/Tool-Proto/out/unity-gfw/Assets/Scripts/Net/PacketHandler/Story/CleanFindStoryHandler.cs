// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Story
{
    /// <summary>
    ///  清除搜罗时间
    /// </summary>
    [MessageHandler(URL = "story/cleanFindStory")]
    public class CleanFindStoryHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<CleanFindStoryResponse>>>();
            var arg = new CommonEventArgs<CleanFindStoryResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<CleanFindStoryResponse>.EventId, arg);
        }   
    }
}