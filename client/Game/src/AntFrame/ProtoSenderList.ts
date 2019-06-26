import LoginSender from "./Senders/LoginSender";
import MailSender from "./Senders/MailSender";
import GMSender from './Senders/GMSender';
import ItemSender from './Senders/ItemSender';
import GashaponSender from "./Senders/GashaponSender";

//====================
// 消息发送器列表
//--------------------
export default class ProtoSenderList
{
    login = new LoginSender();
    mail = new MailSender();
    gm = new GMSender();
    item = new ItemSender();
    gashapon = new GashaponSender();
}