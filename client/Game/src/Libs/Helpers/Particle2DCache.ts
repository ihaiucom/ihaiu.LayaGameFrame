import UnOrderMultiMap from "./UnOrderMultiMap";
import Particle2D from "../../EngineParticle/Particle2D";
import Game from "../../Game";

export default class Particle2DCache
{
    private static particlesCaches = new UnOrderMultiMap<string, Particle2D>();

    static async get(res: string, texturename: string = null): Promise<Particle2D>
    {
        let key = res;
        if(!isNullOrEmpty(texturename))
        {
            key += " ; " + texturename;
        }
        let pool = this.particlesCaches.get(key);
        if(pool && pool.length > 0)
        {
            return pool.shift();
        }

        let p = await Game.asset.createParticle(res, texturename);
        p['$__res'] = key;
        p.emitter.start();
        p.stop();
        return p;
    }

    static recover(p: Particle2D)
    {
        let key = p['$__res'];
        if(!key) key='__other';
        p.stop();

        this.particlesCaches.addItem(key, p);
    }
}