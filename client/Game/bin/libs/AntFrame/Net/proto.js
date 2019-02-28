/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
var proto = $root;
var module = {};
$root.C2S = (function() {

    /**
     * Properties of a C2S.
     * @exports IC2S
     * @interface IC2S
     * @property {string|null} [key] C2S key
     * @property {IGamerLoginC2S|null} [gamerLoginC2S] C2S gamerLoginC2S
     * @property {IGamerLoginGetDataC2S|null} [gamerLoginGetDataC2S] C2S gamerLoginGetDataC2S
     * @property {IServerTimeC2S|null} [serverTimeC2S] C2S serverTimeC2S
     * @property {IGamerSubChatChannelC2S|null} [gamerSubChatChannelC2S] C2S gamerSubChatChannelC2S
     * @property {IGamerFriendChatC2S|null} [gamerFriendChatC2S] C2S gamerFriendChatC2S
     * @property {IGamerWorldChatC2S|null} [gamerWorldChatC2S] C2S gamerWorldChatC2S
     * @property {IGamerTestChatC2S|null} [gamerTestChatC2S] C2S gamerTestChatC2S
     * @property {IGamerClubRequestC2S|null} [gamerClubRequestC2S] C2S gamerClubRequestC2S
     * @property {IGamerNewFriendReqC2S|null} [gamerNewFriendReqC2S] C2S gamerNewFriendReqC2S
     * @property {IGamerProcessFriendReqC2S|null} [gamerProcessFriendReqC2S] C2S gamerProcessFriendReqC2S
     * @property {IGamerMatchC2S|null} [gamerMatchC2S] C2S gamerMatchC2S
     * @property {IGamerPVPSyncC2S|null} [gamerPVPSyncC2S] C2S gamerPVPSyncC2S
     * @property {IGamerGetRealTimeRankC2S|null} [gamerGetRealTimeRankC2S] C2S gamerGetRealTimeRankC2S
     * @property {IGamerCheckPVPBattleC2S|null} [gamerCheckPVPBattleC2S] C2S gamerCheckPVPBattleC2S
     * @property {IGamerUploadWXInfoC2S|null} [gamerUploadWXInfoC2S] C2S gamerUploadWXInfoC2S
     * @property {IGamerNewRoomC2S|null} [gamerNewRoomC2S] C2S gamerNewRoomC2S
     * @property {IGamerAddRoomC2S|null} [gamerAddRoomC2S] C2S gamerAddRoomC2S
     * @property {IGamerLeaveRoomC2S|null} [gamerLeaveRoomC2S] C2S gamerLeaveRoomC2S
     */

    /**
     * Constructs a new C2S.
     * @exports C2S
     * @classdesc Represents a C2S.
     * @implements IC2S
     * @constructor
     * @param {IC2S=} [properties] Properties to set
     */
    function C2S(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2S key.
     * @member {string} key
     * @memberof C2S
     * @instance
     */
    C2S.prototype.key = "";

    /**
     * C2S gamerLoginC2S.
     * @member {IGamerLoginC2S|null|undefined} gamerLoginC2S
     * @memberof C2S
     * @instance
     */
    C2S.prototype.gamerLoginC2S = null;

    /**
     * C2S gamerLoginGetDataC2S.
     * @member {IGamerLoginGetDataC2S|null|undefined} gamerLoginGetDataC2S
     * @memberof C2S
     * @instance
     */
    C2S.prototype.gamerLoginGetDataC2S = null;

    /**
     * C2S serverTimeC2S.
     * @member {IServerTimeC2S|null|undefined} serverTimeC2S
     * @memberof C2S
     * @instance
     */
    C2S.prototype.serverTimeC2S = null;

    /**
     * C2S gamerSubChatChannelC2S.
     * @member {IGamerSubChatChannelC2S|null|undefined} gamerSubChatChannelC2S
     * @memberof C2S
     * @instance
     */
    C2S.prototype.gamerSubChatChannelC2S = null;

    /**
     * C2S gamerFriendChatC2S.
     * @member {IGamerFriendChatC2S|null|undefined} gamerFriendChatC2S
     * @memberof C2S
     * @instance
     */
    C2S.prototype.gamerFriendChatC2S = null;

    /**
     * C2S gamerWorldChatC2S.
     * @member {IGamerWorldChatC2S|null|undefined} gamerWorldChatC2S
     * @memberof C2S
     * @instance
     */
    C2S.prototype.gamerWorldChatC2S = null;

    /**
     * C2S gamerTestChatC2S.
     * @member {IGamerTestChatC2S|null|undefined} gamerTestChatC2S
     * @memberof C2S
     * @instance
     */
    C2S.prototype.gamerTestChatC2S = null;

    /**
     * C2S gamerClubRequestC2S.
     * @member {IGamerClubRequestC2S|null|undefined} gamerClubRequestC2S
     * @memberof C2S
     * @instance
     */
    C2S.prototype.gamerClubRequestC2S = null;

    /**
     * C2S gamerNewFriendReqC2S.
     * @member {IGamerNewFriendReqC2S|null|undefined} gamerNewFriendReqC2S
     * @memberof C2S
     * @instance
     */
    C2S.prototype.gamerNewFriendReqC2S = null;

    /**
     * C2S gamerProcessFriendReqC2S.
     * @member {IGamerProcessFriendReqC2S|null|undefined} gamerProcessFriendReqC2S
     * @memberof C2S
     * @instance
     */
    C2S.prototype.gamerProcessFriendReqC2S = null;

    /**
     * C2S gamerMatchC2S.
     * @member {IGamerMatchC2S|null|undefined} gamerMatchC2S
     * @memberof C2S
     * @instance
     */
    C2S.prototype.gamerMatchC2S = null;

    /**
     * C2S gamerPVPSyncC2S.
     * @member {IGamerPVPSyncC2S|null|undefined} gamerPVPSyncC2S
     * @memberof C2S
     * @instance
     */
    C2S.prototype.gamerPVPSyncC2S = null;

    /**
     * C2S gamerGetRealTimeRankC2S.
     * @member {IGamerGetRealTimeRankC2S|null|undefined} gamerGetRealTimeRankC2S
     * @memberof C2S
     * @instance
     */
    C2S.prototype.gamerGetRealTimeRankC2S = null;

    /**
     * C2S gamerCheckPVPBattleC2S.
     * @member {IGamerCheckPVPBattleC2S|null|undefined} gamerCheckPVPBattleC2S
     * @memberof C2S
     * @instance
     */
    C2S.prototype.gamerCheckPVPBattleC2S = null;

    /**
     * C2S gamerUploadWXInfoC2S.
     * @member {IGamerUploadWXInfoC2S|null|undefined} gamerUploadWXInfoC2S
     * @memberof C2S
     * @instance
     */
    C2S.prototype.gamerUploadWXInfoC2S = null;

    /**
     * C2S gamerNewRoomC2S.
     * @member {IGamerNewRoomC2S|null|undefined} gamerNewRoomC2S
     * @memberof C2S
     * @instance
     */
    C2S.prototype.gamerNewRoomC2S = null;

    /**
     * C2S gamerAddRoomC2S.
     * @member {IGamerAddRoomC2S|null|undefined} gamerAddRoomC2S
     * @memberof C2S
     * @instance
     */
    C2S.prototype.gamerAddRoomC2S = null;

    /**
     * C2S gamerLeaveRoomC2S.
     * @member {IGamerLeaveRoomC2S|null|undefined} gamerLeaveRoomC2S
     * @memberof C2S
     * @instance
     */
    C2S.prototype.gamerLeaveRoomC2S = null;

    /**
     * Creates a new C2S instance using the specified properties.
     * @function create
     * @memberof C2S
     * @static
     * @param {IC2S=} [properties] Properties to set
     * @returns {C2S} C2S instance
     */
    C2S.create = function create(properties) {
        return new C2S(properties);
    };

    /**
     * Encodes the specified C2S message. Does not implicitly {@link C2S.verify|verify} messages.
     * @function encode
     * @memberof C2S
     * @static
     * @param {IC2S} message C2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.key != null && message.hasOwnProperty("key"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
        if (message.gamerLoginC2S != null && message.hasOwnProperty("gamerLoginC2S"))
            $root.GamerLoginC2S.encode(message.gamerLoginC2S, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.gamerLoginGetDataC2S != null && message.hasOwnProperty("gamerLoginGetDataC2S"))
            $root.GamerLoginGetDataC2S.encode(message.gamerLoginGetDataC2S, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.serverTimeC2S != null && message.hasOwnProperty("serverTimeC2S"))
            $root.ServerTimeC2S.encode(message.serverTimeC2S, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.gamerSubChatChannelC2S != null && message.hasOwnProperty("gamerSubChatChannelC2S"))
            $root.GamerSubChatChannelC2S.encode(message.gamerSubChatChannelC2S, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.gamerFriendChatC2S != null && message.hasOwnProperty("gamerFriendChatC2S"))
            $root.GamerFriendChatC2S.encode(message.gamerFriendChatC2S, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.gamerWorldChatC2S != null && message.hasOwnProperty("gamerWorldChatC2S"))
            $root.GamerWorldChatC2S.encode(message.gamerWorldChatC2S, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.gamerTestChatC2S != null && message.hasOwnProperty("gamerTestChatC2S"))
            $root.GamerTestChatC2S.encode(message.gamerTestChatC2S, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.gamerClubRequestC2S != null && message.hasOwnProperty("gamerClubRequestC2S"))
            $root.GamerClubRequestC2S.encode(message.gamerClubRequestC2S, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.gamerNewFriendReqC2S != null && message.hasOwnProperty("gamerNewFriendReqC2S"))
            $root.GamerNewFriendReqC2S.encode(message.gamerNewFriendReqC2S, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.gamerProcessFriendReqC2S != null && message.hasOwnProperty("gamerProcessFriendReqC2S"))
            $root.GamerProcessFriendReqC2S.encode(message.gamerProcessFriendReqC2S, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.gamerMatchC2S != null && message.hasOwnProperty("gamerMatchC2S"))
            $root.GamerMatchC2S.encode(message.gamerMatchC2S, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.gamerPVPSyncC2S != null && message.hasOwnProperty("gamerPVPSyncC2S"))
            $root.GamerPVPSyncC2S.encode(message.gamerPVPSyncC2S, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.gamerGetRealTimeRankC2S != null && message.hasOwnProperty("gamerGetRealTimeRankC2S"))
            $root.GamerGetRealTimeRankC2S.encode(message.gamerGetRealTimeRankC2S, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.gamerCheckPVPBattleC2S != null && message.hasOwnProperty("gamerCheckPVPBattleC2S"))
            $root.GamerCheckPVPBattleC2S.encode(message.gamerCheckPVPBattleC2S, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.gamerUploadWXInfoC2S != null && message.hasOwnProperty("gamerUploadWXInfoC2S"))
            $root.GamerUploadWXInfoC2S.encode(message.gamerUploadWXInfoC2S, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.gamerNewRoomC2S != null && message.hasOwnProperty("gamerNewRoomC2S"))
            $root.GamerNewRoomC2S.encode(message.gamerNewRoomC2S, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.gamerAddRoomC2S != null && message.hasOwnProperty("gamerAddRoomC2S"))
            $root.GamerAddRoomC2S.encode(message.gamerAddRoomC2S, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        if (message.gamerLeaveRoomC2S != null && message.hasOwnProperty("gamerLeaveRoomC2S"))
            $root.GamerLeaveRoomC2S.encode(message.gamerLeaveRoomC2S, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified C2S message, length delimited. Does not implicitly {@link C2S.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2S
     * @static
     * @param {IC2S} message C2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2S message from the specified reader or buffer.
     * @function decode
     * @memberof C2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2S} C2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.key = reader.string();
                break;
            case 2:
                message.gamerLoginC2S = $root.GamerLoginC2S.decode(reader, reader.uint32());
                break;
            case 3:
                message.gamerLoginGetDataC2S = $root.GamerLoginGetDataC2S.decode(reader, reader.uint32());
                break;
            case 4:
                message.serverTimeC2S = $root.ServerTimeC2S.decode(reader, reader.uint32());
                break;
            case 5:
                message.gamerSubChatChannelC2S = $root.GamerSubChatChannelC2S.decode(reader, reader.uint32());
                break;
            case 6:
                message.gamerFriendChatC2S = $root.GamerFriendChatC2S.decode(reader, reader.uint32());
                break;
            case 7:
                message.gamerWorldChatC2S = $root.GamerWorldChatC2S.decode(reader, reader.uint32());
                break;
            case 8:
                message.gamerTestChatC2S = $root.GamerTestChatC2S.decode(reader, reader.uint32());
                break;
            case 9:
                message.gamerClubRequestC2S = $root.GamerClubRequestC2S.decode(reader, reader.uint32());
                break;
            case 10:
                message.gamerNewFriendReqC2S = $root.GamerNewFriendReqC2S.decode(reader, reader.uint32());
                break;
            case 11:
                message.gamerProcessFriendReqC2S = $root.GamerProcessFriendReqC2S.decode(reader, reader.uint32());
                break;
            case 12:
                message.gamerMatchC2S = $root.GamerMatchC2S.decode(reader, reader.uint32());
                break;
            case 13:
                message.gamerPVPSyncC2S = $root.GamerPVPSyncC2S.decode(reader, reader.uint32());
                break;
            case 14:
                message.gamerGetRealTimeRankC2S = $root.GamerGetRealTimeRankC2S.decode(reader, reader.uint32());
                break;
            case 15:
                message.gamerCheckPVPBattleC2S = $root.GamerCheckPVPBattleC2S.decode(reader, reader.uint32());
                break;
            case 16:
                message.gamerUploadWXInfoC2S = $root.GamerUploadWXInfoC2S.decode(reader, reader.uint32());
                break;
            case 17:
                message.gamerNewRoomC2S = $root.GamerNewRoomC2S.decode(reader, reader.uint32());
                break;
            case 18:
                message.gamerAddRoomC2S = $root.GamerAddRoomC2S.decode(reader, reader.uint32());
                break;
            case 19:
                message.gamerLeaveRoomC2S = $root.GamerLeaveRoomC2S.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2S message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2S} C2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2S message.
     * @function verify
     * @memberof C2S
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2S.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isString(message.key))
                return "key: string expected";
        if (message.gamerLoginC2S != null && message.hasOwnProperty("gamerLoginC2S")) {
            var error = $root.GamerLoginC2S.verify(message.gamerLoginC2S);
            if (error)
                return "gamerLoginC2S." + error;
        }
        if (message.gamerLoginGetDataC2S != null && message.hasOwnProperty("gamerLoginGetDataC2S")) {
            var error = $root.GamerLoginGetDataC2S.verify(message.gamerLoginGetDataC2S);
            if (error)
                return "gamerLoginGetDataC2S." + error;
        }
        if (message.serverTimeC2S != null && message.hasOwnProperty("serverTimeC2S")) {
            var error = $root.ServerTimeC2S.verify(message.serverTimeC2S);
            if (error)
                return "serverTimeC2S." + error;
        }
        if (message.gamerSubChatChannelC2S != null && message.hasOwnProperty("gamerSubChatChannelC2S")) {
            var error = $root.GamerSubChatChannelC2S.verify(message.gamerSubChatChannelC2S);
            if (error)
                return "gamerSubChatChannelC2S." + error;
        }
        if (message.gamerFriendChatC2S != null && message.hasOwnProperty("gamerFriendChatC2S")) {
            var error = $root.GamerFriendChatC2S.verify(message.gamerFriendChatC2S);
            if (error)
                return "gamerFriendChatC2S." + error;
        }
        if (message.gamerWorldChatC2S != null && message.hasOwnProperty("gamerWorldChatC2S")) {
            var error = $root.GamerWorldChatC2S.verify(message.gamerWorldChatC2S);
            if (error)
                return "gamerWorldChatC2S." + error;
        }
        if (message.gamerTestChatC2S != null && message.hasOwnProperty("gamerTestChatC2S")) {
            var error = $root.GamerTestChatC2S.verify(message.gamerTestChatC2S);
            if (error)
                return "gamerTestChatC2S." + error;
        }
        if (message.gamerClubRequestC2S != null && message.hasOwnProperty("gamerClubRequestC2S")) {
            var error = $root.GamerClubRequestC2S.verify(message.gamerClubRequestC2S);
            if (error)
                return "gamerClubRequestC2S." + error;
        }
        if (message.gamerNewFriendReqC2S != null && message.hasOwnProperty("gamerNewFriendReqC2S")) {
            var error = $root.GamerNewFriendReqC2S.verify(message.gamerNewFriendReqC2S);
            if (error)
                return "gamerNewFriendReqC2S." + error;
        }
        if (message.gamerProcessFriendReqC2S != null && message.hasOwnProperty("gamerProcessFriendReqC2S")) {
            var error = $root.GamerProcessFriendReqC2S.verify(message.gamerProcessFriendReqC2S);
            if (error)
                return "gamerProcessFriendReqC2S." + error;
        }
        if (message.gamerMatchC2S != null && message.hasOwnProperty("gamerMatchC2S")) {
            var error = $root.GamerMatchC2S.verify(message.gamerMatchC2S);
            if (error)
                return "gamerMatchC2S." + error;
        }
        if (message.gamerPVPSyncC2S != null && message.hasOwnProperty("gamerPVPSyncC2S")) {
            var error = $root.GamerPVPSyncC2S.verify(message.gamerPVPSyncC2S);
            if (error)
                return "gamerPVPSyncC2S." + error;
        }
        if (message.gamerGetRealTimeRankC2S != null && message.hasOwnProperty("gamerGetRealTimeRankC2S")) {
            var error = $root.GamerGetRealTimeRankC2S.verify(message.gamerGetRealTimeRankC2S);
            if (error)
                return "gamerGetRealTimeRankC2S." + error;
        }
        if (message.gamerCheckPVPBattleC2S != null && message.hasOwnProperty("gamerCheckPVPBattleC2S")) {
            var error = $root.GamerCheckPVPBattleC2S.verify(message.gamerCheckPVPBattleC2S);
            if (error)
                return "gamerCheckPVPBattleC2S." + error;
        }
        if (message.gamerUploadWXInfoC2S != null && message.hasOwnProperty("gamerUploadWXInfoC2S")) {
            var error = $root.GamerUploadWXInfoC2S.verify(message.gamerUploadWXInfoC2S);
            if (error)
                return "gamerUploadWXInfoC2S." + error;
        }
        if (message.gamerNewRoomC2S != null && message.hasOwnProperty("gamerNewRoomC2S")) {
            var error = $root.GamerNewRoomC2S.verify(message.gamerNewRoomC2S);
            if (error)
                return "gamerNewRoomC2S." + error;
        }
        if (message.gamerAddRoomC2S != null && message.hasOwnProperty("gamerAddRoomC2S")) {
            var error = $root.GamerAddRoomC2S.verify(message.gamerAddRoomC2S);
            if (error)
                return "gamerAddRoomC2S." + error;
        }
        if (message.gamerLeaveRoomC2S != null && message.hasOwnProperty("gamerLeaveRoomC2S")) {
            var error = $root.GamerLeaveRoomC2S.verify(message.gamerLeaveRoomC2S);
            if (error)
                return "gamerLeaveRoomC2S." + error;
        }
        return null;
    };

    /**
     * Creates a C2S message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2S
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2S} C2S
     */
    C2S.fromObject = function fromObject(object) {
        if (object instanceof $root.C2S)
            return object;
        var message = new $root.C2S();
        if (object.key != null)
            message.key = String(object.key);
        if (object.gamerLoginC2S != null) {
            if (typeof object.gamerLoginC2S !== "object")
                throw TypeError(".C2S.gamerLoginC2S: object expected");
            message.gamerLoginC2S = $root.GamerLoginC2S.fromObject(object.gamerLoginC2S);
        }
        if (object.gamerLoginGetDataC2S != null) {
            if (typeof object.gamerLoginGetDataC2S !== "object")
                throw TypeError(".C2S.gamerLoginGetDataC2S: object expected");
            message.gamerLoginGetDataC2S = $root.GamerLoginGetDataC2S.fromObject(object.gamerLoginGetDataC2S);
        }
        if (object.serverTimeC2S != null) {
            if (typeof object.serverTimeC2S !== "object")
                throw TypeError(".C2S.serverTimeC2S: object expected");
            message.serverTimeC2S = $root.ServerTimeC2S.fromObject(object.serverTimeC2S);
        }
        if (object.gamerSubChatChannelC2S != null) {
            if (typeof object.gamerSubChatChannelC2S !== "object")
                throw TypeError(".C2S.gamerSubChatChannelC2S: object expected");
            message.gamerSubChatChannelC2S = $root.GamerSubChatChannelC2S.fromObject(object.gamerSubChatChannelC2S);
        }
        if (object.gamerFriendChatC2S != null) {
            if (typeof object.gamerFriendChatC2S !== "object")
                throw TypeError(".C2S.gamerFriendChatC2S: object expected");
            message.gamerFriendChatC2S = $root.GamerFriendChatC2S.fromObject(object.gamerFriendChatC2S);
        }
        if (object.gamerWorldChatC2S != null) {
            if (typeof object.gamerWorldChatC2S !== "object")
                throw TypeError(".C2S.gamerWorldChatC2S: object expected");
            message.gamerWorldChatC2S = $root.GamerWorldChatC2S.fromObject(object.gamerWorldChatC2S);
        }
        if (object.gamerTestChatC2S != null) {
            if (typeof object.gamerTestChatC2S !== "object")
                throw TypeError(".C2S.gamerTestChatC2S: object expected");
            message.gamerTestChatC2S = $root.GamerTestChatC2S.fromObject(object.gamerTestChatC2S);
        }
        if (object.gamerClubRequestC2S != null) {
            if (typeof object.gamerClubRequestC2S !== "object")
                throw TypeError(".C2S.gamerClubRequestC2S: object expected");
            message.gamerClubRequestC2S = $root.GamerClubRequestC2S.fromObject(object.gamerClubRequestC2S);
        }
        if (object.gamerNewFriendReqC2S != null) {
            if (typeof object.gamerNewFriendReqC2S !== "object")
                throw TypeError(".C2S.gamerNewFriendReqC2S: object expected");
            message.gamerNewFriendReqC2S = $root.GamerNewFriendReqC2S.fromObject(object.gamerNewFriendReqC2S);
        }
        if (object.gamerProcessFriendReqC2S != null) {
            if (typeof object.gamerProcessFriendReqC2S !== "object")
                throw TypeError(".C2S.gamerProcessFriendReqC2S: object expected");
            message.gamerProcessFriendReqC2S = $root.GamerProcessFriendReqC2S.fromObject(object.gamerProcessFriendReqC2S);
        }
        if (object.gamerMatchC2S != null) {
            if (typeof object.gamerMatchC2S !== "object")
                throw TypeError(".C2S.gamerMatchC2S: object expected");
            message.gamerMatchC2S = $root.GamerMatchC2S.fromObject(object.gamerMatchC2S);
        }
        if (object.gamerPVPSyncC2S != null) {
            if (typeof object.gamerPVPSyncC2S !== "object")
                throw TypeError(".C2S.gamerPVPSyncC2S: object expected");
            message.gamerPVPSyncC2S = $root.GamerPVPSyncC2S.fromObject(object.gamerPVPSyncC2S);
        }
        if (object.gamerGetRealTimeRankC2S != null) {
            if (typeof object.gamerGetRealTimeRankC2S !== "object")
                throw TypeError(".C2S.gamerGetRealTimeRankC2S: object expected");
            message.gamerGetRealTimeRankC2S = $root.GamerGetRealTimeRankC2S.fromObject(object.gamerGetRealTimeRankC2S);
        }
        if (object.gamerCheckPVPBattleC2S != null) {
            if (typeof object.gamerCheckPVPBattleC2S !== "object")
                throw TypeError(".C2S.gamerCheckPVPBattleC2S: object expected");
            message.gamerCheckPVPBattleC2S = $root.GamerCheckPVPBattleC2S.fromObject(object.gamerCheckPVPBattleC2S);
        }
        if (object.gamerUploadWXInfoC2S != null) {
            if (typeof object.gamerUploadWXInfoC2S !== "object")
                throw TypeError(".C2S.gamerUploadWXInfoC2S: object expected");
            message.gamerUploadWXInfoC2S = $root.GamerUploadWXInfoC2S.fromObject(object.gamerUploadWXInfoC2S);
        }
        if (object.gamerNewRoomC2S != null) {
            if (typeof object.gamerNewRoomC2S !== "object")
                throw TypeError(".C2S.gamerNewRoomC2S: object expected");
            message.gamerNewRoomC2S = $root.GamerNewRoomC2S.fromObject(object.gamerNewRoomC2S);
        }
        if (object.gamerAddRoomC2S != null) {
            if (typeof object.gamerAddRoomC2S !== "object")
                throw TypeError(".C2S.gamerAddRoomC2S: object expected");
            message.gamerAddRoomC2S = $root.GamerAddRoomC2S.fromObject(object.gamerAddRoomC2S);
        }
        if (object.gamerLeaveRoomC2S != null) {
            if (typeof object.gamerLeaveRoomC2S !== "object")
                throw TypeError(".C2S.gamerLeaveRoomC2S: object expected");
            message.gamerLeaveRoomC2S = $root.GamerLeaveRoomC2S.fromObject(object.gamerLeaveRoomC2S);
        }
        return message;
    };

    /**
     * Creates a plain object from a C2S message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2S
     * @static
     * @param {C2S} message C2S
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2S.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.key = "";
            object.gamerLoginC2S = null;
            object.gamerLoginGetDataC2S = null;
            object.serverTimeC2S = null;
            object.gamerSubChatChannelC2S = null;
            object.gamerFriendChatC2S = null;
            object.gamerWorldChatC2S = null;
            object.gamerTestChatC2S = null;
            object.gamerClubRequestC2S = null;
            object.gamerNewFriendReqC2S = null;
            object.gamerProcessFriendReqC2S = null;
            object.gamerMatchC2S = null;
            object.gamerPVPSyncC2S = null;
            object.gamerGetRealTimeRankC2S = null;
            object.gamerCheckPVPBattleC2S = null;
            object.gamerUploadWXInfoC2S = null;
            object.gamerNewRoomC2S = null;
            object.gamerAddRoomC2S = null;
            object.gamerLeaveRoomC2S = null;
        }
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        if (message.gamerLoginC2S != null && message.hasOwnProperty("gamerLoginC2S"))
            object.gamerLoginC2S = $root.GamerLoginC2S.toObject(message.gamerLoginC2S, options);
        if (message.gamerLoginGetDataC2S != null && message.hasOwnProperty("gamerLoginGetDataC2S"))
            object.gamerLoginGetDataC2S = $root.GamerLoginGetDataC2S.toObject(message.gamerLoginGetDataC2S, options);
        if (message.serverTimeC2S != null && message.hasOwnProperty("serverTimeC2S"))
            object.serverTimeC2S = $root.ServerTimeC2S.toObject(message.serverTimeC2S, options);
        if (message.gamerSubChatChannelC2S != null && message.hasOwnProperty("gamerSubChatChannelC2S"))
            object.gamerSubChatChannelC2S = $root.GamerSubChatChannelC2S.toObject(message.gamerSubChatChannelC2S, options);
        if (message.gamerFriendChatC2S != null && message.hasOwnProperty("gamerFriendChatC2S"))
            object.gamerFriendChatC2S = $root.GamerFriendChatC2S.toObject(message.gamerFriendChatC2S, options);
        if (message.gamerWorldChatC2S != null && message.hasOwnProperty("gamerWorldChatC2S"))
            object.gamerWorldChatC2S = $root.GamerWorldChatC2S.toObject(message.gamerWorldChatC2S, options);
        if (message.gamerTestChatC2S != null && message.hasOwnProperty("gamerTestChatC2S"))
            object.gamerTestChatC2S = $root.GamerTestChatC2S.toObject(message.gamerTestChatC2S, options);
        if (message.gamerClubRequestC2S != null && message.hasOwnProperty("gamerClubRequestC2S"))
            object.gamerClubRequestC2S = $root.GamerClubRequestC2S.toObject(message.gamerClubRequestC2S, options);
        if (message.gamerNewFriendReqC2S != null && message.hasOwnProperty("gamerNewFriendReqC2S"))
            object.gamerNewFriendReqC2S = $root.GamerNewFriendReqC2S.toObject(message.gamerNewFriendReqC2S, options);
        if (message.gamerProcessFriendReqC2S != null && message.hasOwnProperty("gamerProcessFriendReqC2S"))
            object.gamerProcessFriendReqC2S = $root.GamerProcessFriendReqC2S.toObject(message.gamerProcessFriendReqC2S, options);
        if (message.gamerMatchC2S != null && message.hasOwnProperty("gamerMatchC2S"))
            object.gamerMatchC2S = $root.GamerMatchC2S.toObject(message.gamerMatchC2S, options);
        if (message.gamerPVPSyncC2S != null && message.hasOwnProperty("gamerPVPSyncC2S"))
            object.gamerPVPSyncC2S = $root.GamerPVPSyncC2S.toObject(message.gamerPVPSyncC2S, options);
        if (message.gamerGetRealTimeRankC2S != null && message.hasOwnProperty("gamerGetRealTimeRankC2S"))
            object.gamerGetRealTimeRankC2S = $root.GamerGetRealTimeRankC2S.toObject(message.gamerGetRealTimeRankC2S, options);
        if (message.gamerCheckPVPBattleC2S != null && message.hasOwnProperty("gamerCheckPVPBattleC2S"))
            object.gamerCheckPVPBattleC2S = $root.GamerCheckPVPBattleC2S.toObject(message.gamerCheckPVPBattleC2S, options);
        if (message.gamerUploadWXInfoC2S != null && message.hasOwnProperty("gamerUploadWXInfoC2S"))
            object.gamerUploadWXInfoC2S = $root.GamerUploadWXInfoC2S.toObject(message.gamerUploadWXInfoC2S, options);
        if (message.gamerNewRoomC2S != null && message.hasOwnProperty("gamerNewRoomC2S"))
            object.gamerNewRoomC2S = $root.GamerNewRoomC2S.toObject(message.gamerNewRoomC2S, options);
        if (message.gamerAddRoomC2S != null && message.hasOwnProperty("gamerAddRoomC2S"))
            object.gamerAddRoomC2S = $root.GamerAddRoomC2S.toObject(message.gamerAddRoomC2S, options);
        if (message.gamerLeaveRoomC2S != null && message.hasOwnProperty("gamerLeaveRoomC2S"))
            object.gamerLeaveRoomC2S = $root.GamerLeaveRoomC2S.toObject(message.gamerLeaveRoomC2S, options);
        return object;
    };

    /**
     * Converts this C2S to JSON.
     * @function toJSON
     * @memberof C2S
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2S.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return C2S;
})();

$root.GamerLoginC2S = (function() {

    /**
     * Properties of a GamerLoginC2S.
     * @exports IGamerLoginC2S
     * @interface IGamerLoginC2S
     * @property {number|null} [id] GamerLoginC2S id
     * @property {string|null} [session] GamerLoginC2S session
     * @property {string|null} [addr] GamerLoginC2S addr
     */

    /**
     * Constructs a new GamerLoginC2S.
     * @exports GamerLoginC2S
     * @classdesc Represents a GamerLoginC2S.
     * @implements IGamerLoginC2S
     * @constructor
     * @param {IGamerLoginC2S=} [properties] Properties to set
     */
    function GamerLoginC2S(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerLoginC2S id.
     * @member {number} id
     * @memberof GamerLoginC2S
     * @instance
     */
    GamerLoginC2S.prototype.id = 0;

    /**
     * GamerLoginC2S session.
     * @member {string} session
     * @memberof GamerLoginC2S
     * @instance
     */
    GamerLoginC2S.prototype.session = "";

    /**
     * GamerLoginC2S addr.
     * @member {string} addr
     * @memberof GamerLoginC2S
     * @instance
     */
    GamerLoginC2S.prototype.addr = "";

    /**
     * Creates a new GamerLoginC2S instance using the specified properties.
     * @function create
     * @memberof GamerLoginC2S
     * @static
     * @param {IGamerLoginC2S=} [properties] Properties to set
     * @returns {GamerLoginC2S} GamerLoginC2S instance
     */
    GamerLoginC2S.create = function create(properties) {
        return new GamerLoginC2S(properties);
    };

    /**
     * Encodes the specified GamerLoginC2S message. Does not implicitly {@link GamerLoginC2S.verify|verify} messages.
     * @function encode
     * @memberof GamerLoginC2S
     * @static
     * @param {IGamerLoginC2S} message GamerLoginC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerLoginC2S.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.session != null && message.hasOwnProperty("session"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.session);
        if (message.addr != null && message.hasOwnProperty("addr"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.addr);
        return writer;
    };

    /**
     * Encodes the specified GamerLoginC2S message, length delimited. Does not implicitly {@link GamerLoginC2S.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerLoginC2S
     * @static
     * @param {IGamerLoginC2S} message GamerLoginC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerLoginC2S.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerLoginC2S message from the specified reader or buffer.
     * @function decode
     * @memberof GamerLoginC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerLoginC2S} GamerLoginC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerLoginC2S.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerLoginC2S();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.session = reader.string();
                break;
            case 3:
                message.addr = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerLoginC2S message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerLoginC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerLoginC2S} GamerLoginC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerLoginC2S.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerLoginC2S message.
     * @function verify
     * @memberof GamerLoginC2S
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerLoginC2S.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.session != null && message.hasOwnProperty("session"))
            if (!$util.isString(message.session))
                return "session: string expected";
        if (message.addr != null && message.hasOwnProperty("addr"))
            if (!$util.isString(message.addr))
                return "addr: string expected";
        return null;
    };

    /**
     * Creates a GamerLoginC2S message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerLoginC2S
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerLoginC2S} GamerLoginC2S
     */
    GamerLoginC2S.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerLoginC2S)
            return object;
        var message = new $root.GamerLoginC2S();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.session != null)
            message.session = String(object.session);
        if (object.addr != null)
            message.addr = String(object.addr);
        return message;
    };

    /**
     * Creates a plain object from a GamerLoginC2S message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerLoginC2S
     * @static
     * @param {GamerLoginC2S} message GamerLoginC2S
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerLoginC2S.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.session = "";
            object.addr = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.session != null && message.hasOwnProperty("session"))
            object.session = message.session;
        if (message.addr != null && message.hasOwnProperty("addr"))
            object.addr = message.addr;
        return object;
    };

    /**
     * Converts this GamerLoginC2S to JSON.
     * @function toJSON
     * @memberof GamerLoginC2S
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerLoginC2S.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerLoginC2S;
})();

$root.GamerLoginS2C = (function() {

    /**
     * Properties of a GamerLoginS2C.
     * @exports IGamerLoginS2C
     * @interface IGamerLoginS2C
     * @property {number|null} [error] GamerLoginS2C error
     * @property {IGamerMain|null} [main] GamerLoginS2C main
     */

    /**
     * Constructs a new GamerLoginS2C.
     * @exports GamerLoginS2C
     * @classdesc Represents a GamerLoginS2C.
     * @implements IGamerLoginS2C
     * @constructor
     * @param {IGamerLoginS2C=} [properties] Properties to set
     */
    function GamerLoginS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerLoginS2C error.
     * @member {number} error
     * @memberof GamerLoginS2C
     * @instance
     */
    GamerLoginS2C.prototype.error = 0;

    /**
     * GamerLoginS2C main.
     * @member {IGamerMain|null|undefined} main
     * @memberof GamerLoginS2C
     * @instance
     */
    GamerLoginS2C.prototype.main = null;

    /**
     * Creates a new GamerLoginS2C instance using the specified properties.
     * @function create
     * @memberof GamerLoginS2C
     * @static
     * @param {IGamerLoginS2C=} [properties] Properties to set
     * @returns {GamerLoginS2C} GamerLoginS2C instance
     */
    GamerLoginS2C.create = function create(properties) {
        return new GamerLoginS2C(properties);
    };

    /**
     * Encodes the specified GamerLoginS2C message. Does not implicitly {@link GamerLoginS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerLoginS2C
     * @static
     * @param {IGamerLoginS2C} message GamerLoginS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerLoginS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        if (message.main != null && message.hasOwnProperty("main"))
            $root.GamerMain.encode(message.main, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GamerLoginS2C message, length delimited. Does not implicitly {@link GamerLoginS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerLoginS2C
     * @static
     * @param {IGamerLoginS2C} message GamerLoginS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerLoginS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerLoginS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerLoginS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerLoginS2C} GamerLoginS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerLoginS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerLoginS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            case 2:
                message.main = $root.GamerMain.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerLoginS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerLoginS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerLoginS2C} GamerLoginS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerLoginS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerLoginS2C message.
     * @function verify
     * @memberof GamerLoginS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerLoginS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        if (message.main != null && message.hasOwnProperty("main")) {
            var error = $root.GamerMain.verify(message.main);
            if (error)
                return "main." + error;
        }
        return null;
    };

    /**
     * Creates a GamerLoginS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerLoginS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerLoginS2C} GamerLoginS2C
     */
    GamerLoginS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerLoginS2C)
            return object;
        var message = new $root.GamerLoginS2C();
        if (object.error != null)
            message.error = object.error | 0;
        if (object.main != null) {
            if (typeof object.main !== "object")
                throw TypeError(".GamerLoginS2C.main: object expected");
            message.main = $root.GamerMain.fromObject(object.main);
        }
        return message;
    };

    /**
     * Creates a plain object from a GamerLoginS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerLoginS2C
     * @static
     * @param {GamerLoginS2C} message GamerLoginS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerLoginS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.error = 0;
            object.main = null;
        }
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        if (message.main != null && message.hasOwnProperty("main"))
            object.main = $root.GamerMain.toObject(message.main, options);
        return object;
    };

    /**
     * Converts this GamerLoginS2C to JSON.
     * @function toJSON
     * @memberof GamerLoginS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerLoginS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerLoginS2C;
})();

$root.GamerLoginGetDataC2S = (function() {

    /**
     * Properties of a GamerLoginGetDataC2S.
     * @exports IGamerLoginGetDataC2S
     * @interface IGamerLoginGetDataC2S
     * @property {number|null} [id] GamerLoginGetDataC2S id
     */

    /**
     * Constructs a new GamerLoginGetDataC2S.
     * @exports GamerLoginGetDataC2S
     * @classdesc Represents a GamerLoginGetDataC2S.
     * @implements IGamerLoginGetDataC2S
     * @constructor
     * @param {IGamerLoginGetDataC2S=} [properties] Properties to set
     */
    function GamerLoginGetDataC2S(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerLoginGetDataC2S id.
     * @member {number} id
     * @memberof GamerLoginGetDataC2S
     * @instance
     */
    GamerLoginGetDataC2S.prototype.id = 0;

    /**
     * Creates a new GamerLoginGetDataC2S instance using the specified properties.
     * @function create
     * @memberof GamerLoginGetDataC2S
     * @static
     * @param {IGamerLoginGetDataC2S=} [properties] Properties to set
     * @returns {GamerLoginGetDataC2S} GamerLoginGetDataC2S instance
     */
    GamerLoginGetDataC2S.create = function create(properties) {
        return new GamerLoginGetDataC2S(properties);
    };

    /**
     * Encodes the specified GamerLoginGetDataC2S message. Does not implicitly {@link GamerLoginGetDataC2S.verify|verify} messages.
     * @function encode
     * @memberof GamerLoginGetDataC2S
     * @static
     * @param {IGamerLoginGetDataC2S} message GamerLoginGetDataC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerLoginGetDataC2S.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        return writer;
    };

    /**
     * Encodes the specified GamerLoginGetDataC2S message, length delimited. Does not implicitly {@link GamerLoginGetDataC2S.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerLoginGetDataC2S
     * @static
     * @param {IGamerLoginGetDataC2S} message GamerLoginGetDataC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerLoginGetDataC2S.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerLoginGetDataC2S message from the specified reader or buffer.
     * @function decode
     * @memberof GamerLoginGetDataC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerLoginGetDataC2S} GamerLoginGetDataC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerLoginGetDataC2S.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerLoginGetDataC2S();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerLoginGetDataC2S message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerLoginGetDataC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerLoginGetDataC2S} GamerLoginGetDataC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerLoginGetDataC2S.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerLoginGetDataC2S message.
     * @function verify
     * @memberof GamerLoginGetDataC2S
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerLoginGetDataC2S.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        return null;
    };

    /**
     * Creates a GamerLoginGetDataC2S message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerLoginGetDataC2S
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerLoginGetDataC2S} GamerLoginGetDataC2S
     */
    GamerLoginGetDataC2S.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerLoginGetDataC2S)
            return object;
        var message = new $root.GamerLoginGetDataC2S();
        if (object.id != null)
            message.id = object.id | 0;
        return message;
    };

    /**
     * Creates a plain object from a GamerLoginGetDataC2S message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerLoginGetDataC2S
     * @static
     * @param {GamerLoginGetDataC2S} message GamerLoginGetDataC2S
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerLoginGetDataC2S.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = 0;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this GamerLoginGetDataC2S to JSON.
     * @function toJSON
     * @memberof GamerLoginGetDataC2S
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerLoginGetDataC2S.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerLoginGetDataC2S;
})();

$root.GamerLoginGetDataS2C = (function() {

    /**
     * Properties of a GamerLoginGetDataS2C.
     * @exports IGamerLoginGetDataS2C
     * @interface IGamerLoginGetDataS2C
     * @property {number|null} [error] GamerLoginGetDataS2C error
     * @property {IServerTime|null} [time] GamerLoginGetDataS2C time
     * @property {Array.<IGamerFriendRequest>|null} [friendReqs] GamerLoginGetDataS2C friendReqs
     * @property {Array.<IGamerFriend>|null} [friends] GamerLoginGetDataS2C friends
     * @property {number|null} [lengthRank] GamerLoginGetDataS2C lengthRank
     */

    /**
     * Constructs a new GamerLoginGetDataS2C.
     * @exports GamerLoginGetDataS2C
     * @classdesc Represents a GamerLoginGetDataS2C.
     * @implements IGamerLoginGetDataS2C
     * @constructor
     * @param {IGamerLoginGetDataS2C=} [properties] Properties to set
     */
    function GamerLoginGetDataS2C(properties) {
        this.friendReqs = [];
        this.friends = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerLoginGetDataS2C error.
     * @member {number} error
     * @memberof GamerLoginGetDataS2C
     * @instance
     */
    GamerLoginGetDataS2C.prototype.error = 0;

    /**
     * GamerLoginGetDataS2C time.
     * @member {IServerTime|null|undefined} time
     * @memberof GamerLoginGetDataS2C
     * @instance
     */
    GamerLoginGetDataS2C.prototype.time = null;

    /**
     * GamerLoginGetDataS2C friendReqs.
     * @member {Array.<IGamerFriendRequest>} friendReqs
     * @memberof GamerLoginGetDataS2C
     * @instance
     */
    GamerLoginGetDataS2C.prototype.friendReqs = $util.emptyArray;

    /**
     * GamerLoginGetDataS2C friends.
     * @member {Array.<IGamerFriend>} friends
     * @memberof GamerLoginGetDataS2C
     * @instance
     */
    GamerLoginGetDataS2C.prototype.friends = $util.emptyArray;

    /**
     * GamerLoginGetDataS2C lengthRank.
     * @member {number} lengthRank
     * @memberof GamerLoginGetDataS2C
     * @instance
     */
    GamerLoginGetDataS2C.prototype.lengthRank = 0;

    /**
     * Creates a new GamerLoginGetDataS2C instance using the specified properties.
     * @function create
     * @memberof GamerLoginGetDataS2C
     * @static
     * @param {IGamerLoginGetDataS2C=} [properties] Properties to set
     * @returns {GamerLoginGetDataS2C} GamerLoginGetDataS2C instance
     */
    GamerLoginGetDataS2C.create = function create(properties) {
        return new GamerLoginGetDataS2C(properties);
    };

    /**
     * Encodes the specified GamerLoginGetDataS2C message. Does not implicitly {@link GamerLoginGetDataS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerLoginGetDataS2C
     * @static
     * @param {IGamerLoginGetDataS2C} message GamerLoginGetDataS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerLoginGetDataS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        if (message.time != null && message.hasOwnProperty("time"))
            $root.ServerTime.encode(message.time, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.friendReqs != null && message.friendReqs.length)
            for (var i = 0; i < message.friendReqs.length; ++i)
                $root.GamerFriendRequest.encode(message.friendReqs[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.friends != null && message.friends.length)
            for (var i = 0; i < message.friends.length; ++i)
                $root.GamerFriend.encode(message.friends[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.lengthRank != null && message.hasOwnProperty("lengthRank"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.lengthRank);
        return writer;
    };

    /**
     * Encodes the specified GamerLoginGetDataS2C message, length delimited. Does not implicitly {@link GamerLoginGetDataS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerLoginGetDataS2C
     * @static
     * @param {IGamerLoginGetDataS2C} message GamerLoginGetDataS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerLoginGetDataS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerLoginGetDataS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerLoginGetDataS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerLoginGetDataS2C} GamerLoginGetDataS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerLoginGetDataS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerLoginGetDataS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            case 2:
                message.time = $root.ServerTime.decode(reader, reader.uint32());
                break;
            case 3:
                if (!(message.friendReqs && message.friendReqs.length))
                    message.friendReqs = [];
                message.friendReqs.push($root.GamerFriendRequest.decode(reader, reader.uint32()));
                break;
            case 4:
                if (!(message.friends && message.friends.length))
                    message.friends = [];
                message.friends.push($root.GamerFriend.decode(reader, reader.uint32()));
                break;
            case 5:
                message.lengthRank = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerLoginGetDataS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerLoginGetDataS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerLoginGetDataS2C} GamerLoginGetDataS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerLoginGetDataS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerLoginGetDataS2C message.
     * @function verify
     * @memberof GamerLoginGetDataS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerLoginGetDataS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        if (message.time != null && message.hasOwnProperty("time")) {
            var error = $root.ServerTime.verify(message.time);
            if (error)
                return "time." + error;
        }
        if (message.friendReqs != null && message.hasOwnProperty("friendReqs")) {
            if (!Array.isArray(message.friendReqs))
                return "friendReqs: array expected";
            for (var i = 0; i < message.friendReqs.length; ++i) {
                var error = $root.GamerFriendRequest.verify(message.friendReqs[i]);
                if (error)
                    return "friendReqs." + error;
            }
        }
        if (message.friends != null && message.hasOwnProperty("friends")) {
            if (!Array.isArray(message.friends))
                return "friends: array expected";
            for (var i = 0; i < message.friends.length; ++i) {
                var error = $root.GamerFriend.verify(message.friends[i]);
                if (error)
                    return "friends." + error;
            }
        }
        if (message.lengthRank != null && message.hasOwnProperty("lengthRank"))
            if (!$util.isInteger(message.lengthRank))
                return "lengthRank: integer expected";
        return null;
    };

    /**
     * Creates a GamerLoginGetDataS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerLoginGetDataS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerLoginGetDataS2C} GamerLoginGetDataS2C
     */
    GamerLoginGetDataS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerLoginGetDataS2C)
            return object;
        var message = new $root.GamerLoginGetDataS2C();
        if (object.error != null)
            message.error = object.error | 0;
        if (object.time != null) {
            if (typeof object.time !== "object")
                throw TypeError(".GamerLoginGetDataS2C.time: object expected");
            message.time = $root.ServerTime.fromObject(object.time);
        }
        if (object.friendReqs) {
            if (!Array.isArray(object.friendReqs))
                throw TypeError(".GamerLoginGetDataS2C.friendReqs: array expected");
            message.friendReqs = [];
            for (var i = 0; i < object.friendReqs.length; ++i) {
                if (typeof object.friendReqs[i] !== "object")
                    throw TypeError(".GamerLoginGetDataS2C.friendReqs: object expected");
                message.friendReqs[i] = $root.GamerFriendRequest.fromObject(object.friendReqs[i]);
            }
        }
        if (object.friends) {
            if (!Array.isArray(object.friends))
                throw TypeError(".GamerLoginGetDataS2C.friends: array expected");
            message.friends = [];
            for (var i = 0; i < object.friends.length; ++i) {
                if (typeof object.friends[i] !== "object")
                    throw TypeError(".GamerLoginGetDataS2C.friends: object expected");
                message.friends[i] = $root.GamerFriend.fromObject(object.friends[i]);
            }
        }
        if (object.lengthRank != null)
            message.lengthRank = object.lengthRank | 0;
        return message;
    };

    /**
     * Creates a plain object from a GamerLoginGetDataS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerLoginGetDataS2C
     * @static
     * @param {GamerLoginGetDataS2C} message GamerLoginGetDataS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerLoginGetDataS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.friendReqs = [];
            object.friends = [];
        }
        if (options.defaults) {
            object.error = 0;
            object.time = null;
            object.lengthRank = 0;
        }
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        if (message.time != null && message.hasOwnProperty("time"))
            object.time = $root.ServerTime.toObject(message.time, options);
        if (message.friendReqs && message.friendReqs.length) {
            object.friendReqs = [];
            for (var j = 0; j < message.friendReqs.length; ++j)
                object.friendReqs[j] = $root.GamerFriendRequest.toObject(message.friendReqs[j], options);
        }
        if (message.friends && message.friends.length) {
            object.friends = [];
            for (var j = 0; j < message.friends.length; ++j)
                object.friends[j] = $root.GamerFriend.toObject(message.friends[j], options);
        }
        if (message.lengthRank != null && message.hasOwnProperty("lengthRank"))
            object.lengthRank = message.lengthRank;
        return object;
    };

    /**
     * Converts this GamerLoginGetDataS2C to JSON.
     * @function toJSON
     * @memberof GamerLoginGetDataS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerLoginGetDataS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerLoginGetDataS2C;
})();

$root.ServerTimeC2S = (function() {

    /**
     * Properties of a ServerTimeC2S.
     * @exports IServerTimeC2S
     * @interface IServerTimeC2S
     * @property {number|null} [id] ServerTimeC2S id
     */

    /**
     * Constructs a new ServerTimeC2S.
     * @exports ServerTimeC2S
     * @classdesc Represents a ServerTimeC2S.
     * @implements IServerTimeC2S
     * @constructor
     * @param {IServerTimeC2S=} [properties] Properties to set
     */
    function ServerTimeC2S(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerTimeC2S id.
     * @member {number} id
     * @memberof ServerTimeC2S
     * @instance
     */
    ServerTimeC2S.prototype.id = 0;

    /**
     * Creates a new ServerTimeC2S instance using the specified properties.
     * @function create
     * @memberof ServerTimeC2S
     * @static
     * @param {IServerTimeC2S=} [properties] Properties to set
     * @returns {ServerTimeC2S} ServerTimeC2S instance
     */
    ServerTimeC2S.create = function create(properties) {
        return new ServerTimeC2S(properties);
    };

    /**
     * Encodes the specified ServerTimeC2S message. Does not implicitly {@link ServerTimeC2S.verify|verify} messages.
     * @function encode
     * @memberof ServerTimeC2S
     * @static
     * @param {IServerTimeC2S} message ServerTimeC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerTimeC2S.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        return writer;
    };

    /**
     * Encodes the specified ServerTimeC2S message, length delimited. Does not implicitly {@link ServerTimeC2S.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerTimeC2S
     * @static
     * @param {IServerTimeC2S} message ServerTimeC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerTimeC2S.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerTimeC2S message from the specified reader or buffer.
     * @function decode
     * @memberof ServerTimeC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerTimeC2S} ServerTimeC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerTimeC2S.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerTimeC2S();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerTimeC2S message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerTimeC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerTimeC2S} ServerTimeC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerTimeC2S.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerTimeC2S message.
     * @function verify
     * @memberof ServerTimeC2S
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerTimeC2S.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        return null;
    };

    /**
     * Creates a ServerTimeC2S message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerTimeC2S
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerTimeC2S} ServerTimeC2S
     */
    ServerTimeC2S.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerTimeC2S)
            return object;
        var message = new $root.ServerTimeC2S();
        if (object.id != null)
            message.id = object.id | 0;
        return message;
    };

    /**
     * Creates a plain object from a ServerTimeC2S message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerTimeC2S
     * @static
     * @param {ServerTimeC2S} message ServerTimeC2S
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerTimeC2S.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = 0;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this ServerTimeC2S to JSON.
     * @function toJSON
     * @memberof ServerTimeC2S
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerTimeC2S.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerTimeC2S;
})();

$root.ServerTimeS2C = (function() {

    /**
     * Properties of a ServerTimeS2C.
     * @exports IServerTimeS2C
     * @interface IServerTimeS2C
     * @property {number|null} [error] ServerTimeS2C error
     * @property {IServerTime|null} [time] ServerTimeS2C time
     */

    /**
     * Constructs a new ServerTimeS2C.
     * @exports ServerTimeS2C
     * @classdesc Represents a ServerTimeS2C.
     * @implements IServerTimeS2C
     * @constructor
     * @param {IServerTimeS2C=} [properties] Properties to set
     */
    function ServerTimeS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerTimeS2C error.
     * @member {number} error
     * @memberof ServerTimeS2C
     * @instance
     */
    ServerTimeS2C.prototype.error = 0;

    /**
     * ServerTimeS2C time.
     * @member {IServerTime|null|undefined} time
     * @memberof ServerTimeS2C
     * @instance
     */
    ServerTimeS2C.prototype.time = null;

    /**
     * Creates a new ServerTimeS2C instance using the specified properties.
     * @function create
     * @memberof ServerTimeS2C
     * @static
     * @param {IServerTimeS2C=} [properties] Properties to set
     * @returns {ServerTimeS2C} ServerTimeS2C instance
     */
    ServerTimeS2C.create = function create(properties) {
        return new ServerTimeS2C(properties);
    };

    /**
     * Encodes the specified ServerTimeS2C message. Does not implicitly {@link ServerTimeS2C.verify|verify} messages.
     * @function encode
     * @memberof ServerTimeS2C
     * @static
     * @param {IServerTimeS2C} message ServerTimeS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerTimeS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        if (message.time != null && message.hasOwnProperty("time"))
            $root.ServerTime.encode(message.time, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ServerTimeS2C message, length delimited. Does not implicitly {@link ServerTimeS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerTimeS2C
     * @static
     * @param {IServerTimeS2C} message ServerTimeS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerTimeS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerTimeS2C message from the specified reader or buffer.
     * @function decode
     * @memberof ServerTimeS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerTimeS2C} ServerTimeS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerTimeS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerTimeS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            case 2:
                message.time = $root.ServerTime.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerTimeS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerTimeS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerTimeS2C} ServerTimeS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerTimeS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerTimeS2C message.
     * @function verify
     * @memberof ServerTimeS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerTimeS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        if (message.time != null && message.hasOwnProperty("time")) {
            var error = $root.ServerTime.verify(message.time);
            if (error)
                return "time." + error;
        }
        return null;
    };

    /**
     * Creates a ServerTimeS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerTimeS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerTimeS2C} ServerTimeS2C
     */
    ServerTimeS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerTimeS2C)
            return object;
        var message = new $root.ServerTimeS2C();
        if (object.error != null)
            message.error = object.error | 0;
        if (object.time != null) {
            if (typeof object.time !== "object")
                throw TypeError(".ServerTimeS2C.time: object expected");
            message.time = $root.ServerTime.fromObject(object.time);
        }
        return message;
    };

    /**
     * Creates a plain object from a ServerTimeS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerTimeS2C
     * @static
     * @param {ServerTimeS2C} message ServerTimeS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerTimeS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.error = 0;
            object.time = null;
        }
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        if (message.time != null && message.hasOwnProperty("time"))
            object.time = $root.ServerTime.toObject(message.time, options);
        return object;
    };

    /**
     * Converts this ServerTimeS2C to JSON.
     * @function toJSON
     * @memberof ServerTimeS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerTimeS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerTimeS2C;
})();

$root.GamerNotifyLoginOtherS2C = (function() {

    /**
     * Properties of a GamerNotifyLoginOtherS2C.
     * @exports IGamerNotifyLoginOtherS2C
     * @interface IGamerNotifyLoginOtherS2C
     * @property {number|null} [error] GamerNotifyLoginOtherS2C error
     */

    /**
     * Constructs a new GamerNotifyLoginOtherS2C.
     * @exports GamerNotifyLoginOtherS2C
     * @classdesc Represents a GamerNotifyLoginOtherS2C.
     * @implements IGamerNotifyLoginOtherS2C
     * @constructor
     * @param {IGamerNotifyLoginOtherS2C=} [properties] Properties to set
     */
    function GamerNotifyLoginOtherS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerNotifyLoginOtherS2C error.
     * @member {number} error
     * @memberof GamerNotifyLoginOtherS2C
     * @instance
     */
    GamerNotifyLoginOtherS2C.prototype.error = 0;

    /**
     * Creates a new GamerNotifyLoginOtherS2C instance using the specified properties.
     * @function create
     * @memberof GamerNotifyLoginOtherS2C
     * @static
     * @param {IGamerNotifyLoginOtherS2C=} [properties] Properties to set
     * @returns {GamerNotifyLoginOtherS2C} GamerNotifyLoginOtherS2C instance
     */
    GamerNotifyLoginOtherS2C.create = function create(properties) {
        return new GamerNotifyLoginOtherS2C(properties);
    };

    /**
     * Encodes the specified GamerNotifyLoginOtherS2C message. Does not implicitly {@link GamerNotifyLoginOtherS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerNotifyLoginOtherS2C
     * @static
     * @param {IGamerNotifyLoginOtherS2C} message GamerNotifyLoginOtherS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNotifyLoginOtherS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        return writer;
    };

    /**
     * Encodes the specified GamerNotifyLoginOtherS2C message, length delimited. Does not implicitly {@link GamerNotifyLoginOtherS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerNotifyLoginOtherS2C
     * @static
     * @param {IGamerNotifyLoginOtherS2C} message GamerNotifyLoginOtherS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNotifyLoginOtherS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerNotifyLoginOtherS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerNotifyLoginOtherS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerNotifyLoginOtherS2C} GamerNotifyLoginOtherS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNotifyLoginOtherS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerNotifyLoginOtherS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerNotifyLoginOtherS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerNotifyLoginOtherS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerNotifyLoginOtherS2C} GamerNotifyLoginOtherS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNotifyLoginOtherS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerNotifyLoginOtherS2C message.
     * @function verify
     * @memberof GamerNotifyLoginOtherS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerNotifyLoginOtherS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        return null;
    };

    /**
     * Creates a GamerNotifyLoginOtherS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerNotifyLoginOtherS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerNotifyLoginOtherS2C} GamerNotifyLoginOtherS2C
     */
    GamerNotifyLoginOtherS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerNotifyLoginOtherS2C)
            return object;
        var message = new $root.GamerNotifyLoginOtherS2C();
        if (object.error != null)
            message.error = object.error | 0;
        return message;
    };

    /**
     * Creates a plain object from a GamerNotifyLoginOtherS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerNotifyLoginOtherS2C
     * @static
     * @param {GamerNotifyLoginOtherS2C} message GamerNotifyLoginOtherS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerNotifyLoginOtherS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.error = 0;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        return object;
    };

    /**
     * Converts this GamerNotifyLoginOtherS2C to JSON.
     * @function toJSON
     * @memberof GamerNotifyLoginOtherS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerNotifyLoginOtherS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerNotifyLoginOtherS2C;
})();

$root.GamerSubChatChannelC2S = (function() {

    /**
     * Properties of a GamerSubChatChannelC2S.
     * @exports IGamerSubChatChannelC2S
     * @interface IGamerSubChatChannelC2S
     * @property {number|null} [id] GamerSubChatChannelC2S id
     * @property {number|null} [channel] GamerSubChatChannelC2S channel
     * @property {boolean|null} [open] GamerSubChatChannelC2S open
     */

    /**
     * Constructs a new GamerSubChatChannelC2S.
     * @exports GamerSubChatChannelC2S
     * @classdesc Represents a GamerSubChatChannelC2S.
     * @implements IGamerSubChatChannelC2S
     * @constructor
     * @param {IGamerSubChatChannelC2S=} [properties] Properties to set
     */
    function GamerSubChatChannelC2S(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerSubChatChannelC2S id.
     * @member {number} id
     * @memberof GamerSubChatChannelC2S
     * @instance
     */
    GamerSubChatChannelC2S.prototype.id = 0;

    /**
     * GamerSubChatChannelC2S channel.
     * @member {number} channel
     * @memberof GamerSubChatChannelC2S
     * @instance
     */
    GamerSubChatChannelC2S.prototype.channel = 0;

    /**
     * GamerSubChatChannelC2S open.
     * @member {boolean} open
     * @memberof GamerSubChatChannelC2S
     * @instance
     */
    GamerSubChatChannelC2S.prototype.open = false;

    /**
     * Creates a new GamerSubChatChannelC2S instance using the specified properties.
     * @function create
     * @memberof GamerSubChatChannelC2S
     * @static
     * @param {IGamerSubChatChannelC2S=} [properties] Properties to set
     * @returns {GamerSubChatChannelC2S} GamerSubChatChannelC2S instance
     */
    GamerSubChatChannelC2S.create = function create(properties) {
        return new GamerSubChatChannelC2S(properties);
    };

    /**
     * Encodes the specified GamerSubChatChannelC2S message. Does not implicitly {@link GamerSubChatChannelC2S.verify|verify} messages.
     * @function encode
     * @memberof GamerSubChatChannelC2S
     * @static
     * @param {IGamerSubChatChannelC2S} message GamerSubChatChannelC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerSubChatChannelC2S.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.channel != null && message.hasOwnProperty("channel"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.channel);
        if (message.open != null && message.hasOwnProperty("open"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.open);
        return writer;
    };

    /**
     * Encodes the specified GamerSubChatChannelC2S message, length delimited. Does not implicitly {@link GamerSubChatChannelC2S.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerSubChatChannelC2S
     * @static
     * @param {IGamerSubChatChannelC2S} message GamerSubChatChannelC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerSubChatChannelC2S.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerSubChatChannelC2S message from the specified reader or buffer.
     * @function decode
     * @memberof GamerSubChatChannelC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerSubChatChannelC2S} GamerSubChatChannelC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerSubChatChannelC2S.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerSubChatChannelC2S();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.channel = reader.int32();
                break;
            case 3:
                message.open = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerSubChatChannelC2S message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerSubChatChannelC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerSubChatChannelC2S} GamerSubChatChannelC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerSubChatChannelC2S.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerSubChatChannelC2S message.
     * @function verify
     * @memberof GamerSubChatChannelC2S
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerSubChatChannelC2S.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.channel != null && message.hasOwnProperty("channel"))
            if (!$util.isInteger(message.channel))
                return "channel: integer expected";
        if (message.open != null && message.hasOwnProperty("open"))
            if (typeof message.open !== "boolean")
                return "open: boolean expected";
        return null;
    };

    /**
     * Creates a GamerSubChatChannelC2S message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerSubChatChannelC2S
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerSubChatChannelC2S} GamerSubChatChannelC2S
     */
    GamerSubChatChannelC2S.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerSubChatChannelC2S)
            return object;
        var message = new $root.GamerSubChatChannelC2S();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.channel != null)
            message.channel = object.channel | 0;
        if (object.open != null)
            message.open = Boolean(object.open);
        return message;
    };

    /**
     * Creates a plain object from a GamerSubChatChannelC2S message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerSubChatChannelC2S
     * @static
     * @param {GamerSubChatChannelC2S} message GamerSubChatChannelC2S
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerSubChatChannelC2S.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.channel = 0;
            object.open = false;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.channel != null && message.hasOwnProperty("channel"))
            object.channel = message.channel;
        if (message.open != null && message.hasOwnProperty("open"))
            object.open = message.open;
        return object;
    };

    /**
     * Converts this GamerSubChatChannelC2S to JSON.
     * @function toJSON
     * @memberof GamerSubChatChannelC2S
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerSubChatChannelC2S.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerSubChatChannelC2S;
})();

$root.GamerSubChatChannelS2C = (function() {

    /**
     * Properties of a GamerSubChatChannelS2C.
     * @exports IGamerSubChatChannelS2C
     * @interface IGamerSubChatChannelS2C
     * @property {number|null} [error] GamerSubChatChannelS2C error
     */

    /**
     * Constructs a new GamerSubChatChannelS2C.
     * @exports GamerSubChatChannelS2C
     * @classdesc Represents a GamerSubChatChannelS2C.
     * @implements IGamerSubChatChannelS2C
     * @constructor
     * @param {IGamerSubChatChannelS2C=} [properties] Properties to set
     */
    function GamerSubChatChannelS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerSubChatChannelS2C error.
     * @member {number} error
     * @memberof GamerSubChatChannelS2C
     * @instance
     */
    GamerSubChatChannelS2C.prototype.error = 0;

    /**
     * Creates a new GamerSubChatChannelS2C instance using the specified properties.
     * @function create
     * @memberof GamerSubChatChannelS2C
     * @static
     * @param {IGamerSubChatChannelS2C=} [properties] Properties to set
     * @returns {GamerSubChatChannelS2C} GamerSubChatChannelS2C instance
     */
    GamerSubChatChannelS2C.create = function create(properties) {
        return new GamerSubChatChannelS2C(properties);
    };

    /**
     * Encodes the specified GamerSubChatChannelS2C message. Does not implicitly {@link GamerSubChatChannelS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerSubChatChannelS2C
     * @static
     * @param {IGamerSubChatChannelS2C} message GamerSubChatChannelS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerSubChatChannelS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        return writer;
    };

    /**
     * Encodes the specified GamerSubChatChannelS2C message, length delimited. Does not implicitly {@link GamerSubChatChannelS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerSubChatChannelS2C
     * @static
     * @param {IGamerSubChatChannelS2C} message GamerSubChatChannelS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerSubChatChannelS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerSubChatChannelS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerSubChatChannelS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerSubChatChannelS2C} GamerSubChatChannelS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerSubChatChannelS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerSubChatChannelS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerSubChatChannelS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerSubChatChannelS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerSubChatChannelS2C} GamerSubChatChannelS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerSubChatChannelS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerSubChatChannelS2C message.
     * @function verify
     * @memberof GamerSubChatChannelS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerSubChatChannelS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        return null;
    };

    /**
     * Creates a GamerSubChatChannelS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerSubChatChannelS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerSubChatChannelS2C} GamerSubChatChannelS2C
     */
    GamerSubChatChannelS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerSubChatChannelS2C)
            return object;
        var message = new $root.GamerSubChatChannelS2C();
        if (object.error != null)
            message.error = object.error | 0;
        return message;
    };

    /**
     * Creates a plain object from a GamerSubChatChannelS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerSubChatChannelS2C
     * @static
     * @param {GamerSubChatChannelS2C} message GamerSubChatChannelS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerSubChatChannelS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.error = 0;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        return object;
    };

    /**
     * Converts this GamerSubChatChannelS2C to JSON.
     * @function toJSON
     * @memberof GamerSubChatChannelS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerSubChatChannelS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerSubChatChannelS2C;
})();

$root.GamerFriendChatC2S = (function() {

    /**
     * Properties of a GamerFriendChatC2S.
     * @exports IGamerFriendChatC2S
     * @interface IGamerFriendChatC2S
     * @property {number|null} [id] GamerFriendChatC2S id
     * @property {number|null} [toId] GamerFriendChatC2S toId
     * @property {string|null} [msg] GamerFriendChatC2S msg
     */

    /**
     * Constructs a new GamerFriendChatC2S.
     * @exports GamerFriendChatC2S
     * @classdesc Represents a GamerFriendChatC2S.
     * @implements IGamerFriendChatC2S
     * @constructor
     * @param {IGamerFriendChatC2S=} [properties] Properties to set
     */
    function GamerFriendChatC2S(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerFriendChatC2S id.
     * @member {number} id
     * @memberof GamerFriendChatC2S
     * @instance
     */
    GamerFriendChatC2S.prototype.id = 0;

    /**
     * GamerFriendChatC2S toId.
     * @member {number} toId
     * @memberof GamerFriendChatC2S
     * @instance
     */
    GamerFriendChatC2S.prototype.toId = 0;

    /**
     * GamerFriendChatC2S msg.
     * @member {string} msg
     * @memberof GamerFriendChatC2S
     * @instance
     */
    GamerFriendChatC2S.prototype.msg = "";

    /**
     * Creates a new GamerFriendChatC2S instance using the specified properties.
     * @function create
     * @memberof GamerFriendChatC2S
     * @static
     * @param {IGamerFriendChatC2S=} [properties] Properties to set
     * @returns {GamerFriendChatC2S} GamerFriendChatC2S instance
     */
    GamerFriendChatC2S.create = function create(properties) {
        return new GamerFriendChatC2S(properties);
    };

    /**
     * Encodes the specified GamerFriendChatC2S message. Does not implicitly {@link GamerFriendChatC2S.verify|verify} messages.
     * @function encode
     * @memberof GamerFriendChatC2S
     * @static
     * @param {IGamerFriendChatC2S} message GamerFriendChatC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerFriendChatC2S.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.toId != null && message.hasOwnProperty("toId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.toId);
        if (message.msg != null && message.hasOwnProperty("msg"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.msg);
        return writer;
    };

    /**
     * Encodes the specified GamerFriendChatC2S message, length delimited. Does not implicitly {@link GamerFriendChatC2S.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerFriendChatC2S
     * @static
     * @param {IGamerFriendChatC2S} message GamerFriendChatC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerFriendChatC2S.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerFriendChatC2S message from the specified reader or buffer.
     * @function decode
     * @memberof GamerFriendChatC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerFriendChatC2S} GamerFriendChatC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerFriendChatC2S.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerFriendChatC2S();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.toId = reader.int32();
                break;
            case 3:
                message.msg = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerFriendChatC2S message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerFriendChatC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerFriendChatC2S} GamerFriendChatC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerFriendChatC2S.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerFriendChatC2S message.
     * @function verify
     * @memberof GamerFriendChatC2S
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerFriendChatC2S.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.toId != null && message.hasOwnProperty("toId"))
            if (!$util.isInteger(message.toId))
                return "toId: integer expected";
        if (message.msg != null && message.hasOwnProperty("msg"))
            if (!$util.isString(message.msg))
                return "msg: string expected";
        return null;
    };

    /**
     * Creates a GamerFriendChatC2S message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerFriendChatC2S
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerFriendChatC2S} GamerFriendChatC2S
     */
    GamerFriendChatC2S.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerFriendChatC2S)
            return object;
        var message = new $root.GamerFriendChatC2S();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.toId != null)
            message.toId = object.toId | 0;
        if (object.msg != null)
            message.msg = String(object.msg);
        return message;
    };

    /**
     * Creates a plain object from a GamerFriendChatC2S message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerFriendChatC2S
     * @static
     * @param {GamerFriendChatC2S} message GamerFriendChatC2S
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerFriendChatC2S.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.toId = 0;
            object.msg = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.toId != null && message.hasOwnProperty("toId"))
            object.toId = message.toId;
        if (message.msg != null && message.hasOwnProperty("msg"))
            object.msg = message.msg;
        return object;
    };

    /**
     * Converts this GamerFriendChatC2S to JSON.
     * @function toJSON
     * @memberof GamerFriendChatC2S
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerFriendChatC2S.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerFriendChatC2S;
})();

$root.GamerFriendChatS2C = (function() {

    /**
     * Properties of a GamerFriendChatS2C.
     * @exports IGamerFriendChatS2C
     * @interface IGamerFriendChatS2C
     * @property {number|null} [error] GamerFriendChatS2C error
     */

    /**
     * Constructs a new GamerFriendChatS2C.
     * @exports GamerFriendChatS2C
     * @classdesc Represents a GamerFriendChatS2C.
     * @implements IGamerFriendChatS2C
     * @constructor
     * @param {IGamerFriendChatS2C=} [properties] Properties to set
     */
    function GamerFriendChatS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerFriendChatS2C error.
     * @member {number} error
     * @memberof GamerFriendChatS2C
     * @instance
     */
    GamerFriendChatS2C.prototype.error = 0;

    /**
     * Creates a new GamerFriendChatS2C instance using the specified properties.
     * @function create
     * @memberof GamerFriendChatS2C
     * @static
     * @param {IGamerFriendChatS2C=} [properties] Properties to set
     * @returns {GamerFriendChatS2C} GamerFriendChatS2C instance
     */
    GamerFriendChatS2C.create = function create(properties) {
        return new GamerFriendChatS2C(properties);
    };

    /**
     * Encodes the specified GamerFriendChatS2C message. Does not implicitly {@link GamerFriendChatS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerFriendChatS2C
     * @static
     * @param {IGamerFriendChatS2C} message GamerFriendChatS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerFriendChatS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        return writer;
    };

    /**
     * Encodes the specified GamerFriendChatS2C message, length delimited. Does not implicitly {@link GamerFriendChatS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerFriendChatS2C
     * @static
     * @param {IGamerFriendChatS2C} message GamerFriendChatS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerFriendChatS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerFriendChatS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerFriendChatS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerFriendChatS2C} GamerFriendChatS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerFriendChatS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerFriendChatS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerFriendChatS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerFriendChatS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerFriendChatS2C} GamerFriendChatS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerFriendChatS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerFriendChatS2C message.
     * @function verify
     * @memberof GamerFriendChatS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerFriendChatS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        return null;
    };

    /**
     * Creates a GamerFriendChatS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerFriendChatS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerFriendChatS2C} GamerFriendChatS2C
     */
    GamerFriendChatS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerFriendChatS2C)
            return object;
        var message = new $root.GamerFriendChatS2C();
        if (object.error != null)
            message.error = object.error | 0;
        return message;
    };

    /**
     * Creates a plain object from a GamerFriendChatS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerFriendChatS2C
     * @static
     * @param {GamerFriendChatS2C} message GamerFriendChatS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerFriendChatS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.error = 0;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        return object;
    };

    /**
     * Converts this GamerFriendChatS2C to JSON.
     * @function toJSON
     * @memberof GamerFriendChatS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerFriendChatS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerFriendChatS2C;
})();

$root.GamerWorldChatC2S = (function() {

    /**
     * Properties of a GamerWorldChatC2S.
     * @exports IGamerWorldChatC2S
     * @interface IGamerWorldChatC2S
     * @property {number|null} [id] GamerWorldChatC2S id
     * @property {number|null} [server] GamerWorldChatC2S server
     * @property {string|null} [msg] GamerWorldChatC2S msg
     */

    /**
     * Constructs a new GamerWorldChatC2S.
     * @exports GamerWorldChatC2S
     * @classdesc Represents a GamerWorldChatC2S.
     * @implements IGamerWorldChatC2S
     * @constructor
     * @param {IGamerWorldChatC2S=} [properties] Properties to set
     */
    function GamerWorldChatC2S(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerWorldChatC2S id.
     * @member {number} id
     * @memberof GamerWorldChatC2S
     * @instance
     */
    GamerWorldChatC2S.prototype.id = 0;

    /**
     * GamerWorldChatC2S server.
     * @member {number} server
     * @memberof GamerWorldChatC2S
     * @instance
     */
    GamerWorldChatC2S.prototype.server = 0;

    /**
     * GamerWorldChatC2S msg.
     * @member {string} msg
     * @memberof GamerWorldChatC2S
     * @instance
     */
    GamerWorldChatC2S.prototype.msg = "";

    /**
     * Creates a new GamerWorldChatC2S instance using the specified properties.
     * @function create
     * @memberof GamerWorldChatC2S
     * @static
     * @param {IGamerWorldChatC2S=} [properties] Properties to set
     * @returns {GamerWorldChatC2S} GamerWorldChatC2S instance
     */
    GamerWorldChatC2S.create = function create(properties) {
        return new GamerWorldChatC2S(properties);
    };

    /**
     * Encodes the specified GamerWorldChatC2S message. Does not implicitly {@link GamerWorldChatC2S.verify|verify} messages.
     * @function encode
     * @memberof GamerWorldChatC2S
     * @static
     * @param {IGamerWorldChatC2S} message GamerWorldChatC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerWorldChatC2S.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.server != null && message.hasOwnProperty("server"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.server);
        if (message.msg != null && message.hasOwnProperty("msg"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.msg);
        return writer;
    };

    /**
     * Encodes the specified GamerWorldChatC2S message, length delimited. Does not implicitly {@link GamerWorldChatC2S.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerWorldChatC2S
     * @static
     * @param {IGamerWorldChatC2S} message GamerWorldChatC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerWorldChatC2S.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerWorldChatC2S message from the specified reader or buffer.
     * @function decode
     * @memberof GamerWorldChatC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerWorldChatC2S} GamerWorldChatC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerWorldChatC2S.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerWorldChatC2S();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.server = reader.int32();
                break;
            case 3:
                message.msg = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerWorldChatC2S message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerWorldChatC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerWorldChatC2S} GamerWorldChatC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerWorldChatC2S.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerWorldChatC2S message.
     * @function verify
     * @memberof GamerWorldChatC2S
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerWorldChatC2S.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.server != null && message.hasOwnProperty("server"))
            if (!$util.isInteger(message.server))
                return "server: integer expected";
        if (message.msg != null && message.hasOwnProperty("msg"))
            if (!$util.isString(message.msg))
                return "msg: string expected";
        return null;
    };

    /**
     * Creates a GamerWorldChatC2S message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerWorldChatC2S
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerWorldChatC2S} GamerWorldChatC2S
     */
    GamerWorldChatC2S.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerWorldChatC2S)
            return object;
        var message = new $root.GamerWorldChatC2S();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.server != null)
            message.server = object.server | 0;
        if (object.msg != null)
            message.msg = String(object.msg);
        return message;
    };

    /**
     * Creates a plain object from a GamerWorldChatC2S message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerWorldChatC2S
     * @static
     * @param {GamerWorldChatC2S} message GamerWorldChatC2S
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerWorldChatC2S.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.server = 0;
            object.msg = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.server != null && message.hasOwnProperty("server"))
            object.server = message.server;
        if (message.msg != null && message.hasOwnProperty("msg"))
            object.msg = message.msg;
        return object;
    };

    /**
     * Converts this GamerWorldChatC2S to JSON.
     * @function toJSON
     * @memberof GamerWorldChatC2S
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerWorldChatC2S.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerWorldChatC2S;
})();

$root.GamerWorldChatS2C = (function() {

    /**
     * Properties of a GamerWorldChatS2C.
     * @exports IGamerWorldChatS2C
     * @interface IGamerWorldChatS2C
     * @property {number|null} [error] GamerWorldChatS2C error
     */

    /**
     * Constructs a new GamerWorldChatS2C.
     * @exports GamerWorldChatS2C
     * @classdesc Represents a GamerWorldChatS2C.
     * @implements IGamerWorldChatS2C
     * @constructor
     * @param {IGamerWorldChatS2C=} [properties] Properties to set
     */
    function GamerWorldChatS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerWorldChatS2C error.
     * @member {number} error
     * @memberof GamerWorldChatS2C
     * @instance
     */
    GamerWorldChatS2C.prototype.error = 0;

    /**
     * Creates a new GamerWorldChatS2C instance using the specified properties.
     * @function create
     * @memberof GamerWorldChatS2C
     * @static
     * @param {IGamerWorldChatS2C=} [properties] Properties to set
     * @returns {GamerWorldChatS2C} GamerWorldChatS2C instance
     */
    GamerWorldChatS2C.create = function create(properties) {
        return new GamerWorldChatS2C(properties);
    };

    /**
     * Encodes the specified GamerWorldChatS2C message. Does not implicitly {@link GamerWorldChatS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerWorldChatS2C
     * @static
     * @param {IGamerWorldChatS2C} message GamerWorldChatS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerWorldChatS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        return writer;
    };

    /**
     * Encodes the specified GamerWorldChatS2C message, length delimited. Does not implicitly {@link GamerWorldChatS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerWorldChatS2C
     * @static
     * @param {IGamerWorldChatS2C} message GamerWorldChatS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerWorldChatS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerWorldChatS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerWorldChatS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerWorldChatS2C} GamerWorldChatS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerWorldChatS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerWorldChatS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerWorldChatS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerWorldChatS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerWorldChatS2C} GamerWorldChatS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerWorldChatS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerWorldChatS2C message.
     * @function verify
     * @memberof GamerWorldChatS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerWorldChatS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        return null;
    };

    /**
     * Creates a GamerWorldChatS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerWorldChatS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerWorldChatS2C} GamerWorldChatS2C
     */
    GamerWorldChatS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerWorldChatS2C)
            return object;
        var message = new $root.GamerWorldChatS2C();
        if (object.error != null)
            message.error = object.error | 0;
        return message;
    };

    /**
     * Creates a plain object from a GamerWorldChatS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerWorldChatS2C
     * @static
     * @param {GamerWorldChatS2C} message GamerWorldChatS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerWorldChatS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.error = 0;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        return object;
    };

    /**
     * Converts this GamerWorldChatS2C to JSON.
     * @function toJSON
     * @memberof GamerWorldChatS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerWorldChatS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerWorldChatS2C;
})();

$root.GamerTestChatC2S = (function() {

    /**
     * Properties of a GamerTestChatC2S.
     * @exports IGamerTestChatC2S
     * @interface IGamerTestChatC2S
     * @property {number|null} [id] GamerTestChatC2S id
     * @property {number|null} [toId] GamerTestChatC2S toId
     * @property {string|null} [msg] GamerTestChatC2S msg
     */

    /**
     * Constructs a new GamerTestChatC2S.
     * @exports GamerTestChatC2S
     * @classdesc Represents a GamerTestChatC2S.
     * @implements IGamerTestChatC2S
     * @constructor
     * @param {IGamerTestChatC2S=} [properties] Properties to set
     */
    function GamerTestChatC2S(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerTestChatC2S id.
     * @member {number} id
     * @memberof GamerTestChatC2S
     * @instance
     */
    GamerTestChatC2S.prototype.id = 0;

    /**
     * GamerTestChatC2S toId.
     * @member {number} toId
     * @memberof GamerTestChatC2S
     * @instance
     */
    GamerTestChatC2S.prototype.toId = 0;

    /**
     * GamerTestChatC2S msg.
     * @member {string} msg
     * @memberof GamerTestChatC2S
     * @instance
     */
    GamerTestChatC2S.prototype.msg = "";

    /**
     * Creates a new GamerTestChatC2S instance using the specified properties.
     * @function create
     * @memberof GamerTestChatC2S
     * @static
     * @param {IGamerTestChatC2S=} [properties] Properties to set
     * @returns {GamerTestChatC2S} GamerTestChatC2S instance
     */
    GamerTestChatC2S.create = function create(properties) {
        return new GamerTestChatC2S(properties);
    };

    /**
     * Encodes the specified GamerTestChatC2S message. Does not implicitly {@link GamerTestChatC2S.verify|verify} messages.
     * @function encode
     * @memberof GamerTestChatC2S
     * @static
     * @param {IGamerTestChatC2S} message GamerTestChatC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerTestChatC2S.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.toId != null && message.hasOwnProperty("toId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.toId);
        if (message.msg != null && message.hasOwnProperty("msg"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.msg);
        return writer;
    };

    /**
     * Encodes the specified GamerTestChatC2S message, length delimited. Does not implicitly {@link GamerTestChatC2S.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerTestChatC2S
     * @static
     * @param {IGamerTestChatC2S} message GamerTestChatC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerTestChatC2S.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerTestChatC2S message from the specified reader or buffer.
     * @function decode
     * @memberof GamerTestChatC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerTestChatC2S} GamerTestChatC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerTestChatC2S.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerTestChatC2S();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.toId = reader.int32();
                break;
            case 3:
                message.msg = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerTestChatC2S message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerTestChatC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerTestChatC2S} GamerTestChatC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerTestChatC2S.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerTestChatC2S message.
     * @function verify
     * @memberof GamerTestChatC2S
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerTestChatC2S.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.toId != null && message.hasOwnProperty("toId"))
            if (!$util.isInteger(message.toId))
                return "toId: integer expected";
        if (message.msg != null && message.hasOwnProperty("msg"))
            if (!$util.isString(message.msg))
                return "msg: string expected";
        return null;
    };

    /**
     * Creates a GamerTestChatC2S message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerTestChatC2S
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerTestChatC2S} GamerTestChatC2S
     */
    GamerTestChatC2S.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerTestChatC2S)
            return object;
        var message = new $root.GamerTestChatC2S();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.toId != null)
            message.toId = object.toId | 0;
        if (object.msg != null)
            message.msg = String(object.msg);
        return message;
    };

    /**
     * Creates a plain object from a GamerTestChatC2S message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerTestChatC2S
     * @static
     * @param {GamerTestChatC2S} message GamerTestChatC2S
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerTestChatC2S.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.toId = 0;
            object.msg = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.toId != null && message.hasOwnProperty("toId"))
            object.toId = message.toId;
        if (message.msg != null && message.hasOwnProperty("msg"))
            object.msg = message.msg;
        return object;
    };

    /**
     * Converts this GamerTestChatC2S to JSON.
     * @function toJSON
     * @memberof GamerTestChatC2S
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerTestChatC2S.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerTestChatC2S;
})();

$root.GamerTestChatS2C = (function() {

    /**
     * Properties of a GamerTestChatS2C.
     * @exports IGamerTestChatS2C
     * @interface IGamerTestChatS2C
     * @property {number|null} [error] GamerTestChatS2C error
     * @property {number|null} [id] GamerTestChatS2C id
     */

    /**
     * Constructs a new GamerTestChatS2C.
     * @exports GamerTestChatS2C
     * @classdesc Represents a GamerTestChatS2C.
     * @implements IGamerTestChatS2C
     * @constructor
     * @param {IGamerTestChatS2C=} [properties] Properties to set
     */
    function GamerTestChatS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerTestChatS2C error.
     * @member {number} error
     * @memberof GamerTestChatS2C
     * @instance
     */
    GamerTestChatS2C.prototype.error = 0;

    /**
     * GamerTestChatS2C id.
     * @member {number} id
     * @memberof GamerTestChatS2C
     * @instance
     */
    GamerTestChatS2C.prototype.id = 0;

    /**
     * Creates a new GamerTestChatS2C instance using the specified properties.
     * @function create
     * @memberof GamerTestChatS2C
     * @static
     * @param {IGamerTestChatS2C=} [properties] Properties to set
     * @returns {GamerTestChatS2C} GamerTestChatS2C instance
     */
    GamerTestChatS2C.create = function create(properties) {
        return new GamerTestChatS2C(properties);
    };

    /**
     * Encodes the specified GamerTestChatS2C message. Does not implicitly {@link GamerTestChatS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerTestChatS2C
     * @static
     * @param {IGamerTestChatS2C} message GamerTestChatS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerTestChatS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
        return writer;
    };

    /**
     * Encodes the specified GamerTestChatS2C message, length delimited. Does not implicitly {@link GamerTestChatS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerTestChatS2C
     * @static
     * @param {IGamerTestChatS2C} message GamerTestChatS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerTestChatS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerTestChatS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerTestChatS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerTestChatS2C} GamerTestChatS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerTestChatS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerTestChatS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            case 2:
                message.id = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerTestChatS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerTestChatS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerTestChatS2C} GamerTestChatS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerTestChatS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerTestChatS2C message.
     * @function verify
     * @memberof GamerTestChatS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerTestChatS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        return null;
    };

    /**
     * Creates a GamerTestChatS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerTestChatS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerTestChatS2C} GamerTestChatS2C
     */
    GamerTestChatS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerTestChatS2C)
            return object;
        var message = new $root.GamerTestChatS2C();
        if (object.error != null)
            message.error = object.error | 0;
        if (object.id != null)
            message.id = object.id | 0;
        return message;
    };

    /**
     * Creates a plain object from a GamerTestChatS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerTestChatS2C
     * @static
     * @param {GamerTestChatS2C} message GamerTestChatS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerTestChatS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.error = 0;
            object.id = 0;
        }
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this GamerTestChatS2C to JSON.
     * @function toJSON
     * @memberof GamerTestChatS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerTestChatS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerTestChatS2C;
})();

$root.GamerClubRequestC2S = (function() {

    /**
     * Properties of a GamerClubRequestC2S.
     * @exports IGamerClubRequestC2S
     * @interface IGamerClubRequestC2S
     * @property {number|null} [id] GamerClubRequestC2S id
     * @property {number|null} [clubId] GamerClubRequestC2S clubId
     * @property {string|null} [msg] GamerClubRequestC2S msg
     */

    /**
     * Constructs a new GamerClubRequestC2S.
     * @exports GamerClubRequestC2S
     * @classdesc Represents a GamerClubRequestC2S.
     * @implements IGamerClubRequestC2S
     * @constructor
     * @param {IGamerClubRequestC2S=} [properties] Properties to set
     */
    function GamerClubRequestC2S(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerClubRequestC2S id.
     * @member {number} id
     * @memberof GamerClubRequestC2S
     * @instance
     */
    GamerClubRequestC2S.prototype.id = 0;

    /**
     * GamerClubRequestC2S clubId.
     * @member {number} clubId
     * @memberof GamerClubRequestC2S
     * @instance
     */
    GamerClubRequestC2S.prototype.clubId = 0;

    /**
     * GamerClubRequestC2S msg.
     * @member {string} msg
     * @memberof GamerClubRequestC2S
     * @instance
     */
    GamerClubRequestC2S.prototype.msg = "";

    /**
     * Creates a new GamerClubRequestC2S instance using the specified properties.
     * @function create
     * @memberof GamerClubRequestC2S
     * @static
     * @param {IGamerClubRequestC2S=} [properties] Properties to set
     * @returns {GamerClubRequestC2S} GamerClubRequestC2S instance
     */
    GamerClubRequestC2S.create = function create(properties) {
        return new GamerClubRequestC2S(properties);
    };

    /**
     * Encodes the specified GamerClubRequestC2S message. Does not implicitly {@link GamerClubRequestC2S.verify|verify} messages.
     * @function encode
     * @memberof GamerClubRequestC2S
     * @static
     * @param {IGamerClubRequestC2S} message GamerClubRequestC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerClubRequestC2S.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.clubId != null && message.hasOwnProperty("clubId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.clubId);
        if (message.msg != null && message.hasOwnProperty("msg"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.msg);
        return writer;
    };

    /**
     * Encodes the specified GamerClubRequestC2S message, length delimited. Does not implicitly {@link GamerClubRequestC2S.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerClubRequestC2S
     * @static
     * @param {IGamerClubRequestC2S} message GamerClubRequestC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerClubRequestC2S.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerClubRequestC2S message from the specified reader or buffer.
     * @function decode
     * @memberof GamerClubRequestC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerClubRequestC2S} GamerClubRequestC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerClubRequestC2S.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerClubRequestC2S();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.clubId = reader.int32();
                break;
            case 3:
                message.msg = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerClubRequestC2S message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerClubRequestC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerClubRequestC2S} GamerClubRequestC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerClubRequestC2S.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerClubRequestC2S message.
     * @function verify
     * @memberof GamerClubRequestC2S
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerClubRequestC2S.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.clubId != null && message.hasOwnProperty("clubId"))
            if (!$util.isInteger(message.clubId))
                return "clubId: integer expected";
        if (message.msg != null && message.hasOwnProperty("msg"))
            if (!$util.isString(message.msg))
                return "msg: string expected";
        return null;
    };

    /**
     * Creates a GamerClubRequestC2S message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerClubRequestC2S
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerClubRequestC2S} GamerClubRequestC2S
     */
    GamerClubRequestC2S.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerClubRequestC2S)
            return object;
        var message = new $root.GamerClubRequestC2S();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.clubId != null)
            message.clubId = object.clubId | 0;
        if (object.msg != null)
            message.msg = String(object.msg);
        return message;
    };

    /**
     * Creates a plain object from a GamerClubRequestC2S message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerClubRequestC2S
     * @static
     * @param {GamerClubRequestC2S} message GamerClubRequestC2S
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerClubRequestC2S.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.clubId = 0;
            object.msg = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.clubId != null && message.hasOwnProperty("clubId"))
            object.clubId = message.clubId;
        if (message.msg != null && message.hasOwnProperty("msg"))
            object.msg = message.msg;
        return object;
    };

    /**
     * Converts this GamerClubRequestC2S to JSON.
     * @function toJSON
     * @memberof GamerClubRequestC2S
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerClubRequestC2S.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerClubRequestC2S;
})();

$root.GamerClubRequestS2C = (function() {

    /**
     * Properties of a GamerClubRequestS2C.
     * @exports IGamerClubRequestS2C
     * @interface IGamerClubRequestS2C
     * @property {number|null} [error] GamerClubRequestS2C error
     * @property {number|null} [id] GamerClubRequestS2C id
     * @property {boolean|null} [ok] GamerClubRequestS2C ok
     */

    /**
     * Constructs a new GamerClubRequestS2C.
     * @exports GamerClubRequestS2C
     * @classdesc Represents a GamerClubRequestS2C.
     * @implements IGamerClubRequestS2C
     * @constructor
     * @param {IGamerClubRequestS2C=} [properties] Properties to set
     */
    function GamerClubRequestS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerClubRequestS2C error.
     * @member {number} error
     * @memberof GamerClubRequestS2C
     * @instance
     */
    GamerClubRequestS2C.prototype.error = 0;

    /**
     * GamerClubRequestS2C id.
     * @member {number} id
     * @memberof GamerClubRequestS2C
     * @instance
     */
    GamerClubRequestS2C.prototype.id = 0;

    /**
     * GamerClubRequestS2C ok.
     * @member {boolean} ok
     * @memberof GamerClubRequestS2C
     * @instance
     */
    GamerClubRequestS2C.prototype.ok = false;

    /**
     * Creates a new GamerClubRequestS2C instance using the specified properties.
     * @function create
     * @memberof GamerClubRequestS2C
     * @static
     * @param {IGamerClubRequestS2C=} [properties] Properties to set
     * @returns {GamerClubRequestS2C} GamerClubRequestS2C instance
     */
    GamerClubRequestS2C.create = function create(properties) {
        return new GamerClubRequestS2C(properties);
    };

    /**
     * Encodes the specified GamerClubRequestS2C message. Does not implicitly {@link GamerClubRequestS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerClubRequestS2C
     * @static
     * @param {IGamerClubRequestS2C} message GamerClubRequestS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerClubRequestS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
        if (message.ok != null && message.hasOwnProperty("ok"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.ok);
        return writer;
    };

    /**
     * Encodes the specified GamerClubRequestS2C message, length delimited. Does not implicitly {@link GamerClubRequestS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerClubRequestS2C
     * @static
     * @param {IGamerClubRequestS2C} message GamerClubRequestS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerClubRequestS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerClubRequestS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerClubRequestS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerClubRequestS2C} GamerClubRequestS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerClubRequestS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerClubRequestS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            case 2:
                message.id = reader.int32();
                break;
            case 3:
                message.ok = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerClubRequestS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerClubRequestS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerClubRequestS2C} GamerClubRequestS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerClubRequestS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerClubRequestS2C message.
     * @function verify
     * @memberof GamerClubRequestS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerClubRequestS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.ok != null && message.hasOwnProperty("ok"))
            if (typeof message.ok !== "boolean")
                return "ok: boolean expected";
        return null;
    };

    /**
     * Creates a GamerClubRequestS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerClubRequestS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerClubRequestS2C} GamerClubRequestS2C
     */
    GamerClubRequestS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerClubRequestS2C)
            return object;
        var message = new $root.GamerClubRequestS2C();
        if (object.error != null)
            message.error = object.error | 0;
        if (object.id != null)
            message.id = object.id | 0;
        if (object.ok != null)
            message.ok = Boolean(object.ok);
        return message;
    };

    /**
     * Creates a plain object from a GamerClubRequestS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerClubRequestS2C
     * @static
     * @param {GamerClubRequestS2C} message GamerClubRequestS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerClubRequestS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.error = 0;
            object.id = 0;
            object.ok = false;
        }
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.ok != null && message.hasOwnProperty("ok"))
            object.ok = message.ok;
        return object;
    };

    /**
     * Converts this GamerClubRequestS2C to JSON.
     * @function toJSON
     * @memberof GamerClubRequestS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerClubRequestS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerClubRequestS2C;
})();

$root.GamerNotifyNewChatS2C = (function() {

    /**
     * Properties of a GamerNotifyNewChatS2C.
     * @exports IGamerNotifyNewChatS2C
     * @interface IGamerNotifyNewChatS2C
     * @property {number|null} [error] GamerNotifyNewChatS2C error
     * @property {Array.<IChatData>|null} [chats] GamerNotifyNewChatS2C chats
     */

    /**
     * Constructs a new GamerNotifyNewChatS2C.
     * @exports GamerNotifyNewChatS2C
     * @classdesc Represents a GamerNotifyNewChatS2C.
     * @implements IGamerNotifyNewChatS2C
     * @constructor
     * @param {IGamerNotifyNewChatS2C=} [properties] Properties to set
     */
    function GamerNotifyNewChatS2C(properties) {
        this.chats = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerNotifyNewChatS2C error.
     * @member {number} error
     * @memberof GamerNotifyNewChatS2C
     * @instance
     */
    GamerNotifyNewChatS2C.prototype.error = 0;

    /**
     * GamerNotifyNewChatS2C chats.
     * @member {Array.<IChatData>} chats
     * @memberof GamerNotifyNewChatS2C
     * @instance
     */
    GamerNotifyNewChatS2C.prototype.chats = $util.emptyArray;

    /**
     * Creates a new GamerNotifyNewChatS2C instance using the specified properties.
     * @function create
     * @memberof GamerNotifyNewChatS2C
     * @static
     * @param {IGamerNotifyNewChatS2C=} [properties] Properties to set
     * @returns {GamerNotifyNewChatS2C} GamerNotifyNewChatS2C instance
     */
    GamerNotifyNewChatS2C.create = function create(properties) {
        return new GamerNotifyNewChatS2C(properties);
    };

    /**
     * Encodes the specified GamerNotifyNewChatS2C message. Does not implicitly {@link GamerNotifyNewChatS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerNotifyNewChatS2C
     * @static
     * @param {IGamerNotifyNewChatS2C} message GamerNotifyNewChatS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNotifyNewChatS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        if (message.chats != null && message.chats.length)
            for (var i = 0; i < message.chats.length; ++i)
                $root.ChatData.encode(message.chats[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GamerNotifyNewChatS2C message, length delimited. Does not implicitly {@link GamerNotifyNewChatS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerNotifyNewChatS2C
     * @static
     * @param {IGamerNotifyNewChatS2C} message GamerNotifyNewChatS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNotifyNewChatS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerNotifyNewChatS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerNotifyNewChatS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerNotifyNewChatS2C} GamerNotifyNewChatS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNotifyNewChatS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerNotifyNewChatS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            case 2:
                if (!(message.chats && message.chats.length))
                    message.chats = [];
                message.chats.push($root.ChatData.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerNotifyNewChatS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerNotifyNewChatS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerNotifyNewChatS2C} GamerNotifyNewChatS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNotifyNewChatS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerNotifyNewChatS2C message.
     * @function verify
     * @memberof GamerNotifyNewChatS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerNotifyNewChatS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        if (message.chats != null && message.hasOwnProperty("chats")) {
            if (!Array.isArray(message.chats))
                return "chats: array expected";
            for (var i = 0; i < message.chats.length; ++i) {
                var error = $root.ChatData.verify(message.chats[i]);
                if (error)
                    return "chats." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GamerNotifyNewChatS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerNotifyNewChatS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerNotifyNewChatS2C} GamerNotifyNewChatS2C
     */
    GamerNotifyNewChatS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerNotifyNewChatS2C)
            return object;
        var message = new $root.GamerNotifyNewChatS2C();
        if (object.error != null)
            message.error = object.error | 0;
        if (object.chats) {
            if (!Array.isArray(object.chats))
                throw TypeError(".GamerNotifyNewChatS2C.chats: array expected");
            message.chats = [];
            for (var i = 0; i < object.chats.length; ++i) {
                if (typeof object.chats[i] !== "object")
                    throw TypeError(".GamerNotifyNewChatS2C.chats: object expected");
                message.chats[i] = $root.ChatData.fromObject(object.chats[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GamerNotifyNewChatS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerNotifyNewChatS2C
     * @static
     * @param {GamerNotifyNewChatS2C} message GamerNotifyNewChatS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerNotifyNewChatS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.chats = [];
        if (options.defaults)
            object.error = 0;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        if (message.chats && message.chats.length) {
            object.chats = [];
            for (var j = 0; j < message.chats.length; ++j)
                object.chats[j] = $root.ChatData.toObject(message.chats[j], options);
        }
        return object;
    };

    /**
     * Converts this GamerNotifyNewChatS2C to JSON.
     * @function toJSON
     * @memberof GamerNotifyNewChatS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerNotifyNewChatS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerNotifyNewChatS2C;
})();

$root.GamerNewFriendReqC2S = (function() {

    /**
     * Properties of a GamerNewFriendReqC2S.
     * @exports IGamerNewFriendReqC2S
     * @interface IGamerNewFriendReqC2S
     * @property {number|null} [id] GamerNewFriendReqC2S id
     * @property {number|null} [oid] GamerNewFriendReqC2S oid
     * @property {string|null} [msg] GamerNewFriendReqC2S msg
     */

    /**
     * Constructs a new GamerNewFriendReqC2S.
     * @exports GamerNewFriendReqC2S
     * @classdesc Represents a GamerNewFriendReqC2S.
     * @implements IGamerNewFriendReqC2S
     * @constructor
     * @param {IGamerNewFriendReqC2S=} [properties] Properties to set
     */
    function GamerNewFriendReqC2S(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerNewFriendReqC2S id.
     * @member {number} id
     * @memberof GamerNewFriendReqC2S
     * @instance
     */
    GamerNewFriendReqC2S.prototype.id = 0;

    /**
     * GamerNewFriendReqC2S oid.
     * @member {number} oid
     * @memberof GamerNewFriendReqC2S
     * @instance
     */
    GamerNewFriendReqC2S.prototype.oid = 0;

    /**
     * GamerNewFriendReqC2S msg.
     * @member {string} msg
     * @memberof GamerNewFriendReqC2S
     * @instance
     */
    GamerNewFriendReqC2S.prototype.msg = "";

    /**
     * Creates a new GamerNewFriendReqC2S instance using the specified properties.
     * @function create
     * @memberof GamerNewFriendReqC2S
     * @static
     * @param {IGamerNewFriendReqC2S=} [properties] Properties to set
     * @returns {GamerNewFriendReqC2S} GamerNewFriendReqC2S instance
     */
    GamerNewFriendReqC2S.create = function create(properties) {
        return new GamerNewFriendReqC2S(properties);
    };

    /**
     * Encodes the specified GamerNewFriendReqC2S message. Does not implicitly {@link GamerNewFriendReqC2S.verify|verify} messages.
     * @function encode
     * @memberof GamerNewFriendReqC2S
     * @static
     * @param {IGamerNewFriendReqC2S} message GamerNewFriendReqC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNewFriendReqC2S.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.oid != null && message.hasOwnProperty("oid"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.oid);
        if (message.msg != null && message.hasOwnProperty("msg"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.msg);
        return writer;
    };

    /**
     * Encodes the specified GamerNewFriendReqC2S message, length delimited. Does not implicitly {@link GamerNewFriendReqC2S.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerNewFriendReqC2S
     * @static
     * @param {IGamerNewFriendReqC2S} message GamerNewFriendReqC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNewFriendReqC2S.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerNewFriendReqC2S message from the specified reader or buffer.
     * @function decode
     * @memberof GamerNewFriendReqC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerNewFriendReqC2S} GamerNewFriendReqC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNewFriendReqC2S.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerNewFriendReqC2S();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.oid = reader.int32();
                break;
            case 3:
                message.msg = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerNewFriendReqC2S message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerNewFriendReqC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerNewFriendReqC2S} GamerNewFriendReqC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNewFriendReqC2S.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerNewFriendReqC2S message.
     * @function verify
     * @memberof GamerNewFriendReqC2S
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerNewFriendReqC2S.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.oid != null && message.hasOwnProperty("oid"))
            if (!$util.isInteger(message.oid))
                return "oid: integer expected";
        if (message.msg != null && message.hasOwnProperty("msg"))
            if (!$util.isString(message.msg))
                return "msg: string expected";
        return null;
    };

    /**
     * Creates a GamerNewFriendReqC2S message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerNewFriendReqC2S
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerNewFriendReqC2S} GamerNewFriendReqC2S
     */
    GamerNewFriendReqC2S.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerNewFriendReqC2S)
            return object;
        var message = new $root.GamerNewFriendReqC2S();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.oid != null)
            message.oid = object.oid | 0;
        if (object.msg != null)
            message.msg = String(object.msg);
        return message;
    };

    /**
     * Creates a plain object from a GamerNewFriendReqC2S message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerNewFriendReqC2S
     * @static
     * @param {GamerNewFriendReqC2S} message GamerNewFriendReqC2S
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerNewFriendReqC2S.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.oid = 0;
            object.msg = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.oid != null && message.hasOwnProperty("oid"))
            object.oid = message.oid;
        if (message.msg != null && message.hasOwnProperty("msg"))
            object.msg = message.msg;
        return object;
    };

    /**
     * Converts this GamerNewFriendReqC2S to JSON.
     * @function toJSON
     * @memberof GamerNewFriendReqC2S
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerNewFriendReqC2S.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerNewFriendReqC2S;
})();

$root.GamerNewFriendReqS2C = (function() {

    /**
     * Properties of a GamerNewFriendReqS2C.
     * @exports IGamerNewFriendReqS2C
     * @interface IGamerNewFriendReqS2C
     * @property {number|null} [error] GamerNewFriendReqS2C error
     */

    /**
     * Constructs a new GamerNewFriendReqS2C.
     * @exports GamerNewFriendReqS2C
     * @classdesc Represents a GamerNewFriendReqS2C.
     * @implements IGamerNewFriendReqS2C
     * @constructor
     * @param {IGamerNewFriendReqS2C=} [properties] Properties to set
     */
    function GamerNewFriendReqS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerNewFriendReqS2C error.
     * @member {number} error
     * @memberof GamerNewFriendReqS2C
     * @instance
     */
    GamerNewFriendReqS2C.prototype.error = 0;

    /**
     * Creates a new GamerNewFriendReqS2C instance using the specified properties.
     * @function create
     * @memberof GamerNewFriendReqS2C
     * @static
     * @param {IGamerNewFriendReqS2C=} [properties] Properties to set
     * @returns {GamerNewFriendReqS2C} GamerNewFriendReqS2C instance
     */
    GamerNewFriendReqS2C.create = function create(properties) {
        return new GamerNewFriendReqS2C(properties);
    };

    /**
     * Encodes the specified GamerNewFriendReqS2C message. Does not implicitly {@link GamerNewFriendReqS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerNewFriendReqS2C
     * @static
     * @param {IGamerNewFriendReqS2C} message GamerNewFriendReqS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNewFriendReqS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        return writer;
    };

    /**
     * Encodes the specified GamerNewFriendReqS2C message, length delimited. Does not implicitly {@link GamerNewFriendReqS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerNewFriendReqS2C
     * @static
     * @param {IGamerNewFriendReqS2C} message GamerNewFriendReqS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNewFriendReqS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerNewFriendReqS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerNewFriendReqS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerNewFriendReqS2C} GamerNewFriendReqS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNewFriendReqS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerNewFriendReqS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerNewFriendReqS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerNewFriendReqS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerNewFriendReqS2C} GamerNewFriendReqS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNewFriendReqS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerNewFriendReqS2C message.
     * @function verify
     * @memberof GamerNewFriendReqS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerNewFriendReqS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        return null;
    };

    /**
     * Creates a GamerNewFriendReqS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerNewFriendReqS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerNewFriendReqS2C} GamerNewFriendReqS2C
     */
    GamerNewFriendReqS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerNewFriendReqS2C)
            return object;
        var message = new $root.GamerNewFriendReqS2C();
        if (object.error != null)
            message.error = object.error | 0;
        return message;
    };

    /**
     * Creates a plain object from a GamerNewFriendReqS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerNewFriendReqS2C
     * @static
     * @param {GamerNewFriendReqS2C} message GamerNewFriendReqS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerNewFriendReqS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.error = 0;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        return object;
    };

    /**
     * Converts this GamerNewFriendReqS2C to JSON.
     * @function toJSON
     * @memberof GamerNewFriendReqS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerNewFriendReqS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerNewFriendReqS2C;
})();

$root.GamerNotifyNewFriendReqS2C = (function() {

    /**
     * Properties of a GamerNotifyNewFriendReqS2C.
     * @exports IGamerNotifyNewFriendReqS2C
     * @interface IGamerNotifyNewFriendReqS2C
     * @property {number|null} [error] GamerNotifyNewFriendReqS2C error
     * @property {IGamerFriendRequest|null} [request] GamerNotifyNewFriendReqS2C request
     */

    /**
     * Constructs a new GamerNotifyNewFriendReqS2C.
     * @exports GamerNotifyNewFriendReqS2C
     * @classdesc Represents a GamerNotifyNewFriendReqS2C.
     * @implements IGamerNotifyNewFriendReqS2C
     * @constructor
     * @param {IGamerNotifyNewFriendReqS2C=} [properties] Properties to set
     */
    function GamerNotifyNewFriendReqS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerNotifyNewFriendReqS2C error.
     * @member {number} error
     * @memberof GamerNotifyNewFriendReqS2C
     * @instance
     */
    GamerNotifyNewFriendReqS2C.prototype.error = 0;

    /**
     * GamerNotifyNewFriendReqS2C request.
     * @member {IGamerFriendRequest|null|undefined} request
     * @memberof GamerNotifyNewFriendReqS2C
     * @instance
     */
    GamerNotifyNewFriendReqS2C.prototype.request = null;

    /**
     * Creates a new GamerNotifyNewFriendReqS2C instance using the specified properties.
     * @function create
     * @memberof GamerNotifyNewFriendReqS2C
     * @static
     * @param {IGamerNotifyNewFriendReqS2C=} [properties] Properties to set
     * @returns {GamerNotifyNewFriendReqS2C} GamerNotifyNewFriendReqS2C instance
     */
    GamerNotifyNewFriendReqS2C.create = function create(properties) {
        return new GamerNotifyNewFriendReqS2C(properties);
    };

    /**
     * Encodes the specified GamerNotifyNewFriendReqS2C message. Does not implicitly {@link GamerNotifyNewFriendReqS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerNotifyNewFriendReqS2C
     * @static
     * @param {IGamerNotifyNewFriendReqS2C} message GamerNotifyNewFriendReqS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNotifyNewFriendReqS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        if (message.request != null && message.hasOwnProperty("request"))
            $root.GamerFriendRequest.encode(message.request, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GamerNotifyNewFriendReqS2C message, length delimited. Does not implicitly {@link GamerNotifyNewFriendReqS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerNotifyNewFriendReqS2C
     * @static
     * @param {IGamerNotifyNewFriendReqS2C} message GamerNotifyNewFriendReqS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNotifyNewFriendReqS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerNotifyNewFriendReqS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerNotifyNewFriendReqS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerNotifyNewFriendReqS2C} GamerNotifyNewFriendReqS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNotifyNewFriendReqS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerNotifyNewFriendReqS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            case 2:
                message.request = $root.GamerFriendRequest.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerNotifyNewFriendReqS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerNotifyNewFriendReqS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerNotifyNewFriendReqS2C} GamerNotifyNewFriendReqS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNotifyNewFriendReqS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerNotifyNewFriendReqS2C message.
     * @function verify
     * @memberof GamerNotifyNewFriendReqS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerNotifyNewFriendReqS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        if (message.request != null && message.hasOwnProperty("request")) {
            var error = $root.GamerFriendRequest.verify(message.request);
            if (error)
                return "request." + error;
        }
        return null;
    };

    /**
     * Creates a GamerNotifyNewFriendReqS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerNotifyNewFriendReqS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerNotifyNewFriendReqS2C} GamerNotifyNewFriendReqS2C
     */
    GamerNotifyNewFriendReqS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerNotifyNewFriendReqS2C)
            return object;
        var message = new $root.GamerNotifyNewFriendReqS2C();
        if (object.error != null)
            message.error = object.error | 0;
        if (object.request != null) {
            if (typeof object.request !== "object")
                throw TypeError(".GamerNotifyNewFriendReqS2C.request: object expected");
            message.request = $root.GamerFriendRequest.fromObject(object.request);
        }
        return message;
    };

    /**
     * Creates a plain object from a GamerNotifyNewFriendReqS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerNotifyNewFriendReqS2C
     * @static
     * @param {GamerNotifyNewFriendReqS2C} message GamerNotifyNewFriendReqS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerNotifyNewFriendReqS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.error = 0;
            object.request = null;
        }
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        if (message.request != null && message.hasOwnProperty("request"))
            object.request = $root.GamerFriendRequest.toObject(message.request, options);
        return object;
    };

    /**
     * Converts this GamerNotifyNewFriendReqS2C to JSON.
     * @function toJSON
     * @memberof GamerNotifyNewFriendReqS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerNotifyNewFriendReqS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerNotifyNewFriendReqS2C;
})();

$root.GamerProcessFriendReqC2S = (function() {

    /**
     * Properties of a GamerProcessFriendReqC2S.
     * @exports IGamerProcessFriendReqC2S
     * @interface IGamerProcessFriendReqC2S
     * @property {number|null} [id] GamerProcessFriendReqC2S id
     * @property {number|null} [oid] GamerProcessFriendReqC2S oid
     * @property {boolean|null} [result] GamerProcessFriendReqC2S result
     */

    /**
     * Constructs a new GamerProcessFriendReqC2S.
     * @exports GamerProcessFriendReqC2S
     * @classdesc Represents a GamerProcessFriendReqC2S.
     * @implements IGamerProcessFriendReqC2S
     * @constructor
     * @param {IGamerProcessFriendReqC2S=} [properties] Properties to set
     */
    function GamerProcessFriendReqC2S(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerProcessFriendReqC2S id.
     * @member {number} id
     * @memberof GamerProcessFriendReqC2S
     * @instance
     */
    GamerProcessFriendReqC2S.prototype.id = 0;

    /**
     * GamerProcessFriendReqC2S oid.
     * @member {number} oid
     * @memberof GamerProcessFriendReqC2S
     * @instance
     */
    GamerProcessFriendReqC2S.prototype.oid = 0;

    /**
     * GamerProcessFriendReqC2S result.
     * @member {boolean} result
     * @memberof GamerProcessFriendReqC2S
     * @instance
     */
    GamerProcessFriendReqC2S.prototype.result = false;

    /**
     * Creates a new GamerProcessFriendReqC2S instance using the specified properties.
     * @function create
     * @memberof GamerProcessFriendReqC2S
     * @static
     * @param {IGamerProcessFriendReqC2S=} [properties] Properties to set
     * @returns {GamerProcessFriendReqC2S} GamerProcessFriendReqC2S instance
     */
    GamerProcessFriendReqC2S.create = function create(properties) {
        return new GamerProcessFriendReqC2S(properties);
    };

    /**
     * Encodes the specified GamerProcessFriendReqC2S message. Does not implicitly {@link GamerProcessFriendReqC2S.verify|verify} messages.
     * @function encode
     * @memberof GamerProcessFriendReqC2S
     * @static
     * @param {IGamerProcessFriendReqC2S} message GamerProcessFriendReqC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerProcessFriendReqC2S.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.oid != null && message.hasOwnProperty("oid"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.oid);
        if (message.result != null && message.hasOwnProperty("result"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.result);
        return writer;
    };

    /**
     * Encodes the specified GamerProcessFriendReqC2S message, length delimited. Does not implicitly {@link GamerProcessFriendReqC2S.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerProcessFriendReqC2S
     * @static
     * @param {IGamerProcessFriendReqC2S} message GamerProcessFriendReqC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerProcessFriendReqC2S.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerProcessFriendReqC2S message from the specified reader or buffer.
     * @function decode
     * @memberof GamerProcessFriendReqC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerProcessFriendReqC2S} GamerProcessFriendReqC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerProcessFriendReqC2S.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerProcessFriendReqC2S();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.oid = reader.int32();
                break;
            case 3:
                message.result = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerProcessFriendReqC2S message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerProcessFriendReqC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerProcessFriendReqC2S} GamerProcessFriendReqC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerProcessFriendReqC2S.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerProcessFriendReqC2S message.
     * @function verify
     * @memberof GamerProcessFriendReqC2S
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerProcessFriendReqC2S.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.oid != null && message.hasOwnProperty("oid"))
            if (!$util.isInteger(message.oid))
                return "oid: integer expected";
        if (message.result != null && message.hasOwnProperty("result"))
            if (typeof message.result !== "boolean")
                return "result: boolean expected";
        return null;
    };

    /**
     * Creates a GamerProcessFriendReqC2S message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerProcessFriendReqC2S
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerProcessFriendReqC2S} GamerProcessFriendReqC2S
     */
    GamerProcessFriendReqC2S.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerProcessFriendReqC2S)
            return object;
        var message = new $root.GamerProcessFriendReqC2S();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.oid != null)
            message.oid = object.oid | 0;
        if (object.result != null)
            message.result = Boolean(object.result);
        return message;
    };

    /**
     * Creates a plain object from a GamerProcessFriendReqC2S message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerProcessFriendReqC2S
     * @static
     * @param {GamerProcessFriendReqC2S} message GamerProcessFriendReqC2S
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerProcessFriendReqC2S.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.oid = 0;
            object.result = false;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.oid != null && message.hasOwnProperty("oid"))
            object.oid = message.oid;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        return object;
    };

    /**
     * Converts this GamerProcessFriendReqC2S to JSON.
     * @function toJSON
     * @memberof GamerProcessFriendReqC2S
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerProcessFriendReqC2S.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerProcessFriendReqC2S;
})();

$root.GamerProcessFriendReqS2C = (function() {

    /**
     * Properties of a GamerProcessFriendReqS2C.
     * @exports IGamerProcessFriendReqS2C
     * @interface IGamerProcessFriendReqS2C
     * @property {number|null} [error] GamerProcessFriendReqS2C error
     */

    /**
     * Constructs a new GamerProcessFriendReqS2C.
     * @exports GamerProcessFriendReqS2C
     * @classdesc Represents a GamerProcessFriendReqS2C.
     * @implements IGamerProcessFriendReqS2C
     * @constructor
     * @param {IGamerProcessFriendReqS2C=} [properties] Properties to set
     */
    function GamerProcessFriendReqS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerProcessFriendReqS2C error.
     * @member {number} error
     * @memberof GamerProcessFriendReqS2C
     * @instance
     */
    GamerProcessFriendReqS2C.prototype.error = 0;

    /**
     * Creates a new GamerProcessFriendReqS2C instance using the specified properties.
     * @function create
     * @memberof GamerProcessFriendReqS2C
     * @static
     * @param {IGamerProcessFriendReqS2C=} [properties] Properties to set
     * @returns {GamerProcessFriendReqS2C} GamerProcessFriendReqS2C instance
     */
    GamerProcessFriendReqS2C.create = function create(properties) {
        return new GamerProcessFriendReqS2C(properties);
    };

    /**
     * Encodes the specified GamerProcessFriendReqS2C message. Does not implicitly {@link GamerProcessFriendReqS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerProcessFriendReqS2C
     * @static
     * @param {IGamerProcessFriendReqS2C} message GamerProcessFriendReqS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerProcessFriendReqS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        return writer;
    };

    /**
     * Encodes the specified GamerProcessFriendReqS2C message, length delimited. Does not implicitly {@link GamerProcessFriendReqS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerProcessFriendReqS2C
     * @static
     * @param {IGamerProcessFriendReqS2C} message GamerProcessFriendReqS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerProcessFriendReqS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerProcessFriendReqS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerProcessFriendReqS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerProcessFriendReqS2C} GamerProcessFriendReqS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerProcessFriendReqS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerProcessFriendReqS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerProcessFriendReqS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerProcessFriendReqS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerProcessFriendReqS2C} GamerProcessFriendReqS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerProcessFriendReqS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerProcessFriendReqS2C message.
     * @function verify
     * @memberof GamerProcessFriendReqS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerProcessFriendReqS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        return null;
    };

    /**
     * Creates a GamerProcessFriendReqS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerProcessFriendReqS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerProcessFriendReqS2C} GamerProcessFriendReqS2C
     */
    GamerProcessFriendReqS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerProcessFriendReqS2C)
            return object;
        var message = new $root.GamerProcessFriendReqS2C();
        if (object.error != null)
            message.error = object.error | 0;
        return message;
    };

    /**
     * Creates a plain object from a GamerProcessFriendReqS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerProcessFriendReqS2C
     * @static
     * @param {GamerProcessFriendReqS2C} message GamerProcessFriendReqS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerProcessFriendReqS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.error = 0;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        return object;
    };

    /**
     * Converts this GamerProcessFriendReqS2C to JSON.
     * @function toJSON
     * @memberof GamerProcessFriendReqS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerProcessFriendReqS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerProcessFriendReqS2C;
})();

$root.GamerNotifyNewFriendS2C = (function() {

    /**
     * Properties of a GamerNotifyNewFriendS2C.
     * @exports IGamerNotifyNewFriendS2C
     * @interface IGamerNotifyNewFriendS2C
     * @property {number|null} [error] GamerNotifyNewFriendS2C error
     * @property {IGamerFriend|null} [friend] GamerNotifyNewFriendS2C friend
     */

    /**
     * Constructs a new GamerNotifyNewFriendS2C.
     * @exports GamerNotifyNewFriendS2C
     * @classdesc Represents a GamerNotifyNewFriendS2C.
     * @implements IGamerNotifyNewFriendS2C
     * @constructor
     * @param {IGamerNotifyNewFriendS2C=} [properties] Properties to set
     */
    function GamerNotifyNewFriendS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerNotifyNewFriendS2C error.
     * @member {number} error
     * @memberof GamerNotifyNewFriendS2C
     * @instance
     */
    GamerNotifyNewFriendS2C.prototype.error = 0;

    /**
     * GamerNotifyNewFriendS2C friend.
     * @member {IGamerFriend|null|undefined} friend
     * @memberof GamerNotifyNewFriendS2C
     * @instance
     */
    GamerNotifyNewFriendS2C.prototype.friend = null;

    /**
     * Creates a new GamerNotifyNewFriendS2C instance using the specified properties.
     * @function create
     * @memberof GamerNotifyNewFriendS2C
     * @static
     * @param {IGamerNotifyNewFriendS2C=} [properties] Properties to set
     * @returns {GamerNotifyNewFriendS2C} GamerNotifyNewFriendS2C instance
     */
    GamerNotifyNewFriendS2C.create = function create(properties) {
        return new GamerNotifyNewFriendS2C(properties);
    };

    /**
     * Encodes the specified GamerNotifyNewFriendS2C message. Does not implicitly {@link GamerNotifyNewFriendS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerNotifyNewFriendS2C
     * @static
     * @param {IGamerNotifyNewFriendS2C} message GamerNotifyNewFriendS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNotifyNewFriendS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        if (message.friend != null && message.hasOwnProperty("friend"))
            $root.GamerFriend.encode(message.friend, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GamerNotifyNewFriendS2C message, length delimited. Does not implicitly {@link GamerNotifyNewFriendS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerNotifyNewFriendS2C
     * @static
     * @param {IGamerNotifyNewFriendS2C} message GamerNotifyNewFriendS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNotifyNewFriendS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerNotifyNewFriendS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerNotifyNewFriendS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerNotifyNewFriendS2C} GamerNotifyNewFriendS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNotifyNewFriendS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerNotifyNewFriendS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            case 2:
                message.friend = $root.GamerFriend.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerNotifyNewFriendS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerNotifyNewFriendS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerNotifyNewFriendS2C} GamerNotifyNewFriendS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNotifyNewFriendS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerNotifyNewFriendS2C message.
     * @function verify
     * @memberof GamerNotifyNewFriendS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerNotifyNewFriendS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        if (message.friend != null && message.hasOwnProperty("friend")) {
            var error = $root.GamerFriend.verify(message.friend);
            if (error)
                return "friend." + error;
        }
        return null;
    };

    /**
     * Creates a GamerNotifyNewFriendS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerNotifyNewFriendS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerNotifyNewFriendS2C} GamerNotifyNewFriendS2C
     */
    GamerNotifyNewFriendS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerNotifyNewFriendS2C)
            return object;
        var message = new $root.GamerNotifyNewFriendS2C();
        if (object.error != null)
            message.error = object.error | 0;
        if (object.friend != null) {
            if (typeof object.friend !== "object")
                throw TypeError(".GamerNotifyNewFriendS2C.friend: object expected");
            message.friend = $root.GamerFriend.fromObject(object.friend);
        }
        return message;
    };

    /**
     * Creates a plain object from a GamerNotifyNewFriendS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerNotifyNewFriendS2C
     * @static
     * @param {GamerNotifyNewFriendS2C} message GamerNotifyNewFriendS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerNotifyNewFriendS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.error = 0;
            object.friend = null;
        }
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        if (message.friend != null && message.hasOwnProperty("friend"))
            object.friend = $root.GamerFriend.toObject(message.friend, options);
        return object;
    };

    /**
     * Converts this GamerNotifyNewFriendS2C to JSON.
     * @function toJSON
     * @memberof GamerNotifyNewFriendS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerNotifyNewFriendS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerNotifyNewFriendS2C;
})();

$root.GamerNotifyNewMailS2C = (function() {

    /**
     * Properties of a GamerNotifyNewMailS2C.
     * @exports IGamerNotifyNewMailS2C
     * @interface IGamerNotifyNewMailS2C
     * @property {number|null} [error] GamerNotifyNewMailS2C error
     * @property {Array.<IMail>|null} [mail] GamerNotifyNewMailS2C mail
     */

    /**
     * Constructs a new GamerNotifyNewMailS2C.
     * @exports GamerNotifyNewMailS2C
     * @classdesc Represents a GamerNotifyNewMailS2C.
     * @implements IGamerNotifyNewMailS2C
     * @constructor
     * @param {IGamerNotifyNewMailS2C=} [properties] Properties to set
     */
    function GamerNotifyNewMailS2C(properties) {
        this.mail = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerNotifyNewMailS2C error.
     * @member {number} error
     * @memberof GamerNotifyNewMailS2C
     * @instance
     */
    GamerNotifyNewMailS2C.prototype.error = 0;

    /**
     * GamerNotifyNewMailS2C mail.
     * @member {Array.<IMail>} mail
     * @memberof GamerNotifyNewMailS2C
     * @instance
     */
    GamerNotifyNewMailS2C.prototype.mail = $util.emptyArray;

    /**
     * Creates a new GamerNotifyNewMailS2C instance using the specified properties.
     * @function create
     * @memberof GamerNotifyNewMailS2C
     * @static
     * @param {IGamerNotifyNewMailS2C=} [properties] Properties to set
     * @returns {GamerNotifyNewMailS2C} GamerNotifyNewMailS2C instance
     */
    GamerNotifyNewMailS2C.create = function create(properties) {
        return new GamerNotifyNewMailS2C(properties);
    };

    /**
     * Encodes the specified GamerNotifyNewMailS2C message. Does not implicitly {@link GamerNotifyNewMailS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerNotifyNewMailS2C
     * @static
     * @param {IGamerNotifyNewMailS2C} message GamerNotifyNewMailS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNotifyNewMailS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        if (message.mail != null && message.mail.length)
            for (var i = 0; i < message.mail.length; ++i)
                $root.Mail.encode(message.mail[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GamerNotifyNewMailS2C message, length delimited. Does not implicitly {@link GamerNotifyNewMailS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerNotifyNewMailS2C
     * @static
     * @param {IGamerNotifyNewMailS2C} message GamerNotifyNewMailS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNotifyNewMailS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerNotifyNewMailS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerNotifyNewMailS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerNotifyNewMailS2C} GamerNotifyNewMailS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNotifyNewMailS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerNotifyNewMailS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            case 2:
                if (!(message.mail && message.mail.length))
                    message.mail = [];
                message.mail.push($root.Mail.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerNotifyNewMailS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerNotifyNewMailS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerNotifyNewMailS2C} GamerNotifyNewMailS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNotifyNewMailS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerNotifyNewMailS2C message.
     * @function verify
     * @memberof GamerNotifyNewMailS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerNotifyNewMailS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        if (message.mail != null && message.hasOwnProperty("mail")) {
            if (!Array.isArray(message.mail))
                return "mail: array expected";
            for (var i = 0; i < message.mail.length; ++i) {
                var error = $root.Mail.verify(message.mail[i]);
                if (error)
                    return "mail." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GamerNotifyNewMailS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerNotifyNewMailS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerNotifyNewMailS2C} GamerNotifyNewMailS2C
     */
    GamerNotifyNewMailS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerNotifyNewMailS2C)
            return object;
        var message = new $root.GamerNotifyNewMailS2C();
        if (object.error != null)
            message.error = object.error | 0;
        if (object.mail) {
            if (!Array.isArray(object.mail))
                throw TypeError(".GamerNotifyNewMailS2C.mail: array expected");
            message.mail = [];
            for (var i = 0; i < object.mail.length; ++i) {
                if (typeof object.mail[i] !== "object")
                    throw TypeError(".GamerNotifyNewMailS2C.mail: object expected");
                message.mail[i] = $root.Mail.fromObject(object.mail[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GamerNotifyNewMailS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerNotifyNewMailS2C
     * @static
     * @param {GamerNotifyNewMailS2C} message GamerNotifyNewMailS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerNotifyNewMailS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.mail = [];
        if (options.defaults)
            object.error = 0;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        if (message.mail && message.mail.length) {
            object.mail = [];
            for (var j = 0; j < message.mail.length; ++j)
                object.mail[j] = $root.Mail.toObject(message.mail[j], options);
        }
        return object;
    };

    /**
     * Converts this GamerNotifyNewMailS2C to JSON.
     * @function toJSON
     * @memberof GamerNotifyNewMailS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerNotifyNewMailS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerNotifyNewMailS2C;
})();

$root.GamerMatchC2S = (function() {

    /**
     * Properties of a GamerMatchC2S.
     * @exports IGamerMatchC2S
     * @interface IGamerMatchC2S
     * @property {number|null} [id] GamerMatchC2S id
     * @property {number|null} [type] GamerMatchC2S type
     */

    /**
     * Constructs a new GamerMatchC2S.
     * @exports GamerMatchC2S
     * @classdesc Represents a GamerMatchC2S.
     * @implements IGamerMatchC2S
     * @constructor
     * @param {IGamerMatchC2S=} [properties] Properties to set
     */
    function GamerMatchC2S(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerMatchC2S id.
     * @member {number} id
     * @memberof GamerMatchC2S
     * @instance
     */
    GamerMatchC2S.prototype.id = 0;

    /**
     * GamerMatchC2S type.
     * @member {number} type
     * @memberof GamerMatchC2S
     * @instance
     */
    GamerMatchC2S.prototype.type = 0;

    /**
     * Creates a new GamerMatchC2S instance using the specified properties.
     * @function create
     * @memberof GamerMatchC2S
     * @static
     * @param {IGamerMatchC2S=} [properties] Properties to set
     * @returns {GamerMatchC2S} GamerMatchC2S instance
     */
    GamerMatchC2S.create = function create(properties) {
        return new GamerMatchC2S(properties);
    };

    /**
     * Encodes the specified GamerMatchC2S message. Does not implicitly {@link GamerMatchC2S.verify|verify} messages.
     * @function encode
     * @memberof GamerMatchC2S
     * @static
     * @param {IGamerMatchC2S} message GamerMatchC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerMatchC2S.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        return writer;
    };

    /**
     * Encodes the specified GamerMatchC2S message, length delimited. Does not implicitly {@link GamerMatchC2S.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerMatchC2S
     * @static
     * @param {IGamerMatchC2S} message GamerMatchC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerMatchC2S.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerMatchC2S message from the specified reader or buffer.
     * @function decode
     * @memberof GamerMatchC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerMatchC2S} GamerMatchC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerMatchC2S.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerMatchC2S();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.type = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerMatchC2S message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerMatchC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerMatchC2S} GamerMatchC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerMatchC2S.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerMatchC2S message.
     * @function verify
     * @memberof GamerMatchC2S
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerMatchC2S.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        return null;
    };

    /**
     * Creates a GamerMatchC2S message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerMatchC2S
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerMatchC2S} GamerMatchC2S
     */
    GamerMatchC2S.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerMatchC2S)
            return object;
        var message = new $root.GamerMatchC2S();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.type != null)
            message.type = object.type | 0;
        return message;
    };

    /**
     * Creates a plain object from a GamerMatchC2S message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerMatchC2S
     * @static
     * @param {GamerMatchC2S} message GamerMatchC2S
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerMatchC2S.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.type = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        return object;
    };

    /**
     * Converts this GamerMatchC2S to JSON.
     * @function toJSON
     * @memberof GamerMatchC2S
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerMatchC2S.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerMatchC2S;
})();

$root.GamerMatchS2C = (function() {

    /**
     * Properties of a GamerMatchS2C.
     * @exports IGamerMatchS2C
     * @interface IGamerMatchS2C
     * @property {number|null} [error] GamerMatchS2C error
     */

    /**
     * Constructs a new GamerMatchS2C.
     * @exports GamerMatchS2C
     * @classdesc Represents a GamerMatchS2C.
     * @implements IGamerMatchS2C
     * @constructor
     * @param {IGamerMatchS2C=} [properties] Properties to set
     */
    function GamerMatchS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerMatchS2C error.
     * @member {number} error
     * @memberof GamerMatchS2C
     * @instance
     */
    GamerMatchS2C.prototype.error = 0;

    /**
     * Creates a new GamerMatchS2C instance using the specified properties.
     * @function create
     * @memberof GamerMatchS2C
     * @static
     * @param {IGamerMatchS2C=} [properties] Properties to set
     * @returns {GamerMatchS2C} GamerMatchS2C instance
     */
    GamerMatchS2C.create = function create(properties) {
        return new GamerMatchS2C(properties);
    };

    /**
     * Encodes the specified GamerMatchS2C message. Does not implicitly {@link GamerMatchS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerMatchS2C
     * @static
     * @param {IGamerMatchS2C} message GamerMatchS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerMatchS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        return writer;
    };

    /**
     * Encodes the specified GamerMatchS2C message, length delimited. Does not implicitly {@link GamerMatchS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerMatchS2C
     * @static
     * @param {IGamerMatchS2C} message GamerMatchS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerMatchS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerMatchS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerMatchS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerMatchS2C} GamerMatchS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerMatchS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerMatchS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerMatchS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerMatchS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerMatchS2C} GamerMatchS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerMatchS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerMatchS2C message.
     * @function verify
     * @memberof GamerMatchS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerMatchS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        return null;
    };

    /**
     * Creates a GamerMatchS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerMatchS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerMatchS2C} GamerMatchS2C
     */
    GamerMatchS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerMatchS2C)
            return object;
        var message = new $root.GamerMatchS2C();
        if (object.error != null)
            message.error = object.error | 0;
        return message;
    };

    /**
     * Creates a plain object from a GamerMatchS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerMatchS2C
     * @static
     * @param {GamerMatchS2C} message GamerMatchS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerMatchS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.error = 0;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        return object;
    };

    /**
     * Converts this GamerMatchS2C to JSON.
     * @function toJSON
     * @memberof GamerMatchS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerMatchS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerMatchS2C;
})();

$root.GamerNotifyMatchInfoS2C = (function() {

    /**
     * Properties of a GamerNotifyMatchInfoS2C.
     * @exports IGamerNotifyMatchInfoS2C
     * @interface IGamerNotifyMatchInfoS2C
     * @property {number|null} [error] GamerNotifyMatchInfoS2C error
     * @property {IMatchInfo|null} [matchInfo] GamerNotifyMatchInfoS2C matchInfo
     * @property {boolean|null} [reconn] GamerNotifyMatchInfoS2C reconn
     */

    /**
     * Constructs a new GamerNotifyMatchInfoS2C.
     * @exports GamerNotifyMatchInfoS2C
     * @classdesc Represents a GamerNotifyMatchInfoS2C.
     * @implements IGamerNotifyMatchInfoS2C
     * @constructor
     * @param {IGamerNotifyMatchInfoS2C=} [properties] Properties to set
     */
    function GamerNotifyMatchInfoS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerNotifyMatchInfoS2C error.
     * @member {number} error
     * @memberof GamerNotifyMatchInfoS2C
     * @instance
     */
    GamerNotifyMatchInfoS2C.prototype.error = 0;

    /**
     * GamerNotifyMatchInfoS2C matchInfo.
     * @member {IMatchInfo|null|undefined} matchInfo
     * @memberof GamerNotifyMatchInfoS2C
     * @instance
     */
    GamerNotifyMatchInfoS2C.prototype.matchInfo = null;

    /**
     * GamerNotifyMatchInfoS2C reconn.
     * @member {boolean} reconn
     * @memberof GamerNotifyMatchInfoS2C
     * @instance
     */
    GamerNotifyMatchInfoS2C.prototype.reconn = false;

    /**
     * Creates a new GamerNotifyMatchInfoS2C instance using the specified properties.
     * @function create
     * @memberof GamerNotifyMatchInfoS2C
     * @static
     * @param {IGamerNotifyMatchInfoS2C=} [properties] Properties to set
     * @returns {GamerNotifyMatchInfoS2C} GamerNotifyMatchInfoS2C instance
     */
    GamerNotifyMatchInfoS2C.create = function create(properties) {
        return new GamerNotifyMatchInfoS2C(properties);
    };

    /**
     * Encodes the specified GamerNotifyMatchInfoS2C message. Does not implicitly {@link GamerNotifyMatchInfoS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerNotifyMatchInfoS2C
     * @static
     * @param {IGamerNotifyMatchInfoS2C} message GamerNotifyMatchInfoS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNotifyMatchInfoS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        if (message.matchInfo != null && message.hasOwnProperty("matchInfo"))
            $root.MatchInfo.encode(message.matchInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.reconn != null && message.hasOwnProperty("reconn"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.reconn);
        return writer;
    };

    /**
     * Encodes the specified GamerNotifyMatchInfoS2C message, length delimited. Does not implicitly {@link GamerNotifyMatchInfoS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerNotifyMatchInfoS2C
     * @static
     * @param {IGamerNotifyMatchInfoS2C} message GamerNotifyMatchInfoS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNotifyMatchInfoS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerNotifyMatchInfoS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerNotifyMatchInfoS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerNotifyMatchInfoS2C} GamerNotifyMatchInfoS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNotifyMatchInfoS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerNotifyMatchInfoS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            case 2:
                message.matchInfo = $root.MatchInfo.decode(reader, reader.uint32());
                break;
            case 3:
                message.reconn = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerNotifyMatchInfoS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerNotifyMatchInfoS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerNotifyMatchInfoS2C} GamerNotifyMatchInfoS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNotifyMatchInfoS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerNotifyMatchInfoS2C message.
     * @function verify
     * @memberof GamerNotifyMatchInfoS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerNotifyMatchInfoS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        if (message.matchInfo != null && message.hasOwnProperty("matchInfo")) {
            var error = $root.MatchInfo.verify(message.matchInfo);
            if (error)
                return "matchInfo." + error;
        }
        if (message.reconn != null && message.hasOwnProperty("reconn"))
            if (typeof message.reconn !== "boolean")
                return "reconn: boolean expected";
        return null;
    };

    /**
     * Creates a GamerNotifyMatchInfoS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerNotifyMatchInfoS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerNotifyMatchInfoS2C} GamerNotifyMatchInfoS2C
     */
    GamerNotifyMatchInfoS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerNotifyMatchInfoS2C)
            return object;
        var message = new $root.GamerNotifyMatchInfoS2C();
        if (object.error != null)
            message.error = object.error | 0;
        if (object.matchInfo != null) {
            if (typeof object.matchInfo !== "object")
                throw TypeError(".GamerNotifyMatchInfoS2C.matchInfo: object expected");
            message.matchInfo = $root.MatchInfo.fromObject(object.matchInfo);
        }
        if (object.reconn != null)
            message.reconn = Boolean(object.reconn);
        return message;
    };

    /**
     * Creates a plain object from a GamerNotifyMatchInfoS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerNotifyMatchInfoS2C
     * @static
     * @param {GamerNotifyMatchInfoS2C} message GamerNotifyMatchInfoS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerNotifyMatchInfoS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.error = 0;
            object.matchInfo = null;
            object.reconn = false;
        }
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        if (message.matchInfo != null && message.hasOwnProperty("matchInfo"))
            object.matchInfo = $root.MatchInfo.toObject(message.matchInfo, options);
        if (message.reconn != null && message.hasOwnProperty("reconn"))
            object.reconn = message.reconn;
        return object;
    };

    /**
     * Converts this GamerNotifyMatchInfoS2C to JSON.
     * @function toJSON
     * @memberof GamerNotifyMatchInfoS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerNotifyMatchInfoS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerNotifyMatchInfoS2C;
})();

$root.GamerPVPSyncC2S = (function() {

    /**
     * Properties of a GamerPVPSyncC2S.
     * @exports IGamerPVPSyncC2S
     * @interface IGamerPVPSyncC2S
     * @property {number|null} [id] GamerPVPSyncC2S id
     * @property {string|null} [session] GamerPVPSyncC2S session
     * @property {IPVPInput|null} [input] GamerPVPSyncC2S input
     * @property {Array.<number>|null} [needFrames] GamerPVPSyncC2S needFrames
     * @property {Array.<number|Long>|null} [crc] GamerPVPSyncC2S crc
     * @property {Array.<IPVPInput>|null} [agents] GamerPVPSyncC2S agents
     * @property {boolean|null} [reconn] GamerPVPSyncC2S reconn
     * @property {number|null} [index] GamerPVPSyncC2S index
     * @property {string|null} [addr] GamerPVPSyncC2S addr
     * @property {IPVPResult|null} [result] GamerPVPSyncC2S result
     */

    /**
     * Constructs a new GamerPVPSyncC2S.
     * @exports GamerPVPSyncC2S
     * @classdesc Represents a GamerPVPSyncC2S.
     * @implements IGamerPVPSyncC2S
     * @constructor
     * @param {IGamerPVPSyncC2S=} [properties] Properties to set
     */
    function GamerPVPSyncC2S(properties) {
        this.needFrames = [];
        this.crc = [];
        this.agents = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerPVPSyncC2S id.
     * @member {number} id
     * @memberof GamerPVPSyncC2S
     * @instance
     */
    GamerPVPSyncC2S.prototype.id = 0;

    /**
     * GamerPVPSyncC2S session.
     * @member {string} session
     * @memberof GamerPVPSyncC2S
     * @instance
     */
    GamerPVPSyncC2S.prototype.session = "";

    /**
     * GamerPVPSyncC2S input.
     * @member {IPVPInput|null|undefined} input
     * @memberof GamerPVPSyncC2S
     * @instance
     */
    GamerPVPSyncC2S.prototype.input = null;

    /**
     * GamerPVPSyncC2S needFrames.
     * @member {Array.<number>} needFrames
     * @memberof GamerPVPSyncC2S
     * @instance
     */
    GamerPVPSyncC2S.prototype.needFrames = $util.emptyArray;

    /**
     * GamerPVPSyncC2S crc.
     * @member {Array.<number|Long>} crc
     * @memberof GamerPVPSyncC2S
     * @instance
     */
    GamerPVPSyncC2S.prototype.crc = $util.emptyArray;

    /**
     * GamerPVPSyncC2S agents.
     * @member {Array.<IPVPInput>} agents
     * @memberof GamerPVPSyncC2S
     * @instance
     */
    GamerPVPSyncC2S.prototype.agents = $util.emptyArray;

    /**
     * GamerPVPSyncC2S reconn.
     * @member {boolean} reconn
     * @memberof GamerPVPSyncC2S
     * @instance
     */
    GamerPVPSyncC2S.prototype.reconn = false;

    /**
     * GamerPVPSyncC2S index.
     * @member {number} index
     * @memberof GamerPVPSyncC2S
     * @instance
     */
    GamerPVPSyncC2S.prototype.index = 0;

    /**
     * GamerPVPSyncC2S addr.
     * @member {string} addr
     * @memberof GamerPVPSyncC2S
     * @instance
     */
    GamerPVPSyncC2S.prototype.addr = "";

    /**
     * GamerPVPSyncC2S result.
     * @member {IPVPResult|null|undefined} result
     * @memberof GamerPVPSyncC2S
     * @instance
     */
    GamerPVPSyncC2S.prototype.result = null;

    /**
     * Creates a new GamerPVPSyncC2S instance using the specified properties.
     * @function create
     * @memberof GamerPVPSyncC2S
     * @static
     * @param {IGamerPVPSyncC2S=} [properties] Properties to set
     * @returns {GamerPVPSyncC2S} GamerPVPSyncC2S instance
     */
    GamerPVPSyncC2S.create = function create(properties) {
        return new GamerPVPSyncC2S(properties);
    };

    /**
     * Encodes the specified GamerPVPSyncC2S message. Does not implicitly {@link GamerPVPSyncC2S.verify|verify} messages.
     * @function encode
     * @memberof GamerPVPSyncC2S
     * @static
     * @param {IGamerPVPSyncC2S} message GamerPVPSyncC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerPVPSyncC2S.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.session != null && message.hasOwnProperty("session"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.session);
        if (message.input != null && message.hasOwnProperty("input"))
            $root.PVPInput.encode(message.input, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.needFrames != null && message.needFrames.length) {
            writer.uint32(/* id 4, wireType 2 =*/34).fork();
            for (var i = 0; i < message.needFrames.length; ++i)
                writer.int32(message.needFrames[i]);
            writer.ldelim();
        }
        if (message.crc != null && message.crc.length) {
            writer.uint32(/* id 5, wireType 2 =*/42).fork();
            for (var i = 0; i < message.crc.length; ++i)
                writer.uint64(message.crc[i]);
            writer.ldelim();
        }
        if (message.agents != null && message.agents.length)
            for (var i = 0; i < message.agents.length; ++i)
                $root.PVPInput.encode(message.agents[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.reconn != null && message.hasOwnProperty("reconn"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.reconn);
        if (message.index != null && message.hasOwnProperty("index"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.index);
        if (message.addr != null && message.hasOwnProperty("addr"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.addr);
        if (message.result != null && message.hasOwnProperty("result"))
            $root.PVPResult.encode(message.result, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GamerPVPSyncC2S message, length delimited. Does not implicitly {@link GamerPVPSyncC2S.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerPVPSyncC2S
     * @static
     * @param {IGamerPVPSyncC2S} message GamerPVPSyncC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerPVPSyncC2S.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerPVPSyncC2S message from the specified reader or buffer.
     * @function decode
     * @memberof GamerPVPSyncC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerPVPSyncC2S} GamerPVPSyncC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerPVPSyncC2S.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerPVPSyncC2S();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.session = reader.string();
                break;
            case 3:
                message.input = $root.PVPInput.decode(reader, reader.uint32());
                break;
            case 4:
                if (!(message.needFrames && message.needFrames.length))
                    message.needFrames = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.needFrames.push(reader.int32());
                } else
                    message.needFrames.push(reader.int32());
                break;
            case 5:
                if (!(message.crc && message.crc.length))
                    message.crc = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.crc.push(reader.uint64());
                } else
                    message.crc.push(reader.uint64());
                break;
            case 6:
                if (!(message.agents && message.agents.length))
                    message.agents = [];
                message.agents.push($root.PVPInput.decode(reader, reader.uint32()));
                break;
            case 7:
                message.reconn = reader.bool();
                break;
            case 8:
                message.index = reader.int32();
                break;
            case 9:
                message.addr = reader.string();
                break;
            case 10:
                message.result = $root.PVPResult.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerPVPSyncC2S message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerPVPSyncC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerPVPSyncC2S} GamerPVPSyncC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerPVPSyncC2S.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerPVPSyncC2S message.
     * @function verify
     * @memberof GamerPVPSyncC2S
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerPVPSyncC2S.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.session != null && message.hasOwnProperty("session"))
            if (!$util.isString(message.session))
                return "session: string expected";
        if (message.input != null && message.hasOwnProperty("input")) {
            var error = $root.PVPInput.verify(message.input);
            if (error)
                return "input." + error;
        }
        if (message.needFrames != null && message.hasOwnProperty("needFrames")) {
            if (!Array.isArray(message.needFrames))
                return "needFrames: array expected";
            for (var i = 0; i < message.needFrames.length; ++i)
                if (!$util.isInteger(message.needFrames[i]))
                    return "needFrames: integer[] expected";
        }
        if (message.crc != null && message.hasOwnProperty("crc")) {
            if (!Array.isArray(message.crc))
                return "crc: array expected";
            for (var i = 0; i < message.crc.length; ++i)
                if (!$util.isInteger(message.crc[i]) && !(message.crc[i] && $util.isInteger(message.crc[i].low) && $util.isInteger(message.crc[i].high)))
                    return "crc: integer|Long[] expected";
        }
        if (message.agents != null && message.hasOwnProperty("agents")) {
            if (!Array.isArray(message.agents))
                return "agents: array expected";
            for (var i = 0; i < message.agents.length; ++i) {
                var error = $root.PVPInput.verify(message.agents[i]);
                if (error)
                    return "agents." + error;
            }
        }
        if (message.reconn != null && message.hasOwnProperty("reconn"))
            if (typeof message.reconn !== "boolean")
                return "reconn: boolean expected";
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
        if (message.addr != null && message.hasOwnProperty("addr"))
            if (!$util.isString(message.addr))
                return "addr: string expected";
        if (message.result != null && message.hasOwnProperty("result")) {
            var error = $root.PVPResult.verify(message.result);
            if (error)
                return "result." + error;
        }
        return null;
    };

    /**
     * Creates a GamerPVPSyncC2S message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerPVPSyncC2S
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerPVPSyncC2S} GamerPVPSyncC2S
     */
    GamerPVPSyncC2S.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerPVPSyncC2S)
            return object;
        var message = new $root.GamerPVPSyncC2S();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.session != null)
            message.session = String(object.session);
        if (object.input != null) {
            if (typeof object.input !== "object")
                throw TypeError(".GamerPVPSyncC2S.input: object expected");
            message.input = $root.PVPInput.fromObject(object.input);
        }
        if (object.needFrames) {
            if (!Array.isArray(object.needFrames))
                throw TypeError(".GamerPVPSyncC2S.needFrames: array expected");
            message.needFrames = [];
            for (var i = 0; i < object.needFrames.length; ++i)
                message.needFrames[i] = object.needFrames[i] | 0;
        }
        if (object.crc) {
            if (!Array.isArray(object.crc))
                throw TypeError(".GamerPVPSyncC2S.crc: array expected");
            message.crc = [];
            for (var i = 0; i < object.crc.length; ++i)
                if ($util.Long)
                    (message.crc[i] = $util.Long.fromValue(object.crc[i])).unsigned = true;
                else if (typeof object.crc[i] === "string")
                    message.crc[i] = parseInt(object.crc[i], 10);
                else if (typeof object.crc[i] === "number")
                    message.crc[i] = object.crc[i];
                else if (typeof object.crc[i] === "object")
                    message.crc[i] = new $util.LongBits(object.crc[i].low >>> 0, object.crc[i].high >>> 0).toNumber(true);
        }
        if (object.agents) {
            if (!Array.isArray(object.agents))
                throw TypeError(".GamerPVPSyncC2S.agents: array expected");
            message.agents = [];
            for (var i = 0; i < object.agents.length; ++i) {
                if (typeof object.agents[i] !== "object")
                    throw TypeError(".GamerPVPSyncC2S.agents: object expected");
                message.agents[i] = $root.PVPInput.fromObject(object.agents[i]);
            }
        }
        if (object.reconn != null)
            message.reconn = Boolean(object.reconn);
        if (object.index != null)
            message.index = object.index | 0;
        if (object.addr != null)
            message.addr = String(object.addr);
        if (object.result != null) {
            if (typeof object.result !== "object")
                throw TypeError(".GamerPVPSyncC2S.result: object expected");
            message.result = $root.PVPResult.fromObject(object.result);
        }
        return message;
    };

    /**
     * Creates a plain object from a GamerPVPSyncC2S message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerPVPSyncC2S
     * @static
     * @param {GamerPVPSyncC2S} message GamerPVPSyncC2S
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerPVPSyncC2S.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.needFrames = [];
            object.crc = [];
            object.agents = [];
        }
        if (options.defaults) {
            object.id = 0;
            object.session = "";
            object.input = null;
            object.reconn = false;
            object.index = 0;
            object.addr = "";
            object.result = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.session != null && message.hasOwnProperty("session"))
            object.session = message.session;
        if (message.input != null && message.hasOwnProperty("input"))
            object.input = $root.PVPInput.toObject(message.input, options);
        if (message.needFrames && message.needFrames.length) {
            object.needFrames = [];
            for (var j = 0; j < message.needFrames.length; ++j)
                object.needFrames[j] = message.needFrames[j];
        }
        if (message.crc && message.crc.length) {
            object.crc = [];
            for (var j = 0; j < message.crc.length; ++j)
                if (typeof message.crc[j] === "number")
                    object.crc[j] = options.longs === String ? String(message.crc[j]) : message.crc[j];
                else
                    object.crc[j] = options.longs === String ? $util.Long.prototype.toString.call(message.crc[j]) : options.longs === Number ? new $util.LongBits(message.crc[j].low >>> 0, message.crc[j].high >>> 0).toNumber(true) : message.crc[j];
        }
        if (message.agents && message.agents.length) {
            object.agents = [];
            for (var j = 0; j < message.agents.length; ++j)
                object.agents[j] = $root.PVPInput.toObject(message.agents[j], options);
        }
        if (message.reconn != null && message.hasOwnProperty("reconn"))
            object.reconn = message.reconn;
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        if (message.addr != null && message.hasOwnProperty("addr"))
            object.addr = message.addr;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = $root.PVPResult.toObject(message.result, options);
        return object;
    };

    /**
     * Converts this GamerPVPSyncC2S to JSON.
     * @function toJSON
     * @memberof GamerPVPSyncC2S
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerPVPSyncC2S.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerPVPSyncC2S;
})();

$root.GamerPVPSyncS2C = (function() {

    /**
     * Properties of a GamerPVPSyncS2C.
     * @exports IGamerPVPSyncS2C
     * @interface IGamerPVPSyncS2C
     * @property {number|null} [error] GamerPVPSyncS2C error
     */

    /**
     * Constructs a new GamerPVPSyncS2C.
     * @exports GamerPVPSyncS2C
     * @classdesc Represents a GamerPVPSyncS2C.
     * @implements IGamerPVPSyncS2C
     * @constructor
     * @param {IGamerPVPSyncS2C=} [properties] Properties to set
     */
    function GamerPVPSyncS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerPVPSyncS2C error.
     * @member {number} error
     * @memberof GamerPVPSyncS2C
     * @instance
     */
    GamerPVPSyncS2C.prototype.error = 0;

    /**
     * Creates a new GamerPVPSyncS2C instance using the specified properties.
     * @function create
     * @memberof GamerPVPSyncS2C
     * @static
     * @param {IGamerPVPSyncS2C=} [properties] Properties to set
     * @returns {GamerPVPSyncS2C} GamerPVPSyncS2C instance
     */
    GamerPVPSyncS2C.create = function create(properties) {
        return new GamerPVPSyncS2C(properties);
    };

    /**
     * Encodes the specified GamerPVPSyncS2C message. Does not implicitly {@link GamerPVPSyncS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerPVPSyncS2C
     * @static
     * @param {IGamerPVPSyncS2C} message GamerPVPSyncS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerPVPSyncS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        return writer;
    };

    /**
     * Encodes the specified GamerPVPSyncS2C message, length delimited. Does not implicitly {@link GamerPVPSyncS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerPVPSyncS2C
     * @static
     * @param {IGamerPVPSyncS2C} message GamerPVPSyncS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerPVPSyncS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerPVPSyncS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerPVPSyncS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerPVPSyncS2C} GamerPVPSyncS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerPVPSyncS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerPVPSyncS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerPVPSyncS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerPVPSyncS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerPVPSyncS2C} GamerPVPSyncS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerPVPSyncS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerPVPSyncS2C message.
     * @function verify
     * @memberof GamerPVPSyncS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerPVPSyncS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        return null;
    };

    /**
     * Creates a GamerPVPSyncS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerPVPSyncS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerPVPSyncS2C} GamerPVPSyncS2C
     */
    GamerPVPSyncS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerPVPSyncS2C)
            return object;
        var message = new $root.GamerPVPSyncS2C();
        if (object.error != null)
            message.error = object.error | 0;
        return message;
    };

    /**
     * Creates a plain object from a GamerPVPSyncS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerPVPSyncS2C
     * @static
     * @param {GamerPVPSyncS2C} message GamerPVPSyncS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerPVPSyncS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.error = 0;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        return object;
    };

    /**
     * Converts this GamerPVPSyncS2C to JSON.
     * @function toJSON
     * @memberof GamerPVPSyncS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerPVPSyncS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerPVPSyncS2C;
})();

$root.GamerNotifyPVPSyncS2C = (function() {

    /**
     * Properties of a GamerNotifyPVPSyncS2C.
     * @exports IGamerNotifyPVPSyncS2C
     * @interface IGamerNotifyPVPSyncS2C
     * @property {number|null} [maxFrameCount] GamerNotifyPVPSyncS2C maxFrameCount
     * @property {Array.<IPVPFrame>|null} [frames] GamerNotifyPVPSyncS2C frames
     * @property {Uint8Array|null} [framesData] GamerNotifyPVPSyncS2C framesData
     * @property {Array.<Uint8Array>|null} [frameData] GamerNotifyPVPSyncS2C frameData
     * @property {number|null} [index] GamerNotifyPVPSyncS2C index
     * @property {number|null} [delta] GamerNotifyPVPSyncS2C delta
     * @property {string|null} [session] GamerNotifyPVPSyncS2C session
     */

    /**
     * Constructs a new GamerNotifyPVPSyncS2C.
     * @exports GamerNotifyPVPSyncS2C
     * @classdesc Represents a GamerNotifyPVPSyncS2C.
     * @implements IGamerNotifyPVPSyncS2C
     * @constructor
     * @param {IGamerNotifyPVPSyncS2C=} [properties] Properties to set
     */
    function GamerNotifyPVPSyncS2C(properties) {
        this.frames = [];
        this.frameData = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerNotifyPVPSyncS2C maxFrameCount.
     * @member {number} maxFrameCount
     * @memberof GamerNotifyPVPSyncS2C
     * @instance
     */
    GamerNotifyPVPSyncS2C.prototype.maxFrameCount = 0;

    /**
     * GamerNotifyPVPSyncS2C frames.
     * @member {Array.<IPVPFrame>} frames
     * @memberof GamerNotifyPVPSyncS2C
     * @instance
     */
    GamerNotifyPVPSyncS2C.prototype.frames = $util.emptyArray;

    /**
     * GamerNotifyPVPSyncS2C framesData.
     * @member {Uint8Array} framesData
     * @memberof GamerNotifyPVPSyncS2C
     * @instance
     */
    GamerNotifyPVPSyncS2C.prototype.framesData = $util.newBuffer([]);

    /**
     * GamerNotifyPVPSyncS2C frameData.
     * @member {Array.<Uint8Array>} frameData
     * @memberof GamerNotifyPVPSyncS2C
     * @instance
     */
    GamerNotifyPVPSyncS2C.prototype.frameData = $util.emptyArray;

    /**
     * GamerNotifyPVPSyncS2C index.
     * @member {number} index
     * @memberof GamerNotifyPVPSyncS2C
     * @instance
     */
    GamerNotifyPVPSyncS2C.prototype.index = 0;

    /**
     * GamerNotifyPVPSyncS2C delta.
     * @member {number} delta
     * @memberof GamerNotifyPVPSyncS2C
     * @instance
     */
    GamerNotifyPVPSyncS2C.prototype.delta = 0;

    /**
     * GamerNotifyPVPSyncS2C session.
     * @member {string} session
     * @memberof GamerNotifyPVPSyncS2C
     * @instance
     */
    GamerNotifyPVPSyncS2C.prototype.session = "";

    /**
     * Creates a new GamerNotifyPVPSyncS2C instance using the specified properties.
     * @function create
     * @memberof GamerNotifyPVPSyncS2C
     * @static
     * @param {IGamerNotifyPVPSyncS2C=} [properties] Properties to set
     * @returns {GamerNotifyPVPSyncS2C} GamerNotifyPVPSyncS2C instance
     */
    GamerNotifyPVPSyncS2C.create = function create(properties) {
        return new GamerNotifyPVPSyncS2C(properties);
    };

    /**
     * Encodes the specified GamerNotifyPVPSyncS2C message. Does not implicitly {@link GamerNotifyPVPSyncS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerNotifyPVPSyncS2C
     * @static
     * @param {IGamerNotifyPVPSyncS2C} message GamerNotifyPVPSyncS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNotifyPVPSyncS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.maxFrameCount != null && message.hasOwnProperty("maxFrameCount"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.maxFrameCount);
        if (message.frames != null && message.frames.length)
            for (var i = 0; i < message.frames.length; ++i)
                $root.PVPFrame.encode(message.frames[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.framesData != null && message.hasOwnProperty("framesData"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.framesData);
        if (message.frameData != null && message.frameData.length)
            for (var i = 0; i < message.frameData.length; ++i)
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.frameData[i]);
        if (message.index != null && message.hasOwnProperty("index"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.index);
        if (message.delta != null && message.hasOwnProperty("delta"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.delta);
        if (message.session != null && message.hasOwnProperty("session"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.session);
        return writer;
    };

    /**
     * Encodes the specified GamerNotifyPVPSyncS2C message, length delimited. Does not implicitly {@link GamerNotifyPVPSyncS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerNotifyPVPSyncS2C
     * @static
     * @param {IGamerNotifyPVPSyncS2C} message GamerNotifyPVPSyncS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNotifyPVPSyncS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerNotifyPVPSyncS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerNotifyPVPSyncS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerNotifyPVPSyncS2C} GamerNotifyPVPSyncS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNotifyPVPSyncS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerNotifyPVPSyncS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.maxFrameCount = reader.int32();
                break;
            case 2:
                if (!(message.frames && message.frames.length))
                    message.frames = [];
                message.frames.push($root.PVPFrame.decode(reader, reader.uint32()));
                break;
            case 3:
                message.framesData = reader.bytes();
                break;
            case 4:
                if (!(message.frameData && message.frameData.length))
                    message.frameData = [];
                message.frameData.push(reader.bytes());
                break;
            case 5:
                message.index = reader.int32();
                break;
            case 6:
                message.delta = reader.int32();
                break;
            case 7:
                message.session = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerNotifyPVPSyncS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerNotifyPVPSyncS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerNotifyPVPSyncS2C} GamerNotifyPVPSyncS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNotifyPVPSyncS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerNotifyPVPSyncS2C message.
     * @function verify
     * @memberof GamerNotifyPVPSyncS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerNotifyPVPSyncS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.maxFrameCount != null && message.hasOwnProperty("maxFrameCount"))
            if (!$util.isInteger(message.maxFrameCount))
                return "maxFrameCount: integer expected";
        if (message.frames != null && message.hasOwnProperty("frames")) {
            if (!Array.isArray(message.frames))
                return "frames: array expected";
            for (var i = 0; i < message.frames.length; ++i) {
                var error = $root.PVPFrame.verify(message.frames[i]);
                if (error)
                    return "frames." + error;
            }
        }
        if (message.framesData != null && message.hasOwnProperty("framesData"))
            if (!(message.framesData && typeof message.framesData.length === "number" || $util.isString(message.framesData)))
                return "framesData: buffer expected";
        if (message.frameData != null && message.hasOwnProperty("frameData")) {
            if (!Array.isArray(message.frameData))
                return "frameData: array expected";
            for (var i = 0; i < message.frameData.length; ++i)
                if (!(message.frameData[i] && typeof message.frameData[i].length === "number" || $util.isString(message.frameData[i])))
                    return "frameData: buffer[] expected";
        }
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
        if (message.delta != null && message.hasOwnProperty("delta"))
            if (!$util.isInteger(message.delta))
                return "delta: integer expected";
        if (message.session != null && message.hasOwnProperty("session"))
            if (!$util.isString(message.session))
                return "session: string expected";
        return null;
    };

    /**
     * Creates a GamerNotifyPVPSyncS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerNotifyPVPSyncS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerNotifyPVPSyncS2C} GamerNotifyPVPSyncS2C
     */
    GamerNotifyPVPSyncS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerNotifyPVPSyncS2C)
            return object;
        var message = new $root.GamerNotifyPVPSyncS2C();
        if (object.maxFrameCount != null)
            message.maxFrameCount = object.maxFrameCount | 0;
        if (object.frames) {
            if (!Array.isArray(object.frames))
                throw TypeError(".GamerNotifyPVPSyncS2C.frames: array expected");
            message.frames = [];
            for (var i = 0; i < object.frames.length; ++i) {
                if (typeof object.frames[i] !== "object")
                    throw TypeError(".GamerNotifyPVPSyncS2C.frames: object expected");
                message.frames[i] = $root.PVPFrame.fromObject(object.frames[i]);
            }
        }
        if (object.framesData != null)
            if (typeof object.framesData === "string")
                $util.base64.decode(object.framesData, message.framesData = $util.newBuffer($util.base64.length(object.framesData)), 0);
            else if (object.framesData.length)
                message.framesData = object.framesData;
        if (object.frameData) {
            if (!Array.isArray(object.frameData))
                throw TypeError(".GamerNotifyPVPSyncS2C.frameData: array expected");
            message.frameData = [];
            for (var i = 0; i < object.frameData.length; ++i)
                if (typeof object.frameData[i] === "string")
                    $util.base64.decode(object.frameData[i], message.frameData[i] = $util.newBuffer($util.base64.length(object.frameData[i])), 0);
                else if (object.frameData[i].length)
                    message.frameData[i] = object.frameData[i];
        }
        if (object.index != null)
            message.index = object.index | 0;
        if (object.delta != null)
            message.delta = object.delta | 0;
        if (object.session != null)
            message.session = String(object.session);
        return message;
    };

    /**
     * Creates a plain object from a GamerNotifyPVPSyncS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerNotifyPVPSyncS2C
     * @static
     * @param {GamerNotifyPVPSyncS2C} message GamerNotifyPVPSyncS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerNotifyPVPSyncS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.frames = [];
            object.frameData = [];
        }
        if (options.defaults) {
            object.maxFrameCount = 0;
            if (options.bytes === String)
                object.framesData = "";
            else {
                object.framesData = [];
                if (options.bytes !== Array)
                    object.framesData = $util.newBuffer(object.framesData);
            }
            object.index = 0;
            object.delta = 0;
            object.session = "";
        }
        if (message.maxFrameCount != null && message.hasOwnProperty("maxFrameCount"))
            object.maxFrameCount = message.maxFrameCount;
        if (message.frames && message.frames.length) {
            object.frames = [];
            for (var j = 0; j < message.frames.length; ++j)
                object.frames[j] = $root.PVPFrame.toObject(message.frames[j], options);
        }
        if (message.framesData != null && message.hasOwnProperty("framesData"))
            object.framesData = options.bytes === String ? $util.base64.encode(message.framesData, 0, message.framesData.length) : options.bytes === Array ? Array.prototype.slice.call(message.framesData) : message.framesData;
        if (message.frameData && message.frameData.length) {
            object.frameData = [];
            for (var j = 0; j < message.frameData.length; ++j)
                object.frameData[j] = options.bytes === String ? $util.base64.encode(message.frameData[j], 0, message.frameData[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.frameData[j]) : message.frameData[j];
        }
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        if (message.delta != null && message.hasOwnProperty("delta"))
            object.delta = message.delta;
        if (message.session != null && message.hasOwnProperty("session"))
            object.session = message.session;
        return object;
    };

    /**
     * Converts this GamerNotifyPVPSyncS2C to JSON.
     * @function toJSON
     * @memberof GamerNotifyPVPSyncS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerNotifyPVPSyncS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerNotifyPVPSyncS2C;
})();

$root.GamerNotifyNewPVPResultS2C = (function() {

    /**
     * Properties of a GamerNotifyNewPVPResultS2C.
     * @exports IGamerNotifyNewPVPResultS2C
     * @interface IGamerNotifyNewPVPResultS2C
     * @property {number|null} [error] GamerNotifyNewPVPResultS2C error
     * @property {number|null} [icon] GamerNotifyNewPVPResultS2C icon
     * @property {number|null} [oldLengthRank] GamerNotifyNewPVPResultS2C oldLengthRank
     * @property {number|null} [newLengthRank] GamerNotifyNewPVPResultS2C newLengthRank
     * @property {IPVPResult|null} [result] GamerNotifyNewPVPResultS2C result
     */

    /**
     * Constructs a new GamerNotifyNewPVPResultS2C.
     * @exports GamerNotifyNewPVPResultS2C
     * @classdesc Represents a GamerNotifyNewPVPResultS2C.
     * @implements IGamerNotifyNewPVPResultS2C
     * @constructor
     * @param {IGamerNotifyNewPVPResultS2C=} [properties] Properties to set
     */
    function GamerNotifyNewPVPResultS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerNotifyNewPVPResultS2C error.
     * @member {number} error
     * @memberof GamerNotifyNewPVPResultS2C
     * @instance
     */
    GamerNotifyNewPVPResultS2C.prototype.error = 0;

    /**
     * GamerNotifyNewPVPResultS2C icon.
     * @member {number} icon
     * @memberof GamerNotifyNewPVPResultS2C
     * @instance
     */
    GamerNotifyNewPVPResultS2C.prototype.icon = 0;

    /**
     * GamerNotifyNewPVPResultS2C oldLengthRank.
     * @member {number} oldLengthRank
     * @memberof GamerNotifyNewPVPResultS2C
     * @instance
     */
    GamerNotifyNewPVPResultS2C.prototype.oldLengthRank = 0;

    /**
     * GamerNotifyNewPVPResultS2C newLengthRank.
     * @member {number} newLengthRank
     * @memberof GamerNotifyNewPVPResultS2C
     * @instance
     */
    GamerNotifyNewPVPResultS2C.prototype.newLengthRank = 0;

    /**
     * GamerNotifyNewPVPResultS2C result.
     * @member {IPVPResult|null|undefined} result
     * @memberof GamerNotifyNewPVPResultS2C
     * @instance
     */
    GamerNotifyNewPVPResultS2C.prototype.result = null;

    /**
     * Creates a new GamerNotifyNewPVPResultS2C instance using the specified properties.
     * @function create
     * @memberof GamerNotifyNewPVPResultS2C
     * @static
     * @param {IGamerNotifyNewPVPResultS2C=} [properties] Properties to set
     * @returns {GamerNotifyNewPVPResultS2C} GamerNotifyNewPVPResultS2C instance
     */
    GamerNotifyNewPVPResultS2C.create = function create(properties) {
        return new GamerNotifyNewPVPResultS2C(properties);
    };

    /**
     * Encodes the specified GamerNotifyNewPVPResultS2C message. Does not implicitly {@link GamerNotifyNewPVPResultS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerNotifyNewPVPResultS2C
     * @static
     * @param {IGamerNotifyNewPVPResultS2C} message GamerNotifyNewPVPResultS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNotifyNewPVPResultS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.icon);
        if (message.oldLengthRank != null && message.hasOwnProperty("oldLengthRank"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.oldLengthRank);
        if (message.newLengthRank != null && message.hasOwnProperty("newLengthRank"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.newLengthRank);
        if (message.result != null && message.hasOwnProperty("result"))
            $root.PVPResult.encode(message.result, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GamerNotifyNewPVPResultS2C message, length delimited. Does not implicitly {@link GamerNotifyNewPVPResultS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerNotifyNewPVPResultS2C
     * @static
     * @param {IGamerNotifyNewPVPResultS2C} message GamerNotifyNewPVPResultS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNotifyNewPVPResultS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerNotifyNewPVPResultS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerNotifyNewPVPResultS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerNotifyNewPVPResultS2C} GamerNotifyNewPVPResultS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNotifyNewPVPResultS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerNotifyNewPVPResultS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            case 2:
                message.icon = reader.int32();
                break;
            case 3:
                message.oldLengthRank = reader.int32();
                break;
            case 4:
                message.newLengthRank = reader.int32();
                break;
            case 5:
                message.result = $root.PVPResult.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerNotifyNewPVPResultS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerNotifyNewPVPResultS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerNotifyNewPVPResultS2C} GamerNotifyNewPVPResultS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNotifyNewPVPResultS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerNotifyNewPVPResultS2C message.
     * @function verify
     * @memberof GamerNotifyNewPVPResultS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerNotifyNewPVPResultS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isInteger(message.icon))
                return "icon: integer expected";
        if (message.oldLengthRank != null && message.hasOwnProperty("oldLengthRank"))
            if (!$util.isInteger(message.oldLengthRank))
                return "oldLengthRank: integer expected";
        if (message.newLengthRank != null && message.hasOwnProperty("newLengthRank"))
            if (!$util.isInteger(message.newLengthRank))
                return "newLengthRank: integer expected";
        if (message.result != null && message.hasOwnProperty("result")) {
            var error = $root.PVPResult.verify(message.result);
            if (error)
                return "result." + error;
        }
        return null;
    };

    /**
     * Creates a GamerNotifyNewPVPResultS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerNotifyNewPVPResultS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerNotifyNewPVPResultS2C} GamerNotifyNewPVPResultS2C
     */
    GamerNotifyNewPVPResultS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerNotifyNewPVPResultS2C)
            return object;
        var message = new $root.GamerNotifyNewPVPResultS2C();
        if (object.error != null)
            message.error = object.error | 0;
        if (object.icon != null)
            message.icon = object.icon | 0;
        if (object.oldLengthRank != null)
            message.oldLengthRank = object.oldLengthRank | 0;
        if (object.newLengthRank != null)
            message.newLengthRank = object.newLengthRank | 0;
        if (object.result != null) {
            if (typeof object.result !== "object")
                throw TypeError(".GamerNotifyNewPVPResultS2C.result: object expected");
            message.result = $root.PVPResult.fromObject(object.result);
        }
        return message;
    };

    /**
     * Creates a plain object from a GamerNotifyNewPVPResultS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerNotifyNewPVPResultS2C
     * @static
     * @param {GamerNotifyNewPVPResultS2C} message GamerNotifyNewPVPResultS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerNotifyNewPVPResultS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.error = 0;
            object.icon = 0;
            object.oldLengthRank = 0;
            object.newLengthRank = 0;
            object.result = null;
        }
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        if (message.oldLengthRank != null && message.hasOwnProperty("oldLengthRank"))
            object.oldLengthRank = message.oldLengthRank;
        if (message.newLengthRank != null && message.hasOwnProperty("newLengthRank"))
            object.newLengthRank = message.newLengthRank;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = $root.PVPResult.toObject(message.result, options);
        return object;
    };

    /**
     * Converts this GamerNotifyNewPVPResultS2C to JSON.
     * @function toJSON
     * @memberof GamerNotifyNewPVPResultS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerNotifyNewPVPResultS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerNotifyNewPVPResultS2C;
})();

$root.GamerNotifyIconChangeS2C = (function() {

    /**
     * Properties of a GamerNotifyIconChangeS2C.
     * @exports IGamerNotifyIconChangeS2C
     * @interface IGamerNotifyIconChangeS2C
     * @property {number|null} [error] GamerNotifyIconChangeS2C error
     * @property {number|null} [icon] GamerNotifyIconChangeS2C icon
     */

    /**
     * Constructs a new GamerNotifyIconChangeS2C.
     * @exports GamerNotifyIconChangeS2C
     * @classdesc Represents a GamerNotifyIconChangeS2C.
     * @implements IGamerNotifyIconChangeS2C
     * @constructor
     * @param {IGamerNotifyIconChangeS2C=} [properties] Properties to set
     */
    function GamerNotifyIconChangeS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerNotifyIconChangeS2C error.
     * @member {number} error
     * @memberof GamerNotifyIconChangeS2C
     * @instance
     */
    GamerNotifyIconChangeS2C.prototype.error = 0;

    /**
     * GamerNotifyIconChangeS2C icon.
     * @member {number} icon
     * @memberof GamerNotifyIconChangeS2C
     * @instance
     */
    GamerNotifyIconChangeS2C.prototype.icon = 0;

    /**
     * Creates a new GamerNotifyIconChangeS2C instance using the specified properties.
     * @function create
     * @memberof GamerNotifyIconChangeS2C
     * @static
     * @param {IGamerNotifyIconChangeS2C=} [properties] Properties to set
     * @returns {GamerNotifyIconChangeS2C} GamerNotifyIconChangeS2C instance
     */
    GamerNotifyIconChangeS2C.create = function create(properties) {
        return new GamerNotifyIconChangeS2C(properties);
    };

    /**
     * Encodes the specified GamerNotifyIconChangeS2C message. Does not implicitly {@link GamerNotifyIconChangeS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerNotifyIconChangeS2C
     * @static
     * @param {IGamerNotifyIconChangeS2C} message GamerNotifyIconChangeS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNotifyIconChangeS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.icon);
        return writer;
    };

    /**
     * Encodes the specified GamerNotifyIconChangeS2C message, length delimited. Does not implicitly {@link GamerNotifyIconChangeS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerNotifyIconChangeS2C
     * @static
     * @param {IGamerNotifyIconChangeS2C} message GamerNotifyIconChangeS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNotifyIconChangeS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerNotifyIconChangeS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerNotifyIconChangeS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerNotifyIconChangeS2C} GamerNotifyIconChangeS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNotifyIconChangeS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerNotifyIconChangeS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            case 2:
                message.icon = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerNotifyIconChangeS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerNotifyIconChangeS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerNotifyIconChangeS2C} GamerNotifyIconChangeS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNotifyIconChangeS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerNotifyIconChangeS2C message.
     * @function verify
     * @memberof GamerNotifyIconChangeS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerNotifyIconChangeS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isInteger(message.icon))
                return "icon: integer expected";
        return null;
    };

    /**
     * Creates a GamerNotifyIconChangeS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerNotifyIconChangeS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerNotifyIconChangeS2C} GamerNotifyIconChangeS2C
     */
    GamerNotifyIconChangeS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerNotifyIconChangeS2C)
            return object;
        var message = new $root.GamerNotifyIconChangeS2C();
        if (object.error != null)
            message.error = object.error | 0;
        if (object.icon != null)
            message.icon = object.icon | 0;
        return message;
    };

    /**
     * Creates a plain object from a GamerNotifyIconChangeS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerNotifyIconChangeS2C
     * @static
     * @param {GamerNotifyIconChangeS2C} message GamerNotifyIconChangeS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerNotifyIconChangeS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.error = 0;
            object.icon = 0;
        }
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        return object;
    };

    /**
     * Converts this GamerNotifyIconChangeS2C to JSON.
     * @function toJSON
     * @memberof GamerNotifyIconChangeS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerNotifyIconChangeS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerNotifyIconChangeS2C;
})();

$root.GamerGetRealTimeRankC2S = (function() {

    /**
     * Properties of a GamerGetRealTimeRankC2S.
     * @exports IGamerGetRealTimeRankC2S
     * @interface IGamerGetRealTimeRankC2S
     * @property {number|null} [id] GamerGetRealTimeRankC2S id
     */

    /**
     * Constructs a new GamerGetRealTimeRankC2S.
     * @exports GamerGetRealTimeRankC2S
     * @classdesc Represents a GamerGetRealTimeRankC2S.
     * @implements IGamerGetRealTimeRankC2S
     * @constructor
     * @param {IGamerGetRealTimeRankC2S=} [properties] Properties to set
     */
    function GamerGetRealTimeRankC2S(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerGetRealTimeRankC2S id.
     * @member {number} id
     * @memberof GamerGetRealTimeRankC2S
     * @instance
     */
    GamerGetRealTimeRankC2S.prototype.id = 0;

    /**
     * Creates a new GamerGetRealTimeRankC2S instance using the specified properties.
     * @function create
     * @memberof GamerGetRealTimeRankC2S
     * @static
     * @param {IGamerGetRealTimeRankC2S=} [properties] Properties to set
     * @returns {GamerGetRealTimeRankC2S} GamerGetRealTimeRankC2S instance
     */
    GamerGetRealTimeRankC2S.create = function create(properties) {
        return new GamerGetRealTimeRankC2S(properties);
    };

    /**
     * Encodes the specified GamerGetRealTimeRankC2S message. Does not implicitly {@link GamerGetRealTimeRankC2S.verify|verify} messages.
     * @function encode
     * @memberof GamerGetRealTimeRankC2S
     * @static
     * @param {IGamerGetRealTimeRankC2S} message GamerGetRealTimeRankC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerGetRealTimeRankC2S.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        return writer;
    };

    /**
     * Encodes the specified GamerGetRealTimeRankC2S message, length delimited. Does not implicitly {@link GamerGetRealTimeRankC2S.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerGetRealTimeRankC2S
     * @static
     * @param {IGamerGetRealTimeRankC2S} message GamerGetRealTimeRankC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerGetRealTimeRankC2S.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerGetRealTimeRankC2S message from the specified reader or buffer.
     * @function decode
     * @memberof GamerGetRealTimeRankC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerGetRealTimeRankC2S} GamerGetRealTimeRankC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerGetRealTimeRankC2S.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerGetRealTimeRankC2S();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerGetRealTimeRankC2S message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerGetRealTimeRankC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerGetRealTimeRankC2S} GamerGetRealTimeRankC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerGetRealTimeRankC2S.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerGetRealTimeRankC2S message.
     * @function verify
     * @memberof GamerGetRealTimeRankC2S
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerGetRealTimeRankC2S.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        return null;
    };

    /**
     * Creates a GamerGetRealTimeRankC2S message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerGetRealTimeRankC2S
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerGetRealTimeRankC2S} GamerGetRealTimeRankC2S
     */
    GamerGetRealTimeRankC2S.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerGetRealTimeRankC2S)
            return object;
        var message = new $root.GamerGetRealTimeRankC2S();
        if (object.id != null)
            message.id = object.id | 0;
        return message;
    };

    /**
     * Creates a plain object from a GamerGetRealTimeRankC2S message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerGetRealTimeRankC2S
     * @static
     * @param {GamerGetRealTimeRankC2S} message GamerGetRealTimeRankC2S
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerGetRealTimeRankC2S.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = 0;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this GamerGetRealTimeRankC2S to JSON.
     * @function toJSON
     * @memberof GamerGetRealTimeRankC2S
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerGetRealTimeRankC2S.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerGetRealTimeRankC2S;
})();

$root.GamerGetRealTimeRankS2C = (function() {

    /**
     * Properties of a GamerGetRealTimeRankS2C.
     * @exports IGamerGetRealTimeRankS2C
     * @interface IGamerGetRealTimeRankS2C
     * @property {number|null} [error] GamerGetRealTimeRankS2C error
     * @property {Array.<IRankLength>|null} [ranks] GamerGetRealTimeRankS2C ranks
     */

    /**
     * Constructs a new GamerGetRealTimeRankS2C.
     * @exports GamerGetRealTimeRankS2C
     * @classdesc Represents a GamerGetRealTimeRankS2C.
     * @implements IGamerGetRealTimeRankS2C
     * @constructor
     * @param {IGamerGetRealTimeRankS2C=} [properties] Properties to set
     */
    function GamerGetRealTimeRankS2C(properties) {
        this.ranks = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerGetRealTimeRankS2C error.
     * @member {number} error
     * @memberof GamerGetRealTimeRankS2C
     * @instance
     */
    GamerGetRealTimeRankS2C.prototype.error = 0;

    /**
     * GamerGetRealTimeRankS2C ranks.
     * @member {Array.<IRankLength>} ranks
     * @memberof GamerGetRealTimeRankS2C
     * @instance
     */
    GamerGetRealTimeRankS2C.prototype.ranks = $util.emptyArray;

    /**
     * Creates a new GamerGetRealTimeRankS2C instance using the specified properties.
     * @function create
     * @memberof GamerGetRealTimeRankS2C
     * @static
     * @param {IGamerGetRealTimeRankS2C=} [properties] Properties to set
     * @returns {GamerGetRealTimeRankS2C} GamerGetRealTimeRankS2C instance
     */
    GamerGetRealTimeRankS2C.create = function create(properties) {
        return new GamerGetRealTimeRankS2C(properties);
    };

    /**
     * Encodes the specified GamerGetRealTimeRankS2C message. Does not implicitly {@link GamerGetRealTimeRankS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerGetRealTimeRankS2C
     * @static
     * @param {IGamerGetRealTimeRankS2C} message GamerGetRealTimeRankS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerGetRealTimeRankS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        if (message.ranks != null && message.ranks.length)
            for (var i = 0; i < message.ranks.length; ++i)
                $root.RankLength.encode(message.ranks[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GamerGetRealTimeRankS2C message, length delimited. Does not implicitly {@link GamerGetRealTimeRankS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerGetRealTimeRankS2C
     * @static
     * @param {IGamerGetRealTimeRankS2C} message GamerGetRealTimeRankS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerGetRealTimeRankS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerGetRealTimeRankS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerGetRealTimeRankS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerGetRealTimeRankS2C} GamerGetRealTimeRankS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerGetRealTimeRankS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerGetRealTimeRankS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            case 2:
                if (!(message.ranks && message.ranks.length))
                    message.ranks = [];
                message.ranks.push($root.RankLength.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerGetRealTimeRankS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerGetRealTimeRankS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerGetRealTimeRankS2C} GamerGetRealTimeRankS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerGetRealTimeRankS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerGetRealTimeRankS2C message.
     * @function verify
     * @memberof GamerGetRealTimeRankS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerGetRealTimeRankS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        if (message.ranks != null && message.hasOwnProperty("ranks")) {
            if (!Array.isArray(message.ranks))
                return "ranks: array expected";
            for (var i = 0; i < message.ranks.length; ++i) {
                var error = $root.RankLength.verify(message.ranks[i]);
                if (error)
                    return "ranks." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GamerGetRealTimeRankS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerGetRealTimeRankS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerGetRealTimeRankS2C} GamerGetRealTimeRankS2C
     */
    GamerGetRealTimeRankS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerGetRealTimeRankS2C)
            return object;
        var message = new $root.GamerGetRealTimeRankS2C();
        if (object.error != null)
            message.error = object.error | 0;
        if (object.ranks) {
            if (!Array.isArray(object.ranks))
                throw TypeError(".GamerGetRealTimeRankS2C.ranks: array expected");
            message.ranks = [];
            for (var i = 0; i < object.ranks.length; ++i) {
                if (typeof object.ranks[i] !== "object")
                    throw TypeError(".GamerGetRealTimeRankS2C.ranks: object expected");
                message.ranks[i] = $root.RankLength.fromObject(object.ranks[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GamerGetRealTimeRankS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerGetRealTimeRankS2C
     * @static
     * @param {GamerGetRealTimeRankS2C} message GamerGetRealTimeRankS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerGetRealTimeRankS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.ranks = [];
        if (options.defaults)
            object.error = 0;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        if (message.ranks && message.ranks.length) {
            object.ranks = [];
            for (var j = 0; j < message.ranks.length; ++j)
                object.ranks[j] = $root.RankLength.toObject(message.ranks[j], options);
        }
        return object;
    };

    /**
     * Converts this GamerGetRealTimeRankS2C to JSON.
     * @function toJSON
     * @memberof GamerGetRealTimeRankS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerGetRealTimeRankS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerGetRealTimeRankS2C;
})();

$root.GamerCheckPVPBattleC2S = (function() {

    /**
     * Properties of a GamerCheckPVPBattleC2S.
     * @exports IGamerCheckPVPBattleC2S
     * @interface IGamerCheckPVPBattleC2S
     * @property {number|null} [id] GamerCheckPVPBattleC2S id
     * @property {string|null} [session] GamerCheckPVPBattleC2S session
     */

    /**
     * Constructs a new GamerCheckPVPBattleC2S.
     * @exports GamerCheckPVPBattleC2S
     * @classdesc Represents a GamerCheckPVPBattleC2S.
     * @implements IGamerCheckPVPBattleC2S
     * @constructor
     * @param {IGamerCheckPVPBattleC2S=} [properties] Properties to set
     */
    function GamerCheckPVPBattleC2S(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerCheckPVPBattleC2S id.
     * @member {number} id
     * @memberof GamerCheckPVPBattleC2S
     * @instance
     */
    GamerCheckPVPBattleC2S.prototype.id = 0;

    /**
     * GamerCheckPVPBattleC2S session.
     * @member {string} session
     * @memberof GamerCheckPVPBattleC2S
     * @instance
     */
    GamerCheckPVPBattleC2S.prototype.session = "";

    /**
     * Creates a new GamerCheckPVPBattleC2S instance using the specified properties.
     * @function create
     * @memberof GamerCheckPVPBattleC2S
     * @static
     * @param {IGamerCheckPVPBattleC2S=} [properties] Properties to set
     * @returns {GamerCheckPVPBattleC2S} GamerCheckPVPBattleC2S instance
     */
    GamerCheckPVPBattleC2S.create = function create(properties) {
        return new GamerCheckPVPBattleC2S(properties);
    };

    /**
     * Encodes the specified GamerCheckPVPBattleC2S message. Does not implicitly {@link GamerCheckPVPBattleC2S.verify|verify} messages.
     * @function encode
     * @memberof GamerCheckPVPBattleC2S
     * @static
     * @param {IGamerCheckPVPBattleC2S} message GamerCheckPVPBattleC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerCheckPVPBattleC2S.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.session != null && message.hasOwnProperty("session"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.session);
        return writer;
    };

    /**
     * Encodes the specified GamerCheckPVPBattleC2S message, length delimited. Does not implicitly {@link GamerCheckPVPBattleC2S.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerCheckPVPBattleC2S
     * @static
     * @param {IGamerCheckPVPBattleC2S} message GamerCheckPVPBattleC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerCheckPVPBattleC2S.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerCheckPVPBattleC2S message from the specified reader or buffer.
     * @function decode
     * @memberof GamerCheckPVPBattleC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerCheckPVPBattleC2S} GamerCheckPVPBattleC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerCheckPVPBattleC2S.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerCheckPVPBattleC2S();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.session = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerCheckPVPBattleC2S message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerCheckPVPBattleC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerCheckPVPBattleC2S} GamerCheckPVPBattleC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerCheckPVPBattleC2S.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerCheckPVPBattleC2S message.
     * @function verify
     * @memberof GamerCheckPVPBattleC2S
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerCheckPVPBattleC2S.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.session != null && message.hasOwnProperty("session"))
            if (!$util.isString(message.session))
                return "session: string expected";
        return null;
    };

    /**
     * Creates a GamerCheckPVPBattleC2S message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerCheckPVPBattleC2S
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerCheckPVPBattleC2S} GamerCheckPVPBattleC2S
     */
    GamerCheckPVPBattleC2S.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerCheckPVPBattleC2S)
            return object;
        var message = new $root.GamerCheckPVPBattleC2S();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.session != null)
            message.session = String(object.session);
        return message;
    };

    /**
     * Creates a plain object from a GamerCheckPVPBattleC2S message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerCheckPVPBattleC2S
     * @static
     * @param {GamerCheckPVPBattleC2S} message GamerCheckPVPBattleC2S
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerCheckPVPBattleC2S.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.session = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.session != null && message.hasOwnProperty("session"))
            object.session = message.session;
        return object;
    };

    /**
     * Converts this GamerCheckPVPBattleC2S to JSON.
     * @function toJSON
     * @memberof GamerCheckPVPBattleC2S
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerCheckPVPBattleC2S.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerCheckPVPBattleC2S;
})();

$root.GamerCheckPVPBattleS2C = (function() {

    /**
     * Properties of a GamerCheckPVPBattleS2C.
     * @exports IGamerCheckPVPBattleS2C
     * @interface IGamerCheckPVPBattleS2C
     * @property {number|null} [error] GamerCheckPVPBattleS2C error
     * @property {IMatchInfo|null} [matchInfo] GamerCheckPVPBattleS2C matchInfo
     */

    /**
     * Constructs a new GamerCheckPVPBattleS2C.
     * @exports GamerCheckPVPBattleS2C
     * @classdesc Represents a GamerCheckPVPBattleS2C.
     * @implements IGamerCheckPVPBattleS2C
     * @constructor
     * @param {IGamerCheckPVPBattleS2C=} [properties] Properties to set
     */
    function GamerCheckPVPBattleS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerCheckPVPBattleS2C error.
     * @member {number} error
     * @memberof GamerCheckPVPBattleS2C
     * @instance
     */
    GamerCheckPVPBattleS2C.prototype.error = 0;

    /**
     * GamerCheckPVPBattleS2C matchInfo.
     * @member {IMatchInfo|null|undefined} matchInfo
     * @memberof GamerCheckPVPBattleS2C
     * @instance
     */
    GamerCheckPVPBattleS2C.prototype.matchInfo = null;

    /**
     * Creates a new GamerCheckPVPBattleS2C instance using the specified properties.
     * @function create
     * @memberof GamerCheckPVPBattleS2C
     * @static
     * @param {IGamerCheckPVPBattleS2C=} [properties] Properties to set
     * @returns {GamerCheckPVPBattleS2C} GamerCheckPVPBattleS2C instance
     */
    GamerCheckPVPBattleS2C.create = function create(properties) {
        return new GamerCheckPVPBattleS2C(properties);
    };

    /**
     * Encodes the specified GamerCheckPVPBattleS2C message. Does not implicitly {@link GamerCheckPVPBattleS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerCheckPVPBattleS2C
     * @static
     * @param {IGamerCheckPVPBattleS2C} message GamerCheckPVPBattleS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerCheckPVPBattleS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        if (message.matchInfo != null && message.hasOwnProperty("matchInfo"))
            $root.MatchInfo.encode(message.matchInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GamerCheckPVPBattleS2C message, length delimited. Does not implicitly {@link GamerCheckPVPBattleS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerCheckPVPBattleS2C
     * @static
     * @param {IGamerCheckPVPBattleS2C} message GamerCheckPVPBattleS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerCheckPVPBattleS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerCheckPVPBattleS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerCheckPVPBattleS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerCheckPVPBattleS2C} GamerCheckPVPBattleS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerCheckPVPBattleS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerCheckPVPBattleS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            case 2:
                message.matchInfo = $root.MatchInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerCheckPVPBattleS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerCheckPVPBattleS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerCheckPVPBattleS2C} GamerCheckPVPBattleS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerCheckPVPBattleS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerCheckPVPBattleS2C message.
     * @function verify
     * @memberof GamerCheckPVPBattleS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerCheckPVPBattleS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        if (message.matchInfo != null && message.hasOwnProperty("matchInfo")) {
            var error = $root.MatchInfo.verify(message.matchInfo);
            if (error)
                return "matchInfo." + error;
        }
        return null;
    };

    /**
     * Creates a GamerCheckPVPBattleS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerCheckPVPBattleS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerCheckPVPBattleS2C} GamerCheckPVPBattleS2C
     */
    GamerCheckPVPBattleS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerCheckPVPBattleS2C)
            return object;
        var message = new $root.GamerCheckPVPBattleS2C();
        if (object.error != null)
            message.error = object.error | 0;
        if (object.matchInfo != null) {
            if (typeof object.matchInfo !== "object")
                throw TypeError(".GamerCheckPVPBattleS2C.matchInfo: object expected");
            message.matchInfo = $root.MatchInfo.fromObject(object.matchInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a GamerCheckPVPBattleS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerCheckPVPBattleS2C
     * @static
     * @param {GamerCheckPVPBattleS2C} message GamerCheckPVPBattleS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerCheckPVPBattleS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.error = 0;
            object.matchInfo = null;
        }
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        if (message.matchInfo != null && message.hasOwnProperty("matchInfo"))
            object.matchInfo = $root.MatchInfo.toObject(message.matchInfo, options);
        return object;
    };

    /**
     * Converts this GamerCheckPVPBattleS2C to JSON.
     * @function toJSON
     * @memberof GamerCheckPVPBattleS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerCheckPVPBattleS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerCheckPVPBattleS2C;
})();

$root.GamerUploadWXInfoC2S = (function() {

    /**
     * Properties of a GamerUploadWXInfoC2S.
     * @exports IGamerUploadWXInfoC2S
     * @interface IGamerUploadWXInfoC2S
     * @property {number|null} [id] GamerUploadWXInfoC2S id
     * @property {IWXInfo|null} [wxInfo] GamerUploadWXInfoC2S wxInfo
     */

    /**
     * Constructs a new GamerUploadWXInfoC2S.
     * @exports GamerUploadWXInfoC2S
     * @classdesc Represents a GamerUploadWXInfoC2S.
     * @implements IGamerUploadWXInfoC2S
     * @constructor
     * @param {IGamerUploadWXInfoC2S=} [properties] Properties to set
     */
    function GamerUploadWXInfoC2S(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerUploadWXInfoC2S id.
     * @member {number} id
     * @memberof GamerUploadWXInfoC2S
     * @instance
     */
    GamerUploadWXInfoC2S.prototype.id = 0;

    /**
     * GamerUploadWXInfoC2S wxInfo.
     * @member {IWXInfo|null|undefined} wxInfo
     * @memberof GamerUploadWXInfoC2S
     * @instance
     */
    GamerUploadWXInfoC2S.prototype.wxInfo = null;

    /**
     * Creates a new GamerUploadWXInfoC2S instance using the specified properties.
     * @function create
     * @memberof GamerUploadWXInfoC2S
     * @static
     * @param {IGamerUploadWXInfoC2S=} [properties] Properties to set
     * @returns {GamerUploadWXInfoC2S} GamerUploadWXInfoC2S instance
     */
    GamerUploadWXInfoC2S.create = function create(properties) {
        return new GamerUploadWXInfoC2S(properties);
    };

    /**
     * Encodes the specified GamerUploadWXInfoC2S message. Does not implicitly {@link GamerUploadWXInfoC2S.verify|verify} messages.
     * @function encode
     * @memberof GamerUploadWXInfoC2S
     * @static
     * @param {IGamerUploadWXInfoC2S} message GamerUploadWXInfoC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerUploadWXInfoC2S.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.wxInfo != null && message.hasOwnProperty("wxInfo"))
            $root.WXInfo.encode(message.wxInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GamerUploadWXInfoC2S message, length delimited. Does not implicitly {@link GamerUploadWXInfoC2S.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerUploadWXInfoC2S
     * @static
     * @param {IGamerUploadWXInfoC2S} message GamerUploadWXInfoC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerUploadWXInfoC2S.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerUploadWXInfoC2S message from the specified reader or buffer.
     * @function decode
     * @memberof GamerUploadWXInfoC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerUploadWXInfoC2S} GamerUploadWXInfoC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerUploadWXInfoC2S.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerUploadWXInfoC2S();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.wxInfo = $root.WXInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerUploadWXInfoC2S message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerUploadWXInfoC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerUploadWXInfoC2S} GamerUploadWXInfoC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerUploadWXInfoC2S.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerUploadWXInfoC2S message.
     * @function verify
     * @memberof GamerUploadWXInfoC2S
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerUploadWXInfoC2S.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.wxInfo != null && message.hasOwnProperty("wxInfo")) {
            var error = $root.WXInfo.verify(message.wxInfo);
            if (error)
                return "wxInfo." + error;
        }
        return null;
    };

    /**
     * Creates a GamerUploadWXInfoC2S message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerUploadWXInfoC2S
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerUploadWXInfoC2S} GamerUploadWXInfoC2S
     */
    GamerUploadWXInfoC2S.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerUploadWXInfoC2S)
            return object;
        var message = new $root.GamerUploadWXInfoC2S();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.wxInfo != null) {
            if (typeof object.wxInfo !== "object")
                throw TypeError(".GamerUploadWXInfoC2S.wxInfo: object expected");
            message.wxInfo = $root.WXInfo.fromObject(object.wxInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a GamerUploadWXInfoC2S message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerUploadWXInfoC2S
     * @static
     * @param {GamerUploadWXInfoC2S} message GamerUploadWXInfoC2S
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerUploadWXInfoC2S.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.wxInfo = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.wxInfo != null && message.hasOwnProperty("wxInfo"))
            object.wxInfo = $root.WXInfo.toObject(message.wxInfo, options);
        return object;
    };

    /**
     * Converts this GamerUploadWXInfoC2S to JSON.
     * @function toJSON
     * @memberof GamerUploadWXInfoC2S
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerUploadWXInfoC2S.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerUploadWXInfoC2S;
})();

$root.GamerUploadWXInfoS2C = (function() {

    /**
     * Properties of a GamerUploadWXInfoS2C.
     * @exports IGamerUploadWXInfoS2C
     * @interface IGamerUploadWXInfoS2C
     * @property {number|null} [error] GamerUploadWXInfoS2C error
     */

    /**
     * Constructs a new GamerUploadWXInfoS2C.
     * @exports GamerUploadWXInfoS2C
     * @classdesc Represents a GamerUploadWXInfoS2C.
     * @implements IGamerUploadWXInfoS2C
     * @constructor
     * @param {IGamerUploadWXInfoS2C=} [properties] Properties to set
     */
    function GamerUploadWXInfoS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerUploadWXInfoS2C error.
     * @member {number} error
     * @memberof GamerUploadWXInfoS2C
     * @instance
     */
    GamerUploadWXInfoS2C.prototype.error = 0;

    /**
     * Creates a new GamerUploadWXInfoS2C instance using the specified properties.
     * @function create
     * @memberof GamerUploadWXInfoS2C
     * @static
     * @param {IGamerUploadWXInfoS2C=} [properties] Properties to set
     * @returns {GamerUploadWXInfoS2C} GamerUploadWXInfoS2C instance
     */
    GamerUploadWXInfoS2C.create = function create(properties) {
        return new GamerUploadWXInfoS2C(properties);
    };

    /**
     * Encodes the specified GamerUploadWXInfoS2C message. Does not implicitly {@link GamerUploadWXInfoS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerUploadWXInfoS2C
     * @static
     * @param {IGamerUploadWXInfoS2C} message GamerUploadWXInfoS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerUploadWXInfoS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        return writer;
    };

    /**
     * Encodes the specified GamerUploadWXInfoS2C message, length delimited. Does not implicitly {@link GamerUploadWXInfoS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerUploadWXInfoS2C
     * @static
     * @param {IGamerUploadWXInfoS2C} message GamerUploadWXInfoS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerUploadWXInfoS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerUploadWXInfoS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerUploadWXInfoS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerUploadWXInfoS2C} GamerUploadWXInfoS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerUploadWXInfoS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerUploadWXInfoS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerUploadWXInfoS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerUploadWXInfoS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerUploadWXInfoS2C} GamerUploadWXInfoS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerUploadWXInfoS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerUploadWXInfoS2C message.
     * @function verify
     * @memberof GamerUploadWXInfoS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerUploadWXInfoS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        return null;
    };

    /**
     * Creates a GamerUploadWXInfoS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerUploadWXInfoS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerUploadWXInfoS2C} GamerUploadWXInfoS2C
     */
    GamerUploadWXInfoS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerUploadWXInfoS2C)
            return object;
        var message = new $root.GamerUploadWXInfoS2C();
        if (object.error != null)
            message.error = object.error | 0;
        return message;
    };

    /**
     * Creates a plain object from a GamerUploadWXInfoS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerUploadWXInfoS2C
     * @static
     * @param {GamerUploadWXInfoS2C} message GamerUploadWXInfoS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerUploadWXInfoS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.error = 0;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        return object;
    };

    /**
     * Converts this GamerUploadWXInfoS2C to JSON.
     * @function toJSON
     * @memberof GamerUploadWXInfoS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerUploadWXInfoS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerUploadWXInfoS2C;
})();

$root.GamerNewRoomC2S = (function() {

    /**
     * Properties of a GamerNewRoomC2S.
     * @exports IGamerNewRoomC2S
     * @interface IGamerNewRoomC2S
     * @property {number|null} [id] GamerNewRoomC2S id
     * @property {number|null} [type] GamerNewRoomC2S type
     */

    /**
     * Constructs a new GamerNewRoomC2S.
     * @exports GamerNewRoomC2S
     * @classdesc Represents a GamerNewRoomC2S.
     * @implements IGamerNewRoomC2S
     * @constructor
     * @param {IGamerNewRoomC2S=} [properties] Properties to set
     */
    function GamerNewRoomC2S(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerNewRoomC2S id.
     * @member {number} id
     * @memberof GamerNewRoomC2S
     * @instance
     */
    GamerNewRoomC2S.prototype.id = 0;

    /**
     * GamerNewRoomC2S type.
     * @member {number} type
     * @memberof GamerNewRoomC2S
     * @instance
     */
    GamerNewRoomC2S.prototype.type = 0;

    /**
     * Creates a new GamerNewRoomC2S instance using the specified properties.
     * @function create
     * @memberof GamerNewRoomC2S
     * @static
     * @param {IGamerNewRoomC2S=} [properties] Properties to set
     * @returns {GamerNewRoomC2S} GamerNewRoomC2S instance
     */
    GamerNewRoomC2S.create = function create(properties) {
        return new GamerNewRoomC2S(properties);
    };

    /**
     * Encodes the specified GamerNewRoomC2S message. Does not implicitly {@link GamerNewRoomC2S.verify|verify} messages.
     * @function encode
     * @memberof GamerNewRoomC2S
     * @static
     * @param {IGamerNewRoomC2S} message GamerNewRoomC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNewRoomC2S.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        return writer;
    };

    /**
     * Encodes the specified GamerNewRoomC2S message, length delimited. Does not implicitly {@link GamerNewRoomC2S.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerNewRoomC2S
     * @static
     * @param {IGamerNewRoomC2S} message GamerNewRoomC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNewRoomC2S.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerNewRoomC2S message from the specified reader or buffer.
     * @function decode
     * @memberof GamerNewRoomC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerNewRoomC2S} GamerNewRoomC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNewRoomC2S.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerNewRoomC2S();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.type = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerNewRoomC2S message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerNewRoomC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerNewRoomC2S} GamerNewRoomC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNewRoomC2S.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerNewRoomC2S message.
     * @function verify
     * @memberof GamerNewRoomC2S
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerNewRoomC2S.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        return null;
    };

    /**
     * Creates a GamerNewRoomC2S message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerNewRoomC2S
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerNewRoomC2S} GamerNewRoomC2S
     */
    GamerNewRoomC2S.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerNewRoomC2S)
            return object;
        var message = new $root.GamerNewRoomC2S();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.type != null)
            message.type = object.type | 0;
        return message;
    };

    /**
     * Creates a plain object from a GamerNewRoomC2S message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerNewRoomC2S
     * @static
     * @param {GamerNewRoomC2S} message GamerNewRoomC2S
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerNewRoomC2S.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.type = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        return object;
    };

    /**
     * Converts this GamerNewRoomC2S to JSON.
     * @function toJSON
     * @memberof GamerNewRoomC2S
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerNewRoomC2S.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerNewRoomC2S;
})();

$root.GamerNewRoomS2C = (function() {

    /**
     * Properties of a GamerNewRoomS2C.
     * @exports IGamerNewRoomS2C
     * @interface IGamerNewRoomS2C
     * @property {number|null} [error] GamerNewRoomS2C error
     * @property {IRoomInfo|null} [room] GamerNewRoomS2C room
     */

    /**
     * Constructs a new GamerNewRoomS2C.
     * @exports GamerNewRoomS2C
     * @classdesc Represents a GamerNewRoomS2C.
     * @implements IGamerNewRoomS2C
     * @constructor
     * @param {IGamerNewRoomS2C=} [properties] Properties to set
     */
    function GamerNewRoomS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerNewRoomS2C error.
     * @member {number} error
     * @memberof GamerNewRoomS2C
     * @instance
     */
    GamerNewRoomS2C.prototype.error = 0;

    /**
     * GamerNewRoomS2C room.
     * @member {IRoomInfo|null|undefined} room
     * @memberof GamerNewRoomS2C
     * @instance
     */
    GamerNewRoomS2C.prototype.room = null;

    /**
     * Creates a new GamerNewRoomS2C instance using the specified properties.
     * @function create
     * @memberof GamerNewRoomS2C
     * @static
     * @param {IGamerNewRoomS2C=} [properties] Properties to set
     * @returns {GamerNewRoomS2C} GamerNewRoomS2C instance
     */
    GamerNewRoomS2C.create = function create(properties) {
        return new GamerNewRoomS2C(properties);
    };

    /**
     * Encodes the specified GamerNewRoomS2C message. Does not implicitly {@link GamerNewRoomS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerNewRoomS2C
     * @static
     * @param {IGamerNewRoomS2C} message GamerNewRoomS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNewRoomS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        if (message.room != null && message.hasOwnProperty("room"))
            $root.RoomInfo.encode(message.room, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GamerNewRoomS2C message, length delimited. Does not implicitly {@link GamerNewRoomS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerNewRoomS2C
     * @static
     * @param {IGamerNewRoomS2C} message GamerNewRoomS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNewRoomS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerNewRoomS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerNewRoomS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerNewRoomS2C} GamerNewRoomS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNewRoomS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerNewRoomS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            case 2:
                message.room = $root.RoomInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerNewRoomS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerNewRoomS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerNewRoomS2C} GamerNewRoomS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNewRoomS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerNewRoomS2C message.
     * @function verify
     * @memberof GamerNewRoomS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerNewRoomS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        if (message.room != null && message.hasOwnProperty("room")) {
            var error = $root.RoomInfo.verify(message.room);
            if (error)
                return "room." + error;
        }
        return null;
    };

    /**
     * Creates a GamerNewRoomS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerNewRoomS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerNewRoomS2C} GamerNewRoomS2C
     */
    GamerNewRoomS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerNewRoomS2C)
            return object;
        var message = new $root.GamerNewRoomS2C();
        if (object.error != null)
            message.error = object.error | 0;
        if (object.room != null) {
            if (typeof object.room !== "object")
                throw TypeError(".GamerNewRoomS2C.room: object expected");
            message.room = $root.RoomInfo.fromObject(object.room);
        }
        return message;
    };

    /**
     * Creates a plain object from a GamerNewRoomS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerNewRoomS2C
     * @static
     * @param {GamerNewRoomS2C} message GamerNewRoomS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerNewRoomS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.error = 0;
            object.room = null;
        }
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        if (message.room != null && message.hasOwnProperty("room"))
            object.room = $root.RoomInfo.toObject(message.room, options);
        return object;
    };

    /**
     * Converts this GamerNewRoomS2C to JSON.
     * @function toJSON
     * @memberof GamerNewRoomS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerNewRoomS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerNewRoomS2C;
})();

$root.GamerAddRoomC2S = (function() {

    /**
     * Properties of a GamerAddRoomC2S.
     * @exports IGamerAddRoomC2S
     * @interface IGamerAddRoomC2S
     * @property {number|null} [id] GamerAddRoomC2S id
     * @property {number|null} [roomId] GamerAddRoomC2S roomId
     */

    /**
     * Constructs a new GamerAddRoomC2S.
     * @exports GamerAddRoomC2S
     * @classdesc Represents a GamerAddRoomC2S.
     * @implements IGamerAddRoomC2S
     * @constructor
     * @param {IGamerAddRoomC2S=} [properties] Properties to set
     */
    function GamerAddRoomC2S(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerAddRoomC2S id.
     * @member {number} id
     * @memberof GamerAddRoomC2S
     * @instance
     */
    GamerAddRoomC2S.prototype.id = 0;

    /**
     * GamerAddRoomC2S roomId.
     * @member {number} roomId
     * @memberof GamerAddRoomC2S
     * @instance
     */
    GamerAddRoomC2S.prototype.roomId = 0;

    /**
     * Creates a new GamerAddRoomC2S instance using the specified properties.
     * @function create
     * @memberof GamerAddRoomC2S
     * @static
     * @param {IGamerAddRoomC2S=} [properties] Properties to set
     * @returns {GamerAddRoomC2S} GamerAddRoomC2S instance
     */
    GamerAddRoomC2S.create = function create(properties) {
        return new GamerAddRoomC2S(properties);
    };

    /**
     * Encodes the specified GamerAddRoomC2S message. Does not implicitly {@link GamerAddRoomC2S.verify|verify} messages.
     * @function encode
     * @memberof GamerAddRoomC2S
     * @static
     * @param {IGamerAddRoomC2S} message GamerAddRoomC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerAddRoomC2S.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roomId);
        return writer;
    };

    /**
     * Encodes the specified GamerAddRoomC2S message, length delimited. Does not implicitly {@link GamerAddRoomC2S.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerAddRoomC2S
     * @static
     * @param {IGamerAddRoomC2S} message GamerAddRoomC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerAddRoomC2S.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerAddRoomC2S message from the specified reader or buffer.
     * @function decode
     * @memberof GamerAddRoomC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerAddRoomC2S} GamerAddRoomC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerAddRoomC2S.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerAddRoomC2S();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.roomId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerAddRoomC2S message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerAddRoomC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerAddRoomC2S} GamerAddRoomC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerAddRoomC2S.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerAddRoomC2S message.
     * @function verify
     * @memberof GamerAddRoomC2S
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerAddRoomC2S.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId))
                return "roomId: integer expected";
        return null;
    };

    /**
     * Creates a GamerAddRoomC2S message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerAddRoomC2S
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerAddRoomC2S} GamerAddRoomC2S
     */
    GamerAddRoomC2S.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerAddRoomC2S)
            return object;
        var message = new $root.GamerAddRoomC2S();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.roomId != null)
            message.roomId = object.roomId | 0;
        return message;
    };

    /**
     * Creates a plain object from a GamerAddRoomC2S message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerAddRoomC2S
     * @static
     * @param {GamerAddRoomC2S} message GamerAddRoomC2S
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerAddRoomC2S.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.roomId = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            object.roomId = message.roomId;
        return object;
    };

    /**
     * Converts this GamerAddRoomC2S to JSON.
     * @function toJSON
     * @memberof GamerAddRoomC2S
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerAddRoomC2S.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerAddRoomC2S;
})();

$root.GamerAddRoomS2C = (function() {

    /**
     * Properties of a GamerAddRoomS2C.
     * @exports IGamerAddRoomS2C
     * @interface IGamerAddRoomS2C
     * @property {number|null} [error] GamerAddRoomS2C error
     */

    /**
     * Constructs a new GamerAddRoomS2C.
     * @exports GamerAddRoomS2C
     * @classdesc Represents a GamerAddRoomS2C.
     * @implements IGamerAddRoomS2C
     * @constructor
     * @param {IGamerAddRoomS2C=} [properties] Properties to set
     */
    function GamerAddRoomS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerAddRoomS2C error.
     * @member {number} error
     * @memberof GamerAddRoomS2C
     * @instance
     */
    GamerAddRoomS2C.prototype.error = 0;

    /**
     * Creates a new GamerAddRoomS2C instance using the specified properties.
     * @function create
     * @memberof GamerAddRoomS2C
     * @static
     * @param {IGamerAddRoomS2C=} [properties] Properties to set
     * @returns {GamerAddRoomS2C} GamerAddRoomS2C instance
     */
    GamerAddRoomS2C.create = function create(properties) {
        return new GamerAddRoomS2C(properties);
    };

    /**
     * Encodes the specified GamerAddRoomS2C message. Does not implicitly {@link GamerAddRoomS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerAddRoomS2C
     * @static
     * @param {IGamerAddRoomS2C} message GamerAddRoomS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerAddRoomS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        return writer;
    };

    /**
     * Encodes the specified GamerAddRoomS2C message, length delimited. Does not implicitly {@link GamerAddRoomS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerAddRoomS2C
     * @static
     * @param {IGamerAddRoomS2C} message GamerAddRoomS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerAddRoomS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerAddRoomS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerAddRoomS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerAddRoomS2C} GamerAddRoomS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerAddRoomS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerAddRoomS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerAddRoomS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerAddRoomS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerAddRoomS2C} GamerAddRoomS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerAddRoomS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerAddRoomS2C message.
     * @function verify
     * @memberof GamerAddRoomS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerAddRoomS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        return null;
    };

    /**
     * Creates a GamerAddRoomS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerAddRoomS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerAddRoomS2C} GamerAddRoomS2C
     */
    GamerAddRoomS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerAddRoomS2C)
            return object;
        var message = new $root.GamerAddRoomS2C();
        if (object.error != null)
            message.error = object.error | 0;
        return message;
    };

    /**
     * Creates a plain object from a GamerAddRoomS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerAddRoomS2C
     * @static
     * @param {GamerAddRoomS2C} message GamerAddRoomS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerAddRoomS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.error = 0;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        return object;
    };

    /**
     * Converts this GamerAddRoomS2C to JSON.
     * @function toJSON
     * @memberof GamerAddRoomS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerAddRoomS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerAddRoomS2C;
})();

$root.GamerLeaveRoomC2S = (function() {

    /**
     * Properties of a GamerLeaveRoomC2S.
     * @exports IGamerLeaveRoomC2S
     * @interface IGamerLeaveRoomC2S
     * @property {number|null} [id] GamerLeaveRoomC2S id
     * @property {number|null} [roomId] GamerLeaveRoomC2S roomId
     */

    /**
     * Constructs a new GamerLeaveRoomC2S.
     * @exports GamerLeaveRoomC2S
     * @classdesc Represents a GamerLeaveRoomC2S.
     * @implements IGamerLeaveRoomC2S
     * @constructor
     * @param {IGamerLeaveRoomC2S=} [properties] Properties to set
     */
    function GamerLeaveRoomC2S(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerLeaveRoomC2S id.
     * @member {number} id
     * @memberof GamerLeaveRoomC2S
     * @instance
     */
    GamerLeaveRoomC2S.prototype.id = 0;

    /**
     * GamerLeaveRoomC2S roomId.
     * @member {number} roomId
     * @memberof GamerLeaveRoomC2S
     * @instance
     */
    GamerLeaveRoomC2S.prototype.roomId = 0;

    /**
     * Creates a new GamerLeaveRoomC2S instance using the specified properties.
     * @function create
     * @memberof GamerLeaveRoomC2S
     * @static
     * @param {IGamerLeaveRoomC2S=} [properties] Properties to set
     * @returns {GamerLeaveRoomC2S} GamerLeaveRoomC2S instance
     */
    GamerLeaveRoomC2S.create = function create(properties) {
        return new GamerLeaveRoomC2S(properties);
    };

    /**
     * Encodes the specified GamerLeaveRoomC2S message. Does not implicitly {@link GamerLeaveRoomC2S.verify|verify} messages.
     * @function encode
     * @memberof GamerLeaveRoomC2S
     * @static
     * @param {IGamerLeaveRoomC2S} message GamerLeaveRoomC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerLeaveRoomC2S.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roomId);
        return writer;
    };

    /**
     * Encodes the specified GamerLeaveRoomC2S message, length delimited. Does not implicitly {@link GamerLeaveRoomC2S.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerLeaveRoomC2S
     * @static
     * @param {IGamerLeaveRoomC2S} message GamerLeaveRoomC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerLeaveRoomC2S.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerLeaveRoomC2S message from the specified reader or buffer.
     * @function decode
     * @memberof GamerLeaveRoomC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerLeaveRoomC2S} GamerLeaveRoomC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerLeaveRoomC2S.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerLeaveRoomC2S();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.roomId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerLeaveRoomC2S message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerLeaveRoomC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerLeaveRoomC2S} GamerLeaveRoomC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerLeaveRoomC2S.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerLeaveRoomC2S message.
     * @function verify
     * @memberof GamerLeaveRoomC2S
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerLeaveRoomC2S.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId))
                return "roomId: integer expected";
        return null;
    };

    /**
     * Creates a GamerLeaveRoomC2S message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerLeaveRoomC2S
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerLeaveRoomC2S} GamerLeaveRoomC2S
     */
    GamerLeaveRoomC2S.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerLeaveRoomC2S)
            return object;
        var message = new $root.GamerLeaveRoomC2S();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.roomId != null)
            message.roomId = object.roomId | 0;
        return message;
    };

    /**
     * Creates a plain object from a GamerLeaveRoomC2S message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerLeaveRoomC2S
     * @static
     * @param {GamerLeaveRoomC2S} message GamerLeaveRoomC2S
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerLeaveRoomC2S.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.roomId = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            object.roomId = message.roomId;
        return object;
    };

    /**
     * Converts this GamerLeaveRoomC2S to JSON.
     * @function toJSON
     * @memberof GamerLeaveRoomC2S
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerLeaveRoomC2S.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerLeaveRoomC2S;
})();

$root.GamerLeaveRoomS2C = (function() {

    /**
     * Properties of a GamerLeaveRoomS2C.
     * @exports IGamerLeaveRoomS2C
     * @interface IGamerLeaveRoomS2C
     * @property {number|null} [error] GamerLeaveRoomS2C error
     */

    /**
     * Constructs a new GamerLeaveRoomS2C.
     * @exports GamerLeaveRoomS2C
     * @classdesc Represents a GamerLeaveRoomS2C.
     * @implements IGamerLeaveRoomS2C
     * @constructor
     * @param {IGamerLeaveRoomS2C=} [properties] Properties to set
     */
    function GamerLeaveRoomS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerLeaveRoomS2C error.
     * @member {number} error
     * @memberof GamerLeaveRoomS2C
     * @instance
     */
    GamerLeaveRoomS2C.prototype.error = 0;

    /**
     * Creates a new GamerLeaveRoomS2C instance using the specified properties.
     * @function create
     * @memberof GamerLeaveRoomS2C
     * @static
     * @param {IGamerLeaveRoomS2C=} [properties] Properties to set
     * @returns {GamerLeaveRoomS2C} GamerLeaveRoomS2C instance
     */
    GamerLeaveRoomS2C.create = function create(properties) {
        return new GamerLeaveRoomS2C(properties);
    };

    /**
     * Encodes the specified GamerLeaveRoomS2C message. Does not implicitly {@link GamerLeaveRoomS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerLeaveRoomS2C
     * @static
     * @param {IGamerLeaveRoomS2C} message GamerLeaveRoomS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerLeaveRoomS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        return writer;
    };

    /**
     * Encodes the specified GamerLeaveRoomS2C message, length delimited. Does not implicitly {@link GamerLeaveRoomS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerLeaveRoomS2C
     * @static
     * @param {IGamerLeaveRoomS2C} message GamerLeaveRoomS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerLeaveRoomS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerLeaveRoomS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerLeaveRoomS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerLeaveRoomS2C} GamerLeaveRoomS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerLeaveRoomS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerLeaveRoomS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerLeaveRoomS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerLeaveRoomS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerLeaveRoomS2C} GamerLeaveRoomS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerLeaveRoomS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerLeaveRoomS2C message.
     * @function verify
     * @memberof GamerLeaveRoomS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerLeaveRoomS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        return null;
    };

    /**
     * Creates a GamerLeaveRoomS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerLeaveRoomS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerLeaveRoomS2C} GamerLeaveRoomS2C
     */
    GamerLeaveRoomS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerLeaveRoomS2C)
            return object;
        var message = new $root.GamerLeaveRoomS2C();
        if (object.error != null)
            message.error = object.error | 0;
        return message;
    };

    /**
     * Creates a plain object from a GamerLeaveRoomS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerLeaveRoomS2C
     * @static
     * @param {GamerLeaveRoomS2C} message GamerLeaveRoomS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerLeaveRoomS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.error = 0;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        return object;
    };

    /**
     * Converts this GamerLeaveRoomS2C to JSON.
     * @function toJSON
     * @memberof GamerLeaveRoomS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerLeaveRoomS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerLeaveRoomS2C;
})();

$root.GamerNotifyRoomInfoChangeS2C = (function() {

    /**
     * Properties of a GamerNotifyRoomInfoChangeS2C.
     * @exports IGamerNotifyRoomInfoChangeS2C
     * @interface IGamerNotifyRoomInfoChangeS2C
     * @property {number|null} [error] GamerNotifyRoomInfoChangeS2C error
     * @property {IRoomInfo|null} [room] GamerNotifyRoomInfoChangeS2C room
     * @property {boolean|null} [cancel] GamerNotifyRoomInfoChangeS2C cancel
     */

    /**
     * Constructs a new GamerNotifyRoomInfoChangeS2C.
     * @exports GamerNotifyRoomInfoChangeS2C
     * @classdesc Represents a GamerNotifyRoomInfoChangeS2C.
     * @implements IGamerNotifyRoomInfoChangeS2C
     * @constructor
     * @param {IGamerNotifyRoomInfoChangeS2C=} [properties] Properties to set
     */
    function GamerNotifyRoomInfoChangeS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerNotifyRoomInfoChangeS2C error.
     * @member {number} error
     * @memberof GamerNotifyRoomInfoChangeS2C
     * @instance
     */
    GamerNotifyRoomInfoChangeS2C.prototype.error = 0;

    /**
     * GamerNotifyRoomInfoChangeS2C room.
     * @member {IRoomInfo|null|undefined} room
     * @memberof GamerNotifyRoomInfoChangeS2C
     * @instance
     */
    GamerNotifyRoomInfoChangeS2C.prototype.room = null;

    /**
     * GamerNotifyRoomInfoChangeS2C cancel.
     * @member {boolean} cancel
     * @memberof GamerNotifyRoomInfoChangeS2C
     * @instance
     */
    GamerNotifyRoomInfoChangeS2C.prototype.cancel = false;

    /**
     * Creates a new GamerNotifyRoomInfoChangeS2C instance using the specified properties.
     * @function create
     * @memberof GamerNotifyRoomInfoChangeS2C
     * @static
     * @param {IGamerNotifyRoomInfoChangeS2C=} [properties] Properties to set
     * @returns {GamerNotifyRoomInfoChangeS2C} GamerNotifyRoomInfoChangeS2C instance
     */
    GamerNotifyRoomInfoChangeS2C.create = function create(properties) {
        return new GamerNotifyRoomInfoChangeS2C(properties);
    };

    /**
     * Encodes the specified GamerNotifyRoomInfoChangeS2C message. Does not implicitly {@link GamerNotifyRoomInfoChangeS2C.verify|verify} messages.
     * @function encode
     * @memberof GamerNotifyRoomInfoChangeS2C
     * @static
     * @param {IGamerNotifyRoomInfoChangeS2C} message GamerNotifyRoomInfoChangeS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNotifyRoomInfoChangeS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        if (message.room != null && message.hasOwnProperty("room"))
            $root.RoomInfo.encode(message.room, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.cancel != null && message.hasOwnProperty("cancel"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.cancel);
        return writer;
    };

    /**
     * Encodes the specified GamerNotifyRoomInfoChangeS2C message, length delimited. Does not implicitly {@link GamerNotifyRoomInfoChangeS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerNotifyRoomInfoChangeS2C
     * @static
     * @param {IGamerNotifyRoomInfoChangeS2C} message GamerNotifyRoomInfoChangeS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerNotifyRoomInfoChangeS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerNotifyRoomInfoChangeS2C message from the specified reader or buffer.
     * @function decode
     * @memberof GamerNotifyRoomInfoChangeS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerNotifyRoomInfoChangeS2C} GamerNotifyRoomInfoChangeS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNotifyRoomInfoChangeS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerNotifyRoomInfoChangeS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            case 2:
                message.room = $root.RoomInfo.decode(reader, reader.uint32());
                break;
            case 3:
                message.cancel = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerNotifyRoomInfoChangeS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerNotifyRoomInfoChangeS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerNotifyRoomInfoChangeS2C} GamerNotifyRoomInfoChangeS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerNotifyRoomInfoChangeS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerNotifyRoomInfoChangeS2C message.
     * @function verify
     * @memberof GamerNotifyRoomInfoChangeS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerNotifyRoomInfoChangeS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        if (message.room != null && message.hasOwnProperty("room")) {
            var error = $root.RoomInfo.verify(message.room);
            if (error)
                return "room." + error;
        }
        if (message.cancel != null && message.hasOwnProperty("cancel"))
            if (typeof message.cancel !== "boolean")
                return "cancel: boolean expected";
        return null;
    };

    /**
     * Creates a GamerNotifyRoomInfoChangeS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerNotifyRoomInfoChangeS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerNotifyRoomInfoChangeS2C} GamerNotifyRoomInfoChangeS2C
     */
    GamerNotifyRoomInfoChangeS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerNotifyRoomInfoChangeS2C)
            return object;
        var message = new $root.GamerNotifyRoomInfoChangeS2C();
        if (object.error != null)
            message.error = object.error | 0;
        if (object.room != null) {
            if (typeof object.room !== "object")
                throw TypeError(".GamerNotifyRoomInfoChangeS2C.room: object expected");
            message.room = $root.RoomInfo.fromObject(object.room);
        }
        if (object.cancel != null)
            message.cancel = Boolean(object.cancel);
        return message;
    };

    /**
     * Creates a plain object from a GamerNotifyRoomInfoChangeS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerNotifyRoomInfoChangeS2C
     * @static
     * @param {GamerNotifyRoomInfoChangeS2C} message GamerNotifyRoomInfoChangeS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerNotifyRoomInfoChangeS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.error = 0;
            object.room = null;
            object.cancel = false;
        }
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        if (message.room != null && message.hasOwnProperty("room"))
            object.room = $root.RoomInfo.toObject(message.room, options);
        if (message.cancel != null && message.hasOwnProperty("cancel"))
            object.cancel = message.cancel;
        return object;
    };

    /**
     * Converts this GamerNotifyRoomInfoChangeS2C to JSON.
     * @function toJSON
     * @memberof GamerNotifyRoomInfoChangeS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerNotifyRoomInfoChangeS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerNotifyRoomInfoChangeS2C;
})();

/**
 * GamerStatus enum.
 * @exports GamerStatus
 * @enum {string}
 * @property {number} Offline=0 Offline value
 * @property {number} Online=1 Online value
 * @property {number} Teaming=2 Teaming value
 * @property {number} Matching=3 Matching value
 * @property {number} Fighting=4 Fighting value
 */
$root.GamerStatus = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Offline"] = 0;
    values[valuesById[1] = "Online"] = 1;
    values[valuesById[2] = "Teaming"] = 2;
    values[valuesById[3] = "Matching"] = 3;
    values[valuesById[4] = "Fighting"] = 4;
    return values;
})();

/**
 * ChatChannel enum.
 * @exports ChatChannel
 * @enum {string}
 * @property {number} GamerChat=0 GamerChat value
 * @property {number} WorldChat=1 WorldChat value
 */
$root.ChatChannel = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "GamerChat"] = 0;
    values[valuesById[1] = "WorldChat"] = 1;
    return values;
})();

/**
 * MailType enum.
 * @exports MailType
 * @enum {string}
 * @property {number} ActivityMail=0 ActivityMail value
 * @property {number} SysMail=1 SysMail value
 * @property {number} AnnouncementMail=2 AnnouncementMail value
 * @property {number} GamerMail=3 GamerMail value
 */
$root.MailType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "ActivityMail"] = 0;
    values[valuesById[1] = "SysMail"] = 1;
    values[valuesById[2] = "AnnouncementMail"] = 2;
    values[valuesById[3] = "GamerMail"] = 3;
    return values;
})();

/**
 * MailState enum.
 * @exports MailState
 * @enum {string}
 * @property {number} MailUnRead=0 MailUnRead value
 * @property {number} MailRead=1 MailRead value
 * @property {number} MailReceived=2 MailReceived value
 */
$root.MailState = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "MailUnRead"] = 0;
    values[valuesById[1] = "MailRead"] = 1;
    values[valuesById[2] = "MailReceived"] = 2;
    return values;
})();

$root.ServerTime = (function() {

    /**
     * Properties of a ServerTime.
     * @exports IServerTime
     * @interface IServerTime
     * @property {number|Long|null} [timestamp] ServerTime timestamp
     * @property {number|null} [year] ServerTime year
     * @property {number|null} [month] ServerTime month
     * @property {number|null} [day] ServerTime day
     * @property {number|null} [hour] ServerTime hour
     * @property {number|null} [minute] ServerTime minute
     * @property {number|null} [second] ServerTime second
     * @property {number|null} [timezone] ServerTime timezone
     */

    /**
     * Constructs a new ServerTime.
     * @exports ServerTime
     * @classdesc Represents a ServerTime.
     * @implements IServerTime
     * @constructor
     * @param {IServerTime=} [properties] Properties to set
     */
    function ServerTime(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerTime timestamp.
     * @member {number|Long} timestamp
     * @memberof ServerTime
     * @instance
     */
    ServerTime.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ServerTime year.
     * @member {number} year
     * @memberof ServerTime
     * @instance
     */
    ServerTime.prototype.year = 0;

    /**
     * ServerTime month.
     * @member {number} month
     * @memberof ServerTime
     * @instance
     */
    ServerTime.prototype.month = 0;

    /**
     * ServerTime day.
     * @member {number} day
     * @memberof ServerTime
     * @instance
     */
    ServerTime.prototype.day = 0;

    /**
     * ServerTime hour.
     * @member {number} hour
     * @memberof ServerTime
     * @instance
     */
    ServerTime.prototype.hour = 0;

    /**
     * ServerTime minute.
     * @member {number} minute
     * @memberof ServerTime
     * @instance
     */
    ServerTime.prototype.minute = 0;

    /**
     * ServerTime second.
     * @member {number} second
     * @memberof ServerTime
     * @instance
     */
    ServerTime.prototype.second = 0;

    /**
     * ServerTime timezone.
     * @member {number} timezone
     * @memberof ServerTime
     * @instance
     */
    ServerTime.prototype.timezone = 0;

    /**
     * Creates a new ServerTime instance using the specified properties.
     * @function create
     * @memberof ServerTime
     * @static
     * @param {IServerTime=} [properties] Properties to set
     * @returns {ServerTime} ServerTime instance
     */
    ServerTime.create = function create(properties) {
        return new ServerTime(properties);
    };

    /**
     * Encodes the specified ServerTime message. Does not implicitly {@link ServerTime.verify|verify} messages.
     * @function encode
     * @memberof ServerTime
     * @static
     * @param {IServerTime} message ServerTime message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerTime.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.timestamp);
        if (message.year != null && message.hasOwnProperty("year"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.year);
        if (message.month != null && message.hasOwnProperty("month"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.month);
        if (message.day != null && message.hasOwnProperty("day"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.day);
        if (message.hour != null && message.hasOwnProperty("hour"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.hour);
        if (message.minute != null && message.hasOwnProperty("minute"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.minute);
        if (message.second != null && message.hasOwnProperty("second"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.second);
        if (message.timezone != null && message.hasOwnProperty("timezone"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.timezone);
        return writer;
    };

    /**
     * Encodes the specified ServerTime message, length delimited. Does not implicitly {@link ServerTime.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerTime
     * @static
     * @param {IServerTime} message ServerTime message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerTime.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerTime message from the specified reader or buffer.
     * @function decode
     * @memberof ServerTime
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerTime} ServerTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerTime.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerTime();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.timestamp = reader.int64();
                break;
            case 2:
                message.year = reader.int32();
                break;
            case 3:
                message.month = reader.int32();
                break;
            case 4:
                message.day = reader.int32();
                break;
            case 5:
                message.hour = reader.int32();
                break;
            case 6:
                message.minute = reader.int32();
                break;
            case 7:
                message.second = reader.int32();
                break;
            case 8:
                message.timezone = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerTime message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerTime
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerTime} ServerTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerTime.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerTime message.
     * @function verify
     * @memberof ServerTime
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerTime.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        if (message.year != null && message.hasOwnProperty("year"))
            if (!$util.isInteger(message.year))
                return "year: integer expected";
        if (message.month != null && message.hasOwnProperty("month"))
            if (!$util.isInteger(message.month))
                return "month: integer expected";
        if (message.day != null && message.hasOwnProperty("day"))
            if (!$util.isInteger(message.day))
                return "day: integer expected";
        if (message.hour != null && message.hasOwnProperty("hour"))
            if (!$util.isInteger(message.hour))
                return "hour: integer expected";
        if (message.minute != null && message.hasOwnProperty("minute"))
            if (!$util.isInteger(message.minute))
                return "minute: integer expected";
        if (message.second != null && message.hasOwnProperty("second"))
            if (!$util.isInteger(message.second))
                return "second: integer expected";
        if (message.timezone != null && message.hasOwnProperty("timezone"))
            if (!$util.isInteger(message.timezone))
                return "timezone: integer expected";
        return null;
    };

    /**
     * Creates a ServerTime message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerTime
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerTime} ServerTime
     */
    ServerTime.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerTime)
            return object;
        var message = new $root.ServerTime();
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
        if (object.year != null)
            message.year = object.year | 0;
        if (object.month != null)
            message.month = object.month | 0;
        if (object.day != null)
            message.day = object.day | 0;
        if (object.hour != null)
            message.hour = object.hour | 0;
        if (object.minute != null)
            message.minute = object.minute | 0;
        if (object.second != null)
            message.second = object.second | 0;
        if (object.timezone != null)
            message.timezone = object.timezone | 0;
        return message;
    };

    /**
     * Creates a plain object from a ServerTime message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerTime
     * @static
     * @param {ServerTime} message ServerTime
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerTime.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
            object.year = 0;
            object.month = 0;
            object.day = 0;
            object.hour = 0;
            object.minute = 0;
            object.second = 0;
            object.timezone = 0;
        }
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
        if (message.year != null && message.hasOwnProperty("year"))
            object.year = message.year;
        if (message.month != null && message.hasOwnProperty("month"))
            object.month = message.month;
        if (message.day != null && message.hasOwnProperty("day"))
            object.day = message.day;
        if (message.hour != null && message.hasOwnProperty("hour"))
            object.hour = message.hour;
        if (message.minute != null && message.hasOwnProperty("minute"))
            object.minute = message.minute;
        if (message.second != null && message.hasOwnProperty("second"))
            object.second = message.second;
        if (message.timezone != null && message.hasOwnProperty("timezone"))
            object.timezone = message.timezone;
        return object;
    };

    /**
     * Converts this ServerTime to JSON.
     * @function toJSON
     * @memberof ServerTime
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerTime.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerTime;
})();

$root.GameItem = (function() {

    /**
     * Properties of a GameItem.
     * @exports IGameItem
     * @interface IGameItem
     * @property {number|null} [id] GameItem id
     * @property {number|null} [count] GameItem count
     */

    /**
     * Constructs a new GameItem.
     * @exports GameItem
     * @classdesc Represents a GameItem.
     * @implements IGameItem
     * @constructor
     * @param {IGameItem=} [properties] Properties to set
     */
    function GameItem(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameItem id.
     * @member {number} id
     * @memberof GameItem
     * @instance
     */
    GameItem.prototype.id = 0;

    /**
     * GameItem count.
     * @member {number} count
     * @memberof GameItem
     * @instance
     */
    GameItem.prototype.count = 0;

    /**
     * Creates a new GameItem instance using the specified properties.
     * @function create
     * @memberof GameItem
     * @static
     * @param {IGameItem=} [properties] Properties to set
     * @returns {GameItem} GameItem instance
     */
    GameItem.create = function create(properties) {
        return new GameItem(properties);
    };

    /**
     * Encodes the specified GameItem message. Does not implicitly {@link GameItem.verify|verify} messages.
     * @function encode
     * @memberof GameItem
     * @static
     * @param {IGameItem} message GameItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameItem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.count != null && message.hasOwnProperty("count"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
        return writer;
    };

    /**
     * Encodes the specified GameItem message, length delimited. Does not implicitly {@link GameItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GameItem
     * @static
     * @param {IGameItem} message GameItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameItem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GameItem message from the specified reader or buffer.
     * @function decode
     * @memberof GameItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameItem} GameItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameItem.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.count = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GameItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GameItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GameItem} GameItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameItem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GameItem message.
     * @function verify
     * @memberof GameItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GameItem.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.count != null && message.hasOwnProperty("count"))
            if (!$util.isInteger(message.count))
                return "count: integer expected";
        return null;
    };

    /**
     * Creates a GameItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GameItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GameItem} GameItem
     */
    GameItem.fromObject = function fromObject(object) {
        if (object instanceof $root.GameItem)
            return object;
        var message = new $root.GameItem();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.count != null)
            message.count = object.count | 0;
        return message;
    };

    /**
     * Creates a plain object from a GameItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GameItem
     * @static
     * @param {GameItem} message GameItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GameItem.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.count = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.count != null && message.hasOwnProperty("count"))
            object.count = message.count;
        return object;
    };

    /**
     * Converts this GameItem to JSON.
     * @function toJSON
     * @memberof GameItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GameItem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GameItem;
})();

$root.TimeRecord = (function() {

    /**
     * Properties of a TimeRecord.
     * @exports ITimeRecord
     * @interface ITimeRecord
     * @property {number|Long|null} [lastSign] TimeRecord lastSign
     * @property {number|Long|null} [lastGetPVPResult] TimeRecord lastGetPVPResult
     * @property {number|Long|null} [lastWeekRec] TimeRecord lastWeekRec
     * @property {number|null} [totalTime] TimeRecord totalTime
     */

    /**
     * Constructs a new TimeRecord.
     * @exports TimeRecord
     * @classdesc Represents a TimeRecord.
     * @implements ITimeRecord
     * @constructor
     * @param {ITimeRecord=} [properties] Properties to set
     */
    function TimeRecord(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TimeRecord lastSign.
     * @member {number|Long} lastSign
     * @memberof TimeRecord
     * @instance
     */
    TimeRecord.prototype.lastSign = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * TimeRecord lastGetPVPResult.
     * @member {number|Long} lastGetPVPResult
     * @memberof TimeRecord
     * @instance
     */
    TimeRecord.prototype.lastGetPVPResult = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * TimeRecord lastWeekRec.
     * @member {number|Long} lastWeekRec
     * @memberof TimeRecord
     * @instance
     */
    TimeRecord.prototype.lastWeekRec = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * TimeRecord totalTime.
     * @member {number} totalTime
     * @memberof TimeRecord
     * @instance
     */
    TimeRecord.prototype.totalTime = 0;

    /**
     * Creates a new TimeRecord instance using the specified properties.
     * @function create
     * @memberof TimeRecord
     * @static
     * @param {ITimeRecord=} [properties] Properties to set
     * @returns {TimeRecord} TimeRecord instance
     */
    TimeRecord.create = function create(properties) {
        return new TimeRecord(properties);
    };

    /**
     * Encodes the specified TimeRecord message. Does not implicitly {@link TimeRecord.verify|verify} messages.
     * @function encode
     * @memberof TimeRecord
     * @static
     * @param {ITimeRecord} message TimeRecord message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TimeRecord.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.lastSign != null && message.hasOwnProperty("lastSign"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.lastSign);
        if (message.lastGetPVPResult != null && message.hasOwnProperty("lastGetPVPResult"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.lastGetPVPResult);
        if (message.lastWeekRec != null && message.hasOwnProperty("lastWeekRec"))
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.lastWeekRec);
        if (message.totalTime != null && message.hasOwnProperty("totalTime"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.totalTime);
        return writer;
    };

    /**
     * Encodes the specified TimeRecord message, length delimited. Does not implicitly {@link TimeRecord.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TimeRecord
     * @static
     * @param {ITimeRecord} message TimeRecord message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TimeRecord.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TimeRecord message from the specified reader or buffer.
     * @function decode
     * @memberof TimeRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TimeRecord} TimeRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TimeRecord.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TimeRecord();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 3:
                message.lastSign = reader.int64();
                break;
            case 6:
                message.lastGetPVPResult = reader.int64();
                break;
            case 7:
                message.lastWeekRec = reader.int64();
                break;
            case 8:
                message.totalTime = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TimeRecord message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TimeRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TimeRecord} TimeRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TimeRecord.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TimeRecord message.
     * @function verify
     * @memberof TimeRecord
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TimeRecord.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.lastSign != null && message.hasOwnProperty("lastSign"))
            if (!$util.isInteger(message.lastSign) && !(message.lastSign && $util.isInteger(message.lastSign.low) && $util.isInteger(message.lastSign.high)))
                return "lastSign: integer|Long expected";
        if (message.lastGetPVPResult != null && message.hasOwnProperty("lastGetPVPResult"))
            if (!$util.isInteger(message.lastGetPVPResult) && !(message.lastGetPVPResult && $util.isInteger(message.lastGetPVPResult.low) && $util.isInteger(message.lastGetPVPResult.high)))
                return "lastGetPVPResult: integer|Long expected";
        if (message.lastWeekRec != null && message.hasOwnProperty("lastWeekRec"))
            if (!$util.isInteger(message.lastWeekRec) && !(message.lastWeekRec && $util.isInteger(message.lastWeekRec.low) && $util.isInteger(message.lastWeekRec.high)))
                return "lastWeekRec: integer|Long expected";
        if (message.totalTime != null && message.hasOwnProperty("totalTime"))
            if (!$util.isInteger(message.totalTime))
                return "totalTime: integer expected";
        return null;
    };

    /**
     * Creates a TimeRecord message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TimeRecord
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TimeRecord} TimeRecord
     */
    TimeRecord.fromObject = function fromObject(object) {
        if (object instanceof $root.TimeRecord)
            return object;
        var message = new $root.TimeRecord();
        if (object.lastSign != null)
            if ($util.Long)
                (message.lastSign = $util.Long.fromValue(object.lastSign)).unsigned = false;
            else if (typeof object.lastSign === "string")
                message.lastSign = parseInt(object.lastSign, 10);
            else if (typeof object.lastSign === "number")
                message.lastSign = object.lastSign;
            else if (typeof object.lastSign === "object")
                message.lastSign = new $util.LongBits(object.lastSign.low >>> 0, object.lastSign.high >>> 0).toNumber();
        if (object.lastGetPVPResult != null)
            if ($util.Long)
                (message.lastGetPVPResult = $util.Long.fromValue(object.lastGetPVPResult)).unsigned = false;
            else if (typeof object.lastGetPVPResult === "string")
                message.lastGetPVPResult = parseInt(object.lastGetPVPResult, 10);
            else if (typeof object.lastGetPVPResult === "number")
                message.lastGetPVPResult = object.lastGetPVPResult;
            else if (typeof object.lastGetPVPResult === "object")
                message.lastGetPVPResult = new $util.LongBits(object.lastGetPVPResult.low >>> 0, object.lastGetPVPResult.high >>> 0).toNumber();
        if (object.lastWeekRec != null)
            if ($util.Long)
                (message.lastWeekRec = $util.Long.fromValue(object.lastWeekRec)).unsigned = false;
            else if (typeof object.lastWeekRec === "string")
                message.lastWeekRec = parseInt(object.lastWeekRec, 10);
            else if (typeof object.lastWeekRec === "number")
                message.lastWeekRec = object.lastWeekRec;
            else if (typeof object.lastWeekRec === "object")
                message.lastWeekRec = new $util.LongBits(object.lastWeekRec.low >>> 0, object.lastWeekRec.high >>> 0).toNumber();
        if (object.totalTime != null)
            message.totalTime = object.totalTime | 0;
        return message;
    };

    /**
     * Creates a plain object from a TimeRecord message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TimeRecord
     * @static
     * @param {TimeRecord} message TimeRecord
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TimeRecord.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.lastSign = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.lastSign = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.lastGetPVPResult = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.lastGetPVPResult = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.lastWeekRec = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.lastWeekRec = options.longs === String ? "0" : 0;
            object.totalTime = 0;
        }
        if (message.lastSign != null && message.hasOwnProperty("lastSign"))
            if (typeof message.lastSign === "number")
                object.lastSign = options.longs === String ? String(message.lastSign) : message.lastSign;
            else
                object.lastSign = options.longs === String ? $util.Long.prototype.toString.call(message.lastSign) : options.longs === Number ? new $util.LongBits(message.lastSign.low >>> 0, message.lastSign.high >>> 0).toNumber() : message.lastSign;
        if (message.lastGetPVPResult != null && message.hasOwnProperty("lastGetPVPResult"))
            if (typeof message.lastGetPVPResult === "number")
                object.lastGetPVPResult = options.longs === String ? String(message.lastGetPVPResult) : message.lastGetPVPResult;
            else
                object.lastGetPVPResult = options.longs === String ? $util.Long.prototype.toString.call(message.lastGetPVPResult) : options.longs === Number ? new $util.LongBits(message.lastGetPVPResult.low >>> 0, message.lastGetPVPResult.high >>> 0).toNumber() : message.lastGetPVPResult;
        if (message.lastWeekRec != null && message.hasOwnProperty("lastWeekRec"))
            if (typeof message.lastWeekRec === "number")
                object.lastWeekRec = options.longs === String ? String(message.lastWeekRec) : message.lastWeekRec;
            else
                object.lastWeekRec = options.longs === String ? $util.Long.prototype.toString.call(message.lastWeekRec) : options.longs === Number ? new $util.LongBits(message.lastWeekRec.low >>> 0, message.lastWeekRec.high >>> 0).toNumber() : message.lastWeekRec;
        if (message.totalTime != null && message.hasOwnProperty("totalTime"))
            object.totalTime = message.totalTime;
        return object;
    };

    /**
     * Converts this TimeRecord to JSON.
     * @function toJSON
     * @memberof TimeRecord
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TimeRecord.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TimeRecord;
})();

$root.NumberRecord = (function() {

    /**
     * Properties of a NumberRecord.
     * @exports INumberRecord
     * @interface INumberRecord
     * @property {number|null} [elo] NumberRecord elo
     * @property {number|null} [normWin] NumberRecord normWin
     * @property {number|null} [totalSignIn] NumberRecord totalSignIn
     * @property {number|null} [weekTotalSign] NumberRecord weekTotalSign
     * @property {number|null} [weekGoldGet] NumberRecord weekGoldGet
     * @property {number|null} [weekExpGet] NumberRecord weekExpGet
     */

    /**
     * Constructs a new NumberRecord.
     * @exports NumberRecord
     * @classdesc Represents a NumberRecord.
     * @implements INumberRecord
     * @constructor
     * @param {INumberRecord=} [properties] Properties to set
     */
    function NumberRecord(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NumberRecord elo.
     * @member {number} elo
     * @memberof NumberRecord
     * @instance
     */
    NumberRecord.prototype.elo = 0;

    /**
     * NumberRecord normWin.
     * @member {number} normWin
     * @memberof NumberRecord
     * @instance
     */
    NumberRecord.prototype.normWin = 0;

    /**
     * NumberRecord totalSignIn.
     * @member {number} totalSignIn
     * @memberof NumberRecord
     * @instance
     */
    NumberRecord.prototype.totalSignIn = 0;

    /**
     * NumberRecord weekTotalSign.
     * @member {number} weekTotalSign
     * @memberof NumberRecord
     * @instance
     */
    NumberRecord.prototype.weekTotalSign = 0;

    /**
     * NumberRecord weekGoldGet.
     * @member {number} weekGoldGet
     * @memberof NumberRecord
     * @instance
     */
    NumberRecord.prototype.weekGoldGet = 0;

    /**
     * NumberRecord weekExpGet.
     * @member {number} weekExpGet
     * @memberof NumberRecord
     * @instance
     */
    NumberRecord.prototype.weekExpGet = 0;

    /**
     * Creates a new NumberRecord instance using the specified properties.
     * @function create
     * @memberof NumberRecord
     * @static
     * @param {INumberRecord=} [properties] Properties to set
     * @returns {NumberRecord} NumberRecord instance
     */
    NumberRecord.create = function create(properties) {
        return new NumberRecord(properties);
    };

    /**
     * Encodes the specified NumberRecord message. Does not implicitly {@link NumberRecord.verify|verify} messages.
     * @function encode
     * @memberof NumberRecord
     * @static
     * @param {INumberRecord} message NumberRecord message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NumberRecord.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.elo != null && message.hasOwnProperty("elo"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.elo);
        if (message.normWin != null && message.hasOwnProperty("normWin"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.normWin);
        if (message.totalSignIn != null && message.hasOwnProperty("totalSignIn"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.totalSignIn);
        if (message.weekTotalSign != null && message.hasOwnProperty("weekTotalSign"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.weekTotalSign);
        if (message.weekGoldGet != null && message.hasOwnProperty("weekGoldGet"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.weekGoldGet);
        if (message.weekExpGet != null && message.hasOwnProperty("weekExpGet"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.weekExpGet);
        return writer;
    };

    /**
     * Encodes the specified NumberRecord message, length delimited. Does not implicitly {@link NumberRecord.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NumberRecord
     * @static
     * @param {INumberRecord} message NumberRecord message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NumberRecord.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NumberRecord message from the specified reader or buffer.
     * @function decode
     * @memberof NumberRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NumberRecord} NumberRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NumberRecord.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NumberRecord();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.elo = reader.int32();
                break;
            case 2:
                message.normWin = reader.int32();
                break;
            case 3:
                message.totalSignIn = reader.int32();
                break;
            case 4:
                message.weekTotalSign = reader.int32();
                break;
            case 5:
                message.weekGoldGet = reader.int32();
                break;
            case 6:
                message.weekExpGet = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NumberRecord message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NumberRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NumberRecord} NumberRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NumberRecord.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NumberRecord message.
     * @function verify
     * @memberof NumberRecord
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NumberRecord.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.elo != null && message.hasOwnProperty("elo"))
            if (!$util.isInteger(message.elo))
                return "elo: integer expected";
        if (message.normWin != null && message.hasOwnProperty("normWin"))
            if (!$util.isInteger(message.normWin))
                return "normWin: integer expected";
        if (message.totalSignIn != null && message.hasOwnProperty("totalSignIn"))
            if (!$util.isInteger(message.totalSignIn))
                return "totalSignIn: integer expected";
        if (message.weekTotalSign != null && message.hasOwnProperty("weekTotalSign"))
            if (!$util.isInteger(message.weekTotalSign))
                return "weekTotalSign: integer expected";
        if (message.weekGoldGet != null && message.hasOwnProperty("weekGoldGet"))
            if (!$util.isInteger(message.weekGoldGet))
                return "weekGoldGet: integer expected";
        if (message.weekExpGet != null && message.hasOwnProperty("weekExpGet"))
            if (!$util.isInteger(message.weekExpGet))
                return "weekExpGet: integer expected";
        return null;
    };

    /**
     * Creates a NumberRecord message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NumberRecord
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NumberRecord} NumberRecord
     */
    NumberRecord.fromObject = function fromObject(object) {
        if (object instanceof $root.NumberRecord)
            return object;
        var message = new $root.NumberRecord();
        if (object.elo != null)
            message.elo = object.elo | 0;
        if (object.normWin != null)
            message.normWin = object.normWin | 0;
        if (object.totalSignIn != null)
            message.totalSignIn = object.totalSignIn | 0;
        if (object.weekTotalSign != null)
            message.weekTotalSign = object.weekTotalSign | 0;
        if (object.weekGoldGet != null)
            message.weekGoldGet = object.weekGoldGet | 0;
        if (object.weekExpGet != null)
            message.weekExpGet = object.weekExpGet | 0;
        return message;
    };

    /**
     * Creates a plain object from a NumberRecord message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NumberRecord
     * @static
     * @param {NumberRecord} message NumberRecord
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NumberRecord.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.elo = 0;
            object.normWin = 0;
            object.totalSignIn = 0;
            object.weekTotalSign = 0;
            object.weekGoldGet = 0;
            object.weekExpGet = 0;
        }
        if (message.elo != null && message.hasOwnProperty("elo"))
            object.elo = message.elo;
        if (message.normWin != null && message.hasOwnProperty("normWin"))
            object.normWin = message.normWin;
        if (message.totalSignIn != null && message.hasOwnProperty("totalSignIn"))
            object.totalSignIn = message.totalSignIn;
        if (message.weekTotalSign != null && message.hasOwnProperty("weekTotalSign"))
            object.weekTotalSign = message.weekTotalSign;
        if (message.weekGoldGet != null && message.hasOwnProperty("weekGoldGet"))
            object.weekGoldGet = message.weekGoldGet;
        if (message.weekExpGet != null && message.hasOwnProperty("weekExpGet"))
            object.weekExpGet = message.weekExpGet;
        return object;
    };

    /**
     * Converts this NumberRecord to JSON.
     * @function toJSON
     * @memberof NumberRecord
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NumberRecord.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return NumberRecord;
})();

$root.WXInfo = (function() {

    /**
     * Properties of a WXInfo.
     * @exports IWXInfo
     * @interface IWXInfo
     * @property {string|null} [avatarUrl] WXInfo avatarUrl
     * @property {string|null} [city] WXInfo city
     * @property {number|null} [gender] WXInfo gender
     * @property {string|null} [openId] WXInfo openId
     * @property {string|null} [language] WXInfo language
     * @property {string|null} [nickName] WXInfo nickName
     * @property {string|null} [province] WXInfo province
     * @property {string|null} [unionId] WXInfo unionId
     * @property {string|null} [country] WXInfo country
     * @property {string|null} [sessionId] WXInfo sessionId
     * @property {string|null} [sign] WXInfo sign
     */

    /**
     * Constructs a new WXInfo.
     * @exports WXInfo
     * @classdesc Represents a WXInfo.
     * @implements IWXInfo
     * @constructor
     * @param {IWXInfo=} [properties] Properties to set
     */
    function WXInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WXInfo avatarUrl.
     * @member {string} avatarUrl
     * @memberof WXInfo
     * @instance
     */
    WXInfo.prototype.avatarUrl = "";

    /**
     * WXInfo city.
     * @member {string} city
     * @memberof WXInfo
     * @instance
     */
    WXInfo.prototype.city = "";

    /**
     * WXInfo gender.
     * @member {number} gender
     * @memberof WXInfo
     * @instance
     */
    WXInfo.prototype.gender = 0;

    /**
     * WXInfo openId.
     * @member {string} openId
     * @memberof WXInfo
     * @instance
     */
    WXInfo.prototype.openId = "";

    /**
     * WXInfo language.
     * @member {string} language
     * @memberof WXInfo
     * @instance
     */
    WXInfo.prototype.language = "";

    /**
     * WXInfo nickName.
     * @member {string} nickName
     * @memberof WXInfo
     * @instance
     */
    WXInfo.prototype.nickName = "";

    /**
     * WXInfo province.
     * @member {string} province
     * @memberof WXInfo
     * @instance
     */
    WXInfo.prototype.province = "";

    /**
     * WXInfo unionId.
     * @member {string} unionId
     * @memberof WXInfo
     * @instance
     */
    WXInfo.prototype.unionId = "";

    /**
     * WXInfo country.
     * @member {string} country
     * @memberof WXInfo
     * @instance
     */
    WXInfo.prototype.country = "";

    /**
     * WXInfo sessionId.
     * @member {string} sessionId
     * @memberof WXInfo
     * @instance
     */
    WXInfo.prototype.sessionId = "";

    /**
     * WXInfo sign.
     * @member {string} sign
     * @memberof WXInfo
     * @instance
     */
    WXInfo.prototype.sign = "";

    /**
     * Creates a new WXInfo instance using the specified properties.
     * @function create
     * @memberof WXInfo
     * @static
     * @param {IWXInfo=} [properties] Properties to set
     * @returns {WXInfo} WXInfo instance
     */
    WXInfo.create = function create(properties) {
        return new WXInfo(properties);
    };

    /**
     * Encodes the specified WXInfo message. Does not implicitly {@link WXInfo.verify|verify} messages.
     * @function encode
     * @memberof WXInfo
     * @static
     * @param {IWXInfo} message WXInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WXInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.avatarUrl);
        if (message.city != null && message.hasOwnProperty("city"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.city);
        if (message.gender != null && message.hasOwnProperty("gender"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gender);
        if (message.openId != null && message.hasOwnProperty("openId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.openId);
        if (message.language != null && message.hasOwnProperty("language"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.language);
        if (message.nickName != null && message.hasOwnProperty("nickName"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.nickName);
        if (message.province != null && message.hasOwnProperty("province"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.province);
        if (message.unionId != null && message.hasOwnProperty("unionId"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.unionId);
        if (message.country != null && message.hasOwnProperty("country"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.country);
        if (message.sessionId != null && message.hasOwnProperty("sessionId"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.sessionId);
        if (message.sign != null && message.hasOwnProperty("sign"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.sign);
        return writer;
    };

    /**
     * Encodes the specified WXInfo message, length delimited. Does not implicitly {@link WXInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WXInfo
     * @static
     * @param {IWXInfo} message WXInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WXInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WXInfo message from the specified reader or buffer.
     * @function decode
     * @memberof WXInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WXInfo} WXInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WXInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WXInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.avatarUrl = reader.string();
                break;
            case 2:
                message.city = reader.string();
                break;
            case 3:
                message.gender = reader.int32();
                break;
            case 4:
                message.openId = reader.string();
                break;
            case 5:
                message.language = reader.string();
                break;
            case 6:
                message.nickName = reader.string();
                break;
            case 7:
                message.province = reader.string();
                break;
            case 8:
                message.unionId = reader.string();
                break;
            case 9:
                message.country = reader.string();
                break;
            case 10:
                message.sessionId = reader.string();
                break;
            case 11:
                message.sign = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a WXInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WXInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WXInfo} WXInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WXInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WXInfo message.
     * @function verify
     * @memberof WXInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WXInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
            if (!$util.isString(message.avatarUrl))
                return "avatarUrl: string expected";
        if (message.city != null && message.hasOwnProperty("city"))
            if (!$util.isString(message.city))
                return "city: string expected";
        if (message.gender != null && message.hasOwnProperty("gender"))
            if (!$util.isInteger(message.gender))
                return "gender: integer expected";
        if (message.openId != null && message.hasOwnProperty("openId"))
            if (!$util.isString(message.openId))
                return "openId: string expected";
        if (message.language != null && message.hasOwnProperty("language"))
            if (!$util.isString(message.language))
                return "language: string expected";
        if (message.nickName != null && message.hasOwnProperty("nickName"))
            if (!$util.isString(message.nickName))
                return "nickName: string expected";
        if (message.province != null && message.hasOwnProperty("province"))
            if (!$util.isString(message.province))
                return "province: string expected";
        if (message.unionId != null && message.hasOwnProperty("unionId"))
            if (!$util.isString(message.unionId))
                return "unionId: string expected";
        if (message.country != null && message.hasOwnProperty("country"))
            if (!$util.isString(message.country))
                return "country: string expected";
        if (message.sessionId != null && message.hasOwnProperty("sessionId"))
            if (!$util.isString(message.sessionId))
                return "sessionId: string expected";
        if (message.sign != null && message.hasOwnProperty("sign"))
            if (!$util.isString(message.sign))
                return "sign: string expected";
        return null;
    };

    /**
     * Creates a WXInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WXInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WXInfo} WXInfo
     */
    WXInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.WXInfo)
            return object;
        var message = new $root.WXInfo();
        if (object.avatarUrl != null)
            message.avatarUrl = String(object.avatarUrl);
        if (object.city != null)
            message.city = String(object.city);
        if (object.gender != null)
            message.gender = object.gender | 0;
        if (object.openId != null)
            message.openId = String(object.openId);
        if (object.language != null)
            message.language = String(object.language);
        if (object.nickName != null)
            message.nickName = String(object.nickName);
        if (object.province != null)
            message.province = String(object.province);
        if (object.unionId != null)
            message.unionId = String(object.unionId);
        if (object.country != null)
            message.country = String(object.country);
        if (object.sessionId != null)
            message.sessionId = String(object.sessionId);
        if (object.sign != null)
            message.sign = String(object.sign);
        return message;
    };

    /**
     * Creates a plain object from a WXInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WXInfo
     * @static
     * @param {WXInfo} message WXInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WXInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.avatarUrl = "";
            object.city = "";
            object.gender = 0;
            object.openId = "";
            object.language = "";
            object.nickName = "";
            object.province = "";
            object.unionId = "";
            object.country = "";
            object.sessionId = "";
            object.sign = "";
        }
        if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
            object.avatarUrl = message.avatarUrl;
        if (message.city != null && message.hasOwnProperty("city"))
            object.city = message.city;
        if (message.gender != null && message.hasOwnProperty("gender"))
            object.gender = message.gender;
        if (message.openId != null && message.hasOwnProperty("openId"))
            object.openId = message.openId;
        if (message.language != null && message.hasOwnProperty("language"))
            object.language = message.language;
        if (message.nickName != null && message.hasOwnProperty("nickName"))
            object.nickName = message.nickName;
        if (message.province != null && message.hasOwnProperty("province"))
            object.province = message.province;
        if (message.unionId != null && message.hasOwnProperty("unionId"))
            object.unionId = message.unionId;
        if (message.country != null && message.hasOwnProperty("country"))
            object.country = message.country;
        if (message.sessionId != null && message.hasOwnProperty("sessionId"))
            object.sessionId = message.sessionId;
        if (message.sign != null && message.hasOwnProperty("sign"))
            object.sign = message.sign;
        return object;
    };

    /**
     * Converts this WXInfo to JSON.
     * @function toJSON
     * @memberof WXInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WXInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WXInfo;
})();

$root.GamerMain = (function() {

    /**
     * Properties of a GamerMain.
     * @exports IGamerMain
     * @interface IGamerMain
     * @property {number|null} [id] GamerMain id
     * @property {string|null} [uid] GamerMain uid
     * @property {number|null} [lsid] GamerMain lsid
     * @property {number|null} [psid] GamerMain psid
     * @property {GamerStatus|null} [state] GamerMain state
     * @property {string|null} [name] GamerMain name
     * @property {number|null} [level] GamerMain level
     * @property {string|null} [session] GamerMain session
     * @property {number|Long|null} [create] GamerMain create
     * @property {number|Long|null} [lastLogin] GamerMain lastLogin
     * @property {number|Long|null} [lastLogout] GamerMain lastLogout
     * @property {number|null} [typeId] GamerMain typeId
     * @property {number|null} [icon] GamerMain icon
     * @property {number|null} [exp] GamerMain exp
     * @property {string|null} [pvpSession] GamerMain pvpSession
     * @property {string|null} [avatar] GamerMain avatar
     */

    /**
     * Constructs a new GamerMain.
     * @exports GamerMain
     * @classdesc Represents a GamerMain.
     * @implements IGamerMain
     * @constructor
     * @param {IGamerMain=} [properties] Properties to set
     */
    function GamerMain(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerMain id.
     * @member {number} id
     * @memberof GamerMain
     * @instance
     */
    GamerMain.prototype.id = 0;

    /**
     * GamerMain uid.
     * @member {string} uid
     * @memberof GamerMain
     * @instance
     */
    GamerMain.prototype.uid = "";

    /**
     * GamerMain lsid.
     * @member {number} lsid
     * @memberof GamerMain
     * @instance
     */
    GamerMain.prototype.lsid = 0;

    /**
     * GamerMain psid.
     * @member {number} psid
     * @memberof GamerMain
     * @instance
     */
    GamerMain.prototype.psid = 0;

    /**
     * GamerMain state.
     * @member {GamerStatus} state
     * @memberof GamerMain
     * @instance
     */
    GamerMain.prototype.state = 0;

    /**
     * GamerMain name.
     * @member {string} name
     * @memberof GamerMain
     * @instance
     */
    GamerMain.prototype.name = "";

    /**
     * GamerMain level.
     * @member {number} level
     * @memberof GamerMain
     * @instance
     */
    GamerMain.prototype.level = 0;

    /**
     * GamerMain session.
     * @member {string} session
     * @memberof GamerMain
     * @instance
     */
    GamerMain.prototype.session = "";

    /**
     * GamerMain create.
     * @member {number|Long} create
     * @memberof GamerMain
     * @instance
     */
    GamerMain.prototype.create = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GamerMain lastLogin.
     * @member {number|Long} lastLogin
     * @memberof GamerMain
     * @instance
     */
    GamerMain.prototype.lastLogin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GamerMain lastLogout.
     * @member {number|Long} lastLogout
     * @memberof GamerMain
     * @instance
     */
    GamerMain.prototype.lastLogout = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GamerMain typeId.
     * @member {number} typeId
     * @memberof GamerMain
     * @instance
     */
    GamerMain.prototype.typeId = 0;

    /**
     * GamerMain icon.
     * @member {number} icon
     * @memberof GamerMain
     * @instance
     */
    GamerMain.prototype.icon = 0;

    /**
     * GamerMain exp.
     * @member {number} exp
     * @memberof GamerMain
     * @instance
     */
    GamerMain.prototype.exp = 0;

    /**
     * GamerMain pvpSession.
     * @member {string} pvpSession
     * @memberof GamerMain
     * @instance
     */
    GamerMain.prototype.pvpSession = "";

    /**
     * GamerMain avatar.
     * @member {string} avatar
     * @memberof GamerMain
     * @instance
     */
    GamerMain.prototype.avatar = "";

    /**
     * Creates a new GamerMain instance using the specified properties.
     * @function create
     * @memberof GamerMain
     * @static
     * @param {IGamerMain=} [properties] Properties to set
     * @returns {GamerMain} GamerMain instance
     */
    GamerMain.create = function create(properties) {
        return new GamerMain(properties);
    };

    /**
     * Encodes the specified GamerMain message. Does not implicitly {@link GamerMain.verify|verify} messages.
     * @function encode
     * @memberof GamerMain
     * @static
     * @param {IGamerMain} message GamerMain message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerMain.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.uid != null && message.hasOwnProperty("uid"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.uid);
        if (message.lsid != null && message.hasOwnProperty("lsid"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.lsid);
        if (message.psid != null && message.hasOwnProperty("psid"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.psid);
        if (message.state != null && message.hasOwnProperty("state"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.state);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.name);
        if (message.level != null && message.hasOwnProperty("level"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.level);
        if (message.session != null && message.hasOwnProperty("session"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.session);
        if (message.create != null && message.hasOwnProperty("create"))
            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.create);
        if (message.lastLogin != null && message.hasOwnProperty("lastLogin"))
            writer.uint32(/* id 10, wireType 0 =*/80).int64(message.lastLogin);
        if (message.lastLogout != null && message.hasOwnProperty("lastLogout"))
            writer.uint32(/* id 11, wireType 0 =*/88).int64(message.lastLogout);
        if (message.typeId != null && message.hasOwnProperty("typeId"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.typeId);
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.icon);
        if (message.exp != null && message.hasOwnProperty("exp"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.exp);
        if (message.pvpSession != null && message.hasOwnProperty("pvpSession"))
            writer.uint32(/* id 15, wireType 2 =*/122).string(message.pvpSession);
        if (message.avatar != null && message.hasOwnProperty("avatar"))
            writer.uint32(/* id 16, wireType 2 =*/130).string(message.avatar);
        return writer;
    };

    /**
     * Encodes the specified GamerMain message, length delimited. Does not implicitly {@link GamerMain.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerMain
     * @static
     * @param {IGamerMain} message GamerMain message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerMain.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerMain message from the specified reader or buffer.
     * @function decode
     * @memberof GamerMain
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerMain} GamerMain
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerMain.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerMain();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.uid = reader.string();
                break;
            case 3:
                message.lsid = reader.int32();
                break;
            case 4:
                message.psid = reader.int32();
                break;
            case 5:
                message.state = reader.int32();
                break;
            case 6:
                message.name = reader.string();
                break;
            case 7:
                message.level = reader.int32();
                break;
            case 8:
                message.session = reader.string();
                break;
            case 9:
                message.create = reader.int64();
                break;
            case 10:
                message.lastLogin = reader.int64();
                break;
            case 11:
                message.lastLogout = reader.int64();
                break;
            case 12:
                message.typeId = reader.int32();
                break;
            case 13:
                message.icon = reader.int32();
                break;
            case 14:
                message.exp = reader.int32();
                break;
            case 15:
                message.pvpSession = reader.string();
                break;
            case 16:
                message.avatar = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerMain message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerMain
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerMain} GamerMain
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerMain.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerMain message.
     * @function verify
     * @memberof GamerMain
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerMain.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isString(message.uid))
                return "uid: string expected";
        if (message.lsid != null && message.hasOwnProperty("lsid"))
            if (!$util.isInteger(message.lsid))
                return "lsid: integer expected";
        if (message.psid != null && message.hasOwnProperty("psid"))
            if (!$util.isInteger(message.psid))
                return "psid: integer expected";
        if (message.state != null && message.hasOwnProperty("state"))
            switch (message.state) {
            default:
                return "state: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.level != null && message.hasOwnProperty("level"))
            if (!$util.isInteger(message.level))
                return "level: integer expected";
        if (message.session != null && message.hasOwnProperty("session"))
            if (!$util.isString(message.session))
                return "session: string expected";
        if (message.create != null && message.hasOwnProperty("create"))
            if (!$util.isInteger(message.create) && !(message.create && $util.isInteger(message.create.low) && $util.isInteger(message.create.high)))
                return "create: integer|Long expected";
        if (message.lastLogin != null && message.hasOwnProperty("lastLogin"))
            if (!$util.isInteger(message.lastLogin) && !(message.lastLogin && $util.isInteger(message.lastLogin.low) && $util.isInteger(message.lastLogin.high)))
                return "lastLogin: integer|Long expected";
        if (message.lastLogout != null && message.hasOwnProperty("lastLogout"))
            if (!$util.isInteger(message.lastLogout) && !(message.lastLogout && $util.isInteger(message.lastLogout.low) && $util.isInteger(message.lastLogout.high)))
                return "lastLogout: integer|Long expected";
        if (message.typeId != null && message.hasOwnProperty("typeId"))
            if (!$util.isInteger(message.typeId))
                return "typeId: integer expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isInteger(message.icon))
                return "icon: integer expected";
        if (message.exp != null && message.hasOwnProperty("exp"))
            if (!$util.isInteger(message.exp))
                return "exp: integer expected";
        if (message.pvpSession != null && message.hasOwnProperty("pvpSession"))
            if (!$util.isString(message.pvpSession))
                return "pvpSession: string expected";
        if (message.avatar != null && message.hasOwnProperty("avatar"))
            if (!$util.isString(message.avatar))
                return "avatar: string expected";
        return null;
    };

    /**
     * Creates a GamerMain message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerMain
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerMain} GamerMain
     */
    GamerMain.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerMain)
            return object;
        var message = new $root.GamerMain();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.uid != null)
            message.uid = String(object.uid);
        if (object.lsid != null)
            message.lsid = object.lsid | 0;
        if (object.psid != null)
            message.psid = object.psid | 0;
        switch (object.state) {
        case "Offline":
        case 0:
            message.state = 0;
            break;
        case "Online":
        case 1:
            message.state = 1;
            break;
        case "Teaming":
        case 2:
            message.state = 2;
            break;
        case "Matching":
        case 3:
            message.state = 3;
            break;
        case "Fighting":
        case 4:
            message.state = 4;
            break;
        }
        if (object.name != null)
            message.name = String(object.name);
        if (object.level != null)
            message.level = object.level | 0;
        if (object.session != null)
            message.session = String(object.session);
        if (object.create != null)
            if ($util.Long)
                (message.create = $util.Long.fromValue(object.create)).unsigned = false;
            else if (typeof object.create === "string")
                message.create = parseInt(object.create, 10);
            else if (typeof object.create === "number")
                message.create = object.create;
            else if (typeof object.create === "object")
                message.create = new $util.LongBits(object.create.low >>> 0, object.create.high >>> 0).toNumber();
        if (object.lastLogin != null)
            if ($util.Long)
                (message.lastLogin = $util.Long.fromValue(object.lastLogin)).unsigned = false;
            else if (typeof object.lastLogin === "string")
                message.lastLogin = parseInt(object.lastLogin, 10);
            else if (typeof object.lastLogin === "number")
                message.lastLogin = object.lastLogin;
            else if (typeof object.lastLogin === "object")
                message.lastLogin = new $util.LongBits(object.lastLogin.low >>> 0, object.lastLogin.high >>> 0).toNumber();
        if (object.lastLogout != null)
            if ($util.Long)
                (message.lastLogout = $util.Long.fromValue(object.lastLogout)).unsigned = false;
            else if (typeof object.lastLogout === "string")
                message.lastLogout = parseInt(object.lastLogout, 10);
            else if (typeof object.lastLogout === "number")
                message.lastLogout = object.lastLogout;
            else if (typeof object.lastLogout === "object")
                message.lastLogout = new $util.LongBits(object.lastLogout.low >>> 0, object.lastLogout.high >>> 0).toNumber();
        if (object.typeId != null)
            message.typeId = object.typeId | 0;
        if (object.icon != null)
            message.icon = object.icon | 0;
        if (object.exp != null)
            message.exp = object.exp | 0;
        if (object.pvpSession != null)
            message.pvpSession = String(object.pvpSession);
        if (object.avatar != null)
            message.avatar = String(object.avatar);
        return message;
    };

    /**
     * Creates a plain object from a GamerMain message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerMain
     * @static
     * @param {GamerMain} message GamerMain
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerMain.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.uid = "";
            object.lsid = 0;
            object.psid = 0;
            object.state = options.enums === String ? "Offline" : 0;
            object.name = "";
            object.level = 0;
            object.session = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.create = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.create = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.lastLogin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.lastLogin = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.lastLogout = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.lastLogout = options.longs === String ? "0" : 0;
            object.typeId = 0;
            object.icon = 0;
            object.exp = 0;
            object.pvpSession = "";
            object.avatar = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.uid != null && message.hasOwnProperty("uid"))
            object.uid = message.uid;
        if (message.lsid != null && message.hasOwnProperty("lsid"))
            object.lsid = message.lsid;
        if (message.psid != null && message.hasOwnProperty("psid"))
            object.psid = message.psid;
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = options.enums === String ? $root.GamerStatus[message.state] : message.state;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.level != null && message.hasOwnProperty("level"))
            object.level = message.level;
        if (message.session != null && message.hasOwnProperty("session"))
            object.session = message.session;
        if (message.create != null && message.hasOwnProperty("create"))
            if (typeof message.create === "number")
                object.create = options.longs === String ? String(message.create) : message.create;
            else
                object.create = options.longs === String ? $util.Long.prototype.toString.call(message.create) : options.longs === Number ? new $util.LongBits(message.create.low >>> 0, message.create.high >>> 0).toNumber() : message.create;
        if (message.lastLogin != null && message.hasOwnProperty("lastLogin"))
            if (typeof message.lastLogin === "number")
                object.lastLogin = options.longs === String ? String(message.lastLogin) : message.lastLogin;
            else
                object.lastLogin = options.longs === String ? $util.Long.prototype.toString.call(message.lastLogin) : options.longs === Number ? new $util.LongBits(message.lastLogin.low >>> 0, message.lastLogin.high >>> 0).toNumber() : message.lastLogin;
        if (message.lastLogout != null && message.hasOwnProperty("lastLogout"))
            if (typeof message.lastLogout === "number")
                object.lastLogout = options.longs === String ? String(message.lastLogout) : message.lastLogout;
            else
                object.lastLogout = options.longs === String ? $util.Long.prototype.toString.call(message.lastLogout) : options.longs === Number ? new $util.LongBits(message.lastLogout.low >>> 0, message.lastLogout.high >>> 0).toNumber() : message.lastLogout;
        if (message.typeId != null && message.hasOwnProperty("typeId"))
            object.typeId = message.typeId;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        if (message.exp != null && message.hasOwnProperty("exp"))
            object.exp = message.exp;
        if (message.pvpSession != null && message.hasOwnProperty("pvpSession"))
            object.pvpSession = message.pvpSession;
        if (message.avatar != null && message.hasOwnProperty("avatar"))
            object.avatar = message.avatar;
        return object;
    };

    /**
     * Converts this GamerMain to JSON.
     * @function toJSON
     * @memberof GamerMain
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerMain.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerMain;
})();

$root.GamerMini = (function() {

    /**
     * Properties of a GamerMini.
     * @exports IGamerMini
     * @interface IGamerMini
     * @property {number|null} [id] GamerMini id
     * @property {string|null} [name] GamerMini name
     * @property {number|null} [level] GamerMini level
     * @property {number|null} [lsid] GamerMini lsid
     * @property {string|null} [avatar] GamerMini avatar
     */

    /**
     * Constructs a new GamerMini.
     * @exports GamerMini
     * @classdesc Represents a GamerMini.
     * @implements IGamerMini
     * @constructor
     * @param {IGamerMini=} [properties] Properties to set
     */
    function GamerMini(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerMini id.
     * @member {number} id
     * @memberof GamerMini
     * @instance
     */
    GamerMini.prototype.id = 0;

    /**
     * GamerMini name.
     * @member {string} name
     * @memberof GamerMini
     * @instance
     */
    GamerMini.prototype.name = "";

    /**
     * GamerMini level.
     * @member {number} level
     * @memberof GamerMini
     * @instance
     */
    GamerMini.prototype.level = 0;

    /**
     * GamerMini lsid.
     * @member {number} lsid
     * @memberof GamerMini
     * @instance
     */
    GamerMini.prototype.lsid = 0;

    /**
     * GamerMini avatar.
     * @member {string} avatar
     * @memberof GamerMini
     * @instance
     */
    GamerMini.prototype.avatar = "";

    /**
     * Creates a new GamerMini instance using the specified properties.
     * @function create
     * @memberof GamerMini
     * @static
     * @param {IGamerMini=} [properties] Properties to set
     * @returns {GamerMini} GamerMini instance
     */
    GamerMini.create = function create(properties) {
        return new GamerMini(properties);
    };

    /**
     * Encodes the specified GamerMini message. Does not implicitly {@link GamerMini.verify|verify} messages.
     * @function encode
     * @memberof GamerMini
     * @static
     * @param {IGamerMini} message GamerMini message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerMini.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.level != null && message.hasOwnProperty("level"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.level);
        if (message.lsid != null && message.hasOwnProperty("lsid"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.lsid);
        if (message.avatar != null && message.hasOwnProperty("avatar"))
            writer.uint32(/* id 16, wireType 2 =*/130).string(message.avatar);
        return writer;
    };

    /**
     * Encodes the specified GamerMini message, length delimited. Does not implicitly {@link GamerMini.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerMini
     * @static
     * @param {IGamerMini} message GamerMini message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerMini.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerMini message from the specified reader or buffer.
     * @function decode
     * @memberof GamerMini
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerMini} GamerMini
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerMini.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerMini();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.level = reader.int32();
                break;
            case 4:
                message.lsid = reader.int32();
                break;
            case 16:
                message.avatar = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerMini message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerMini
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerMini} GamerMini
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerMini.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerMini message.
     * @function verify
     * @memberof GamerMini
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerMini.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.level != null && message.hasOwnProperty("level"))
            if (!$util.isInteger(message.level))
                return "level: integer expected";
        if (message.lsid != null && message.hasOwnProperty("lsid"))
            if (!$util.isInteger(message.lsid))
                return "lsid: integer expected";
        if (message.avatar != null && message.hasOwnProperty("avatar"))
            if (!$util.isString(message.avatar))
                return "avatar: string expected";
        return null;
    };

    /**
     * Creates a GamerMini message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerMini
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerMini} GamerMini
     */
    GamerMini.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerMini)
            return object;
        var message = new $root.GamerMini();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.name != null)
            message.name = String(object.name);
        if (object.level != null)
            message.level = object.level | 0;
        if (object.lsid != null)
            message.lsid = object.lsid | 0;
        if (object.avatar != null)
            message.avatar = String(object.avatar);
        return message;
    };

    /**
     * Creates a plain object from a GamerMini message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerMini
     * @static
     * @param {GamerMini} message GamerMini
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerMini.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.name = "";
            object.level = 0;
            object.lsid = 0;
            object.avatar = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.level != null && message.hasOwnProperty("level"))
            object.level = message.level;
        if (message.lsid != null && message.hasOwnProperty("lsid"))
            object.lsid = message.lsid;
        if (message.avatar != null && message.hasOwnProperty("avatar"))
            object.avatar = message.avatar;
        return object;
    };

    /**
     * Converts this GamerMini to JSON.
     * @function toJSON
     * @memberof GamerMini
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerMini.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerMini;
})();

$root.GamerFriendRequest = (function() {

    /**
     * Properties of a GamerFriendRequest.
     * @exports IGamerFriendRequest
     * @interface IGamerFriendRequest
     * @property {number|null} [id] GamerFriendRequest id
     * @property {string|null} [msg] GamerFriendRequest msg
     * @property {number|Long|null} [time] GamerFriendRequest time
     * @property {IGamerMini|null} [gamerInfo] GamerFriendRequest gamerInfo
     */

    /**
     * Constructs a new GamerFriendRequest.
     * @exports GamerFriendRequest
     * @classdesc Represents a GamerFriendRequest.
     * @implements IGamerFriendRequest
     * @constructor
     * @param {IGamerFriendRequest=} [properties] Properties to set
     */
    function GamerFriendRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerFriendRequest id.
     * @member {number} id
     * @memberof GamerFriendRequest
     * @instance
     */
    GamerFriendRequest.prototype.id = 0;

    /**
     * GamerFriendRequest msg.
     * @member {string} msg
     * @memberof GamerFriendRequest
     * @instance
     */
    GamerFriendRequest.prototype.msg = "";

    /**
     * GamerFriendRequest time.
     * @member {number|Long} time
     * @memberof GamerFriendRequest
     * @instance
     */
    GamerFriendRequest.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GamerFriendRequest gamerInfo.
     * @member {IGamerMini|null|undefined} gamerInfo
     * @memberof GamerFriendRequest
     * @instance
     */
    GamerFriendRequest.prototype.gamerInfo = null;

    /**
     * Creates a new GamerFriendRequest instance using the specified properties.
     * @function create
     * @memberof GamerFriendRequest
     * @static
     * @param {IGamerFriendRequest=} [properties] Properties to set
     * @returns {GamerFriendRequest} GamerFriendRequest instance
     */
    GamerFriendRequest.create = function create(properties) {
        return new GamerFriendRequest(properties);
    };

    /**
     * Encodes the specified GamerFriendRequest message. Does not implicitly {@link GamerFriendRequest.verify|verify} messages.
     * @function encode
     * @memberof GamerFriendRequest
     * @static
     * @param {IGamerFriendRequest} message GamerFriendRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerFriendRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.msg != null && message.hasOwnProperty("msg"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
        if (message.time != null && message.hasOwnProperty("time"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.time);
        if (message.gamerInfo != null && message.hasOwnProperty("gamerInfo"))
            $root.GamerMini.encode(message.gamerInfo, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GamerFriendRequest message, length delimited. Does not implicitly {@link GamerFriendRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerFriendRequest
     * @static
     * @param {IGamerFriendRequest} message GamerFriendRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerFriendRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerFriendRequest message from the specified reader or buffer.
     * @function decode
     * @memberof GamerFriendRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerFriendRequest} GamerFriendRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerFriendRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerFriendRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.msg = reader.string();
                break;
            case 3:
                message.time = reader.int64();
                break;
            case 5:
                message.gamerInfo = $root.GamerMini.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerFriendRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerFriendRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerFriendRequest} GamerFriendRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerFriendRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerFriendRequest message.
     * @function verify
     * @memberof GamerFriendRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerFriendRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.msg != null && message.hasOwnProperty("msg"))
            if (!$util.isString(message.msg))
                return "msg: string expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                return "time: integer|Long expected";
        if (message.gamerInfo != null && message.hasOwnProperty("gamerInfo")) {
            var error = $root.GamerMini.verify(message.gamerInfo);
            if (error)
                return "gamerInfo." + error;
        }
        return null;
    };

    /**
     * Creates a GamerFriendRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerFriendRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerFriendRequest} GamerFriendRequest
     */
    GamerFriendRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerFriendRequest)
            return object;
        var message = new $root.GamerFriendRequest();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.msg != null)
            message.msg = String(object.msg);
        if (object.time != null)
            if ($util.Long)
                (message.time = $util.Long.fromValue(object.time)).unsigned = false;
            else if (typeof object.time === "string")
                message.time = parseInt(object.time, 10);
            else if (typeof object.time === "number")
                message.time = object.time;
            else if (typeof object.time === "object")
                message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
        if (object.gamerInfo != null) {
            if (typeof object.gamerInfo !== "object")
                throw TypeError(".GamerFriendRequest.gamerInfo: object expected");
            message.gamerInfo = $root.GamerMini.fromObject(object.gamerInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a GamerFriendRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerFriendRequest
     * @static
     * @param {GamerFriendRequest} message GamerFriendRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerFriendRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.msg = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.time = options.longs === String ? "0" : 0;
            object.gamerInfo = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.msg != null && message.hasOwnProperty("msg"))
            object.msg = message.msg;
        if (message.time != null && message.hasOwnProperty("time"))
            if (typeof message.time === "number")
                object.time = options.longs === String ? String(message.time) : message.time;
            else
                object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
        if (message.gamerInfo != null && message.hasOwnProperty("gamerInfo"))
            object.gamerInfo = $root.GamerMini.toObject(message.gamerInfo, options);
        return object;
    };

    /**
     * Converts this GamerFriendRequest to JSON.
     * @function toJSON
     * @memberof GamerFriendRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerFriendRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerFriendRequest;
})();

$root.GamerBlack = (function() {

    /**
     * Properties of a GamerBlack.
     * @exports IGamerBlack
     * @interface IGamerBlack
     * @property {number|null} [id] GamerBlack id
     */

    /**
     * Constructs a new GamerBlack.
     * @exports GamerBlack
     * @classdesc Represents a GamerBlack.
     * @implements IGamerBlack
     * @constructor
     * @param {IGamerBlack=} [properties] Properties to set
     */
    function GamerBlack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerBlack id.
     * @member {number} id
     * @memberof GamerBlack
     * @instance
     */
    GamerBlack.prototype.id = 0;

    /**
     * Creates a new GamerBlack instance using the specified properties.
     * @function create
     * @memberof GamerBlack
     * @static
     * @param {IGamerBlack=} [properties] Properties to set
     * @returns {GamerBlack} GamerBlack instance
     */
    GamerBlack.create = function create(properties) {
        return new GamerBlack(properties);
    };

    /**
     * Encodes the specified GamerBlack message. Does not implicitly {@link GamerBlack.verify|verify} messages.
     * @function encode
     * @memberof GamerBlack
     * @static
     * @param {IGamerBlack} message GamerBlack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerBlack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        return writer;
    };

    /**
     * Encodes the specified GamerBlack message, length delimited. Does not implicitly {@link GamerBlack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerBlack
     * @static
     * @param {IGamerBlack} message GamerBlack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerBlack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerBlack message from the specified reader or buffer.
     * @function decode
     * @memberof GamerBlack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerBlack} GamerBlack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerBlack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerBlack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerBlack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerBlack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerBlack} GamerBlack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerBlack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerBlack message.
     * @function verify
     * @memberof GamerBlack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerBlack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        return null;
    };

    /**
     * Creates a GamerBlack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerBlack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerBlack} GamerBlack
     */
    GamerBlack.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerBlack)
            return object;
        var message = new $root.GamerBlack();
        if (object.id != null)
            message.id = object.id | 0;
        return message;
    };

    /**
     * Creates a plain object from a GamerBlack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerBlack
     * @static
     * @param {GamerBlack} message GamerBlack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerBlack.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = 0;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this GamerBlack to JSON.
     * @function toJSON
     * @memberof GamerBlack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerBlack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerBlack;
})();

$root.GamerFriend = (function() {

    /**
     * Properties of a GamerFriend.
     * @exports IGamerFriend
     * @interface IGamerFriend
     * @property {number|null} [id] GamerFriend id
     * @property {number|Long|null} [time] GamerFriend time
     * @property {IGamerMini|null} [gamerInfo] GamerFriend gamerInfo
     */

    /**
     * Constructs a new GamerFriend.
     * @exports GamerFriend
     * @classdesc Represents a GamerFriend.
     * @implements IGamerFriend
     * @constructor
     * @param {IGamerFriend=} [properties] Properties to set
     */
    function GamerFriend(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerFriend id.
     * @member {number} id
     * @memberof GamerFriend
     * @instance
     */
    GamerFriend.prototype.id = 0;

    /**
     * GamerFriend time.
     * @member {number|Long} time
     * @memberof GamerFriend
     * @instance
     */
    GamerFriend.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GamerFriend gamerInfo.
     * @member {IGamerMini|null|undefined} gamerInfo
     * @memberof GamerFriend
     * @instance
     */
    GamerFriend.prototype.gamerInfo = null;

    /**
     * Creates a new GamerFriend instance using the specified properties.
     * @function create
     * @memberof GamerFriend
     * @static
     * @param {IGamerFriend=} [properties] Properties to set
     * @returns {GamerFriend} GamerFriend instance
     */
    GamerFriend.create = function create(properties) {
        return new GamerFriend(properties);
    };

    /**
     * Encodes the specified GamerFriend message. Does not implicitly {@link GamerFriend.verify|verify} messages.
     * @function encode
     * @memberof GamerFriend
     * @static
     * @param {IGamerFriend} message GamerFriend message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerFriend.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.time != null && message.hasOwnProperty("time"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.time);
        if (message.gamerInfo != null && message.hasOwnProperty("gamerInfo"))
            $root.GamerMini.encode(message.gamerInfo, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GamerFriend message, length delimited. Does not implicitly {@link GamerFriend.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerFriend
     * @static
     * @param {IGamerFriend} message GamerFriend message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerFriend.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerFriend message from the specified reader or buffer.
     * @function decode
     * @memberof GamerFriend
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerFriend} GamerFriend
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerFriend.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerFriend();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.time = reader.int64();
                break;
            case 5:
                message.gamerInfo = $root.GamerMini.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerFriend message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerFriend
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerFriend} GamerFriend
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerFriend.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerFriend message.
     * @function verify
     * @memberof GamerFriend
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerFriend.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                return "time: integer|Long expected";
        if (message.gamerInfo != null && message.hasOwnProperty("gamerInfo")) {
            var error = $root.GamerMini.verify(message.gamerInfo);
            if (error)
                return "gamerInfo." + error;
        }
        return null;
    };

    /**
     * Creates a GamerFriend message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerFriend
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerFriend} GamerFriend
     */
    GamerFriend.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerFriend)
            return object;
        var message = new $root.GamerFriend();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.time != null)
            if ($util.Long)
                (message.time = $util.Long.fromValue(object.time)).unsigned = false;
            else if (typeof object.time === "string")
                message.time = parseInt(object.time, 10);
            else if (typeof object.time === "number")
                message.time = object.time;
            else if (typeof object.time === "object")
                message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
        if (object.gamerInfo != null) {
            if (typeof object.gamerInfo !== "object")
                throw TypeError(".GamerFriend.gamerInfo: object expected");
            message.gamerInfo = $root.GamerMini.fromObject(object.gamerInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a GamerFriend message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerFriend
     * @static
     * @param {GamerFriend} message GamerFriend
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerFriend.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.time = options.longs === String ? "0" : 0;
            object.gamerInfo = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.time != null && message.hasOwnProperty("time"))
            if (typeof message.time === "number")
                object.time = options.longs === String ? String(message.time) : message.time;
            else
                object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
        if (message.gamerInfo != null && message.hasOwnProperty("gamerInfo"))
            object.gamerInfo = $root.GamerMini.toObject(message.gamerInfo, options);
        return object;
    };

    /**
     * Converts this GamerFriend to JSON.
     * @function toJSON
     * @memberof GamerFriend
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerFriend.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerFriend;
})();

$root.ChatData = (function() {

    /**
     * Properties of a ChatData.
     * @exports IChatData
     * @interface IChatData
     * @property {number|null} [from] ChatData from
     * @property {number|Long|null} [time] ChatData time
     * @property {string|null} [msg] ChatData msg
     * @property {number|null} [channel] ChatData channel
     * @property {IGamerMini|null} [gamerInfo] ChatData gamerInfo
     */

    /**
     * Constructs a new ChatData.
     * @exports ChatData
     * @classdesc Represents a ChatData.
     * @implements IChatData
     * @constructor
     * @param {IChatData=} [properties] Properties to set
     */
    function ChatData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChatData from.
     * @member {number} from
     * @memberof ChatData
     * @instance
     */
    ChatData.prototype.from = 0;

    /**
     * ChatData time.
     * @member {number|Long} time
     * @memberof ChatData
     * @instance
     */
    ChatData.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ChatData msg.
     * @member {string} msg
     * @memberof ChatData
     * @instance
     */
    ChatData.prototype.msg = "";

    /**
     * ChatData channel.
     * @member {number} channel
     * @memberof ChatData
     * @instance
     */
    ChatData.prototype.channel = 0;

    /**
     * ChatData gamerInfo.
     * @member {IGamerMini|null|undefined} gamerInfo
     * @memberof ChatData
     * @instance
     */
    ChatData.prototype.gamerInfo = null;

    /**
     * Creates a new ChatData instance using the specified properties.
     * @function create
     * @memberof ChatData
     * @static
     * @param {IChatData=} [properties] Properties to set
     * @returns {ChatData} ChatData instance
     */
    ChatData.create = function create(properties) {
        return new ChatData(properties);
    };

    /**
     * Encodes the specified ChatData message. Does not implicitly {@link ChatData.verify|verify} messages.
     * @function encode
     * @memberof ChatData
     * @static
     * @param {IChatData} message ChatData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.from != null && message.hasOwnProperty("from"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.from);
        if (message.time != null && message.hasOwnProperty("time"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.time);
        if (message.msg != null && message.hasOwnProperty("msg"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.msg);
        if (message.channel != null && message.hasOwnProperty("channel"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.channel);
        if (message.gamerInfo != null && message.hasOwnProperty("gamerInfo"))
            $root.GamerMini.encode(message.gamerInfo, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ChatData message, length delimited. Does not implicitly {@link ChatData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChatData
     * @static
     * @param {IChatData} message ChatData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChatData message from the specified reader or buffer.
     * @function decode
     * @memberof ChatData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatData} ChatData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.from = reader.int32();
                break;
            case 2:
                message.time = reader.int64();
                break;
            case 3:
                message.msg = reader.string();
                break;
            case 4:
                message.channel = reader.int32();
                break;
            case 5:
                message.gamerInfo = $root.GamerMini.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChatData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChatData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatData} ChatData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChatData message.
     * @function verify
     * @memberof ChatData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChatData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.from != null && message.hasOwnProperty("from"))
            if (!$util.isInteger(message.from))
                return "from: integer expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                return "time: integer|Long expected";
        if (message.msg != null && message.hasOwnProperty("msg"))
            if (!$util.isString(message.msg))
                return "msg: string expected";
        if (message.channel != null && message.hasOwnProperty("channel"))
            if (!$util.isInteger(message.channel))
                return "channel: integer expected";
        if (message.gamerInfo != null && message.hasOwnProperty("gamerInfo")) {
            var error = $root.GamerMini.verify(message.gamerInfo);
            if (error)
                return "gamerInfo." + error;
        }
        return null;
    };

    /**
     * Creates a ChatData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChatData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatData} ChatData
     */
    ChatData.fromObject = function fromObject(object) {
        if (object instanceof $root.ChatData)
            return object;
        var message = new $root.ChatData();
        if (object.from != null)
            message.from = object.from | 0;
        if (object.time != null)
            if ($util.Long)
                (message.time = $util.Long.fromValue(object.time)).unsigned = false;
            else if (typeof object.time === "string")
                message.time = parseInt(object.time, 10);
            else if (typeof object.time === "number")
                message.time = object.time;
            else if (typeof object.time === "object")
                message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
        if (object.msg != null)
            message.msg = String(object.msg);
        if (object.channel != null)
            message.channel = object.channel | 0;
        if (object.gamerInfo != null) {
            if (typeof object.gamerInfo !== "object")
                throw TypeError(".ChatData.gamerInfo: object expected");
            message.gamerInfo = $root.GamerMini.fromObject(object.gamerInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a ChatData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChatData
     * @static
     * @param {ChatData} message ChatData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChatData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.from = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.time = options.longs === String ? "0" : 0;
            object.msg = "";
            object.channel = 0;
            object.gamerInfo = null;
        }
        if (message.from != null && message.hasOwnProperty("from"))
            object.from = message.from;
        if (message.time != null && message.hasOwnProperty("time"))
            if (typeof message.time === "number")
                object.time = options.longs === String ? String(message.time) : message.time;
            else
                object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
        if (message.msg != null && message.hasOwnProperty("msg"))
            object.msg = message.msg;
        if (message.channel != null && message.hasOwnProperty("channel"))
            object.channel = message.channel;
        if (message.gamerInfo != null && message.hasOwnProperty("gamerInfo"))
            object.gamerInfo = $root.GamerMini.toObject(message.gamerInfo, options);
        return object;
    };

    /**
     * Converts this ChatData to JSON.
     * @function toJSON
     * @memberof ChatData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChatData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ChatData;
})();

$root.Mail = (function() {

    /**
     * Properties of a Mail.
     * @exports IMail
     * @interface IMail
     * @property {string|null} [id] Mail id
     * @property {number|null} [mailType] Mail mailType
     * @property {number|Long|null} [time] Mail time
     * @property {string|null} [theme] Mail theme
     * @property {string|null} [msg] Mail msg
     * @property {Array.<IGameItem>|null} [attachments] Mail attachments
     * @property {number|null} [state] Mail state
     * @property {number|null} [serverId] Mail serverId
     * @property {number|null} [senderId] Mail senderId
     * @property {number|null} [level] Mail level
     * @property {number|Long|null} [endTime] Mail endTime
     * @property {number|null} [isDel] Mail isDel
     * @property {number|null} [cfgId] Mail cfgId
     * @property {boolean|null} [save] Mail save
     * @property {IGamerMini|null} [gamerInfo] Mail gamerInfo
     */

    /**
     * Constructs a new Mail.
     * @exports Mail
     * @classdesc Represents a Mail.
     * @implements IMail
     * @constructor
     * @param {IMail=} [properties] Properties to set
     */
    function Mail(properties) {
        this.attachments = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Mail id.
     * @member {string} id
     * @memberof Mail
     * @instance
     */
    Mail.prototype.id = "";

    /**
     * Mail mailType.
     * @member {number} mailType
     * @memberof Mail
     * @instance
     */
    Mail.prototype.mailType = 0;

    /**
     * Mail time.
     * @member {number|Long} time
     * @memberof Mail
     * @instance
     */
    Mail.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Mail theme.
     * @member {string} theme
     * @memberof Mail
     * @instance
     */
    Mail.prototype.theme = "";

    /**
     * Mail msg.
     * @member {string} msg
     * @memberof Mail
     * @instance
     */
    Mail.prototype.msg = "";

    /**
     * Mail attachments.
     * @member {Array.<IGameItem>} attachments
     * @memberof Mail
     * @instance
     */
    Mail.prototype.attachments = $util.emptyArray;

    /**
     * Mail state.
     * @member {number} state
     * @memberof Mail
     * @instance
     */
    Mail.prototype.state = 0;

    /**
     * Mail serverId.
     * @member {number} serverId
     * @memberof Mail
     * @instance
     */
    Mail.prototype.serverId = 0;

    /**
     * Mail senderId.
     * @member {number} senderId
     * @memberof Mail
     * @instance
     */
    Mail.prototype.senderId = 0;

    /**
     * Mail level.
     * @member {number} level
     * @memberof Mail
     * @instance
     */
    Mail.prototype.level = 0;

    /**
     * Mail endTime.
     * @member {number|Long} endTime
     * @memberof Mail
     * @instance
     */
    Mail.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Mail isDel.
     * @member {number} isDel
     * @memberof Mail
     * @instance
     */
    Mail.prototype.isDel = 0;

    /**
     * Mail cfgId.
     * @member {number} cfgId
     * @memberof Mail
     * @instance
     */
    Mail.prototype.cfgId = 0;

    /**
     * Mail save.
     * @member {boolean} save
     * @memberof Mail
     * @instance
     */
    Mail.prototype.save = false;

    /**
     * Mail gamerInfo.
     * @member {IGamerMini|null|undefined} gamerInfo
     * @memberof Mail
     * @instance
     */
    Mail.prototype.gamerInfo = null;

    /**
     * Creates a new Mail instance using the specified properties.
     * @function create
     * @memberof Mail
     * @static
     * @param {IMail=} [properties] Properties to set
     * @returns {Mail} Mail instance
     */
    Mail.create = function create(properties) {
        return new Mail(properties);
    };

    /**
     * Encodes the specified Mail message. Does not implicitly {@link Mail.verify|verify} messages.
     * @function encode
     * @memberof Mail
     * @static
     * @param {IMail} message Mail message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Mail.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.mailType != null && message.hasOwnProperty("mailType"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mailType);
        if (message.time != null && message.hasOwnProperty("time"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.time);
        if (message.theme != null && message.hasOwnProperty("theme"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.theme);
        if (message.msg != null && message.hasOwnProperty("msg"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.msg);
        if (message.attachments != null && message.attachments.length)
            for (var i = 0; i < message.attachments.length; ++i)
                $root.GameItem.encode(message.attachments[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.state != null && message.hasOwnProperty("state"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.state);
        if (message.serverId != null && message.hasOwnProperty("serverId"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.serverId);
        if (message.senderId != null && message.hasOwnProperty("senderId"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.senderId);
        if (message.level != null && message.hasOwnProperty("level"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.level);
        if (message.endTime != null && message.hasOwnProperty("endTime"))
            writer.uint32(/* id 12, wireType 0 =*/96).int64(message.endTime);
        if (message.isDel != null && message.hasOwnProperty("isDel"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.isDel);
        if (message.cfgId != null && message.hasOwnProperty("cfgId"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.cfgId);
        if (message.save != null && message.hasOwnProperty("save"))
            writer.uint32(/* id 15, wireType 0 =*/120).bool(message.save);
        if (message.gamerInfo != null && message.hasOwnProperty("gamerInfo"))
            $root.GamerMini.encode(message.gamerInfo, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Mail message, length delimited. Does not implicitly {@link Mail.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Mail
     * @static
     * @param {IMail} message Mail message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Mail.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Mail message from the specified reader or buffer.
     * @function decode
     * @memberof Mail
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Mail} Mail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Mail.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mail();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.mailType = reader.int32();
                break;
            case 3:
                message.time = reader.int64();
                break;
            case 4:
                message.theme = reader.string();
                break;
            case 5:
                message.msg = reader.string();
                break;
            case 6:
                if (!(message.attachments && message.attachments.length))
                    message.attachments = [];
                message.attachments.push($root.GameItem.decode(reader, reader.uint32()));
                break;
            case 7:
                message.state = reader.int32();
                break;
            case 9:
                message.serverId = reader.int32();
                break;
            case 10:
                message.senderId = reader.int32();
                break;
            case 11:
                message.level = reader.int32();
                break;
            case 12:
                message.endTime = reader.int64();
                break;
            case 13:
                message.isDel = reader.int32();
                break;
            case 14:
                message.cfgId = reader.int32();
                break;
            case 15:
                message.save = reader.bool();
                break;
            case 16:
                message.gamerInfo = $root.GamerMini.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Mail message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Mail
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Mail} Mail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Mail.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Mail message.
     * @function verify
     * @memberof Mail
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Mail.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.mailType != null && message.hasOwnProperty("mailType"))
            if (!$util.isInteger(message.mailType))
                return "mailType: integer expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                return "time: integer|Long expected";
        if (message.theme != null && message.hasOwnProperty("theme"))
            if (!$util.isString(message.theme))
                return "theme: string expected";
        if (message.msg != null && message.hasOwnProperty("msg"))
            if (!$util.isString(message.msg))
                return "msg: string expected";
        if (message.attachments != null && message.hasOwnProperty("attachments")) {
            if (!Array.isArray(message.attachments))
                return "attachments: array expected";
            for (var i = 0; i < message.attachments.length; ++i) {
                var error = $root.GameItem.verify(message.attachments[i]);
                if (error)
                    return "attachments." + error;
            }
        }
        if (message.state != null && message.hasOwnProperty("state"))
            if (!$util.isInteger(message.state))
                return "state: integer expected";
        if (message.serverId != null && message.hasOwnProperty("serverId"))
            if (!$util.isInteger(message.serverId))
                return "serverId: integer expected";
        if (message.senderId != null && message.hasOwnProperty("senderId"))
            if (!$util.isInteger(message.senderId))
                return "senderId: integer expected";
        if (message.level != null && message.hasOwnProperty("level"))
            if (!$util.isInteger(message.level))
                return "level: integer expected";
        if (message.endTime != null && message.hasOwnProperty("endTime"))
            if (!$util.isInteger(message.endTime) && !(message.endTime && $util.isInteger(message.endTime.low) && $util.isInteger(message.endTime.high)))
                return "endTime: integer|Long expected";
        if (message.isDel != null && message.hasOwnProperty("isDel"))
            if (!$util.isInteger(message.isDel))
                return "isDel: integer expected";
        if (message.cfgId != null && message.hasOwnProperty("cfgId"))
            if (!$util.isInteger(message.cfgId))
                return "cfgId: integer expected";
        if (message.save != null && message.hasOwnProperty("save"))
            if (typeof message.save !== "boolean")
                return "save: boolean expected";
        if (message.gamerInfo != null && message.hasOwnProperty("gamerInfo")) {
            var error = $root.GamerMini.verify(message.gamerInfo);
            if (error)
                return "gamerInfo." + error;
        }
        return null;
    };

    /**
     * Creates a Mail message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Mail
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Mail} Mail
     */
    Mail.fromObject = function fromObject(object) {
        if (object instanceof $root.Mail)
            return object;
        var message = new $root.Mail();
        if (object.id != null)
            message.id = String(object.id);
        if (object.mailType != null)
            message.mailType = object.mailType | 0;
        if (object.time != null)
            if ($util.Long)
                (message.time = $util.Long.fromValue(object.time)).unsigned = false;
            else if (typeof object.time === "string")
                message.time = parseInt(object.time, 10);
            else if (typeof object.time === "number")
                message.time = object.time;
            else if (typeof object.time === "object")
                message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
        if (object.theme != null)
            message.theme = String(object.theme);
        if (object.msg != null)
            message.msg = String(object.msg);
        if (object.attachments) {
            if (!Array.isArray(object.attachments))
                throw TypeError(".Mail.attachments: array expected");
            message.attachments = [];
            for (var i = 0; i < object.attachments.length; ++i) {
                if (typeof object.attachments[i] !== "object")
                    throw TypeError(".Mail.attachments: object expected");
                message.attachments[i] = $root.GameItem.fromObject(object.attachments[i]);
            }
        }
        if (object.state != null)
            message.state = object.state | 0;
        if (object.serverId != null)
            message.serverId = object.serverId | 0;
        if (object.senderId != null)
            message.senderId = object.senderId | 0;
        if (object.level != null)
            message.level = object.level | 0;
        if (object.endTime != null)
            if ($util.Long)
                (message.endTime = $util.Long.fromValue(object.endTime)).unsigned = false;
            else if (typeof object.endTime === "string")
                message.endTime = parseInt(object.endTime, 10);
            else if (typeof object.endTime === "number")
                message.endTime = object.endTime;
            else if (typeof object.endTime === "object")
                message.endTime = new $util.LongBits(object.endTime.low >>> 0, object.endTime.high >>> 0).toNumber();
        if (object.isDel != null)
            message.isDel = object.isDel | 0;
        if (object.cfgId != null)
            message.cfgId = object.cfgId | 0;
        if (object.save != null)
            message.save = Boolean(object.save);
        if (object.gamerInfo != null) {
            if (typeof object.gamerInfo !== "object")
                throw TypeError(".Mail.gamerInfo: object expected");
            message.gamerInfo = $root.GamerMini.fromObject(object.gamerInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a Mail message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Mail
     * @static
     * @param {Mail} message Mail
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Mail.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.attachments = [];
        if (options.defaults) {
            object.id = "";
            object.mailType = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.time = options.longs === String ? "0" : 0;
            object.theme = "";
            object.msg = "";
            object.state = 0;
            object.serverId = 0;
            object.senderId = 0;
            object.level = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.endTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.endTime = options.longs === String ? "0" : 0;
            object.isDel = 0;
            object.cfgId = 0;
            object.save = false;
            object.gamerInfo = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.mailType != null && message.hasOwnProperty("mailType"))
            object.mailType = message.mailType;
        if (message.time != null && message.hasOwnProperty("time"))
            if (typeof message.time === "number")
                object.time = options.longs === String ? String(message.time) : message.time;
            else
                object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
        if (message.theme != null && message.hasOwnProperty("theme"))
            object.theme = message.theme;
        if (message.msg != null && message.hasOwnProperty("msg"))
            object.msg = message.msg;
        if (message.attachments && message.attachments.length) {
            object.attachments = [];
            for (var j = 0; j < message.attachments.length; ++j)
                object.attachments[j] = $root.GameItem.toObject(message.attachments[j], options);
        }
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = message.state;
        if (message.serverId != null && message.hasOwnProperty("serverId"))
            object.serverId = message.serverId;
        if (message.senderId != null && message.hasOwnProperty("senderId"))
            object.senderId = message.senderId;
        if (message.level != null && message.hasOwnProperty("level"))
            object.level = message.level;
        if (message.endTime != null && message.hasOwnProperty("endTime"))
            if (typeof message.endTime === "number")
                object.endTime = options.longs === String ? String(message.endTime) : message.endTime;
            else
                object.endTime = options.longs === String ? $util.Long.prototype.toString.call(message.endTime) : options.longs === Number ? new $util.LongBits(message.endTime.low >>> 0, message.endTime.high >>> 0).toNumber() : message.endTime;
        if (message.isDel != null && message.hasOwnProperty("isDel"))
            object.isDel = message.isDel;
        if (message.cfgId != null && message.hasOwnProperty("cfgId"))
            object.cfgId = message.cfgId;
        if (message.save != null && message.hasOwnProperty("save"))
            object.save = message.save;
        if (message.gamerInfo != null && message.hasOwnProperty("gamerInfo"))
            object.gamerInfo = $root.GamerMini.toObject(message.gamerInfo, options);
        return object;
    };

    /**
     * Converts this Mail to JSON.
     * @function toJSON
     * @memberof Mail
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Mail.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Mail;
})();

$root.GamerMatch = (function() {

    /**
     * Properties of a GamerMatch.
     * @exports IGamerMatch
     * @interface IGamerMatch
     * @property {IGamerMini|null} [mini] GamerMatch mini
     * @property {boolean|null} [ai] GamerMatch ai
     */

    /**
     * Constructs a new GamerMatch.
     * @exports GamerMatch
     * @classdesc Represents a GamerMatch.
     * @implements IGamerMatch
     * @constructor
     * @param {IGamerMatch=} [properties] Properties to set
     */
    function GamerMatch(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamerMatch mini.
     * @member {IGamerMini|null|undefined} mini
     * @memberof GamerMatch
     * @instance
     */
    GamerMatch.prototype.mini = null;

    /**
     * GamerMatch ai.
     * @member {boolean} ai
     * @memberof GamerMatch
     * @instance
     */
    GamerMatch.prototype.ai = false;

    /**
     * Creates a new GamerMatch instance using the specified properties.
     * @function create
     * @memberof GamerMatch
     * @static
     * @param {IGamerMatch=} [properties] Properties to set
     * @returns {GamerMatch} GamerMatch instance
     */
    GamerMatch.create = function create(properties) {
        return new GamerMatch(properties);
    };

    /**
     * Encodes the specified GamerMatch message. Does not implicitly {@link GamerMatch.verify|verify} messages.
     * @function encode
     * @memberof GamerMatch
     * @static
     * @param {IGamerMatch} message GamerMatch message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerMatch.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mini != null && message.hasOwnProperty("mini"))
            $root.GamerMini.encode(message.mini, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.ai != null && message.hasOwnProperty("ai"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.ai);
        return writer;
    };

    /**
     * Encodes the specified GamerMatch message, length delimited. Does not implicitly {@link GamerMatch.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamerMatch
     * @static
     * @param {IGamerMatch} message GamerMatch message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamerMatch.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamerMatch message from the specified reader or buffer.
     * @function decode
     * @memberof GamerMatch
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamerMatch} GamerMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerMatch.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamerMatch();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mini = $root.GamerMini.decode(reader, reader.uint32());
                break;
            case 2:
                message.ai = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamerMatch message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamerMatch
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamerMatch} GamerMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamerMatch.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamerMatch message.
     * @function verify
     * @memberof GamerMatch
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamerMatch.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mini != null && message.hasOwnProperty("mini")) {
            var error = $root.GamerMini.verify(message.mini);
            if (error)
                return "mini." + error;
        }
        if (message.ai != null && message.hasOwnProperty("ai"))
            if (typeof message.ai !== "boolean")
                return "ai: boolean expected";
        return null;
    };

    /**
     * Creates a GamerMatch message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamerMatch
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamerMatch} GamerMatch
     */
    GamerMatch.fromObject = function fromObject(object) {
        if (object instanceof $root.GamerMatch)
            return object;
        var message = new $root.GamerMatch();
        if (object.mini != null) {
            if (typeof object.mini !== "object")
                throw TypeError(".GamerMatch.mini: object expected");
            message.mini = $root.GamerMini.fromObject(object.mini);
        }
        if (object.ai != null)
            message.ai = Boolean(object.ai);
        return message;
    };

    /**
     * Creates a plain object from a GamerMatch message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamerMatch
     * @static
     * @param {GamerMatch} message GamerMatch
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamerMatch.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mini = null;
            object.ai = false;
        }
        if (message.mini != null && message.hasOwnProperty("mini"))
            object.mini = $root.GamerMini.toObject(message.mini, options);
        if (message.ai != null && message.hasOwnProperty("ai"))
            object.ai = message.ai;
        return object;
    };

    /**
     * Converts this GamerMatch to JSON.
     * @function toJSON
     * @memberof GamerMatch
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamerMatch.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GamerMatch;
})();

/**
 * PVPType enum.
 * @exports PVPType
 * @enum {string}
 * @property {number} MINVALID=0 MINVALID value
 * @property {number} M1V1=100 M1V1 value
 * @property {number} M2V2=103 M2V2 value
 * @property {number} M3V3=104 M3V3 value
 * @property {number} M5V5=105 M5V5 value
 * @property {number} M1V10=106 M1V10 value
 * @property {number} M2V10=107 M2V10 value
 * @property {number} RankM3v3=200 RankM3v3 value
 * @property {number} RankM5v5=201 RankM5v5 value
 * @property {number} TeamM1v1=301 TeamM1v1 value
 * @property {number} C2V2=401 C2V2 value
 * @property {number} C3V3=402 C3V3 value
 * @property {number} C5V5=403 C5V5 value
 * @property {number} H3V3=501 H3V3 value
 * @property {number} RankH3V3=502 RankH3V3 value
 * @property {number} Conscript3v3=601 Conscript3v3 value
 * @property {number} M1=1000 M1 value
 * @property {number} MT1=2000 MT1 value
 * @property {number} MT1V1=2001 MT1V1 value
 * @property {number} MT2V2=2002 MT2V2 value
 * @property {number} MT3V3=2003 MT3V3 value
 */
$root.PVPType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "MINVALID"] = 0;
    values[valuesById[100] = "M1V1"] = 100;
    values[valuesById[103] = "M2V2"] = 103;
    values[valuesById[104] = "M3V3"] = 104;
    values[valuesById[105] = "M5V5"] = 105;
    values[valuesById[106] = "M1V10"] = 106;
    values[valuesById[107] = "M2V10"] = 107;
    values[valuesById[200] = "RankM3v3"] = 200;
    values[valuesById[201] = "RankM5v5"] = 201;
    values[valuesById[301] = "TeamM1v1"] = 301;
    values[valuesById[401] = "C2V2"] = 401;
    values[valuesById[402] = "C3V3"] = 402;
    values[valuesById[403] = "C5V5"] = 403;
    values[valuesById[501] = "H3V3"] = 501;
    values[valuesById[502] = "RankH3V3"] = 502;
    values[valuesById[601] = "Conscript3v3"] = 601;
    values[valuesById[1000] = "M1"] = 1000;
    values[valuesById[2000] = "MT1"] = 2000;
    values[valuesById[2001] = "MT1V1"] = 2001;
    values[valuesById[2002] = "MT2V2"] = 2002;
    values[valuesById[2003] = "MT3V3"] = 2003;
    return values;
})();

$root.MatchInfo = (function() {

    /**
     * Properties of a MatchInfo.
     * @exports IMatchInfo
     * @interface IMatchInfo
     * @property {string|null} [session] MatchInfo session
     * @property {number|Long|null} [time] MatchInfo time
     * @property {string|null} [addr] MatchInfo addr
     * @property {number|null} [frameDelta] MatchInfo frameDelta
     * @property {number|null} [minFrameDelta] MatchInfo minFrameDelta
     * @property {number|null} [matchTime] MatchInfo matchTime
     * @property {number|null} [inputDelta] MatchInfo inputDelta
     * @property {number|null} [pvpType] MatchInfo pvpType
     * @property {boolean|null} [threadRecv] MatchInfo threadRecv
     * @property {Array.<IGamerMatch>|null} [gamers] MatchInfo gamers
     */

    /**
     * Constructs a new MatchInfo.
     * @exports MatchInfo
     * @classdesc Represents a MatchInfo.
     * @implements IMatchInfo
     * @constructor
     * @param {IMatchInfo=} [properties] Properties to set
     */
    function MatchInfo(properties) {
        this.gamers = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MatchInfo session.
     * @member {string} session
     * @memberof MatchInfo
     * @instance
     */
    MatchInfo.prototype.session = "";

    /**
     * MatchInfo time.
     * @member {number|Long} time
     * @memberof MatchInfo
     * @instance
     */
    MatchInfo.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MatchInfo addr.
     * @member {string} addr
     * @memberof MatchInfo
     * @instance
     */
    MatchInfo.prototype.addr = "";

    /**
     * MatchInfo frameDelta.
     * @member {number} frameDelta
     * @memberof MatchInfo
     * @instance
     */
    MatchInfo.prototype.frameDelta = 0;

    /**
     * MatchInfo minFrameDelta.
     * @member {number} minFrameDelta
     * @memberof MatchInfo
     * @instance
     */
    MatchInfo.prototype.minFrameDelta = 0;

    /**
     * MatchInfo matchTime.
     * @member {number} matchTime
     * @memberof MatchInfo
     * @instance
     */
    MatchInfo.prototype.matchTime = 0;

    /**
     * MatchInfo inputDelta.
     * @member {number} inputDelta
     * @memberof MatchInfo
     * @instance
     */
    MatchInfo.prototype.inputDelta = 0;

    /**
     * MatchInfo pvpType.
     * @member {number} pvpType
     * @memberof MatchInfo
     * @instance
     */
    MatchInfo.prototype.pvpType = 0;

    /**
     * MatchInfo threadRecv.
     * @member {boolean} threadRecv
     * @memberof MatchInfo
     * @instance
     */
    MatchInfo.prototype.threadRecv = false;

    /**
     * MatchInfo gamers.
     * @member {Array.<IGamerMatch>} gamers
     * @memberof MatchInfo
     * @instance
     */
    MatchInfo.prototype.gamers = $util.emptyArray;

    /**
     * Creates a new MatchInfo instance using the specified properties.
     * @function create
     * @memberof MatchInfo
     * @static
     * @param {IMatchInfo=} [properties] Properties to set
     * @returns {MatchInfo} MatchInfo instance
     */
    MatchInfo.create = function create(properties) {
        return new MatchInfo(properties);
    };

    /**
     * Encodes the specified MatchInfo message. Does not implicitly {@link MatchInfo.verify|verify} messages.
     * @function encode
     * @memberof MatchInfo
     * @static
     * @param {IMatchInfo} message MatchInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MatchInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.session != null && message.hasOwnProperty("session"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.session);
        if (message.time != null && message.hasOwnProperty("time"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.time);
        if (message.addr != null && message.hasOwnProperty("addr"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.addr);
        if (message.frameDelta != null && message.hasOwnProperty("frameDelta"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.frameDelta);
        if (message.minFrameDelta != null && message.hasOwnProperty("minFrameDelta"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.minFrameDelta);
        if (message.matchTime != null && message.hasOwnProperty("matchTime"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.matchTime);
        if (message.inputDelta != null && message.hasOwnProperty("inputDelta"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.inputDelta);
        if (message.pvpType != null && message.hasOwnProperty("pvpType"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.pvpType);
        if (message.threadRecv != null && message.hasOwnProperty("threadRecv"))
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.threadRecv);
        if (message.gamers != null && message.gamers.length)
            for (var i = 0; i < message.gamers.length; ++i)
                $root.GamerMatch.encode(message.gamers[i], writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified MatchInfo message, length delimited. Does not implicitly {@link MatchInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MatchInfo
     * @static
     * @param {IMatchInfo} message MatchInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MatchInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MatchInfo message from the specified reader or buffer.
     * @function decode
     * @memberof MatchInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MatchInfo} MatchInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MatchInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MatchInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.session = reader.string();
                break;
            case 2:
                message.time = reader.int64();
                break;
            case 3:
                message.addr = reader.string();
                break;
            case 4:
                message.frameDelta = reader.int32();
                break;
            case 5:
                message.minFrameDelta = reader.int32();
                break;
            case 6:
                message.matchTime = reader.int32();
                break;
            case 7:
                message.inputDelta = reader.int32();
                break;
            case 8:
                message.pvpType = reader.int32();
                break;
            case 9:
                message.threadRecv = reader.bool();
                break;
            case 100:
                if (!(message.gamers && message.gamers.length))
                    message.gamers = [];
                message.gamers.push($root.GamerMatch.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MatchInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MatchInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MatchInfo} MatchInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MatchInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MatchInfo message.
     * @function verify
     * @memberof MatchInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MatchInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.session != null && message.hasOwnProperty("session"))
            if (!$util.isString(message.session))
                return "session: string expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                return "time: integer|Long expected";
        if (message.addr != null && message.hasOwnProperty("addr"))
            if (!$util.isString(message.addr))
                return "addr: string expected";
        if (message.frameDelta != null && message.hasOwnProperty("frameDelta"))
            if (!$util.isInteger(message.frameDelta))
                return "frameDelta: integer expected";
        if (message.minFrameDelta != null && message.hasOwnProperty("minFrameDelta"))
            if (!$util.isInteger(message.minFrameDelta))
                return "minFrameDelta: integer expected";
        if (message.matchTime != null && message.hasOwnProperty("matchTime"))
            if (!$util.isInteger(message.matchTime))
                return "matchTime: integer expected";
        if (message.inputDelta != null && message.hasOwnProperty("inputDelta"))
            if (!$util.isInteger(message.inputDelta))
                return "inputDelta: integer expected";
        if (message.pvpType != null && message.hasOwnProperty("pvpType"))
            if (!$util.isInteger(message.pvpType))
                return "pvpType: integer expected";
        if (message.threadRecv != null && message.hasOwnProperty("threadRecv"))
            if (typeof message.threadRecv !== "boolean")
                return "threadRecv: boolean expected";
        if (message.gamers != null && message.hasOwnProperty("gamers")) {
            if (!Array.isArray(message.gamers))
                return "gamers: array expected";
            for (var i = 0; i < message.gamers.length; ++i) {
                var error = $root.GamerMatch.verify(message.gamers[i]);
                if (error)
                    return "gamers." + error;
            }
        }
        return null;
    };

    /**
     * Creates a MatchInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MatchInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MatchInfo} MatchInfo
     */
    MatchInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.MatchInfo)
            return object;
        var message = new $root.MatchInfo();
        if (object.session != null)
            message.session = String(object.session);
        if (object.time != null)
            if ($util.Long)
                (message.time = $util.Long.fromValue(object.time)).unsigned = false;
            else if (typeof object.time === "string")
                message.time = parseInt(object.time, 10);
            else if (typeof object.time === "number")
                message.time = object.time;
            else if (typeof object.time === "object")
                message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
        if (object.addr != null)
            message.addr = String(object.addr);
        if (object.frameDelta != null)
            message.frameDelta = object.frameDelta | 0;
        if (object.minFrameDelta != null)
            message.minFrameDelta = object.minFrameDelta | 0;
        if (object.matchTime != null)
            message.matchTime = object.matchTime | 0;
        if (object.inputDelta != null)
            message.inputDelta = object.inputDelta | 0;
        if (object.pvpType != null)
            message.pvpType = object.pvpType | 0;
        if (object.threadRecv != null)
            message.threadRecv = Boolean(object.threadRecv);
        if (object.gamers) {
            if (!Array.isArray(object.gamers))
                throw TypeError(".MatchInfo.gamers: array expected");
            message.gamers = [];
            for (var i = 0; i < object.gamers.length; ++i) {
                if (typeof object.gamers[i] !== "object")
                    throw TypeError(".MatchInfo.gamers: object expected");
                message.gamers[i] = $root.GamerMatch.fromObject(object.gamers[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a MatchInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MatchInfo
     * @static
     * @param {MatchInfo} message MatchInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MatchInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.gamers = [];
        if (options.defaults) {
            object.session = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.time = options.longs === String ? "0" : 0;
            object.addr = "";
            object.frameDelta = 0;
            object.minFrameDelta = 0;
            object.matchTime = 0;
            object.inputDelta = 0;
            object.pvpType = 0;
            object.threadRecv = false;
        }
        if (message.session != null && message.hasOwnProperty("session"))
            object.session = message.session;
        if (message.time != null && message.hasOwnProperty("time"))
            if (typeof message.time === "number")
                object.time = options.longs === String ? String(message.time) : message.time;
            else
                object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
        if (message.addr != null && message.hasOwnProperty("addr"))
            object.addr = message.addr;
        if (message.frameDelta != null && message.hasOwnProperty("frameDelta"))
            object.frameDelta = message.frameDelta;
        if (message.minFrameDelta != null && message.hasOwnProperty("minFrameDelta"))
            object.minFrameDelta = message.minFrameDelta;
        if (message.matchTime != null && message.hasOwnProperty("matchTime"))
            object.matchTime = message.matchTime;
        if (message.inputDelta != null && message.hasOwnProperty("inputDelta"))
            object.inputDelta = message.inputDelta;
        if (message.pvpType != null && message.hasOwnProperty("pvpType"))
            object.pvpType = message.pvpType;
        if (message.threadRecv != null && message.hasOwnProperty("threadRecv"))
            object.threadRecv = message.threadRecv;
        if (message.gamers && message.gamers.length) {
            object.gamers = [];
            for (var j = 0; j < message.gamers.length; ++j)
                object.gamers[j] = $root.GamerMatch.toObject(message.gamers[j], options);
        }
        return object;
    };

    /**
     * Converts this MatchInfo to JSON.
     * @function toJSON
     * @memberof MatchInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MatchInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MatchInfo;
})();

$root.PVPInput = (function() {

    /**
     * Properties of a PVPInput.
     * @exports IPVPInput
     * @interface IPVPInput
     * @property {number|null} [id] PVPInput id
     * @property {number|null} [yaw] PVPInput yaw
     * @property {number|null} [btn] PVPInput btn
     * @property {number|null} [pos] PVPInput pos
     * @property {number|null} [talk] PVPInput talk
     */

    /**
     * Constructs a new PVPInput.
     * @exports PVPInput
     * @classdesc Represents a PVPInput.
     * @implements IPVPInput
     * @constructor
     * @param {IPVPInput=} [properties] Properties to set
     */
    function PVPInput(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PVPInput id.
     * @member {number} id
     * @memberof PVPInput
     * @instance
     */
    PVPInput.prototype.id = 0;

    /**
     * PVPInput yaw.
     * @member {number} yaw
     * @memberof PVPInput
     * @instance
     */
    PVPInput.prototype.yaw = 0;

    /**
     * PVPInput btn.
     * @member {number} btn
     * @memberof PVPInput
     * @instance
     */
    PVPInput.prototype.btn = 0;

    /**
     * PVPInput pos.
     * @member {number} pos
     * @memberof PVPInput
     * @instance
     */
    PVPInput.prototype.pos = 0;

    /**
     * PVPInput talk.
     * @member {number} talk
     * @memberof PVPInput
     * @instance
     */
    PVPInput.prototype.talk = 0;

    /**
     * Creates a new PVPInput instance using the specified properties.
     * @function create
     * @memberof PVPInput
     * @static
     * @param {IPVPInput=} [properties] Properties to set
     * @returns {PVPInput} PVPInput instance
     */
    PVPInput.create = function create(properties) {
        return new PVPInput(properties);
    };

    /**
     * Encodes the specified PVPInput message. Does not implicitly {@link PVPInput.verify|verify} messages.
     * @function encode
     * @memberof PVPInput
     * @static
     * @param {IPVPInput} message PVPInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PVPInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.yaw != null && message.hasOwnProperty("yaw"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.yaw);
        if (message.btn != null && message.hasOwnProperty("btn"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.btn);
        if (message.pos != null && message.hasOwnProperty("pos"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.pos);
        if (message.talk != null && message.hasOwnProperty("talk"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.talk);
        return writer;
    };

    /**
     * Encodes the specified PVPInput message, length delimited. Does not implicitly {@link PVPInput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PVPInput
     * @static
     * @param {IPVPInput} message PVPInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PVPInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PVPInput message from the specified reader or buffer.
     * @function decode
     * @memberof PVPInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PVPInput} PVPInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PVPInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PVPInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.yaw = reader.int32();
                break;
            case 3:
                message.btn = reader.int32();
                break;
            case 4:
                message.pos = reader.int32();
                break;
            case 5:
                message.talk = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PVPInput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PVPInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PVPInput} PVPInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PVPInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PVPInput message.
     * @function verify
     * @memberof PVPInput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PVPInput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.yaw != null && message.hasOwnProperty("yaw"))
            if (!$util.isInteger(message.yaw))
                return "yaw: integer expected";
        if (message.btn != null && message.hasOwnProperty("btn"))
            if (!$util.isInteger(message.btn))
                return "btn: integer expected";
        if (message.pos != null && message.hasOwnProperty("pos"))
            if (!$util.isInteger(message.pos))
                return "pos: integer expected";
        if (message.talk != null && message.hasOwnProperty("talk"))
            if (!$util.isInteger(message.talk))
                return "talk: integer expected";
        return null;
    };

    /**
     * Creates a PVPInput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PVPInput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PVPInput} PVPInput
     */
    PVPInput.fromObject = function fromObject(object) {
        if (object instanceof $root.PVPInput)
            return object;
        var message = new $root.PVPInput();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.yaw != null)
            message.yaw = object.yaw | 0;
        if (object.btn != null)
            message.btn = object.btn | 0;
        if (object.pos != null)
            message.pos = object.pos | 0;
        if (object.talk != null)
            message.talk = object.talk | 0;
        return message;
    };

    /**
     * Creates a plain object from a PVPInput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PVPInput
     * @static
     * @param {PVPInput} message PVPInput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PVPInput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.yaw = 0;
            object.btn = 0;
            object.pos = 0;
            object.talk = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.yaw != null && message.hasOwnProperty("yaw"))
            object.yaw = message.yaw;
        if (message.btn != null && message.hasOwnProperty("btn"))
            object.btn = message.btn;
        if (message.pos != null && message.hasOwnProperty("pos"))
            object.pos = message.pos;
        if (message.talk != null && message.hasOwnProperty("talk"))
            object.talk = message.talk;
        return object;
    };

    /**
     * Converts this PVPInput to JSON.
     * @function toJSON
     * @memberof PVPInput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PVPInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PVPInput;
})();

$root.PVPFrame = (function() {

    /**
     * Properties of a PVPFrame.
     * @exports IPVPFrame
     * @interface IPVPFrame
     * @property {number|null} [delta] PVPFrame delta
     * @property {number|null} [frame] PVPFrame frame
     * @property {boolean|null} [end] PVPFrame end
     * @property {Array.<IPVPInput>|null} [inputs] PVPFrame inputs
     */

    /**
     * Constructs a new PVPFrame.
     * @exports PVPFrame
     * @classdesc Represents a PVPFrame.
     * @implements IPVPFrame
     * @constructor
     * @param {IPVPFrame=} [properties] Properties to set
     */
    function PVPFrame(properties) {
        this.inputs = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PVPFrame delta.
     * @member {number} delta
     * @memberof PVPFrame
     * @instance
     */
    PVPFrame.prototype.delta = 0;

    /**
     * PVPFrame frame.
     * @member {number} frame
     * @memberof PVPFrame
     * @instance
     */
    PVPFrame.prototype.frame = 0;

    /**
     * PVPFrame end.
     * @member {boolean} end
     * @memberof PVPFrame
     * @instance
     */
    PVPFrame.prototype.end = false;

    /**
     * PVPFrame inputs.
     * @member {Array.<IPVPInput>} inputs
     * @memberof PVPFrame
     * @instance
     */
    PVPFrame.prototype.inputs = $util.emptyArray;

    /**
     * Creates a new PVPFrame instance using the specified properties.
     * @function create
     * @memberof PVPFrame
     * @static
     * @param {IPVPFrame=} [properties] Properties to set
     * @returns {PVPFrame} PVPFrame instance
     */
    PVPFrame.create = function create(properties) {
        return new PVPFrame(properties);
    };

    /**
     * Encodes the specified PVPFrame message. Does not implicitly {@link PVPFrame.verify|verify} messages.
     * @function encode
     * @memberof PVPFrame
     * @static
     * @param {IPVPFrame} message PVPFrame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PVPFrame.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.delta != null && message.hasOwnProperty("delta"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.delta);
        if (message.frame != null && message.hasOwnProperty("frame"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.frame);
        if (message.end != null && message.hasOwnProperty("end"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.end);
        if (message.inputs != null && message.inputs.length)
            for (var i = 0; i < message.inputs.length; ++i)
                $root.PVPInput.encode(message.inputs[i], writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PVPFrame message, length delimited. Does not implicitly {@link PVPFrame.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PVPFrame
     * @static
     * @param {IPVPFrame} message PVPFrame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PVPFrame.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PVPFrame message from the specified reader or buffer.
     * @function decode
     * @memberof PVPFrame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PVPFrame} PVPFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PVPFrame.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PVPFrame();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.delta = reader.int32();
                break;
            case 2:
                message.frame = reader.int32();
                break;
            case 3:
                message.end = reader.bool();
                break;
            case 100:
                if (!(message.inputs && message.inputs.length))
                    message.inputs = [];
                message.inputs.push($root.PVPInput.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PVPFrame message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PVPFrame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PVPFrame} PVPFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PVPFrame.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PVPFrame message.
     * @function verify
     * @memberof PVPFrame
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PVPFrame.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.delta != null && message.hasOwnProperty("delta"))
            if (!$util.isInteger(message.delta))
                return "delta: integer expected";
        if (message.frame != null && message.hasOwnProperty("frame"))
            if (!$util.isInteger(message.frame))
                return "frame: integer expected";
        if (message.end != null && message.hasOwnProperty("end"))
            if (typeof message.end !== "boolean")
                return "end: boolean expected";
        if (message.inputs != null && message.hasOwnProperty("inputs")) {
            if (!Array.isArray(message.inputs))
                return "inputs: array expected";
            for (var i = 0; i < message.inputs.length; ++i) {
                var error = $root.PVPInput.verify(message.inputs[i]);
                if (error)
                    return "inputs." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PVPFrame message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PVPFrame
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PVPFrame} PVPFrame
     */
    PVPFrame.fromObject = function fromObject(object) {
        if (object instanceof $root.PVPFrame)
            return object;
        var message = new $root.PVPFrame();
        if (object.delta != null)
            message.delta = object.delta | 0;
        if (object.frame != null)
            message.frame = object.frame | 0;
        if (object.end != null)
            message.end = Boolean(object.end);
        if (object.inputs) {
            if (!Array.isArray(object.inputs))
                throw TypeError(".PVPFrame.inputs: array expected");
            message.inputs = [];
            for (var i = 0; i < object.inputs.length; ++i) {
                if (typeof object.inputs[i] !== "object")
                    throw TypeError(".PVPFrame.inputs: object expected");
                message.inputs[i] = $root.PVPInput.fromObject(object.inputs[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a PVPFrame message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PVPFrame
     * @static
     * @param {PVPFrame} message PVPFrame
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PVPFrame.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.inputs = [];
        if (options.defaults) {
            object.delta = 0;
            object.frame = 0;
            object.end = false;
        }
        if (message.delta != null && message.hasOwnProperty("delta"))
            object.delta = message.delta;
        if (message.frame != null && message.hasOwnProperty("frame"))
            object.frame = message.frame;
        if (message.end != null && message.hasOwnProperty("end"))
            object.end = message.end;
        if (message.inputs && message.inputs.length) {
            object.inputs = [];
            for (var j = 0; j < message.inputs.length; ++j)
                object.inputs[j] = $root.PVPInput.toObject(message.inputs[j], options);
        }
        return object;
    };

    /**
     * Converts this PVPFrame to JSON.
     * @function toJSON
     * @memberof PVPFrame
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PVPFrame.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PVPFrame;
})();

$root.PVPFrames = (function() {

    /**
     * Properties of a PVPFrames.
     * @exports IPVPFrames
     * @interface IPVPFrames
     * @property {Array.<IPVPFrame>|null} [frames] PVPFrames frames
     */

    /**
     * Constructs a new PVPFrames.
     * @exports PVPFrames
     * @classdesc Represents a PVPFrames.
     * @implements IPVPFrames
     * @constructor
     * @param {IPVPFrames=} [properties] Properties to set
     */
    function PVPFrames(properties) {
        this.frames = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PVPFrames frames.
     * @member {Array.<IPVPFrame>} frames
     * @memberof PVPFrames
     * @instance
     */
    PVPFrames.prototype.frames = $util.emptyArray;

    /**
     * Creates a new PVPFrames instance using the specified properties.
     * @function create
     * @memberof PVPFrames
     * @static
     * @param {IPVPFrames=} [properties] Properties to set
     * @returns {PVPFrames} PVPFrames instance
     */
    PVPFrames.create = function create(properties) {
        return new PVPFrames(properties);
    };

    /**
     * Encodes the specified PVPFrames message. Does not implicitly {@link PVPFrames.verify|verify} messages.
     * @function encode
     * @memberof PVPFrames
     * @static
     * @param {IPVPFrames} message PVPFrames message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PVPFrames.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.frames != null && message.frames.length)
            for (var i = 0; i < message.frames.length; ++i)
                $root.PVPFrame.encode(message.frames[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PVPFrames message, length delimited. Does not implicitly {@link PVPFrames.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PVPFrames
     * @static
     * @param {IPVPFrames} message PVPFrames message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PVPFrames.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PVPFrames message from the specified reader or buffer.
     * @function decode
     * @memberof PVPFrames
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PVPFrames} PVPFrames
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PVPFrames.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PVPFrames();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.frames && message.frames.length))
                    message.frames = [];
                message.frames.push($root.PVPFrame.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PVPFrames message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PVPFrames
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PVPFrames} PVPFrames
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PVPFrames.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PVPFrames message.
     * @function verify
     * @memberof PVPFrames
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PVPFrames.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.frames != null && message.hasOwnProperty("frames")) {
            if (!Array.isArray(message.frames))
                return "frames: array expected";
            for (var i = 0; i < message.frames.length; ++i) {
                var error = $root.PVPFrame.verify(message.frames[i]);
                if (error)
                    return "frames." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PVPFrames message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PVPFrames
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PVPFrames} PVPFrames
     */
    PVPFrames.fromObject = function fromObject(object) {
        if (object instanceof $root.PVPFrames)
            return object;
        var message = new $root.PVPFrames();
        if (object.frames) {
            if (!Array.isArray(object.frames))
                throw TypeError(".PVPFrames.frames: array expected");
            message.frames = [];
            for (var i = 0; i < object.frames.length; ++i) {
                if (typeof object.frames[i] !== "object")
                    throw TypeError(".PVPFrames.frames: object expected");
                message.frames[i] = $root.PVPFrame.fromObject(object.frames[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a PVPFrames message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PVPFrames
     * @static
     * @param {PVPFrames} message PVPFrames
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PVPFrames.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.frames = [];
        if (message.frames && message.frames.length) {
            object.frames = [];
            for (var j = 0; j < message.frames.length; ++j)
                object.frames[j] = $root.PVPFrame.toObject(message.frames[j], options);
        }
        return object;
    };

    /**
     * Converts this PVPFrames to JSON.
     * @function toJSON
     * @memberof PVPFrames
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PVPFrames.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PVPFrames;
})();

$root.PVPResult = (function() {

    /**
     * Properties of a PVPResult.
     * @exports IPVPResult
     * @interface IPVPResult
     * @property {Array.<number>|null} [kills] PVPResult kills
     * @property {Array.<number>|null} [length] PVPResult length
     * @property {number|Long|null} [time] PVPResult time
     * @property {Array.<number>|null} [gone] PVPResult gone
     * @property {number|null} [version] PVPResult version
     * @property {IMatchInfo|null} [matchInfo] PVPResult matchInfo
     * @property {Array.<IPVPFrame>|null} [frames] PVPResult frames
     * @property {string|null} [md5] PVPResult md5
     */

    /**
     * Constructs a new PVPResult.
     * @exports PVPResult
     * @classdesc Represents a PVPResult.
     * @implements IPVPResult
     * @constructor
     * @param {IPVPResult=} [properties] Properties to set
     */
    function PVPResult(properties) {
        this.kills = [];
        this.length = [];
        this.gone = [];
        this.frames = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PVPResult kills.
     * @member {Array.<number>} kills
     * @memberof PVPResult
     * @instance
     */
    PVPResult.prototype.kills = $util.emptyArray;

    /**
     * PVPResult length.
     * @member {Array.<number>} length
     * @memberof PVPResult
     * @instance
     */
    PVPResult.prototype.length = $util.emptyArray;

    /**
     * PVPResult time.
     * @member {number|Long} time
     * @memberof PVPResult
     * @instance
     */
    PVPResult.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PVPResult gone.
     * @member {Array.<number>} gone
     * @memberof PVPResult
     * @instance
     */
    PVPResult.prototype.gone = $util.emptyArray;

    /**
     * PVPResult version.
     * @member {number} version
     * @memberof PVPResult
     * @instance
     */
    PVPResult.prototype.version = 0;

    /**
     * PVPResult matchInfo.
     * @member {IMatchInfo|null|undefined} matchInfo
     * @memberof PVPResult
     * @instance
     */
    PVPResult.prototype.matchInfo = null;

    /**
     * PVPResult frames.
     * @member {Array.<IPVPFrame>} frames
     * @memberof PVPResult
     * @instance
     */
    PVPResult.prototype.frames = $util.emptyArray;

    /**
     * PVPResult md5.
     * @member {string} md5
     * @memberof PVPResult
     * @instance
     */
    PVPResult.prototype.md5 = "";

    /**
     * Creates a new PVPResult instance using the specified properties.
     * @function create
     * @memberof PVPResult
     * @static
     * @param {IPVPResult=} [properties] Properties to set
     * @returns {PVPResult} PVPResult instance
     */
    PVPResult.create = function create(properties) {
        return new PVPResult(properties);
    };

    /**
     * Encodes the specified PVPResult message. Does not implicitly {@link PVPResult.verify|verify} messages.
     * @function encode
     * @memberof PVPResult
     * @static
     * @param {IPVPResult} message PVPResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PVPResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.kills != null && message.kills.length) {
            writer.uint32(/* id 1, wireType 2 =*/10).fork();
            for (var i = 0; i < message.kills.length; ++i)
                writer.int32(message.kills[i]);
            writer.ldelim();
        }
        if (message.length != null && message.length.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.length.length; ++i)
                writer.int32(message.length[i]);
            writer.ldelim();
        }
        if (message.time != null && message.hasOwnProperty("time"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.time);
        if (message.gone != null && message.gone.length) {
            writer.uint32(/* id 4, wireType 2 =*/34).fork();
            for (var i = 0; i < message.gone.length; ++i)
                writer.int32(message.gone[i]);
            writer.ldelim();
        }
        if (message.version != null && message.hasOwnProperty("version"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.version);
        if (message.matchInfo != null && message.hasOwnProperty("matchInfo"))
            $root.MatchInfo.encode(message.matchInfo, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
        if (message.frames != null && message.frames.length)
            for (var i = 0; i < message.frames.length; ++i)
                $root.PVPFrame.encode(message.frames[i], writer.uint32(/* id 102, wireType 2 =*/818).fork()).ldelim();
        if (message.md5 != null && message.hasOwnProperty("md5"))
            writer.uint32(/* id 103, wireType 2 =*/826).string(message.md5);
        return writer;
    };

    /**
     * Encodes the specified PVPResult message, length delimited. Does not implicitly {@link PVPResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PVPResult
     * @static
     * @param {IPVPResult} message PVPResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PVPResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PVPResult message from the specified reader or buffer.
     * @function decode
     * @memberof PVPResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PVPResult} PVPResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PVPResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PVPResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.kills && message.kills.length))
                    message.kills = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.kills.push(reader.int32());
                } else
                    message.kills.push(reader.int32());
                break;
            case 2:
                if (!(message.length && message.length.length))
                    message.length = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.length.push(reader.int32());
                } else
                    message.length.push(reader.int32());
                break;
            case 3:
                message.time = reader.int64();
                break;
            case 4:
                if (!(message.gone && message.gone.length))
                    message.gone = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.gone.push(reader.int32());
                } else
                    message.gone.push(reader.int32());
                break;
            case 5:
                message.version = reader.int32();
                break;
            case 101:
                message.matchInfo = $root.MatchInfo.decode(reader, reader.uint32());
                break;
            case 102:
                if (!(message.frames && message.frames.length))
                    message.frames = [];
                message.frames.push($root.PVPFrame.decode(reader, reader.uint32()));
                break;
            case 103:
                message.md5 = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PVPResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PVPResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PVPResult} PVPResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PVPResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PVPResult message.
     * @function verify
     * @memberof PVPResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PVPResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.kills != null && message.hasOwnProperty("kills")) {
            if (!Array.isArray(message.kills))
                return "kills: array expected";
            for (var i = 0; i < message.kills.length; ++i)
                if (!$util.isInteger(message.kills[i]))
                    return "kills: integer[] expected";
        }
        if (message.length != null && message.hasOwnProperty("length")) {
            if (!Array.isArray(message.length))
                return "length: array expected";
            for (var i = 0; i < message.length.length; ++i)
                if (!$util.isInteger(message.length[i]))
                    return "length: integer[] expected";
        }
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                return "time: integer|Long expected";
        if (message.gone != null && message.hasOwnProperty("gone")) {
            if (!Array.isArray(message.gone))
                return "gone: array expected";
            for (var i = 0; i < message.gone.length; ++i)
                if (!$util.isInteger(message.gone[i]))
                    return "gone: integer[] expected";
        }
        if (message.version != null && message.hasOwnProperty("version"))
            if (!$util.isInteger(message.version))
                return "version: integer expected";
        if (message.matchInfo != null && message.hasOwnProperty("matchInfo")) {
            var error = $root.MatchInfo.verify(message.matchInfo);
            if (error)
                return "matchInfo." + error;
        }
        if (message.frames != null && message.hasOwnProperty("frames")) {
            if (!Array.isArray(message.frames))
                return "frames: array expected";
            for (var i = 0; i < message.frames.length; ++i) {
                var error = $root.PVPFrame.verify(message.frames[i]);
                if (error)
                    return "frames." + error;
            }
        }
        if (message.md5 != null && message.hasOwnProperty("md5"))
            if (!$util.isString(message.md5))
                return "md5: string expected";
        return null;
    };

    /**
     * Creates a PVPResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PVPResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PVPResult} PVPResult
     */
    PVPResult.fromObject = function fromObject(object) {
        if (object instanceof $root.PVPResult)
            return object;
        var message = new $root.PVPResult();
        if (object.kills) {
            if (!Array.isArray(object.kills))
                throw TypeError(".PVPResult.kills: array expected");
            message.kills = [];
            for (var i = 0; i < object.kills.length; ++i)
                message.kills[i] = object.kills[i] | 0;
        }
        if (object.length) {
            if (!Array.isArray(object.length))
                throw TypeError(".PVPResult.length: array expected");
            message.length = [];
            for (var i = 0; i < object.length.length; ++i)
                message.length[i] = object.length[i] | 0;
        }
        if (object.time != null)
            if ($util.Long)
                (message.time = $util.Long.fromValue(object.time)).unsigned = false;
            else if (typeof object.time === "string")
                message.time = parseInt(object.time, 10);
            else if (typeof object.time === "number")
                message.time = object.time;
            else if (typeof object.time === "object")
                message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
        if (object.gone) {
            if (!Array.isArray(object.gone))
                throw TypeError(".PVPResult.gone: array expected");
            message.gone = [];
            for (var i = 0; i < object.gone.length; ++i)
                message.gone[i] = object.gone[i] | 0;
        }
        if (object.version != null)
            message.version = object.version | 0;
        if (object.matchInfo != null) {
            if (typeof object.matchInfo !== "object")
                throw TypeError(".PVPResult.matchInfo: object expected");
            message.matchInfo = $root.MatchInfo.fromObject(object.matchInfo);
        }
        if (object.frames) {
            if (!Array.isArray(object.frames))
                throw TypeError(".PVPResult.frames: array expected");
            message.frames = [];
            for (var i = 0; i < object.frames.length; ++i) {
                if (typeof object.frames[i] !== "object")
                    throw TypeError(".PVPResult.frames: object expected");
                message.frames[i] = $root.PVPFrame.fromObject(object.frames[i]);
            }
        }
        if (object.md5 != null)
            message.md5 = String(object.md5);
        return message;
    };

    /**
     * Creates a plain object from a PVPResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PVPResult
     * @static
     * @param {PVPResult} message PVPResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PVPResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.kills = [];
            object.length = [];
            object.gone = [];
            object.frames = [];
        }
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.time = options.longs === String ? "0" : 0;
            object.version = 0;
            object.matchInfo = null;
            object.md5 = "";
        }
        if (message.kills && message.kills.length) {
            object.kills = [];
            for (var j = 0; j < message.kills.length; ++j)
                object.kills[j] = message.kills[j];
        }
        if (message.length && message.length.length) {
            object.length = [];
            for (var j = 0; j < message.length.length; ++j)
                object.length[j] = message.length[j];
        }
        if (message.time != null && message.hasOwnProperty("time"))
            if (typeof message.time === "number")
                object.time = options.longs === String ? String(message.time) : message.time;
            else
                object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
        if (message.gone && message.gone.length) {
            object.gone = [];
            for (var j = 0; j < message.gone.length; ++j)
                object.gone[j] = message.gone[j];
        }
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        if (message.matchInfo != null && message.hasOwnProperty("matchInfo"))
            object.matchInfo = $root.MatchInfo.toObject(message.matchInfo, options);
        if (message.frames && message.frames.length) {
            object.frames = [];
            for (var j = 0; j < message.frames.length; ++j)
                object.frames[j] = $root.PVPFrame.toObject(message.frames[j], options);
        }
        if (message.md5 != null && message.hasOwnProperty("md5"))
            object.md5 = message.md5;
        return object;
    };

    /**
     * Converts this PVPResult to JSON.
     * @function toJSON
     * @memberof PVPResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PVPResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PVPResult;
})();

$root.RankLength = (function() {

    /**
     * Properties of a RankLength.
     * @exports IRankLength
     * @interface IRankLength
     * @property {number|null} [id] RankLength id
     * @property {number|null} [length] RankLength length
     * @property {number|null} [rank] RankLength rank
     * @property {IGamerMini|null} [mini] RankLength mini
     */

    /**
     * Constructs a new RankLength.
     * @exports RankLength
     * @classdesc Represents a RankLength.
     * @implements IRankLength
     * @constructor
     * @param {IRankLength=} [properties] Properties to set
     */
    function RankLength(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RankLength id.
     * @member {number} id
     * @memberof RankLength
     * @instance
     */
    RankLength.prototype.id = 0;

    /**
     * RankLength length.
     * @member {number} length
     * @memberof RankLength
     * @instance
     */
    RankLength.prototype.length = 0;

    /**
     * RankLength rank.
     * @member {number} rank
     * @memberof RankLength
     * @instance
     */
    RankLength.prototype.rank = 0;

    /**
     * RankLength mini.
     * @member {IGamerMini|null|undefined} mini
     * @memberof RankLength
     * @instance
     */
    RankLength.prototype.mini = null;

    /**
     * Creates a new RankLength instance using the specified properties.
     * @function create
     * @memberof RankLength
     * @static
     * @param {IRankLength=} [properties] Properties to set
     * @returns {RankLength} RankLength instance
     */
    RankLength.create = function create(properties) {
        return new RankLength(properties);
    };

    /**
     * Encodes the specified RankLength message. Does not implicitly {@link RankLength.verify|verify} messages.
     * @function encode
     * @memberof RankLength
     * @static
     * @param {IRankLength} message RankLength message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RankLength.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.length != null && message.hasOwnProperty("length"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.length);
        if (message.rank != null && message.hasOwnProperty("rank"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.rank);
        if (message.mini != null && message.hasOwnProperty("mini"))
            $root.GamerMini.encode(message.mini, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RankLength message, length delimited. Does not implicitly {@link RankLength.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RankLength
     * @static
     * @param {IRankLength} message RankLength message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RankLength.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RankLength message from the specified reader or buffer.
     * @function decode
     * @memberof RankLength
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RankLength} RankLength
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RankLength.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RankLength();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.length = reader.int32();
                break;
            case 3:
                message.rank = reader.int32();
                break;
            case 4:
                message.mini = $root.GamerMini.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RankLength message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RankLength
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RankLength} RankLength
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RankLength.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RankLength message.
     * @function verify
     * @memberof RankLength
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RankLength.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.length != null && message.hasOwnProperty("length"))
            if (!$util.isInteger(message.length))
                return "length: integer expected";
        if (message.rank != null && message.hasOwnProperty("rank"))
            if (!$util.isInteger(message.rank))
                return "rank: integer expected";
        if (message.mini != null && message.hasOwnProperty("mini")) {
            var error = $root.GamerMini.verify(message.mini);
            if (error)
                return "mini." + error;
        }
        return null;
    };

    /**
     * Creates a RankLength message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RankLength
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RankLength} RankLength
     */
    RankLength.fromObject = function fromObject(object) {
        if (object instanceof $root.RankLength)
            return object;
        var message = new $root.RankLength();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.length != null)
            message.length = object.length | 0;
        if (object.rank != null)
            message.rank = object.rank | 0;
        if (object.mini != null) {
            if (typeof object.mini !== "object")
                throw TypeError(".RankLength.mini: object expected");
            message.mini = $root.GamerMini.fromObject(object.mini);
        }
        return message;
    };

    /**
     * Creates a plain object from a RankLength message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RankLength
     * @static
     * @param {RankLength} message RankLength
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RankLength.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.length = 0;
            object.rank = 0;
            object.mini = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.length != null && message.hasOwnProperty("length"))
            object.length = message.length;
        if (message.rank != null && message.hasOwnProperty("rank"))
            object.rank = message.rank;
        if (message.mini != null && message.hasOwnProperty("mini"))
            object.mini = $root.GamerMini.toObject(message.mini, options);
        return object;
    };

    /**
     * Converts this RankLength to JSON.
     * @function toJSON
     * @memberof RankLength
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RankLength.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RankLength;
})();

$root.RoomInfo = (function() {

    /**
     * Properties of a RoomInfo.
     * @exports IRoomInfo
     * @interface IRoomInfo
     * @property {number|null} [id] RoomInfo id
     * @property {number|null} [type] RoomInfo type
     * @property {number|Long|null} [time] RoomInfo time
     * @property {Array.<IGamerMini>|null} [members] RoomInfo members
     */

    /**
     * Constructs a new RoomInfo.
     * @exports RoomInfo
     * @classdesc Represents a RoomInfo.
     * @implements IRoomInfo
     * @constructor
     * @param {IRoomInfo=} [properties] Properties to set
     */
    function RoomInfo(properties) {
        this.members = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RoomInfo id.
     * @member {number} id
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.id = 0;

    /**
     * RoomInfo type.
     * @member {number} type
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.type = 0;

    /**
     * RoomInfo time.
     * @member {number|Long} time
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RoomInfo members.
     * @member {Array.<IGamerMini>} members
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.members = $util.emptyArray;

    /**
     * Creates a new RoomInfo instance using the specified properties.
     * @function create
     * @memberof RoomInfo
     * @static
     * @param {IRoomInfo=} [properties] Properties to set
     * @returns {RoomInfo} RoomInfo instance
     */
    RoomInfo.create = function create(properties) {
        return new RoomInfo(properties);
    };

    /**
     * Encodes the specified RoomInfo message. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @function encode
     * @memberof RoomInfo
     * @static
     * @param {IRoomInfo} message RoomInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        if (message.time != null && message.hasOwnProperty("time"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.time);
        if (message.members != null && message.members.length)
            for (var i = 0; i < message.members.length; ++i)
                $root.GamerMini.encode(message.members[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoomInfo
     * @static
     * @param {IRoomInfo} message RoomInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoomInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RoomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoomInfo} RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.type = reader.int32();
                break;
            case 3:
                message.time = reader.int64();
                break;
            case 4:
                if (!(message.members && message.members.length))
                    message.members = [];
                message.members.push($root.GamerMini.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoomInfo} RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoomInfo message.
     * @function verify
     * @memberof RoomInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoomInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                return "time: integer|Long expected";
        if (message.members != null && message.hasOwnProperty("members")) {
            if (!Array.isArray(message.members))
                return "members: array expected";
            for (var i = 0; i < message.members.length; ++i) {
                var error = $root.GamerMini.verify(message.members[i]);
                if (error)
                    return "members." + error;
            }
        }
        return null;
    };

    /**
     * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RoomInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RoomInfo} RoomInfo
     */
    RoomInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.RoomInfo)
            return object;
        var message = new $root.RoomInfo();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.type != null)
            message.type = object.type | 0;
        if (object.time != null)
            if ($util.Long)
                (message.time = $util.Long.fromValue(object.time)).unsigned = false;
            else if (typeof object.time === "string")
                message.time = parseInt(object.time, 10);
            else if (typeof object.time === "number")
                message.time = object.time;
            else if (typeof object.time === "object")
                message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
        if (object.members) {
            if (!Array.isArray(object.members))
                throw TypeError(".RoomInfo.members: array expected");
            message.members = [];
            for (var i = 0; i < object.members.length; ++i) {
                if (typeof object.members[i] !== "object")
                    throw TypeError(".RoomInfo.members: object expected");
                message.members[i] = $root.GamerMini.fromObject(object.members[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RoomInfo
     * @static
     * @param {RoomInfo} message RoomInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RoomInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.members = [];
        if (options.defaults) {
            object.id = 0;
            object.type = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.time = options.longs === String ? "0" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.time != null && message.hasOwnProperty("time"))
            if (typeof message.time === "number")
                object.time = options.longs === String ? String(message.time) : message.time;
            else
                object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
        if (message.members && message.members.length) {
            object.members = [];
            for (var j = 0; j < message.members.length; ++j)
                object.members[j] = $root.GamerMini.toObject(message.members[j], options);
        }
        return object;
    };

    /**
     * Converts this RoomInfo to JSON.
     * @function toJSON
     * @memberof RoomInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RoomInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RoomInfo;
})();

$root.S2C = (function() {

    /**
     * Properties of a S2C.
     * @exports IS2C
     * @interface IS2C
     * @property {number|null} [error] S2C error
     * @property {string|null} [key] S2C key
     * @property {IGamerLoginS2C|null} [gamerLoginS2C] S2C gamerLoginS2C
     * @property {IGamerLoginGetDataS2C|null} [gamerLoginGetDataS2C] S2C gamerLoginGetDataS2C
     * @property {IServerTimeS2C|null} [serverTimeS2C] S2C serverTimeS2C
     * @property {IGamerNotifyLoginOtherS2C|null} [gamerNotifyLoginOtherS2C] S2C gamerNotifyLoginOtherS2C
     * @property {IGamerSubChatChannelS2C|null} [gamerSubChatChannelS2C] S2C gamerSubChatChannelS2C
     * @property {IGamerFriendChatS2C|null} [gamerFriendChatS2C] S2C gamerFriendChatS2C
     * @property {IGamerWorldChatS2C|null} [gamerWorldChatS2C] S2C gamerWorldChatS2C
     * @property {IGamerTestChatS2C|null} [gamerTestChatS2C] S2C gamerTestChatS2C
     * @property {IGamerClubRequestS2C|null} [gamerClubRequestS2C] S2C gamerClubRequestS2C
     * @property {IGamerNotifyNewChatS2C|null} [gamerNotifyNewChatS2C] S2C gamerNotifyNewChatS2C
     * @property {IGamerNewFriendReqS2C|null} [gamerNewFriendReqS2C] S2C gamerNewFriendReqS2C
     * @property {IGamerNotifyNewFriendReqS2C|null} [gamerNotifyNewFriendReqS2C] S2C gamerNotifyNewFriendReqS2C
     * @property {IGamerProcessFriendReqS2C|null} [gamerProcessFriendReqS2C] S2C gamerProcessFriendReqS2C
     * @property {IGamerNotifyNewFriendS2C|null} [gamerNotifyNewFriendS2C] S2C gamerNotifyNewFriendS2C
     * @property {IGamerNotifyNewMailS2C|null} [gamerNotifyNewMailS2C] S2C gamerNotifyNewMailS2C
     * @property {IGamerMatchS2C|null} [gamerMatchS2C] S2C gamerMatchS2C
     * @property {IGamerNotifyMatchInfoS2C|null} [gamerNotifyMatchInfoS2C] S2C gamerNotifyMatchInfoS2C
     * @property {IGamerPVPSyncS2C|null} [gamerPVPSyncS2C] S2C gamerPVPSyncS2C
     * @property {IGamerNotifyPVPSyncS2C|null} [gamerNotifyPVPSyncS2C] S2C gamerNotifyPVPSyncS2C
     * @property {IGamerNotifyNewPVPResultS2C|null} [gamerNotifyNewPVPResultS2C] S2C gamerNotifyNewPVPResultS2C
     * @property {IGamerNotifyIconChangeS2C|null} [gamerNotifyIconChangeS2C] S2C gamerNotifyIconChangeS2C
     * @property {IGamerGetRealTimeRankS2C|null} [gamerGetRealTimeRankS2C] S2C gamerGetRealTimeRankS2C
     * @property {IGamerCheckPVPBattleS2C|null} [gamerCheckPVPBattleS2C] S2C gamerCheckPVPBattleS2C
     * @property {IGamerUploadWXInfoS2C|null} [gamerUploadWXInfoS2C] S2C gamerUploadWXInfoS2C
     * @property {IGamerNewRoomS2C|null} [gamerNewRoomS2C] S2C gamerNewRoomS2C
     * @property {IGamerAddRoomS2C|null} [gamerAddRoomS2C] S2C gamerAddRoomS2C
     * @property {IGamerLeaveRoomS2C|null} [gamerLeaveRoomS2C] S2C gamerLeaveRoomS2C
     * @property {IGamerNotifyRoomInfoChangeS2C|null} [gamerNotifyRoomInfoChangeS2C] S2C gamerNotifyRoomInfoChangeS2C
     */

    /**
     * Constructs a new S2C.
     * @exports S2C
     * @classdesc Represents a S2C.
     * @implements IS2C
     * @constructor
     * @param {IS2C=} [properties] Properties to set
     */
    function S2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2C error.
     * @member {number} error
     * @memberof S2C
     * @instance
     */
    S2C.prototype.error = 0;

    /**
     * S2C key.
     * @member {string} key
     * @memberof S2C
     * @instance
     */
    S2C.prototype.key = "";

    /**
     * S2C gamerLoginS2C.
     * @member {IGamerLoginS2C|null|undefined} gamerLoginS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerLoginS2C = null;

    /**
     * S2C gamerLoginGetDataS2C.
     * @member {IGamerLoginGetDataS2C|null|undefined} gamerLoginGetDataS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerLoginGetDataS2C = null;

    /**
     * S2C serverTimeS2C.
     * @member {IServerTimeS2C|null|undefined} serverTimeS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.serverTimeS2C = null;

    /**
     * S2C gamerNotifyLoginOtherS2C.
     * @member {IGamerNotifyLoginOtherS2C|null|undefined} gamerNotifyLoginOtherS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerNotifyLoginOtherS2C = null;

    /**
     * S2C gamerSubChatChannelS2C.
     * @member {IGamerSubChatChannelS2C|null|undefined} gamerSubChatChannelS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerSubChatChannelS2C = null;

    /**
     * S2C gamerFriendChatS2C.
     * @member {IGamerFriendChatS2C|null|undefined} gamerFriendChatS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerFriendChatS2C = null;

    /**
     * S2C gamerWorldChatS2C.
     * @member {IGamerWorldChatS2C|null|undefined} gamerWorldChatS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerWorldChatS2C = null;

    /**
     * S2C gamerTestChatS2C.
     * @member {IGamerTestChatS2C|null|undefined} gamerTestChatS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerTestChatS2C = null;

    /**
     * S2C gamerClubRequestS2C.
     * @member {IGamerClubRequestS2C|null|undefined} gamerClubRequestS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerClubRequestS2C = null;

    /**
     * S2C gamerNotifyNewChatS2C.
     * @member {IGamerNotifyNewChatS2C|null|undefined} gamerNotifyNewChatS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerNotifyNewChatS2C = null;

    /**
     * S2C gamerNewFriendReqS2C.
     * @member {IGamerNewFriendReqS2C|null|undefined} gamerNewFriendReqS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerNewFriendReqS2C = null;

    /**
     * S2C gamerNotifyNewFriendReqS2C.
     * @member {IGamerNotifyNewFriendReqS2C|null|undefined} gamerNotifyNewFriendReqS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerNotifyNewFriendReqS2C = null;

    /**
     * S2C gamerProcessFriendReqS2C.
     * @member {IGamerProcessFriendReqS2C|null|undefined} gamerProcessFriendReqS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerProcessFriendReqS2C = null;

    /**
     * S2C gamerNotifyNewFriendS2C.
     * @member {IGamerNotifyNewFriendS2C|null|undefined} gamerNotifyNewFriendS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerNotifyNewFriendS2C = null;

    /**
     * S2C gamerNotifyNewMailS2C.
     * @member {IGamerNotifyNewMailS2C|null|undefined} gamerNotifyNewMailS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerNotifyNewMailS2C = null;

    /**
     * S2C gamerMatchS2C.
     * @member {IGamerMatchS2C|null|undefined} gamerMatchS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerMatchS2C = null;

    /**
     * S2C gamerNotifyMatchInfoS2C.
     * @member {IGamerNotifyMatchInfoS2C|null|undefined} gamerNotifyMatchInfoS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerNotifyMatchInfoS2C = null;

    /**
     * S2C gamerPVPSyncS2C.
     * @member {IGamerPVPSyncS2C|null|undefined} gamerPVPSyncS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerPVPSyncS2C = null;

    /**
     * S2C gamerNotifyPVPSyncS2C.
     * @member {IGamerNotifyPVPSyncS2C|null|undefined} gamerNotifyPVPSyncS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerNotifyPVPSyncS2C = null;

    /**
     * S2C gamerNotifyNewPVPResultS2C.
     * @member {IGamerNotifyNewPVPResultS2C|null|undefined} gamerNotifyNewPVPResultS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerNotifyNewPVPResultS2C = null;

    /**
     * S2C gamerNotifyIconChangeS2C.
     * @member {IGamerNotifyIconChangeS2C|null|undefined} gamerNotifyIconChangeS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerNotifyIconChangeS2C = null;

    /**
     * S2C gamerGetRealTimeRankS2C.
     * @member {IGamerGetRealTimeRankS2C|null|undefined} gamerGetRealTimeRankS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerGetRealTimeRankS2C = null;

    /**
     * S2C gamerCheckPVPBattleS2C.
     * @member {IGamerCheckPVPBattleS2C|null|undefined} gamerCheckPVPBattleS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerCheckPVPBattleS2C = null;

    /**
     * S2C gamerUploadWXInfoS2C.
     * @member {IGamerUploadWXInfoS2C|null|undefined} gamerUploadWXInfoS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerUploadWXInfoS2C = null;

    /**
     * S2C gamerNewRoomS2C.
     * @member {IGamerNewRoomS2C|null|undefined} gamerNewRoomS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerNewRoomS2C = null;

    /**
     * S2C gamerAddRoomS2C.
     * @member {IGamerAddRoomS2C|null|undefined} gamerAddRoomS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerAddRoomS2C = null;

    /**
     * S2C gamerLeaveRoomS2C.
     * @member {IGamerLeaveRoomS2C|null|undefined} gamerLeaveRoomS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerLeaveRoomS2C = null;

    /**
     * S2C gamerNotifyRoomInfoChangeS2C.
     * @member {IGamerNotifyRoomInfoChangeS2C|null|undefined} gamerNotifyRoomInfoChangeS2C
     * @memberof S2C
     * @instance
     */
    S2C.prototype.gamerNotifyRoomInfoChangeS2C = null;

    /**
     * Creates a new S2C instance using the specified properties.
     * @function create
     * @memberof S2C
     * @static
     * @param {IS2C=} [properties] Properties to set
     * @returns {S2C} S2C instance
     */
    S2C.create = function create(properties) {
        return new S2C(properties);
    };

    /**
     * Encodes the specified S2C message. Does not implicitly {@link S2C.verify|verify} messages.
     * @function encode
     * @memberof S2C
     * @static
     * @param {IS2C} message S2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
        if (message.key != null && message.hasOwnProperty("key"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
        if (message.gamerLoginS2C != null && message.hasOwnProperty("gamerLoginS2C"))
            $root.GamerLoginS2C.encode(message.gamerLoginS2C, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.gamerLoginGetDataS2C != null && message.hasOwnProperty("gamerLoginGetDataS2C"))
            $root.GamerLoginGetDataS2C.encode(message.gamerLoginGetDataS2C, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.serverTimeS2C != null && message.hasOwnProperty("serverTimeS2C"))
            $root.ServerTimeS2C.encode(message.serverTimeS2C, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.gamerNotifyLoginOtherS2C != null && message.hasOwnProperty("gamerNotifyLoginOtherS2C"))
            $root.GamerNotifyLoginOtherS2C.encode(message.gamerNotifyLoginOtherS2C, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.gamerSubChatChannelS2C != null && message.hasOwnProperty("gamerSubChatChannelS2C"))
            $root.GamerSubChatChannelS2C.encode(message.gamerSubChatChannelS2C, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.gamerFriendChatS2C != null && message.hasOwnProperty("gamerFriendChatS2C"))
            $root.GamerFriendChatS2C.encode(message.gamerFriendChatS2C, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.gamerWorldChatS2C != null && message.hasOwnProperty("gamerWorldChatS2C"))
            $root.GamerWorldChatS2C.encode(message.gamerWorldChatS2C, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.gamerTestChatS2C != null && message.hasOwnProperty("gamerTestChatS2C"))
            $root.GamerTestChatS2C.encode(message.gamerTestChatS2C, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.gamerClubRequestS2C != null && message.hasOwnProperty("gamerClubRequestS2C"))
            $root.GamerClubRequestS2C.encode(message.gamerClubRequestS2C, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.gamerNotifyNewChatS2C != null && message.hasOwnProperty("gamerNotifyNewChatS2C"))
            $root.GamerNotifyNewChatS2C.encode(message.gamerNotifyNewChatS2C, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.gamerNewFriendReqS2C != null && message.hasOwnProperty("gamerNewFriendReqS2C"))
            $root.GamerNewFriendReqS2C.encode(message.gamerNewFriendReqS2C, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.gamerNotifyNewFriendReqS2C != null && message.hasOwnProperty("gamerNotifyNewFriendReqS2C"))
            $root.GamerNotifyNewFriendReqS2C.encode(message.gamerNotifyNewFriendReqS2C, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.gamerProcessFriendReqS2C != null && message.hasOwnProperty("gamerProcessFriendReqS2C"))
            $root.GamerProcessFriendReqS2C.encode(message.gamerProcessFriendReqS2C, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.gamerNotifyNewFriendS2C != null && message.hasOwnProperty("gamerNotifyNewFriendS2C"))
            $root.GamerNotifyNewFriendS2C.encode(message.gamerNotifyNewFriendS2C, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.gamerNotifyNewMailS2C != null && message.hasOwnProperty("gamerNotifyNewMailS2C"))
            $root.GamerNotifyNewMailS2C.encode(message.gamerNotifyNewMailS2C, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.gamerMatchS2C != null && message.hasOwnProperty("gamerMatchS2C"))
            $root.GamerMatchS2C.encode(message.gamerMatchS2C, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        if (message.gamerNotifyMatchInfoS2C != null && message.hasOwnProperty("gamerNotifyMatchInfoS2C"))
            $root.GamerNotifyMatchInfoS2C.encode(message.gamerNotifyMatchInfoS2C, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
        if (message.gamerPVPSyncS2C != null && message.hasOwnProperty("gamerPVPSyncS2C"))
            $root.GamerPVPSyncS2C.encode(message.gamerPVPSyncS2C, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
        if (message.gamerNotifyPVPSyncS2C != null && message.hasOwnProperty("gamerNotifyPVPSyncS2C"))
            $root.GamerNotifyPVPSyncS2C.encode(message.gamerNotifyPVPSyncS2C, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
        if (message.gamerNotifyNewPVPResultS2C != null && message.hasOwnProperty("gamerNotifyNewPVPResultS2C"))
            $root.GamerNotifyNewPVPResultS2C.encode(message.gamerNotifyNewPVPResultS2C, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
        if (message.gamerNotifyIconChangeS2C != null && message.hasOwnProperty("gamerNotifyIconChangeS2C"))
            $root.GamerNotifyIconChangeS2C.encode(message.gamerNotifyIconChangeS2C, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
        if (message.gamerGetRealTimeRankS2C != null && message.hasOwnProperty("gamerGetRealTimeRankS2C"))
            $root.GamerGetRealTimeRankS2C.encode(message.gamerGetRealTimeRankS2C, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
        if (message.gamerCheckPVPBattleS2C != null && message.hasOwnProperty("gamerCheckPVPBattleS2C"))
            $root.GamerCheckPVPBattleS2C.encode(message.gamerCheckPVPBattleS2C, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
        if (message.gamerUploadWXInfoS2C != null && message.hasOwnProperty("gamerUploadWXInfoS2C"))
            $root.GamerUploadWXInfoS2C.encode(message.gamerUploadWXInfoS2C, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
        if (message.gamerNewRoomS2C != null && message.hasOwnProperty("gamerNewRoomS2C"))
            $root.GamerNewRoomS2C.encode(message.gamerNewRoomS2C, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
        if (message.gamerAddRoomS2C != null && message.hasOwnProperty("gamerAddRoomS2C"))
            $root.GamerAddRoomS2C.encode(message.gamerAddRoomS2C, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
        if (message.gamerLeaveRoomS2C != null && message.hasOwnProperty("gamerLeaveRoomS2C"))
            $root.GamerLeaveRoomS2C.encode(message.gamerLeaveRoomS2C, writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
        if (message.gamerNotifyRoomInfoChangeS2C != null && message.hasOwnProperty("gamerNotifyRoomInfoChangeS2C"))
            $root.GamerNotifyRoomInfoChangeS2C.encode(message.gamerNotifyRoomInfoChangeS2C, writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2C message, length delimited. Does not implicitly {@link S2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C
     * @static
     * @param {IS2C} message S2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C message from the specified reader or buffer.
     * @function decode
     * @memberof S2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C} S2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.int32();
                break;
            case 2:
                message.key = reader.string();
                break;
            case 3:
                message.gamerLoginS2C = $root.GamerLoginS2C.decode(reader, reader.uint32());
                break;
            case 4:
                message.gamerLoginGetDataS2C = $root.GamerLoginGetDataS2C.decode(reader, reader.uint32());
                break;
            case 5:
                message.serverTimeS2C = $root.ServerTimeS2C.decode(reader, reader.uint32());
                break;
            case 6:
                message.gamerNotifyLoginOtherS2C = $root.GamerNotifyLoginOtherS2C.decode(reader, reader.uint32());
                break;
            case 7:
                message.gamerSubChatChannelS2C = $root.GamerSubChatChannelS2C.decode(reader, reader.uint32());
                break;
            case 8:
                message.gamerFriendChatS2C = $root.GamerFriendChatS2C.decode(reader, reader.uint32());
                break;
            case 9:
                message.gamerWorldChatS2C = $root.GamerWorldChatS2C.decode(reader, reader.uint32());
                break;
            case 10:
                message.gamerTestChatS2C = $root.GamerTestChatS2C.decode(reader, reader.uint32());
                break;
            case 11:
                message.gamerClubRequestS2C = $root.GamerClubRequestS2C.decode(reader, reader.uint32());
                break;
            case 12:
                message.gamerNotifyNewChatS2C = $root.GamerNotifyNewChatS2C.decode(reader, reader.uint32());
                break;
            case 13:
                message.gamerNewFriendReqS2C = $root.GamerNewFriendReqS2C.decode(reader, reader.uint32());
                break;
            case 14:
                message.gamerNotifyNewFriendReqS2C = $root.GamerNotifyNewFriendReqS2C.decode(reader, reader.uint32());
                break;
            case 15:
                message.gamerProcessFriendReqS2C = $root.GamerProcessFriendReqS2C.decode(reader, reader.uint32());
                break;
            case 16:
                message.gamerNotifyNewFriendS2C = $root.GamerNotifyNewFriendS2C.decode(reader, reader.uint32());
                break;
            case 17:
                message.gamerNotifyNewMailS2C = $root.GamerNotifyNewMailS2C.decode(reader, reader.uint32());
                break;
            case 18:
                message.gamerMatchS2C = $root.GamerMatchS2C.decode(reader, reader.uint32());
                break;
            case 19:
                message.gamerNotifyMatchInfoS2C = $root.GamerNotifyMatchInfoS2C.decode(reader, reader.uint32());
                break;
            case 20:
                message.gamerPVPSyncS2C = $root.GamerPVPSyncS2C.decode(reader, reader.uint32());
                break;
            case 21:
                message.gamerNotifyPVPSyncS2C = $root.GamerNotifyPVPSyncS2C.decode(reader, reader.uint32());
                break;
            case 22:
                message.gamerNotifyNewPVPResultS2C = $root.GamerNotifyNewPVPResultS2C.decode(reader, reader.uint32());
                break;
            case 23:
                message.gamerNotifyIconChangeS2C = $root.GamerNotifyIconChangeS2C.decode(reader, reader.uint32());
                break;
            case 24:
                message.gamerGetRealTimeRankS2C = $root.GamerGetRealTimeRankS2C.decode(reader, reader.uint32());
                break;
            case 25:
                message.gamerCheckPVPBattleS2C = $root.GamerCheckPVPBattleS2C.decode(reader, reader.uint32());
                break;
            case 26:
                message.gamerUploadWXInfoS2C = $root.GamerUploadWXInfoS2C.decode(reader, reader.uint32());
                break;
            case 27:
                message.gamerNewRoomS2C = $root.GamerNewRoomS2C.decode(reader, reader.uint32());
                break;
            case 28:
                message.gamerAddRoomS2C = $root.GamerAddRoomS2C.decode(reader, reader.uint32());
                break;
            case 29:
                message.gamerLeaveRoomS2C = $root.GamerLeaveRoomS2C.decode(reader, reader.uint32());
                break;
            case 30:
                message.gamerNotifyRoomInfoChangeS2C = $root.GamerNotifyRoomInfoChangeS2C.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C} S2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C message.
     * @function verify
     * @memberof S2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isInteger(message.error))
                return "error: integer expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isString(message.key))
                return "key: string expected";
        if (message.gamerLoginS2C != null && message.hasOwnProperty("gamerLoginS2C")) {
            var error = $root.GamerLoginS2C.verify(message.gamerLoginS2C);
            if (error)
                return "gamerLoginS2C." + error;
        }
        if (message.gamerLoginGetDataS2C != null && message.hasOwnProperty("gamerLoginGetDataS2C")) {
            var error = $root.GamerLoginGetDataS2C.verify(message.gamerLoginGetDataS2C);
            if (error)
                return "gamerLoginGetDataS2C." + error;
        }
        if (message.serverTimeS2C != null && message.hasOwnProperty("serverTimeS2C")) {
            var error = $root.ServerTimeS2C.verify(message.serverTimeS2C);
            if (error)
                return "serverTimeS2C." + error;
        }
        if (message.gamerNotifyLoginOtherS2C != null && message.hasOwnProperty("gamerNotifyLoginOtherS2C")) {
            var error = $root.GamerNotifyLoginOtherS2C.verify(message.gamerNotifyLoginOtherS2C);
            if (error)
                return "gamerNotifyLoginOtherS2C." + error;
        }
        if (message.gamerSubChatChannelS2C != null && message.hasOwnProperty("gamerSubChatChannelS2C")) {
            var error = $root.GamerSubChatChannelS2C.verify(message.gamerSubChatChannelS2C);
            if (error)
                return "gamerSubChatChannelS2C." + error;
        }
        if (message.gamerFriendChatS2C != null && message.hasOwnProperty("gamerFriendChatS2C")) {
            var error = $root.GamerFriendChatS2C.verify(message.gamerFriendChatS2C);
            if (error)
                return "gamerFriendChatS2C." + error;
        }
        if (message.gamerWorldChatS2C != null && message.hasOwnProperty("gamerWorldChatS2C")) {
            var error = $root.GamerWorldChatS2C.verify(message.gamerWorldChatS2C);
            if (error)
                return "gamerWorldChatS2C." + error;
        }
        if (message.gamerTestChatS2C != null && message.hasOwnProperty("gamerTestChatS2C")) {
            var error = $root.GamerTestChatS2C.verify(message.gamerTestChatS2C);
            if (error)
                return "gamerTestChatS2C." + error;
        }
        if (message.gamerClubRequestS2C != null && message.hasOwnProperty("gamerClubRequestS2C")) {
            var error = $root.GamerClubRequestS2C.verify(message.gamerClubRequestS2C);
            if (error)
                return "gamerClubRequestS2C." + error;
        }
        if (message.gamerNotifyNewChatS2C != null && message.hasOwnProperty("gamerNotifyNewChatS2C")) {
            var error = $root.GamerNotifyNewChatS2C.verify(message.gamerNotifyNewChatS2C);
            if (error)
                return "gamerNotifyNewChatS2C." + error;
        }
        if (message.gamerNewFriendReqS2C != null && message.hasOwnProperty("gamerNewFriendReqS2C")) {
            var error = $root.GamerNewFriendReqS2C.verify(message.gamerNewFriendReqS2C);
            if (error)
                return "gamerNewFriendReqS2C." + error;
        }
        if (message.gamerNotifyNewFriendReqS2C != null && message.hasOwnProperty("gamerNotifyNewFriendReqS2C")) {
            var error = $root.GamerNotifyNewFriendReqS2C.verify(message.gamerNotifyNewFriendReqS2C);
            if (error)
                return "gamerNotifyNewFriendReqS2C." + error;
        }
        if (message.gamerProcessFriendReqS2C != null && message.hasOwnProperty("gamerProcessFriendReqS2C")) {
            var error = $root.GamerProcessFriendReqS2C.verify(message.gamerProcessFriendReqS2C);
            if (error)
                return "gamerProcessFriendReqS2C." + error;
        }
        if (message.gamerNotifyNewFriendS2C != null && message.hasOwnProperty("gamerNotifyNewFriendS2C")) {
            var error = $root.GamerNotifyNewFriendS2C.verify(message.gamerNotifyNewFriendS2C);
            if (error)
                return "gamerNotifyNewFriendS2C." + error;
        }
        if (message.gamerNotifyNewMailS2C != null && message.hasOwnProperty("gamerNotifyNewMailS2C")) {
            var error = $root.GamerNotifyNewMailS2C.verify(message.gamerNotifyNewMailS2C);
            if (error)
                return "gamerNotifyNewMailS2C." + error;
        }
        if (message.gamerMatchS2C != null && message.hasOwnProperty("gamerMatchS2C")) {
            var error = $root.GamerMatchS2C.verify(message.gamerMatchS2C);
            if (error)
                return "gamerMatchS2C." + error;
        }
        if (message.gamerNotifyMatchInfoS2C != null && message.hasOwnProperty("gamerNotifyMatchInfoS2C")) {
            var error = $root.GamerNotifyMatchInfoS2C.verify(message.gamerNotifyMatchInfoS2C);
            if (error)
                return "gamerNotifyMatchInfoS2C." + error;
        }
        if (message.gamerPVPSyncS2C != null && message.hasOwnProperty("gamerPVPSyncS2C")) {
            var error = $root.GamerPVPSyncS2C.verify(message.gamerPVPSyncS2C);
            if (error)
                return "gamerPVPSyncS2C." + error;
        }
        if (message.gamerNotifyPVPSyncS2C != null && message.hasOwnProperty("gamerNotifyPVPSyncS2C")) {
            var error = $root.GamerNotifyPVPSyncS2C.verify(message.gamerNotifyPVPSyncS2C);
            if (error)
                return "gamerNotifyPVPSyncS2C." + error;
        }
        if (message.gamerNotifyNewPVPResultS2C != null && message.hasOwnProperty("gamerNotifyNewPVPResultS2C")) {
            var error = $root.GamerNotifyNewPVPResultS2C.verify(message.gamerNotifyNewPVPResultS2C);
            if (error)
                return "gamerNotifyNewPVPResultS2C." + error;
        }
        if (message.gamerNotifyIconChangeS2C != null && message.hasOwnProperty("gamerNotifyIconChangeS2C")) {
            var error = $root.GamerNotifyIconChangeS2C.verify(message.gamerNotifyIconChangeS2C);
            if (error)
                return "gamerNotifyIconChangeS2C." + error;
        }
        if (message.gamerGetRealTimeRankS2C != null && message.hasOwnProperty("gamerGetRealTimeRankS2C")) {
            var error = $root.GamerGetRealTimeRankS2C.verify(message.gamerGetRealTimeRankS2C);
            if (error)
                return "gamerGetRealTimeRankS2C." + error;
        }
        if (message.gamerCheckPVPBattleS2C != null && message.hasOwnProperty("gamerCheckPVPBattleS2C")) {
            var error = $root.GamerCheckPVPBattleS2C.verify(message.gamerCheckPVPBattleS2C);
            if (error)
                return "gamerCheckPVPBattleS2C." + error;
        }
        if (message.gamerUploadWXInfoS2C != null && message.hasOwnProperty("gamerUploadWXInfoS2C")) {
            var error = $root.GamerUploadWXInfoS2C.verify(message.gamerUploadWXInfoS2C);
            if (error)
                return "gamerUploadWXInfoS2C." + error;
        }
        if (message.gamerNewRoomS2C != null && message.hasOwnProperty("gamerNewRoomS2C")) {
            var error = $root.GamerNewRoomS2C.verify(message.gamerNewRoomS2C);
            if (error)
                return "gamerNewRoomS2C." + error;
        }
        if (message.gamerAddRoomS2C != null && message.hasOwnProperty("gamerAddRoomS2C")) {
            var error = $root.GamerAddRoomS2C.verify(message.gamerAddRoomS2C);
            if (error)
                return "gamerAddRoomS2C." + error;
        }
        if (message.gamerLeaveRoomS2C != null && message.hasOwnProperty("gamerLeaveRoomS2C")) {
            var error = $root.GamerLeaveRoomS2C.verify(message.gamerLeaveRoomS2C);
            if (error)
                return "gamerLeaveRoomS2C." + error;
        }
        if (message.gamerNotifyRoomInfoChangeS2C != null && message.hasOwnProperty("gamerNotifyRoomInfoChangeS2C")) {
            var error = $root.GamerNotifyRoomInfoChangeS2C.verify(message.gamerNotifyRoomInfoChangeS2C);
            if (error)
                return "gamerNotifyRoomInfoChangeS2C." + error;
        }
        return null;
    };

    /**
     * Creates a S2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C} S2C
     */
    S2C.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C)
            return object;
        var message = new $root.S2C();
        if (object.error != null)
            message.error = object.error | 0;
        if (object.key != null)
            message.key = String(object.key);
        if (object.gamerLoginS2C != null) {
            if (typeof object.gamerLoginS2C !== "object")
                throw TypeError(".S2C.gamerLoginS2C: object expected");
            message.gamerLoginS2C = $root.GamerLoginS2C.fromObject(object.gamerLoginS2C);
        }
        if (object.gamerLoginGetDataS2C != null) {
            if (typeof object.gamerLoginGetDataS2C !== "object")
                throw TypeError(".S2C.gamerLoginGetDataS2C: object expected");
            message.gamerLoginGetDataS2C = $root.GamerLoginGetDataS2C.fromObject(object.gamerLoginGetDataS2C);
        }
        if (object.serverTimeS2C != null) {
            if (typeof object.serverTimeS2C !== "object")
                throw TypeError(".S2C.serverTimeS2C: object expected");
            message.serverTimeS2C = $root.ServerTimeS2C.fromObject(object.serverTimeS2C);
        }
        if (object.gamerNotifyLoginOtherS2C != null) {
            if (typeof object.gamerNotifyLoginOtherS2C !== "object")
                throw TypeError(".S2C.gamerNotifyLoginOtherS2C: object expected");
            message.gamerNotifyLoginOtherS2C = $root.GamerNotifyLoginOtherS2C.fromObject(object.gamerNotifyLoginOtherS2C);
        }
        if (object.gamerSubChatChannelS2C != null) {
            if (typeof object.gamerSubChatChannelS2C !== "object")
                throw TypeError(".S2C.gamerSubChatChannelS2C: object expected");
            message.gamerSubChatChannelS2C = $root.GamerSubChatChannelS2C.fromObject(object.gamerSubChatChannelS2C);
        }
        if (object.gamerFriendChatS2C != null) {
            if (typeof object.gamerFriendChatS2C !== "object")
                throw TypeError(".S2C.gamerFriendChatS2C: object expected");
            message.gamerFriendChatS2C = $root.GamerFriendChatS2C.fromObject(object.gamerFriendChatS2C);
        }
        if (object.gamerWorldChatS2C != null) {
            if (typeof object.gamerWorldChatS2C !== "object")
                throw TypeError(".S2C.gamerWorldChatS2C: object expected");
            message.gamerWorldChatS2C = $root.GamerWorldChatS2C.fromObject(object.gamerWorldChatS2C);
        }
        if (object.gamerTestChatS2C != null) {
            if (typeof object.gamerTestChatS2C !== "object")
                throw TypeError(".S2C.gamerTestChatS2C: object expected");
            message.gamerTestChatS2C = $root.GamerTestChatS2C.fromObject(object.gamerTestChatS2C);
        }
        if (object.gamerClubRequestS2C != null) {
            if (typeof object.gamerClubRequestS2C !== "object")
                throw TypeError(".S2C.gamerClubRequestS2C: object expected");
            message.gamerClubRequestS2C = $root.GamerClubRequestS2C.fromObject(object.gamerClubRequestS2C);
        }
        if (object.gamerNotifyNewChatS2C != null) {
            if (typeof object.gamerNotifyNewChatS2C !== "object")
                throw TypeError(".S2C.gamerNotifyNewChatS2C: object expected");
            message.gamerNotifyNewChatS2C = $root.GamerNotifyNewChatS2C.fromObject(object.gamerNotifyNewChatS2C);
        }
        if (object.gamerNewFriendReqS2C != null) {
            if (typeof object.gamerNewFriendReqS2C !== "object")
                throw TypeError(".S2C.gamerNewFriendReqS2C: object expected");
            message.gamerNewFriendReqS2C = $root.GamerNewFriendReqS2C.fromObject(object.gamerNewFriendReqS2C);
        }
        if (object.gamerNotifyNewFriendReqS2C != null) {
            if (typeof object.gamerNotifyNewFriendReqS2C !== "object")
                throw TypeError(".S2C.gamerNotifyNewFriendReqS2C: object expected");
            message.gamerNotifyNewFriendReqS2C = $root.GamerNotifyNewFriendReqS2C.fromObject(object.gamerNotifyNewFriendReqS2C);
        }
        if (object.gamerProcessFriendReqS2C != null) {
            if (typeof object.gamerProcessFriendReqS2C !== "object")
                throw TypeError(".S2C.gamerProcessFriendReqS2C: object expected");
            message.gamerProcessFriendReqS2C = $root.GamerProcessFriendReqS2C.fromObject(object.gamerProcessFriendReqS2C);
        }
        if (object.gamerNotifyNewFriendS2C != null) {
            if (typeof object.gamerNotifyNewFriendS2C !== "object")
                throw TypeError(".S2C.gamerNotifyNewFriendS2C: object expected");
            message.gamerNotifyNewFriendS2C = $root.GamerNotifyNewFriendS2C.fromObject(object.gamerNotifyNewFriendS2C);
        }
        if (object.gamerNotifyNewMailS2C != null) {
            if (typeof object.gamerNotifyNewMailS2C !== "object")
                throw TypeError(".S2C.gamerNotifyNewMailS2C: object expected");
            message.gamerNotifyNewMailS2C = $root.GamerNotifyNewMailS2C.fromObject(object.gamerNotifyNewMailS2C);
        }
        if (object.gamerMatchS2C != null) {
            if (typeof object.gamerMatchS2C !== "object")
                throw TypeError(".S2C.gamerMatchS2C: object expected");
            message.gamerMatchS2C = $root.GamerMatchS2C.fromObject(object.gamerMatchS2C);
        }
        if (object.gamerNotifyMatchInfoS2C != null) {
            if (typeof object.gamerNotifyMatchInfoS2C !== "object")
                throw TypeError(".S2C.gamerNotifyMatchInfoS2C: object expected");
            message.gamerNotifyMatchInfoS2C = $root.GamerNotifyMatchInfoS2C.fromObject(object.gamerNotifyMatchInfoS2C);
        }
        if (object.gamerPVPSyncS2C != null) {
            if (typeof object.gamerPVPSyncS2C !== "object")
                throw TypeError(".S2C.gamerPVPSyncS2C: object expected");
            message.gamerPVPSyncS2C = $root.GamerPVPSyncS2C.fromObject(object.gamerPVPSyncS2C);
        }
        if (object.gamerNotifyPVPSyncS2C != null) {
            if (typeof object.gamerNotifyPVPSyncS2C !== "object")
                throw TypeError(".S2C.gamerNotifyPVPSyncS2C: object expected");
            message.gamerNotifyPVPSyncS2C = $root.GamerNotifyPVPSyncS2C.fromObject(object.gamerNotifyPVPSyncS2C);
        }
        if (object.gamerNotifyNewPVPResultS2C != null) {
            if (typeof object.gamerNotifyNewPVPResultS2C !== "object")
                throw TypeError(".S2C.gamerNotifyNewPVPResultS2C: object expected");
            message.gamerNotifyNewPVPResultS2C = $root.GamerNotifyNewPVPResultS2C.fromObject(object.gamerNotifyNewPVPResultS2C);
        }
        if (object.gamerNotifyIconChangeS2C != null) {
            if (typeof object.gamerNotifyIconChangeS2C !== "object")
                throw TypeError(".S2C.gamerNotifyIconChangeS2C: object expected");
            message.gamerNotifyIconChangeS2C = $root.GamerNotifyIconChangeS2C.fromObject(object.gamerNotifyIconChangeS2C);
        }
        if (object.gamerGetRealTimeRankS2C != null) {
            if (typeof object.gamerGetRealTimeRankS2C !== "object")
                throw TypeError(".S2C.gamerGetRealTimeRankS2C: object expected");
            message.gamerGetRealTimeRankS2C = $root.GamerGetRealTimeRankS2C.fromObject(object.gamerGetRealTimeRankS2C);
        }
        if (object.gamerCheckPVPBattleS2C != null) {
            if (typeof object.gamerCheckPVPBattleS2C !== "object")
                throw TypeError(".S2C.gamerCheckPVPBattleS2C: object expected");
            message.gamerCheckPVPBattleS2C = $root.GamerCheckPVPBattleS2C.fromObject(object.gamerCheckPVPBattleS2C);
        }
        if (object.gamerUploadWXInfoS2C != null) {
            if (typeof object.gamerUploadWXInfoS2C !== "object")
                throw TypeError(".S2C.gamerUploadWXInfoS2C: object expected");
            message.gamerUploadWXInfoS2C = $root.GamerUploadWXInfoS2C.fromObject(object.gamerUploadWXInfoS2C);
        }
        if (object.gamerNewRoomS2C != null) {
            if (typeof object.gamerNewRoomS2C !== "object")
                throw TypeError(".S2C.gamerNewRoomS2C: object expected");
            message.gamerNewRoomS2C = $root.GamerNewRoomS2C.fromObject(object.gamerNewRoomS2C);
        }
        if (object.gamerAddRoomS2C != null) {
            if (typeof object.gamerAddRoomS2C !== "object")
                throw TypeError(".S2C.gamerAddRoomS2C: object expected");
            message.gamerAddRoomS2C = $root.GamerAddRoomS2C.fromObject(object.gamerAddRoomS2C);
        }
        if (object.gamerLeaveRoomS2C != null) {
            if (typeof object.gamerLeaveRoomS2C !== "object")
                throw TypeError(".S2C.gamerLeaveRoomS2C: object expected");
            message.gamerLeaveRoomS2C = $root.GamerLeaveRoomS2C.fromObject(object.gamerLeaveRoomS2C);
        }
        if (object.gamerNotifyRoomInfoChangeS2C != null) {
            if (typeof object.gamerNotifyRoomInfoChangeS2C !== "object")
                throw TypeError(".S2C.gamerNotifyRoomInfoChangeS2C: object expected");
            message.gamerNotifyRoomInfoChangeS2C = $root.GamerNotifyRoomInfoChangeS2C.fromObject(object.gamerNotifyRoomInfoChangeS2C);
        }
        return message;
    };

    /**
     * Creates a plain object from a S2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C
     * @static
     * @param {S2C} message S2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.error = 0;
            object.key = "";
            object.gamerLoginS2C = null;
            object.gamerLoginGetDataS2C = null;
            object.serverTimeS2C = null;
            object.gamerNotifyLoginOtherS2C = null;
            object.gamerSubChatChannelS2C = null;
            object.gamerFriendChatS2C = null;
            object.gamerWorldChatS2C = null;
            object.gamerTestChatS2C = null;
            object.gamerClubRequestS2C = null;
            object.gamerNotifyNewChatS2C = null;
            object.gamerNewFriendReqS2C = null;
            object.gamerNotifyNewFriendReqS2C = null;
            object.gamerProcessFriendReqS2C = null;
            object.gamerNotifyNewFriendS2C = null;
            object.gamerNotifyNewMailS2C = null;
            object.gamerMatchS2C = null;
            object.gamerNotifyMatchInfoS2C = null;
            object.gamerPVPSyncS2C = null;
            object.gamerNotifyPVPSyncS2C = null;
            object.gamerNotifyNewPVPResultS2C = null;
            object.gamerNotifyIconChangeS2C = null;
            object.gamerGetRealTimeRankS2C = null;
            object.gamerCheckPVPBattleS2C = null;
            object.gamerUploadWXInfoS2C = null;
            object.gamerNewRoomS2C = null;
            object.gamerAddRoomS2C = null;
            object.gamerLeaveRoomS2C = null;
            object.gamerNotifyRoomInfoChangeS2C = null;
        }
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        if (message.gamerLoginS2C != null && message.hasOwnProperty("gamerLoginS2C"))
            object.gamerLoginS2C = $root.GamerLoginS2C.toObject(message.gamerLoginS2C, options);
        if (message.gamerLoginGetDataS2C != null && message.hasOwnProperty("gamerLoginGetDataS2C"))
            object.gamerLoginGetDataS2C = $root.GamerLoginGetDataS2C.toObject(message.gamerLoginGetDataS2C, options);
        if (message.serverTimeS2C != null && message.hasOwnProperty("serverTimeS2C"))
            object.serverTimeS2C = $root.ServerTimeS2C.toObject(message.serverTimeS2C, options);
        if (message.gamerNotifyLoginOtherS2C != null && message.hasOwnProperty("gamerNotifyLoginOtherS2C"))
            object.gamerNotifyLoginOtherS2C = $root.GamerNotifyLoginOtherS2C.toObject(message.gamerNotifyLoginOtherS2C, options);
        if (message.gamerSubChatChannelS2C != null && message.hasOwnProperty("gamerSubChatChannelS2C"))
            object.gamerSubChatChannelS2C = $root.GamerSubChatChannelS2C.toObject(message.gamerSubChatChannelS2C, options);
        if (message.gamerFriendChatS2C != null && message.hasOwnProperty("gamerFriendChatS2C"))
            object.gamerFriendChatS2C = $root.GamerFriendChatS2C.toObject(message.gamerFriendChatS2C, options);
        if (message.gamerWorldChatS2C != null && message.hasOwnProperty("gamerWorldChatS2C"))
            object.gamerWorldChatS2C = $root.GamerWorldChatS2C.toObject(message.gamerWorldChatS2C, options);
        if (message.gamerTestChatS2C != null && message.hasOwnProperty("gamerTestChatS2C"))
            object.gamerTestChatS2C = $root.GamerTestChatS2C.toObject(message.gamerTestChatS2C, options);
        if (message.gamerClubRequestS2C != null && message.hasOwnProperty("gamerClubRequestS2C"))
            object.gamerClubRequestS2C = $root.GamerClubRequestS2C.toObject(message.gamerClubRequestS2C, options);
        if (message.gamerNotifyNewChatS2C != null && message.hasOwnProperty("gamerNotifyNewChatS2C"))
            object.gamerNotifyNewChatS2C = $root.GamerNotifyNewChatS2C.toObject(message.gamerNotifyNewChatS2C, options);
        if (message.gamerNewFriendReqS2C != null && message.hasOwnProperty("gamerNewFriendReqS2C"))
            object.gamerNewFriendReqS2C = $root.GamerNewFriendReqS2C.toObject(message.gamerNewFriendReqS2C, options);
        if (message.gamerNotifyNewFriendReqS2C != null && message.hasOwnProperty("gamerNotifyNewFriendReqS2C"))
            object.gamerNotifyNewFriendReqS2C = $root.GamerNotifyNewFriendReqS2C.toObject(message.gamerNotifyNewFriendReqS2C, options);
        if (message.gamerProcessFriendReqS2C != null && message.hasOwnProperty("gamerProcessFriendReqS2C"))
            object.gamerProcessFriendReqS2C = $root.GamerProcessFriendReqS2C.toObject(message.gamerProcessFriendReqS2C, options);
        if (message.gamerNotifyNewFriendS2C != null && message.hasOwnProperty("gamerNotifyNewFriendS2C"))
            object.gamerNotifyNewFriendS2C = $root.GamerNotifyNewFriendS2C.toObject(message.gamerNotifyNewFriendS2C, options);
        if (message.gamerNotifyNewMailS2C != null && message.hasOwnProperty("gamerNotifyNewMailS2C"))
            object.gamerNotifyNewMailS2C = $root.GamerNotifyNewMailS2C.toObject(message.gamerNotifyNewMailS2C, options);
        if (message.gamerMatchS2C != null && message.hasOwnProperty("gamerMatchS2C"))
            object.gamerMatchS2C = $root.GamerMatchS2C.toObject(message.gamerMatchS2C, options);
        if (message.gamerNotifyMatchInfoS2C != null && message.hasOwnProperty("gamerNotifyMatchInfoS2C"))
            object.gamerNotifyMatchInfoS2C = $root.GamerNotifyMatchInfoS2C.toObject(message.gamerNotifyMatchInfoS2C, options);
        if (message.gamerPVPSyncS2C != null && message.hasOwnProperty("gamerPVPSyncS2C"))
            object.gamerPVPSyncS2C = $root.GamerPVPSyncS2C.toObject(message.gamerPVPSyncS2C, options);
        if (message.gamerNotifyPVPSyncS2C != null && message.hasOwnProperty("gamerNotifyPVPSyncS2C"))
            object.gamerNotifyPVPSyncS2C = $root.GamerNotifyPVPSyncS2C.toObject(message.gamerNotifyPVPSyncS2C, options);
        if (message.gamerNotifyNewPVPResultS2C != null && message.hasOwnProperty("gamerNotifyNewPVPResultS2C"))
            object.gamerNotifyNewPVPResultS2C = $root.GamerNotifyNewPVPResultS2C.toObject(message.gamerNotifyNewPVPResultS2C, options);
        if (message.gamerNotifyIconChangeS2C != null && message.hasOwnProperty("gamerNotifyIconChangeS2C"))
            object.gamerNotifyIconChangeS2C = $root.GamerNotifyIconChangeS2C.toObject(message.gamerNotifyIconChangeS2C, options);
        if (message.gamerGetRealTimeRankS2C != null && message.hasOwnProperty("gamerGetRealTimeRankS2C"))
            object.gamerGetRealTimeRankS2C = $root.GamerGetRealTimeRankS2C.toObject(message.gamerGetRealTimeRankS2C, options);
        if (message.gamerCheckPVPBattleS2C != null && message.hasOwnProperty("gamerCheckPVPBattleS2C"))
            object.gamerCheckPVPBattleS2C = $root.GamerCheckPVPBattleS2C.toObject(message.gamerCheckPVPBattleS2C, options);
        if (message.gamerUploadWXInfoS2C != null && message.hasOwnProperty("gamerUploadWXInfoS2C"))
            object.gamerUploadWXInfoS2C = $root.GamerUploadWXInfoS2C.toObject(message.gamerUploadWXInfoS2C, options);
        if (message.gamerNewRoomS2C != null && message.hasOwnProperty("gamerNewRoomS2C"))
            object.gamerNewRoomS2C = $root.GamerNewRoomS2C.toObject(message.gamerNewRoomS2C, options);
        if (message.gamerAddRoomS2C != null && message.hasOwnProperty("gamerAddRoomS2C"))
            object.gamerAddRoomS2C = $root.GamerAddRoomS2C.toObject(message.gamerAddRoomS2C, options);
        if (message.gamerLeaveRoomS2C != null && message.hasOwnProperty("gamerLeaveRoomS2C"))
            object.gamerLeaveRoomS2C = $root.GamerLeaveRoomS2C.toObject(message.gamerLeaveRoomS2C, options);
        if (message.gamerNotifyRoomInfoChangeS2C != null && message.hasOwnProperty("gamerNotifyRoomInfoChangeS2C"))
            object.gamerNotifyRoomInfoChangeS2C = $root.GamerNotifyRoomInfoChangeS2C.toObject(message.gamerNotifyRoomInfoChangeS2C, options);
        return object;
    };

    /**
     * Converts this S2C to JSON.
     * @function toJSON
     * @memberof S2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C;
})();

module.exports = $root;
window.proto = $root;
