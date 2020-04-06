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
var role_permission = /** @class */ (function () {
    function role_permission() {
        this.headerTag = document.getElementById("output");
        this.headerTag1 = document.getElementById("get_role_info");
    }
    role_permission.prototype.getAllRoles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.url = "https://localhost:5001/api/device/role";
                        return [4 /*yield*/, this.getApiRoleCall(this.url)];
                    case 1:
                        data = _b.sent();
                        _a = this;
                        return [4 /*yield*/, data];
                    case 2:
                        _a.data = _b.sent();
                        console.log(data);
                        this.size = data.length;
                        this.RoleGenerate();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    role_permission.prototype.getApiRoleCall = function (URL) {
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
    role_permission.prototype.alert_delete = function (id) {
        alert("role Id" + id + "deleted");
    };
    role_permission.prototype.DeleteRoleById = function (id1) {
        return __awaiter(this, void 0, void 0, function () {
            var x, uri, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        x = id1;
                        uri = "https://localhost:5001/api/device/role/" + x;
                        console.log(uri);
                        return [4 /*yield*/, fetch(uri, {
                                method: 'DELETE',
                            })];
                    case 1:
                        response = _a.sent();
                        console.log(this.data);
                        this.alert_delete(x);
                        this.getAllRoles();
                        return [2 /*return*/];
                }
            });
        });
    };
    role_permission.prototype.RoleGenerate = function () {
        var loop = 0;
        // let populate11=new populateData1();
        //let tempo : any;
        this.headerTag.innerHTML = "";
        this.headerTag1.innerHTML = "";
        for (loop = 0; loop < this.data.length; loop++) {
            this.headerTag1.innerHTML += "\n           \n\n            <tr style=\"background-color: #74B72E;\">\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <strong id=\"id" + loop + "\">Role ID := " + this.data[loop]["id"] + "</strong>\n            </td>\n\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <strong id=\"roleName" + loop + "\">Role Name := " + this.data[loop]["roleName"] + "</strong>\n            </td>\n\n\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:10%;\">\n            <button class=\"btn btn-info\"  onclick=\"up. update_data(" + this.data[loop]["id"] + ")\"><span class=\"glyphicon glyphicon-pencil\">UPDATE</span></button>\n            </td>\n\n\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:10%;\">\n            <button class=\"btn btn-danger\" id=\"roleName" + loop + "\" onclick=\"get_role.DeleteRoleById(" + this.data[loop]["id"] + ")\"><span class=\"glyphicon glyphicon-trash\">DELETE</span></button>\n            </td>\n\n           \n\n           \n            \n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <button id=\"roleName" + loop + "\" onclick=\"r_permission.getAllRolePermission(" + this.data[loop]["id"] + ")\">VIEW PERMISSION</button>\n            </td>\n\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <button id=\"roleName" + loop + "\" onclick=\"permission_role.assignPermission(" + this.data[loop]["id"] + ")\" >ASSIGN PERMISSION</button>\n            </td>\n           \n           \n            \n            \n            \n            \n        \n        \n            </tr>\n\n          \n          ";
        }
    };
    return role_permission;
}());
var get_role = new role_permission();
//////////////////////////////////////////////////////////////////
var update1 = /** @class */ (function () {
    function update1() {
        this.headerTag3 = document.getElementById("insert_data");
    }
    update1.prototype.update11 = function (id) {
        console.log(id);
        this.update_data(id);
    };
    update1.prototype.update_data = function (x) {
        get_role.headerTag1.innerHTML = "";
        console.log("hello");
        this.headerTag3.innerHTML += "\n      \n        <input type=\"text\" id=\"RoleName11\"  name=\"RoleName11\" value=\"\"  style=\"margin-top:300px; style=\"margin-left:100px; \">\n        <button   class=\"btn btn-danger\"  onclick=\"role_update.updateRole(" + x + ")\">SUBMIT</button>\n       \n        ";
    };
    return update1;
}());
var up = new update1();
//////////////////////////////assign permission////////////////////////////////////////
var assign_permission = /** @class */ (function () {
    function assign_permission() {
        this.getuserdata = document.getElementById("assign_perm");
    }
    assign_permission.prototype.assignPermission = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var x, data, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        x = id;
                        console.log(x);
                        this.url = "https://localhost:5001/api/device/get_permission_without_role/" + x;
                        return [4 /*yield*/, this.getApiPermissionAssign(this.url)];
                    case 1:
                        data = _b.sent();
                        _a = this;
                        return [4 /*yield*/, data];
                    case 2:
                        _a.data = _b.sent();
                        console.log(data);
                        this.size = data.length;
                        this.assignPermissionRole(x);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    assign_permission.prototype.getApiPermissionAssign = function (URL) {
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
    assign_permission.prototype.add_permiss = function (id) {
        alert(id + "inserted");
    };
    assign_permission.prototype.assignPermissionRole = function (id) {
        var loop = 0;
        // let populate11=new populateData1();
        var x = id;
        console.log(x);
        //let tempo : any;
        this.getuserdata.innerHTML = "";
        for (loop = 0; loop < this.data.length; loop++) {
            this.getuserdata.innerHTML += "\n\n\n            <tr style=\"background-color: #52B2BF;\">\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <strong id=\"id" + loop + "\">Role ID := " + x + "</strong>\n            </td>\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <strong id=\"id" + loop + "\">Permission ID := " + this.data[loop]["permissionId"] + "</strong>\n            </td>\n\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <strong id=\"roleName" + loop + "\">Permisssion Name := " + this.data[loop]["permissionName"] + "</strong>\n            </td>\n            \n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <input type=\"checkbox\" value=\"" + this.data[loop]["permissionid"] + "\">" + this.data[loop]["permissionName"] + "\n            </td>\n            \n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n           <button  id=\"id" + loop + "\" onclick=\"check.updateRolePermission(" + x + "," + this.data[loop]["permissionId"] + ")\"><span class=\"glyphicon glyphicon-plus\">ADD</span></button>\n            </td>\n           \n            \n            \n            \n            \n        \n        \n            </tr>\n         ";
        }
    };
    return assign_permission;
}());
var permission_role = new assign_permission();
////////////////////////////////////////////////////////////////////////////////
//get all the permission
var role_permission1 = /** @class */ (function () {
    function role_permission1() {
        this.getdata = document.getElementById("getperm");
    }
    role_permission1.prototype.getAllRolePermission = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var x, data, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        x = id;
                        this.url = "https://localhost:5001/api/device/get_permission_with_role/" + x;
                        return [4 /*yield*/, this.getApiPermissionCall(this.url)];
                    case 1:
                        data = _b.sent();
                        _a = this;
                        return [4 /*yield*/, data];
                    case 2:
                        _a.data = _b.sent();
                        console.log(data);
                        this.size = data.length;
                        this.RolePermInfo(x);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    role_permission1.prototype.del_permis = function (id) {
        alert("permission" + id + "deleted");
    };
    role_permission1.prototype.getApiPermissionCall = function (URL) {
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
    role_permission1.prototype.RolePermInfo = function (id) {
        var x = id;
        var loop = 0;
        // let populate11=new populateData1();
        //let tempo : any;
        this.getdata.innerHTML = "";
        for (loop = 0; loop < this.data.length; loop++) {
            this.getdata.innerHTML += "\n<table class=\" table table-bordered\" >\n\n<tbody style=\"background-color:green;\">\n\n            <tr style=\"background-color: #FADA5E;\">\n\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:20%;\">\n            <strong id=\"permissionId" + loop + "\">Role ID := " + x + "</strong>\n            </td>\n\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:20%;\">\n            <strong id=\"permissionId" + loop + "\">Permission ID := " + this.data[loop]["permissionId"] + "</strong>\n            </td>\n\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:20%;\">\n            <strong id=\"permissionName" + loop + "\">Permission Name := " + this.data[loop]["permissionName"] + "</strong>\n            </td>\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:20%;\">\n            <button class=\"btn btn-danger\" id=\"permissionName" + loop + "\" onclick=\"r_permission.DeleteRoleByPermission(" + x + "," + this.data[loop]["permissionId"] + ")\"><span class=\"glyphicon glyphicon-trash\">DELETE</span></button>\n            </td>\n           \n            \n            \n            \n            \n        \n        \n            </tr>\n            </tbody>\n            </table>";
        }
    };
    role_permission1.prototype.DeleteRoleByPermission = function (id1, id) {
        return __awaiter(this, void 0, void 0, function () {
            var x, y, uri, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        x = id1;
                        y = id;
                        uri = "https://localhost:5001/api/device/get_permission_with_role/" + x + "/" + y;
                        console.log(uri);
                        return [4 /*yield*/, fetch(uri, {
                                method: 'DELETE',
                            })];
                    case 1:
                        response = _a.sent();
                        console.log(this.data);
                        this.del_permis(id1);
                        r_permission.getAllRolePermission(id1);
                        return [2 /*return*/];
                }
            });
        });
    };
    return role_permission1;
}());
var r_permission = new role_permission1();
//////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
/////////////////add checkbox
var checkbox = /** @class */ (function () {
    function checkbox() {
    }
    // addRoleToPermission(roleId:number,permissionId:number){
    //     let r1=roleId;
    //     let r2=permissionId;
    //     this.updateRolePermission(r1,r2);
    // }
    checkbox.prototype.bindData = function (id, id1) {
        console.log(id1);
        console.log(id);
        this.role_Id = id;
        this.permission_Id = id1;
        console.log(this.role_Id);
        console.log(this.permission_Id);
        this.data = {
            "role_Id": this.role_Id,
            "permission_Id": this.permission_Id
        };
        console.log(this.data);
    };
    checkbox.prototype.updateRolePermission = function (x, y) {
        var x1 = x;
        var y1 = y;
        console.log("hhh");
        this.bindData(x1, y1);
        this.postData(x, y);
    };
    checkbox.prototype.postData = function (id, id1) {
        console.log("lll");
        var url = "https://localhost:5001/api/device/role_permission/insert";
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
            permission_role.add_permiss(id1);
            permission_role.assignPermission(id);
        });
    };
    return checkbox;
}());
var check = new checkbox();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///insert new role 
var insert_Role = /** @class */ (function () {
    function insert_Role() {
    }
    insert_Role.prototype.clear_data = function () {
        this.roleName = "";
    };
    insert_Role.prototype.bindData = function () {
        this.roleName = document.getElementById("roleName").value;
        console.log(this.roleName);
        this.data = {
            "roleName": this.roleName
        };
        console.log(this.data);
    };
    insert_Role.prototype.updateRole = function () {
        console.log("hhh");
        this.bindData();
        this.postData();
        this.clear_data();
    };
    insert_Role.prototype.postData = function () {
        console.log("lll");
        var url = "https://localhost:5001/api/device/role/insert";
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
    return insert_Role;
}());
var role_insert = new insert_Role();
////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////update Data//////////////////////////////////////////////////////////
var update_Role = /** @class */ (function () {
    function update_Role() {
    }
    update_Role.prototype.clear_data = function () {
        this.RoleName = "";
    };
    update_Role.prototype.bindData = function () {
        this.RoleName = document.getElementById("RoleName11").value;
        console.log(this.RoleName);
        this.data = {
            "RoleName": this.RoleName
        };
        console.log(this.data);
    };
    update_Role.prototype.updateRole = function (x) {
        console.log(x);
        this.bindData();
        this.postData(x);
        this.clear_data();
    };
    update_Role.prototype.postData = function (x) {
        console.log("lll");
        var url = "https://localhost:5001/api/device/role/" + x;
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
        up.headerTag3.innerHTML = "";
        get_role.getAllRoles();
    };
    return update_Role;
}());
var role_update = new update_Role();
///////////////////////////////////////////////////////////////////////////////////////////
