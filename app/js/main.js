$(function () {
  $(".product-related__slider-items").slick({
    slidesToShow: 4,
  });

  $(".product-tabs__tab").on("click", function (e) {
    e.preventDefault();
    $(".product-tabs__tab").removeClass("product-tabs__tab--active");
    $(this).addClass("product-tabs__tab--active");

    $(".product-tabs__content-item").removeClass(
      "product-tabs__content-item--active"
    );
    $($(this).attr("href")).addClass("product-tabs__content-item--active");
  });

  $(".product-details__num").styler();

  $(".product-details__slide-thumbs").slick({
    asNavFor: ".product-details__slide-big",
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false,
  });

  $(".product-details__slide-big").slick({
    asNavFor: ".product-details__slide-thumbs",
    draggable: false,
    fade: true,
    arrows: false,
  });

  $(".shop__recent-rate, .shop-page__recent-rate").rateYo({
    starWidth: "13px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
  });

  $(".shop-page__product-rate, .product-details__rate").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "10px",
  });
  $(".shop__price-input, .shop-page__price-input").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 400,
    to: 600,
    prefix: "$",
    onStart: function (data) {
      $(".shop__price-from, .shop-page__price-from").text(data.from.toFixed(2));
      $(".shop__price-to, .shop-page__price-to").text(data.to.toFixed(2));
    },

    onChange: function (data) {
      $(".shop__price-from, .shop-page__price-from").text(data.from.toFixed(2));
      $(".shop__price-to, .shop-page__price-to").text(data.to.toFixed(2));
    },
  });

  var mixer = mixitup(".product__items");
  var mixer = mixitup(".product-new__items");

  $(".top-slider__inner").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
