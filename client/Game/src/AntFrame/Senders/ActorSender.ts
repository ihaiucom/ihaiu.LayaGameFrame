import Game from '../../Game';

import GamerGetActorListC2S = proto.GamerGetActorListC2S;
export default class ActorSender {

    async actorList() {
        let s2c = await Game.net.AsyncGamerGetActorListC2S();
        console.log("GamerGetActorListC2S = ", s2c);
    }

    async rename(actorId: number, name: string): Promise<boolean> {
        let s2c = await Game.net.AsyncGamerChangeActorNameC2S(actorId,name);
        if(0 == s2c.error) {
            console.log("rename success");
        }
        return Promise.resolve(s2c.error == 0);
    }

    async levelup(actorId: number): Promise<boolean> {
        let s2c = await Game.net.AsyncGamerActorUpLevelC2S(actorId);
        if(0 == s2c.error) {
            console.log("levelup success");
        }
        return Promise.resolve(s2c.error == 0);
    }
}