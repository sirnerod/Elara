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
        }
    },
    "definitions": {
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