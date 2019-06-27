/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import GMMain from "../../Extends/GameGM/GMMain";
import GMMenuBar from "../../Extends/GameGM/GMMenuBar";
import GMPopupMenu_item from "../../Extends/GameGM/GMPopupMenu_item";
import GMPopupMenu from "../../Extends/GameGM/GMPopupMenu";
import GMPopupButton from "../../Extends/GameGM/GMPopupButton";
import GMSubMenuBar from "../../Extends/GameGM/GMSubMenuBar";
import GMDebugPage from "../../Extends/GameGM/GMDebugPage";
import GMAddPage from "../../Extends/GameGM/GMAddPage";
import TextInput from "../../Extends/GameGM/TextInput";
import GMAddItem from "../../Extends/GameGM/GMAddItem";
import NumberInput from "../../Extends/GameGM/NumberInput";
import GMSelectServerPage from "../../Extends/GameGM/GMSelectServerPage";
import GMCmdPage from "../../Extends/GameGM/GMCmdPage";
import GMSubMenuRadioBar from "../../Extends/GameGM/GMSubMenuRadioBar";
import TextArea from "../../Extends/GameGM/TextArea";
import GMCmdItem from "../../Extends/GameGM/GMCmdItem";
import GMLogItem from "../../Extends/GameGM/GMLogItem";
import Tree from "../../Extends/GameGM/Tree";
import TreeItem from "../../Extends/GameGM/TreeItem";
import TreeItemCheckbox from "../../Extends/GameGM/TreeItemCheckbox";
import GMDisplayTreePage from "../../Extends/GameGM/GMDisplayTreePage";
import TreeItemOpenCheckbox from "../../Extends/GameGM/TreeItemOpenCheckbox";
import TreeList from "../../Extends/GameGM/TreeList";
import GMTimeLoopPage from "../../Extends/GameGM/GMTimeLoopPage";
import GMTimeLoopItem from "../../Extends/GameGM/GMTimeLoopItem";
import GMTickPage from "../../Extends/GameGM/GMTickPage";
import GMTestPanel from "../../Extends/GameGM/GMTestPanel";
import GMTestPanelContent from "../../Extends/GameGM/GMTestPanelContent";

export default class GameGMBinder
{
	public static bindAll():void 
	{
		let bind = fairygui.UIObjectFactory.setPackageItemExtension;
		bind(GMMain.URL, GMMain);
		bind(GMMenuBar.URL, GMMenuBar);
		bind(GMPopupMenu_item.URL, GMPopupMenu_item);
		bind(GMPopupMenu.URL, GMPopupMenu);
		bind(GMPopupButton.URL, GMPopupButton);
		bind(GMSubMenuBar.URL, GMSubMenuBar);
		bind(GMDebugPage.URL, GMDebugPage);
		bind(GMAddPage.URL, GMAddPage);
		bind(TextInput.URL, TextInput);
		bind(GMAddItem.URL, GMAddItem);
		bind(NumberInput.URL, NumberInput);
		bind(GMSelectServerPage.URL, GMSelectServerPage);
		bind(GMCmdPage.URL, GMCmdPage);
		bind(GMSubMenuRadioBar.URL, GMSubMenuRadioBar);
		bind(TextArea.URL, TextArea);
		bind(GMCmdItem.URL, GMCmdItem);
		bind(GMLogItem.URL, GMLogItem);
		bind(Tree.URL, Tree);
		bind(TreeItem.URL, TreeItem);
		bind(TreeItemCheckbox.URL, TreeItemCheckbox);
		bind(GMDisplayTreePage.URL, GMDisplayTreePage);
		bind(TreeItemOpenCheckbox.URL, TreeItemOpenCheckbox);
		bind(TreeList.URL, TreeList);
		bind(GMTimeLoopPage.URL, GMTimeLoopPage);
		bind(GMTimeLoopItem.URL, GMTimeLoopItem);
		bind(GMTickPage.URL, GMTickPage);
		bind(GMTestPanel.URL, GMTestPanel);
		bind(GMTestPanelContent.URL, GMTestPanelContent);
	}
}