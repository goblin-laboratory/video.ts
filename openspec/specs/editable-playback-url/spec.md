## ADDED Requirements

### Requirement: User can edit playback URL
The system SHALL allow users to edit the video playback URL through the UI input field.

#### Scenario: Edit URL input field
- **WHEN** user clicks on the URL input field
- **THEN** the input field becomes editable and user can type or modify the URL

#### Scenario: Apply edited URL
- **WHEN** user modifies the URL in the input field
- **THEN** the new URL is immediately used as the playback source for the player

### Requirement: Default URLs use HTTPS
All default playback URLs SHALL use the HTTPS protocol for security.

#### Scenario: Default FLV URL uses HTTPS
- **WHEN** user selects the "直播 - FLV" option
- **THEN** the default URL is `https://ivt.demo.qulubo.net/flv_srs/quick/5QDVGxXTRI6hxwI1A4s3fQ.flv`

#### Scenario: Default HLS URL uses HTTPS
- **WHEN** user selects the "直播 - HLS" option
- **THEN** the default URL is `https://ivt.demo.qulubo.net/hls_srs/quick/5QDVGxXTRI6hxwI1A4s3fQ.m3u8`
