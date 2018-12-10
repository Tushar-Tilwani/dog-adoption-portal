// https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/

// IntersectionObserver Pollyfill
require("intersection-observer");

export default function() {
  const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  const lazyImageObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        let lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("lazy");
        lazyImageObserver.unobserve(lazyImage);
      }
    });
  });

  lazyImages.forEach(function(lazyImage) {
    lazyImageObserver.observe(lazyImage);
  });
}
