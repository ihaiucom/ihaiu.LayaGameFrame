#ifdef HIGHPRECISION
	precision highp float;
#else
	precision mediump float;
#endif


// uniform vec4 u_DiffuseColor;

// #if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)
// 	varying vec4 v_Color;
// #endif

// #ifdef ALPHATEST
// 	uniform float u_AlphaTestValue;
// #endif

// #ifdef DIFFUSEMAP
// 	uniform sampler2D u_DiffuseTexture;
// #endif



// #if defined(DIFFUSEMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))
// 	varying vec2 v_Texcoord0;
// #endif



	varying vec3 v_Normal; 
	varying vec3 v_ViewDir; 



void main_normal()
{
	// vec4 mainColor=u_DiffuseColor;
	// #ifdef DIFFUSEMAP
	// 	vec4 difTexColor=texture2D(u_DiffuseTexture, v_Texcoord0);
	// 	mainColor=mainColor*difTexColor;
	// #endif 
	
	// #if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)
	// 	mainColor=mainColor*v_Color;
	// #endif 
    
	// #ifdef ALPHATEST
	// 	if(mainColor.a<u_AlphaTestValue)
	// 		discard;
	// #endif
	

	vec3 normal = normalize(v_Normal);
	vec3 viewDir = normalize(v_ViewDir);
	float rim = 1.0 - dot(normal, viewDir);
	
	gl_FragColor = vec4(0, rim, 0, 0.01) ;

	
}

void main()
{
	main_normal();
}

		