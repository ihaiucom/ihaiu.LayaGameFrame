import Signal from "../../Libs/signals/Signal";

    export default interface LoaderPanelInterface
    {
        // 消息--显示完成
        sShowComplete: Signal;
        // 消息--隐藏完成
        sHideComplete: Signal;


        // 设置最大值
        setMax(value: number);
        // 设置加载进度
        setValue(value: number);

        // 设置Tip
        setTip(tip: string);
        setTips(tips: string[]);

        // 显示
        show(): void;
        showOn(root: fairygui.GRoot): void;
        // 隐藏
        hide(): void;

        // 设置内容是否显示
        setContentVisiable(value: boolean);
        getContentVisiable(): boolean;

        // 设置版本号
        setVersion();

    }