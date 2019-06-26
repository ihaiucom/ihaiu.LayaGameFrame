import Game from "../Game";
import VertexMesh = Laya.VertexMesh;
import Shader3D = Laya.Shader3D;
import SkinnedMeshSprite3D = Laya.SkinnedMeshSprite3D;
import Vector4 = Laya.Vector4;
import ShaderData = Laya.ShaderData;
import Scene3D = Laya.Scene3D;
import BaseVector = Laya.BaseVector;
import BaseTexture = Laya.BaseTexture;
import ShaderDefines = laya.d3.shader.ShaderDefines;
import BaseMaterial = Laya.BaseMaterial;
import RenderState = Laya.RenderState;



export default class WallMaterial extends BaseMaterial
{
    /** Shader名称 */
    public static shaderName = "WallShader";
    /**
     * 加载Shader
     */
    public static async install()
    {

        WallMaterial.__init__();

        let attributeMap=
        {
			'a_Position':VertexMesh.MESH_POSITION0,
			'a_Color':VertexMesh.MESH_COLOR0,
			'a_Texcoord0':VertexMesh.MESH_TEXTURECOORDINATE0,
			'a_BoneWeights':VertexMesh.MESH_BLENDWEIGHT0,
			'a_BoneIndices':VertexMesh.MESH_BLENDINDICES0
        };

        let uniformMap=
        {
			'u_Bones':Shader3D.PERIOD_CUSTOM,
			'u_DiffuseTexture':Shader3D.PERIOD_MATERIAL,
			'u_AlphaTestValue':Shader3D.PERIOD_MATERIAL,
			'u_DiffuseColor':Shader3D.PERIOD_MATERIAL,
			'u_TilingOffset':Shader3D.PERIOD_MATERIAL,
			'u_MvpMatrix':Shader3D.PERIOD_SPRITE
        };

        let vs: string = await Game.asset.loadShaderVSAsync(WallMaterial.shaderName);
        let ps: string = await Game.asset.loadShaderPSAsync(WallMaterial.shaderName);
       


        let shader:Laya.Shader3D = Laya.Shader3D.add(WallMaterial.shaderName);
        let subShader: Laya.SubShader = new Laya.SubShader(attributeMap, uniformMap, SkinnedMeshSprite3D.shaderDefines,WallMaterial.shaderDefines);
        shader.addSubShader(subShader);
        subShader.addShaderPass(vs, ps);


    }



    // Shader属性索引(指针)

    // 反照 颜色
    private _albedoColor: Vector4;
    // 反照 强度
    private _albedoIntensity: number;
    // 是否开启 灯光
    private _enableLighting:boolean;
    // 是否开启 顶点颜色
    private _enableVertexColor: boolean = false;



    constructor()
    {
        super();


        this.setShaderName(WallMaterial.shaderName);
        // this.setShaderName("Wall");
        this._albedoIntensity = 1.0;
        this._albedoColor=new Vector4(1.0,1.0,1.0,1.0);
        
		var sv: ShaderData =this._shaderValues;
		sv.setVector(WallMaterial.ALBEDOCOLOR                 ,new Vector4(1.0    ,1.0    ,1.0    ,1.0));
		sv.setNumber(BaseMaterial.ALPHATESTVALUE                    ,0.5);
		sv.setVector(WallMaterial.TILINGOFFSET                ,new Vector4(1.0    ,1.0    ,0.0    ,0.0));
		this._enableLighting=false;
		this.renderMode=3;

    }

    /**
	*禁用雾化。
    */
   disableFog()
   {
        this._disablePublicDefineDatas.add(Scene3D.SHADERDEFINE_FOG);
   }

   /**
 * 克隆。
 * @param	destObject 克隆源。
 */
   cloneTo(destObject: any)
   {
       super.cloneTo(destObject);
       var destMaterial=destObject;
       destMaterial._enableLighting=this._enableLighting;
       destMaterial._albedoIntensity=this._albedoIntensity;
       this._albedoColor.cloneTo(destMaterial._albedoColor);
   }

   
	/**
	*设置渲染模式。
    *@return 渲染模式。
    */
    
