Skip to content
Why GitHub ?
    Team
Enterprise
Explore
Marketplace
Pricing
Search
Sign in
    Sign up
This repository has been archived by the owner.It is now read - only.
    pennsignals
    /
    swagger - specifications
Archived
14
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
swagger - specifications / specifications / twilio / swagger.json

rightlag Update Twilio Swagger specification
Latest commit 93c767e on Dec 16, 2016
History
0 contributors
148 lines(148 sloc)  5.53 KB

{
    "swagger": "2.0",
        "info": {
        "title": "Twilio API",
            "description": "Twilio REST API",
                "version": "1.0.0"
    },
    "host": "api.twilio.com",
        "schemes": [
            "https"
        ],
            "basePath": "/2010-04-01",
                "produces": [
                    "application/json"
                ],
                    "consumes": [
                        "application/x-www-form-urlencoded"
                    ],
                        "securityDefinitions": {
        "basicAuth": {
            "type": "basic"
        }
    },
    "paths": {
        "/Accounts/{AccountSid}/Messages.json": {
            "post": {
                "summary": "Send a new outgoing message",
                    "parameters": [
                        {
                            "name": "AccountSid",
                            "in": "path",
                            "description": "The application SID",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "To",
                            "in": "formData",
                            "description": "The destination phone number",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "From",
                            "in": "formData",
                            "description": "A Twilio phone number (in E.164 format) or alphanumeric sender ID enabled for the type of message you wish to send",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "MessagingServiceSid",
                            "in": "formData",
                            "description": "The 34 character unique id of the Messaging Service you want to associate with this Message",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "Body",
                            "in": "formData",
                            "description": "The text of the message you want to send, limited to 1600 characters",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "MediaUrl",
                            "in": "formData",
                            "description": "The URL of the media you wish to send out with the message. gif , png and jpeg content is currently supported and will be formatted correctly on the recipient's device",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "StatusCallback",
                            "in": "formData",
                            "description": "A URL that Twilio will POST to each time your message status changes to one of the following: queued, failed, sent, delivered, or undelivered",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "ApplicationSid",
                            "in": "formData",
                            "description": "Twilio will POST MessageSid as well as MessageStatus=sent or MessageStatus=failed to the URL in the MessageStatusCallback property of this Application",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "MaxPrice",
                            "in": "formData",
                            "description": "The total maximum price up to the fourth decimal (0.0001) in US dollars acceptable for the message to be delivered",
                            "required": false,
                            "type": "number",
                            "format": "double"
                        },
                        {
                            "name": "ProvideFeedback",
                            "in": "formData",
                            "description": "Set this value to true if you are sending messages that have a trackable user action and you intend to confirm delivery of the message using the Message Feedback API",
                            "required": false,
                            "type": "boolean",
                            "default": false
                        }
                    ],
                        "tags": [
                            "Messaging"
                        ],
                            "security": [
                                {
                                    "basicAuth": []
                                }
                            ],
                                "responses": {
                    "200": {
                        "description": "Successful operation"
                    },
                    "default": {
                        "description": "Unexpected error",
                            "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "Error": {
            "type": "object",
                "properties": {
                "status": {
                    "type": "integer",
                        "format": "int32"
                },
                "message": {
                    "type": "string"
                },
                "detail": {
                    "type": "string"
                },
                "more_info": {
                    "type": "string"
                },
                "code": {
                    "type": "integer",
                        "format": "int32"
                }
            }
        }
    }
}
� 2021 GitHub, Inc.
    Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
