import axios from 'axios'
import { Response } from "../interfaces/response.inter.js"

export class Find {
    public constructor(
        public apiKey: string,
    ) { }
    async stashesInRadius(radius: string, postalCode: string,) {
        if (!radius || !postalCode || !this.apiKey) return { message: "noParamsGiven" } satisfies Response
        const response = await axios.get(`https://api-shipx-pl.easypack24.net/v1/points?operator=INPOST&country=PL&post_code=${postalCode}&max_distance=${radius}&limit=500&format=json&api_key=${this.apiKey}`)
        const stashes = response.data.items
        if (stashes < 1) return { message: "noStashesInRadius"} satisfies Response
        return { message: "success", data: stashes } satisfies Response
    }
    async shipmentTracking(trackingNumber: string) {
        if (!trackingNumber || !this.apiKey) return { message: "noParamsGiven"} satisfies Response
        const response = await axios.get(`https://api-shipx-pl.easypack24.net/v1/tracking/${trackingNumber}`)
        const info = response.data
        if (!info.status) return { message: "badTrackingNumber"} satisfies Response
        return { message: "success", data: info } satisfies Response
    }
    async allStatuses(){
        const response = await axios.get(`https://api-shipx-pl.easypack24.net/v1/statuses`)
        const info = response.data.items
        return { message: "success", data: info } satisfies Response
    }
    async organizationInfo() {
        if (!this.apiKey) return { message: "noParamsGiven"} satisfies Response
        const response = await axios.get(`https://api-shipx-pl.easypack24.net/v1/organizations`, {headers : {'Authorization': `Bearer ${this.apiKey}`}})
        if (response.data.error) return { message: "badBearerToken"} satisfies Response
        return { message: "success", data: response.data.items } satisfies Response
    }
}