$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        console.log("test")
        var value = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")

        localStorage.setItem(time, value)
    })
    function hourChange() {
        var currentHour = moment().hours();
        $(".time-block").each(function () {
            var compareHour = parseInt($(this).attr("id").split("-")[1])
            if (compareHour < currentHour) {
                $(this).addClass("past")
            }
            else if (compareHour === currentHour) {
                $(this).removeClass("past")
                $(this).addClass("present")
            }
            else {
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            }
        })
    }
    hourChange()
    var interval = setInterval(hourChange, 10000)

    //after chaning the hours in HTML change all hours also here using the funtion below
    $("#9 .description").val(localStorage.getItem("9"))
    $("#10 .description").val(localStorage.getItem("10"))
    $("#11 .description").val(localStorage.getItem("11"))
    $("#12 .description").val(localStorage.getItem("12"))
    $("#1 .description").val(localStorage.getItem("1"))
    $("#2 .description").val(localStorage.getItem("2"))
    $("#3 .description").val(localStorage.getItem("3"))
    $("#4 .description").val(localStorage.getItem("4"))
    $("#5 .description").val(localStorage.getItem("5"))


    $("#currentDay").text(moment().format("dddd,MMMM Do"))
})