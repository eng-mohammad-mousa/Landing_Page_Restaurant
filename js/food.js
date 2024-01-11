$(document).ready(function () {

	var a = $(window).width();
	var val;

	// For Navigation Links On Scroll 

	if (a < 768) {
		$(".nav-link").on("click", function () {
			$("#link-of-nav").collapse("hide");
			$("span#nav-icon").addClass("fa-hamburger").removeClass("fa-times");

		});
		$(window).on("scroll", function () {
			$("#link-of-nav").collapse("hide");
			$("span#nav-icon").addClass("fa-hamburger").removeClass("fa-times");
		});
		val = 98;
	} else {
		val = 90;
	}


	$(".navbar-toggler").click(function () {
		$(".navbar-toggler #nav-icon").toggleClass("fa-hamburger fa-times")
	});


	$(window).on('load scroll resize', function () {


		var winScrollTop = $(window).scrollTop();

		var aboutScrollTop = $("#about").offset().top;
		var specialScrollTop = $("#special").offset().top;
		var dishesScrollTop = $("#dishes").offset().top;
		var contactScrollTop = $("#contact").offset().top;


		var home80 = aboutScrollTop * val / 100;
		var about80 = ((specialScrollTop - aboutScrollTop) * val / 100) + aboutScrollTop;
		var special80 = ((dishesScrollTop - specialScrollTop) * val / 100) + specialScrollTop;
		var dishes80 = ((contactScrollTop - dishesScrollTop) * val / 100) + dishesScrollTop;



		if (winScrollTop < home80) {
			$(".navbar-nav li:first-of-type a").addClass("nav-active");
			$(".navbar-nav li:first-of-type").siblings().children().removeClass("nav-active");
		} else if (winScrollTop >= home80 && winScrollTop < about80) {
			$(".navbar-nav li:nth-of-type(2) a").addClass("nav-active");
			$(".navbar-nav li:nth-of-type(2)").siblings().children().removeClass("nav-active");
		} else if (winScrollTop >= about80 && winScrollTop < special80) {
			$(".navbar-nav li:nth-of-type(3) a").addClass("nav-active");
			$(".navbar-nav li:nth-of-type(3)").siblings().children().removeClass("nav-active");
		} else if (winScrollTop >= special80 && winScrollTop < dishes80) {
			$(".navbar-nav li:nth-of-type(4) a").addClass("nav-active");
			$(".navbar-nav li:nth-of-type(4)").siblings().children().removeClass("nav-active");
		} else {
			$(".navbar-nav li:nth-of-type(5) a").addClass("nav-active");
			$(".navbar-nav li:nth-of-type(5)").siblings().children().removeClass("nav-active");
		}

	})





	$(".dots").click(function () {

		var index = $(this).index();
		$(".vid").eq(index).fadeIn().siblings().hide();

		$(this).addClass("d-active").siblings().removeClass("d-active")
	});


	$(window).on("load scroll", function () {
		$(window).scrollTop() > 25 ? $("#up-arrow").fadeIn() : $("#up-arrow").fadeOut()
	});


	AOS.init({
		duration: 1e3,
		delay: 150
	});


	var n = document.querySelectorAll(".needs-validation");
	Array.prototype.slice.call(n).forEach(function (a) {
		a.addEventListener("submit", function (o) {
			a.checkValidity() || (o.preventDefault(), o.stopPropagation()), a.classList.add("was-validated")
		}, !1)
	});

	$("textarea , .form-control").on({
		focus: function () {
			$(this).prev().css({
				transform: "translateY(0%)",
				color: "#fff200"
			});
			$(this).css({
				"background-color": "rgba(1, 1, 1, 0.75)",
				borderColor: "#fff200",
				boxShadow: "0px 0px 1px 0rem rgba(255,242,0,.9)"
			})
		},
		blur: function () {
			if ($(this).val().length === 0) {
				$(this).prev().css({
					transform: "translateY(155%)",
					color: "white"
				})
				$(this).css({
					"background-color": "rgba(1, 1, 1, 0.45)",
					"borderColor": "white",
					"boxShadow": "initial"
				})
			} else {
				$(this).prev().css({
					transform: "translateY(0%)",
					color: "#fff200"
				})
				$(this).css({
					"background-color": "rgba(1, 1, 1, 0.75)",
					"borderColor": "#fff200",
					"boxShadow": "0px 0px 1px 0rem rgba(255,242,0,.9)"
				})

			}
		}
	});


	$("#up-arrow").click(function () {
		$("body , html").animate({ scrollTop: 0 }, 100)
	})



	$('body').css('overflow-y', 'visible');
	$("#body").css("opacity", "1")
	$("#cover").fadeOut();
});