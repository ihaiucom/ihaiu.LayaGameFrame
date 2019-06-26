import CsvConfigRender from "../CsvConfigRender";
import InformationConfig from './InformationConfig';
import Game from '../../Game';
import LabelConfig from '../ConfigExtends/LabelConfig';

export default class InformationConfigReader extends CsvConfigRender<    InformationConfig      >
{
    installConfigs()
    {
        let labelConfigs: LabelConfig[] = Game.config.label.getConfigList();
        
        for(let labelConfig of labelConfigs)
        {
            if(labelConfig.isInformation)
            {
                let config = new InformationConfig();
                config.id = labelConfig.id;
                this.addConfig(config);
            }
        }
    }
    
}