import LoginSender from "./Senders/LoginSender";
import MailSender from "./Senders/MailSender";
import GMSender from './Senders/GMSender';
import ItemSender from './Senders/ItemSender';
import ActorSender from './Senders/ActorSender';
import BuildingSender from "./Senders/BuildingSender";
import InformationSender from "./Senders/InformationSender";
import StudioSender from "./Senders/StudioSender";
import StorySender from "./Senders/StorySender";
import GashaponSender from "./Senders/GashaponSender";
import StoryLotterySender from "./Senders/StoryLotterySender";

//====================
// 消息发送器列表
//--------------------
export default class ProtoSenderList
{
    login = new LoginSender();
    mail = new MailSender();
    gm = new GMSender();
    item = new ItemSender();
    actor = new ActorSender();
    building = new BuildingSender();
    infoSender = new InformationSender();
    studio = new StudioSender();
    story  = new StorySender();
    gashapon = new GashaponSender();
    storyLotterySender = new StoryLotterySender();
}