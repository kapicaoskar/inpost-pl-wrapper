# inPost-pl-wrapper

You want to use inPost API in the simplest way? Then download this module!

## Installation

Install inpost wrapper with npm

```bash
npm install inpost-pl-wrapper
```

## How to use

Examples of InPost Wrapper module usage

#### Create option

```js
import { Create } from "inpost-pl-wrapper"
const create = new Create("inPost API Key")
const result = await create.Package({  // your own JSON data based on your preferences if you want more examples go to inPost API Docs and see on your own what you can add here
 "receiver": {
        "name": "Name",
        "company_name": "Company name",
     "first_name": "Jan",
        "last_name": "Kowalski",  
        "email": "receiver@example.com",
        "phone": "888000000",
        "address": {
            "street": "Cybernetyki",
            "building_number": "10",
            "city": "Warszawa",
            "post_code": "02-677",
            "country_code": "PL"
        }
    },
    "parcels": [
        {
            "id": "small package",
            "dimensions": {
                "length": "80",
                "width": "360",
                "height": "640",
                "unit": "mm"
            },
            "weight": {
                "amount": "25",
                "unit": "kg"
            },
             "is_non_standard": false
        }
    ],
    "insurance": {
        "amount": 25,
        "currency": "PLN"
    },
    "cod": {
        "amount": 12.50,
        "currency": "PLN"
    },
    "service": "inpost_courier_standard",
    "additional_services": ["email", "sms"],
    "reference": "Test",
    "comments": "dowolny komentarz",
    "external_customer_id": "8877xxx",
    "mpk": "Nazwa miejsca powstania kosztów"
})
```

#### Delete options

```js
import { Delete } from "inpost-pl-wrapper"
const delete = new Delete("inPost API Key")
const deletePackage = await delete.Package("packageID")
```

#### Find options

```js
import { Find } from "inpost-pl-wrapper"
const find = new Find("inPost API Key")
const stashesInRadius = await Find.stashesInRadius("radius in Meters" , "postalcode in format like 00-001")
const shipmentInfo = await Find.shipmentTracking("tracking number") 
const allStatuses = await Find.allStatuses()
const orgInfo = await Find.organizationInfo() // returns info about your organization signed to token
```



# Example response

Without Error

```js
{ message: "success", data: info from api in JSON }
```

With Error

```js
{ message: "noParamsGiven" }
```

## inPost Documentation
https://dokumentacja-inpost.atlassian.net/wiki/spaces/PL/overview


## Author
Oskar Kapica https://github.com/kapicaoskar
