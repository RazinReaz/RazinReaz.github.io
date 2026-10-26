const videoObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  },
  { rootMargin: "100px 0px", threshold: 0.01 }
);

document.querySelectorAll("video[data-autoplay-visible]").forEach((video) => {
  videoObserver.observe(video);
});
