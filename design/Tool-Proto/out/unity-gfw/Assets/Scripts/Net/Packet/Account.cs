// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.Account
{
    [RequestMsg(URL = "account/auth")]
    public class AuthRequest
    {
        public string account = default(string); 
    } 

    public class AuthResponse 
    {
        public string account = default(string);
        public string token = default(string);
    } 

    [RequestMsg(URL = "account/login")]
    public class LoginRequest
    {
        public string account = default(string); 
        public string token = default(string); 
    } 

    public class LoginResponse 
    {
        public string jwt = default(string);
        public int userId = default(int);
        public int timestamp = default(int);
    } 

    [RequestMsg(URL = "account/refreshToken")]
    public class RefreshTokenRequest
    {
    } 

    public class RefreshTokenResponse 
    {
        public string jwt = default(string);
    } 

}
