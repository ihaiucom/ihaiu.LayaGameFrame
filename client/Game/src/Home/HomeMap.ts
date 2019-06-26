import Sprite = laya.display.Sprite;
import StringUtils from "../Libs/Helpers/StringUtils";
import Log from "../GameFrame/Log/Log";
import GuiSetting from "../FGUI/GuiSetting";
import Res from "../Config/Keys/Res";
export class HomeMapConfig
{
    cellXNum = 4;
    cellYNum = 2;
    cellWidth = 720;
    cellHeight = 1280;
    cellOffsetDirX = 1;
    cellOffsetDirY = -1;
    mapName = "house_map_1_";
}
export default class HomeMap extends Sprite
{
    config: HomeMapConfig = new HomeMapConfig();
    mapWidth: number = 0;
    mapHeight: number = 0;
    mapX: number = 0;
    mapY: number = 0;

    
    mapWidthHalf: number = 0;
    mapHeightHalf: number = 0;

    
    load()
    {
        let cellHNum = 4;
        let cellVNum = 4;
        let cellWidth = 1249;
        let cellHeight = 1154;
        this.width = cellHNum * cellWidth;
        this.height = cellVNum * cellHeight;
        for(let i = 0; i < 16; i ++ )
        {
            let row = Math.floor(i / cellHNum);
            let column = i % cellHNum;
            let index = i + 1;
            let cell = new Sprite();
            cell.x = column * cellWidth;
            cell.y = row * cellHeight;
            this.addChild(cell);
            cell.loadImage(Res.getHomeMap(index));
        }
    }

    install(): HomeMap
    {
        let config = this.config;

        config.cellXNum = 4;
        config.cellYNum = 2;
        config.cellWidth = 1024;
        config.cellHeight = 1892;
        config.mapName = "home_map_4_";



        let count = config.cellXNum * config.cellYNum;
        let cellX = 0;
        let cellY = 0;

        let mapWidth = config.cellXNum * config.cellWidth;
        let mapHeight = config.cellYNum * config.cellHeight;
        this.mapWidth = mapWidth;
        this.mapHeight = mapHeight;
        this.size(mapWidth, mapHeight);

        this.mapWidthHalf = mapWidth >> 1;
        this.mapHeightHalf = mapHeight >> 1;

        let beginX = 0;
        let beginY = config.cellOffsetDirY < 0 ?  mapHeight - config.cellHeight : 0;

        for(let i = 0; i < count; i ++)
        {
            cellX = i % config.cellXNum;
            cellY = Math.floor(i / config.cellXNum);
            // let path = GuiSetting.getMapPath(config.mapName + StringUtils.FillLeft((i + 1).toString(), 2) + ".jpg");
            let path =  Res.getHomeMap(i + 1);
            

            let cell = new Sprite();
            cell.name = "cell_" + cellX + "_" + cellY;
            cell.x = beginX + cellX * config.cellWidth  * config.cellOffsetDirX;
            cell.y = beginY + cellY * config.cellHeight * config.cellOffsetDirY;
            cell.size(config.cellWidth, config.cellHeight);
            cell.loadImage(path);
            // cell.graphics.drawRect(0, 0, cell.width, cell.height, "#00ff0033", "#000000FF", 1);
            let text = new Laya.Text();
            text.text = cell.name;
            text.align = "center";
            text.valign = "middle";
            text.fontSize = 25;
            text.x = (cell.width - text.width) * 0.5;
            text.y = (cell.height - text.height) * 0.5;
            cell.addChild(text);
            this.addChild(cell);
        }

        return this;
    }

    
}