## Define(宏)： 有3种

| EN                    |  中文  |
| --------              | :----:  |
| publicDefinesMap      | Shader3D 里定义, 在ShaderInit3D.__init__里定义 |
| spriteDefines         | Sprite3D 里定义 |
| materialDefines       | Material 里定义 |


## Shader3D Define(宏)

| EN                    |  中文  |
| --------              | :----:  |
| HIGHPRECISION         | 高精度 |
| FOG                   | 雾 |
| DIRECTIONLIGHT        | 平行光 |
| POINTLIGHT            | 点光源  |
| SPOTLIGHT             | 聚光灯  |
| CASTSHADOW            | 投射阴影  |
| SHADOWMAP_PSSM1        | 阴影图1  |
| SHADOWMAP_PSSM2        | 阴影图2  |
| SHADOWMAP_PSSM3        | 阴影图3  |
| SHADOWMAP_PCF_NO       | 阴影图 PCF 开关  |
| SHADOWMAP_PCF1        | 阴影图 PCF 1  |
| SHADOWMAP_PCF2        | 阴影图 PCF 2  |
| SHADOWMAP_PCF3        | 阴影图 PCF 3  |
| REFLECTMAP            | 反射图  |


## Shader类的关系

```graphLR
    A(ShaderPass) -->|继承| B(ShaderCompile)
```

```graphLR
    A(SubShader) -->|引用| B(ShaderPass)
```

```graphLR
    A(Shader3D) -->|引用| B(SubShader)
```

```graphLR
    A(InlcudeFile)
```




## SubShader

* Defines  宏
* Flag     标记
* ShaderPass 