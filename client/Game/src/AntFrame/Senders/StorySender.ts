import Game from "../../Game";

export default class StorySender 
{

    //请求读取剧本--返回最新十条评论和三条高赞评论
    async readCommentList(id: number): Promise<boolean>{
        let s2c = await Game.net.AsyncStoryReadCommentC2S(id);
        if (s2c.error == 0) {
            
        }

        return Promise.resolve(s2c.error == 0);
    }

    //请求评论列表
    async getCommentList(id: number): Promise<boolean>{
        let s2c = await Game.net.AsyncStoryGetCommentC2S(id);
        if (s2c.error == 0) {
            
        }

        return Promise.resolve(s2c.error == 0);
    }

    //请求发送留言
    async sendComment(id: number, content: string): Promise<boolean>{
        let s2c = await Game.net.AsyncStoryCommentC2S(id, content);
        if (s2c.error == 0) {
            
        }

        return Promise.resolve(s2c.error == 0);
    }

    //请求点赞
    async giveLike(commentid: number, storyid: number): Promise<boolean>{
        let s2c = await Game.net.AsyncStoryGiveLikeC2S(commentid, storyid);
        if (s2c.error == 0) {
            
        }

        return Promise.resolve(s2c.error == 0);
    }

    
}