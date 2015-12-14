function calculate(n) {

    var num = parseInt(n, 10);
    var divisions = 0;
    var additions = 0;
    var streaks = [0];
    var streaksCounter = 0;
    var highestStreak;

    $('#operationsLog').append("\nStarted with: " + num + "\n");

    while (num != 2) { // Additions (break streak)

        if (num === 0 || num % 2 !== 0) {
            num += 1;
            additions++;
            $('#operationsLog').append("Added one to get: " + num + "\n");

            streaksCounter++;
        } else { // Divisions
            num /= 2;
            divisions++;
            $('#operationsLog').append("Divided by two to get: " + num + "\n");

            if (typeof streaks[streaksCounter] === 'undefined'){
                streaks[streaksCounter] = 1;
            } else {
                streaks[streaksCounter]++;
            }
        }

    }

    var totalOperations = additions + divisions;

    // Remove streaks of 0 and 1, because those aren't really streaks
    for (var i = streaks.length - 1; i >= 0; i--) {
        if (streaks[i] < 2) {
           streaks.splice(i, 1);
        }
    }

    if (streaks.length > 0){
        highestStreak = Math.max.apply(Math, streaks);
    } else {
        highestStreak = "None";
    }

    // Populate table
    $('#table').append('<tr>\
    <td>' + n + '</td>\
    <td>' + divisions + '</td>\
    <td>' + additions + '</td>\
    <td>' + totalOperations + '</td>\
    <td>' + streaks.length + '</td>\
    <td>' + highestStreak + '</td></tr>');

}

$(function() {

    $('form').submit(function(){

        calculate($('#num').val());

        // Prevent page from reloading when form is submitted
        return false;

    });

    // Alternatively, you can calculate here without using the form
    //for (i = -100; i <= 100; i++) {
    //    calculate(i);
    //}

});
