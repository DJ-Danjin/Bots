const scriptName = "서버 기재 확인";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if (room == "커맨더 톡방") {
    var sev = new Array("카인","디레","시로","프레","카시","힐더","안톤","바칼");
    var stack = 0;
    for (var i=0;i<sev.length;i++) {
      if (sender.indexOf(sev[i]) == -1) {
        stack++; 
      }
    }

    if (sender == "단진" || sender == "방장봇" ||  sender == "이승안" || sender == "도비는 자유가없어요" || sender == "마법의 소라고동" || sender == "변경예정") {
      stack = 0;
    }

    if (stack == 8) {
      var warn = "《서버 미기재자 경고》\n" + sender;
      replier.reply(warn);
      return 0;
    }
  }
}