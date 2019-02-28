// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.Mail
{
    [RequestMsg(URL = "Mail/MailGetReward")]
    public class MailGetRewardRequest
    {
        public string uuid = default(string); 
    } 

    public class MailGetRewardResponse 
    {
        public string uuid = default(string);
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    [RequestMsg(URL = "Mail/MailGetRewardMany")]
    public class MailGetRewardManyRequest
    {
        public List<string> uuid = default(List<string>); 
    } 

    public class MailGetRewardManyResponse 
    {
        public List<string> uuid = default(List<string>);
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    [RequestMsg(URL = "Mail/MailDeleteMany")]
    public class MailDeleteManyRequest
    {
        public List<string> uuid = default(List<string>); 
    } 

    public class MailDeleteManyResponse 
    {
        public List<string> uuid = default(List<string>);
    } 

    [RequestMsg(URL = "Mail/MailDelete")]
    public class MailDeleteRequest
    {
        public string uuid = default(string); 
    } 

    public class MailDeleteResponse 
    {
        public string uuid = default(string);
    } 

    [RequestMsg(URL = "Mail/MailRead")]
    public class MailReadRequest
    {
        public string uuid = default(string); 
    } 

    public class MailReadResponse 
    {
        public string uuid = default(string);
    } 

}
