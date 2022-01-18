const scriptName = "모니터링";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

  /*if (room == "런처 톡방") {
    var who = sender + "\n\n" + msg;
    Api.replyRoom("단진‮", who);
  }*/

  if (room == "공지 전달") {
    var notice = msg;
    Api.replyRoom("크리 톡방", notice);
    Api.replyRoom("커맨더 톡방", notice);
    Api.replyRoom("1해라 12야", notice);
    Api.replyRoom("무속성 톡방", notice);
    Api.replyRoom("런처 톡방", notice);
    Api.replyRoom("허니꼬미", notice);
    replier.reply("전달 완료");

    if (msg.indexOf("봇 점검 안내") != -1) {
      Api.replyRoom("히오스 톡방", notice);
      Api.replyRoom("로아 톡방", notice);
      Api.replyRoom("파티리듬담당", notice);
    }
  }
  
  /*if (room == "김 오토나시 코토리") {
    java.lang.Thread.sleep(3000);
    replier.reply("ㅎㅇㅎㅇ");
  }*/
  
  if (msg == "크리봇 리로디드" && sender == "방장봇") {
    Api.compile("편의기능.js");
    Api.compile("편의기능ver2.js");
  }
}