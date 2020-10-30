## Test task for create tag service

## Description

Imagine a video hosting service like Youtube, for which we want to add a new feature that allows
users to tag videos that they have uploaded with keywords like “Fun” and “Bbq”.
Design a service (from now referenced as Tag Service) that would manage the list of tags for each
user. The tag service is responsible for storing and retrieving tags, but is not responsible for
associating them with video.

## Requirements

- The tag list belongs to the user and can only be managed by the user. For example Bob
must not​ be able to add/update/delete John’s tag list
- Tag can be viewed by any User. For example Bob can view Tags that were created by John
- Tag can be edited without updating the value on video. For example, Bob created a tag
called “Christmas”, and tags Video 1 with tag called “Christmas”. Later he decides to
rename the tag “Christmas” to “Christmas 2019”. The Video 1’s tag would be shown as
“Christmas 2019” without modifying tags of Video 1.
- User can list all the tags that was created by them alphabetically
- The tag list can be filtered by prefix for example given string “ra”, the service would
suggest radio, rain, rainbow, ramen. (Autocomplete)

## Items you do ​ NOT​ need to do or worry about:
- Implementation/Code for the tag service, as this task to understand how you would design
a system
- User authentication and authorization
- Video object, video hosting, CRUD operations of video object
- UI

## Task

- Create database schema for tags
- List endpoint that the tag service would expose, with following details
  - Endpoint name
  - Endpoint description
  - Endpoint parameters
