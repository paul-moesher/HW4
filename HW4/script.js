var main = function () {

        for (var i = 0; i < 10; i++) {

                length = i + 2;
                width = i + 3;
                height = i + 4;
                var call = getVolume(length, width, height)

                switch (true) {
                        case (call <= 500):
                                document.write('<div  class="card mx-auto bg-primary mt-2 font-italic text-center" style="width: 18rem;>' + '<p class="card-text">' + 'Small Volume: ' + call + '</p>' + '</div>');
                                break;
                        case (call <= 1000):
                                document.write('<div class="card mx-auto bg-danger mt-2 font-italic text-center" style="width: 18rem;>' + '<p class="card-text">' + 'Medium Volume: ' + call + '</p>' + '</div>');
                                break;
                        case (call <= 1500):
                                document.write('<div class="card mx-auto bg-info mt-2 font-italic text-center" style="width: 18rem;>' + '<p class="card-text">' + 'Large Volume: ' + call + '</p>' + '</div>');
                                break;
                        case (call > 1500):
                                document.write('<div class="card mx-auto bg-warning mt-2 font-italic text-center" style="width: 18rem;>' + '<p class="card-text">' + 'Extra Large Volume: ' + call + '</p>' + '</div>');
                }
        }
}

var getVolume = function (length, width, height) {

        var result = length * width * height;

        return result;

}

main();



