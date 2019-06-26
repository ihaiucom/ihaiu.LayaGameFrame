import Game from "../Game";
import StringUtils from "../Libs/Helpers/StringUtils";
import Random from "../Libs/Helpers/Random";
import GMTestPanel from "../FGUI/Extends/GameGM/GMTestPanel";

export default class GMClientHandler
{
    
    /**
     *  测试
     */
    gmTest()
    {
        Laya.MiniFileMgr.deleteAll();
    }
    
    
    /**
     *  打印内存
     */
    gmPrintMem()
    {
    }



    /**
     * 测试文本--FGUI
     */
    test_Text_Fgui()
    {

        let strList = [
        "COLOR_CLEAR_VALUE	0x0C22	 ",
        "COLOR_WRITEMASK	0x0C23	 ",
        " UNPACK_ALIGNMENT	0x0CF5	 ",
        " PACK_ALIGNMENT	0x0D05	 ",
        "MAX_TEXTURE_SIZE	0x0D33	 ",
        "MAX_VIEWPORT_DIMS	0x0D3A	 ",
        "SUBPIXEL_BITS	0x0D50	 ",
        "RED_BITS	0x0D52	 ",
        "GREEN_BITS	0x0D53	 ",
        "BLUE_BITS	0x0D54	 ",
        "ALPHA_BITS	0x0D55	 ",
        "DEPTH_BITS	0x0D56	 ",
        "STENCIL_BITS	0x0D57	", 
        "POLYGON_OFFSET_UNITS	0x2A00	 ",
        "POLYGON_OFFSET_FACTOR	0x8038	 ",
        "TEXTURE_BINDING_2D	0x8069	 ",
        "SAMPLE_BUFFERS	0x80A8	 ",
        "SAMPLES	0x80A9	 ",
        "SAMPLE_COVERAGE_VALUE	0x80AA",
        "•男子打卡网红桥 没嗨够就骨折",
        "•女子组团在大桥机动车道跳舞",
        "•幼儿园园长：养天鹅不养猪",
        "•女地勤拒与醉汉合影遭追打",
        "•女子莫名成老板 欠税80多万",
        "•坠崖孕妇：婆婆求情我拒绝了",
        "•男子上山抓一只老鼠获刑3年",
        "•男子开玩笑把邻居笑死 赔了6万",
        "•火了！他单腿站2小时做手术",
        "•男童患罕见病 每月花费十万"
    ];

        let root = new fairygui.GRoot();
        root.width = Laya.stage.width;
        root.height = Laya.stage.height;
        for(let i = 0; i < 500; i ++)
        {
            let label = new fairygui.GTextField();
            setTimeout(() => {
                
                label.text = StringUtils.FillLeft(i.toString(), 3) + strList[Random.range(0, strList.length)];
                label.fontSize = Random.range(10, 60);
                label.color = "#" + Random.range(55, 99) + "" + Random.range(55, 99) + "" + Random.range(55, 99)+ "FF";
                label.x = Random.range(0, Laya.stage.width - 200);
                label.y = Random.range(0, Laya.stage.height);
                root.addChild(label);
            }, 100);
        }
        fairygui.GRoot.inst.addChild(root);
    }

    
    /**
     * 测试文本--Laya
     */
    test_Text_Laya()
    {

        let strList = [
            "COLOR_CLEAR_VALUE	0x0C22	 ",
            "COLOR_WRITEMASK	0x0C23	 ",
            " UNPACK_ALIGNMENT	0x0CF5	 ",
            "•刘诗诗素颜照遭商家调侃侵权",
            "•31岁梁洛施分享庆生照",
            "•迪丽热巴全黑Look美腿吸睛",
        ];

            while(Laya.stage.numChildren > 0)
            {
                Laya.stage.removeChildAt(0);
            }

    
            let panel = GMTestPanel.createInstance();
            let content = panel.m_content;
            for(let i = 0; i < 100; i ++)
            {
                let label = new Laya.Text();
                label.text = StringUtils.FillLeft(i.toString(), 3) + strList[Random.range(0, strList.length)];
                label.fontSize = 30;
                label.color = "#FF"  + "" + Random.range(55, 99) + "" + Random.range(55, 99)+ "FF";
                label.x = 50;
                label.y = i * 50;
                content.displayObject.addChild(label);
            }

            content.height = 200 * 50;
            Laya.stage.addChild(panel.displayObject);
    }

}