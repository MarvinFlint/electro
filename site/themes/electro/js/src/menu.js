// Collapsing / Opening the navigation, closing the warning

$(document).ready(function () {
    $(".nav-toggle").click(function () {
        if ($(".nav").hasClass("toggled")) {
            $(".nav").removeClass("toggled");
            $(".nav-content").css("opacity", "1");
            $("html, body").animate({ scrollTop: 0 }, "slow");
        }
        else {
            $(".nav").addClass("toggled");
            $(".nav-content").css("opacity", "0");
        }
        
    })
    $(".disable-warning").click(function () {
        $(".warning").fadeOut(500)
    })
})

// Navigation points

$(document).ready(function () {
    $('.pic-container').click(function () {
        if ($(this).hasClass("keystone")) {
            // Change background of navigation point
            $(".keystone").removeClass("active-choice");
            $(this).addClass("active-choice");

            // Assigning the associated ID with the panel
            clickedEle = $(this).attr("id");
            
            
        }
        else if ($(this).hasClass("lane")) {
            // Change background of navigation point
            $(".lane").removeClass("active-choice");
            $(this).addClass("active-choice");
        }
        else if ($(this).hasClass("af")) {
            // Change background of navigation point
            $(".af").removeClass("active-choice");
            $(this).addClass("active-choice");
        }
        else if ($(this).hasClass("enemy")) {
            // Change background of navigation point
            $(".enemy").removeClass("active-choice");
            $(this).addClass("active-choice");
        }

        // Display ability max panels and other content
        $selectedLane = $(".lane.active-choice").attr("id");

        $selectedKeystone = $(".keystone.active-choice").attr("id");

        $selectedForce = $(".af.active-choice").attr("id");

        $selectedEnemy = $(".enemy.active-choice").attr("id");
       
        console.log($selectedLane, $selectedEnemy, $selectedForce, $selectedKeystone);
    })
})
function applySettings() {
    // Get the height of the selected element and set the container to the same height
    // This is to keep the runepages in the same place while switching and keeping
    // the DOM structure in place
    elementHeight = $("." + clickedEle + "-rune").height();
    $("#runepages").height(elementHeight);

    // Display the selected runepage via the IDs set in the ControlPanel            
    $(".runepage").fadeOut(500);
    $("." + clickedEle + "-rune").fadeIn(500);

    //Display the gameplay section
    $(".gameplay-section").fadeOut(500);
    $("." + $selectedLane + "." + $selectedKeystone + "." + $selectedEnemy).fadeIn(500);

    //Display Appropriate builds
    $(".itembuild").fadeOut(500);
    $("." + $selectedForce + ".itembuild").fadeIn(500);
    $("." + $selectedForce + ".sit-item").fadeIn(500);

    // Scroll to top
    $("html, body").animate({ scrollTop: 0 }, "slow");
}