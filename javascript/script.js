//Make sure document is loaded before starting
$(document).ready(function() {

//This will pull the local date for me
    $("#currentDay").text(moment().format("MMMM Do, YYYY"));

//This should pull the hour for each time block and change color
    function updateColor() {
        var currentHour = (moment().format("H"));
            console.log(currentHour);

        $(".timeBlock").each(function() {
            var time = parseInt($(this).attr("id"));
            console.log(time);
            
            if (time > currentHour) {
            $(this).addClass("future");
            }
            
            else if (time < currentHour) {
            $(this).addClass("past");
            }
            
            else {
            $(this).addClass("present");
            };
        });
    };

    updateColor();

// This will be produce a save event for each of my time block rows
    $(".saveBtn").on("click", function() {
        var time = $(this).parent().attr("id");
        var value = $(this).siblings(".myTask").val();

        localStorage.setItem(time, value);
    })

    $("#8 .myTask").val(localStorage.getItem("8"));
    $("#9 .myTask").val(localStorage.getItem("9"));
    $("#10 .myTask").val(localStorage.getItem("10"));
    $("#11 .myTask").val(localStorage.getItem("11"));
    $("#12 .myTask").val(localStorage.getItem("12"));
    $("#13 .myTask").val(localStorage.getItem("13"));
    $("#14 .myTask").val(localStorage.getItem("14"));
    $("#15 .myTask").val(localStorage.getItem("15"));
    $("#16 .myTask").val(localStorage.getItem("16"));
    $("#17 .myTask").val(localStorage.getItem("17"));
    $("#18 .myTask").val(localStorage.getItem("18"));
    
    // Testing later hours $("#21 .myTask").val(localStorage.getItem("21"));
});


