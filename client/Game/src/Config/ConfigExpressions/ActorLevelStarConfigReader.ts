// import CsvConfigRender from '../CsvConfigRender';
// import ActorLevelStarConfig from './ActorLevelStarConfig';
// import BaseConfigRender from '../BaseConfigRender';
// import ConfigExpression from '../ConfigExpression';
// import ConfigIdHelper from '../ConfigIdHelper';
// import Game from '../../Game';
// export default class ActorLevelStarConfigReader extends CsvConfigRender<    ActorLevelStarConfig      >
// {
//     getLevelStarConfig(actorId: int, level:int, star:int)
//     {
//         let starLevelId = ConfigIdHelper.getActorLevelStarId(actorId, level, star);
//         let config = super.getConfig(starLevelId);
//         if(config)
//         {
//             return config;
//         }

//         config = Game.configExp.getActorLevelConfig(actorId, level, star);
//         this.addConfig(config);
//         return config;
//     }
// }