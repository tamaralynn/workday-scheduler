$(document).ready(function() {

    //set arrays
    const idHourArr = ["#9", "#10", "#11", "#12", "#1", "#2", "#3", "#4", "#5"];
    const begHourArr = ["09:00:00", "10:00:00", "11:00:00", "12:00:00", "13:00:00", "14:00:00", "15:00:00", "16:00:00", "17:00:00"];
    const endHourArr = ["10:00:00", "11:00:00", "12:00:00", "13:00:00", "14:00:00", "15:00:00", "16:00:00", "17:00:00", "18:00:00"];

    //day display
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    // local storage set & parse
    let plannerData = [];
    const parseLocalStorage = JSON.parse(localStorage.getItem("planner-items"));
    if (parseLocalStorage !== null) {
        plannerData = parseLocalStorage;
    }

    //conditional for time
    for (let i = 0; i < idHourArr.length; i++) {
        //variables to make things look so much better
        let textInputEl = $(idHourArr[i]);
        const MMDoYYYYHH = moment().format('MMMM Do YYYY, HH:mm:ss');
        const MMDoYYYY = moment().format('MMMM Do YYYY');
        const buttonEl = textInputEl.parent().parent().find("button");
        //future hours, set attributes
        if ((MMDoYYYYHH) < (MMDoYYYY + ", " + begHourArr[i])) {
            textInputEl.attr("class", "future");
            //set text to plannerdata array that will go to local storage
            plannerData.forEach(function(item) {
                if (idHourArr[i] === ("#" + (item["input-hour"]))) {
                    textInputEl.val(item["input-value"]);
                }
            });
            //current hour check, & set attributes
        } else if (((MMDoYYYYHH) >= (MMDoYYYY + ", " + begHourArr[i])) &&
            (MMDoYYYYHH) < (MMDoYYYY + ", " + endHourArr[i])) {
            textInputEl.attr("class", "present");
            $(".present").attr("disabled", "disabled");
            buttonEl.attr("disabled", true);
            //planner data array thing but for present
            plannerData.forEach(function(item) {
                if (idHourArr[i] === ("#" + (item["input-hour"]))) {
                    textInputEl.val(item["input-value"]);
                }
            });
            //past hour check & set attributes, disable button
        } else if ((MMDoYYYYHH) > (MMDoYYYY + ", " + begHourArr[i])) {
            textInputEl.attr("class", "past");
            $(".past").attr("disabled", "disabled");
            buttonEl.attr("disabled", true);
        }
    }

    //save button on click to local storage
    $("button").on("click", function() {
        event.preventDefault();
        //all the variables, put it in an object
        const textarea = $(this).parent().parent();
        const inputVal = textarea.find("input").val();
        const inputHour = textarea.find("input").attr("id");
        var dataObj = {
            "input-hour": inputHour,
            "input-value": inputVal,
        };
        //if input is not an empty string, add that to local storage
        if (dataObj["input-value"] !== "") {
            plannerData.push(dataObj);
            localStorage.setItem("planner-items", JSON.stringify(plannerData));
        }
    });

});