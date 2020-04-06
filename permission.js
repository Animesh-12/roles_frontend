"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var abc = /** @class */ (function () {
    function abc() {
        this.headerTag = document.getElementById("output");
        this.headerTag1 = document.getElementById("perm");
    }
    abc.prototype.getAllPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.url = "https://localhost:5001/api/device/permission";
                        return [4 /*yield*/, this.getApiCall(this.url)];
                    case 1:
                        data = _b.sent();
                        _a = this;
                        return [4 /*yield*/, data];
                    case 2:
                        _a.data = _b.sent();
                        console.log(data);
                        this.size = data.length;
                        this.dynamicGenerate();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    abc.prototype.getApiCall = function (URL) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(URL)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, (response.json())];
                    case 2:
                        data = _a.sent();
                        return [4 /*yield*/, data];
                    case 3: 
                    //  console.log(data);
                    return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    abc.prototype.get_delete_alert = function (id) {
        alert("permissionId" + id + "deleted");
    };
    abc.prototype.DeletePermissionById = function (id1) {
        return __awaiter(this, void 0, void 0, function () {
            var x, uri, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        x = id1;
                        uri = "https://localhost:5001/api/device/permission/" + x;
                        console.log(uri);
                        return [4 /*yield*/, fetch(uri, {
                                method: 'DELETE',
                            })];
                    case 1:
                        response = _a.sent();
                        console.log(this.data);
                        this.get_delete_alert(x);
                        this.getAllPermission();
                        return [2 /*return*/];
                }
            });
        });
    };
    abc.prototype.dynamicGenerate = function () {
        var loop = 0;
        this.headerTag.innerHTML = "";
        this.headerTag1.innerHTML = "";
        for (loop = 0; loop < this.data.length; loop++) {
            this.headerTag1.innerHTML += "\n\n\n            <tr style=\"background-color:#FADA5E;\">\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <strong id=\"id" + loop + "\">Permission ID := " + this.data[loop]["id"] + "</strong>\n            </td>\n\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <strong id=\"permissionName" + loop + "\">Permission Name := " + this.data[loop]["permissionName"] + "</strong>\n            </td>\n           \n           \n             <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <button id=\"id" + loop + "\"  onclick=\"ab.DeletePermissionById(" + this.data[loop]["id"] + ")\">DELETE</button>\n            </td>\n\n\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:10%;\">\n            <button class=\"btn btn-info\" ><span class=\"glyphicon glyphicon-pencil\" onclick=\"upp.update11(" + this.data[loop]["id"] + ")\">UPDATE</span></button>\n            </td>\n            \n           \n\n        \n            </tr>\n           ";
        }
    };
    return abc;
}());
var ab = new abc();
//-----------------------------------------------------------------------------------
var updatePerm1 = /** @class */ (function () {
    function updatePerm1() {
        this.headerTag3 = document.getElementById("insert_perm");
    }
    updatePerm1.prototype.update11 = function (id) {
        console.log(id);
        this.update_perm(id);
    };
    updatePerm1.prototype.update_perm = function (x) {
        var y = x;
        ab.headerTag1.innerHTML = "";
        console.log("hello");
        this.headerTag3.innerHTML += "\n    \n        <input type=\"text\" id=\"PermissionName11\"  name=\"PermissionName11\" value=\"\"  style=\"margin-top:300px; style=\"margin-left:100px; \">\n        <button   class=\"btn btn-danger\" onclick=\"perm_update.updatePermission1(" + y + ")\" >SUBMIT</button>\n        \n        ";
    };
    return updatePerm1;
}());
var upp = new updatePerm1();
//--------------------------------------------------------------------------
var AddPermission = /** @class */ (function () {
    function AddPermission() {
    }
    AddPermission.prototype.bindData = function () {
        this.PermissionName = document.getElementById("PermissionName").value;
        console.log(this.PermissionName);
        this.data = {
            "PermissionName": this.PermissionName
        };
        console.log(this.data);
    };
    AddPermission.prototype.updatePermission = function () {
        console.log("hhh");
        this.bindData();
        this.postData();
    };
    AddPermission.prototype.postData = function () {
        console.log("lll");
        var url = "https://localhost:5001/api/device/permission/insert";
        fetch(url, {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(this.data),
        }).then(function (response) {
            console.log(response.status);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
        });
    };
    return AddPermission;
}());
var permission = new AddPermission();
//------------------------------------------------------------------------------------------------------
//-----------update permission--------------------------------------------------------------------------
var update_Permission = /** @class */ (function () {
    function update_Permission() {
    }
    update_Permission.prototype.bindData = function () {
        this.PermissionName1 = document.getElementById("PermissionName11").value;
        console.log(this.PermissionName1);
        this.data = {
            "permission_name": this.PermissionName1
        };
        console.log(this.data);
    };
    update_Permission.prototype.updatePermission1 = function (x) {
        console.log(x);
        this.bindData();
        this.postData(x);
    };
    update_Permission.prototype.postData = function (x) {
        console.log("lll");
        var url = "https://localhost:5001/api/device/permission/" + x;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(this.data),
        }).then(function (response) {
            console.log(response.status);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
        });
    };
    return update_Permission;
}());
var perm_update = new update_Permission();
