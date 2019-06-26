export interface IMapUI
{
    /** 是否保持绝对缩放 */
    isAbsoluteScale: boolean;
    /** 原始缩放 */
    sourceScale: number;
    /** 最大绝对缩放 */
    maxAbsoluteScale: number;
    /** 最小绝对缩放 */
    minAbsoluteScale: number;
    /** 相对缩放 */
    relativeScale: number;
    /** 是否可见 */
    visible: boolean;


}