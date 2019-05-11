// Collapsing / Opening the navigation, closing the warning

$(document).ready(function () {
    $(".toggle").attr('data-after', '<<');
    $(".toggle").click(function(){
        if($(".nav").hasClass("toggled")){
            $(".nav").removeClass("toggled");
            $(".toggle").attr('data-after', '>>');
            $(".choice, .nav-button").slideUp(500);
        }
        else{
            $(".nav").addClass("toggled");
            $(".toggle").attr('data-after', '<<')
            $(".choice, .nav-button").slideDown(500);
        }
    })    
})

// Navigation points

$(document).ready(function () {
    $('.pic-container').click(function () {
        if ($(this).hasClass("keystone")) {
            if ($(this).hasClass("active-choice")) {
                $(".keystone").slideDown(500);
            }
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
    $(".sit-item").fadeOut(500);
    $("." + $selectedForce + ".itembuild").fadeIn(500);
    $("." + $selectedForce + ".sit-item").fadeIn(500);

    //Display apprpriate tips & tricks section
    $("." + $selectedForce + ".tip").fadeIn(500);
    // Scroll to top
    $("html, body").animate({ scrollTop: 0 }, "slow");
    //Set opacity of "home"
    $(".home").css("opacity", "1");
}

//Opening / closing the different navigation options
$(document).ready(function () {
    $(".pic-container").click(function () {
        if ($(this).hasClass("active-choice")) {
            if ($(this).parent().hasClass("opened")) {
                $(this).parent().removeClass("opened");
                $(this).css("position", "absolute");
                $(this).siblings().css("position", "absolute");
            }
            else {
                $(this).parent().addClass("opened");
                $(this).css("position", "unset");
                $(this).siblings().css("position", "unset");
            }
        }
    })
})   

// Check for clicks outside of the selections and close them
$(document).mouseup(function(e) 
{
    var container = $(".pic-container");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $(".pic-container").css("position", "absolute");
        $(".pic-container").parent().removeClass("opened");
    }
});

//Switch the panels in the matchup section

$(document).ready(function(){
    $(".panel-switch").click(function(){
        $clickedPanel = $(this).attr("id");
        $(".panel-switch").removeClass("active-switcher");
        $(this).addClass("active-switcher");
        $(".panel").removeClass("active-panel");
        $("." + $clickedPanel).addClass("active-panel");
    })
    $(".matchup-list").change(function(){
        $selectedOption = $("#mu-list :selected").val();
        $(".matchup").slideUp().delay(500).fadeOut(500);
        $("." + $selectedOption).slideDown().delay(500).fadeIn(500);
    })
})

