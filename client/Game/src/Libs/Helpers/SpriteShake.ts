import Dictionary from "./Dictionary";

export class SpriteShakeItem {
    x: number = 0;
    y: number = 0;
    rotation: number = 0;
    sprite: any = null;

    private speed = 50;

    start(duration: number, loop:boolean, time:number)
    {
        this.stop()
        if (loop) {
            Laya.timer.loop(time, this, this.play, [duration])
        } 
        this.play(duration);
    }

    stop()
    {
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this.sprite);
    }

    play(duration: number)  
    {
        //定义参数  
        let count = duration / this.speed;
        let number = 0;//震动次数  
        let offX;
        let offY;
        let dir = 1;//震动方向。1正，-1反  
        let rotation;

        Laya.timer.loop(this.speed, this, function shake() {
            number++;
            //随机获取震动方向  
            dir = Math.random() > .5 ? 1 : -1;
            //随机获取X轴移动量  
            offX = Math.random() * 5 * dir + this.x;
            //随机获取Y轴移动量  
            offY = Math.random() * 5 * dir * -1 + this.y;
            rotation = Math.random() * 5 * dir + this.rotation;
            Laya.Tween.to(this.sprite, { x: offX, y: offY, rotation: rotation }, this.speed, Laya.Ease.linearNone, Laya.Handler.create(this, function () {
                if (number > count) {
                    Laya.timer.clear(this, shake);
                    this.sprite.x = this.x;
                    this.sprite.y = this.y;
                    this.sprite.rotation = this.rotation;
                }
            }));
        });
    }

    clear()
    {
        this.stop();
        this.x = 0;
        this.y = 0;
        this.rotation = 0;
        this.sprite = null;
        Laya.Pool.recoverByClass(this);
    }
}

export default class SpriteShake {
   private static dict = new Dictionary<any, SpriteShakeItem>();

   static get(target:any): SpriteShakeItem
   {
       let item: SpriteShakeItem = this.dict.getValue(target)
       if (item) {
           return item;
       }

       return null;
   }

   static getOrCreate(target:any): SpriteShakeItem
   {
       let item = this.get(target);
       if (!item) {
           item = Laya.Pool.createByClass(SpriteShakeItem);
           item.x = target.x;
           item.y = target.y;
           item.rotation = target.rotation;
           item.sprite = target;
           this.dict.add(target, item);
       }
       
       return item;
   }

   static off(target: any)
   {
       let item = this.get(target);
       if (item) {
           this.dict.remove(target);
           item.clear()
       }
   }

   static on(target: any, duration:number, loop:boolean = false, time:number = 2000)
   {
       let item = this.getOrCreate(target);
       item.start(duration, loop, time);
   }
}
