import Game from "../Game";

export default class ParticleShader extends Laya.Shader
{
    constructor()
    {
        let vs = ParticleShader.vs;
        let ps = ParticleShader.ps;
        super(
            vs, 
            ps, 
            'EngineParticleShader', // saveName
            null, // nameMap
            // bindAttrib
            [
                'a_CornerTextureCoordinate',0,
                'a_Position',1,
                'a_Velocity',2,
                'a_StartColor',3,

                'a_EndColor',4,
                'a_SizeRotation',5,
                'a_Radius',6,
                'a_Radian',7,
                'a_AgeAddScale',8,
                'a_Time',9
            ]
        );
    }

    static shaderName = "ParticleShader";
    static vs: string;
    static ps: string;

    /**
     * 加载Shader
     */
    public static async install()
    {
        this.vs = await Game.asset.loadShaderVSAsync(this.shaderName);
        this.ps = await Game.asset.loadShaderPSAsync(this.shaderName);
    }



}