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
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const pgClient = new pg_1.Client("postgresql://neondb_owner:7rYfCOK1Qdav@ep-super-sunset-a8q550r8-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");
        try {
            yield pgClient.connect();
            const Insertquery = "insert into users(name , email) values($1,$2)";
            const result = yield pgClient.query(Insertquery, ["Apurv", "apurv@gmail.com"]); //sql injection 
            console.log("insertion success", result);
        }
        catch (err) {
            console.log("error during the insetion", err);
        }
        finally {
            yield pgClient.end();
        }
    });
}
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const pgClient = new pg_1.Client("postgresql://neondb_owner:7rYfCOK1Qdav@ep-super-sunset-a8q550r8-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");
        try {
            yield pgClient.connect();
            const Insertquery = "select* from users where email=$1 ";
            const result = yield pgClient.query(Insertquery, [email]);
            const user = result.rows.length;
            if (user > 0) {
                console.log(result.rows[0].name);
            }
            else {
                console.log("User not Found!!!");
            }
        }
        catch (err) {
            console.log("error occured ", err);
        }
        finally {
            yield pgClient.end();
        }
    });
}
getUser("yes234");
