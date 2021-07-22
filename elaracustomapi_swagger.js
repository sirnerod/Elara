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
                                { "name": "BCBS OF LOUISIANA" }
                            ]
                        }
                    }
                },
                "security": []
            }
        }
    },
    "definitions": {
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
                "name": "Smartsheet",
                "description": "Operations about Smartsheet"
            }
        ]
}