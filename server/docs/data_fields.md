# Data Fields

## TABLE: requests

Contains 311 Service Request data for 2019 and 2020.

Source is here and includes data dictionary:
https://data.lacity.org/A-Well-Run-City/MyLA311-Service-Request-Data-2020/rq3b-xjk8

Fields that are pulled into the 311 Data system a listed below.

## FIELDS

### id (PRIMARY KEY)

    Generated by the 311 Data Server

### srnumber (character)

    Source system identifier

### requesttype (character)

    Bulky Items 1205139
    Dead Animal Removal 46827
    Electronic Waste    80539
    Feedback    1132
    Graffiti Removal    610139
    Homeless Encampment 99843
    Illegal Dumping Pickup  234852
    Metal/Household Appliances  221303
    Multiple Streetlight Issue  13595
    Other   36863
    Report Water Waste  2083
    Single Streetlight Issue    19938

### status (character)

    Cancelled   89987
    Closed  2450076
    Forward 209
    Open    17290
    Pending 13748
    Referred Out    943

    Open - Being reviewed and worked on. 
    Pending - Has been reviewed and requires additional work Forward - Has been reviewed and forwarded to another department for fulfillment. 
    Closed - The request has been completed. 
    Canceled - The request could not be completed. 
    Referred Out - The request was referred out to an outside agency and the request can no longer be tracked in MyLA311

### actiontaken (character)

    Consultation/3-way  6
    Escalate to Supervisor  71
    Information Provided    47
    Referred to Other Agency    5
    SR Created  2571622
    SR Updated  334
    Status Provided 2
    Transferred 161
    Unable to Assist    5

### createddate (datetime) 

### updateddate (datetime) 

### servicedate (datetime) 

### closeddate (datetime) 

### requestsource (character)

    Call    1183518
    City Attorney   7
    Council's Office    2246
    Driver Self Report  401814
    Email   7126
    Fax 28
    Letter  5
    Mayor's Office  31
    Mobile App  641933
    Queue Initiated Customer Call   20
    Radio   2
    Self Service    334379
    TTY/ NexTalk    3
    Twitter 459
    Voicemail   564
    Walk-in 91
    Web Form    27

### anonymous (character)

    (unused)

### mobileos (character)

    (unused)

### owner (character)

    (unused)

### nc (integer)

    Neighborhood council district identifier

### ncname (character)

    (unused)

### policeprecinct (character)

    (unused)

### apc (character)

    (unused)

### assignto (character)

    (unused)

### cd (integer)

    City council district identifier

### cdmember (character)

    (unused)

### address (character)

### zipcode (character) 

### latitude (double)

### longitude (double)