var SmartVideoCarAPI = SmartVideoCarAPI || {};


SmartVideoCarAPI.api = (function () {
    var sendCommand = function (commandName, args) {
        $("#errormessage").text("");
        var baseurl = "http://" + document.domain + ":8001/";
        switch (commandName) {
            case "motorforward":
                $.get(baseurl + "motor/forward");
                break;
            case "motorbackward":
                $.get(baseurl + "motor/backward");
                break;
            case "motorhome":
                $.get(baseurl + "motor/stop");
                $.get(baseurl + "turning/128");
                break;
            case "turnleft":
                $.get(baseurl + "turning/55");
                break;
            case "turnright":
                $.get(baseurl + "turning/200");
                break;
            case "cameraincreasey":
                $.get(baseurl + "camera/increase/y");
                break;
            case "cameradecreasey":
                $.get(baseurl + "camera/decrease/y");
                break;
            case "cameraincreasex":
                $.get(baseurl + "camera/increase/x");
                break;
            case "cameradecreasex":
                $.get(baseurl + "camera/decrease/x");
                break;
            case "camerahome":
                $.get(baseurl + "camera/home");
                break;
            default:
                $("#errormessage").text(commandName + " is not supported.");
                break;
        };
    };

    $(document).keypress(function (e) {
      var baseurl = "http://" + document.domain + ":8001/";
      var code = e.keyCode || e.which || 0;
      console.log(code);
      /* CAMERA */
       if(code == 56) {
         $.get(baseurl + "camera/increase/y");
       }
       if(code == 53) {
         $.get(baseurl + "camera/decrease/y");
       }
       if(code == 54) {
         $.get(baseurl + "camera/increase/x");
       }
       if(code == 52) {
         $.get(baseurl + "camera/decrease/x");
       }
       if(code == 48) {
         $.get(baseurl + "camera/home");
       }


       /* CAR MOVEMENT */
       if(code == 119) {
         $.get(baseurl + "motor/forward");
       }
       if(code == 115) {
         $.get(baseurl + "motor/backward");
       }
       if(code == 100) {
         $.get(baseurl + "turning/200");
       }
       if(code == 97) {
         $.get(baseurl + "turning/55");
       }
       if(code == 32) {
         $.get(baseurl + "motor/stop");
         $.get(baseurl + "turning/128");
       }
     });

    var initializeVideo = function () {
        var streamImageUrl = "http://" + document.domain + ":8080/?action=stream";
        $("body").css("background-image", "url('" + streamImageUrl + "')");
        $("body").css("background-repeat", "no-repeat");
        $("body").css("background-position", "center top");
    };

    var setSpeed = function (speed) {
        var baseurl = "http://" + document.domain + ":8001/";
        $.get(baseurl + "motor/set/speed/" + speed);
    };

    var init = function () {
        initializeVideo();
        setSpeed(100);
    };

    return {
        sendCommand: sendCommand,
        init: init,
        setSpeed: setSpeed
    };

})(this)
