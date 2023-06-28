// Write and export a function named loadBalancer
// It should accept two arguments chinaDownload (Promise)
// and USDownload (Promise).

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
