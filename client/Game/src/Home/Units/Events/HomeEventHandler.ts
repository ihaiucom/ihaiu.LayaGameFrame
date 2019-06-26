import { EventHandler } from "../../../Libs/ECS/EventHandler";
import HomeWorld from "../Worlds/HomeWorld";

export default abstract class HomeEventHandler extends EventHandler
{
    engine: HomeWorld;
}
