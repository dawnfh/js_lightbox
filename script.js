$(document).ready(function(){
	
			$(".lightbox-link").on('click',
				function(e){
					e.preventDefault();
					console.log(e);
					$(".outer-lightbox").show();
					$("#this-image").attr("src","swim.jpg", "run.jpg", "workout.jpg");
					$(".outer-lightbox"). on("click", function(){
						$(".outer-lightbox").hide();
					}
						);
				}
			);
	}
);

// $("#this-image").fadeIn(1500).delay(3500).fadeOut(1500);
//     $("#run").delay(5000).fadeIn(1500);
// });