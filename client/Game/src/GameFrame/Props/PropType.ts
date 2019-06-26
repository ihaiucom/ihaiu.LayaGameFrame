export enum PropType
{
     /** 基础属性 */
     Base,

     /** 附加具体值, 相对基础值 */
     Basesadd,

     /** 附加百分比, 相对基础值 */
     Baseper,

     /** 附加百分比，相对上限值，比如血量 */
     Maxper,

     /** 附加具体值 */
     Add,

     /** 附加百分比 */
     Per,

     /** 终于属性 */
     Final,
}