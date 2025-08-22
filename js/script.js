document.addEventListener('DOMContentLoaded', () => {
  var tabsbtn = document.querySelectorAll(".featured_properties_menu_list li button");
  var tabs = document.querySelectorAll(".featured_tab, .featured_tab_active");

  tabsbtn.forEach((tabbtn) => {
    tabbtn.addEventListener("click", () => {
      // إزالة الكلاس النشط من كل الأزرار
      tabsbtn.forEach((btn) => btn.classList.remove("active"));
      
      // إخفاء كل التابات
      tabs.forEach((tab) => {
        tab.classList.remove("featured_tab_active");
        tab.classList.add("featured_tab");
      });

      // تحديد التاب المطلوب
      var selectedTabId = tabbtn.getAttribute("data-tab");
      var selectedTab = document.getElementById(selectedTabId);

      // إظهار التاب المطلوب
      if (selectedTab) {
        selectedTab.classList.remove("featured_tab");
        selectedTab.classList.add("featured_tab_active");
      }

      // تفعيل الزر الحالي
      tabbtn.classList.add("active");
    });
  });
});
const citySwiper = new Swiper('.citySwiper', {
  slidesPerView: 9,
  spaceBetween: 25,
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  }
});

const swiper = new Swiper('.reviewsSwiper',{
    slidesPerView: 1.2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 2.5,
        spaceBetween: 25,
      },
      900: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4.5,
        spaceBetween: 40,
      }
    }
  });
  function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 150;

      if (elementTop < windowHeight - revealPoint) {
        reveals[i].style.opacity = 1;
        reveals[i].style.transform = 'translateY(0)';
        reveals[i].style.transitionDelay = (i * 0.15) + 's';
      } else {
        reveals[i].style.opacity = 0;
        reveals[i].style.transform = 'translateY(40px)';
        reveals[i].style.transitionDelay = '0s';
      }
    }
  }

  window.addEventListener('scroll', reveal);
  window.addEventListener('load', reveal);
 


