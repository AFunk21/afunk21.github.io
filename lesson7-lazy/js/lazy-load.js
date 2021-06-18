
const images = document.querySelectorAll("img[data-src]");

const loadImages = (image)  => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src')
  };
};

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px"
}

if ('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver(items => {
    items.forEach(item => {
      if (item.isIntersecting) {
        loadImages(item.target);
        imgObserver.unobserve(item.target);
      }
    });
  }, imgOptions);
  
  images.forEach(img => {
    imgObserver.observe(img);
  });
}

else {
  images.forEach(img => {
    loadImages.observe(img);
  });
}






