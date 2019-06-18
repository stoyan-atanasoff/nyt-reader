import getBigThumbnail from "../getBigThumbnail";

it('should handle the successfully fetched news action correctly', () => {
  const response = {
    "media": [{
      "type": "image",
      "subtype": "photo",
      "caption": "Ben Bowling, the valedictorian of Bell County High School.",
      "copyright": "via Facebook",
      "approved_for_syndication": 0,
      "media-metadata": [{
        "url": "https://static01.nyt.com/images/2018/06/04/us/05xp-graduation2/05xp-graduation2-thumbStandard.jpg",
        "format": "Standard Thumbnail",
        "height": 75,
        "width": 75
      }, {
        "url": "https://static01.nyt.com/images/2018/06/04/us/05xp-graduation2/05xp-graduation2-mediumThreeByTwo210.jpg",
        "format": "mediumThreeByTwo210",
        "height": 140,
        "width": 210
      }, {
        "url": "https://static01.nyt.com/images/2018/06/04/us/05xp-graduation2/05xp-graduation2-mediumThreeByTwo440.jpg",
        "format": "mediumThreeByTwo440",
        "height": 293,
        "width": 440
      }]
    }],
    "uri": "nyt://article/02160478-cbb7-538d-87fa-a5777305e833"
  };
  expect(getBigThumbnail(response.media)).toEqual('https://static01.nyt.com/images/2018/06/04/us/05xp-graduation2/05xp-graduation2-mediumThreeByTwo440.jpg');
});

