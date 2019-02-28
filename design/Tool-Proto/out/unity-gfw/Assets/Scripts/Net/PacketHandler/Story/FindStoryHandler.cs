// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Story
{
    /// <summary>
    ///  搜罗剧本
    /// </summary>
    [MessageHandler(URL = "story/findStory")]
    public class FindStoryHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<FindStoryResponse>>>();
            var arg = new CommonEventArgs<FindStoryResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<FindStoryResponse>.EventId, arg);
        }   
    }
}