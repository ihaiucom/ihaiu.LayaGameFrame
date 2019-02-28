var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AntMine_1 = require("./Platform/AntMine");
var AntWX_1 = require("./Platform/AntWX");
var AntFrame = /** @class */ (function () {
    function AntFrame() {
    }
    AntFrame.LocationUrlParam = function (name) {
        if (Laya.Browser.onWeiXin) {
            return null;
        }
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    };
    AntFrame.RandName = function (min, max, randomFlag) {
        if (randomFlag === void 0) { randomFlag = true; }
        var str = "";
        var range = min;
        var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        if (randomFlag) {
            range = Math.round(Math.random() * (max - min)) + min;
        }
        for (var i = 0; i < range; i++) {
            var pos = Math.round(Math.random() * (arr.length - 1));
            str += arr[pos];
        }
        return str;
    };
    Object.defineProperty(AntFrame, "platform", {
        get: function () {
            if (!AntFrame._insPlatform) {
                if (Laya.Browser.onWeiXin) {
                    AntFrame._insPlatform = new AntWX_1.AntPlatformWX();
                }
                else {
                    AntFrame._insPlatform = new AntMine_1.default();
                }
            }
            return AntFrame._insPlatform;
        },
        enumerable: true,
        configurable: true
    });
    AntFrame._insPlatform = null;
    return AntFrame;
}());
exports.default = AntFrame;
},{"./Platform/AntMine":3,"./Platform/AntWX":5}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AntNet = /** @class */ (function () {
    function AntNet() {
    }
    Object.defineProperty(AntNet, "onError", {
        get: function () {
            return net.logic.onError;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AntNet, "onConnect", {
        get: function () {
            return net.logic.onConnect;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AntNet, "onClose", {
        get: function () {
            return net.logic.onClose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AntNet, "onReconnect", {
        get: function () {
            return net.logic.onReconnect;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AntNet, "logicPing", {
        get: function () {
            return net.logic.ping;
        },
        enumerable: true,
        configurable: true
    });
    AntNet.GamerLoginC2S = function (session, addr) {
        net.logic.gamerLoginC2S(session, addr);
    };
    Object.defineProperty(AntNet, "gamerLoginS2C", {
        get: function () {
            return net.logic.gamerLoginS2C;
        },
        enumerable: true,
        configurable: true
    });
    AntNet.AsyncGamerLoginC2S = function (session, addr) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var s2c = { error: 200 };
                        var timeObj = setTimeout(function () {
                            resolve(s2c);
                        }, 5000);
                        var fun = function (e) {
                            clearTimeout(timeObj);
                            AntNet.gamerLoginS2C.off(fun);
                            resolve(e);
                        };
                        AntNet.gamerLoginS2C.on(fun);
                        AntNet.GamerLoginC2S(session, addr);
                    })];
            });
        });
    };
    AntNet.GamerLoginGetDataC2S = function () {
        net.logic.gamerLoginGetDataC2S();
    };
    Object.defineProperty(AntNet, "gamerLoginGetDataS2C", {
        get: function () {
            return net.logic.gamerLoginGetDataS2C;
        },
        enumerable: true,
        configurable: true
    });
    AntNet.AsyncGamerLoginGetDataC2S = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var s2c = { error: 200 };
                        var timeObj = setTimeout(function () {
                            resolve(s2c);
                        }, 5000);
                        var fun = function (e) {
                            clearTimeout(timeObj);
                            AntNet.gamerLoginGetDataS2C.off(fun);
                            resolve(e);
                        };
                        AntNet.gamerLoginGetDataS2C.on(fun);
                        AntNet.GamerLoginGetDataC2S();
                    })];
            });
        });
    };
    AntNet.ServerTimeC2S = function () {
        net.logic.serverTimeC2S();
    };
    Object.defineProperty(AntNet, "serverTimeS2C", {
        get: function () {
            return net.logic.serverTimeS2C;
        },
        enumerable: true,
        configurable: true
    });
    AntNet.AsyncServerTimeC2S = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var s2c = { error: 200 };
                        var timeObj = setTimeout(function () {
                            resolve(s2c);
                        }, 5000);
                        var fun = function (e) {
                            clearTimeout(timeObj);
                            AntNet.serverTimeS2C.off(fun);
                            resolve(e);
                        };
                        AntNet.serverTimeS2C.on(fun);
                        AntNet.ServerTimeC2S();
                    })];
            });
        });
    };
    AntNet.GamerSubChatChannelC2S = function (channel, open) {
        net.logic.gamerSubChatChannelC2S(channel, open);
    };
    Object.defineProperty(AntNet, "gamerSubChatChannelS2C", {
        get: function () {
            return net.logic.gamerSubChatChannelS2C;
        },
        enumerable: true,
        configurable: true
    });
    AntNet.AsyncGamerSubChatChannelC2S = function (channel, open) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var s2c = { error: 200 };
                        var timeObj = setTimeout(function () {
                            resolve(s2c);
                        }, 5000);
                        var fun = function (e) {
                            clearTimeout(timeObj);
                            AntNet.gamerSubChatChannelS2C.off(fun);
                            resolve(e);
                        };
                        AntNet.gamerSubChatChannelS2C.on(fun);
                        AntNet.GamerSubChatChannelC2S(channel, open);
                    })];
            });
        });
    };
    AntNet.GamerFriendChatC2S = function (toId, msg) {
        net.logic.gamerFriendChatC2S(toId, msg);
    };
    Object.defineProperty(AntNet, "gamerFriendChatS2C", {
        get: function () {
            return net.logic.gamerFriendChatS2C;
        },
        enumerable: true,
        configurable: true
    });
    AntNet.AsyncGamerFriendChatC2S = function (toId, msg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var s2c = { error: 200 };
                        var timeObj = setTimeout(function () {
                            resolve(s2c);
                        }, 5000);
                        var fun = function (e) {
                            clearTimeout(timeObj);
                            AntNet.gamerFriendChatS2C.off(fun);
                            resolve(e);
                        };
                        AntNet.gamerFriendChatS2C.on(fun);
                        AntNet.GamerFriendChatC2S(toId, msg);
                    })];
            });
        });
    };
    AntNet.GamerWorldChatC2S = function (server, msg) {
        net.logic.gamerWorldChatC2S(server, msg);
    };
    Object.defineProperty(AntNet, "gamerWorldChatS2C", {
        get: function () {
            return net.logic.gamerWorldChatS2C;
        },
        enumerable: true,
        configurable: true
    });
    AntNet.AsyncGamerWorldChatC2S = function (server, msg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var s2c = { error: 200 };
                        var timeObj = setTimeout(function () {
                            resolve(s2c);
                        }, 5000);
                        var fun = function (e) {
                            clearTimeout(timeObj);
                            AntNet.gamerWorldChatS2C.off(fun);
                            resolve(e);
                        };
                        AntNet.gamerWorldChatS2C.on(fun);
                        AntNet.GamerWorldChatC2S(server, msg);
                    })];
            });
        });
    };
    AntNet.GamerTestChatC2S = function (toId, msg) {
        net.logic.gamerTestChatC2S(toId, msg);
    };
    Object.defineProperty(AntNet, "gamerTestChatS2C", {
        get: function () {
            return net.logic.gamerTestChatS2C;
        },
        enumerable: true,
        configurable: true
    });
    AntNet.AsyncGamerTestChatC2S = function (toId, msg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var s2c = { error: 200 };
                        var timeObj = setTimeout(function () {
                            resolve(s2c);
                        }, 5000);
                        var fun = function (e) {
                            clearTimeout(timeObj);
                            AntNet.gamerTestChatS2C.off(fun);
                            resolve(e);
                        };
                        AntNet.gamerTestChatS2C.on(fun);
                        AntNet.GamerTestChatC2S(toId, msg);
                    })];
            });
        });
    };
    AntNet.GamerClubRequestC2S = function (clubId, msg) {
        net.logic.gamerClubRequestC2S(clubId, msg);
    };
    Object.defineProperty(AntNet, "gamerClubRequestS2C", {
        get: function () {
            return net.logic.gamerClubRequestS2C;
        },
        enumerable: true,
        configurable: true
    });
    AntNet.AsyncGamerClubRequestC2S = function (clubId, msg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var s2c = { error: 200 };
                        var timeObj = setTimeout(function () {
                            resolve(s2c);
                        }, 5000);
                        var fun = function (e) {
                            clearTimeout(timeObj);
                            AntNet.gamerClubRequestS2C.off(fun);
                            resolve(e);
                        };
                        AntNet.gamerClubRequestS2C.on(fun);
                        AntNet.GamerClubRequestC2S(clubId, msg);
                    })];
            });
        });
    };
    AntNet.GamerNewFriendReqC2S = function (oid, msg) {
        net.logic.gamerNewFriendReqC2S(oid, msg);
    };
    Object.defineProperty(AntNet, "gamerNewFriendReqS2C", {
        get: function () {
            return net.logic.gamerNewFriendReqS2C;
        },
        enumerable: true,
        configurable: true
    });
    AntNet.AsyncGamerNewFriendReqC2S = function (oid, msg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var s2c = { error: 200 };
                        var timeObj = setTimeout(function () {
                            resolve(s2c);
                        }, 5000);
                        var fun = function (e) {
                            clearTimeout(timeObj);
                            AntNet.gamerNewFriendReqS2C.off(fun);
                            resolve(e);
                        };
                        AntNet.gamerNewFriendReqS2C.on(fun);
                        AntNet.GamerNewFriendReqC2S(oid, msg);
                    })];
            });
        });
    };
    AntNet.GamerProcessFriendReqC2S = function (oid, result) {
        net.logic.gamerProcessFriendReqC2S(oid, result);
    };
    Object.defineProperty(AntNet, "gamerProcessFriendReqS2C", {
        get: function () {
            return net.logic.gamerProcessFriendReqS2C;
        },
        enumerable: true,
        configurable: true
    });
    AntNet.AsyncGamerProcessFriendReqC2S = function (oid, result) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var s2c = { error: 200 };
                        var timeObj = setTimeout(function () {
                            resolve(s2c);
                        }, 5000);
                        var fun = function (e) {
                            clearTimeout(timeObj);
                            AntNet.gamerProcessFriendReqS2C.off(fun);
                            resolve(e);
                        };
                        AntNet.gamerProcessFriendReqS2C.on(fun);
                        AntNet.GamerProcessFriendReqC2S(oid, result);
                    })];
            });
        });
    };
    AntNet.GamerMatchC2S = function (type) {
        net.logic.gamerMatchC2S(type);
    };
    Object.defineProperty(AntNet, "gamerMatchS2C", {
        get: function () {
            return net.logic.gamerMatchS2C;
        },
        enumerable: true,
        configurable: true
    });
    AntNet.AsyncGamerMatchC2S = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var s2c = { error: 200 };
                        var timeObj = setTimeout(function () {
                            resolve(s2c);
                        }, 5000);
                        var fun = function (e) {
                            clearTimeout(timeObj);
                            AntNet.gamerMatchS2C.off(fun);
                            resolve(e);
                        };
                        AntNet.gamerMatchS2C.on(fun);
                        AntNet.GamerMatchC2S(type);
                    })];
            });
        });
    };
    AntNet.GamerPVPSyncC2S = function (session, input, needFrames, crc, agents, reconn, index, addr, result) {
        net.logic.gamerPVPSyncC2S(session, input, needFrames, crc, agents, reconn, index, addr, result);
    };
    Object.defineProperty(AntNet, "gamerPVPSyncS2C", {
        get: function () {
            return net.logic.gamerPVPSyncS2C;
        },
        enumerable: true,
        configurable: true
    });
    AntNet.AsyncGamerPVPSyncC2S = function (session, input, needFrames, crc, agents, reconn, index, addr, result) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var s2c = { error: 200 };
                        var timeObj = setTimeout(function () {
                            resolve(s2c);
                        }, 5000);
                        var fun = function (e) {
                            clearTimeout(timeObj);
                            AntNet.gamerPVPSyncS2C.off(fun);
                            resolve(e);
                        };
                        AntNet.gamerPVPSyncS2C.on(fun);
                        AntNet.GamerPVPSyncC2S(session, input, needFrames, crc, agents, reconn, index, addr, result);
                    })];
            });
        });
    };
    AntNet.GamerGetRealTimeRankC2S = function () {
        net.logic.gamerGetRealTimeRankC2S();
    };
    Object.defineProperty(AntNet, "gamerGetRealTimeRankS2C", {
        get: function () {
            return net.logic.gamerGetRealTimeRankS2C;
        },
        enumerable: true,
        configurable: true
    });
    AntNet.AsyncGamerGetRealTimeRankC2S = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var s2c = { error: 200 };
                        var timeObj = setTimeout(function () {
                            resolve(s2c);
                        }, 5000);
                        var fun = function (e) {
                            clearTimeout(timeObj);
                            AntNet.gamerGetRealTimeRankS2C.off(fun);
                            resolve(e);
                        };
                        AntNet.gamerGetRealTimeRankS2C.on(fun);
                        AntNet.GamerGetRealTimeRankC2S();
                    })];
            });
        });
    };
    AntNet.GamerCheckPVPBattleC2S = function (session) {
        net.logic.gamerCheckPVPBattleC2S(session);
    };
    Object.defineProperty(AntNet, "gamerCheckPVPBattleS2C", {
        get: function () {
            return net.logic.gamerCheckPVPBattleS2C;
        },
        enumerable: true,
        configurable: true
    });
    AntNet.AsyncGamerCheckPVPBattleC2S = function (session) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var s2c = { error: 200 };
                        var timeObj = setTimeout(function () {
                            resolve(s2c);
                        }, 5000);
                        var fun = function (e) {
                            clearTimeout(timeObj);
                            AntNet.gamerCheckPVPBattleS2C.off(fun);
                            resolve(e);
                        };
                        AntNet.gamerCheckPVPBattleS2C.on(fun);
                        AntNet.GamerCheckPVPBattleC2S(session);
                    })];
            });
        });
    };
    AntNet.GamerUploadWXInfoC2S = function (wxInfo) {
        net.logic.gamerUploadWXInfoC2S(wxInfo);
    };
    Object.defineProperty(AntNet, "gamerUploadWXInfoS2C", {
        get: function () {
            return net.logic.gamerUploadWXInfoS2C;
        },
        enumerable: true,
        configurable: true
    });
    AntNet.AsyncGamerUploadWXInfoC2S = function (wxInfo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var s2c = { error: 200 };
                        var timeObj = setTimeout(function () {
                            resolve(s2c);
                        }, 5000);
                        var fun = function (e) {
                            clearTimeout(timeObj);
                            AntNet.gamerUploadWXInfoS2C.off(fun);
                            resolve(e);
                        };
                        AntNet.gamerUploadWXInfoS2C.on(fun);
                        AntNet.GamerUploadWXInfoC2S(wxInfo);
                    })];
            });
        });
    };
    AntNet.GamerNewRoomC2S = function (type) {
        net.logic.gamerNewRoomC2S(type);
    };
    Object.defineProperty(AntNet, "gamerNewRoomS2C", {
        get: function () {
            return net.logic.gamerNewRoomS2C;
        },
        enumerable: true,
        configurable: true
    });
    AntNet.AsyncGamerNewRoomC2S = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var s2c = { error: 200 };
                        var timeObj = setTimeout(function () {
                            resolve(s2c);
                        }, 5000);
                        var fun = function (e) {
                            clearTimeout(timeObj);
                            AntNet.gamerNewRoomS2C.off(fun);
                            resolve(e);
                        };
                        AntNet.gamerNewRoomS2C.on(fun);
                        AntNet.GamerNewRoomC2S(type);
                    })];
            });
        });
    };
    AntNet.GamerAddRoomC2S = function (roomId) {
        net.logic.gamerAddRoomC2S(roomId);
    };
    Object.defineProperty(AntNet, "gamerAddRoomS2C", {
        get: function () {
            return net.logic.gamerAddRoomS2C;
        },
        enumerable: true,
        configurable: true
    });
    AntNet.AsyncGamerAddRoomC2S = function (roomId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var s2c = { error: 200 };
                        var timeObj = setTimeout(function () {
                            resolve(s2c);
                        }, 5000);
                        var fun = function (e) {
                            clearTimeout(timeObj);
                            AntNet.gamerAddRoomS2C.off(fun);
                            resolve(e);
                        };
                        AntNet.gamerAddRoomS2C.on(fun);
                        AntNet.GamerAddRoomC2S(roomId);
                    })];
            });
        });
    };
    AntNet.GamerLeaveRoomC2S = function (roomId) {
        net.logic.gamerLeaveRoomC2S(roomId);
    };
    Object.defineProperty(AntNet, "gamerLeaveRoomS2C", {
        get: function () {
            return net.logic.gamerLeaveRoomS2C;
        },
        enumerable: true,
        configurable: true
    });
    AntNet.AsyncGamerLeaveRoomC2S = function (roomId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var s2c = { error: 200 };
                        var timeObj = setTimeout(function () {
                            resolve(s2c);
                        }, 5000);
                        var fun = function (e) {
                            clearTimeout(timeObj);
                            AntNet.gamerLeaveRoomS2C.off(fun);
                            resolve(e);
                        };
                        AntNet.gamerLeaveRoomS2C.on(fun);
                        AntNet.GamerLeaveRoomC2S(roomId);
                    })];
            });
        });
    };
    Object.defineProperty(AntNet, "gamerNotifyLoginOtherS2C", {
        get: function () {
            return net.logic.gamerNotifyLoginOtherS2C;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AntNet, "gamerNotifyNewChatS2C", {
        get: function () {
            return net.logic.gamerNotifyNewChatS2C;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AntNet, "gamerNotifyNewFriendReqS2C", {
        get: function () {
            return net.logic.gamerNotifyNewFriendReqS2C;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AntNet, "gamerNotifyNewFriendS2C", {
        get: function () {
            return net.logic.gamerNotifyNewFriendS2C;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AntNet, "gamerNotifyNewMailS2C", {
        get: function () {
            return net.logic.gamerNotifyNewMailS2C;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AntNet, "gamerNotifyMatchInfoS2C", {
        get: function () {
            return net.logic.gamerNotifyMatchInfoS2C;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AntNet, "gamerNotifyPVPSyncS2C", {
        get: function () {
            return net.logic.gamerNotifyPVPSyncS2C;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AntNet, "gamerNotifyNewPVPResultS2C", {
        get: function () {
            return net.logic.gamerNotifyNewPVPResultS2C;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AntNet, "gamerNotifyIconChangeS2C", {
        get: function () {
            return net.logic.gamerNotifyIconChangeS2C;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AntNet, "gamerNotifyRoomInfoChangeS2C", {
        get: function () {
            return net.logic.gamerNotifyRoomInfoChangeS2C;
        },
        enumerable: true,
        configurable: true
    });
    return AntNet;
}());
exports.default = AntNet;
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AntFrame_1 = require("../AntFrame");
var AntPlatformBase_1 = require("./AntPlatformBase");
var AntPlatformBase_2 = require("./AntPlatformBase");
var AntPlatformMine = /** @class */ (function (_super) {
    __extends(AntPlatformMine, _super);
    function AntPlatformMine() {
        return _super.call(this) || this;
    }
    AntPlatformMine.prototype.Login = function (server, roletype) {
        if (server === void 0) { server = 1; }
        if (roletype === void 0) { roletype = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var name;
            return __generator(this, function (_a) {
                net.config.channel = "mine";
                name = AntFrame_1.default.LocationUrlParam("name") || AntFrame_1.default.RandName(2, 7);
                return [2 /*return*/, new Promise(function (resolve) {
                        net.auth.mineLogin(name, "", name, roletype, server, function (ok, json) {
                            if (!ok) {
                                resolve({ error: 45 });
                            }
                            else {
                                net.logic.connect();
                                var callback_1 = function (e) {
                                    net.logic.gamerLoginS2C.off(callback_1);
                                    resolve(e);
                                };
                                net.logic.gamerLoginS2C.on(callback_1);
                            }
                        });
                    })];
            });
        });
    };
    AntPlatformMine.prototype.FastLogin = function (name, channel, openid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                net.config.channel = channel;
                return [2 /*return*/, new Promise(function (resolve) {
                        net.auth.fastLogin(name, channel, openid, function (ok, json) {
                            if (!ok) {
                                resolve({ error: 45 });
                            }
                            else {
                                net.logic.connect();
                                var callback_2 = function (e) {
                                    net.logic.gamerLoginS2C.off(callback_2);
                                    resolve(e);
                                };
                                net.logic.gamerLoginS2C.on(callback_2);
                            }
                        });
                    })];
            });
        });
    };
    AntPlatformMine.prototype.GameDoSdkAuthAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.m_stSdkUserInfo.nickName = "ANTMINE-NICKNAME";
                this.m_stSdkUserInfo.avatarUrl = "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKpmpnxfYeeUqFOlwK9x260xibs866I7NpmuHjgerLXgUk1B77HpIo2oZP0wAbnib4Lkc30N7yibYoww/132";
                this.m_stSdkUserInfo.gender = AntPlatformBase_2.eSex.Man;
                this.m_stSdkUserInfo.city = "上海";
                this.m_stSdkUserInfo.country = "中国";
                this.m_stSdkUserInfo.language = "zh_CN";
                this.m_stSdkUserInfo.province = "上海";
                return [2 /*return*/, new Promise(function (resolve) {
                        resolve(_this.m_stSdkUserInfo);
                    })];
            });
        });
    };
    AntPlatformMine.prototype.GetLaunchOptions = function () {
        return {
            key1: AntFrame_1.default.LocationUrlParam("key1"),
            key2: AntFrame_1.default.LocationUrlParam("key2"),
        };
    };
    return AntPlatformMine;
}(AntPlatformBase_1.default));
exports.default = AntPlatformMine;
},{"../AntFrame":1,"./AntPlatformBase":4}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eSex;
(function (eSex) {
    eSex[eSex["None"] = 0] = "None";
    eSex[eSex["Man"] = 1] = "Man";
    eSex[eSex["Woman"] = 2] = "Woman";
})(eSex = exports.eSex || (exports.eSex = {}));
var SdkUserInfo = /** @class */ (function () {
    function SdkUserInfo() {
        this.language = "";
        this.nickName = ""; // 玩家昵称
        this.avatarUrl = ""; // 玩家头像
        this.gender = eSex.None; // 玩家性别
        this.country = ""; // 玩家国家
        this.province = ""; // 玩家省份
        this.city = "";
        this.unionId = "";
        this.openId = "";
        this.sessionId = "";
        this.sign = "";
    }
    SdkUserInfo.prototype.ToString = function () {
        return " UserInfo::<br/>NickName:" + this.nickName
            + ",<br/>AvatarUrl:" + this.avatarUrl
            + ",<br/>OpenID:" + this.openId
            + ",<br/>City:" + this.city
            + ",<br/>SessionID:" + this.sessionId;
    };
    return SdkUserInfo;
}());
exports.SdkUserInfo = SdkUserInfo;
var SdkLoginInfo = /** @class */ (function () {
    function SdkLoginInfo() {
        this.code = "";
    }
    return SdkLoginInfo;
}());
exports.SdkLoginInfo = SdkLoginInfo;
var SystemInfo = /** @class */ (function () {
    function SystemInfo() {
    }
    return SystemInfo;
}());
exports.SystemInfo = SystemInfo;
var ReferrerInfo = /** @class */ (function () {
    function ReferrerInfo() {
    }
    return ReferrerInfo;
}());
exports.ReferrerInfo = ReferrerInfo;
/**向opendata发送的数据类型 */
var MsgType;
(function (MsgType) {
    MsgType[MsgType["RemoveRankList"] = 0] = "RemoveRankList";
    MsgType[MsgType["FetchFriendRankList"] = 1] = "FetchFriendRankList";
    MsgType[MsgType["SubmitScore"] = 3] = "SubmitScore";
    MsgType[MsgType["GameOverRank"] = 4] = "GameOverRank";
    MsgType[MsgType["FetchGroupFriendRankList"] = 5] = "FetchGroupFriendRankList";
    MsgType[MsgType["NotifyTime"] = 6] = "NotifyTime";
})(MsgType = exports.MsgType || (exports.MsgType = {}));
var AntPlatformBase = /** @class */ (function () {
    function AntPlatformBase() {
        this.m_stSystemInfo = null;
        this.m_stSdkUserInfo = null;
        this.m_stSdkLoginInfo = null;
        this.m_stSystemInfo = new SystemInfo();
        this.m_stSdkUserInfo = new SdkUserInfo();
        this.m_stSdkLoginInfo = new SdkLoginInfo();
    }
    Object.defineProperty(AntPlatformBase, "platformWX", {
        get: function () {
            return Laya.Browser.onWeiXin;
        },
        enumerable: true,
        configurable: true
    });
    AntPlatformBase.prototype.Login = function (server, roletype) {
        if (server === void 0) { server = 1; }
        if (roletype === void 0) { roletype = 1; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, null];
            });
        });
    };
    AntPlatformBase.prototype.FastLogin = function (name, channel, openid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, null];
            });
        });
    };
    AntPlatformBase.prototype.GameDoSdkAuthAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, null];
            });
        });
    };
    AntPlatformBase.prototype.GameDoSdkLoginAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        resolve(_this.m_stSdkLoginInfo);
                    })];
            });
        });
    };
    AntPlatformBase.prototype.GetLaunchOptions = function () {
        return {};
    };
    AntPlatformBase.prototype.UserCheck = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        resolve(true);
                    })];
            });
        });
    };
    AntPlatformBase.prototype.Share = function (title, imgUrl, query) {
        return null;
    };
    return AntPlatformBase;
}());
exports.default = AntPlatformBase;
},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AntPlatformBase_1 = require("./AntPlatformBase");
var AntPlatformWX = /** @class */ (function (_super) {
    __extends(AntPlatformWX, _super);
    function AntPlatformWX() {
        var _this = _super.call(this) || this;
        _this.GetSystemInfo();
        wx.setKeepScreenOn && wx.setKeepScreenOn({
            keepScreenOn: true,
            success: function () {
                console.log("常亮设置成功！");
            }
        });
        return _this;
    }
    AntPlatformWX.prototype.WXGetSdkAuthSetting = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        wx.getSetting({
                            success: function (res) {
                                resolve(res.authSetting['scope.userInfo']);
                            },
                            fail: function () {
                                resolve(false);
                            },
                        });
                    })];
            });
        });
    };
    AntPlatformWX.prototype.UserCheck = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.WXGetSdkAuthSetting()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AntPlatformWX.prototype.WXGetSdkUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        wx.getUserInfo({
                            success: function (res) {
                                resolve(res.userInfo);
                            },
                            fail: function (res) {
                                console.log(res.errMsg);
                                resolve(null);
                            }
                        });
                    })];
            });
        });
    };
    AntPlatformWX.prototype.Login = function (server, roletype) {
        if (server === void 0) { server = 1; }
        if (roletype === void 0) { roletype = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var sdkInfo, loginInfo, code;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.GameDoSdkAuthAsync()];
                    case 1:
                        sdkInfo = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!!sdkInfo) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.GameDoSdkAuthAsync()];
                    case 3:
                        sdkInfo = _a.sent();
                        return [3 /*break*/, 2];
                    case 4: return [4 /*yield*/, this.GameDoSdkLoginAsync()];
                    case 5:
                        loginInfo = _a.sent();
                        _a.label = 6;
                    case 6:
                        if (!!loginInfo) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.GameDoSdkLoginAsync()];
                    case 7:
                        loginInfo = _a.sent();
                        return [3 /*break*/, 6];
                    case 8:
                        code = this.m_stSdkLoginInfo.code;
                        net.config.channel = "wechat";
                        return [2 /*return*/, new Promise(function (resolve) {
                                net.auth.sdkLogin(code, "", _this.m_stSdkUserInfo.nickName, roletype, server, sdkInfo.avatarUrl, function (ok, json) {
                                    if (!ok) {
                                        resolve({ error: 45 });
                                    }
                                    else {
                                        net.logic.connect();
                                        var callback_1 = function (e) {
                                            net.logic.gamerLoginS2C.off(callback_1);
                                            resolve(e);
                                        };
                                        net.logic.gamerLoginS2C.on(callback_1);
                                    }
                                });
                            })];
                }
            });
        });
    };
    AntPlatformWX.prototype.GameDoSdkAuthAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var flag, info, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.WXGetSdkAuthSetting()];
                    case 1:
                        flag = _b.sent();
                        if (!flag) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.WXGetSdkUserInfo()];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.WXCreateWXUserButton()];
                    case 4:
                        _a = _b.sent();
                        _b.label = 5;
                    case 5:
                        info = _a;
                        if (info) {
                            this.SetUserInfo(info);
                            return [2 /*return*/, new Promise(function (resolve) {
                                    resolve(_this.m_stSdkUserInfo);
                                })];
                        }
                        else {
                            return [2 /*return*/, new Promise(function (resolve) {
                                    resolve(null);
                                })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AntPlatformWX.prototype.GameDoSdkLoginAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                //console.log("AntPlatform WX Game Do Sdk Login Async");
                return [2 /*return*/, new Promise(function (resolve) {
                        wx.login({
                            success: function (res) {
                                console.log(res);
                                _this.m_stSdkLoginInfo.code = res.code;
                                resolve(_this.m_stSdkLoginInfo);
                            },
                            fail: function (res) {
                                console.log(res);
                                resolve(null);
                            },
                        });
                    })];
            });
        });
    };
    AntPlatformWX.prototype.WXCreateWXUserButton = function () {
        var button = wx.createUserInfoButton({
            type: 'text',
            lang: "zh_CN",
            text: '',
            style: {
                left: 0,
                top: 0,
                width: 2000,
                height: 2000,
                lineHeight: 40,
                textAlign: 'center',
                fontSize: 16,
                borderRadius: 4
            }
        });
        button.show();
        return new Promise(function (resolve) {
            button.onTap(function (res) {
                if (res.userInfo) {
                    console.log("wxLogin auth success");
                    button.hide();
                    resolve(res.userInfo);
                }
                else {
                    console.error("获取用户信息失败");
                    resolve(null);
                }
            });
        });
    };
    AntPlatformWX.prototype.SetUserInfo = function (info) {
        console.error(info);
        this.m_stSdkUserInfo.language = info.language;
        this.m_stSdkUserInfo.nickName = info.nickName;
        this.m_stSdkUserInfo.avatarUrl = info.avatarUrl;
        this.m_stSdkUserInfo.gender = info.gender;
        this.m_stSdkUserInfo.country = info.country;
        this.m_stSdkUserInfo.province = info.province;
        this.m_stSdkUserInfo.city = info.city;
    };
    AntPlatformWX.prototype.GetSystemInfo = function () {
        var info = wx.getSystemInfoSync();
        this.m_stSystemInfo.benchmarkLevel = info.benchmarkLevel;
        this.m_stSystemInfo.model = info.model;
        this.m_stSystemInfo.pixelRatio = info.pixelRatio;
        this.m_stSystemInfo.platform = info.platform;
        this.m_stSystemInfo.screenHeight = info.screenHeight;
        this.m_stSystemInfo.screenWidth = info.screenWidth;
        this.m_stSystemInfo.system = info.system;
        this.m_stSystemInfo.version = info.version;
        this.m_stSystemInfo.windowHeight = info.windowHeight;
        this.m_stSystemInfo.windowWidth = info.windowWidth;
        this.m_stSystemInfo.SDKVersion = info.SDKVersion;
        return this.m_stSystemInfo;
    };
    AntPlatformWX.prototype.Share = function (title, imgUrl, query) {
        return new Promise(function (resolve) {
            wx.shareAppMessage({
                title: title,
                imageUrl: imgUrl,
                query: query,
                success: function () {
                    console.error("share success!");
                    resolve(true);
                },
                fail: function () {
                    console.error("share fail!");
                    resolve(false);
                }
            });
        });
    };
    AntPlatformWX.prototype.GetLaunchOptions = function () {
        return wx.getLaunchOptionsSync().query;
    };
    return AntPlatformWX;
}(AntPlatformBase_1.default));
exports.AntPlatformWX = AntPlatformWX;
},{"./AntPlatformBase":4}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
* 游戏初始化配置;
*/
var GameConfig = /** @class */ (function () {
    function GameConfig() {
    }
    GameConfig.init = function () {
        var reg = Laya.ClassUtils.regClass;
    };
    GameConfig.width = 640;
    GameConfig.height = 1136;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "test/TestScene.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    return GameConfig;
}());
exports.default = GameConfig;
GameConfig.init();
},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig_1 = require("./GameConfig");
var AntFrame_1 = require("../bin/libs/AntFrame/AntFrame");
var AntNet_1 = require("../bin/libs/AntFrame/Net/AntNet");
var GameLaunch = /** @class */ (function () {
    function GameLaunch() {
        //根据IDE设置初始化引擎		
        if (window["Laya3D"])
            Laya3D.init(GameConfig_1.default.width, GameConfig_1.default.height);
        else
            Laya.init(GameConfig_1.default.width, GameConfig_1.default.height, Laya["WebGL"]);
        Laya["Physics"] && Laya["Physics"].enable();
        Laya["DebugPanel"] && Laya["DebugPanel"].enable();
        Laya.stage.scaleMode = GameConfig_1.default.scaleMode;
        Laya.stage.screenMode = GameConfig_1.default.screenMode;
        //兼容微信不支持加载scene后缀场景
        Laya.URL.exportSceneToJson = GameConfig_1.default.exportSceneToJson;
        //打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
        if (GameConfig_1.default.debug || Laya.Utils.getQueryString("debug") == "true")
            Laya.enableDebugPanel();
        if (GameConfig_1.default.physicsDebug && Laya["PhysicsDebugDraw"])
            Laya["PhysicsDebugDraw"].enable();
        if (GameConfig_1.default.stat)
            Laya.Stat.show();
        Laya.alertGlobalError = true;
        console.log(11111111);
        this.onVersionLoaded();
        //激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
        // Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
    }
    GameLaunch.prototype.onVersionLoaded = function () {
        net.config.url = "https://www.magiclvzs.club:5000";
        this.Test();
    };
    GameLaunch.prototype.Test = function () {
        return __awaiter(this, void 0, void 0, function () {
            var s2c, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        AntNet_1.default.gamerNotifyIconChangeS2C.on(function (e) {
                            console.log("test");
                            console.log(e);
                        });
                        return [4 /*yield*/, AntFrame_1.default.platform.Login()];
                    case 1:
                        s2c = _a.sent();
                        console.log(s2c);
                        return [4 /*yield*/, AntNet_1.default.AsyncGamerLoginGetDataC2S()];
                    case 2:
                        data = _a.sent();
                        console.log(data);
                        return [2 /*return*/];
                }
            });
        });
    };
    GameLaunch.prototype.onConfigLoaded = function () {
    };
    return GameLaunch;
}());
//激活启动类
new GameLaunch();
},{"../bin/libs/AntFrame/AntFrame":1,"../bin/libs/AntFrame/Net/AntNet":2,"./GameConfig":6}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L1Byb2dyYW0gRmlsZXMvTGF5YUFpcklERTIuMC9yZXNvdXJjZXMvYXBwL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJiaW4vbGlicy9BbnRGcmFtZS9BbnRGcmFtZS50cyIsImJpbi9saWJzL0FudEZyYW1lL05ldC9BbnROZXQudHMiLCJiaW4vbGlicy9BbnRGcmFtZS9QbGF0Zm9ybS9BbnRNaW5lLnRzIiwiYmluL2xpYnMvQW50RnJhbWUvUGxhdGZvcm0vQW50UGxhdGZvcm1CYXNlLnRzIiwiYmluL2xpYnMvQW50RnJhbWUvUGxhdGZvcm0vQW50V1gudHMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9HYW1lTGF1bmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1BBLDhDQUFpRDtBQUNqRCwwQ0FBaUQ7QUFHakQ7SUFBQTtJQXdDQSxDQUFDO0lBdENpQix5QkFBZ0IsR0FBOUIsVUFBK0IsSUFBVztRQUV0QyxJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3RCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ1gsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ2EsaUJBQVEsR0FBdEIsVUFBdUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxVQUF1QjtRQUF2QiwyQkFBQSxFQUFBLGlCQUF1QjtRQUNwRCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDaEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDalUsSUFBRyxVQUFVLEVBQUM7WUFDVixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDdkQ7UUFDRCxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFDO1lBQ3RCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFHRCxzQkFBa0Isb0JBQVE7YUFBMUI7WUFDSSxJQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBQztnQkFDdEIsSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtvQkFDdEIsUUFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLHFCQUFhLEVBQUUsQ0FBQztpQkFDL0M7cUJBQUk7b0JBQ0QsUUFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLGlCQUFlLEVBQUUsQ0FBQztpQkFDakQ7YUFDSjtZQUNELE9BQU8sUUFBUSxDQUFDLFlBQVksQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQVZjLHFCQUFZLEdBQW1CLElBQUksQ0FBQztJQVl2RCxlQUFDO0NBeENELEFBd0NDLElBQUE7a0JBeENvQixRQUFROzs7O0FDSjdCO0lBQUE7SUEwZUEsQ0FBQztJQXhlRyxzQkFBa0IsaUJBQU87YUFBekI7WUFDRixPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWtCLG1CQUFTO2FBQTNCO1lBQ0MsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUNELHNCQUFrQixpQkFBTzthQUF6QjtZQUNDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBa0IscUJBQVc7YUFBN0I7WUFDQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWtCLG1CQUFTO2FBQTNCO1lBQ0MsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUdhLG9CQUFhLEdBQTNCLFVBQTRCLE9BQWUsRUFBRSxJQUFZO1FBQ3hELEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsc0JBQWtCLHVCQUFhO2FBQS9CO1lBQ0MsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVtQix5QkFBa0IsR0FBdEMsVUFBdUMsT0FBZSxFQUFFLElBQVk7OztnQkFDbkUsc0JBQU8sSUFBSSxPQUFPLENBQWdCLFVBQUMsT0FBTzt3QkFDekMsSUFBSSxHQUFHLEdBQUcsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFrQixDQUFDO3dCQUN2QyxJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUM7NEJBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDZCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ1QsSUFBSSxHQUFHLEdBQUcsVUFBUyxDQUFlOzRCQUNqQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQ3RCLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUM5QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1osQ0FBQyxDQUFBO3dCQUNELE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUM3QixNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDckMsQ0FBQyxDQUFDLEVBQUM7OztLQUNIO0lBRWEsMkJBQW9CLEdBQWxDO1FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxzQkFBa0IsOEJBQW9CO2FBQXRDO1lBQ0MsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBRW1CLGdDQUF5QixHQUE3Qzs7O2dCQUNDLHNCQUFPLElBQUksT0FBTyxDQUF1QixVQUFDLE9BQU87d0JBQ2hELElBQUksR0FBRyxHQUFHLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBeUIsQ0FBQzt3QkFDOUMsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDOzRCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNULElBQUksR0FBRyxHQUFHLFVBQVMsQ0FBc0I7NEJBQ3hDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDdEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDckMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNaLENBQUMsQ0FBQTt3QkFDRCxNQUFNLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNwQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztvQkFDL0IsQ0FBQyxDQUFDLEVBQUM7OztLQUNIO0lBRWEsb0JBQWEsR0FBM0I7UUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxzQkFBa0IsdUJBQWE7YUFBL0I7WUFDQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBRW1CLHlCQUFrQixHQUF0Qzs7O2dCQUNDLHNCQUFPLElBQUksT0FBTyxDQUFnQixVQUFDLE9BQU87d0JBQ3pDLElBQUksR0FBRyxHQUFHLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBa0IsQ0FBQzt3QkFDdkMsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDOzRCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNULElBQUksR0FBRyxHQUFHLFVBQVMsQ0FBZTs0QkFDakMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUN0QixNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDOUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNaLENBQUMsQ0FBQTt3QkFDRCxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDN0IsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUN4QixDQUFDLENBQUMsRUFBQzs7O0tBQ0g7SUFFYSw2QkFBc0IsR0FBcEMsVUFBcUMsT0FBZSxFQUFFLElBQWE7UUFDbEUsR0FBRyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELHNCQUFrQixnQ0FBc0I7YUFBeEM7WUFDQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFFbUIsa0NBQTJCLEdBQS9DLFVBQWdELE9BQWUsRUFBRSxJQUFhOzs7Z0JBQzdFLHNCQUFPLElBQUksT0FBTyxDQUF5QixVQUFDLE9BQU87d0JBQ2xELElBQUksR0FBRyxHQUFHLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBMkIsQ0FBQzt3QkFDaEQsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDOzRCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNULElBQUksR0FBRyxHQUFHLFVBQVMsQ0FBd0I7NEJBQzFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDdEIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDdkMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNaLENBQUMsQ0FBQTt3QkFDRCxNQUFNLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN0QyxNQUFNLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUM5QyxDQUFDLENBQUMsRUFBQzs7O0tBQ0g7SUFFYSx5QkFBa0IsR0FBaEMsVUFBaUMsSUFBWSxFQUFFLEdBQVc7UUFDekQsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHNCQUFrQiw0QkFBa0I7YUFBcEM7WUFDQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFFbUIsOEJBQXVCLEdBQTNDLFVBQTRDLElBQVksRUFBRSxHQUFXOzs7Z0JBQ3BFLHNCQUFPLElBQUksT0FBTyxDQUFxQixVQUFDLE9BQU87d0JBQzlDLElBQUksR0FBRyxHQUFHLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBdUIsQ0FBQzt3QkFDNUMsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDOzRCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNULElBQUksR0FBRyxHQUFHLFVBQVMsQ0FBb0I7NEJBQ3RDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDdEIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDbkMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNaLENBQUMsQ0FBQTt3QkFDRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNsQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUN0QyxDQUFDLENBQUMsRUFBQzs7O0tBQ0g7SUFFYSx3QkFBaUIsR0FBL0IsVUFBZ0MsTUFBYyxFQUFFLEdBQVc7UUFDMUQsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHNCQUFrQiwyQkFBaUI7YUFBbkM7WUFDQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFFbUIsNkJBQXNCLEdBQTFDLFVBQTJDLE1BQWMsRUFBRSxHQUFXOzs7Z0JBQ3JFLHNCQUFPLElBQUksT0FBTyxDQUFvQixVQUFDLE9BQU87d0JBQzdDLElBQUksR0FBRyxHQUFHLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBc0IsQ0FBQzt3QkFDM0MsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDOzRCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNULElBQUksR0FBRyxHQUFHLFVBQVMsQ0FBbUI7NEJBQ3JDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDdEIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDbEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNaLENBQUMsQ0FBQTt3QkFDRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNqQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUN2QyxDQUFDLENBQUMsRUFBQzs7O0tBQ0g7SUFFYSx1QkFBZ0IsR0FBOUIsVUFBK0IsSUFBWSxFQUFFLEdBQVc7UUFDdkQsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHNCQUFrQiwwQkFBZ0I7YUFBbEM7WUFDQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFbUIsNEJBQXFCLEdBQXpDLFVBQTBDLElBQVksRUFBRSxHQUFXOzs7Z0JBQ2xFLHNCQUFPLElBQUksT0FBTyxDQUFtQixVQUFDLE9BQU87d0JBQzVDLElBQUksR0FBRyxHQUFHLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBcUIsQ0FBQzt3QkFDMUMsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDOzRCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNULElBQUksR0FBRyxHQUFHLFVBQVMsQ0FBa0I7NEJBQ3BDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDdEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDakMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNaLENBQUMsQ0FBQTt3QkFDRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNoQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNwQyxDQUFDLENBQUMsRUFBQzs7O0tBQ0g7SUFFYSwwQkFBbUIsR0FBakMsVUFBa0MsTUFBYyxFQUFFLEdBQVc7UUFDNUQsR0FBRyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELHNCQUFrQiw2QkFBbUI7YUFBckM7WUFDQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFbUIsK0JBQXdCLEdBQTVDLFVBQTZDLE1BQWMsRUFBRSxHQUFXOzs7Z0JBQ3ZFLHNCQUFPLElBQUksT0FBTyxDQUFzQixVQUFDLE9BQU87d0JBQy9DLElBQUksR0FBRyxHQUFHLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBd0IsQ0FBQzt3QkFDN0MsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDOzRCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNULElBQUksR0FBRyxHQUFHLFVBQVMsQ0FBcUI7NEJBQ3ZDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDdEIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDcEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNaLENBQUMsQ0FBQTt3QkFDRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNuQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUN6QyxDQUFDLENBQUMsRUFBQzs7O0tBQ0g7SUFFYSwyQkFBb0IsR0FBbEMsVUFBbUMsR0FBVyxFQUFFLEdBQVc7UUFDMUQsR0FBRyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHNCQUFrQiw4QkFBb0I7YUFBdEM7WUFDQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFFbUIsZ0NBQXlCLEdBQTdDLFVBQThDLEdBQVcsRUFBRSxHQUFXOzs7Z0JBQ3JFLHNCQUFPLElBQUksT0FBTyxDQUF1QixVQUFDLE9BQU87d0JBQ2hELElBQUksR0FBRyxHQUFHLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBeUIsQ0FBQzt3QkFDOUMsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDOzRCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNULElBQUksR0FBRyxHQUFHLFVBQVMsQ0FBc0I7NEJBQ3hDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDdEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDckMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNaLENBQUMsQ0FBQTt3QkFDRCxNQUFNLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNwQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUN2QyxDQUFDLENBQUMsRUFBQzs7O0tBQ0g7SUFFYSwrQkFBd0IsR0FBdEMsVUFBdUMsR0FBVyxFQUFFLE1BQWU7UUFDbEUsR0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELHNCQUFrQixrQ0FBd0I7YUFBMUM7WUFDQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7SUFFbUIsb0NBQTZCLEdBQWpELFVBQWtELEdBQVcsRUFBRSxNQUFlOzs7Z0JBQzdFLHNCQUFPLElBQUksT0FBTyxDQUEyQixVQUFDLE9BQU87d0JBQ3BELElBQUksR0FBRyxHQUFHLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBNkIsQ0FBQzt3QkFDbEQsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDOzRCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNULElBQUksR0FBRyxHQUFHLFVBQVMsQ0FBMEI7NEJBQzVDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDdEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDekMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNaLENBQUMsQ0FBQTt3QkFDRCxNQUFNLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN4QyxNQUFNLENBQUMsd0JBQXdCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUM5QyxDQUFDLENBQUMsRUFBQzs7O0tBQ0g7SUFFYSxvQkFBYSxHQUEzQixVQUE0QixJQUFZO1FBQ3ZDLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxzQkFBa0IsdUJBQWE7YUFBL0I7WUFDQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBRW1CLHlCQUFrQixHQUF0QyxVQUF1QyxJQUFZOzs7Z0JBQ2xELHNCQUFPLElBQUksT0FBTyxDQUFnQixVQUFDLE9BQU87d0JBQ3pDLElBQUksR0FBRyxHQUFHLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBa0IsQ0FBQzt3QkFDdkMsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDOzRCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNULElBQUksR0FBRyxHQUFHLFVBQVMsQ0FBZTs0QkFDakMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUN0QixNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDOUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNaLENBQUMsQ0FBQTt3QkFDRCxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDN0IsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDNUIsQ0FBQyxDQUFDLEVBQUM7OztLQUNIO0lBRWEsc0JBQWUsR0FBN0IsVUFBOEIsT0FBZSxFQUFFLEtBQWUsRUFBRSxVQUFlLEVBQUUsR0FBUSxFQUFFLE1BQWdCLEVBQUUsTUFBZSxFQUFFLEtBQWEsRUFBRSxJQUFZLEVBQUUsTUFBaUI7UUFDM0ssR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRUQsc0JBQWtCLHlCQUFlO2FBQWpDO1lBQ0MsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVtQiwyQkFBb0IsR0FBeEMsVUFBeUMsT0FBZSxFQUFFLEtBQWUsRUFBRSxVQUFlLEVBQUUsR0FBUSxFQUFFLE1BQWdCLEVBQUUsTUFBZSxFQUFFLEtBQWEsRUFBRSxJQUFZLEVBQUUsTUFBaUI7OztnQkFDdEwsc0JBQU8sSUFBSSxPQUFPLENBQWtCLFVBQUMsT0FBTzt3QkFDM0MsSUFBSSxHQUFHLEdBQUcsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFvQixDQUFDO3dCQUN6QyxJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUM7NEJBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDZCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ1QsSUFBSSxHQUFHLEdBQUcsVUFBUyxDQUFpQjs0QkFDbkMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUN0QixNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDaEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNaLENBQUMsQ0FBQTt3QkFDRCxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDL0IsTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUM5RixDQUFDLENBQUMsRUFBQzs7O0tBQ0g7SUFFYSw4QkFBdUIsR0FBckM7UUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELHNCQUFrQixpQ0FBdUI7YUFBekM7WUFDQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7SUFFbUIsbUNBQTRCLEdBQWhEOzs7Z0JBQ0Msc0JBQU8sSUFBSSxPQUFPLENBQTBCLFVBQUMsT0FBTzt3QkFDbkQsSUFBSSxHQUFHLEdBQUcsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUE0QixDQUFDO3dCQUNqRCxJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUM7NEJBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDZCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ1QsSUFBSSxHQUFHLEdBQUcsVUFBUyxDQUF5Qjs0QkFDM0MsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUN0QixNQUFNLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUN4QyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1osQ0FBQyxDQUFBO3dCQUNELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3ZDLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO29CQUNsQyxDQUFDLENBQUMsRUFBQzs7O0tBQ0g7SUFFYSw2QkFBc0IsR0FBcEMsVUFBcUMsT0FBZTtRQUNuRCxHQUFHLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxzQkFBa0IsZ0NBQXNCO2FBQXhDO1lBQ0MsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBRW1CLGtDQUEyQixHQUEvQyxVQUFnRCxPQUFlOzs7Z0JBQzlELHNCQUFPLElBQUksT0FBTyxDQUF5QixVQUFDLE9BQU87d0JBQ2xELElBQUksR0FBRyxHQUFHLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBMkIsQ0FBQzt3QkFDaEQsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDOzRCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNULElBQUksR0FBRyxHQUFHLFVBQVMsQ0FBd0I7NEJBQzFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDdEIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDdkMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNaLENBQUMsQ0FBQTt3QkFDRCxNQUFNLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN0QyxNQUFNLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3hDLENBQUMsQ0FBQyxFQUFDOzs7S0FDSDtJQUVhLDJCQUFvQixHQUFsQyxVQUFtQyxNQUFjO1FBQ2hELEdBQUcsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELHNCQUFrQiw4QkFBb0I7YUFBdEM7WUFDQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFFbUIsZ0NBQXlCLEdBQTdDLFVBQThDLE1BQWM7OztnQkFDM0Qsc0JBQU8sSUFBSSxPQUFPLENBQXVCLFVBQUMsT0FBTzt3QkFDaEQsSUFBSSxHQUFHLEdBQUcsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUF5QixDQUFDO3dCQUM5QyxJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUM7NEJBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDZCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ1QsSUFBSSxHQUFHLEdBQUcsVUFBUyxDQUFzQjs0QkFDeEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUN0QixNQUFNLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNyQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1osQ0FBQyxDQUFBO3dCQUNELE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3BDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDckMsQ0FBQyxDQUFDLEVBQUM7OztLQUNIO0lBRWEsc0JBQWUsR0FBN0IsVUFBOEIsSUFBWTtRQUN6QyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsc0JBQWtCLHlCQUFlO2FBQWpDO1lBQ0MsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVtQiwyQkFBb0IsR0FBeEMsVUFBeUMsSUFBWTs7O2dCQUNwRCxzQkFBTyxJQUFJLE9BQU8sQ0FBa0IsVUFBQyxPQUFPO3dCQUMzQyxJQUFJLEdBQUcsR0FBRyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQW9CLENBQUM7d0JBQ3pDLElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQzs0QkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNkLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDVCxJQUFJLEdBQUcsR0FBRyxVQUFTLENBQWlCOzRCQUNuQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQ3RCLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNoQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1osQ0FBQyxDQUFBO3dCQUNELE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUMvQixNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM5QixDQUFDLENBQUMsRUFBQzs7O0tBQ0g7SUFFYSxzQkFBZSxHQUE3QixVQUE4QixNQUFjO1FBQzNDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxzQkFBa0IseUJBQWU7YUFBakM7WUFDQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRW1CLDJCQUFvQixHQUF4QyxVQUF5QyxNQUFjOzs7Z0JBQ3RELHNCQUFPLElBQUksT0FBTyxDQUFrQixVQUFDLE9BQU87d0JBQzNDLElBQUksR0FBRyxHQUFHLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBb0IsQ0FBQzt3QkFDekMsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDOzRCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNULElBQUksR0FBRyxHQUFHLFVBQVMsQ0FBaUI7NEJBQ25DLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDdEIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ2hDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDWixDQUFDLENBQUE7d0JBQ0QsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQy9CLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2hDLENBQUMsQ0FBQyxFQUFDOzs7S0FDSDtJQUVhLHdCQUFpQixHQUEvQixVQUFnQyxNQUFjO1FBQzdDLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHNCQUFrQiwyQkFBaUI7YUFBbkM7WUFDQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFFbUIsNkJBQXNCLEdBQTFDLFVBQTJDLE1BQWM7OztnQkFDeEQsc0JBQU8sSUFBSSxPQUFPLENBQW9CLFVBQUMsT0FBTzt3QkFDN0MsSUFBSSxHQUFHLEdBQUcsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFzQixDQUFDO3dCQUMzQyxJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUM7NEJBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDZCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ1QsSUFBSSxHQUFHLEdBQUcsVUFBUyxDQUFtQjs0QkFDckMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUN0QixNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNsQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1osQ0FBQyxDQUFBO3dCQUNELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2pDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDbEMsQ0FBQyxDQUFDLEVBQUM7OztLQUNIO0lBRUQsc0JBQWtCLGtDQUF3QjthQUExQztZQUNDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFrQiwrQkFBcUI7YUFBdkM7WUFDQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBa0Isb0NBQTBCO2FBQTVDO1lBQ0MsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsc0JBQWtCLGlDQUF1QjthQUF6QztZQUNDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFrQiwrQkFBcUI7YUFBdkM7WUFDQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBa0IsaUNBQXVCO2FBQXpDO1lBQ0MsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBRUQsc0JBQWtCLCtCQUFxQjthQUF2QztZQUNDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFrQixvQ0FBMEI7YUFBNUM7WUFDQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUM7UUFDN0MsQ0FBQzs7O09BQUE7SUFFRCxzQkFBa0Isa0NBQXdCO2FBQTFDO1lBQ0MsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO1FBQzNDLENBQUM7OztPQUFBO0lBRUQsc0JBQWtCLHNDQUE0QjthQUE5QztZQUNDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUNGLGFBQUM7QUFBRCxDQTFlQSxBQTBlQyxJQUFBOzs7OztBQzVlRCx3Q0FBbUM7QUFDbkMscURBQWdEO0FBQ2hELHFEQUFzRDtBQUd0RDtJQUE2QyxtQ0FBZTtJQUV4RDtlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUVZLCtCQUFLLEdBQWxCLFVBQW1CLE1BQWlCLEVBQUUsUUFBbUI7UUFBdEMsdUJBQUEsRUFBQSxVQUFpQjtRQUFFLHlCQUFBLEVBQUEsWUFBbUI7Ozs7Z0JBQ3JELEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDeEIsSUFBSSxHQUFHLGtCQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksa0JBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4RSxzQkFBTyxJQUFJLE9BQU8sQ0FBZ0IsVUFBQSxPQUFPO3dCQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVMsRUFBRSxFQUFFLElBQUk7NEJBQ2xFLElBQUcsQ0FBQyxFQUFFLEVBQUM7Z0NBQ0gsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUUsRUFBa0IsQ0FBQyxDQUFDOzZCQUN4QztpQ0FBTTtnQ0FDSCxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dDQUNwQixJQUFJLFVBQVEsR0FBRyxVQUFTLENBQWU7b0NBQ25DLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFRLENBQUMsQ0FBQztvQ0FDdEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNmLENBQUMsQ0FBQztnQ0FDRixHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsVUFBUSxDQUFDLENBQUM7NkJBQ3hDO3dCQUNMLENBQUMsQ0FBQyxDQUFBO29CQUNOLENBQUMsQ0FBQyxFQUFDOzs7S0FDTjtJQUVZLG1DQUFTLEdBQXRCLFVBQXVCLElBQVcsRUFBQyxPQUFjLEVBQUMsTUFBYTs7O2dCQUMzRCxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQzdCLHNCQUFPLElBQUksT0FBTyxDQUFnQixVQUFBLE9BQU87d0JBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVMsRUFBRSxFQUFFLElBQUk7NEJBQ3ZELElBQUcsQ0FBQyxFQUFFLEVBQUM7Z0NBQ0gsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUUsRUFBa0IsQ0FBQyxDQUFDOzZCQUN4QztpQ0FBTTtnQ0FDSCxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dDQUNwQixJQUFJLFVBQVEsR0FBRyxVQUFTLENBQWU7b0NBQ25DLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFRLENBQUMsQ0FBQztvQ0FDdEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNmLENBQUMsQ0FBQztnQ0FDRixHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsVUFBUSxDQUFDLENBQUM7NkJBQ3hDO3dCQUNMLENBQUMsQ0FBQyxDQUFBO29CQUNOLENBQUMsQ0FBQyxFQUFDOzs7S0FDTjtJQUVZLDRDQUFrQixHQUEvQjs7OztnQkFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsZ0lBQWdJLENBQUM7Z0JBQ2xLLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLHNCQUFJLENBQUMsR0FBRyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFBO2dCQUN2QyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JDLHNCQUFPLElBQUksT0FBTyxDQUFjLFVBQUEsT0FBTzt3QkFDbkMsT0FBTyxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDbEMsQ0FBQyxDQUFDLEVBQUM7OztLQUNOO0lBRU0sMENBQWdCLEdBQXZCO1FBQ0ksT0FBTztZQUNILElBQUksRUFBQyxrQkFBUSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztZQUN0QyxJQUFJLEVBQUMsa0JBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7U0FDekMsQ0FBQTtJQUNMLENBQUM7SUFDTCxzQkFBQztBQUFELENBOURBLEFBOERDLENBOUQ0Qyx5QkFBZSxHQThEM0Q7Ozs7O0FDbEVELElBQVksSUFLWDtBQUxELFdBQVksSUFBSTtJQUVaLCtCQUFRLENBQUE7SUFDUiw2QkFBTyxDQUFBO0lBQ1AsaUNBQVMsQ0FBQTtBQUNiLENBQUMsRUFMVyxJQUFJLEdBQUosWUFBSSxLQUFKLFlBQUksUUFLZjtBQUNEO0lBQUE7UUFFVyxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGFBQVEsR0FBVyxFQUFFLENBQUMsQ0FBTyxPQUFPO1FBQ3BDLGNBQVMsR0FBVyxFQUFFLENBQUMsQ0FBTSxPQUFPO1FBQ3BDLFdBQU0sR0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUksT0FBTztRQUNwQyxZQUFPLEdBQVcsRUFBRSxDQUFDLENBQVEsT0FBTztRQUNwQyxhQUFRLEdBQVcsRUFBRSxDQUFDLENBQU8sT0FBTztRQUNwQyxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLFNBQUksR0FBVyxFQUFFLENBQUM7SUFVN0IsQ0FBQztJQVJVLDhCQUFRLEdBQWY7UUFFSSxPQUFPLDJCQUEyQixHQUFHLElBQUksQ0FBQyxRQUFRO2NBQzVDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTO2NBQ25DLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTTtjQUM3QixhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUk7Y0FDekIsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUM5QyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLGtDQUFXO0FBdUJ4QjtJQUFBO1FBRVcsU0FBSSxHQUFZLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLG9DQUFZO0FBS3pCO0lBQUE7SUF3QkEsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0F4QkEsQUF3QkMsSUFBQTtBQXhCWSxnQ0FBVTtBQTBCdkI7SUFBQTtJQUlBLENBQUM7SUFBRCxtQkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksb0NBQVk7QUFNekIsc0JBQXNCO0FBQ3RCLElBQVksT0FRWDtBQVJELFdBQVksT0FBTztJQUVmLHlEQUFrQixDQUFBO0lBQ2xCLG1FQUF1QixDQUFBO0lBQ3ZCLG1EQUFlLENBQUE7SUFDZixxREFBZ0IsQ0FBQTtJQUNoQiw2RUFBNEIsQ0FBQTtJQUM1QixpREFBYyxDQUFBO0FBQ2xCLENBQUMsRUFSVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFRbEI7QUFDRDtJQVVJO1FBUlUsbUJBQWMsR0FBZSxJQUFJLENBQUM7UUFDbEMsb0JBQWUsR0FBZ0IsSUFBSSxDQUFDO1FBQ3BDLHFCQUFnQixHQUFpQixJQUFJLENBQUM7UUFPNUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBUEQsc0JBQWtCLDZCQUFVO2FBQTVCO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQU1ZLCtCQUFLLEdBQWxCLFVBQW1CLE1BQWtCLEVBQUMsUUFBb0I7UUFBdkMsdUJBQUEsRUFBQSxVQUFrQjtRQUFDLHlCQUFBLEVBQUEsWUFBb0I7OztnQkFDdEQsc0JBQU8sSUFBSSxFQUFDOzs7S0FDZjtJQUVZLG1DQUFTLEdBQXRCLFVBQXVCLElBQVcsRUFBQyxPQUFjLEVBQUMsTUFBYTs7O2dCQUMzRCxzQkFBTyxJQUFJLEVBQUM7OztLQUNmO0lBRVksNENBQWtCLEdBQS9COzs7Z0JBQ0ksc0JBQU8sSUFBSSxFQUFDOzs7S0FDZjtJQUVZLDZDQUFtQixHQUFoQzs7OztnQkFDSSxzQkFBTyxJQUFJLE9BQU8sQ0FBZSxVQUFBLE9BQU87d0JBQ3BDLE9BQU8sQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDbkMsQ0FBQyxDQUFDLEVBQUM7OztLQUNOO0lBRU0sMENBQWdCLEdBQXZCO1FBQ0ksT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRVksbUNBQVMsR0FBdEI7OztnQkFDSSxzQkFBTyxJQUFJLE9BQU8sQ0FBVSxVQUFBLE9BQU87d0JBQy9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEIsQ0FBQyxDQUFDLEVBQUM7OztLQUNOO0lBRU0sK0JBQUssR0FBWixVQUFhLEtBQVksRUFBRSxNQUFhLEVBQUUsS0FBWTtRQUNsRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQTlDQSxBQThDQyxJQUFBOzs7OztBQ3hIRCxxREFBZ0Q7QUFNaEQ7SUFBbUMsaUNBQWU7SUFHOUM7UUFBQSxZQUNJLGlCQUFPLFNBUVY7UUFQRyxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsRUFBRSxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDO1lBQ3JDLFlBQVksRUFBRSxJQUFJO1lBQ2xCLE9BQU8sRUFBRTtnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNCLENBQUM7U0FDSixDQUFDLENBQUM7O0lBQ1AsQ0FBQztJQUVhLDJDQUFtQixHQUFqQzs7O2dCQUVJLHNCQUFPLElBQUksT0FBTyxDQUFVLFVBQUEsT0FBTzt3QkFDL0IsRUFBRSxDQUFDLFVBQVUsQ0FBQzs0QkFDVixPQUFPLEVBQUUsVUFBUyxHQUFHO2dDQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7NEJBQy9DLENBQUM7NEJBQ0QsSUFBSSxFQUFFO2dDQUNGLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDbkIsQ0FBQzt5QkFDSixDQUFDLENBQUE7b0JBQ04sQ0FBQyxDQUFDLEVBQUM7OztLQUNOO0lBRVksaUNBQVMsR0FBdEI7Ozs7NEJBQ1cscUJBQU0sSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUE7NEJBQXZDLHNCQUFPLFNBQWdDLEVBQUM7Ozs7S0FDM0M7SUFFYSx3Q0FBZ0IsR0FBOUI7OztnQkFFSSxzQkFBTyxJQUFJLE9BQU8sQ0FBTSxVQUFBLE9BQU87d0JBQzNCLEVBQUUsQ0FBQyxXQUFXLENBQUM7NEJBQ1gsT0FBTyxFQUFDLFVBQUEsR0FBRztnQ0FDUCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUMxQixDQUFDOzRCQUNELElBQUksRUFBRSxVQUFBLEdBQUc7Z0NBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0NBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDbEIsQ0FBQzt5QkFDSixDQUFDLENBQUM7b0JBQ1AsQ0FBQyxDQUFDLEVBQUM7OztLQUNOO0lBRVksNkJBQUssR0FBbEIsVUFBbUIsTUFBaUIsRUFBRSxRQUFtQjtRQUF0Qyx1QkFBQSxFQUFBLFVBQWlCO1FBQUUseUJBQUEsRUFBQSxZQUFtQjs7Ozs7OzRCQUN2QyxxQkFBTSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBQTs7d0JBQXpDLE9BQU8sR0FBRyxTQUErQjs7OzZCQUN2QyxDQUFDLE9BQU87d0JBQ0EscUJBQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUE7O3dCQUF6QyxPQUFPLEdBQUcsU0FBK0IsQ0FBQzs7NEJBRTlCLHFCQUFNLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFBOzt3QkFBNUMsU0FBUyxHQUFHLFNBQWdDOzs7NkJBQzFDLENBQUMsU0FBUzt3QkFDQSxxQkFBTSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBQTs7d0JBQTVDLFNBQVMsR0FBRyxTQUFnQyxDQUFDOzs7d0JBRTdDLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO3dCQUN0QyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7d0JBQzlCLHNCQUFPLElBQUksT0FBTyxDQUFnQixVQUFBLE9BQU87Z0NBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLFVBQVMsRUFBRSxFQUFFLElBQUk7b0NBQzdHLElBQUcsQ0FBQyxFQUFFLEVBQUM7d0NBQ0gsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUUsRUFBa0IsQ0FBQyxDQUFDO3FDQUN4Qzt5Q0FBTTt3Q0FDSCxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFBO3dDQUNuQixJQUFJLFVBQVEsR0FBRyxVQUFTLENBQWU7NENBQ25DLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFRLENBQUMsQ0FBQzs0Q0FDdEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dDQUNmLENBQUMsQ0FBQzt3Q0FDRixHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsVUFBUSxDQUFDLENBQUM7cUNBQ3hDO2dDQUNMLENBQUMsQ0FBQyxDQUFDOzRCQUNQLENBQUMsQ0FBQyxFQUFDOzs7O0tBQ047SUFFWSwwQ0FBa0IsR0FBL0I7Ozs7Ozs0QkFDdUIscUJBQU0sSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUE7O3dCQUEvQyxJQUFJLEdBQVcsU0FBZ0M7NkJBQ3hDLElBQUksRUFBSix3QkFBSTt3QkFBRyxxQkFBTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs7d0JBQTdCLEtBQUEsU0FBNkIsQ0FBQTs7NEJBQUcscUJBQU0sSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUE7O3dCQUFqQyxLQUFBLFNBQWlDLENBQUE7Ozt3QkFBL0UsSUFBSSxLQUEyRTt3QkFDbkYsSUFBRyxJQUFJLEVBQUU7NEJBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDdkIsc0JBQU8sSUFBSSxPQUFPLENBQWMsVUFBQSxPQUFPO29DQUNuQyxPQUFPLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dDQUNsQyxDQUFDLENBQUMsRUFBQzt5QkFDTjs2QkFBTTs0QkFDSCxzQkFBTyxJQUFJLE9BQU8sQ0FBYyxVQUFBLE9BQU87b0NBQ25DLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQ0FDbEIsQ0FBQyxDQUFDLEVBQUM7eUJBQ047Ozs7O0tBQ0o7SUFFWSwyQ0FBbUIsR0FBaEM7Ozs7Z0JBRUksd0RBQXdEO2dCQUN4RCxzQkFBTyxJQUFJLE9BQU8sQ0FBZSxVQUFBLE9BQU87d0JBQ3BDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NEJBQ0wsT0FBTyxFQUFFLFVBQUEsR0FBRztnQ0FDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dDQUNqQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0NBQ3RDLE9BQU8sQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs0QkFDbkMsQ0FBQzs0QkFDRCxJQUFJLEVBQUUsVUFBQSxHQUFHO2dDQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0NBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDbEIsQ0FBQzt5QkFDSixDQUFDLENBQUM7b0JBQ1AsQ0FBQyxDQUFDLEVBQUM7OztLQUNOO0lBRU8sNENBQW9CLEdBQTVCO1FBRUksSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1lBQ2pDLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFDLE9BQU87WUFDWixJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRTtnQkFDSCxJQUFJLEVBQUUsQ0FBQztnQkFDUCxHQUFHLEVBQUUsQ0FBQztnQkFDTixLQUFLLEVBQUUsSUFBSTtnQkFDWCxNQUFNLEVBQUUsSUFBSTtnQkFDWixVQUFVLEVBQUUsRUFBRTtnQkFDZCxTQUFTLEVBQUUsUUFBUTtnQkFDbkIsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osWUFBWSxFQUFFLENBQUM7YUFDbEI7U0FDSixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxPQUFPLElBQUksT0FBTyxDQUFNLFVBQUEsT0FBTztZQUMzQixNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRztnQkFDbEIsSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFO29CQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztvQkFDcEMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3pCO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDakI7WUFDTCxDQUFDLENBQ0osQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVTLG1DQUFXLEdBQXJCLFVBQXNCLElBQVM7UUFFM0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzFDLENBQUM7SUFFTSxxQ0FBYSxHQUFwQjtRQUVJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2QyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2pELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDN0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNyRCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ25ELElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3JELElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNqRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztJQUVNLDZCQUFLLEdBQVosVUFBYSxLQUFZLEVBQUUsTUFBYSxFQUFFLEtBQVk7UUFDbEQsT0FBTyxJQUFJLE9BQU8sQ0FBVSxVQUFBLE9BQU87WUFDL0IsRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDZixLQUFLLEVBQUUsS0FBSztnQkFDWixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osT0FBTyxFQUFFO29CQUVMLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixDQUFDO2dCQUNELElBQUksRUFBRTtvQkFFRixPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSx3Q0FBZ0IsR0FBdkI7UUFDSSxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUMzQyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQWhNQSxBQWdNQyxDQWhNa0MseUJBQWUsR0FnTWpEO0FBaE1ZLHNDQUFhOzs7O0FDVDFCOztFQUVFO0FBQ0Y7SUFhSTtJQUFjLENBQUM7SUFDUixlQUFJLEdBQVg7UUFDSSxJQUFJLEdBQUcsR0FBYSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUNqRCxDQUFDO0lBZk0sZ0JBQUssR0FBUSxHQUFHLENBQUM7SUFDakIsaUJBQU0sR0FBUSxJQUFJLENBQUM7SUFDbkIsb0JBQVMsR0FBUSxZQUFZLENBQUM7SUFDOUIscUJBQVUsR0FBUSxNQUFNLENBQUM7SUFDekIsaUJBQU0sR0FBUSxLQUFLLENBQUM7SUFDcEIsaUJBQU0sR0FBUSxNQUFNLENBQUM7SUFDckIscUJBQVUsR0FBSyxzQkFBc0IsQ0FBQztJQUN0QyxvQkFBUyxHQUFRLEVBQUUsQ0FBQztJQUNwQixnQkFBSyxHQUFTLEtBQUssQ0FBQztJQUNwQixlQUFJLEdBQVMsS0FBSyxDQUFDO0lBQ25CLHVCQUFZLEdBQVMsS0FBSyxDQUFDO0lBQzNCLDRCQUFpQixHQUFTLElBQUksQ0FBQztJQUsxQyxpQkFBQztDQWpCRCxBQWlCQyxJQUFBO2tCQWpCb0IsVUFBVTtBQWtCL0IsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDOzs7O0FDdEJsQiwyQ0FBc0M7QUFDdEMsMERBQXFEO0FBQ3JELDBEQUFxRDtBQUdyRDtJQUVJO1FBRUYsZ0JBQWdCO1FBQ2hCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQVUsQ0FBQyxLQUFLLEVBQUUsb0JBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7WUFDbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBVSxDQUFDLEtBQUssRUFBRSxvQkFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsb0JBQVUsQ0FBQyxTQUFTLENBQUM7UUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsb0JBQVUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsb0JBQVUsQ0FBQyxpQkFBaUIsQ0FBQztRQUUxRCxvREFBb0Q7UUFDcEQsSUFBSSxvQkFBVSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNO1lBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDOUYsSUFBSSxvQkFBVSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzRixJQUFJLG9CQUFVLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUc3QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixnREFBZ0Q7UUFDaEQsdUlBQXVJO0lBQ3hJLENBQUM7SUFFRSxvQ0FBZSxHQUFmO1FBR0YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsaUNBQWlDLENBQUE7UUFDbEQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVLLHlCQUFJLEdBQVY7Ozs7Ozt3QkFDQyxnQkFBTSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsQ0FBQyxVQUFDLENBQTBCOzRCQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUNmLENBQUMsQ0FBQyxDQUFBO3dCQUNRLHFCQUFNLGtCQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFBOzt3QkFBckMsR0FBRyxHQUFHLFNBQStCO3dCQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUVOLHFCQUFNLGdCQUFNLENBQUMseUJBQXlCLEVBQUUsRUFBQTs7d0JBQS9DLElBQUksR0FBRyxTQUF3Qzt3QkFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7S0FHbEI7SUFFRSxtQ0FBYyxHQUFkO0lBRUgsQ0FBQztJQUNGLGlCQUFDO0FBQUQsQ0FuREEsQUFtREMsSUFBQTtBQUdELE9BQU87QUFDUCxJQUFJLFVBQVUsRUFBRSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBBbnRGcmFtZUNvbmZpZyBmcm9tIFwiLi9BbnRGcmFtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgQW50TmV0IGZyb20gJy4vTmV0L0FudE5ldCc7XHJcbmltcG9ydCBBbnRQbGF0Zm9ybUJhc2UgZnJvbSAnLi9QbGF0Zm9ybS9BbnRQbGF0Zm9ybUJhc2UnO1xyXG5pbXBvcnQgQW50UGxhdGZvcm1NaW5lIGZyb20gJy4vUGxhdGZvcm0vQW50TWluZSc7XHJcbmltcG9ydCB7IEFudFBsYXRmb3JtV1ggfSBmcm9tICcuL1BsYXRmb3JtL0FudFdYJztcclxuZGVjbGFyZSB2YXIgbmV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW50RnJhbWUgXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgTG9jYXRpb25VcmxQYXJhbShuYW1lOnN0cmluZyk6c3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgaWYoTGF5YS5Ccm93c2VyLm9uV2VpWGluKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChcIihefCYpXCIgKyBuYW1lICsgXCI9KFteJl0qKSgmfCQpXCIpO1xyXG4gICAgICAgIHZhciByID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkubWF0Y2gocmVnKTtcclxuICAgICAgICBpZiAociAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmVzY2FwZShyWzJdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIFJhbmROYW1lKG1pbiwgbWF4LCByYW5kb21GbGFnOmJvb2xlYW49dHJ1ZSl7XHJcbiAgICAgICAgbGV0IHN0ciA9IFwiXCI7XHJcbiAgICAgICAgbGV0IHJhbmdlID0gbWluO1xyXG4gICAgICAgIGxldCBhcnIgPSBbJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAnZycsICdoJywgJ2knLCAnaicsICdrJywgJ2wnLCAnbScsICduJywgJ28nLCAncCcsICdxJywgJ3InLCAncycsICd0JywgJ3UnLCAndicsICd3JywgJ3gnLCAneScsICd6JywgJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onLCAnSycsICdMJywgJ00nLCAnTicsICdPJywgJ1AnLCAnUScsICdSJywgJ1MnLCAnVCcsICdVJywgJ1YnLCAnVycsICdYJywgJ1knLCAnWiddO1xyXG4gICAgICAgIGlmKHJhbmRvbUZsYWcpe1xyXG4gICAgICAgICAgICByYW5nZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXgtbWluKSkgKyBtaW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHJhbmdlOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGFyci5sZW5ndGgtMSkpO1xyXG4gICAgICAgICAgICBzdHIgKz0gYXJyW3Bvc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc1BsYXRmb3JtOkFudFBsYXRmb3JtQmFzZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBwbGF0Zm9ybSgpOkFudFBsYXRmb3JtQmFzZXtcclxuICAgICAgICBpZighQW50RnJhbWUuX2luc1BsYXRmb3JtKXtcclxuICAgICAgICAgICAgaWYoTGF5YS5Ccm93c2VyLm9uV2VpWGluKSB7XHJcbiAgICAgICAgICAgICAgICBBbnRGcmFtZS5faW5zUGxhdGZvcm0gPSBuZXcgQW50UGxhdGZvcm1XWCgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIEFudEZyYW1lLl9pbnNQbGF0Zm9ybSA9IG5ldyBBbnRQbGF0Zm9ybU1pbmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQW50RnJhbWUuX2luc1BsYXRmb3JtO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7R2FtZXJMb2dpblMyQywgR2FtZXJMb2dpbkdldERhdGFTMkMsIFNlcnZlclRpbWVTMkMsIEdhbWVyU3ViQ2hhdENoYW5uZWxTMkMsIEdhbWVyRnJpZW5kQ2hhdFMyQywgR2FtZXJXb3JsZENoYXRTMkMsIEdhbWVyVGVzdENoYXRTMkMsIEdhbWVyQ2x1YlJlcXVlc3RTMkMsIEdhbWVyTmV3RnJpZW5kUmVxUzJDLCBHYW1lclByb2Nlc3NGcmllbmRSZXFTMkMsIEdhbWVyTWF0Y2hTMkMsIFBWUElucHV0LCBQVlBSZXN1bHQsIEdhbWVyUFZQU3luY1MyQywgR2FtZXJHZXRSZWFsVGltZVJhbmtTMkMsIEdhbWVyQ2hlY2tQVlBCYXR0bGVTMkMsIFdYSW5mbywgR2FtZXJVcGxvYWRXWEluZm9TMkMsIEdhbWVyTmV3Um9vbVMyQywgR2FtZXJBZGRSb29tUzJDLCBHYW1lckxlYXZlUm9vbVMyQ30gZnJvbSBcIi4vcHJvdG9cIjtcclxuXHJcbmRlY2xhcmUgdmFyIG5ldDtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW50TmV0XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG9uRXJyb3IoKXtcclxuXHRcdHJldHVybiBuZXQubG9naWMub25FcnJvcjtcclxuXHR9XHJcblx0cHVibGljIHN0YXRpYyBnZXQgb25Db25uZWN0KCl7XHJcblx0XHRyZXR1cm4gbmV0LmxvZ2ljLm9uQ29ubmVjdDtcclxuXHR9XHJcblx0cHVibGljIHN0YXRpYyBnZXQgb25DbG9zZSgpe1xyXG5cdFx0cmV0dXJuIG5ldC5sb2dpYy5vbkNsb3NlO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIGdldCBvblJlY29ubmVjdCgpe1xyXG5cdFx0cmV0dXJuIG5ldC5sb2dpYy5vblJlY29ubmVjdDtcclxuXHR9XHJcblx0cHVibGljIHN0YXRpYyBnZXQgbG9naWNQaW5nKCkge1xyXG5cdFx0cmV0dXJuIG5ldC5sb2dpYy5waW5nO1xyXG5cdH1cclxuXHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgR2FtZXJMb2dpbkMyUyhzZXNzaW9uOiBzdHJpbmcsIGFkZHI6IHN0cmluZyl7XHJcblx0XHRuZXQubG9naWMuZ2FtZXJMb2dpbkMyUyhzZXNzaW9uLCBhZGRyKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0IGdhbWVyTG9naW5TMkMoKXtcclxuXHRcdHJldHVybiBuZXQubG9naWMuZ2FtZXJMb2dpblMyQztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgYXN5bmMgQXN5bmNHYW1lckxvZ2luQzJTKHNlc3Npb246IHN0cmluZywgYWRkcjogc3RyaW5nKTpQcm9taXNlPEdhbWVyTG9naW5TMkM+e1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPEdhbWVyTG9naW5TMkM+KChyZXNvbHZlKT0+e1xyXG5cdFx0XHRsZXQgczJjID0ge2Vycm9yOjIwMH0gYXMgR2FtZXJMb2dpblMyQztcclxuXHRcdFx0bGV0IHRpbWVPYmogPSBzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0cmVzb2x2ZShzMmMpO1xyXG5cdFx0XHR9LCA1MDAwKTtcclxuXHRcdFx0bGV0IGZ1biA9IGZ1bmN0aW9uKGU6R2FtZXJMb2dpblMyQyl7XHJcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVPYmopO1xyXG5cdFx0XHRcdEFudE5ldC5nYW1lckxvZ2luUzJDLm9mZihmdW4pO1xyXG5cdFx0XHRcdHJlc29sdmUoZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0QW50TmV0LmdhbWVyTG9naW5TMkMub24oZnVuKTtcclxuXHRcdFx0QW50TmV0LkdhbWVyTG9naW5DMlMoc2Vzc2lvbiwgYWRkcik7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgR2FtZXJMb2dpbkdldERhdGFDMlMoKXtcclxuXHRcdG5ldC5sb2dpYy5nYW1lckxvZ2luR2V0RGF0YUMyUygpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXQgZ2FtZXJMb2dpbkdldERhdGFTMkMoKXtcclxuXHRcdHJldHVybiBuZXQubG9naWMuZ2FtZXJMb2dpbkdldERhdGFTMkM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGFzeW5jIEFzeW5jR2FtZXJMb2dpbkdldERhdGFDMlMoKTpQcm9taXNlPEdhbWVyTG9naW5HZXREYXRhUzJDPntcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxHYW1lckxvZ2luR2V0RGF0YVMyQz4oKHJlc29sdmUpPT57XHJcblx0XHRcdGxldCBzMmMgPSB7ZXJyb3I6MjAwfSBhcyBHYW1lckxvZ2luR2V0RGF0YVMyQztcclxuXHRcdFx0bGV0IHRpbWVPYmogPSBzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0cmVzb2x2ZShzMmMpO1xyXG5cdFx0XHR9LCA1MDAwKTtcclxuXHRcdFx0bGV0IGZ1biA9IGZ1bmN0aW9uKGU6R2FtZXJMb2dpbkdldERhdGFTMkMpe1xyXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lT2JqKTtcclxuXHRcdFx0XHRBbnROZXQuZ2FtZXJMb2dpbkdldERhdGFTMkMub2ZmKGZ1bik7XHJcblx0XHRcdFx0cmVzb2x2ZShlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRBbnROZXQuZ2FtZXJMb2dpbkdldERhdGFTMkMub24oZnVuKTtcclxuXHRcdFx0QW50TmV0LkdhbWVyTG9naW5HZXREYXRhQzJTKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgU2VydmVyVGltZUMyUygpe1xyXG5cdFx0bmV0LmxvZ2ljLnNlcnZlclRpbWVDMlMoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0IHNlcnZlclRpbWVTMkMoKXtcclxuXHRcdHJldHVybiBuZXQubG9naWMuc2VydmVyVGltZVMyQztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgYXN5bmMgQXN5bmNTZXJ2ZXJUaW1lQzJTKCk6UHJvbWlzZTxTZXJ2ZXJUaW1lUzJDPntcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxTZXJ2ZXJUaW1lUzJDPigocmVzb2x2ZSk9PntcclxuXHRcdFx0bGV0IHMyYyA9IHtlcnJvcjoyMDB9IGFzIFNlcnZlclRpbWVTMkM7XHJcblx0XHRcdGxldCB0aW1lT2JqID0gc2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdHJlc29sdmUoczJjKTtcclxuXHRcdFx0fSwgNTAwMCk7XHJcblx0XHRcdGxldCBmdW4gPSBmdW5jdGlvbihlOlNlcnZlclRpbWVTMkMpe1xyXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lT2JqKTtcclxuXHRcdFx0XHRBbnROZXQuc2VydmVyVGltZVMyQy5vZmYoZnVuKTtcclxuXHRcdFx0XHRyZXNvbHZlKGUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdEFudE5ldC5zZXJ2ZXJUaW1lUzJDLm9uKGZ1bik7XHJcblx0XHRcdEFudE5ldC5TZXJ2ZXJUaW1lQzJTKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgR2FtZXJTdWJDaGF0Q2hhbm5lbEMyUyhjaGFubmVsOiBudW1iZXIsIG9wZW46IGJvb2xlYW4pe1xyXG5cdFx0bmV0LmxvZ2ljLmdhbWVyU3ViQ2hhdENoYW5uZWxDMlMoY2hhbm5lbCwgb3Blbik7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldCBnYW1lclN1YkNoYXRDaGFubmVsUzJDKCl7XHJcblx0XHRyZXR1cm4gbmV0LmxvZ2ljLmdhbWVyU3ViQ2hhdENoYW5uZWxTMkM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGFzeW5jIEFzeW5jR2FtZXJTdWJDaGF0Q2hhbm5lbEMyUyhjaGFubmVsOiBudW1iZXIsIG9wZW46IGJvb2xlYW4pOlByb21pc2U8R2FtZXJTdWJDaGF0Q2hhbm5lbFMyQz57XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8R2FtZXJTdWJDaGF0Q2hhbm5lbFMyQz4oKHJlc29sdmUpPT57XHJcblx0XHRcdGxldCBzMmMgPSB7ZXJyb3I6MjAwfSBhcyBHYW1lclN1YkNoYXRDaGFubmVsUzJDO1xyXG5cdFx0XHRsZXQgdGltZU9iaiA9IHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRyZXNvbHZlKHMyYyk7XHJcblx0XHRcdH0sIDUwMDApO1xyXG5cdFx0XHRsZXQgZnVuID0gZnVuY3Rpb24oZTpHYW1lclN1YkNoYXRDaGFubmVsUzJDKXtcclxuXHRcdFx0XHRjbGVhclRpbWVvdXQodGltZU9iaik7XHJcblx0XHRcdFx0QW50TmV0LmdhbWVyU3ViQ2hhdENoYW5uZWxTMkMub2ZmKGZ1bik7XHJcblx0XHRcdFx0cmVzb2x2ZShlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRBbnROZXQuZ2FtZXJTdWJDaGF0Q2hhbm5lbFMyQy5vbihmdW4pO1xyXG5cdFx0XHRBbnROZXQuR2FtZXJTdWJDaGF0Q2hhbm5lbEMyUyhjaGFubmVsLCBvcGVuKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBHYW1lckZyaWVuZENoYXRDMlModG9JZDogbnVtYmVyLCBtc2c6IHN0cmluZyl7XHJcblx0XHRuZXQubG9naWMuZ2FtZXJGcmllbmRDaGF0QzJTKHRvSWQsIG1zZyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldCBnYW1lckZyaWVuZENoYXRTMkMoKXtcclxuXHRcdHJldHVybiBuZXQubG9naWMuZ2FtZXJGcmllbmRDaGF0UzJDO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBhc3luYyBBc3luY0dhbWVyRnJpZW5kQ2hhdEMyUyh0b0lkOiBudW1iZXIsIG1zZzogc3RyaW5nKTpQcm9taXNlPEdhbWVyRnJpZW5kQ2hhdFMyQz57XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8R2FtZXJGcmllbmRDaGF0UzJDPigocmVzb2x2ZSk9PntcclxuXHRcdFx0bGV0IHMyYyA9IHtlcnJvcjoyMDB9IGFzIEdhbWVyRnJpZW5kQ2hhdFMyQztcclxuXHRcdFx0bGV0IHRpbWVPYmogPSBzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0cmVzb2x2ZShzMmMpO1xyXG5cdFx0XHR9LCA1MDAwKTtcclxuXHRcdFx0bGV0IGZ1biA9IGZ1bmN0aW9uKGU6R2FtZXJGcmllbmRDaGF0UzJDKXtcclxuXHRcdFx0XHRjbGVhclRpbWVvdXQodGltZU9iaik7XHJcblx0XHRcdFx0QW50TmV0LmdhbWVyRnJpZW5kQ2hhdFMyQy5vZmYoZnVuKTtcclxuXHRcdFx0XHRyZXNvbHZlKGUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdEFudE5ldC5nYW1lckZyaWVuZENoYXRTMkMub24oZnVuKTtcclxuXHRcdFx0QW50TmV0LkdhbWVyRnJpZW5kQ2hhdEMyUyh0b0lkLCBtc2cpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIEdhbWVyV29ybGRDaGF0QzJTKHNlcnZlcjogbnVtYmVyLCBtc2c6IHN0cmluZyl7XHJcblx0XHRuZXQubG9naWMuZ2FtZXJXb3JsZENoYXRDMlMoc2VydmVyLCBtc2cpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXQgZ2FtZXJXb3JsZENoYXRTMkMoKXtcclxuXHRcdHJldHVybiBuZXQubG9naWMuZ2FtZXJXb3JsZENoYXRTMkM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGFzeW5jIEFzeW5jR2FtZXJXb3JsZENoYXRDMlMoc2VydmVyOiBudW1iZXIsIG1zZzogc3RyaW5nKTpQcm9taXNlPEdhbWVyV29ybGRDaGF0UzJDPntcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxHYW1lcldvcmxkQ2hhdFMyQz4oKHJlc29sdmUpPT57XHJcblx0XHRcdGxldCBzMmMgPSB7ZXJyb3I6MjAwfSBhcyBHYW1lcldvcmxkQ2hhdFMyQztcclxuXHRcdFx0bGV0IHRpbWVPYmogPSBzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0cmVzb2x2ZShzMmMpO1xyXG5cdFx0XHR9LCA1MDAwKTtcclxuXHRcdFx0bGV0IGZ1biA9IGZ1bmN0aW9uKGU6R2FtZXJXb3JsZENoYXRTMkMpe1xyXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lT2JqKTtcclxuXHRcdFx0XHRBbnROZXQuZ2FtZXJXb3JsZENoYXRTMkMub2ZmKGZ1bik7XHJcblx0XHRcdFx0cmVzb2x2ZShlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRBbnROZXQuZ2FtZXJXb3JsZENoYXRTMkMub24oZnVuKTtcclxuXHRcdFx0QW50TmV0LkdhbWVyV29ybGRDaGF0QzJTKHNlcnZlciwgbXNnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBHYW1lclRlc3RDaGF0QzJTKHRvSWQ6IG51bWJlciwgbXNnOiBzdHJpbmcpe1xyXG5cdFx0bmV0LmxvZ2ljLmdhbWVyVGVzdENoYXRDMlModG9JZCwgbXNnKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0IGdhbWVyVGVzdENoYXRTMkMoKXtcclxuXHRcdHJldHVybiBuZXQubG9naWMuZ2FtZXJUZXN0Q2hhdFMyQztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgYXN5bmMgQXN5bmNHYW1lclRlc3RDaGF0QzJTKHRvSWQ6IG51bWJlciwgbXNnOiBzdHJpbmcpOlByb21pc2U8R2FtZXJUZXN0Q2hhdFMyQz57XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8R2FtZXJUZXN0Q2hhdFMyQz4oKHJlc29sdmUpPT57XHJcblx0XHRcdGxldCBzMmMgPSB7ZXJyb3I6MjAwfSBhcyBHYW1lclRlc3RDaGF0UzJDO1xyXG5cdFx0XHRsZXQgdGltZU9iaiA9IHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRyZXNvbHZlKHMyYyk7XHJcblx0XHRcdH0sIDUwMDApO1xyXG5cdFx0XHRsZXQgZnVuID0gZnVuY3Rpb24oZTpHYW1lclRlc3RDaGF0UzJDKXtcclxuXHRcdFx0XHRjbGVhclRpbWVvdXQodGltZU9iaik7XHJcblx0XHRcdFx0QW50TmV0LmdhbWVyVGVzdENoYXRTMkMub2ZmKGZ1bik7XHJcblx0XHRcdFx0cmVzb2x2ZShlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRBbnROZXQuZ2FtZXJUZXN0Q2hhdFMyQy5vbihmdW4pO1xyXG5cdFx0XHRBbnROZXQuR2FtZXJUZXN0Q2hhdEMyUyh0b0lkLCBtc2cpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIEdhbWVyQ2x1YlJlcXVlc3RDMlMoY2x1YklkOiBudW1iZXIsIG1zZzogc3RyaW5nKXtcclxuXHRcdG5ldC5sb2dpYy5nYW1lckNsdWJSZXF1ZXN0QzJTKGNsdWJJZCwgbXNnKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0IGdhbWVyQ2x1YlJlcXVlc3RTMkMoKXtcclxuXHRcdHJldHVybiBuZXQubG9naWMuZ2FtZXJDbHViUmVxdWVzdFMyQztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgYXN5bmMgQXN5bmNHYW1lckNsdWJSZXF1ZXN0QzJTKGNsdWJJZDogbnVtYmVyLCBtc2c6IHN0cmluZyk6UHJvbWlzZTxHYW1lckNsdWJSZXF1ZXN0UzJDPntcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxHYW1lckNsdWJSZXF1ZXN0UzJDPigocmVzb2x2ZSk9PntcclxuXHRcdFx0bGV0IHMyYyA9IHtlcnJvcjoyMDB9IGFzIEdhbWVyQ2x1YlJlcXVlc3RTMkM7XHJcblx0XHRcdGxldCB0aW1lT2JqID0gc2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdHJlc29sdmUoczJjKTtcclxuXHRcdFx0fSwgNTAwMCk7XHJcblx0XHRcdGxldCBmdW4gPSBmdW5jdGlvbihlOkdhbWVyQ2x1YlJlcXVlc3RTMkMpe1xyXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lT2JqKTtcclxuXHRcdFx0XHRBbnROZXQuZ2FtZXJDbHViUmVxdWVzdFMyQy5vZmYoZnVuKTtcclxuXHRcdFx0XHRyZXNvbHZlKGUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdEFudE5ldC5nYW1lckNsdWJSZXF1ZXN0UzJDLm9uKGZ1bik7XHJcblx0XHRcdEFudE5ldC5HYW1lckNsdWJSZXF1ZXN0QzJTKGNsdWJJZCwgbXNnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBHYW1lck5ld0ZyaWVuZFJlcUMyUyhvaWQ6IG51bWJlciwgbXNnOiBzdHJpbmcpe1xyXG5cdFx0bmV0LmxvZ2ljLmdhbWVyTmV3RnJpZW5kUmVxQzJTKG9pZCwgbXNnKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0IGdhbWVyTmV3RnJpZW5kUmVxUzJDKCl7XHJcblx0XHRyZXR1cm4gbmV0LmxvZ2ljLmdhbWVyTmV3RnJpZW5kUmVxUzJDO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBhc3luYyBBc3luY0dhbWVyTmV3RnJpZW5kUmVxQzJTKG9pZDogbnVtYmVyLCBtc2c6IHN0cmluZyk6UHJvbWlzZTxHYW1lck5ld0ZyaWVuZFJlcVMyQz57XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8R2FtZXJOZXdGcmllbmRSZXFTMkM+KChyZXNvbHZlKT0+e1xyXG5cdFx0XHRsZXQgczJjID0ge2Vycm9yOjIwMH0gYXMgR2FtZXJOZXdGcmllbmRSZXFTMkM7XHJcblx0XHRcdGxldCB0aW1lT2JqID0gc2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdHJlc29sdmUoczJjKTtcclxuXHRcdFx0fSwgNTAwMCk7XHJcblx0XHRcdGxldCBmdW4gPSBmdW5jdGlvbihlOkdhbWVyTmV3RnJpZW5kUmVxUzJDKXtcclxuXHRcdFx0XHRjbGVhclRpbWVvdXQodGltZU9iaik7XHJcblx0XHRcdFx0QW50TmV0LmdhbWVyTmV3RnJpZW5kUmVxUzJDLm9mZihmdW4pO1xyXG5cdFx0XHRcdHJlc29sdmUoZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0QW50TmV0LmdhbWVyTmV3RnJpZW5kUmVxUzJDLm9uKGZ1bik7XHJcblx0XHRcdEFudE5ldC5HYW1lck5ld0ZyaWVuZFJlcUMyUyhvaWQsIG1zZyk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgR2FtZXJQcm9jZXNzRnJpZW5kUmVxQzJTKG9pZDogbnVtYmVyLCByZXN1bHQ6IGJvb2xlYW4pe1xyXG5cdFx0bmV0LmxvZ2ljLmdhbWVyUHJvY2Vzc0ZyaWVuZFJlcUMyUyhvaWQsIHJlc3VsdCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldCBnYW1lclByb2Nlc3NGcmllbmRSZXFTMkMoKXtcclxuXHRcdHJldHVybiBuZXQubG9naWMuZ2FtZXJQcm9jZXNzRnJpZW5kUmVxUzJDO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBhc3luYyBBc3luY0dhbWVyUHJvY2Vzc0ZyaWVuZFJlcUMyUyhvaWQ6IG51bWJlciwgcmVzdWx0OiBib29sZWFuKTpQcm9taXNlPEdhbWVyUHJvY2Vzc0ZyaWVuZFJlcVMyQz57XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8R2FtZXJQcm9jZXNzRnJpZW5kUmVxUzJDPigocmVzb2x2ZSk9PntcclxuXHRcdFx0bGV0IHMyYyA9IHtlcnJvcjoyMDB9IGFzIEdhbWVyUHJvY2Vzc0ZyaWVuZFJlcVMyQztcclxuXHRcdFx0bGV0IHRpbWVPYmogPSBzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0cmVzb2x2ZShzMmMpO1xyXG5cdFx0XHR9LCA1MDAwKTtcclxuXHRcdFx0bGV0IGZ1biA9IGZ1bmN0aW9uKGU6R2FtZXJQcm9jZXNzRnJpZW5kUmVxUzJDKXtcclxuXHRcdFx0XHRjbGVhclRpbWVvdXQodGltZU9iaik7XHJcblx0XHRcdFx0QW50TmV0LmdhbWVyUHJvY2Vzc0ZyaWVuZFJlcVMyQy5vZmYoZnVuKTtcclxuXHRcdFx0XHRyZXNvbHZlKGUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdEFudE5ldC5nYW1lclByb2Nlc3NGcmllbmRSZXFTMkMub24oZnVuKTtcclxuXHRcdFx0QW50TmV0LkdhbWVyUHJvY2Vzc0ZyaWVuZFJlcUMyUyhvaWQsIHJlc3VsdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgR2FtZXJNYXRjaEMyUyh0eXBlOiBudW1iZXIpe1xyXG5cdFx0bmV0LmxvZ2ljLmdhbWVyTWF0Y2hDMlModHlwZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldCBnYW1lck1hdGNoUzJDKCl7XHJcblx0XHRyZXR1cm4gbmV0LmxvZ2ljLmdhbWVyTWF0Y2hTMkM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGFzeW5jIEFzeW5jR2FtZXJNYXRjaEMyUyh0eXBlOiBudW1iZXIpOlByb21pc2U8R2FtZXJNYXRjaFMyQz57XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8R2FtZXJNYXRjaFMyQz4oKHJlc29sdmUpPT57XHJcblx0XHRcdGxldCBzMmMgPSB7ZXJyb3I6MjAwfSBhcyBHYW1lck1hdGNoUzJDO1xyXG5cdFx0XHRsZXQgdGltZU9iaiA9IHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRyZXNvbHZlKHMyYyk7XHJcblx0XHRcdH0sIDUwMDApO1xyXG5cdFx0XHRsZXQgZnVuID0gZnVuY3Rpb24oZTpHYW1lck1hdGNoUzJDKXtcclxuXHRcdFx0XHRjbGVhclRpbWVvdXQodGltZU9iaik7XHJcblx0XHRcdFx0QW50TmV0LmdhbWVyTWF0Y2hTMkMub2ZmKGZ1bik7XHJcblx0XHRcdFx0cmVzb2x2ZShlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRBbnROZXQuZ2FtZXJNYXRjaFMyQy5vbihmdW4pO1xyXG5cdFx0XHRBbnROZXQuR2FtZXJNYXRjaEMyUyh0eXBlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBHYW1lclBWUFN5bmNDMlMoc2Vzc2lvbjogc3RyaW5nLCBpbnB1dDogUFZQSW5wdXQsIG5lZWRGcmFtZXM6IGFueSwgY3JjOiBhbnksIGFnZW50czogUFZQSW5wdXQsIHJlY29ubjogYm9vbGVhbiwgaW5kZXg6IG51bWJlciwgYWRkcjogc3RyaW5nLCByZXN1bHQ6IFBWUFJlc3VsdCl7XHJcblx0XHRuZXQubG9naWMuZ2FtZXJQVlBTeW5jQzJTKHNlc3Npb24sIGlucHV0LCBuZWVkRnJhbWVzLCBjcmMsIGFnZW50cywgcmVjb25uLCBpbmRleCwgYWRkciwgcmVzdWx0KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0IGdhbWVyUFZQU3luY1MyQygpe1xyXG5cdFx0cmV0dXJuIG5ldC5sb2dpYy5nYW1lclBWUFN5bmNTMkM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGFzeW5jIEFzeW5jR2FtZXJQVlBTeW5jQzJTKHNlc3Npb246IHN0cmluZywgaW5wdXQ6IFBWUElucHV0LCBuZWVkRnJhbWVzOiBhbnksIGNyYzogYW55LCBhZ2VudHM6IFBWUElucHV0LCByZWNvbm46IGJvb2xlYW4sIGluZGV4OiBudW1iZXIsIGFkZHI6IHN0cmluZywgcmVzdWx0OiBQVlBSZXN1bHQpOlByb21pc2U8R2FtZXJQVlBTeW5jUzJDPntcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxHYW1lclBWUFN5bmNTMkM+KChyZXNvbHZlKT0+e1xyXG5cdFx0XHRsZXQgczJjID0ge2Vycm9yOjIwMH0gYXMgR2FtZXJQVlBTeW5jUzJDO1xyXG5cdFx0XHRsZXQgdGltZU9iaiA9IHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRyZXNvbHZlKHMyYyk7XHJcblx0XHRcdH0sIDUwMDApO1xyXG5cdFx0XHRsZXQgZnVuID0gZnVuY3Rpb24oZTpHYW1lclBWUFN5bmNTMkMpe1xyXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lT2JqKTtcclxuXHRcdFx0XHRBbnROZXQuZ2FtZXJQVlBTeW5jUzJDLm9mZihmdW4pO1xyXG5cdFx0XHRcdHJlc29sdmUoZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0QW50TmV0LmdhbWVyUFZQU3luY1MyQy5vbihmdW4pO1xyXG5cdFx0XHRBbnROZXQuR2FtZXJQVlBTeW5jQzJTKHNlc3Npb24sIGlucHV0LCBuZWVkRnJhbWVzLCBjcmMsIGFnZW50cywgcmVjb25uLCBpbmRleCwgYWRkciwgcmVzdWx0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBHYW1lckdldFJlYWxUaW1lUmFua0MyUygpe1xyXG5cdFx0bmV0LmxvZ2ljLmdhbWVyR2V0UmVhbFRpbWVSYW5rQzJTKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldCBnYW1lckdldFJlYWxUaW1lUmFua1MyQygpe1xyXG5cdFx0cmV0dXJuIG5ldC5sb2dpYy5nYW1lckdldFJlYWxUaW1lUmFua1MyQztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgYXN5bmMgQXN5bmNHYW1lckdldFJlYWxUaW1lUmFua0MyUygpOlByb21pc2U8R2FtZXJHZXRSZWFsVGltZVJhbmtTMkM+e1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPEdhbWVyR2V0UmVhbFRpbWVSYW5rUzJDPigocmVzb2x2ZSk9PntcclxuXHRcdFx0bGV0IHMyYyA9IHtlcnJvcjoyMDB9IGFzIEdhbWVyR2V0UmVhbFRpbWVSYW5rUzJDO1xyXG5cdFx0XHRsZXQgdGltZU9iaiA9IHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRyZXNvbHZlKHMyYyk7XHJcblx0XHRcdH0sIDUwMDApO1xyXG5cdFx0XHRsZXQgZnVuID0gZnVuY3Rpb24oZTpHYW1lckdldFJlYWxUaW1lUmFua1MyQyl7XHJcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVPYmopO1xyXG5cdFx0XHRcdEFudE5ldC5nYW1lckdldFJlYWxUaW1lUmFua1MyQy5vZmYoZnVuKTtcclxuXHRcdFx0XHRyZXNvbHZlKGUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdEFudE5ldC5nYW1lckdldFJlYWxUaW1lUmFua1MyQy5vbihmdW4pO1xyXG5cdFx0XHRBbnROZXQuR2FtZXJHZXRSZWFsVGltZVJhbmtDMlMoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBHYW1lckNoZWNrUFZQQmF0dGxlQzJTKHNlc3Npb246IHN0cmluZyl7XHJcblx0XHRuZXQubG9naWMuZ2FtZXJDaGVja1BWUEJhdHRsZUMyUyhzZXNzaW9uKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0IGdhbWVyQ2hlY2tQVlBCYXR0bGVTMkMoKXtcclxuXHRcdHJldHVybiBuZXQubG9naWMuZ2FtZXJDaGVja1BWUEJhdHRsZVMyQztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgYXN5bmMgQXN5bmNHYW1lckNoZWNrUFZQQmF0dGxlQzJTKHNlc3Npb246IHN0cmluZyk6UHJvbWlzZTxHYW1lckNoZWNrUFZQQmF0dGxlUzJDPntcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxHYW1lckNoZWNrUFZQQmF0dGxlUzJDPigocmVzb2x2ZSk9PntcclxuXHRcdFx0bGV0IHMyYyA9IHtlcnJvcjoyMDB9IGFzIEdhbWVyQ2hlY2tQVlBCYXR0bGVTMkM7XHJcblx0XHRcdGxldCB0aW1lT2JqID0gc2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdHJlc29sdmUoczJjKTtcclxuXHRcdFx0fSwgNTAwMCk7XHJcblx0XHRcdGxldCBmdW4gPSBmdW5jdGlvbihlOkdhbWVyQ2hlY2tQVlBCYXR0bGVTMkMpe1xyXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lT2JqKTtcclxuXHRcdFx0XHRBbnROZXQuZ2FtZXJDaGVja1BWUEJhdHRsZVMyQy5vZmYoZnVuKTtcclxuXHRcdFx0XHRyZXNvbHZlKGUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdEFudE5ldC5nYW1lckNoZWNrUFZQQmF0dGxlUzJDLm9uKGZ1bik7XHJcblx0XHRcdEFudE5ldC5HYW1lckNoZWNrUFZQQmF0dGxlQzJTKHNlc3Npb24pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIEdhbWVyVXBsb2FkV1hJbmZvQzJTKHd4SW5mbzogV1hJbmZvKXtcclxuXHRcdG5ldC5sb2dpYy5nYW1lclVwbG9hZFdYSW5mb0MyUyh3eEluZm8pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXQgZ2FtZXJVcGxvYWRXWEluZm9TMkMoKXtcclxuXHRcdHJldHVybiBuZXQubG9naWMuZ2FtZXJVcGxvYWRXWEluZm9TMkM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGFzeW5jIEFzeW5jR2FtZXJVcGxvYWRXWEluZm9DMlMod3hJbmZvOiBXWEluZm8pOlByb21pc2U8R2FtZXJVcGxvYWRXWEluZm9TMkM+e1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPEdhbWVyVXBsb2FkV1hJbmZvUzJDPigocmVzb2x2ZSk9PntcclxuXHRcdFx0bGV0IHMyYyA9IHtlcnJvcjoyMDB9IGFzIEdhbWVyVXBsb2FkV1hJbmZvUzJDO1xyXG5cdFx0XHRsZXQgdGltZU9iaiA9IHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRyZXNvbHZlKHMyYyk7XHJcblx0XHRcdH0sIDUwMDApO1xyXG5cdFx0XHRsZXQgZnVuID0gZnVuY3Rpb24oZTpHYW1lclVwbG9hZFdYSW5mb1MyQyl7XHJcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVPYmopO1xyXG5cdFx0XHRcdEFudE5ldC5nYW1lclVwbG9hZFdYSW5mb1MyQy5vZmYoZnVuKTtcclxuXHRcdFx0XHRyZXNvbHZlKGUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdEFudE5ldC5nYW1lclVwbG9hZFdYSW5mb1MyQy5vbihmdW4pO1xyXG5cdFx0XHRBbnROZXQuR2FtZXJVcGxvYWRXWEluZm9DMlMod3hJbmZvKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBHYW1lck5ld1Jvb21DMlModHlwZTogbnVtYmVyKXtcclxuXHRcdG5ldC5sb2dpYy5nYW1lck5ld1Jvb21DMlModHlwZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldCBnYW1lck5ld1Jvb21TMkMoKXtcclxuXHRcdHJldHVybiBuZXQubG9naWMuZ2FtZXJOZXdSb29tUzJDO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBhc3luYyBBc3luY0dhbWVyTmV3Um9vbUMyUyh0eXBlOiBudW1iZXIpOlByb21pc2U8R2FtZXJOZXdSb29tUzJDPntcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxHYW1lck5ld1Jvb21TMkM+KChyZXNvbHZlKT0+e1xyXG5cdFx0XHRsZXQgczJjID0ge2Vycm9yOjIwMH0gYXMgR2FtZXJOZXdSb29tUzJDO1xyXG5cdFx0XHRsZXQgdGltZU9iaiA9IHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRyZXNvbHZlKHMyYyk7XHJcblx0XHRcdH0sIDUwMDApO1xyXG5cdFx0XHRsZXQgZnVuID0gZnVuY3Rpb24oZTpHYW1lck5ld1Jvb21TMkMpe1xyXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lT2JqKTtcclxuXHRcdFx0XHRBbnROZXQuZ2FtZXJOZXdSb29tUzJDLm9mZihmdW4pO1xyXG5cdFx0XHRcdHJlc29sdmUoZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0QW50TmV0LmdhbWVyTmV3Um9vbVMyQy5vbihmdW4pO1xyXG5cdFx0XHRBbnROZXQuR2FtZXJOZXdSb29tQzJTKHR5cGUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIEdhbWVyQWRkUm9vbUMyUyhyb29tSWQ6IG51bWJlcil7XHJcblx0XHRuZXQubG9naWMuZ2FtZXJBZGRSb29tQzJTKHJvb21JZCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldCBnYW1lckFkZFJvb21TMkMoKXtcclxuXHRcdHJldHVybiBuZXQubG9naWMuZ2FtZXJBZGRSb29tUzJDO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBhc3luYyBBc3luY0dhbWVyQWRkUm9vbUMyUyhyb29tSWQ6IG51bWJlcik6UHJvbWlzZTxHYW1lckFkZFJvb21TMkM+e1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPEdhbWVyQWRkUm9vbVMyQz4oKHJlc29sdmUpPT57XHJcblx0XHRcdGxldCBzMmMgPSB7ZXJyb3I6MjAwfSBhcyBHYW1lckFkZFJvb21TMkM7XHJcblx0XHRcdGxldCB0aW1lT2JqID0gc2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdHJlc29sdmUoczJjKTtcclxuXHRcdFx0fSwgNTAwMCk7XHJcblx0XHRcdGxldCBmdW4gPSBmdW5jdGlvbihlOkdhbWVyQWRkUm9vbVMyQyl7XHJcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVPYmopO1xyXG5cdFx0XHRcdEFudE5ldC5nYW1lckFkZFJvb21TMkMub2ZmKGZ1bik7XHJcblx0XHRcdFx0cmVzb2x2ZShlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRBbnROZXQuZ2FtZXJBZGRSb29tUzJDLm9uKGZ1bik7XHJcblx0XHRcdEFudE5ldC5HYW1lckFkZFJvb21DMlMocm9vbUlkKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBHYW1lckxlYXZlUm9vbUMyUyhyb29tSWQ6IG51bWJlcil7XHJcblx0XHRuZXQubG9naWMuZ2FtZXJMZWF2ZVJvb21DMlMocm9vbUlkKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0IGdhbWVyTGVhdmVSb29tUzJDKCl7XHJcblx0XHRyZXR1cm4gbmV0LmxvZ2ljLmdhbWVyTGVhdmVSb29tUzJDO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBhc3luYyBBc3luY0dhbWVyTGVhdmVSb29tQzJTKHJvb21JZDogbnVtYmVyKTpQcm9taXNlPEdhbWVyTGVhdmVSb29tUzJDPntcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxHYW1lckxlYXZlUm9vbVMyQz4oKHJlc29sdmUpPT57XHJcblx0XHRcdGxldCBzMmMgPSB7ZXJyb3I6MjAwfSBhcyBHYW1lckxlYXZlUm9vbVMyQztcclxuXHRcdFx0bGV0IHRpbWVPYmogPSBzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0cmVzb2x2ZShzMmMpO1xyXG5cdFx0XHR9LCA1MDAwKTtcclxuXHRcdFx0bGV0IGZ1biA9IGZ1bmN0aW9uKGU6R2FtZXJMZWF2ZVJvb21TMkMpe1xyXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lT2JqKTtcclxuXHRcdFx0XHRBbnROZXQuZ2FtZXJMZWF2ZVJvb21TMkMub2ZmKGZ1bik7XHJcblx0XHRcdFx0cmVzb2x2ZShlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRBbnROZXQuZ2FtZXJMZWF2ZVJvb21TMkMub24oZnVuKTtcclxuXHRcdFx0QW50TmV0LkdhbWVyTGVhdmVSb29tQzJTKHJvb21JZCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0IGdhbWVyTm90aWZ5TG9naW5PdGhlclMyQygpe1xyXG5cdFx0cmV0dXJuIG5ldC5sb2dpYy5nYW1lck5vdGlmeUxvZ2luT3RoZXJTMkM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldCBnYW1lck5vdGlmeU5ld0NoYXRTMkMoKXtcclxuXHRcdHJldHVybiBuZXQubG9naWMuZ2FtZXJOb3RpZnlOZXdDaGF0UzJDO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXQgZ2FtZXJOb3RpZnlOZXdGcmllbmRSZXFTMkMoKXtcclxuXHRcdHJldHVybiBuZXQubG9naWMuZ2FtZXJOb3RpZnlOZXdGcmllbmRSZXFTMkM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldCBnYW1lck5vdGlmeU5ld0ZyaWVuZFMyQygpe1xyXG5cdFx0cmV0dXJuIG5ldC5sb2dpYy5nYW1lck5vdGlmeU5ld0ZyaWVuZFMyQztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0IGdhbWVyTm90aWZ5TmV3TWFpbFMyQygpe1xyXG5cdFx0cmV0dXJuIG5ldC5sb2dpYy5nYW1lck5vdGlmeU5ld01haWxTMkM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldCBnYW1lck5vdGlmeU1hdGNoSW5mb1MyQygpe1xyXG5cdFx0cmV0dXJuIG5ldC5sb2dpYy5nYW1lck5vdGlmeU1hdGNoSW5mb1MyQztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0IGdhbWVyTm90aWZ5UFZQU3luY1MyQygpe1xyXG5cdFx0cmV0dXJuIG5ldC5sb2dpYy5nYW1lck5vdGlmeVBWUFN5bmNTMkM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldCBnYW1lck5vdGlmeU5ld1BWUFJlc3VsdFMyQygpe1xyXG5cdFx0cmV0dXJuIG5ldC5sb2dpYy5nYW1lck5vdGlmeU5ld1BWUFJlc3VsdFMyQztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0IGdhbWVyTm90aWZ5SWNvbkNoYW5nZVMyQygpe1xyXG5cdFx0cmV0dXJuIG5ldC5sb2dpYy5nYW1lck5vdGlmeUljb25DaGFuZ2VTMkM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldCBnYW1lck5vdGlmeVJvb21JbmZvQ2hhbmdlUzJDKCl7XHJcblx0XHRyZXR1cm4gbmV0LmxvZ2ljLmdhbWVyTm90aWZ5Um9vbUluZm9DaGFuZ2VTMkM7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgR2FtZXJMb2dpblMyQyB9IGZyb20gXCIuLi9OZXQvcHJvdG9cIjtcclxuaW1wb3J0IEFudEZyYW1lIGZyb20gJy4uL0FudEZyYW1lJztcclxuaW1wb3J0IEFudFBsYXRmb3JtQmFzZSBmcm9tICcuL0FudFBsYXRmb3JtQmFzZSc7XHJcbmltcG9ydCB7IFNka1VzZXJJbmZvLCBlU2V4IH0gZnJvbSAnLi9BbnRQbGF0Zm9ybUJhc2UnO1xyXG5cclxuZGVjbGFyZSB2YXIgbmV0O1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbnRQbGF0Zm9ybU1pbmUgZXh0ZW5kcyBBbnRQbGF0Zm9ybUJhc2Vcclxue1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgTG9naW4oc2VydmVyOm51bWJlciA9IDEsIHJvbGV0eXBlOm51bWJlciA9IDEpOiBQcm9taXNlPEdhbWVyTG9naW5TMkM+IHtcclxuICAgICAgICBuZXQuY29uZmlnLmNoYW5uZWwgPSBcIm1pbmVcIjtcclxuICAgICAgICBsZXQgbmFtZSA9IEFudEZyYW1lLkxvY2F0aW9uVXJsUGFyYW0oXCJuYW1lXCIpIHx8IEFudEZyYW1lLlJhbmROYW1lKDIsIDcpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxHYW1lckxvZ2luUzJDPihyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgbmV0LmF1dGgubWluZUxvZ2luKG5hbWUsIFwiXCIsIG5hbWUsIHJvbGV0eXBlLCBzZXJ2ZXIsIGZ1bmN0aW9uKG9rLCBqc29uKXtcclxuICAgICAgICAgICAgICAgIGlmKCFvayl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7ZXJyb3I6NDV9IGFzIEdhbWVyTG9naW5TMkMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXQubG9naWMuY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYWxsYmFjayA9IGZ1bmN0aW9uKGU6R2FtZXJMb2dpblMyQyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldC5sb2dpYy5nYW1lckxvZ2luUzJDLm9mZihjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBuZXQubG9naWMuZ2FtZXJMb2dpblMyQy5vbihjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIEZhc3RMb2dpbihuYW1lOnN0cmluZyxjaGFubmVsOnN0cmluZyxvcGVuaWQ6c3RyaW5nKTogUHJvbWlzZTxHYW1lckxvZ2luUzJDPntcclxuICAgICAgICBuZXQuY29uZmlnLmNoYW5uZWwgPSBjaGFubmVsO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxHYW1lckxvZ2luUzJDPihyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgbmV0LmF1dGguZmFzdExvZ2luKG5hbWUsIGNoYW5uZWwsIG9wZW5pZCwgZnVuY3Rpb24ob2ssIGpzb24pe1xyXG4gICAgICAgICAgICAgICAgaWYoIW9rKXtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtlcnJvcjo0NX0gYXMgR2FtZXJMb2dpblMyQyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldC5sb2dpYy5jb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhbGxiYWNrID0gZnVuY3Rpb24oZTpHYW1lckxvZ2luUzJDKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV0LmxvZ2ljLmdhbWVyTG9naW5TMkMub2ZmKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShlKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldC5sb2dpYy5nYW1lckxvZ2luUzJDLm9uKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgR2FtZURvU2RrQXV0aEFzeW5jKCkgOiBQcm9taXNlPFNka1VzZXJJbmZvPiB7XHJcbiAgICAgICAgdGhpcy5tX3N0U2RrVXNlckluZm8ubmlja05hbWUgPSBcIkFOVE1JTkUtTklDS05BTUVcIjtcclxuICAgICAgICB0aGlzLm1fc3RTZGtVc2VySW5mby5hdmF0YXJVcmwgPSBcImh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL1EwajRUd0dUZlRLcG1wbnhmWWVlVXFGT2x3Szl4MjYweGliczg2Nkk3TnBtdUhqZ2VyTFhnVWsxQjc3SHBJbzJvWlAwd0FibmliNExrYzMwTjd5aWJZb3d3LzEzMlwiO1xyXG4gICAgICAgIHRoaXMubV9zdFNka1VzZXJJbmZvLmdlbmRlciA9IGVTZXguTWFuO1xyXG4gICAgICAgIHRoaXMubV9zdFNka1VzZXJJbmZvLmNpdHkgPSBcIuS4iua1t1wiO1xyXG4gICAgICAgIHRoaXMubV9zdFNka1VzZXJJbmZvLmNvdW50cnkgPSBcIuS4reWbvVwiO1xyXG4gICAgICAgIHRoaXMubV9zdFNka1VzZXJJbmZvLmxhbmd1YWdlID0gXCJ6aF9DTlwiXHJcbiAgICAgICAgdGhpcy5tX3N0U2RrVXNlckluZm8ucHJvdmluY2UgPSBcIuS4iua1t1wiO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxTZGtVc2VySW5mbz4ocmVzb2x2ZT0+e1xyXG4gICAgICAgICAgICByZXNvbHZlKHRoaXMubV9zdFNka1VzZXJJbmZvKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0TGF1bmNoT3B0aW9ucygpOmFueSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAga2V5MTpBbnRGcmFtZS5Mb2NhdGlvblVybFBhcmFtKFwia2V5MVwiKSxcclxuICAgICAgICAgICAga2V5MjpBbnRGcmFtZS5Mb2NhdGlvblVybFBhcmFtKFwia2V5MlwiKSxcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59XHJcbiIsImltcG9ydCB7IEdhbWVyTG9naW5TMkMgfSBmcm9tICcuLi9OZXQvcHJvdG8nO1xyXG5cclxuZXhwb3J0IGVudW0gZVNleFxyXG57XHJcbiAgICBOb25lID0gMCxcclxuICAgIE1hbiA9IDEsXHJcbiAgICBXb21hbiA9IDJcclxufVxyXG5leHBvcnQgY2xhc3MgU2RrVXNlckluZm9cclxue1xyXG4gICAgcHVibGljIGxhbmd1YWdlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIG5pY2tOYW1lOiBzdHJpbmcgPSBcIlwiOyAgICAgICAvLyDnjqnlrrbmmLXnp7BcclxuICAgIHB1YmxpYyBhdmF0YXJVcmw6IHN0cmluZyA9IFwiXCI7ICAgICAgLy8g546p5a625aS05YOPXHJcbiAgICBwdWJsaWMgZ2VuZGVyOiBlU2V4ID0gZVNleC5Ob25lOyAgICAvLyDnjqnlrrbmgKfliKtcclxuICAgIHB1YmxpYyBjb3VudHJ5OiBzdHJpbmcgPSBcIlwiOyAgICAgICAgLy8g546p5a625Zu95a62XHJcbiAgICBwdWJsaWMgcHJvdmluY2U6IHN0cmluZyA9IFwiXCI7ICAgICAgIC8vIOeOqeWutuecgeS7vVxyXG4gICAgcHVibGljIGNpdHk6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgdW5pb25JZDogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBvcGVuSWQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgc2Vzc2lvbklkOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIHNpZ246IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgcHVibGljIFRvU3RyaW5nKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBcIiBVc2VySW5mbzo6PGJyLz5OaWNrTmFtZTpcIiArIHRoaXMubmlja05hbWVcclxuICAgICAgICAgICAgKyBcIiw8YnIvPkF2YXRhclVybDpcIiArIHRoaXMuYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICsgXCIsPGJyLz5PcGVuSUQ6XCIgKyB0aGlzLm9wZW5JZFxyXG4gICAgICAgICAgICArIFwiLDxici8+Q2l0eTpcIiArIHRoaXMuY2l0eVxyXG4gICAgICAgICAgICArIFwiLDxici8+U2Vzc2lvbklEOlwiICsgdGhpcy5zZXNzaW9uSWQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNka0xvZ2luSW5mb1xyXG57XHJcbiAgICBwdWJsaWMgY29kZSA6IHN0cmluZyA9IFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTeXN0ZW1JbmZvXHJcbntcclxuICAgIC8qKuaJi+acuuWei+WPtyAqL1xyXG4gICAgbW9kZWw6IHN0cmluZztcclxuICAgIC8qKuiuvuWkh+WDj+e0oOavlCAqL1xyXG4gICAgcGl4ZWxSYXRpbzogbnVtYmVyO1xyXG4gICAgLyoq5bGP5bmV5a695bqmICovXHJcbiAgICBzY3JlZW5XaWR0aDogbnVtYmVyO1xyXG4gICAgLyoq5bGP5bmV6auY5bqmICovXHJcbiAgICBzY3JlZW5IZWlnaHQ6IG51bWJlcjtcclxuICAgIC8qKuWPr+S9v+eUqOeql+WPo+WuveW6piAqL1xyXG4gICAgd2luZG93V2lkdGg6IG51bWJlcjtcclxuICAgIC8qKuWPr+S9v+eUqOeql+WPo+mrmOW6piAqL1xyXG4gICAgd2luZG93SGVpZ2h0OiBudW1iZXI7XHJcbiAgICAvKirlvq7kv6HniYjmnKzlj7cgKi9cclxuICAgIHZlcnNpb246IHN0cmluZztcclxuICAgIC8qKuezu+e7n+S/oeaBryAqL1xyXG4gICAgc3lzdGVtOiBzdHJpbmc7XHJcbiAgICAvKirlubPlj7AgKi9cclxuICAgIHBsYXRmb3JtOiBzdHJpbmc7XHJcbiAgICAvKirmgKfog73nrYnnuqcgKi9cclxuICAgIGJlbmNobWFya0xldmVsOiBudW1iZXI7XHJcbiAgICAvKirlrqLmiLfnq6/ln7rnoYDlupNzZGvniYjmnKzkv6Hmga8gKi9cclxuICAgIFNES1ZlcnNpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlZmVycmVySW5mb1xyXG57XHJcbiAgICBhcHBJZDogc3RyaW5nO1xyXG4gICAgZXh0cmFEYXRhOiBhbnk7XHJcbn1cclxuXHJcbi8qKuWQkW9wZW5kYXRh5Y+R6YCB55qE5pWw5o2u57G75Z6LICovXHJcbmV4cG9ydCBlbnVtIE1zZ1R5cGVcclxue1xyXG4gICAgUmVtb3ZlUmFua0xpc3QgPSAwLCAvLyDnp7vpmaTmjpLooYzlhoXnmoTlhoXlrrlcclxuICAgIEZldGNoRnJpZW5kUmFua0xpc3QgPSAxLCAvLyDojrflj5blpb3lj4vmjpLooYzmppxcclxuICAgIFN1Ym1pdFNjb3JlID0gMywgICAgICAgICAvLyDmj5DkuqTliIbmlbDvvIzmmoLml7bml6DnlKjlm6DkuLrmmK/lnKjmnI3liqHlmajmj5DkuqTliIbmlbBcclxuICAgIEdhbWVPdmVyUmFuayA9IDQsICAgICAgICAvLyDojrflj5blpb3lj4vmjpLooYzmppzmqKrlkJHmjpLliJflsZXnpLrmqKHlvI/vvIzmmoLml7bml6DnlKjvvIzlm6DkuLrml6DmraTpnIDmsYJcclxuICAgIEZldGNoR3JvdXBGcmllbmRSYW5rTGlzdCA9IDUsIC8vIOiOt+WPlue+pOaOkuihjOamnFxyXG4gICAgTm90aWZ5VGltZSA9IDYsICAgICAgICAgIC8vIOmAmuefpeWtkOWfn+W9k+WJjeacjeWKoeWZqOaXtumXtFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFudFBsYXRmb3JtQmFzZVxyXG57XHJcbiAgICBwcm90ZWN0ZWQgbV9zdFN5c3RlbUluZm86IFN5c3RlbUluZm8gPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIG1fc3RTZGtVc2VySW5mbzogU2RrVXNlckluZm8gPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIG1fc3RTZGtMb2dpbkluZm86IFNka0xvZ2luSW5mbyA9IG51bGw7IFxyXG4gICAgXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcGxhdGZvcm1XWCgpOmJvb2xlYW57XHJcbiAgICAgICAgcmV0dXJuIExheWEuQnJvd3Nlci5vbldlaVhpbjtcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubV9zdFN5c3RlbUluZm8gPSBuZXcgU3lzdGVtSW5mbygpO1xyXG4gICAgICAgIHRoaXMubV9zdFNka1VzZXJJbmZvID0gbmV3IFNka1VzZXJJbmZvKCk7XHJcbiAgICAgICAgdGhpcy5tX3N0U2RrTG9naW5JbmZvID0gbmV3IFNka0xvZ2luSW5mbygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFzeW5jIExvZ2luKHNlcnZlcjogbnVtYmVyID0gMSxyb2xldHlwZTogbnVtYmVyID0gMSk6IFByb21pc2U8R2FtZXJMb2dpblMyQz57XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIEZhc3RMb2dpbihuYW1lOnN0cmluZyxjaGFubmVsOnN0cmluZyxvcGVuaWQ6c3RyaW5nKTogUHJvbWlzZTxHYW1lckxvZ2luUzJDPntcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgR2FtZURvU2RrQXV0aEFzeW5jKCk6IFByb21pc2U8U2RrVXNlckluZm8+e1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBHYW1lRG9TZGtMb2dpbkFzeW5jKCk6IFByb21pc2U8U2RrTG9naW5JbmZvPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFNka0xvZ2luSW5mbz4ocmVzb2x2ZT0+e1xyXG4gICAgICAgICAgICByZXNvbHZlKHRoaXMubV9zdFNka0xvZ2luSW5mbyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldExhdW5jaE9wdGlvbnMoKTphbnkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH0gXHJcblxyXG4gICAgcHVibGljIGFzeW5jIFVzZXJDaGVjaygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4ocmVzb2x2ZT0+e1xyXG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBcclxuXHJcbiAgICBwdWJsaWMgU2hhcmUodGl0bGU6c3RyaW5nLCBpbWdVcmw6c3RyaW5nLCBxdWVyeTpzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+e1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBBbnRGcmFtZSBmcm9tICcuLi9BbnRGcmFtZSc7XHJcbmltcG9ydCBBbnRGcmFtZUNvbmZpZyBmcm9tICcuLi9BbnRGcmFtZUNvbmZpZyc7XHJcbmltcG9ydCB7IEdhbWVyTG9naW5TMkMgfSBmcm9tICcuLi9OZXQvcHJvdG8nO1xyXG5pbXBvcnQgeyBNZDUgfSBmcm9tIFwiLi4vVXRpbC9tZDVcIjtcclxuaW1wb3J0IEFudFBsYXRmb3JtQmFzZSBmcm9tICcuL0FudFBsYXRmb3JtQmFzZSc7XHJcbmltcG9ydCB7IFNka1VzZXJJbmZvLCBTZGtMb2dpbkluZm8sIFN5c3RlbUluZm8gfSBmcm9tICcuL0FudFBsYXRmb3JtQmFzZSc7XHJcbmRlY2xhcmUgdmFyIHd4O1xyXG5kZWNsYXJlIHZhciBuZXQ7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdztcclxuXHJcbmV4cG9ydCBjbGFzcyBBbnRQbGF0Zm9ybVdYIGV4dGVuZHMgQW50UGxhdGZvcm1CYXNlXHJcbntcclxuICAgIHB1YmxpYyBtX2ZuRXJyb3JDYWxsYmFjazogYW55O1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTsgXHJcbiAgICAgICAgdGhpcy5HZXRTeXN0ZW1JbmZvKCk7XHJcbiAgICAgICAgd3guc2V0S2VlcFNjcmVlbk9uICYmIHd4LnNldEtlZXBTY3JlZW5Pbih7XHJcbiAgICAgICAgICAgIGtlZXBTY3JlZW5PbjogdHJ1ZSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW4uOS6ruiuvue9ruaIkOWKn++8gVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gXHJcbiAgICBwcml2YXRlIGFzeW5jIFdYR2V0U2RrQXV0aFNldHRpbmcoKTpQcm9taXNlPGJvb2xlYW4+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KHJlc29sdmU9PntcclxuICAgICAgICAgICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBVc2VyQ2hlY2soKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuV1hHZXRTZGtBdXRoU2V0dGluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgV1hHZXRTZGtVc2VySW5mbygpOlByb21pc2U8YW55PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KHJlc29sdmU9PntcclxuICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczpyZXM9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMudXNlckluZm8pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBMb2dpbihzZXJ2ZXI6bnVtYmVyID0gMSwgcm9sZXR5cGU6bnVtYmVyID0gMSk6IFByb21pc2U8R2FtZXJMb2dpblMyQz4ge1xyXG4gICAgICAgIGxldCBzZGtJbmZvID0gYXdhaXQgdGhpcy5HYW1lRG9TZGtBdXRoQXN5bmMoKTtcclxuICAgICAgICB3aGlsZSghc2RrSW5mbykge1xyXG4gICAgICAgICAgICBzZGtJbmZvID0gYXdhaXQgdGhpcy5HYW1lRG9TZGtBdXRoQXN5bmMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvZ2luSW5mbyA9IGF3YWl0IHRoaXMuR2FtZURvU2RrTG9naW5Bc3luYygpO1xyXG4gICAgICAgIHdoaWxlKCFsb2dpbkluZm8pIHtcclxuICAgICAgICAgICAgbG9naW5JbmZvID0gYXdhaXQgdGhpcy5HYW1lRG9TZGtMb2dpbkFzeW5jKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb2RlID0gdGhpcy5tX3N0U2RrTG9naW5JbmZvLmNvZGU7XHJcbiAgICAgICAgbmV0LmNvbmZpZy5jaGFubmVsID0gXCJ3ZWNoYXRcIjtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8R2FtZXJMb2dpblMyQz4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIG5ldC5hdXRoLnNka0xvZ2luKGNvZGUsIFwiXCIsIHRoaXMubV9zdFNka1VzZXJJbmZvLm5pY2tOYW1lLCByb2xldHlwZSwgc2VydmVyLCBzZGtJbmZvLmF2YXRhclVybCwgZnVuY3Rpb24ob2ssIGpzb24pe1xyXG4gICAgICAgICAgICAgICAgaWYoIW9rKXtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtlcnJvcjo0NX0gYXMgR2FtZXJMb2dpblMyQyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldC5sb2dpYy5jb25uZWN0KClcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FsbGJhY2sgPSBmdW5jdGlvbihlOkdhbWVyTG9naW5TMkMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXQubG9naWMuZ2FtZXJMb2dpblMyQy5vZmYoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgbmV0LmxvZ2ljLmdhbWVyTG9naW5TMkMub24oY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgR2FtZURvU2RrQXV0aEFzeW5jKCkgOiBQcm9taXNlPFNka1VzZXJJbmZvPiB7XHJcbiAgICAgICAgbGV0IGZsYWc6Ym9vbGVhbiA9IGF3YWl0IHRoaXMuV1hHZXRTZGtBdXRoU2V0dGluZygpO1xyXG4gICAgICAgIGxldCBpbmZvID0gZmxhZyA/IGF3YWl0IHRoaXMuV1hHZXRTZGtVc2VySW5mbygpIDogYXdhaXQgdGhpcy5XWENyZWF0ZVdYVXNlckJ1dHRvbigpO1xyXG4gICAgICAgIGlmKGluZm8pIHtcclxuICAgICAgICAgICAgdGhpcy5TZXRVc2VySW5mbyhpbmZvKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFNka1VzZXJJbmZvPihyZXNvbHZlPT57XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMubV9zdFNka1VzZXJJbmZvKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFNka1VzZXJJbmZvPihyZXNvbHZlPT57XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIEdhbWVEb1Nka0xvZ2luQXN5bmMoKSA6IFByb21pc2U8U2RrTG9naW5JbmZvPlxyXG4gICAge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJBbnRQbGF0Zm9ybSBXWCBHYW1lIERvIFNkayBMb2dpbiBBc3luY1wiKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8U2RrTG9naW5JbmZvPihyZXNvbHZlPT57XHJcbiAgICAgICAgICAgIHd4LmxvZ2luKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX3N0U2RrTG9naW5JbmZvLmNvZGUgPSByZXMuY29kZTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMubV9zdFNka0xvZ2luSW5mbyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogcmVzPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiBcclxuICAgIHByaXZhdGUgV1hDcmVhdGVXWFVzZXJCdXR0b24oKSA6IFByb21pc2U8YW55PlxyXG4gICAge1xyXG4gICAgICAgIGxldCBidXR0b24gPSB3eC5jcmVhdGVVc2VySW5mb0J1dHRvbih7XHJcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgbGFuZzpcInpoX0NOXCIsXHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogNDAsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBidXR0b24uc2hvdygpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KHJlc29sdmU9PntcclxuICAgICAgICAgICAgYnV0dG9uLm9uVGFwKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid3hMb2dpbiBhdXRoIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLnVzZXJJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi6I635Y+W55So5oi35L+h5oGv5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgU2V0VXNlckluZm8oaW5mbzogYW55KTogYW55XHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihpbmZvKTtcclxuICAgICAgICB0aGlzLm1fc3RTZGtVc2VySW5mby5sYW5ndWFnZSA9IGluZm8ubGFuZ3VhZ2U7XHJcbiAgICAgICAgdGhpcy5tX3N0U2RrVXNlckluZm8ubmlja05hbWUgPSBpbmZvLm5pY2tOYW1lO1xyXG4gICAgICAgIHRoaXMubV9zdFNka1VzZXJJbmZvLmF2YXRhclVybCA9IGluZm8uYXZhdGFyVXJsO1xyXG4gICAgICAgIHRoaXMubV9zdFNka1VzZXJJbmZvLmdlbmRlciA9IGluZm8uZ2VuZGVyO1xyXG4gICAgICAgIHRoaXMubV9zdFNka1VzZXJJbmZvLmNvdW50cnkgPSBpbmZvLmNvdW50cnk7XHJcbiAgICAgICAgdGhpcy5tX3N0U2RrVXNlckluZm8ucHJvdmluY2UgPSBpbmZvLnByb3ZpbmNlO1xyXG4gICAgICAgIHRoaXMubV9zdFNka1VzZXJJbmZvLmNpdHkgPSBpbmZvLmNpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFN5c3RlbUluZm8oKTogU3lzdGVtSW5mb1xyXG4gICAge1xyXG4gICAgICAgIGxldCBpbmZvID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgICAgICB0aGlzLm1fc3RTeXN0ZW1JbmZvLmJlbmNobWFya0xldmVsID0gaW5mby5iZW5jaG1hcmtMZXZlbDtcclxuICAgICAgICB0aGlzLm1fc3RTeXN0ZW1JbmZvLm1vZGVsID0gaW5mby5tb2RlbDtcclxuICAgICAgICB0aGlzLm1fc3RTeXN0ZW1JbmZvLnBpeGVsUmF0aW8gPSBpbmZvLnBpeGVsUmF0aW87XHJcbiAgICAgICAgdGhpcy5tX3N0U3lzdGVtSW5mby5wbGF0Zm9ybSA9IGluZm8ucGxhdGZvcm07XHJcbiAgICAgICAgdGhpcy5tX3N0U3lzdGVtSW5mby5zY3JlZW5IZWlnaHQgPSBpbmZvLnNjcmVlbkhlaWdodDtcclxuICAgICAgICB0aGlzLm1fc3RTeXN0ZW1JbmZvLnNjcmVlbldpZHRoID0gaW5mby5zY3JlZW5XaWR0aDtcclxuICAgICAgICB0aGlzLm1fc3RTeXN0ZW1JbmZvLnN5c3RlbSA9IGluZm8uc3lzdGVtO1xyXG4gICAgICAgIHRoaXMubV9zdFN5c3RlbUluZm8udmVyc2lvbiA9IGluZm8udmVyc2lvbjtcclxuICAgICAgICB0aGlzLm1fc3RTeXN0ZW1JbmZvLndpbmRvd0hlaWdodCA9IGluZm8ud2luZG93SGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubV9zdFN5c3RlbUluZm8ud2luZG93V2lkdGggPSBpbmZvLndpbmRvd1dpZHRoO1xyXG4gICAgICAgIHRoaXMubV9zdFN5c3RlbUluZm8uU0RLVmVyc2lvbiA9IGluZm8uU0RLVmVyc2lvbjtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3N0U3lzdGVtSW5mbztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2hhcmUodGl0bGU6c3RyaW5nLCBpbWdVcmw6c3RyaW5nLCBxdWVyeTpzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHd4LnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVVybDogaW1nVXJsLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJzaGFyZSBzdWNjZXNzIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwic2hhcmUgZmFpbCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gXHJcbiAgICBwdWJsaWMgR2V0TGF1bmNoT3B0aW9ucygpOmFueSB7XHJcbiAgICAgICAgcmV0dXJuIHd4LmdldExhdW5jaE9wdGlvbnNTeW5jKCkucXVlcnk7XHJcbiAgICB9IFxyXG59XHJcbiIsIlxyXG4vKlxyXG4qIOa4uOaIj+WIneWni+WMlumFjee9rjtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZ3tcclxuICAgIHN0YXRpYyB3aWR0aDpudW1iZXI9NjQwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9MTEzNjtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwiZml4ZWR3aWR0aFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJ0b3BcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwibGVmdFwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6YW55PVwidGVzdC9UZXN0U2NlbmUuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IEFudEZyYW1lIGZyb20gXCIuLi9iaW4vbGlicy9BbnRGcmFtZS9BbnRGcmFtZVwiO1xyXG5pbXBvcnQgQW50TmV0IGZyb20gXCIuLi9iaW4vbGlicy9BbnRGcmFtZS9OZXQvQW50TmV0XCI7XHJcbmltcG9ydCB7IEdhbWVyTm90aWZ5SWNvbkNoYW5nZVMyQyB9IGZyb20gXCIuLi9iaW4vbGlicy9BbnRGcmFtZS9OZXQvcHJvdG9cIjtcclxuZGVjbGFyZSB2YXIgbmV0O1xyXG5jbGFzcyBHYW1lTGF1bmNoIFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcigpIFxyXG4gICAge1xyXG5cdFx0Ly/moLnmja5JREXorr7nva7liJ3lp4vljJblvJXmk45cdFx0XHJcblx0XHRpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XHJcblx0XHRlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuXHRcdExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG5cdFx0TGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlO1xyXG5cdFx0Ly/lhbzlrrnlvq7kv6HkuI3mlK/mjIHliqDovb1zY2VuZeWQjue8gOWcuuaZr1xyXG5cdFx0TGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uO1xyXG5cclxuXHRcdC8v5omT5byA6LCD6K+V6Z2i5p2/77yI6YCa6L+HSURF6K6+572u6LCD6K+V5qih5byP77yM5oiW6ICFdXJs5Zyw5Z2A5aKe5YqgZGVidWc9dHJ1ZeWPguaVsO+8jOWdh+WPr+aJk+W8gOiwg+ivlemdouadv++8iVxyXG5cdFx0aWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXSkgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0uZW5hYmxlKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xyXG5cdFx0TGF5YS5hbGVydEdsb2JhbEVycm9yID0gdHJ1ZTtcclxuXHJcblxyXG5cdFx0Y29uc29sZS5sb2coMTExMTExMTEpO1xyXG5cdFx0dGhpcy5vblZlcnNpb25Mb2FkZWQoKTtcclxuXHRcdC8v5r+A5rS76LWE5rqQ54mI5pys5o6n5Yi277yMdmVyc2lvbi5qc29u55SxSURF5Y+R5biD5Yqf6IO96Ieq5Yqo55Sf5oiQ77yM5aaC5p6c5rKh5pyJ5Lmf5LiN5b2x5ZON5ZCO57ut5rWB56iLXHJcblx0XHQvLyBMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoXCJ2ZXJzaW9uLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT04pO1xyXG5cdH1cclxuXHJcbiAgICBvblZlcnNpb25Mb2FkZWQoKTogdm9pZCBcclxuICAgIHtcclxuXHJcblx0XHRuZXQuY29uZmlnLnVybCA9IFwiaHR0cHM6Ly93d3cubWFnaWNsdnpzLmNsdWI6NTAwMFwiXHJcblx0XHR0aGlzLlRlc3QoKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIFRlc3QoKXtcclxuXHRcdEFudE5ldC5nYW1lck5vdGlmeUljb25DaGFuZ2VTMkMub24oKGU6R2FtZXJOb3RpZnlJY29uQ2hhbmdlUzJDKT0+e1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInRlc3RcIik7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUpXHJcblx0XHR9KVxyXG5cdFx0bGV0IHMyYyA9IGF3YWl0IEFudEZyYW1lLnBsYXRmb3JtLkxvZ2luKCk7XHJcblx0XHRjb25zb2xlLmxvZyhzMmMpO1xyXG5cclxuXHRcdGxldCBkYXRhID0gYXdhaXQgQW50TmV0LkFzeW5jR2FtZXJMb2dpbkdldERhdGFDMlMoKTtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuXHRcdFxyXG5cdH1cclxuXHJcbiAgICBvbkNvbmZpZ0xvYWRlZCgpOiB2b2lkIFxyXG4gICAge1xyXG5cdH1cclxufVxyXG5cclxuXHJcbi8v5r+A5rS75ZCv5Yqo57G7XHJcbm5ldyBHYW1lTGF1bmNoKCk7Il19
