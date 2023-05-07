var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
export class Create {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    Package(orgId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.apiKey || !orgId || !data)
                return { message: "noParamsGiven" };
            const response = yield axios.post(`https://api-shipx-pl.easypack24.net/v1/organizations/${orgId}/shipments`, data, { headers: { 'Authorization': `Bearer ${this.apiKey}` } });
            const info = response.data;
            if (!info.status)
                return { message: "packageNotCreated" };
            return { message: "success", data: info };
        });
    }
}
