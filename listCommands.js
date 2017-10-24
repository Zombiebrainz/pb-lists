// v1.0
(function() {
    $.bind('command', function(event) {
        var sender = event.getSender(),
            command = event.getCommand(),
            args = event.getArgs();
            var msg, fulllist, cmd;

// ========= list sounds
        if (command.equalsIgnoreCase('listsounds')) {
            // retrieve commands that are to play sounds
            // !listsoundsxw
            fulllist = $.inidb.GetKeyList('aliases', '');

            for (i=0; i < fulllist.length; i++) {
              cmd = $.inidb.GetString('aliases', '', fulllist[i]);
              if (cmd.indexOf('audiohook') > -1) {
                // $.consoleLn(cmd);
                msg = msg + '!' + fulllist[i]
                if (i != fulllist.length-2) {msg = msg + ', ';}
              }
            }
            $.say("Audio commands: " + msg);
            return;
        }
// ========= list alerts
        if (command.equalsIgnoreCase('listalerts')) {
            // !listalerts
            fulllist = $.inidb.GetKeyList('command', '');

            for (i=0; i < fulllist.length; i++) {
              cmd = $.inidb.GetString('command', '', fulllist[i]);
              if (cmd.indexOf('alert') > -1) {
                // $.consoleLn(cmd);
                msg = msg + '!' + fulllist[i]
                if (i != fulllist.length-1) {msg = msg + ', ';}
              }
            }
            $.say("Alert commands: " + msg);
            return;
        }
    });

    $.bind('initReady', function() {
        $.registerChatCommand('./custom/listCommands.js', 'listsounds', 7);
        $.registerChatCommand('./custom/listCommands.js', 'listalerts', 7);
    });
})();
