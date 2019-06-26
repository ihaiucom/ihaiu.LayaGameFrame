import { Component } from "../../../Libs/ECS/Component";
import Assembly from "../../../Libs/Assembly";

/**
 * 骨骼
 */
export default class SkeletonData extends Component
{
    skeletonPathF: string;
    texturePathF: string;
    
    skeletonPathB: string;
    texturePathB: string;
}