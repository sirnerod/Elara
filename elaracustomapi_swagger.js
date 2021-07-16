{
  "swagger": "2.0",
  "info": {
    "title": "Elara Custom Api",
    "description": "API for elara-custom-api.herokuapp.com",
    "version": "0.0.0"
  },
  "host": "elara-custom-api.herokuapp.com",
  "schemes": [ "https" ],
  "paths": {
    "/smartsheet/payorlist": {
      "get": {
        "tags": [ "Smartsheet" ],
        "description": "Payorlist",
        "operationId": "payorlist",
        "produces": [ "application/json" ],
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
      "required": [ "name" ],
      "properties": {
        "name": {
          "type": "string",
          "x-example": "BCBS OF LOUISIANA"
        }
      }
    }
  },
  "securityDefinitions": {},
  "security": [],
  "tags": [
    {
      "name": "Smartsheet",
      "description": "Operations about Smartsheet"
    }
  ]
}