    public set renderMode(value)
    {
        var renderState=this.getRenderState();
        
                
		switch (value){
			case 0:
				this.alphaTest=false;
				this.renderQueue= BaseMaterial.RENDERQUEUE_OPAQUE;
				renderState.depthWrite=true;
				renderState.cull=RenderState.CULL_BACK;
				renderState.blend=RenderState.BLEND_DISABLE;
				renderState.depthTest=RenderState.DEPTHTEST_LESS;
				break ;
			case 1:
				this.renderQueue=BaseMaterial.RENDERQUEUE_ALPHATEST;
				this.alphaTest=true;
				renderState.depthWrite=true;
				renderState.cull=RenderState.CULL_BACK;
				renderState.blend=RenderState.BLEND_DISABLE;
				renderState.depthTest=RenderState.DEPTHTEST_LESS;
				break ;
			case 2:
				this.renderQueue=BaseMaterial.RENDERQUEUE_TRANSPARENT;
				this.alphaTest=false;
				renderState.depthWrite=false;
				renderState.cull=RenderState.CULL_BACK;
				renderState.blend=RenderState.BLEND_ENABLE_ALL;
				renderState.srcBlend=RenderState.BLENDPARAM_SRC_ALPHA;
				renderState.dstBlend=RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA;
				renderState.depthTest=RenderState.DEPTHTEST_LESS;
				break ;
			case 3:
                this.renderQueue = BaseMaterial.RENDERQUEUE_OPAQUE - 10;
				this.alphaTest=false;
				renderState.depthWrite=true;
				renderState.cull=RenderState.CULL_BACK;
				renderState.blend=RenderState.BLEND_ENABLE_SEPERATE;
				renderState.srcBlend=RenderState.BLENDPARAM_SRC_ALPHA;
				renderState.dstBlend=RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA;
				renderState.depthTest=RenderState.DEPTHTEST_LESS;
				break ;
			default :
				throw new Error("Material:renderMode value error.");
			}
	}


   






   



   /** 反照率颜色 红 分量  */
   private get _ColorR(): number
   {
        return this._albedoColor.elements[0];
   }

   private set _ColorR(value:  number)
   {
        this._albedoColor.elements[0]=value;
        this.albedoColor=this._albedoColor;
   }
   

   /** 反照率颜色 绿 分量  */
   private get _ColorG(): number
   {
        return this._albedoColor.elements[1];
   }

   private set _ColorG(value:  number)
   {
        this._albedoColor.elements[1]=value;
        this.albedoColor=this._albedoColor;
   }


   /** 反照率颜色 蓝 分量  */
   private get _ColorB(): number
   {
        return this._albedoColor.elements[2];
   }

   private set _ColorB(value:  number)
   {
		this._albedoColor.elements[2]=value;
		this.albedoColor=this._albedoColor;
   }


   /** 反照率颜色 alpha 分量  */
   private get _ColorA(): number
   {
        return this._albedoColor.elements[3];
   }

   private set _ColorA(value:  number)
   {
		this._albedoColor.elements[3]=value;
		this.albedoColor=this._albedoColor;
   }
   

	/**
	*设置反照率颜色。
	*@param value 反照率颜色。
    */
   
   public set albedoColor(value:  Vector4)
   {
       var finalAlbedo: Vector4=this._shaderValues.getVector(WallMaterial.ALBEDOCOLOR) as Vector4;
        Vector4.scale(value,this._albedoIntensity, finalAlbedo);
        this._albedoColor=value;
        this._shaderValues.setVector(WallMaterial.ALBEDOCOLOR,finalAlbedo);
   }
    
	/**
	*获取反照率颜色。
	*@return 反照率颜色。
    */
    
   public get albedoColor(): Vector4
   {
        return this._albedoColor;
   }


	/**
	*设置反照率颜色alpha分量。
	*@param value 反照率颜色alpha分量。
	*/
   public get albedoColorA(): number
   {
        return this._ColorA;
   }
   

	/**
	*获取反照率颜色Z分量。
	*@return 反照率颜色Z分量。
	*/
    public set albedoColorA(value:  number)
   {
       this._ColorA=value;
   }


   



	/**
	*设置反照率贴图。
	*@param value 反照率贴图。
    */
   
   public set albedoTexture(value:  BaseTexture)
   {
       if (value)
            this._defineDatas.add(WallMaterial.SHADERDEFINE_DIFFUSEMAP);
       else
            this._defineDatas.remove(WallMaterial.SHADERDEFINE_DIFFUSEMAP);
        this._shaderValues.setTexture(WallMaterial.ALBEDOTEXTURE,value);
   }
    
