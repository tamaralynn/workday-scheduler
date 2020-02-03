$(document).ready(function() {
    const idHourArr = ["#9", "#10", "#11", "#12", "#1", "#2", "#3", "#4", "#5"];
    const begHourArr = ["09:00:00", "10:00:00", "11:00:00", "12:00:00", "13:00:00", "14:00:00", "15:00:00", "16:00:00", "17:00:00"];
    const endHourArr = ["10:00:00", "11:00:00", "12:00:00", "13:00:00", "14:00:00", "15:00:00", "16:00:00", "17:00:00", "18:00:00"];

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


    let plannerData = [];
    const parseLocalStorage = JSON.parse(localStorage.getItem("planner-items"));
    if (parseLocalStorage !== null) {
        plannerData = parseLocalStorage;
    }

    for (let i = 0; i < idHourArr.length; i++) {
        let hour = $(idHourArr[i]);
        const MMDoYYYYHH = moment().format('MMMM Do YYYY, HH:mm:ss');
        const MMDoYYYY = moment().format('MMMM Do YYYY');
        const buttonEl = hour.parent().parent().find("button");

        if ((MMDoYYYYHH) < (MMDoYYYY + ", " + begHourArr[i])) {
            hour.attr("class", "future");
            plannerData.forEach(function(item) {
                if (idHourArr[i] === ("#" + (item["input-id"]))) {
                    hour.val(item["input-value"]);
                }
            });
        } else if (((MMDoYYYYHH) >= (MMDoYYYY + ", " + begHourArr[i])) &&
            (MMDoYYYYHH) < (MMDoYYY + ", " + endHourArr[i])) {
            hour.attr("class", "present");
            $(".present").attr("disabled", "disabled");
            buttonEl.attr("disabled", true);
            plannerData.forEach(function(item) {
                if (idHourArr[i] === ("#" (item["input-id"]))) {
                    hour.val(item["input-value"]);
                }
            });
        } else if ((MMDoYYYYHH) > (MMDoYYYY + ", " + begHourArr[i])) {
            hour.attr("class", "past");
            $(".past").attr("disabled", "disabled");
            buttonEl.attr("disabled", true);
        }
    }

    $("button").on("click", function() {
        event.preventDefault();
        const textarea = $(this).parent().parent();
        const inputVal = textarea.find("input").val();
        const inputHour = textarea.find("input").attr("id");
        var dataObj = {
            "input-hour": inputHour,
            "input-value": inputVal,
        };
        if (dataObj["input-value"] !== "") {
            plannerData.push(dataObj);
            localStorage.setItem("planner-items", JSON.stringify(plannerData));
        }
    });

});