"use strict";

/***************************************************
 Provide support TamaTama
 ***************************************************/

var inherits = require('util').inherits;

var WalkyConnection = require('walky/WalkyConnection');

function TamaTama() {
    WalkyConnection.call(this);
}

inherits(TamaTama, WalkyConnection);

TamaTama.prototype.databases = function () {
    // --------------------------------------------------
        var sys = this.getObject('!');
        return sys.exec('databases');
    };

TamaTama.prototype.login = function (databaseName,login,password) {
    // --------------------------------------------------
        var sys = this.getObject('!');
        return sys.exec('login',[databaseName,login,password]);
    };

TamaTama.prototype.getModel = function (modelName) {
    // --------------------------------------------------
        var pooler = this.getObject('pool');
        return pooler.exec('get',[modelName]);
    };

module.exports = TamaTama;
