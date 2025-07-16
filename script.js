document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.car-card img');
  const options = {
    root: null,
    threshold: 0.1
  };

  const onIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('src');
        img.setAttribute('loading', 'lazy');
        observer.unobserve(img);
      }
    });
  };

  const observer = new IntersectionObserver(onIntersection, options);
  images.forEach(img => observer.observe(img));
});
