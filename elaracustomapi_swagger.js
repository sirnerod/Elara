{
    "swagger": "2.0",
        "info": {
        "title": "Elara Custom Api",
            "description": "API for elara-custom-api.herokuapp.com",
                "version": "0.0.0"
    },
    "host": "elara-custom-api.herokuapp.com",
        "schemes": ["https"],
            "paths": {
        "/nppes/getnppesinformation/": {
            "post": {
                "tags": ["Nppes"],
                    "description": "Get nppes info",
                        "operationId": "getNPPESInfo",
                            "consumes": ["application/x-www-form-urlencoded"],
                                "produces": ["application/json"],
                                    "parameters": [
                                        {
                                            "name": "number",
                                            "in": "formData",
                                            "description": "number",
                                            "required": false,
                                            "type": "string",
                                            "x-example": ""
                                        },
                                        {
                                            "name": "first_name",
                                            "in": "formData",
                                            "description": "first_name",
                                            "required": false,
                                            "type": "string",
                                            "x-example": ""
                                        },
                                        {
                                            "name": "last_name",
                                            "in": "formData",
                                            "description": "last_name",
                                            "required": false,
                                            "type": "string",
                                            "x-example": ""
                                        },
                                        {
                                            "name": "organization_name",
                                            "in": "formData",
                                            "description": "organization_name",
                                            "required": false,
                                            "type": "string",
                                            "x-example": ""
                                        }
                                    ],
                                        "responses": {
                    "200": {
                        "description": "OK",
                            "schema": {
                            "type": "array",
                                "items": { "$ref": "#/definitions/GetNppesInfo" }
                        },
                        "examples": {
                            "application/json": [
                                {
                                    "FirstName": "RODEN",
                                    "LastName": "STEWART",
                                    "FullName": "STEWART RODEN",
                                    "Gender": "M",
                                    "Number": 1164607602,
                                    "Address1": "1720 FENNELL ST",
                                    "City": "MAITLAND",
                                    "State": "FL",
                                    "PostalCode": "32751",
                                    "Telephone": "321-972-8917",
                                    "FaxNumber": "321-800-3383",
                                    "TaxonomyCode": "111N00000X",
                                    "TaxonomyLicense": "CH9501",
                                    "TaxonomyDescription": "Chiropractor",
                                    "TaxonomyPrimary": true,
                                    "TaxonomyState": "FL"
                                },
                                {
                                    "FirstName": "RODEN",
                                    "LastName": "QUIBUYEN",
                                    "FullName": "QUIBUYEN RODEN",
                                    "Gender": "M",
                                    "Number": 1043409162,
                                    "Address1": "35000 GUADALCANAL ST",
                                    "City": "SAN DIEGO",
                                    "State": "CA",
                                    "PostalCode": "92140",
                                    "Telephone": "619-524-1963",
                                    "FaxNumber": "619-532-9510",
                                    "TaxonomyCode": "171000000X",
                                    "TaxonomyLicense": "1151164",
                                    "TaxonomyDescription": "Military Health Care Provider",
                                    "TaxonomyPrimary": true,
                                    "TaxonomyState": "CA"
                                }
                            ]
                        }
                    }
                },
                "security": []
            }
        },
        "/locations/getzipcodeinformation/{zipcode}": {
            "get": {
                "tags": ["Locations"],
                    "description": "Getzipcodeinformation",
                        "operationId": "getzipcodeinformation",
                            "produces": ["application/json"],
                                "parameters": [
                                    {
                                        "name": "zipcode",
                                        "in": "path",
                                        "description": "Zipcode",
                                        "required": true,
                                        "type": "string",
                                        "x-example": ""
                                    }
                                ],
                                    "responses": {
                    "200": {
                        "description": "OK",
                            "schema": { "$ref": "#/definitions/Location" },
                        "examples": {
                            "application/json": {
                                "ZipCode": "90210",
                                    "City": "BEVERLY HILLS",
                                        "State": "CA"
                            }
                        }
                    }
                },
                "security": []
            }
        },
        "/smartsheet/HCHBPayorList": {
            "post": {
                "tags": ["Smartsheet"],
                    "description": "Hchb payor list",
                        "operationId": "HCHBPayorList",
                            "consumes": ["application/x-www-form-urlencoded"],
                                "produces": ["application/json"],
                                    "parameters": [
                                        {
                                            "name": "region",
                                            "in": "formData",
                                            "description": "region",
                                            "required": false,
                                            "type": "string",
                                            "x-example": ""
                                        },
                                        {
                                            "name": "payor",
                                            "in": "formData",
                                            "description": "payor",
                                            "required": false,
                                            "type": "string",
                                            "x-example": ""
                                        }
                                    ],
                                        "responses": {
                    "200": {
                        "description": "OK",
                            "schema": {
                            "type": "array",
                                "items": { "$ref": "#/definitions/HchbPayorList" }
                        },
                        "examples": {
                            "application/json": [
                                {
                                    "region": "Elara Caring",
                                    "payor": "Aetna",
                                    "hchb": "AETNA COMMERCIAL"
                                },
                                {
                                    "region": "Elara Caring",
                                    "payor": "Aetna",
                                    "hchb": "AETNA MEDICARE ADVANTAGE FFS"
                                }
                            ]
                        }
                    }
                },
                "security": []
            }
        },
        "/smartsheet/payorlist": {
            "get": {
                "tags": ["Smartsheet"],
                    "description": "Payorlist",
                        "operationId": "payorlist",
                            "produces": ["application/json"],
                                "responses": {
                    "200": {
                        "description": "OK",
                            "schema": {
                            "type": "array",
                                "items": { "$ref": "#/definitions/Payorlist" }
                        },
                        "examples": {
                            "application/json": [
                                { "name": "BCBS OF LOUISIANA" },
                                { "name": "ILLINICARE/CELTIC OF ILLINOIS" }
                            ]
                        }
                    }
                },
                "security": []
            }
        },
        "/smartsheet/PayorMatrix": {
            "post": {
                "tags": ["Smartsheet"],
                    "description": "Payor matrix",
                        "operationId": "PayorMatrix",
                            "consumes": ["application/x-www-form-urlencoded"],
                                "produces": ["application/json"],
                                    "parameters": [
                                        {
                                            "name": "Payor",
                                            "in": "formData",
                                            "description": "Payor",
                                            "required": false,
                                            "type": "string",
                                            "x-example": ""
                                        },
                                        {
                                            "name": "HCHB_Payor",
                                            "in": "formData",
                                            "description": "HCHB Payor",
                                            "required": false,
                                            "type": "string",
                                            "x-example": ""
                                        },
                                        {
                                            "name": "Region",
                                            "in": "formData",
                                            "description": "Region",
                                            "required": false,
                                            "type": "string",
                                            "x-example": ""
                                        },
                                        {
                                            "name": "Branches",
                                            "in": "formData",
                                            "description": "Branches",
                                            "required": false,
                                            "type": "string",
                                            "x-example": ""
                                        }
                                    ],
                                        "responses": {
                    "200": {
                        "description": "OK",
                            "schema": {
                            "type": "array",
                                "items": { "$ref": "#/definitions/PayorMatrix" }
                        },
                        "examples": {
                            "application/json": [
                                {
                                    "Primary": "Aetna_Elara Caring National_10.15.20",
                                    "Payor": "Aetna",
                                    "HCHB_Payor_Type": "Medicare Advantage - FFS",
                                    "HCHB_Payor": "AETNA MEDICARE ADVANTAGE FFS",
                                    "Payor_Class": "Medicare Advantage",
                                    "Reimbursement_Method_____Bill_": "Fee for Service (FFS)",
                                    "Branches": "A01, A02, A03, A04, A05, A06, A07, A08, A09, A10, A11, A12, A13, A14,  ABI, ADR, BAR, BAT, BAU, BCH, BCP, BCR, BEN, BHH, BHO, BIF, BIG, BME, BMN, BNH, BNT,BPO,  BRH, BRI, BR1, BRR, BSA, BSH, BTO,BWB, BWN, BWO,  B43, CHI, CHL, COP, CPE, CRO,CV2, C01, C04, C05, C07, C08, C09, C10, C11, C12, C13, C14, C15, C17, C18, C19, C21, C24, C25, C26, C27, C42, C50, DK2, EDW, ELK, ENI, FOR, FRA, GRA, G62, HC5, HMD, HUG, HXL, IND, IRV, JAC,JP1,  J37, J41,KIT, KOK, LAF, LAN, LIV, L33, MEN, MET,MK1, MN1, MNR, MON,  M34, NC1, NEW, NHV, NTN, OCK, PAL, PA2, PUR, P01, P02, P03, P04, P05, P16, RUS, SAG, SAW, SBE, SB1,  SHL, SPF, STA, STJ, S10, S61, TER, TLA, TOL, T17, T36, T37, T38, WBY, WIN, WND, WOR",
                                    "Plan_Products__PPO__HMO__MA__W": "Medicare Advantage",
                                    "Timely_Filing_____only": "180",
                                    "OASIS": "Yes",
                                    "Face_to_Face": "Yes",
                                    "National_or_State": "National",
                                    "Region": "Elara Caring",
                                    "State": "National",
                                    "Entity": "Elara Caring",
                                    "Contract_Effective_Date": "2020-10-15",
                                    "Appeal_Timeframe": "180",
                                    "Rev_Code_HCPC": "CMS",
                                    "Related_Payors": "ID Numbers: PBP –Aetna MA (Coventry) H –Aetna MA"
                                }
                            ]
                        }
                    }
                },
                "security": []
            }
        },
        "/smartsheet/RegionList": {
            "post": {
                "tags": ["Smartsheet"],
                    "description": "Region list",
                        "operationId": "RegionList",
                            "produces": ["application/json"],
                                "responses": {
                    "200": {
                        "description": "OK",
                            "schema": {
                            "type": "array",
                                "items": { "type": "string" }
                        },
                        "examples": { "application/json": ["Elara Caring", "Midwest", "South", "Northeast"] }
                    }
                },
                "security": []
            }
        },
        "/smartsheet/RegionPayorList": {
            "post": {
                "tags": ["Smartsheet"],
                    "description": "Region payor list",
                        "operationId": "RegionPayorList",
                            "consumes": ["application/x-www-form-urlencoded"],
                                "produces": ["application/json"],
                                    "parameters": [
                                        {
                                            "name": "region",
                                            "in": "formData",
                                            "description": "region",
                                            "required": true,
                                            "type": "string",
                                            "x-example": ""
                                        }
                                    ],
                                        "responses": {
                    "200": {
                        "description": "OK",
                            "schema": {
                            "type": "array",
                                "items": { "$ref": "#/definitions/RegionPayorList" }
                        },
                        "examples": {
                            "application/json": [
                                {
                                    "region": "Elara Caring",
                                    "payor": "Aetna"
                                }
                            ]
                        }
                    }
                },
                "security": []
            }
        }
    },
    "definitions": {
        "PayorMatrix": {
            "description": "Model for PayorMatrix",
                "required": ["Appeal_Timeframe"],
                    "properties": {
                "Appeal_Timeframe": {
                    "type": "string",
                        "x-example": "180"
                },
                "Authorization_Details": {
                    "type": "string",
                        "x-example": "Not In Contract"
                },
                "Authorization_Required": {
                    "type": "string",
                        "x-example": "Not In Contract"
                },
                "Branches": {
                    "type": "string",
                        "x-example": "A01, A02, A03, A04, A05, A06, A07, A08, A09, A10, A11, A12, A13,  A14"
                },
                "Contract_Effective_Date": {
                    "type": "string",
                        "x-example": "2020-10-15"
                },
                "Entity": {
                    "type": "string",
                        "x-example": "Aspire"
                },
                "Face_to_Face": {
                    "type": "string",
                        "x-example": "No"
                },
                "HCHB_Payor": {
                    "type": "string",
                        "x-example": "AETNA COMMERCIAL"
                },
                "HCHB_Payor_Type": {
                    "type": "string",
                        "x-example": "Commercial Insurance"
                },
                "Id": {
                    "type": "integer",
                        "format": "int32",
                            "x-example": "93"
                },
                "National_or_State": {
                    "type": "string",
                        "x-example": "National"
                },
                "OASIS": {
                    "type": "string",
                        "x-example": "No"
                },
                "Payor": {
                    "type": "string",
                        "x-example": "BCBS of OK"
                },
                "Payor_Class": {
                    "type": "string",
                        "x-example": "Commercial"
                },
                "Plan_Products__PPO__HMO__MA__W": {
                    "type": "string",
                        "x-example": "HMO, POS, Blue Care, Blue CardPOS, PPO, EPO, CDHP"
                },
                "Primary": {
                    "type": "string",
                        "x-example": "BCBS of OK_Aspire_10.1.2010"
                },
                "Region": {
                    "type": "string",
                        "x-example": "South"
                },
                "Reimbursement_Method_____Bill_": {
                    "type": "string",
                        "x-example": "Fee for Service (FFS)"
                },
                "Related_Payors": {
                    "type": "string",
                        "x-example": ""
                },
                "Retro_Authorization__yes_or_no": {
                    "type": "string",
                        "x-example": "Not In Contract"
                },
                "Rev_Code_HCPC": {
                    "type": "string",
                        "x-example": "CMS"
                },
                "State": {
                    "type": "string",
                        "x-example": "OK"
                },
                "Timely_Filing_____only": {
                    "type": "string",
                        "x-example": "180"
                }
            }
        },
        "RegionPayorList": {
            "description": "Model for RegionPayorList",
                "required": ["payor"],
                    "properties": {
                "payor": {
                    "type": "string",
                        "x-example": "Aetna"
                },
                "region": {
                    "type": "string",
                        "x-example": "Elara Caring"
                }
            }
        },
        "HchbPayorList": {
            "description": "Model for HchbPayorList",
                "required": ["hchb"],
                    "properties": {
                "hchb": {
                    "type": "string",
                        "x-example": "AETNA COMMERCIAL"
                },
                "payor": {
                    "type": "string",
                        "x-example": "Aetna"
                },
                "region": {
                    "type": "string",
                        "x-example": "Elara Caring"
                }
            }
        },
        "Payorlist": {
            "description": "Model for Payorlist",
                "required": ["name"],
                    "properties": {
                "name": {
                    "type": "string",
                        "x-example": "BCBS OF LOUISIANA"
                }
            }
        },
        "GetNppesInfo": {
            "description": "Model for GetNppesInfo",
                "required": ["Address1"],
                    "properties": {
                "Address1": {
                    "type": "string",
                        "x-example": "1720 FENNELL ST"
                },
                "City": {
                    "type": "string",
                        "x-example": "WOODHAVEN"
                },
                "FaxNumber": {
                    "type": "string",
                        "x-example": "321-800-3383"
                },
                "FirstName": {
                    "type": "string",
                        "x-example": "ESTEBAN"
                },
                "FullName": {
                    "type": "string",
                        "x-example": "BENAVIDES ESTEBAN"
                },
                "Gender": {
                    "type": "string",
                        "x-example": "M"
                },
                "LastName": {
                    "type": "string",
                        "x-example": "BENAVIDES"
                },
                "Number": {
                    "type": "integer",
                        "format": "int32",
                            "x-example": "1255687570"
                },
                "PostalCode": {
                    "type": "string",
                        "x-example": "32751"
                },
                "State": {
                    "type": "string",
                        "x-example": "NY"
                },
                "TaxonomyCode": {
                    "type": "string",
                        "x-example": "111N00000X"
                },
                "TaxonomyDescription": {
                    "type": "string",
                        "x-example": "Chiropractor"
                },
                "TaxonomyLicense": {
                    "type": "string",
                        "x-example": "CH9501"
                },
                "TaxonomyPrimary": {
                    "type": "boolean",
                        "x-example": "true"
                },
                "TaxonomyState": {
                    "type": "string",
                        "x-example": "FL"
                },
                "Telephone": {
                    "type": "string",
                        "x-example": "718-805-0037"
                }
            }
        },
        "Location": {
            "description": "Model for Location",
                "required": ["City"],
                    "properties": {
                "City": {
                    "type": "string",
                        "x-example": "BEVERLY HILLS"
                },
                "State": {
                    "type": "string",
                        "x-example": "CA"
                },
                "ZipCode": {
                    "type": "string",
                        "x-example": "90210"
                }
            }
        }
    },
    "securityDefinitions": { },
    "security": [],
        "tags": [
            {
                "name": "Locations",
                "description": "Operations about Locations"
            },
            {
                "name": "Nppes",
                "description": "Operations about Nppes"
            },
            {
                "name": "Smartsheet",
                "description": "Operations about Smartsheet"
            }
        ]
}