	/**
	*获取反照率贴图。
	*@return 反照率贴图。
    */
    
   public get albedoTexture(): BaseTexture
   {
        return this._shaderValues.getTexture(WallMaterial.ALBEDOTEXTURE);
   }


   
	/**
	*设置是否支持顶点色。
	*@param value 是否支持顶点色。
    */
    
   public set enableVertexColor(value:  boolean)
   {
        this._enableVertexColor=value;
        if (value)
            this._defineDatas.add(WallMaterial.SHADERDEFINE_ENABLEVERTEXCOLOR);
        else
            this._defineDatas.remove(WallMaterial.SHADERDEFINE_ENABLEVERTEXCOLOR);
   }

	/**
	*获取是否支持顶点色。
	*@return 是否支持顶点色。
	*/
    public get enableVertexColor(): boolean
    {
        return this._enableVertexColor;
    }







    /** 反照率 强度 */
    private get _AlbedoIntensity(): number
    {
        return this._albedoIntensity;
    }

    private set _AlbedoIntensity(value: number)
    {
        if (this._albedoIntensity!==value)
        {
			var finalAlbedo: Vector4 = <Vector4>this._shaderValues.getVector(WallMaterial.ALBEDOCOLOR);
			Vector4.scale(this._albedoColor, value ,finalAlbedo);
			this._albedoIntensity=value;
			this._shaderValues.setVector(WallMaterial.ALBEDOCOLOR,finalAlbedo);
		}
    }

    
	/**
	*设置反照率强度。
	*@param value 反照率强度。
	*/
    private set albedoIntensity(value: number)
    {
        this._AlbedoIntensity=value;
    }

	/**
	*获取反照率强度。
	*@return 反照率强度。
	*/
    private get albedoIntensity(): number
    {
        return this._albedoIntensity;
    }








    /** Alpha 测试值  */
    private get _Cutoff(): number
    {
        return this.alphaTestValue;
    }

    
    private set _Cutoff(value: number)
    {
        this.alphaTestValue=value;
    }















   /**
    * 贴图UV Offset X
    */
   private get _MainTex_STX(): number
   {
        return this._shaderValues.getVector(WallMaterial.TILINGOFFSET).elements[0];
   }

   private set _MainTex_STX(x: number)
   {
		var tilOff: Vector4= <Vector4>this._shaderValues.getVector(WallMaterial.TILINGOFFSET);
		tilOff.elements[0]=x;
		this.tilingOffset=tilOff;
   }

   

   /**
    * 贴图UV Offset Y
    */
   private get _MainTex_STY(): number
   {
        return this._shaderValues.getVector(WallMaterial.TILINGOFFSET).elements[1];
   }

   private set _MainTex_STY(y: number)
   {
        var tilOff:Vector4 = <Vector4> this._shaderValues.getVector(WallMaterial.TILINGOFFSET);
		tilOff.elements[1]=y;
		this.tilingOffset=tilOff;
   }


   /**
    * 贴图UV 重复次数 U
    */
   private get _MainTex_STZ(): number
   {
        return this._shaderValues.getVector(WallMaterial.TILINGOFFSET).elements[2];
   }

   private set _MainTex_STZ(z: number)
   {
        var tilOff:Vector4 = <Vector4> this._shaderValues.getVector(WallMaterial.TILINGOFFSET);
        tilOff.elements[2]=z;
        this.tilingOffset=tilOff;
   }

   

   /**
    * 贴图UV 重复次数 V
    */
   private get _MainTex_STW(): number
   {
        return this._shaderValues.getVector(WallMaterial.TILINGOFFSET).elements[3];
   }

   private set _MainTex_STW(w: number)
   {
        var tilOff:Vector4 = <Vector4> this._shaderValues.getVector(WallMaterial.TILINGOFFSET);
        tilOff.elements[3]=w;
        this.tilingOffset=tilOff;
   }


   
	/**
	*获取纹理平铺和偏移X分量。
	*@param x 纹理平铺和偏移X分量。
    */
   public set tilingOffsetX(x:number)
   {
        this._MainTex_STX=x;
   }
    
	/**
	*获取纹理平铺和偏移X分量。
	*@return 纹理平铺和偏移X分量。
    */
   public get tilingOffsetX(): number
   {
        return this._MainTex_STX;
   }

   
	/**
	*获取纹理平铺和偏移Y分量。
	*@param y 纹理平铺和偏移Y分量。
    */
   public set tilingOffsetY(y:number)
   {
        this._MainTex_STY=y;
   }

