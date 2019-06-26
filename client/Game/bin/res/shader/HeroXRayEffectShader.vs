#include "Lighting.glsl";

attribute vec4 a_Position;
uniform mat4 u_MvpMatrix;

// #if defined(DIFFUSEMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))||(defined(LIGHTMAP)&&defined(UV))
// 	attribute vec2 a_Texcoord0;
// 	varying vec2 v_Texcoord0;
// #endif


// #ifdef COLOR
// 	attribute vec4 a_Color;
// 	varying vec4 v_Color;
// #endif

#ifdef BONE
	const int c_MaxBoneCount = 24;
	attribute vec4 a_BoneIndices;
	attribute vec4 a_BoneWeights;
	uniform mat4 u_Bones[c_MaxBoneCount];
#endif


// #ifdef TILINGOFFSET
// 	uniform vec4 u_TilingOffset;
// #endif

	attribute vec3 a_Normal;
	varying vec3 v_Normal; 
	uniform mat4 u_WorldMat;

	
	uniform vec3 u_CameraPos;
	varying vec3 v_ViewDir; 

mat3 inverse(mat3 m) {
  float a00 = m[0][0], a01 = m[0][1], a02 = m[0][2];
  float a10 = m[1][0], a11 = m[1][1], a12 = m[1][2];
  float a20 = m[2][0], a21 = m[2][1], a22 = m[2][2];

  float b01 = a22 * a11 - a12 * a21;
  float b11 = -a22 * a10 + a12 * a20;
  float b21 = a21 * a10 - a11 * a20;

  float det = a00 * b01 + a01 * b11 + a02 * b21;

  return mat3(b01, (-a22 * a01 + a02 * a21), (a12 * a01 - a02 * a11),
              b11, (a22 * a00 - a02 * a20), (-a12 * a00 + a02 * a10),
              b21, (-a21 * a00 + a01 * a20), (a11 * a00 - a01 * a10)) / det;
}


void main_normal()
{
	#ifdef BONE
		mat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;
		skinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;
		skinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;
		skinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;
		vec4 position=skinTransform*a_Position;
		gl_Position = u_MvpMatrix * position;
	#else
		gl_Position = u_MvpMatrix * a_Position;
	#endif


	// v_Normal
	mat3 worldInvMat;
	#ifdef BONE
		worldInvMat=inverse(mat3(u_WorldMat*skinTransform));
	#else
		worldInvMat=inverse(mat3(u_WorldMat));
	#endif  
	v_Normal=a_Normal*worldInvMat;

	// v_viewDir
	vec3 positionWorld;
	#ifdef BONE
		positionWorld=(u_WorldMat*position).xyz;
	#else
		positionWorld=(u_WorldMat*a_Position).xyz;
	#endif
	v_ViewDir=u_CameraPos-positionWorld;


	// #if defined(DIFFUSEMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))
	// 	v_Texcoord0=a_Texcoord0;
	// 	#ifdef TILINGOFFSET
	// 		v_Texcoord0=TransformUV(v_Texcoord0,u_TilingOffset);
	// 	#endif
	// #endif


	// #if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)
	// 	v_Color=a_Color;
	// #endif

}

void main()
{
	main_normal();
}
		

