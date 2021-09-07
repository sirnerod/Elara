{
    "swagger": "2.0",
        "info": {
        "title": "Twilio",
            "description": "API for api.twilio.com",
                "version": "0.0.0"
    },
    "host": "api.twilio.com",
        "schemes": ["https"],
            "paths": {
        "/2010-04-01/Accounts/{TwilioAccountSID}/Messages.json": {
            "post": {
                "tags": ["2010_04_01"],
                    "summary": "Send SMS",
                        "description": "Send SMS",
                            "operationId": "SendSMS",
                                "consumes": ["application/x-www-form-urlencoded"],
                                    "produces": ["application/json"],
                                        "parameters": [{
                                            "name": "From",
                                            "in": "formData",
                                            "description": "From",
                                            "required": true,
                                            "type": "string",
                                            "x-example": ""
                                        }, {
                                            "name": "To",
                                            "in": "formData",
                                            "description": "To",
                                            "required": true,
                                            "type": "string",
                                            "x-example": ""
                                        }, {
                                            "name": "Body",
                                            "in": "formData",
                                            "description": "Body",
                                            "required": true,
                                            "type": "string",
                                            "x-example": ""
                                        }],
                                            "responses": {
                    "200": {
                        "description": "OK",
                            "schema": {
                            "$ref": "#/definitions/Response"
                        },
                        "examples": {
                            "application/json": {
                                "account_sid": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                                    "api_version": "2010-04-01",
                                        "body": "This is the ship that made the Kessel Run in fourteen parsecs?",
                                            "date_created": "Thu, 30 Jul 2015 20:12:31 +0000",
                                                "date_sent": "Thu, 30 Jul 2015 20:12:33 +0000",
                                                    "date_updated": "Thu, 30 Jul 2015 20:12:33 +0000",
                                                        "direction": "outbound-api",
                                                            "error_code": null,
                                                                "error_message": null,
                                                                    "from": "+15017122661",
                                                                        "messaging_service_sid": "MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                                                                            "num_media": "0",
                                                                                "num_segments": "1",
                                                                                    "price": null,
                                                                                        "price_unit": null,
                                                                                            "sid": "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                                                                                                "status": "sent",
                                                                                                    "subresource_uris": {
                                    "media": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Media.json"
                                },
                                "to": "+15558675310",
                                    "uri": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.json"
                            }
                        }
                    }
                },
                "security": [{
                    "Default": []
                }]
            }
        }
    },
    "definitions": {
        "Response": {
            "description": "Model for Response",
                "required": ["account_sid"],
                    "properties": {
                "account_sid": {
                    "type": "string",
                        "x-example": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                },
                "api_version": {
                    "type": "string",
                        "format": "date",
                            "x-example": "2010-04-01"
                },
                "body": {
                    "type": "string",
                        "x-example": "This is the ship that made the Kessel Run in fourteen parsecs?"
                },
                "date_created": {
                    "type": "string",
                        "x-example": "Thu, 30 Jul 2015 20:12:31 +0000"
                },
                "date_sent": {
                    "type": "string",
                        "x-example": "Thu, 30 Jul 2015 20:12:33 +0000"
                },
                "date_updated": {
                    "type": "string",
                        "x-example": "Thu, 30 Jul 2015 20:12:33 +0000"
                },
                "direction": {
                    "type": "string",
                        "x-example": "outbound-api"
                },
                "error_code": {
                    "type": "string",
                        "x-example": ""
                },
                "error_message": {
                    "type": "string",
                        "x-example": ""
                },
                "from": {
                    "type": "string",
                        "x-example": "+15017122661"
                },
                "messaging_service_sid": {
                    "type": "string",
                        "x-example": "MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                },
                "num_media": {
                    "type": "string",
                        "x-example": "0"
                },
                "num_segments": {
                    "type": "string",
                        "x-example": "1"
                },
                "price": {
                    "type": "string",
                        "x-example": ""
                },
                "price_unit": {
                    "type": "string",
                        "x-example": ""
                },
                "sid": {
                    "type": "string",
                        "x-example": "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                },
                "status": {
                    "type": "string",
                        "x-example": "sent"
                },
                "subresource_uris": {
                    "$ref": "#/definitions/SubresourceUris",
                        "x-example": "{\r\n  \"media\": \"/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Media.json\"\r\n}"
                },
                "to": {
                    "type": "string",
                        "x-example": "+15558675310"
                },
                "uri": {
                    "type": "string",
                        "x-example": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.json"
                }
            }
        },
        "SubresourceUris": {
            "description": "Model for SubresourceUris",
                "required": ["media"],
                    "properties": {
                "media": {
                    "type": "string",
                        "x-example": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Media.json"
                }
            }
        }
    },
    "securityDefinitions": {
        "Default": {
            "description": "Default authentication scheme for the API",
                "type": "basic"
        }
    },
    "security": [],
        "tags": [{
            "name": "2010_04_01",
            "description": "Operations about 2010_04_01"
        }]
} {
    "swagger": "2.0",
        "info": {
        "title": "Twilio",
            "description": "API for api.twilio.com",
                "version": "0.0.0"
    },
    "host": "api.twilio.com",
        "schemes": ["https"],
            "paths": {
        "/2010-04-01/Accounts/{TwilioAccountSID}/Messages.json": {
            "post": {
                "tags": ["2010_04_01"],
                    "summary": "Send SMS",
                        "description": "Send SMS",
                            "operationId": "SendSMS",
                                "consumes": ["application/x-www-form-urlencoded"],
                                    "produces": ["application/json"],
                                        "parameters": [{
                                            "name": "From",
                                            "in": "formData",
                                            "description": "From",
                                            "required": true,
                                            "type": "string",
                                            "x-example": ""
                                        }, {
                                            "name": "To",
                                            "in": "formData",
                                            "description": "To",
                                            "required": true,
                                            "type": "string",
                                            "x-example": ""
                                        }, {
                                            "name": "Body",
                                            "in": "formData",
                                            "description": "Body",
                                            "required": true,
                                            "type": "string",
                                            "x-example": ""
                                        }],
                                            "responses": {
                    "200": {
                        "description": "OK",
                            "schema": {
                            "$ref": "#/definitions/Response"
                        },
                        "examples": {
                            "application/json": {
                                "account_sid": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                                    "api_version": "2010-04-01",
                                        "body": "This is the ship that made the Kessel Run in fourteen parsecs?",
                                            "date_created": "Thu, 30 Jul 2015 20:12:31 +0000",
                                                "date_sent": "Thu, 30 Jul 2015 20:12:33 +0000",
                                                    "date_updated": "Thu, 30 Jul 2015 20:12:33 +0000",
                                                        "direction": "outbound-api",
                                                            "error_code": null,
                                                                "error_message": null,
                                                                    "from": "+15017122661",
                                                                        "messaging_service_sid": "MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                                                                            "num_media": "0",
                                                                                "num_segments": "1",
                                                                                    "price": null,
                                                                                        "price_unit": null,
                                                                                            "sid": "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                                                                                                "status": "sent",
                                                                                                    "subresource_uris": {
                                    "media": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Media.json"
                                },
                                "to": "+15558675310",
                                    "uri": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.json"
                            }
                        }
                    }
                },
                "security": [{
                    "Default": []
                }]
            }
        }
    },
    "definitions": {
        "Response": {
            "description": "Model for Response",
                "required": ["account_sid"],
                    "properties": {
                "account_sid": {
                    "type": "string",
                        "x-example": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                },
                "api_version": {
                    "type": "string",
                        "format": "date",
                            "x-example": "2010-04-01"
                },
                "body": {
                    "type": "string",
                        "x-example": "This is the ship that made the Kessel Run in fourteen parsecs?"
                },
                "date_created": {
                    "type": "string",
                        "x-example": "Thu, 30 Jul 2015 20:12:31 +0000"
                },
                "date_sent": {
                    "type": "string",
                        "x-example": "Thu, 30 Jul 2015 20:12:33 +0000"
                },
                "date_updated": {
                    "type": "string",
                        "x-example": "Thu, 30 Jul 2015 20:12:33 +0000"
                },
                "direction": {
                    "type": "string",
                        "x-example": "outbound-api"
                },
                "error_code": {
                    "type": "string",
                        "x-example": ""
                },
                "error_message": {
                    "type": "string",
                        "x-example": ""
                },
                "from": {
                    "type": "string",
                        "x-example": "+15017122661"
                },
                "messaging_service_sid": {
                    "type": "string",
                        "x-example": "MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                },
                "num_media": {
                    "type": "string",
                        "x-example": "0"
                },
                "num_segments": {
                    "type": "string",
                        "x-example": "1"
                },
                "price": {
                    "type": "string",
                        "x-example": ""
                },
                "price_unit": {
                    "type": "string",
                        "x-example": ""
                },
                "sid": {
                    "type": "string",
                        "x-example": "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                },
                "status": {
                    "type": "string",
                        "x-example": "sent"
                },
                "subresource_uris": {
                    "$ref": "#/definitions/SubresourceUris",
                        "x-example": "{\r\n  \"media\": \"/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Media.json\"\r\n}"
                },
                "to": {
                    "type": "string",
                        "x-example": "+15558675310"
                },
                "uri": {
                    "type": "string",
                        "x-example": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.json"
                }
            }
        },
        "SubresourceUris": {
            "description": "Model for SubresourceUris",
                "required": ["media"],
                    "properties": {
                "media": {
                    "type": "string",
                        "x-example": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Media.json"
                }
            }
        }
    },
    "securityDefinitions": {
        "Default": {
            "description": "Default authentication scheme for the API",
                "type": "basic"
        }
    },
    "security": [],
        "tags": [{
            "name": "2010_04_01",
            "description": "Operations about 2010_04_01"
        }]
}