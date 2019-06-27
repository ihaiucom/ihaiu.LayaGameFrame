/*
texture和fillrect使用的。
*/
attribute vec4 posuv;
attribute vec4 attribColor;
attribute vec4 attribFlags;
//attribute vec4 clipDir;
//attribute vec2 clipRect;
uniform vec4 clipMatDir;
uniform vec2 clipMatPos;		// 这个是全局的，不用再应用矩阵了。
varying vec2 cliped;
uniform vec2 size;

#ifdef WORLDMAT
	uniform mat4 mmat;
#endif
uniform mat4 u_MvpMatrix;

varying vec4 v_texcoordAlpha;
varying vec4 v_color;
varying float v_useTex;

void main() {

	vec4 pos = vec4(posuv.xy,0.,1.);
#ifdef WORLDMAT
	pos=mmat*pos;
#endif
	vec4 pos1  =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,0.,1.0);
#ifdef MVP3D
	gl_Position=u_MvpMatrix*pos1;
#else
	gl_Position=pos1;
#endif
	v_texcoordAlpha.xy = posuv.zw;
	//v_texcoordAlpha.z = attribColor.a/255.0;
	v_color = attribColor/255.0;
	v_color.xyz*=v_color.w;//反正后面也要预乘
	
	v_useTex = attribFlags.r/255.0;
	float clipw = length(clipMatDir.xy);
	float cliph = length(clipMatDir.zw);
	vec2 clippos = pos.xy - clipMatPos.xy;	//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放
	if(clipw>20000. && cliph>20000.)
		cliped = vec2(0.5,0.5);
	else {
		//转成0到1之间。/clipw/clipw 表示clippos与normalize之后的clip朝向点积之后，再除以clipw
		cliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);
	}

}