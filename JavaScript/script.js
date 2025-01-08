// Start Head Room JavaScript Library

const header = document.querySelector(".header");
const headroom = new Headroom(header, {
  tolerance: 5,
  offset: 100,
  classes: {
    pinned: "header--pinned",
    unpinned: "header--unpinned",
  },
});
headroom.init();

// End Head Room JavaScript Library

// ============================================================================ //

// Start Testimonials Section

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true, // لتكرار الكاروسيل
    margin: 10, // مسافة بين العناصر
    nav: true, // عرض أزرار التنقل
    dots: true, // عرض النقاط السفلية
    autoplay: true, // تشغيل تلقائي
    autoplayTimeout: 3000, // مدة كل شريحة (بالملي ثانية)
    responsive: {
      0: {
        items: 1, // عدد العناصر في الشاشات الصغيرة
      },
      600: {
        items: 2, // عدد العناصر في الشاشات المتوسطة
      },
      1000: {
        items: 3, // عدد العناصر في الشاشات الكبيرة
      },
      1200: {
        items: 4, // عدد العناصر في الشاشات الكبيرة
      },
    },
  });
});

// End Testimonials Section

// ============================================================================ //

// Wow Library

wow = new WOW();
wow.init();
