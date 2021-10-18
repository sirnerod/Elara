{
    "swagger": "2.0",
        "info": {
        "title": "Hhs",
            "description": "API for npiregistry.cms.hhs.gov",
                "version": "0.0.0"
    },
    "host": "npiregistry.cms.hhs.gov",
        "schemes": ["https"],
            "paths": {
        "/api/": {
            "get": {
                "tags": ["Web"],
                    "description": "Get results",
                        "operationId": "get_results",
                            "produces": ["application/json"],
                                "parameters": [
                                    {
                                        "name": "version",
                                        "in": "query",
                                        "description": "Version",
                                        "required": true,
                                        "type": "string",
                                        "x-example": "2.1"
                                    },
                                    {
                                        "name": "number",
                                        "in": "query",
                                        "description": "number",
                                        "required": false,
                                        "type": "string",
                                        "x-example": ""
                                    },
                                    {
                                        "name": "first_name",
                                        "in": "query",
                                        "description": "first_name",
                                        "required": false,
                                        "type": "string",
                                        "x-example": ""
                                    },
                                    {
                                        "name": "last_name",
                                        "in": "query",
                                        "description": "last_name",
                                        "required": false,
                                        "type": "string",
                                        "x-example": ""
                                    },
                                    {
                                        "name": "organization_name",
                                        "in": "query",
                                        "description": "organization_name",
                                        "required": false,
                                        "type": "string",
                                        "x-example": ""
                                    },
                                    {
                                        "name": "enumeration_type",
                                        "in": "query",
                                        "description": "enumeration_type",
                                        "required": false,
                                        "type": "string",
                                        "x-example": ""
                                    },
                                    {
                                        "name": "taxonomy_description",
                                        "in": "query",
                                        "description": "taxonomy_description",
                                        "required": false,
                                        "type": "string",
                                        "x-example": ""
                                    },
                                    {
                                        "name": "use_first_name_alias",
                                        "in": "query",
                                        "description": "use_first_name_alias",
                                        "required": false,
                                        "type": "string",
                                        "x-example": ""
                                    },
                                    {
                                        "name": "address_purpose",
                                        "in": "query",
                                        "description": "address_purpose",
                                        "required": false,
                                        "type": "string",
                                        "x-example": ""
                                    },
                                    {
                                        "name": "city",
                                        "in": "query",
                                        "description": "city",
                                        "required": false,
                                        "type": "string",
                                        "x-example": ""
                                    },
                                    {
                                        "name": "state",
                                        "in": "query",
                                        "description": "state",
                                        "required": false,
                                        "type": "string",
                                        "x-example": ""
                                    },
                                    {
                                        "name": "postal_code",
                                        "in": "query",
                                        "description": "postal_code",
                                        "required": false,
                                        "type": "string",
                                        "x-example": ""
                                    },
                                    {
                                        "name": "country_code",
                                        "in": "query",
                                        "description": "country_code",
                                        "required": false,
                                        "type": "string",
                                        "x-example": ""
                                    },
                                    {
                                        "name": "limit",
                                        "in": "query",
                                        "description": "limit",
                                        "required": false,
                                        "type": "string",
                                        "x-example": ""
                                    },
                                    {
                                        "name": "skip",
                                        "in": "query",
                                        "description": "skip",
                                        "required": false,
                                        "type": "string",
                                        "x-example": ""
                                    },
                                    {
                                        "name": "pretty",
                                        "in": "query",
                                        "description": "pretty",
                                        "required": false,
                                        "type": "boolean",
                                        "x-example": ""
                                    }
                                ],
                                    "responses": {
                    "200": {
                        "description": "OK",
                            "schema": { "$ref": "#/definitions/NppesModel" },
                        "examples": {
                            "application/json": {
                                "result_count": 1,
                                    "results": [
                                        {
                                            "addresses": [
                                                {
                                                    "address_1": "1182 CYPRESS GLEN CIR",
                                                    "address_2": "",
                                                    "address_purpose": "LOCATION",
                                                    "address_type": "DOM",
                                                    "city": "KISSIMMEE",
                                                    "country_code": "US",
                                                    "country_name": "United States",
                                                    "fax_number": "407-350-5928",
                                                    "postal_code": "347417560",
                                                    "state": "FL",
                                                    "telephone_number": "407-350-5917"
                                                },
                                                {
                                                    "address_1": "1853 RAIN LILY PL",
                                                    "address_2": "",
                                                    "address_purpose": "MAILING",
                                                    "address_type": "DOM",
                                                    "city": "SAINT CLOUD",
                                                    "country_code": "US",
                                                    "country_name": "United States",
                                                    "postal_code": "347718557",
                                                    "state": "FL",
                                                    "telephone_number": "407-256-8373"
                                                }
                                            ],
                                            "basic": {
                                                "certification_date": "2020-09-28",
                                                "credential": "ARNP",
                                                "enumeration_date": "2020-09-28",
                                                "first_name": "ESTEBAN",
                                                "gender": "M",
                                                "last_name": "SANTOS",
                                                "last_updated": "2020-09-28",
                                                "name": "SANTOS ESTEBAN",
                                                "sole_proprietor": "NO",
                                                "status": "A"
                                            },
                                            "created_epoch": 1601251200,
                                            "enumeration_type": "NPI-1",
                                            "identifiers": [],
                                            "last_updated_epoch": 1601326935,
                                            "number": 1043827538,
                                            "other_names": [
                                                {
                                                    "code": "1",
                                                    "credential": "ARNP",
                                                    "first_name": "ESTEBAN",
                                                    "last_name": "SANTOS",
                                                    "type": "Former Name"
                                                }
                                            ],
                                            "taxonomies": [
                                                {
                                                    "code": "363LF0000X",
                                                    "desc": "Nurse Practitioner Family",
                                                    "license": "11009008",
                                                    "primary": true,
                                                    "state": "FL"
                                                }
                                            ]
                                        }
                                    ]
                            }
                        }
                    }
                },
                "security": []
            }
        }
    },
    "definitions": {
        "NppesModel": {
            "description": "Model for NppesModel",
                "required": ["result_count"],
                    "properties": {
                "result_count": {
                    "type": "integer",
                        "format": "int32",
                            "x-example": "1"
                },
                "results": {
                    "type": "array",
                        "items": { "$ref": "#/definitions/Results" },
                    "x-example": "[\r\n  {\r\n    \"addresses\": [\r\n      {\r\n        \"address_1\": \"1182 CYPRESS GLEN CIR\",\r\n        \"address_2\": \"\",\r\n        \"address_purpose\": \"LOCATION\",\r\n        \"address_type\": \"DOM\",\r\n        \"city\": \"KISSIMMEE\",\r\n        \"country_code\": \"US\",\r\n        \"country_name\": \"United States\",\r\n        \"fax_number\": \"407-350-5928\",\r\n        \"postal_code\": \"347417560\",\r\n        \"state\": \"FL\",\r\n        \"telephone_number\": \"407-350-5917\"\r\n      },\r\n      {\r\n        \"address_1\": \"1853 RAIN LILY PL\",\r\n        \"address_2\": \"\",\r\n        \"address_purpose\": \"MAILING\",\r\n        \"address_type\": \"DOM\",\r\n        \"city\": \"SAINT CLOUD\",\r\n        \"country_code\": \"US\",\r\n        \"country_name\": \"United States\",\r\n        \"postal_code\": \"347718557\",\r\n        \"state\": \"FL\",\r\n        \"telephone_number\": \"407-256-8373\"\r\n      }\r\n    ],\r\n    \"basic\": {\r\n      \"certification_date\": \"2020-09-28\",\r\n      \"credential\": \"ARNP\",\r\n      \"enumeration_date\": \"2020-09-28\",\r\n      \"first_name\": \"ESTEBAN\",\r\n      \"gender\": \"M\",\r\n      \"last_name\": \"SANTOS\",\r\n      \"last_updated\": \"2020-09-28\",\r\n      \"name\": \"SANTOS ESTEBAN\",\r\n      \"sole_proprietor\": \"NO\",\r\n      \"status\": \"A\"\r\n    },\r\n    \"created_epoch\": 1601251200,\r\n    \"enumeration_type\": \"NPI-1\",\r\n    \"identifiers\": [\r\n\r\n    ],\r\n    \"last_updated_epoch\": 1601326935,\r\n    \"number\": 1043827538,\r\n    \"other_names\": [\r\n      {\r\n        \"code\": \"1\",\r\n        \"credential\": \"ARNP\",\r\n        \"first_name\": \"ESTEBAN\",\r\n        \"last_name\": \"SANTOS\",\r\n        \"type\": \"Former Name\"\r\n      }\r\n    ],\r\n    \"taxonomies\": [\r\n      {\r\n        \"code\": \"363LF0000X\",\r\n        \"desc\": \"Nurse Practitioner Family\",\r\n        \"license\": \"11009008\",\r\n        \"primary\": true,\r\n        \"state\": \"FL\"\r\n      }\r\n    ]\r\n  }\r\n]"
                }
            }
        },
        "Results": {
            "description": "Model for Results",
                "required": ["addresses"],
                    "properties": {
                "addresses": {
                    "type": "array",
                        "items": { "$ref": "#/definitions/Addresses" },
                    "x-example": "[\n  {\n    \"address_1\": \"1182 CYPRESS GLEN CIR\",\n    \"address_2\": \"\",\n    \"address_purpose\": \"LOCATION\",\n    \"address_type\": \"DOM\",\n    \"city\": \"KISSIMMEE\",\n    \"country_code\": \"US\",\n    \"country_name\": \"United States\",\n    \"fax_number\": \"407-350-5928\",\n    \"postal_code\": \"347417560\",\n    \"state\": \"FL\",\n    \"telephone_number\": \"407-350-5917\"\n  },\n  {\n    \"address_1\": \"1853 RAIN LILY PL\",\n    \"address_2\": \"\",\n    \"address_purpose\": \"MAILING\",\n    \"address_type\": \"DOM\",\n    \"city\": \"SAINT CLOUD\",\n    \"country_code\": \"US\",\n    \"country_name\": \"United States\",\n    \"postal_code\": \"347718557\",\n    \"state\": \"FL\",\n    \"telephone_number\": \"407-256-8373\"\n  }\n]"
                },
                "basic": {
                    "$ref": "#/definitions/Basic",
                        "x-example": "{\n  \"certification_date\": \"2020-09-28\",\n  \"credential\": \"ARNP\",\n  \"enumeration_date\": \"2020-09-28\",\n  \"first_name\": \"ESTEBAN\",\n  \"gender\": \"M\",\n  \"last_name\": \"SANTOS\",\n  \"last_updated\": \"2020-09-28\",\n  \"name\": \"SANTOS ESTEBAN\",\n  \"sole_proprietor\": \"NO\",\n  \"status\": \"A\"\n}"
                },
                "created_epoch": {
                    "type": "integer",
                        "format": "int32",
                            "x-example": "1601251200"
                },
                "enumeration_type": {
                    "type": "string",
                        "x-example": "NPI-1"
                },
                "identifiers": {
                    "type": "array",
                        "items": { "type": "string" },
                    "x-example": "[]"
                },
                "last_updated_epoch": {
                    "type": "integer",
                        "format": "int32",
                            "x-example": "1601326935"
                },
                "number": {
                    "type": "integer",
                        "format": "int32",
                            "x-example": "1043827538"
                },
                "other_names": {
                    "type": "array",
                        "items": { "$ref": "#/definitions/OtherNames" },
                    "x-example": "[\n  {\n    \"code\": \"1\",\n    \"credential\": \"ARNP\",\n    \"first_name\": \"ESTEBAN\",\n    \"last_name\": \"SANTOS\",\n    \"type\": \"Former Name\"\n  }\n]"
                },
                "taxonomies": {
                    "type": "array",
                        "items": { "$ref": "#/definitions/Taxonomies" },
                    "x-example": "[\n  {\n    \"code\": \"363LF0000X\",\n    \"desc\": \"Nurse Practitioner Family\",\n    \"license\": \"11009008\",\n    \"primary\": true,\n    \"state\": \"FL\"\n  }\n]"
                }
            }
        },
        "Taxonomies": {
            "description": "Model for Taxonomies",
                "required": ["code"],
                    "properties": {
                "code": {
                    "type": "string",
                        "x-example": "363LF0000X"
                },
                "desc": {
                    "type": "string",
                        "x-example": "Nurse Practitioner Family"
                },
                "license": {
                    "type": "string",
                        "x-example": "11009008"
                },
                "primary": {
                    "type": "boolean",
                        "x-example": "true"
                },
                "state": {
                    "type": "string",
                        "x-example": "FL"
                }
            }
        },
        "OtherNames": {
            "description": "Model for OtherNames",
                "required": ["code"],
                    "properties": {
                "code": {
                    "type": "string",
                        "x-example": "1"
                },
                "credential": {
                    "type": "string",
                        "x-example": "ARNP"
                },
                "first_name": {
                    "type": "string",
                        "x-example": "ESTEBAN"
                },
                "last_name": {
                    "type": "string",
                        "x-example": "SANTOS"
                },
                "type": {
                    "type": "string",
                        "x-example": "Former Name"
                }
            }
        },
        "Basic": {
            "description": "Model for Basic",
                "required": ["certification_date"],
                    "properties": {
                "certification_date": {
                    "type": "string",
                        "format": "date",
                            "x-example": "2020-09-28"
                },
                "credential": {
                    "type": "string",
                        "x-example": "ARNP"
                },
                "enumeration_date": {
                    "type": "string",
                        "format": "date",
                            "x-example": "2020-09-28"
                },
                "first_name": {
                    "type": "string",
                        "x-example": "ESTEBAN"
                },
                "gender": {
                    "type": "string",
                        "x-example": "M"
                },
                "last_name": {
                    "type": "string",
                        "x-example": "SANTOS"
                },
                "last_updated": {
                    "type": "string",
                        "format": "date",
                            "x-example": "2020-09-28"
                },
                "middle_name": {
                    "type": "string",
                        "x-example": "RAE"
                },
                "name": {
                    "type": "string",
                        "x-example": "SANTOS ESTEBAN"
                },
                "name_prefix": {
                    "type": "string",
                        "x-example": "DR."
                },
                "sole_proprietor": {
                    "type": "string",
                        "x-example": "NO"
                },
                "status": {
                    "type": "string",
                        "x-example": "A"
                }
            }
        },
        "Addresses": {
            "description": "Model for Addresses",
                "required": ["address_1"],
                    "properties": {
                "address_1": {
                    "type": "string",
                        "x-example": "1182 CYPRESS GLEN CIR"
                },
                "address_2": {
                    "type": "string",
                        "x-example": ""
                },
                "address_purpose": {
                    "type": "string",
                        "x-example": "LOCATION"
                },
                "address_type": {
                    "type": "string",
                        "x-example": "DOM"
                },
                "city": {
                    "type": "string",
                        "x-example": "KISSIMMEE"
                },
                "country_code": {
                    "type": "string",
                        "x-example": "US"
                },
                "country_name": {
                    "type": "string",
                        "x-example": "United States"
                },
                "fax_number": {
                    "type": "string",
                        "x-example": "407-350-5928"
                },
                "postal_code": {
                    "type": "string",
                        "x-example": "347417560"
                },
                "state": {
                    "type": "string",
                        "x-example": "FL"
                },
                "telephone_number": {
                    "type": "string",
                        "x-example": "407-350-5917"
                }
            }
        }
    },
    "securityDefinitions": { },
    "security": [],
        "tags": [
            {
                "name": "Web",
                "description": "Operations about Web"
            }
        ]
}