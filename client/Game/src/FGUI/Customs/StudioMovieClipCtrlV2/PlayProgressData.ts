/** 拍摄动画 -- 播放进度数据 */
export default class PlayProgressData
{
    public isPlaying = false;
    public index = 0;
    public pauseIndex = -1;

    play()
    {
        this.isPlaying = true;
    }

    pause()
    {
        this.isPlaying = false;
        this.pauseIndex = this.index;
    }

    clear()
    {
        this.isPlaying = false;
        this.index = 0;
        this.pauseIndex = -1;
    }

    /** 检查是否播放过了 */
    checkIsPlayed(): boolean
    {
        // 暂停退出
        if(!this.isPlaying) return true;

        this.index ++;
        return this.index < this.pauseIndex;
    }
}