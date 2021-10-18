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
                                    "parameters": [{
                                        "name": "number",
                                        "in": "formData",
                                        "description": "number",
                                        "required": false,
                                        "type": "string",
                                        "x-example": ""
                                    }, {
                                        "name": "first_name",
                                        "in": "formData",
                                        "description": "first_name",
                                        "required": false,
                                        "type": "string",
                                        "x-example": ""
                                    }, {
                                        "name": "last_name",
                                        "in": "formData",
                                        "description": "last_name",
                                        "required": false,
                                        "type": "string",
                                        "x-example": ""
                                    }, {
                                        "name": "organization_name",
                                        "in": "formData",
                                        "description": "organization_name",
                                        "required": false,
                                        "type": "string",
                                        "x-example": ""
                                    }],
                                        "responses": {
                    "200": {
                        "description": "OK",
                            "schema": {
                            "type": "array",
                                "items": {
                                "$ref": "#/definitions/GetNppesInfo"
                            }
                        },
                        "examples": {
                            "application/json": [{
                                "FirstName": "ESTEBAN",
                                "LastName": "ROMANO",
                                "FullName": "ROMANO ESTEBAN",
                                "Gender": "M",
                                "Number": 1386643682,
                                "City": "SLIDELL",
                                "State": "LA",
                                "Telephone": "985-639-3777"
                            }, {
                                "FirstName": "ESTEBAN",
                                "LastName": "LOMNITZ",
                                "FullName": "LOMNITZ ESTEBAN",
                                "Gender": "M",
                                "Number": 1992797740,
                                "City": "SCOTCH PLAINS",
                                "State": "NJ",
                                "Telephone": "908-322-7786"
                            }, {
                                "FirstName": "ESTEBAN",
                                "LastName": "ABELLA",
                                "FullName": "ABELLA ESTEBAN",
                                "Gender": "M",
                                "Number": 1982697306,
                                "City": "MESA",
                                "State": "AZ",
                                "Telephone": "480-833-1123"
                            }, {
                                "FirstName": "ESTEBAN",
                                "LastName": "MILLER",
                                "FullName": "MILLER ESTEBAN",
                                "Gender": "M",
                                "Number": 1346236478,
                                "City": "BLACK RIVER FALLS",
                                "State": "WI",
                                "Telephone": "715-284-5361"
                            }, {
                                "FirstName": "ESTEBAN",
                                "LastName": "GENAO",
                                "FullName": "GENAO ESTEBAN",
                                "Gender": "M",
                                "Number": 1902894421,
                                "City": "MIAMI",
                                "State": "FL",
                                "Telephone": "305-387-2060"
                            }, {
                                "FirstName": "ESTEBAN",
                                "LastName": "MARTINEZ LUGO",
                                "FullName": "MARTINEZ LUGO ESTEBAN",
                                "Gender": "M",
                                "Number": 1043209083,
                                "City": "SANTURCE",
                                "State": "PR",
                                "Telephone": "787-999-7620"
                            }, {
                                "FirstName": "ESTEBAN",
                                "LastName": "MANALE",
                                "FullName": "MANALE ESTEBAN",
                                "Gender": "M",
                                "Number": 1235114414,
                                "City": "DOWNEY",
                                "State": "CA",
                                "Telephone": "562-927-5820"
                            }, {
                                "FirstName": "ESTEBAN",
                                "LastName": "LOPEZ",
                                "FullName": "LOPEZ ESTEBAN",
                                "Gender": "M",
                                "Number": 1356313126,
                                "City": "SAN ANTONIO",
                                "State": "TX",
                                "Telephone": "210-566-5555"
                            }, {
                                "FirstName": "ESTEBAN",
                                "LastName": "LUGO",
                                "FullName": "LUGO ESTEBAN",
                                "Gender": "M",
                                "Number": 1225004880,
                                "City": "COON RAPIDS",
                                "State": "MN",
                                "Telephone": "763-323-3042"
                            }, {
                                "FirstName": "ESTEBAN",
                                "LastName": "LIZARRAGA",
                                "FullName": "LIZARRAGA ESTEBAN",
                                "Gender": "M",
                                "Number": 1841252368,
                                "City": "PATILLAS",
                                "State": "PR",
                                "Telephone": "787-839-2946"
                            }]
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
                                "parameters": [{
                                    "name": "zipcode",
                                    "in": "path",
                                    "description": "Zipcode",
                                    "required": true,
                                    "type": "string",
                                    "x-example": ""
                                }],
                                    "responses": {
                    "200": {
                        "description": "OK",
                            "schema": {
                            "$ref": "#/definitions/Location"
                        },
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
                                "items": {
                                "$ref": "#/definitions/Payorlist"
                            }
                        },
                        "examples": {
                            "application/json": [{
                                "name": "BCBS OF LOUISIANA"
                            }, {
                                "name": "ILLINICARE/CELTIC OF ILLINOIS"
                            }, {
                                "name": "ILLINICARE/CELTIC OF ILLINOIS MGD MCA - PDGM"
                            }, {
                                "name": "AETNA BETTER HEALTH OF LOUISIANA"
                            }, {
                                "name": "AETNA BETTER HEALTH MICHIGAN"
                            }, {
                                "name": "AETNA BETTER HEALTH MICHIGAN-PDGM"
                            }, {
                                "name": "AETNA BETTER HEALTH OHIO"
                            }, {
                                "name": "AETNA BETTER HEALTH OHIO-PDGM"
                            }, {
                                "name": "AETNA BETTER HEALTH TEXAS"
                            }, {
                                "name": "AETNA BETTER HEALTH TEXAS - PDGM (MMP)"
                            }, {
                                "name": "AETNA COVENTRY - UNTIL 11/1/2020"
                            }, {
                                "name": "AETNA COVENTRY MEDICARE - UNTIL 11/1/2020"
                            }, {
                                "name": "AETNA COMMERCIAL - NEHC - UNTIL 11/1/2020"
                            }, {
                                "name": "AETNA MEDICARE ADVANTAGE FFS - NEHC -UNTIL 11/1/20"
                            }, {
                                "name": "AETNA COMMERCIAL"
                            }, {
                                "name": "AETNA MEDICARE ADVANTAGE FFS"
                            }, {
                                "name": "Aetna Medicare-PDGM"
                            }, {
                                "name": "AMERIGROUP TEXAS"
                            }, {
                                "name": "AMERIGROUP LOUISIANA / HEALTHY BLUE LA"
                            }, {
                                "name": "AMERIHEALTH CARITAS MICHIGAN-PDGM"
                            }, {
                                "name": "AMERIHEALTH CARITAS LOUISIANA (LA CARE)"
                            }, {
                                "name": "ANN ARBOR HOME INFUSION PHARMACY"
                            }, {
                                "name": "Anthem Maine Health"
                            }, {
                                "name": "BCBS OF CONNECTICUT - ANTHEM"
                            }, {
                                "name": "BCBS of Connecticut - Anthem Federal"
                            }, {
                                "name": "BCBS OF CONNECTICUT - ANTHEM MCR ADV"
                            }, {
                                "name": "ANTHEM BCBS"
                            }, {
                                "name": "ANTHEM BCBS INDIANA MEDICAID"
                            }, {
                                "name": "ANTHEM BCBS MEDICARE ADV FFS"
                            }, {
                                "name": "ZZZ ANTHEM BCBS MEDICARE PPS"
                            }, {
                                "name": "ANTHEM HOOSIER HEALTHWISE (BSB)"
                            }, {
                                "name": "Area On Aging South Central Conn"
                            }, {
                                "name": "ASSURICARE"
                            }, {
                                "name": "BLUE CROSS BLUE SHIELD OF IL"
                            }, {
                                "name": "BLUE CROSS BLUE SHIELD OF IL-PDGM"
                            }, {
                                "name": "BLUE CROSS COMMUNITY MMAI-PDGM"
                            }, {
                                "name": "BLUE CROSS BLUE SHIELD OF IL - MCD"
                            }, {
                                "name": "HEALTHY BLUE DUAL ADVANTAGE/BCBS LA - PDGM"
                            }, {
                                "name": "BCBS BLUE CARD PROGRAM"
                            }, {
                                "name": "BCBS LA MEDICARE ADVANTAGE HMO -PDGM"
                            }, {
                                "name": "BCBS OF LA - PCN"
                            }, {
                                "name": "ZZZ DO NOT USE BCBS FEDERAL"
                            }, {
                                "name": "BLUE CROSS BLUE SHIELD OF MA"
                            }, {
                                "name": "BLUE CROSS BLUE SHIELD OF MA - MCR ADV"
                            }, {
                                "name": "BCBS OF MI CONFERENCE OF TEAMSTERS"
                            }, {
                                "name": "BCBS OF MICHIGAN FEDERAL"
                            }, {
                                "name": "BLUE CROSS BLUE SHIELD OF MI-PDGM"
                            }, {
                                "name": "BLUE CROSS BLUE SHIELD OF MI"
                            }, {
                                "name": "BLUE CROSS COMPLETE OF MICHIGAN"
                            }, {
                                "name": "ANTHEM BCBS OF MO MCR PLUS BLUE ADV PPO FFS"
                            }, {
                                "name": "BLUE CROSS AND BLUE SHIELD OF MISSOURI - HH"
                            }, {
                                "name": "BCBS OF OKLAHOMA"
                            }, {
                                "name": "BCBS MEDICARE ADVANTAGE-PDGM"
                            }, {
                                "name": "BCBS MEDICARE ADVANTAGE OK"
                            }, {
                                "name": "BEACON HEALTH SYSTEM"
                            }, {
                                "name": "BEAUMONT INFUSION PHARMACY"
                            }, {
                                "name": "BOSTON MEDICAL CENTER (BMC)"
                            }, {
                                "name": "YYY - BMC SENIOR CARE OPTIONS"
                            }, {
                                "name": "BUCKEYE COMMUNITY HEALTH PLAN - MCR-PDGM"
                            }, {
                                "name": "CARE N CARE MGD MCR FFS"
                            }, {
                                "name": "CARECENTRIX - NEHC"
                            }, {
                                "name": "CARECENTRIX - CLAIMS"
                            }, {
                                "name": "CCCI"
                            }, {
                                "name": "CIGNA BEHAVIORAL HEALTH"
                            }, {
                                "name": "Cigna Healthspring Medicare Advantage"
                            }, {
                                "name": "COFINITY PPOM"
                            }, {
                                "name": "COMMONWEALTH CARE ALLIANCE"
                            }, {
                                "name": "COMMUNITY HEALTH ALLIANCE"
                            }, {
                                "name": "CONNECTICARE"
                            }, {
                                "name": "CONNECTICARE MEDICARE ADVANTAGE"
                            }, {
                                "name": "Connecticut Medicaid"
                            }, {
                                "name": "COOK COUNTY HOSPITAL - MORECARE"
                            }, {
                                "name": "CORAM INFUSION"
                            }, {
                                "name": "COVENTRY HEALTH PLAN OF LA"
                            }, {
                                "name": "COVENTRY HEALTH PLAN OF LA (MCR)"
                            }, {
                                "name": "COVENTRY/ GHP"
                            }, {
                                "name": "Coventry/ GHP Advantra"
                            }, {
                                "name": "ESSENCE HEALTHCARE"
                            }, {
                                "name": "ESSENCE MEDICARE ADVANTAGE"
                            }, {
                                "name": "FALLON COMMERCIAL"
                            }, {
                                "name": "FALLON MEDICARE ADV - MRHHC"
                            }, {
                                "name": "FALLON COMMERCIAL - MRHHC"
                            }, {
                                "name": "Fallon Community - Summit Elder Care Plan"
                            }, {
                                "name": "FALLON MASS HEALTH - MRHHC"
                            }, {
                                "name": "FIDELIS SECURECARE"
                            }, {
                                "name": "FIDELIS SECURECARE -PDGM"
                            }, {
                                "name": "GENERATIONS HEALTHCARE"
                            }, {
                                "name": "GENERATIONS MEDICARE ADVANTAGE"
                            }, {
                                "name": "GLOBAL HEALTH INSURANCE"
                            }, {
                                "name": "GLOBAL HEALTH RESOURCE MCR ADV FFS"
                            }, {
                                "name": "HAP MIDWEST HEALTH PLAN - MEDICAID"
                            }, {
                                "name": "HAP MIDWEST HEALTH PLAN - MEDICARE PDGM"
                            }, {
                                "name": "HARVARD PILGRIM COMMERCIAL"
                            }, {
                                "name": "HARVARD PILGRIM MEDICARE STRIDE-PDGM"
                            }, {
                                "name": "HEALTH ALLIANCE"
                            }, {
                                "name": "HEALTH NET TRICARE-PDGM"
                            }, {
                                "name": "Healthcare Highways"
                            }, {
                                "name": "HEALTHCHOICE COMMERCIAL"
                            }, {
                                "name": "HEALTHLINK"
                            }, {
                                "name": "HOME STATE HEALTH PLAN"
                            }, {
                                "name": "HUMANA TRICARE SOUTH REGION"
                            }, {
                                "name": "HUMANA COMMERCIAL"
                            }, {
                                "name": "HUMANA MEDICARE ADVANTAGE"
                            }, {
                                "name": "Humana PFFS-PDGM"
                            }, {
                                "name": "INDIANA PRO HEALTH NETWORK"
                            }, {
                                "name": "INDIANA UNIVERSITY HEALTH PLAN-PDGM"
                            }, {
                                "name": "LOUISIANA HEALTHCARE CONNECTIONS - PRIMECARE"
                            }, {
                                "name": "LOUISIANA HEALTHCARE CONNECTIONS/ALLWELL-PDGM"
                            }, {
                                "name": "MaineCare Medicaid"
                            }, {
                                "name": "MARTIN'S POINT HEALTHCARE"
                            }, {
                                "name": "Martin's Point Healthcare PDGM"
                            }, {
                                "name": "MCLAREN HEALTH PLAN"
                            }, {
                                "name": "MCLAREN HEALTH PLAN MEDICAID"
                            }, {
                                "name": "MCLAREN HEALTH PLAN MEDICARE"
                            }, {
                                "name": "MDWISE HOOSIER ALLIANCE"
                            }, {
                                "name": "Medicaid Illinois"
                            }, {
                                "name": "Medicaid Indiana"
                            }, {
                                "name": "Louisiana Medicaid"
                            }, {
                                "name": "Medicaid MassHealth"
                            }, {
                                "name": "Medicaid Michigan"
                            }, {
                                "name": "Medicaid Ohio"
                            }, {
                                "name": "Medicaid-OHCA"
                            }, {
                                "name": "Medicaid TMHP"
                            }, {
                                "name": "MEDICALLY HOME"
                            }, {
                                "name": "NGS MA - Medicare"
                            }, {
                                "name": "NGS ME - Medicare"
                            }, {
                                "name": "NGS WI - Medicare"
                            }, {
                                "name": "Palmetto"
                            }, {
                                "name": "Mental Health Waiver (Wise Program)"
                            }, {
                                "name": "MERIDIAN -WELLCARE HEALTH PLAN MEDICARE-PDGM"
                            }, {
                                "name": "MERIDIAN HEALTH PLAN COMMERCIAL"
                            }, {
                                "name": "MERIDIAN HEALTH PLAN MEDICAID"
                            }, {
                                "name": "MHS ALLWELL MEDICARE ADVANTAGE-PDGM"
                            }, {
                                "name": "MHS AMBETTER COMMERCIAL"
                            }, {
                                "name": "MHS AMBETTER MEDICAID"
                            }, {
                                "name": "YYY - MHS AMBETTER MEDICARE ADVANTAGE"
                            }, {
                                "name": "Mohealth-Medicaid"
                            }, {
                                "name": "MOLINA HEALTHCARE OF ILLINOIS MCR-PDGM"
                            }, {
                                "name": "MOLINA HEALTHCARE OF ILLINOIS MEDICAID"
                            }, {
                                "name": "MOLINA HEALTHCARE OF MICHIGAN MEDICAID"
                            }, {
                                "name": "MOLINA HEALTHCARE OF MICHIGAN MEDICARE-PDGM"
                            }, {
                                "name": "MOLINA HEALTHCARE OF MICHIGAN"
                            }, {
                                "name": "MSC OCCM"
                            }, {
                                "name": "ANTHEM MEDICARE ADVANTAGE MYNEXUS"
                            }, {
                                "name": "AETNA MEDICARE ADVANTAGE MYNEXUS"
                            }, {
                                "name": "HUMANA MEDICARE ADVANTAGE MYNEXUS"
                            }, {
                                "name": "MYNEXUS"
                            }, {
                                "name": "LOA - OPTION CARE - MO"
                            }, {
                                "name": "OPTUMCARE"
                            }, {
                                "name": "PACIFICARE LIFE \u0026 HEALTH INSURANCE COMPANY"
                            }, {
                                "name": "PACIFICARE"
                            }, {
                                "name": "Peoples Health"
                            }, {
                                "name": "PHYSICIANS HEALTH PLAN OF NORTHERN INDIANA"
                            }, {
                                "name": "PLAIN CHURCH GROUP MINISTRY"
                            }, {
                                "name": "PRIORITY HEALTH MEDICARE"
                            }, {
                                "name": "PRIORITY HEALTH"
                            }, {
                                "name": "PRIORITY HEALTH MEDICAID"
                            }, {
                                "name": "REGENTS OF THE UNIVERSITY OF MICHIGAN"
                            }, {
                                "name": "Reliance Health Plan (RHP)-PDGM"
                            }, {
                                "name": "SAGAMORE HEALTH NETWORK"
                            }, {
                                "name": "SCOTT AND WHITE MEDICARE ADVANTAGE-PDGM"
                            }, {
                                "name": "Scott and White Health Plan"
                            }, {
                                "name": "Secure Horizons Medicare Direct - PDGM"
                            }, {
                                "name": "SENIOR WHOLE HEALTH"
                            }, {
                                "name": "SPARTAN PLAN IL PPS"
                            }, {
                                "name": "Superior Health Plan HH"
                            }, {
                                "name": "Superior Health Plan MCO"
                            }, {
                                "name": "Superior Medicare Advantage - PDGM"
                            }, {
                                "name": "South Western Conn Area On Aging"
                            }, {
                                "name": "Tricare for Life"
                            }, {
                                "name": "Tricare (Rural and Urban)-PDGM"
                            }, {
                                "name": "TRICARE (RURAL \u0026 URBAN)-PDGM"
                            }, {
                                "name": "TriWest Healthcare Choice Plan-PDGM"
                            }, {
                                "name": "TriWest WPS - VAC3-PDGM"
                            }, {
                                "name": "Triwest Healthcare Choice Plan-PDGM"
                            }, {
                                "name": "TRIWEST WPS - VAPC3-PDGM"
                            }, {
                                "name": "TUFTS HEALTH PLAN"
                            }, {
                                "name": "TUFTS HEALTH PLAN MEDICARE ADVANTAGE"
                            }, {
                                "name": "TUFTS PUBLIC PLAN (NETWORK HEALTH)"
                            }, {
                                "name": "Tufts Super Care - Non POC Required / Tufts Super Care - POC Required"
                            }, {
                                "name": "TUFTS UNIFY"
                            }, {
                                "name": "UHC VA CCN OPTUM PROGRAM-PDGM"
                            }, {
                                "name": "UHC VA CCN Optum Commercial"
                            }, {
                                "name": "UNITED BIOSOURCE LLC"
                            }, {
                                "name": "UNITED BEHAVIORAL HEALTH"
                            }, {
                                "name": "UNITED BEHAVIORAL HEALTH - MCR ADV"
                            }, {
                                "name": "OXFORD HEALTH PLAN"
                            }, {
                                "name": "UNITED HEALTHCARE - NORTHEAST"
                            }, {
                                "name": "UNITED HEALTHCARE MEDICARE ADVANTAGE FFS"
                            }, {
                                "name": "UNITED HEALTHCARE"
                            }, {
                                "name": "UMR - UNITED HEALTHCARE OPTIONS PPO"
                            }, {
                                "name": "UNITED HEALTHCARE OF LA"
                            }, {
                                "name": "UNITED HEALTHCARE (1500)"
                            }, {
                                "name": "UNITED HEALTHCARE - MEDISTAR"
                            }, {
                                "name": "SECURE HORIZONS PPO"
                            }, {
                                "name": "UNITED HEALTHCARE - PPO - PCN"
                            }, {
                                "name": "UNITED HEALTHCARE EVERCARE"
                            }, {
                                "name": "UNITED HEALTHCARE COMMUNITY PLAN"
                            }, {
                                "name": "SECURE HORIZONS MA FFS"
                            }, {
                                "name": "United Healthcare Medicare Direct-PDGM"
                            }, {
                                "name": "CARE IMPROVEMENT PLUS MCR ADV FFS"
                            }, {
                                "name": "VA - Battle Creek"
                            }, {
                                "name": "UNIVERSITY OF MISSOURI UNCOMPENSATED FUND"
                            }, {
                                "name": "VA - Ann Arbor"
                            }, {
                                "name": "VA - Detroit"
                            }, {
                                "name": "Hines VA Hospital"
                            }, {
                                "name": "VA - Indianapolis"
                            }, {
                                "name": "VA ILLIANA HEALTH CARE SYSTEM"
                            }, {
                                "name": "VA Northern Indiana Health Care System"
                            }, {
                                "name": "VA CT Fee Basis"
                            }, {
                                "name": "VA Episodic"
                            }, {
                                "name": "VAMC"
                            }, {
                                "name": "VA - Northampton"
                            }, {
                                "name": "VA- Boston"
                            }, {
                                "name": "VA Champus"
                            }, {
                                "name": "VA Columbia Hospital"
                            }, {
                                "name": "VA Medical Center St Louis"
                            }, {
                                "name": "VA Poplar Bluff"
                            }, {
                                "name": "VA-Muskogee"
                            }, {
                                "name": "VA-Oklahoma City"
                            }, {
                                "name": "VA - Michael E Debakey Medical Center Houston"
                            }, {
                                "name": "VA Medical Center Dallas"
                            }, {
                                "name": "VA Medical Center Shreveport"
                            }, {
                                "name": "VA North TX Healthcare"
                            }, {
                                "name": "VA- Central Texas Veteran Healthcare System"
                            }, {
                                "name": "VANTAGE COMMERCIAL"
                            }, {
                                "name": "VANTAGE HEALTH PLANS-PDGM"
                            }, {
                                "name": "WELLCARE-PDGM"
                            }, {
                                "name": "ZZZ DO NOT USE - WELLCARE OF LOUISIANA"
                            }, {
                                "name": "Wellmed"
                            }, {
                                "name": "WELLMED MCR ADVANTAGE FFS"
                            }, {
                                "name": "Western Conn Area On Aging"
                            }, {
                                "name": "YALE HEALTH"
                            }]
                        }
                    }
                },
                "security": []
            }
        }
    },
    "definitions": {
        "GetNppesInfo": {
            "description": "Model for GetNppesInfo",
                "required": ["City"],
                    "properties": {
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
                "State": {
                    "type": "string",
                        "x-example": "NY"
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
        "tags": [{
            "name": "Locations",
            "description": "Operations about Locations"
        }, {
            "name": "Nppes",
            "description": "Operations about Nppes"
        }, {
            "name": "Smartsheet",
            "description": "Operations about Smartsheet"
        }]
}