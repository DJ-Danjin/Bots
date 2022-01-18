const scriptName = "간이 경매장";

var auction = new Array;
var auctioncommander = new Array;
var auctionilliya = new Array;
var auctiondunfa = new Array;
var auctiontest = new Array;

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

  if (room == "크리 톡방") {
    if (msg.indexOf("!등록 ") == 0) {
      var item = msg.replace("!등록 ", "");
      var slot = sender + " - " + item;
      auction.push(slot);
      var result = "《" + sender + " 님이 등록되었습니다.》\n" + item;
      replier.reply(result);
    }

    if (msg.indexOf("!완료 ") == 0 || msg.indexOf("!취소 ") == 0 || msg.indexOf("!삭제 ") == 0) {
      var item = msg.replace("!완료 ", "").replace("!취소 ", "").replace("!삭제 ", "");
      var slot = sender + " - " + item;
      var Arraylength = auction.length;
      var ErrorCheck = 0;

      for (var i=0;i<Arraylength;i++) {
        if (auction[i] == slot) {
          var slotnum = i;
          auction.splice(slotnum, 1);
          var result = "《" + sender + " 님이 삭제되었습니다.》\n" + item;
        } else {
          ErrorCheck++;
        }
      }

      if (ErrorCheck == Arraylength) {
        var result = "《" + sender + " 님의 삭제 실패》\n" + sender + " 님은 등록되지 않으셨습니다.";
      }

      replier.reply(result);
    }

    if (msg.indexOf("!목록") == 0) {
      var result = "《등록된 목록》\n";
      if (auction.length > 0) {
        for (var i=0;i<auction.length;i++) {
          result = result + "\n" + auction[i];
        }
      } else {
        result = result + "\n등록된 목록이 없습니다.";
      }
      replier.reply(result);
    }
  }

  if (room == "커맨더 톡방") {
    if (msg.indexOf("!등록 ") == 0) {
      var item = msg.replace("!등록 ", "");
      var slot = sender + " - " + item;
      auctioncommander.push(slot);
      var result = "《" + sender + " 님이 등록되었습니다.》\n" + item;
      replier.reply(result);
    }

    if (msg.indexOf("!완료 ") == 0 || msg.indexOf("!취소 ") == 0 || msg.indexOf("!삭제 ") == 0) {
      var item = msg.replace("!완료 ", "").replace("!취소 ", "").replace("!삭제 ", "");
      var slot = sender + " - " + item;
      var Arraylength = auctioncommander.length;
      var ErrorCheck = 0;

      for (var i=0;i<Arraylength;i++) {
        if (auctioncommander[i] == slot) {
          var slotnum = i;
          auctioncommander.splice(slotnum, 1);
          var result = "《" + sender + " 님이 삭제되었습니다.》\n" + item;
        } else {
          ErrorCheck++;
        }

        if (ErrorCheck == Arraylength) {
          var result = "《" + sender + " 님의 삭제 실패》\n" + sender + " 님은 등록되지 않으셨습니다.";
        }
      }

      if (ErrorCheck == Arraylength) {
        var result = "《" + sender + " 님의 삭제 실패》\n" + sender + " 님은 등록되지 않으셨습니다.";
      }

      replier.reply(result);
    }

    if (msg.indexOf("!목록") == 0) {
      var result = "《등록된 목록》\n";
      if (auctioncommander.length > 0) {
        for (var i=0;i<auctioncommander.length;i++) {
          result = result + auctioncommander[i] + "\n";
        }
      } else {
        result = result + "등록된 목록이 없습니다.";
      }
      replier.reply(result);
    }
  }

  if (room == "1해라 12야") {
    if (msg.indexOf("!등록 ") == 0) {
      var item = msg.replace("!등록 ", "");
      var slot = sender + " - " + item;
      auctionilliya.push(slot);
      var result = "《" + sender + " 님이 등록되었습니다.》\n" + item;
      replier.reply(result);
    }

    if (msg.indexOf("!완료 ") == 0 || msg.indexOf("!취소 ") == 0 || msg.indexOf("!삭제 ") == 0) {
      var item = msg.replace("!완료 ", "").replace("!취소 ", "").replace("!삭제 ", "");
      var slot = sender + " - " + item;
      var Arraylength = auctionilliya.length;
      var ErrorCheck = 0;

      for (var i=0;i<Arraylength;i++) {
        if (auctionilliya[i] == slot) {
          var slotnum = i;
          auctionilliya.splice(slotnum, 1);
          var result = "《" + sender + " 님이 삭제되었습니다.》\n" + item;
        } else {
          ErrorCheck++;
        }
      }

      if (ErrorCheck == Arraylength) {
        var result = "《" + sender + " 님의 삭제 실패》\n" + sender + " 님은 등록되지 않으셨습니다.";
      }

      replier.reply(result);
    }

    if (msg.indexOf("!목록") == 0) {
      var result = "《등록된 목록》\n";
      if (auctionilliya.length > 0) {
        for (var i=0;i<auctionilliya.length;i++) {
          result = result + auctionilliya[i] + "\n";
        }
      } else {
        result = result + "등록된 목록이 없습니다.";
      }
      replier.reply(result);
    }
  }

  if (room == "단진‮") {
    if (msg.indexOf("!등록 ") == 0) {
      var item = msg.replace("!등록 ", "");
      var slot = sender + " - " + item;
      auctiontest.push(slot);
      var result = "《" + sender + " 님이 등록되었습니다.》\n" + item;
      replier.reply(result);
    }

    if (msg.indexOf("!완료 ") == 0 || msg.indexOf("!취소 ") == 0 || msg.indexOf("!삭제 ") == 0) {
      var item = msg.replace("!완료 ", "").replace("!취소 ", "").replace("!삭제 ", "");
      var slot = sender + " - " + item;
      var Arraylength = auctiontest.length;
      var ErrorCheck = 0;

      for (var i=0;i<Arraylength;i++) {
        if (auctiontest[i] == slot) {
          var slotnum = i;
          auctiontest.splice(slotnum, 1);
          var result = "《" + sender + " 님이 삭제되었습니다.》\n" + item;
        } else {
          ErrorCheck++;
        }
      }

      if (ErrorCheck == Arraylength) {
        var result = "《" + sender + " 님의 삭제 실패》\n" + sender + " 님은 등록되지 않으셨습니다.";
      }

      replier.reply(result);
    }

    if (msg.indexOf("!목록") == 0) {
      var result = "《등록된 목록》\n";
      if (auctiontest.length > 0) {
        for (var i=0;i<auctiontest.length;i++) {
          result = result + "\n" + auctiontest[i];
        }
      } else {
        result = result + "\n등록된 목록이 없습니다.";
      }
      replier.reply(result);
    }
  }

  if (msg.indexOf("ㅎㅇ") != -1 || msg.indexOf("하이") != -1 || msg.indexOf("안녕") != -1) {
    if (sender == "프레이 관속에장군님") {
      var result = "폰 안냄??";
      replier.reply(result);
      return 0;
    }
  }
  
  if (msg.indexOf("ㅂㅂ") != -1) {
    replier.reply(sender + " 잘가!");
  }

}

function onStartCompile() {
  Api.replyRoom("크리 톡방", "《크리봇 리로드됨》\n간이 경매장이 초기화 되었습니다.");
  Api.replyRoom("커맨더 톡방", "《크리봇 리로드됨》\n간이 경매장이 초기화 되었습니다.");
}