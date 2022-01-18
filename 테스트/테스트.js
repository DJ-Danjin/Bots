const scriptName = "테스트";

// var name = new Array("녕", "경", "도", "대", "태", "안", "인", "단", "한", "노", "순", "심", "예", "례", "춘", "난", "반", "적", "밀", "차", "무", "제", "금", "전", "변", "토", "일", "한", "청", "배", "교", "숙", "위", "원", "향", "량", "효", "동", "명", "현", "조", "아", "애", "희", "수", "야", "란", "선", "화", "련", "연", "보", "리", "이", "미", "라", "유", "나", "정", "려", "여", "서", "린", "미", "류", "루", "시", "월", "령", "영", "우", "하", "구", "설", "현", "사", "비", "빈", "로", "매", "무", "양", "채", "차", "신", "초", "야", "진", "옥", "소", "은", "지", "민", "휘", "어", "누", "려", "루", "해", "호", "임", "의", "후", "혜", "요", "보", "두", "성", "오", "윤", "백", "별", "다", "낭", "랑");
var grade = new Array("고급", "희귀", "영웅", "전설", "유물");
var gradeRow = new Array("1", "2", "3", "4", "5");


function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
/* if (msg == "!이름") {
  var result = "...\n" + "​".repeat(495);
  for (var i=0; i<100; i++) {
    var rnd = Math.floor(Math.random() * name.length);
    var rnd2 = Math.floor(Math.random() * name.length);
    result = result + "\n" + name[rnd] + name[rnd2];
    }
    replier.reply(result);
    return 0;
  } */
  
  var i = 0;
  var count = 0;
  var result = "";
  var temp="";
  
  if (msg.indexOf("!수집 ") == 0) {

      var chrname = msg.split(" ")[1];
      var url = encodeURI(chrname);
      var data = Utils.getWebText("https://www.mgx.kr/lostark/character/?character_name=" + url);
      if (data.indexOf("존재하지 않는 캐릭터 입니다.") != -1) {
         replier.reply("존재하지 않는 캐릭터 입니다.");
         return 0;
      }
      var cutting = data.split("수집형 포인트")[1].split("<style>")[0];
      var collect = new Array("섬마", "오페", "거심", "미술품", "모코코", "모험물", "이그네아", "세계수");
      result = "《" + chrname + " 님의 수집형 포인트》\n";
      for(i = 0; i < 8; i++) {
         temp = data.split("<div class=\"point_number\">")[i+1].split("</div")[0].replace(/\s/gi, "");
         result = result + "\n" + collect[i] + " : " + temp + " 개";
      }
      replier.reply(result);
      return 0;
    }

   if (msg.indexOf("!거래소 ") == 0) {
      if (msg.indexOf("@") != -1) {
         var inputGrade = msg.split("@")[1];
         for (i = 0; i < grade.length; i++) {
            if (inputGrade == grade[i]){
               temp = i;
            } else {
               count++;
            }
         }
         if (count == grade.length) {
            replier.reply("해당 등급은 존재하지 않습니다.\n정확한 등급을 기재해 사용해주세요!");
            return 0;
         }
         inputGrade = gradeRow[temp];
         var item = msg.split("!거래소 ")[1].split("@")[0];
      } else {
         var inputGrade = "99";
         var item = msg.split("!거래소 ")[1];
      }
 
      var itemName = encodeURI(item);
      var data = Utils.getWebText("https://lostark.game.onstove.com/Market/List_v2?firstCategory=0&secondCategory=0&characterClass=&tier=0&grade=" + inputGrade + "&itemName=" + itemName + "&pageNo=1&isInit=false&sortType=7&_=");
      if (data.indexOf("검색 결과가 없습니다.") != -1) {
         replier.reply("검색 결과가 없습니다!\n조금 더 정확히 입력해주세요!");
         return 0;  
      }
      var img = data.split("<img src=\"")[1].split("\"")[0];
      var nameRow = data.split("<span class=\"name\">")[1].split("</span>")[0];
      var itemGrade = data.split("<div class=\"list__grade\" data-grade=\"")[1].split("\"")[0];
      var latelyPrice = data.split("<div class=\"price\">")[3].split("<em>")[1].split("<")[0];
      var nowPrice = data.split("<div class=\"price\">")[1].split("<em>")[1].split("<")[0];
 
      result = "《거래소 최저가 검색 결과》\n";
      result = result + img + "\n이름 : " + nameRow;
      if (nameRow != "각인서") {
         result = result + " (" + grade[itemGrade - 1] + ")";
      }
      result = result + "\n최근 거래가 : " + latelyPrice + "\n현재 최저가 : " + nowPrice;
      replier.reply(result);
      return 0;
   }
   
   if (msg => "쓰리닷 테스트") {
     let arr1 = [1, 2];
     let arr2 = [6, 7];
     let arr3 = [arr1, 3, arr2];
     let arr4 = [arr1, 3, arr2];
     
     replier.reply(arr3);
     replier.reply(arr3[0]);
     replier.reply(arr3[1]);
     replier.reply(arr3[2]);
   }
}