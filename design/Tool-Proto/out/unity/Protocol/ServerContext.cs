/*
 * 服务器通信辅助类
 * @Author: shenzhengyi 
 * @Date: 2018-01-22 09:50:25 
 */
using System;
using System.Net;
using System.Net.Security;
using System.Collections;
using System.Security.Cryptography.X509Certificates;

using UnityEngine;
using UnityEngine.Networking;
using Newtonsoft.Json;
using System.Text;

[Serializable]
public class ServerMessage<T>
{
    public long errno;
    public string errmsg;
    public T data;
}

[Serializable]
public class ServerErrorMessage
{
    public long errno;
    public string errmsg;
    public string data;
}


public class ServerResponse<T>
{
    private UnityWebRequest request;
    private string postData;

    public T result;
    public long errorno;
    public string errormsg;

    public ServerResponse(string uri, object postData)
    {
        var req = new UnityWebRequest(uri, UnityWebRequest.kHttpVerbPOST);
        var jsonData = JsonConvert.SerializeObject(postData);
        var bytes = Encoding.Default.GetBytes(jsonData);
        req.uploadHandler = new UploadHandlerRaw(bytes);
        req.downloadHandler = new DownloadHandlerBuffer();
        req.SetRequestHeader("Content-Type", "application/json");
        req.timeout = ServerContext.timeout;

        request = req;
        this.postData = jsonData;
    }

    public IEnumerator Wait()
    {
        Debug.Log(string.Format("SERVER REQUEST ==> {0},{1}", request.url, postData));
        yield return request.SendWebRequest();
        ServerMessage<T> msg = null;
        var txt = request.downloadHandler.text;

        if (!string.IsNullOrEmpty(request.error))
        {
            errorno = -1;
            errormsg = request.error;
        }
        else if (request.responseCode != 200)
        {
            errormsg = txt;
            errorno = request.responseCode;
        }
        else
        {
            try
            {
                if (txt.StartsWith("{\"errno\":0")) //先通过前缀简易判断消息类型
                {
                    msg = JsonConvert.DeserializeObject<ServerMessage<T>>(txt);
                    errorno = msg.errno;
                    errormsg = msg.errmsg;
                }
                else
                {
                    var errorMsg = JsonConvert.DeserializeObject<ServerErrorMessage>(txt);
                    errormsg = errorMsg.errmsg;
                    errorno = errorMsg.errno;
                }
            }
            catch (Exception e)
            {
                errormsg = string.Format("deserialize json error:{0}, text:{1}", e.Message, txt);
                errorno = -2;
            }
        }

        if (errorno != 0)
        {
            var err = string.Format("SERVER RESPONSE ERROR ==> no:{0},msg:{1}", errorno, errormsg);
            Debug.LogError(err);
            if (ServerContext.errorCB != null)
            {
                ServerContext.errorCB(errorno, errormsg);
            }
            yield break;
        }
        result = msg.data;
        Debug.Log("SERVER RESPONSE ==> " + JsonConvert.SerializeObject(msg.data));
    }
}


public class ServerContext
{

    public static string rootUrl = "http://127.0.0.1:8360";
    public static int timeout = 5;
    public static Action<long, string> errorCB = null;

    public static void Init(string rootUrl, int timeout, Action<long, string> errorCB = null)
    {
        ServerContext.rootUrl = rootUrl;
        ServerContext.timeout = timeout;
        ServerContext.errorCB = errorCB;

        ServicePointManager.ServerCertificateValidationCallback = CheckValidationResult;
    }

    private static bool CheckValidationResult(object sender, X509Certificate certificate,
        X509Chain chain, SslPolicyErrors errors)
    {
        return true;
    }

    public static string UrlPathJoin(string controller, string action)
    {
        if (rootUrl.EndsWith("/"))
        {
            return string.Format("{0}{1}/{2}", rootUrl, controller, action);
        }
        return string.Format("{0}/{1}/{2}", rootUrl, controller, action);
    }
}
