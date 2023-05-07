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
export class Find {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    stashesInRadius(radius, postalCode) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!radius || !postalCode || !this.apiKey)
                return { message: "noParamsGiven" };
            const response = yield axios.get(`https://api-shipx-pl.easypack24.net/v1/points?operator=INPOST&country=PL&post_code=${postalCode}&max_distance=${radius}&limit=500&format=json&api_key=${this.apiKey}`);
            const stashes = response.data.items;
            if (stashes < 1)
                return { message: "noStashesInRadius" };
            return { message: "success", data: stashes };
        });
    }
    shipmentTracking(trackingNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!trackingNumber || !this.apiKey)
                return { message: "noParamsGiven" };
            const response = yield axios.get(`https://api-shipx-pl.easypack24.net/v1/tracking/${trackingNumber}`);
            const info = response.data;
            if (!info.status)
                return { message: "badTrackingNumber" };
            return { message: "success", data: info };
        });
    }
    allStatuses() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios.get(`https://api-shipx-pl.easypack24.net/v1/statuses`);
            const info = response.data.items;
            return { message: "success", data: info };
        });
    }
    organizationInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.apiKey)
                return { message: "noParamsGiven" };
            const response = yield axios.get(`https://api-shipx-pl.easypack24.net/v1/organizations`, { headers: { 'Authorization': `Bearer ${this.apiKey}` } });
            if (response.data.error)
                return { message: "badBearerToken" };
            return { message: "success", data: response.data.items };
        });
    }
}
