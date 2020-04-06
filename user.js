"use strict";
// class populateData1
// {
//     getheaderData(value,data)
// {
//     document.getElementById(value).innerHTML += data;
// }
// clearData(value:string )
// {
//     document.getElementById(value).innerHTML  = "";
// }
// }
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
var user = /** @class */ (function () {
    function user() {
        this.headerTag = document.getElementById("output");
        this.headerTag1 = document.getElementById("get_user_role");
        this.getdata = document.getElementById("getUserinfo");
    }
    user.prototype.getAllPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.url = "https://localhost:5001/api/device/user";
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
    user.prototype.getApiCall = function (URL) {
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
    user.prototype.dynamicGenerate = function () {
        var loop = 0;
        // let populate11=new populateData1();
        //let tempo : any;
        this.headerTag.innerHTML = "";
        for (loop = 0; loop < this.data.length; loop++) {
            this.headerTag1.innerHTML += "\n\n\n            <tr style=\"background-color: #CFB53B;\">\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <strong id=\"id" + loop + "\">User ID := " + this.data[loop]["id"] + "</strong>\n            </td>\n\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <strong id=\"firstName" + loop + "\">First Name := " + this.data[loop]["firstName"] + "</strong>\n            </td>\n           \n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <strong id=\"lastname" + loop + "\"  >LastName" + this.data[loop]["lastName"] + "</strong>\n            </td>\n\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <button id=\"id" + loop + "\" onclick=\"u_role.getAllUserRole(" + this.data[loop]["id"] + ")\" >SEE ROLES</button>\n            </td>\n\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <button id=\"id" + loop + "\" onclick=\"ass_role.assignRole(" + this.data[loop]["id"] + ")\" >ASSIGN ROLES</button>\n            </td>\n            \n            \n            \n        \n        \n            </tr>\n           ";
        }
    };
    return user;
}());
var ab = new user();
var user_role = /** @class */ (function () {
    function user_role() {
        this.getdata = document.getElementById("getUserinfo");
    }
    user_role.prototype.getAllUserRole = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var x, data, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        x = id;
                        this.url = "https://localhost:5001/api/device/get_role_with_user/" + x;
                        return [4 /*yield*/, this.getApiRoleCall(this.url)];
                    case 1:
                        data = _b.sent();
                        _a = this;
                        return [4 /*yield*/, data];
                    case 2:
                        _a.data = _b.sent();
                        console.log(data);
                        this.size = data.length;
                        this.UserRoleInfo(x);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    user_role.prototype.getApiRoleCall = function (URL) {
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
    user_role.prototype.UserRoleInfo = function (id) {
        var x = id;
        var loop = 0;
        // let populate11=new populateData1();
        //let tempo : any;
        this.getdata.innerHTML = "";
        for (loop = 0; loop < this.data.length; loop++) {
            this.getdata.innerHTML += "\n\n\n            <tr style=\"background-color: #FADA5E;\">\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <strong id=\"id" + loop + "\">User ID := " + x + "</strong>\n            </td>\n\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <strong id=\"id" + loop + "\">Role ID := " + this.data[loop]["id"] + "</strong>\n            </td>\n\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <strong id=\"roleName" + loop + "\">Role Name := " + this.data[loop]["roleName"] + "</strong>\n            </td>\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <button id=\"roleName" + loop + "\" class=\"btn btn-danger\" onclick=\"u_role.DeleteRoleByUser(" + x + "," + this.data[loop]["id"] + ")\"><span class=\"glyphicon glyphicon-trash\">DELETE</span></button>\n            </td>\n           \n            \n            \n            \n            \n        \n        \n            </tr>\n        ";
        }
    };
    user_role.prototype.del_role_by_user = function (id) {
        alert("With respect to user RoleId" + id + "deleted");
    };
    user_role.prototype.DeleteRoleByUser = function (id, id1) {
        return __awaiter(this, void 0, void 0, function () {
            var x, y, uri, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        x = id;
                        y = id1;
                        uri = "https://localhost:5001/api/device/get_role_with_user/" + x + "/" + y;
                        console.log(uri);
                        return [4 /*yield*/, fetch(uri, {
                                method: 'DELETE',
                            })];
                    case 1:
                        response = _a.sent();
                        console.log(this.data);
                        this.del_role_by_user(id1);
                        u_role.getAllUserRole(id);
                        return [2 /*return*/];
                }
            });
        });
    };
    return user_role;
}());
var u_role = new user_role();
/////////////////////////////////////////////////////////////////////////////////////
var assign_role = /** @class */ (function () {
    function assign_role() {
        this.getuserdata = document.getElementById("assignrole");
    }
    assign_role.prototype.assignRole = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var x, data, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        x = id;
                        console.log(x);
                        this.url = "https://localhost:5001/api/device/assign_role_to_user/" + x;
                        return [4 /*yield*/, this.getApiRoleAssign(this.url)];
                    case 1:
                        data = _b.sent();
                        _a = this;
                        return [4 /*yield*/, data];
                    case 2:
                        _a.data = _b.sent();
                        console.log(data);
                        this.size = data.length;
                        this.assignRoleUser(x);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    assign_role.prototype.getApiRoleAssign = function (URL) {
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
    assign_role.prototype.assignRoleUser = function (id) {
        var x = id;
        console.log(x);
        var loop = 0;
        // let populate11=new populateData1();
        //let tempo : any;
        this.getuserdata.innerHTML = "";
        for (loop = 0; loop < this.data.length; loop++) {
            this.getuserdata.innerHTML += "\n\n\n            \n\n            <tr style=\"background-color: #4C9A2A;\">\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <strong id=\"id" + loop + "\">User ID := " + x + "</strong>\n            </td>\n            \n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <strong id=\"id" + loop + "\">Role ID := " + this.data[loop]["id"] + "</strong>\n            </td>\n\n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <strong id=\"roleName" + loop + "\">Role Name := " + this.data[loop]["roleName"] + "</strong>\n            </td>\n            \n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n            <input type=\"checkbox\"  onclick=\"check1.updateRolePermission(" + x + "," + this.data[loop]["id"] + ")\" value=\"" + this.data[loop]["id"] + "\">" + this.data[loop]["roleName"] + "\n            </td>\n            \n            <td style=\"color: darkslategray; font-style: italic;font-family: cursive; font-weight: bolder;width:30%;\">\n           <button class=\"btn btn-info\" id=\"id" + loop + "\" onclick=\"check1.updateRolePermission(" + x + "," + this.data[loop]["id"] + ")\"  ><span class=\"glyphicon glyphicon-plus\">ADD</span></button>\n            </td>\n           \n            \n            \n            \n            \n        \n        \n            </tr>\n            ";
        }
    };
    assign_role.prototype.add_role = function (id) {
        alert("With respect to user roleId" + id + "added");
    };
    return assign_role;
}());
var ass_role = new assign_role();
////////////////////////////////////////////////////////////////////////////
/////////checkbox
var checkbox1 = /** @class */ (function () {
    function checkbox1() {
    }
    checkbox1.prototype.bindData = function (id, id1) {
        console.log(id1);
        console.log(id);
        this.userId = id;
        this.roleId = id1;
        console.log(this.userId);
        console.log(this.roleId);
        this.data = {
            "userId": this.userId,
            "roleId": this.roleId
        };
        console.log(this.data);
    };
    checkbox1.prototype.updateRolePermission = function (x, y) {
        var x1 = x;
        var y1 = y;
        console.log("hhh");
        this.bindData(x1, y1);
        this.postData(x1);
    };
    checkbox1.prototype.postData = function (id) {
        console.log("lll");
        var url = "https://localhost:5001/api/device/role_user/insert";
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
            ass_role.add_role(id);
            ass_role.assignRole(id);
        });
    };
    return checkbox1;
}());
var check1 = new checkbox1();
