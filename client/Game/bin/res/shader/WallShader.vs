#include "Lighting.glsl";

attribute vec4 a_Position;
uniform mat4 u_MvpMatrix;

#if defined(DIFFUSEMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))||(defined(LIGHTMAP)&&defined(UV))
	attribute vec2 a_Texcoord0;
	varying vec2 v_Texcoord0;
#endif


#ifdef COLOR
	attribute vec4 a_Color;
	varying vec4 v_Color;
#endif

#ifdef BONE
	const int c_MaxBoneCount = 24;
	attribute vec4 a_BoneIndices;
	attribute vec4 a_BoneWeights;
	uniform mat4 u_Bones[c_MaxBoneCount];
#endif


#ifdef TILINGOFFSET
	uniform vec4 u_TilingOffset;
#endif



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


	#if defined(DIFFUSEMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))
		v_Texcoord0=a_Texcoord0;
		#ifdef TILINGOFFSET
			v_Texcoord0=TransformUV(v_Texcoord0,u_TilingOffset);
		#endif
	#endif


	#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)
		v_Color=a_Color;
	#endif

}

void main()
{
	main_normal();
}
		

