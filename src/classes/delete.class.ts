import axios from 'axios'
import { Response } from '../interfaces/response.inter.js'

export class Delete {
    public constructor(
        public apiKey: string
    ) { }
    async Package(packageId: string) {
        if (!this.apiKey || !packageId ) return { message: "noParamsGiven" } satisfies Response
        const response = await axios.delete(`https://api-shipx-pl.easypack24.net/v1/shipments/${packageId}`, {headers : {'Authorization': `Bearer ${this.apiKey}`}})
        const info = response.data
        if (info.error) return { message: "packageNotDeleted"} satisfies Response
        return { message: "deleted" } satisfies Response
    }
}