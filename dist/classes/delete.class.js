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
export class Delete {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    Package(packageId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.apiKey || !packageId)
                return { message: "noParamsGiven" };
            const response = yield axios.delete(`https://api-shipx-pl.easypack24.net/v1/shipments/${packageId}`, { headers: { 'Authorization': `Bearer ${this.apiKey}` } });
            const info = response.data;
            if (info.error)
                return { message: "packageNotDeleted" };
            return { message: "deleted" };
        });
    }
}
