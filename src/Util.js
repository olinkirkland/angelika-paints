export function getPagesUrl() {
  // Change when deploying to production
  return ['localhost', '127.0.0.1'].includes(window.location.hostname)
    ? ''
    : '/angelika-paints';
}