	/**
	*获取纹理平铺和偏移Y分量。
	*@return 纹理平铺和偏移Y分量。
	*/
    public get tilingOffsetY(): number
    {
         return this._MainTex_STY;
    }

    
	/**
	*获取纹理平铺和偏移Z分量。
	*@param z 纹理平铺和偏移Z分量。
    */
   public set tilingOffsetZ(z:number)
   {
        this._MainTex_STZ=z;
   }

    
	/**
	*获取纹理平铺和偏移Z分量。
	*@return 纹理平铺和偏移Z分量。
	*/
    public get tilingOffsetZ(): number
    {
         return this._MainTex_STZ;
    }
    
	/**
	*获取纹理平铺和偏移W分量。
	*@param w 纹理平铺和偏移W分量。
    */
   public set tilingOffsetW(w:number)
   {
        this._MainTex_STW=w;
   }

	/**
	*获取纹理平铺和偏移W分量。
	*@return 纹理平铺和偏移W分量。
	*/
    public get tilingOffsetW(): number
    {
         return this._MainTex_STW;
    }

    
	/**
	*获取纹理平铺和偏移。
	*@param value 纹理平铺和偏移。
    */
   public set tilingOffset(value:Vector4)
   {
       if (value)
       {
            var valueE=value.elements;
            if (valueE[0] !=1 || valueE[1] !=1 || valueE[2] !=0 || valueE[3] !=0)
                this._defineDatas.add(WallMaterial.SHADERDEFINE_TILINGOFFSET);
            else
                this._defineDatas.remove(WallMaterial.SHADERDEFINE_TILINGOFFSET);
        }
        else 
        {
            this._defineDatas.remove(WallMaterial.SHADERDEFINE_TILINGOFFSET);
        }
        this._shaderValues.setVector(WallMaterial.TILINGOFFSET,value);
   }
    
	/**
	*获取纹理平铺和偏移。
	*@return 纹理平铺和偏移。
	*/
    public get tilingOffset(): Vector4
    {
        return this._shaderValues.getVector(WallMaterial.TILINGOFFSET) as Vector4;
    }








   


    






    



    
    private static _defaultMaterial: WallMaterial;
    private static _shaderDefines: ShaderDefines;

    
    static get defaultMaterial(): WallMaterial
    {
        if(!WallMaterial._defaultMaterial)
        {
            WallMaterial._defaultMaterial = new WallMaterial();
        }
        return WallMaterial._defaultMaterial;
    }

    static get shaderDefines(): ShaderDefines
    {
        if(!WallMaterial._shaderDefines)
        {
            WallMaterial._shaderDefines = new ShaderDefines(BaseMaterial.shaderDefines);
        }
        return WallMaterial._shaderDefines;
    }


	static SHADERDEFINE_DIFFUSEMAP;
	static SHADERDEFINE_TILINGOFFSET;
    static SHADERDEFINE_ENABLEVERTEXCOLOR;
    
    
	static SPECULARSOURCE_DIFFUSEMAPALPHA=0;
	static SPECULARSOURCE_SPECULARMAP=0;
	static RENDERMODE_OPAQUE=0;
	static RENDERMODE_CUTOUT=1;
	static RENDERMODE_TRANSPARENT=2;

    
    static ALBEDOTEXTURE: number = Shader3D.propertyNameToID("u_DiffuseTexture");
    static ALBEDOCOLOR: number = Shader3D.propertyNameToID("u_DiffuseColor");
    static TILINGOFFSET: number = Shader3D.propertyNameToID("u_TilingOffset");
    
    static __init__()
    {
        WallMaterial.SHADERDEFINE_ALPHATEST = WallMaterial.shaderDefines.registerDefine("ALPHATEST");
		WallMaterial.SHADERDEFINE_DIFFUSEMAP=WallMaterial.shaderDefines.registerDefine("DIFFUSEMAP");
		WallMaterial.SHADERDEFINE_TILINGOFFSET=WallMaterial.shaderDefines.registerDefine("TILINGOFFSET");
        WallMaterial.SHADERDEFINE_ENABLEVERTEXCOLOR=WallMaterial.shaderDefines.registerDefine("ENABLEVERTEXCOLOR");
    }



}

window["WallMaterial"] = WallMaterial;