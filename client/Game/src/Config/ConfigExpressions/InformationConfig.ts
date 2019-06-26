import BaseConfig from '../BaseConfig';
import Game from '../../Game';
import LabelConfig from '../ConfigExtends/LabelConfig';
import LabelTypeConfig from '../ConfigExtends/LabelTypeConfig';
export default class InformationConfig extends BaseConfig
{


    get labelConfig(): LabelConfig
    {
        return Game.config.label.getConfig(this.id);
    }

    get labelTypeConfig(): LabelTypeConfig
    {
        return Game.config.labelType.getConfig(this.labelType);
    }

    get labelType():int
    {
        return this.labelConfig.type;
    }

    get name()
    {
        return this.labelConfig.name;
    }

    get iconUrl()
    {
        return this.labelConfig.iconUrl;
    }
}