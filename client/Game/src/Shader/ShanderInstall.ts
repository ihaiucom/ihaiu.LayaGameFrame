import HeroMaterial from "./HeroMaterial";
import BlinnPhongMaterial from "./BlinnPhongMaterial";
import WallMaterial from "./WallMaterial";
import ParticleShader from "../EngineParticle/ParticleShader";

export default class ShaderInstall
{
    static async install()
    {
        // 3D
        // await BlinnPhongMaterial.install();
        // await HeroMaterial.install();
        // await WallMaterial.install();

        // 2D
        await ParticleShader.install();
    }
}