import axios from 'axios'
import { Response } from '../interfaces/response.inter.js'

export class Create {
    public constructor(
        public apiKey: string
    ) { }
    async Package(orgId: string, data: any) {
        if (!this.apiKey || !orgId || !data) return { message: "noParamsGiven" } satisfies Response
        const response = await axios.post(`https://api-shipx-pl.easypack24.net/v1/organizations/${orgId}/shipments`, data , {headers : {'Authorization': `Bearer ${this.apiKey}`}})
        const info = response.data
        if (!info.status) return { message: "packageNotCreated"} satisfies Response
        return { message: "success", data: info } satisfies Response
    }
}