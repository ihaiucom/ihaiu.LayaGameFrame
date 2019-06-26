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



export default class BlinnPhongMaterial extends BaseMaterial
{
    /** Shader名称 */
    public static shaderName = "BlinnPhongShader";
    /**
     * 加载Shader
     */
    public static async install()
    {

        BlinnPhongMaterial.__init__();

        let attributeMap=
        {
			'a_Position':VertexMesh.MESH_POSITION0,
			'a_Color':VertexMesh.MESH_COLOR0,
			'a_Normal':VertexMesh.MESH_NORMAL0,
			'a_Texcoord0':VertexMesh.MESH_TEXTURECOORDINATE0,
			'a_Texcoord1':VertexMesh.MESH_TEXTURECOORDINATE1,
			'a_BoneWeights':VertexMesh.MESH_BLENDWEIGHT0,
			'a_BoneIndices':VertexMesh.MESH_BLENDINDICES0,
            'a_Tangent0':VertexMesh.MESH_TANGENT0
        };

        let uniformMap=
        {
			'u_Bones':Shader3D.PERIOD_CUSTOM,
			'u_DiffuseTexture':Shader3D.PERIOD_MATERIAL,
			'u_SpecularTexture':Shader3D.PERIOD_MATERIAL,
			'u_NormalTexture':Shader3D.PERIOD_MATERIAL,
			'u_AlphaTestValue':Shader3D.PERIOD_MATERIAL,
			'u_DiffuseColor':Shader3D.PERIOD_MATERIAL,
			'u_MaterialSpecular':Shader3D.PERIOD_MATERIAL,
			'u_Shininess':Shader3D.PERIOD_MATERIAL,
			'u_TilingOffset':Shader3D.PERIOD_MATERIAL,
			'u_WorldMat':Shader3D.PERIOD_SPRITE,
			'u_MvpMatrix':Shader3D.PERIOD_SPRITE,
			'u_LightmapScaleOffset':Shader3D.PERIOD_SPRITE,
			'u_LightMap':Shader3D.PERIOD_SPRITE,
			'u_CameraPos':Shader3D.PERIOD_CAMERA,
			'u_ReflectTexture':Shader3D.PERIOD_SCENE,
			'u_ReflectIntensity':Shader3D.PERIOD_SCENE,
			'u_FogStart':Shader3D.PERIOD_SCENE,
			'u_FogRange':Shader3D.PERIOD_SCENE,
			'u_FogColor':Shader3D.PERIOD_SCENE,
			'u_DirectionLight.Color':Shader3D.PERIOD_SCENE,
			'u_DirectionLight.Direction':Shader3D.PERIOD_SCENE,
			'u_PointLight.Position':Shader3D.PERIOD_SCENE,
			'u_PointLight.Range':Shader3D.PERIOD_SCENE,
			'u_PointLight.Color':Shader3D.PERIOD_SCENE,
			'u_SpotLight.Position':Shader3D.PERIOD_SCENE,
			'u_SpotLight.Direction':Shader3D.PERIOD_SCENE,
			'u_SpotLight.Range':Shader3D.PERIOD_SCENE,
			'u_SpotLight.Spot':Shader3D.PERIOD_SCENE,
			'u_SpotLight.Color':Shader3D.PERIOD_SCENE,
			'u_AmbientColor':Shader3D.PERIOD_SCENE,
			'u_shadowMap1':Shader3D.PERIOD_SCENE,
			'u_shadowMap2':Shader3D.PERIOD_SCENE,
			'u_shadowMap3':Shader3D.PERIOD_SCENE,
			'u_shadowPSSMDistance':Shader3D.PERIOD_SCENE,
			'u_lightShadowVP':Shader3D.PERIOD_SCENE,
            'u_shadowPCFoffset':Shader3D.PERIOD_SCENE
        };

        let vs: string = await Game.asset.loadShaderVSAsync(BlinnPhongMaterial.shaderName);
        let ps: string = await Game.asset.loadShaderPSAsync(BlinnPhongMaterial.shaderName);
       


        let shader:Laya.Shader3D = Laya.Shader3D.add(BlinnPhongMaterial.shaderName);
        let subShader: Laya.SubShader = new Laya.SubShader(attributeMap, uniformMap, SkinnedMeshSprite3D.shaderDefines,BlinnPhongMaterial.shaderDefines);
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


        this.setShaderName(BlinnPhongMaterial.shaderName);
        // this.setShaderName("BLINNPHONG");
        this._albedoIntensity = 1.0;
        this._albedoColor=new Vector4(1.0,1.0,1.0,1.0);
        
		var sv: ShaderData =this._shaderValues;
		sv.setVector(BlinnPhongMaterial.ALBEDOCOLOR                 ,new Vector4(1.0    ,1.0    ,1.0    ,1.0));
		sv.setVector(BlinnPhongMaterial.MATERIALSPECULAR            ,new Vector4(1.0    ,1.0    ,1.0    ,1.0));
		sv.setNumber(BlinnPhongMaterial.SHININESS                   ,0.078125);
		sv.setNumber(BaseMaterial.ALPHATESTVALUE                    ,0.5);
		sv.setVector(BlinnPhongMaterial.TILINGOFFSET                ,new Vector4(1.0    ,1.0    ,0.0    ,0.0));
		this._enableLighting=true;
		this.renderMode=2;

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
			default :
				throw new Error("Material:renderMode value error.");
			}
	}


   
   /** 高光 红 分量 */
   private get _SpecColorR(): number
   {
       return this._shaderValues.getVector(BlinnPhongMaterial.MATERIALSPECULAR).elements[0];
   }

   private set _SpecColorR(value:  number)
   {
        this._shaderValues.getVector(BlinnPhongMaterial.MATERIALSPECULAR).elements[0]=value;
   }


   /** 高光 绿 分量 */
   private get _SpecColorG(): number
   {
       return this._shaderValues.getVector(BlinnPhongMaterial.MATERIALSPECULAR).elements[1];
   }

   private set _SpecColorG(value:  number)
   {
        this._shaderValues.getVector(BlinnPhongMaterial.MATERIALSPECULAR).elements[1]=value;
   }


   /** 高光 蓝 分量 */
   private get _SpecColorB(): number
   {
       return this._shaderValues.getVector(BlinnPhongMaterial.MATERIALSPECULAR).elements[2];
   }

   private set _SpecColorB(value:  number)
   {
        this._shaderValues.getVector(BlinnPhongMaterial.MATERIALSPECULAR).elements[2]=value;
   }

   /** 高光 Alpha 分量 */
   private get _SpecColorA(): number
   {
       return this._shaderValues.getVector(BlinnPhongMaterial.MATERIALSPECULAR).elements[3];
   }

   private set _SpecColorA(value:  number)
   {
        this._shaderValues.getVector(BlinnPhongMaterial.MATERIALSPECULAR).elements[3]=value;
   }




   
	/**
	*设置高光颜色。
	*@param value 高光颜色。
    */
   
   private set specularColor(value: Vector4)
   {
       this._shaderValues.setVector(BlinnPhongMaterial.MATERIALSPECULAR,value);
   }


	/**
	*获取高光颜色。
	*@return 高光颜色。
    */
   private get specularColor(): Vector4
   {
        return this._shaderValues.getVector(BlinnPhongMaterial.MATERIALSPECULAR) as Vector4;
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
       var finalAlbedo: Vector4=this._shaderValues.getVector(BlinnPhongMaterial.ALBEDOCOLOR) as Vector4;
        Vector4.scale(value,this._albedoIntensity, finalAlbedo);
        this._albedoColor=value;
        this._shaderValues.setVector(BlinnPhongMaterial.ALBEDOCOLOR,finalAlbedo);
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
            this._defineDatas.add(BlinnPhongMaterial.SHADERDEFINE_DIFFUSEMAP);
       else
            this._defineDatas.remove(BlinnPhongMaterial.SHADERDEFINE_DIFFUSEMAP);
        this._shaderValues.setTexture(BlinnPhongMaterial.ALBEDOTEXTURE,value);
   }
    
	/**
	*获取反照率贴图。
	*@return 反照率贴图。
    */
    
   public get albedoTexture(): BaseTexture
   {
        return this._shaderValues.getTexture(BlinnPhongMaterial.ALBEDOTEXTURE);
   }


   
	/**
	*设置是否支持顶点色。
	*@param value 是否支持顶点色。
    */
    
   public set enableVertexColor(value:  boolean)
   {
        this._enableVertexColor=value;
        if (value)
            this._defineDatas.add(BlinnPhongMaterial.SHADERDEFINE_ENABLEVERTEXCOLOR);
        else
            this._defineDatas.remove(BlinnPhongMaterial.SHADERDEFINE_ENABLEVERTEXCOLOR);
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
			var finalAlbedo: Vector4 = <Vector4>this._shaderValues.getVector(BlinnPhongMaterial.ALBEDOCOLOR);
			Vector4.scale(this._albedoColor, value ,finalAlbedo);
			this._albedoIntensity=value;
			this._shaderValues.setVector(BlinnPhongMaterial.ALBEDOCOLOR,finalAlbedo);
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







    /** 光泽度 */
    private get _Shininess(): number
    {
        return this._shaderValues.getNumber(BlinnPhongMaterial.SHININESS);
    }

    private set _Shininess(value: number)
    {
        value=Math.max(0.0, Math.min(1.0 ,value));
		this._shaderValues.setNumber(BlinnPhongMaterial.SHININESS,value);
    }
    
	/**
	*设置高光强度,范围为0到1。
	*@param value 高光强度。
	*/
    private set shininess(value: number)
    {
        this._Shininess=value;
    }

	/**
	*获取高光强度,范围为0到1。
	*@return 高光强度。
	*/
    private get shininess(): number
    {
        return this._Shininess;
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
        return this._shaderValues.getVector(BlinnPhongMaterial.TILINGOFFSET).elements[0];
   }

   private set _MainTex_STX(x: number)
   {
		var tilOff: Vector4= <Vector4>this._shaderValues.getVector(BlinnPhongMaterial.TILINGOFFSET);
		tilOff.elements[0]=x;
		this.tilingOffset=tilOff;
   }

   

   /**
    * 贴图UV Offset Y
    */
   private get _MainTex_STY(): number
   {
        return this._shaderValues.getVector(BlinnPhongMaterial.TILINGOFFSET).elements[1];
   }

   private set _MainTex_STY(y: number)
   {
        var tilOff:Vector4 = <Vector4> this._shaderValues.getVector(BlinnPhongMaterial.TILINGOFFSET);
		tilOff.elements[1]=y;
		this.tilingOffset=tilOff;
   }


   /**
    * 贴图UV 重复次数 U
    */
   private get _MainTex_STZ(): number
   {
        return this._shaderValues.getVector(BlinnPhongMaterial.TILINGOFFSET).elements[2];
   }

   private set _MainTex_STZ(z: number)
   {
        var tilOff:Vector4 = <Vector4> this._shaderValues.getVector(BlinnPhongMaterial.TILINGOFFSET);
        tilOff.elements[2]=z;
        this.tilingOffset=tilOff;
   }

   

   /**
    * 贴图UV 重复次数 V
    */
   private get _MainTex_STW(): number
   {
        return this._shaderValues.getVector(BlinnPhongMaterial.TILINGOFFSET).elements[3];
   }

   private set _MainTex_STW(w: number)
   {
        var tilOff:Vector4 = <Vector4> this._shaderValues.getVector(BlinnPhongMaterial.TILINGOFFSET);
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
                this._defineDatas.add(BlinnPhongMaterial.SHADERDEFINE_TILINGOFFSET);
            else
                this._defineDatas.remove(BlinnPhongMaterial.SHADERDEFINE_TILINGOFFSET);
        }
        else 
        {
            this._defineDatas.remove(BlinnPhongMaterial.SHADERDEFINE_TILINGOFFSET);
        }
        this._shaderValues.setVector(BlinnPhongMaterial.TILINGOFFSET,value);
   }
    
	/**
	*获取纹理平铺和偏移。
	*@return 纹理平铺和偏移。
	*/
    public get tilingOffset(): Vector4
    {
        return this._shaderValues.getVector(BlinnPhongMaterial.TILINGOFFSET) as Vector4;
    }








   


    






    
    /**
	*获取法线贴图。
	*@return 法线贴图。
	*/
    public get normalTexture(): Laya.BaseTexture 
    {
        return this._shaderValues.getTexture(BlinnPhongMaterial.NORMALTEXTURE);
    }
    
	/**
	*设置法线贴图。
	*@param value 法线贴图。
	*/
    public set normalTexture(value: Laya.BaseTexture) 
    {
        if (value)
			this._defineDatas.add(BlinnPhongMaterial.SHADERDEFINE_NORMALMAP);
		else
            this._defineDatas.remove(BlinnPhongMaterial.SHADERDEFINE_NORMALMAP);
        
		this._shaderValues.setTexture(BlinnPhongMaterial.NORMALTEXTURE,value);
    }
    


    

    /**
	*获取高光贴图。
	*@return 高光贴图。
	*/
    public get specularTexture(): Laya.BaseTexture 
    {
        return this._shaderValues.getTexture(BlinnPhongMaterial.SPECULARTEXTURE);
    }
    
	
	/**
	*设置高光贴图，高光强度则从该贴图RGB值中获取,如果该值为空则从漫反射贴图的Alpha通道获取。
	*@param value 高光贴图。
	*/
    public set specularTexture(value: Laya.BaseTexture) 
    {
        if (value)
			this._defineDatas.add(BlinnPhongMaterial.SHADERDEFINE_SPECULARMAP);
		else
		this._defineDatas.remove(BlinnPhongMaterial.SHADERDEFINE_SPECULARMAP);
		this._shaderValues.setTexture(BlinnPhongMaterial.SPECULARTEXTURE,value);
    }


    
    private static _defaultMaterial: BlinnPhongMaterial;
    private static _shaderDefines: ShaderDefines;

    
    static get defaultMaterial(): BlinnPhongMaterial
    {
        if(!BlinnPhongMaterial._defaultMaterial)
        {
            BlinnPhongMaterial._defaultMaterial = new BlinnPhongMaterial();
        }
        return BlinnPhongMaterial._defaultMaterial;
    }

    static get shaderDefines(): ShaderDefines
    {
        if(!BlinnPhongMaterial._shaderDefines)
        {
            BlinnPhongMaterial._shaderDefines = new ShaderDefines(BaseMaterial.shaderDefines);
        }
        return BlinnPhongMaterial._shaderDefines;
    }


	static SHADERDEFINE_DIFFUSEMAP;
	static SHADERDEFINE_NORMALMAP;
	static SHADERDEFINE_SPECULARMAP;
	static SHADERDEFINE_TILINGOFFSET;
    static SHADERDEFINE_ENABLEVERTEXCOLOR;
    
	// static SHADERDEFINE_DIFFUSEMAP = BlinnPhongMaterial.shaderDefines.registerDefine("DIFFUSEMAP");
	// static SHADERDEFINE_NORMALMAP=BlinnPhongMaterial.shaderDefines.registerDefine("NORMALMAP");
	// static SHADERDEFINE_SPECULARMAP=BlinnPhongMaterial.shaderDefines.registerDefine("SPECULARMAP");
	// static SHADERDEFINE_TILINGOFFSET=BlinnPhongMaterial.shaderDefines.registerDefine("TILINGOFFSET");
    // static SHADERDEFINE_ENABLEVERTEXCOLOR=BlinnPhongMaterial.shaderDefines.registerDefine("ENABLEVERTEXCOLOR");
    
	static SPECULARSOURCE_DIFFUSEMAPALPHA=0;
	static SPECULARSOURCE_SPECULARMAP=0;
	static RENDERMODE_OPAQUE=0;
	static RENDERMODE_CUTOUT=1;
	static RENDERMODE_TRANSPARENT=2;

    
    static ALBEDOTEXTURE: number = Shader3D.propertyNameToID("u_DiffuseTexture");
    static NORMALTEXTURE: number = Shader3D.propertyNameToID("u_NormalTexture");
    static SPECULARTEXTURE: number = Shader3D.propertyNameToID("u_SpecularTexture");
    static ALBEDOCOLOR: number = Shader3D.propertyNameToID("u_DiffuseColor");
    static MATERIALSPECULAR: number = Shader3D.propertyNameToID("u_MaterialSpecular");
    static SHININESS: number = Shader3D.propertyNameToID("u_Shininess");
    static TILINGOFFSET: number = Shader3D.propertyNameToID("u_TilingOffset");
    
    static __init__()
    {
        BlinnPhongMaterial.SHADERDEFINE_ALPHATEST = BlinnPhongMaterial.shaderDefines.registerDefine("ALPHATEST");
		BlinnPhongMaterial.SHADERDEFINE_DIFFUSEMAP=BlinnPhongMaterial.shaderDefines.registerDefine("DIFFUSEMAP");
		BlinnPhongMaterial.SHADERDEFINE_NORMALMAP=BlinnPhongMaterial.shaderDefines.registerDefine("NORMALMAP");
		BlinnPhongMaterial.SHADERDEFINE_SPECULARMAP=BlinnPhongMaterial.shaderDefines.registerDefine("SPECULARMAP");
		BlinnPhongMaterial.SHADERDEFINE_TILINGOFFSET=BlinnPhongMaterial.shaderDefines.registerDefine("TILINGOFFSET");
        BlinnPhongMaterial.SHADERDEFINE_ENABLEVERTEXCOLOR=BlinnPhongMaterial.shaderDefines.registerDefine("ENABLEVERTEXCOLOR");
        
        // BlinnPhongMaterial.ALBEDOTEXTURE=Shader3D.propertyNameToID("u_DiffuseTexture");
        // BlinnPhongMaterial.NORMALTEXTURE=Shader3D.propertyNameToID("u_NormalTexture");
        // BlinnPhongMaterial.SPECULARTEXTURE=Shader3D.propertyNameToID("u_SpecularTexture");
        // BlinnPhongMaterial.ALBEDOCOLOR=Shader3D.propertyNameToID("u_DiffuseColor");
        // BlinnPhongMaterial.MATERIALSPECULAR=Shader3D.propertyNameToID("u_MaterialSpecular");
        // BlinnPhongMaterial.SHININESS=Shader3D.propertyNameToID("u_Shininess");
        // BlinnPhongMaterial.TILINGOFFSET = Shader3D.propertyNameToID("u_TilingOffset");
    }



}

window["BlinnPhongMaterial"] = BlinnPhongMaterial;