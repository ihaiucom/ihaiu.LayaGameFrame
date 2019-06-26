/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuBarRightTopStruct from "../../Generates/SystemModuleMenu/MenuBarRightTopStruct";
import HomeWindow from "../../../GameModule/ViewWindows/HomeWindow";
import Game from "../../../Game";
import MenuConfig from "../../../Config/ConfigExtends/MenuConfig";
import { MenuBarType } from "../../../GameFrame/Menu/MenuBarType";
import MenuButtonCtl from "../../Customs/MenuButtonCtrl";
import MenuWindows from "../../../GameModule/MenuWindows";
import MenuRButton from "./MenuRButton";
import MenuBButton from "./MenuBButton";

export default class MenuBarRightTop extends MenuBarRightTopStruct
{
      // 窗口
      moduleWindow: HomeWindow;

      menuButtons: MenuButtonCtl[] = [];

      itemWidth = 94;
      itemHeight = 94;
      itemGapH = 15;
      itemGapV = 20;
      itemHCount = 3;

  
      // 窗口初始化完毕
      onWindowInited(): void
      {
          for (let i = this.numChildren - 1; i >= 0; i--)
          {
              this.removeChildAt(i);
          }
  
          let list = Game.config.menu.getBarMenus(MenuBarType.Right_Top);
          list.sort((a: MenuConfig, b: MenuConfig) => { return a.barIndex - b.barIndex; });
  

          for (let i = 0; i < list.length; i++)
          {
              let config = list[i];
              if (!MenuWindows.get(config.menuId))
              {
                  continue;
              }
              
  
              let button = MenuRButton.createInstance();
              
            

              this.addChild(button);
              let ctl = new MenuButtonCtl(<MenuBButton><any>button);
              ctl.setMenuConfig(config);
              this.menuButtons.push(ctl);
          }
  
          this.layoutButtom();
      }
  
  
      layoutButtom()
      {
          let x = 0;
          let y = 0;
          let xi = 0;
          let yi = 0;
          let ii = 0;

          for (let i = 0; i < this.menuButtons.length; i++)
          {
              let ctl = this.menuButtons[i];
              if (!ctl.button.visible)
                  continue;
               
            xi = ii % this.itemHCount;
            yi = Math.floor(ii / this.itemHCount);
            x = this.width - (ctl.button.width + this.itemGapH) * xi - ctl.button.width;
            y = (this.itemHeight + this.itemGapV) * yi;
            ii ++;

            
            ctl.button.x = x;
            ctl.button.y = y;
          }
      }
  
  
      onRefreshUnlock()
      {
          for (let item of this.menuButtons)
          {
              item.refreshUnlock(true);
          }
          this.layoutButtom();
      }
}