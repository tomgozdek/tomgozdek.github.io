$(document)
    .ready(
        function() {
            var description = '"Magnificat anima mea Dominum" - the very first recording of Rorantists\' Kapelle repertoire. (hint: if music did not start immediately please wait.)';

            $('#audio').ttwMusicPlayer(myPlaylist, {
                autoPlay : false,
                description : description,
                jPlayer : {
                    swfPath : '../media/music-player/plugin/jquery-jplayer'
                }
            });
        });