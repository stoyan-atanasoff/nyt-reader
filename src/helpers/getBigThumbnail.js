const getBigThumbnail = (media) => {
  const images = media.find(m => m['media-metadata'].length > 0)['media-metadata'];
  const thumbnail = images.find(m => m.format === 'mediumThreeByTwo440');
  return thumbnail.url;
};
export default getBigThumbnail;
