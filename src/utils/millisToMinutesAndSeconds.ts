export default (millis: number) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return `${minutes > 0 ? `${minutes}m` : ''} ${+seconds < 10 ? '0' : ''}${seconds}sec`;
};
