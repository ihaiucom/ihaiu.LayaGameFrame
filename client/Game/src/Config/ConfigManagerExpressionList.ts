import ConfigManagerList from "./ConfigManagerList";
import ActorLevelStarConfigReader from "./ConfigExpressions/ActorLevelStarConfigReader";
import InformationConfigReader from "./ConfigExpressions/InformationConfigReader";

export default class ConfigManagerExpressionList extends ConfigManagerList
{
    actorStarLevel = new ActorLevelStarConfigReader();
    information = new InformationConfigReader();
}