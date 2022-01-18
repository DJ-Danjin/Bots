const scriptName = "가상 시뮬레이터";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  var sw = 0;

  if (msg == "!가챠") {
    var result = "《" + sender + " 님의 10연 가챠 결과》";
    var temp;
    var CLUR;
    for (var i = 1; i < 11; i++) {
      rnd = Math.floor(Math.random() * 100);
      temp = "";
      CLUR = "";
      if (i == 1) {
        if (rnd < 5) {
          rnd2 = Math.floor(Math.random() * UR.length);
          temp = UR[rnd2].split("[")[1].split("/ ")[0] + "/ ";
          CLUR = UR[rnd2].replace(temp, "");
          result = result + "\n" + "★ UR " + CLUR;
        } else {
          rnd2 = Math.floor(Math.random() * SR.length);
          result = result + "\n" + "☆ SR " + SR[rnd2];
        }
      } else {
        if (rnd < 5) {
          rnd2 = Math.floor(Math.random() * UR.length);
          temp = UR[rnd2].split("[")[1].split("/ ")[0] + "/ ";
          CLUR = UR[rnd2].replace(temp, "");
          result = result + "\n" + "★ UR " + CLUR;
        } else if (rnd >= 5 && rnd < 15) {
          rnd2 = Math.floor(Math.random() * SR.length);
          result = result + "\n" + "☆ SR " + SR[rnd2];
        } else {
          rnd2 = Math.floor(Math.random() * NR.length);
          result = result + "\n" + "R " + NR[rnd2];
        }
      }
    }

    replier.reply(result);
    return 0;
  }

  if (msg.indexOf("!저격 ") == 0) {
    var check = msg.replace("!저격 ", "");
    if (check.indexOf(" ") == -1) {
      var result = "《" + sender + " 님의 저격 실패》\n아래와 같이 스쿨 아이돌의 이름과 종류를 정확히 입력해 주세요!\n\n!저격 니코 장난감\n!저격 니코 5차";
      replier.reply(result);
      return 0;
    }
    var idol = check.split(" ")[0];
    var value = check.split(" ")[1];

    var count = 0;
    var find;
    for (var i = 0; i < UR.length; i++) {
      if (UR[i].split(" ")[0] == idol && UR[i].indexOf(value) != -1) {
        find = UR[i];
      } else {
        count++;
      }
    }
    if (count == UR.length) {
      var result = "《" + sender + " 님의 저격 실패》\n해당 아이돌 또는 종류를 찾지 못했습니다.";
      replier.reply(result);
      return 0;
    }

    var result = "《" + sender + " 님의 " + idol + " " + value + " 저격 결과》\n";
    var sw = 0;
    var Tcount = 0;
    var Ucount = 0;
    var data = "가챠 결과물";

    while (sw == 0) {
      for (var i = 1; i < 11; i++) {
        rnd = Math.floor(Math.random() * 100);
        if (i == 1) {
          if (rnd < 5) {
            rnd2 = Math.floor(Math.random() * UR.length);
            data = data + "\n" + "★ UR " + UR[rnd2];
            Ucount++;
            Tcount++;
            if (data.indexOf(find) != -1) {
              sw = 1;
              i = 11;
            }
          } else {
            rnd2 = Math.floor(Math.random() * SR.length);
            data = data + "\n" + "☆ SR " + SR[rnd2];
            Tcount++;
          }
        } else {
          if (rnd < 5) {
            rnd2 = Math.floor(Math.random() * UR.length);
            data = data + "\n" + "★ UR " + UR[rnd2];
            Ucount++;
            Tcount++;
            if (data.indexOf(find) != -1) {
              sw = 1;
              i = 11;
            }
          } else if (rnd >= 5 && rnd < 15) {
            rnd2 = Math.floor(Math.random() * SR.length);
            data = data + "\n" + "☆ SR " + SR[rnd2];
            Tcount++;
          } else {
            rnd2 = Math.floor(Math.random() * NR.length);
            data = data + "\n" + "R " + NR[rnd2];
            Tcount++;
          }
        }
      }
    }

    result = result + find + "\n\n가챠 횟수 : " + Tcount + " 회\n사용한 러브카스타 : " + Tcount * 50 + " 개\n등장한 다른 UR수 : " + Ucount + " 개";

    replier.reply(result);
    return 0;
  }

  if (msg.indexOf("!다프네 ") == 0) {
    var n = parseInt(msg.split(" ")[1]);
    var result = "《" + sender + " 님의 플래티넘 엠블렘 상자 결과》\n";
    if (n > 0 && n <= 100 && n != "NaN") {
      if (n > 1) {
        result = result + "\u200b".repeat(495);
      }
      for (var i = 1; i <= n; i++) {
        result = result + i + "회차\n";
        for (var j = 0; j < 4; j++) {
          rnd = Math.floor(Math.random() * emblem.length);
          result = result + emblem[rnd] + "\n";
        }
        if (i < n) {
          result = result + "\n\n";
        }
      }
      replier.reply(result);
      return 0;
    } else if (n = "NaN") {
      var error = "《" + sender + " 님의 플래티넘 엠블렘 상자 개봉 실패》\n명령어 뒤에 숫자만 기입해주세요!\n숫자는 1부터 100까지만 기입해주세요!";
    }
    replier.reply(error);
    return 0;
  } else if (msg == "!다프네") {
    var error = "《" + sender + " 님의 플래티넘 엠블렘 상자 개봉 실패》\n명령어 뒤에 1부터 100까지 숫자를 기입해주세요!";
    replier.reply(error);
    return 0;
  }

  if (msg.indexOf("!벞플티 ") == 0) {
    var n = parseInt(msg.split(" ")[1]);
    var result = "《" + sender + " 님의 버프 플래티넘 엠블렘 상자 결과》\n";
    if (n > 0 && n <= 100 && n != "NaN") {
      if (n > 1) {
        result = result + "\u200b".repeat(495);
      }
      for (var i = 1; i <= n; i++) {
        rnd = Math.floor(Math.random() * buff.length);
        result = result + buff[rnd] + "\n";
      }
      replier.reply(result);
      return 0;
    } else if (n = "NaN") {
      var error = "《" + sender + " 님의 버프 플래티넘 엠블렘 상자 개봉 실패》\n명령어 뒤에 숫자만 기입해주세요!\n숫자는 1부터 100까지만 기입해주세요!";
    }
    replier.reply(error);
    return 0;
  } else if (msg == "!벞플티") {
    var error = "《" + sender + " 님의 버프 플래티넘 엠블렘 상자 개봉 실패》\n명령어 뒤에 1부터 100까지 숫자를 기입해주세요!";
    replier.reply(error);
    return 0;
  }

  if (msg.indexOf("!봉자 ") == 0) {
    var n = parseInt(msg.split(" ")[1]);
    var result = "《" + sender + " 님의 봉인된 자물쇠 결과》\n";
    if (n > 0 && n <= 100 && n != "NaN") {
      if (n > 1) {
        result = result + "\u200b".repeat(495);
      }
      for (var i = 1; i <= n; i++) {
        rnd = Math.floor(Math.random() * 1000000);
        rnd2 = Math.floor(Math.random() * 100000000);
        var fst;
        var snd;
        if (rnd >= 0 && rnd < 2500) {
          fst = "★ 첫 번째 이달의 아이템 ★";
        } else if (rnd >= 2500 && rnd < 8500) {
          fst = "★ 두 번째 이달의 아이템 ★";
        } else if (rnd >= 8500 && rnd < 8850) {
          fst = "★ 순수한 황금 증폭서 ★";
        } else if (rnd >= 8850 && rnd < 9200) {
          fst = "장비 보호권";
        } else if (rnd >= 9200 && rnd < 9550) {
          fst = "증폭 보호권";
        } else if (rnd >= 9550 && rnd < 49550) {
          fst = "해방된 칼레이도 박스 1개";
        } else if (rnd >= 49550 && rnd < 53550) {
          fst = "해방된 칼레이도 박스 10개";
        } else if (rnd >= 53550 && rnd < 54850) {
          fst = "해방된 칼레이도 박스 30개";
        } else if (rnd >= 54850 && rnd < 194275) {
          fst = "칸나의 맛있는 수제빵 10개";
        } else if (rnd >= 194275 && rnd < 264275) {
          fst = "칸나의 맛있는 수제빵 20개";
        } else if (rnd >= 264275 && rnd < 299275) {
          fst = "칸나의 맛있는 수제빵 50개";
        } else if (rnd >= 299275 && rnd < 438700) {
          fst = "칸나의 맛있는 우유 10개";
        } else if (rnd >= 438700 && rnd < 508700) {
          fst = "칸나의 맛있는 우유 20개";
        } else if (rnd >= 508700 && rnd < 543700) {
          fst = "칸나의 맛있는 우유 50개";
        } else if (rnd >= 543700 && rnd < 598700) {
          fst = "패왕의 계약 3일";
        } else if (rnd >= 598700 && rnd < 653700) {
          fst = "달인의 계약 3일";
        } else if (rnd >= 653700 && rnd < 708700) {
          fst = "성장의 계약 3일";
        } else if (rnd >= 708700 && rnd < 763700) {
          fst = "큐브의 계약 7일";
        } else if (rnd >= 763700 && rnd < 889700) {
          fst = "지옥파티 초대장 상자";
        } else if (rnd >= 889700 && rnd < 953700) {
          fst = "균열 탐지석 상자";
        } else if (rnd >= 953700 && rnd < 1000000) {
          fst = "★ 버프 플래티넘 엠블렘 ★";
        }
    
        if (rnd2 >= 0 && rnd2 < 250000) {
          snd = "★ 첫 번째 이달의 아이템 ★";
        } else if (rnd2 >=250000 && rnd2 < 850000) {
          snd = "★ 두 번째 이달의 아이템 ★";
        } else if (rnd2 >=850000 && rnd2 < 875000) {
          snd = "★ 순수한 황금 증폭서 ★";
        } else if (rnd2 >=875000 && rnd2 < 900000) {
          snd = "장비 보호권";
        } else if (rnd2 >=900000 && rnd2 < 925000) {
          snd = "증폭 보호권";
        } else if (rnd2 >=925000 && rnd2 < 1045000) {
          snd = "★ +12 증폭권 상자 ★";
        } else if (rnd2 >=1045000 && rnd2 < 1237800) {
          snd = "★ +12 강화권 상자 ★";
        } else if (rnd2 >=1237800 && rnd2 < 1521900) {
          snd = "★ +11 증폭권 상자 ★";
        } else if (rnd2 >=1521900 && rnd2 < 2247700) {
          snd = "★ +11 강화권 상자 ★";
        } else if (rnd2 >=2247700 && rnd2 < 2493500) {
          snd = "★ +10 증폭권 상자 ★";
        } else if (rnd2 >=2493500 && rnd2 < 3358600) {
          snd = "+10 강화권 상자";
        } else if (rnd2 >=3358600 && rnd2 < 5051300) {
          snd = "+7 증폭권 상자";
        } else if (rnd2 >=5051300 && rnd2 < 8934900) {
          snd = "+7 강화권 상자";
        } else if (rnd2 >=8934900 && rnd2 < 24462200) {
          snd = "칸나의 맛있는 수제빵 10개";
        } else if (rnd2 >=24462200 && rnd2 < 29467200) {
          snd = "칸나의 맛있는 수제빵 20개";
        } else if (rnd2 >=29467200 && rnd2 < 31969750) {
          snd = "칸나의 맛있는 수제빵 50개";
        } else if (rnd2 >=31969750 && rnd2 < 47497050) {
          snd = "칸나의 맛있는 우유 10개";
        } else if (rnd2 >=47497050 && rnd2 < 52502050) {
          snd = "칸나의 맛있는 우유 20개";
        } else if (rnd2 >=52502050 && rnd2 < 55004600) {
          snd = "칸나의 맛있는 우유 50개";
        } else if (rnd2 >=55004600 && rnd2 < 59504600) {
          snd = "패왕의 계약 3일";
        } else if (rnd2 >=59504600 && rnd2 < 64004600) {
          snd = "달인의 계약 3일";
        } else if (rnd2 >=64004600 && rnd2 < 68504600) {
          snd = "성장의 계약 3일";
        } else if (rnd2 >=68504600 && rnd2 < 73004600) {
          snd = "큐브의 계약 7일";
        } else if (rnd2 >=73004600 && rnd2 < 75864600) {
          snd = "해방된 칼레이도 박스 1개";
        } else if (rnd2 >=75864600 && rnd2 < 76150600) {
          snd = "해방된 칼레이도 박스 10개";
        } else if (rnd2 >=76150600 && rnd2 < 76243600) {
          snd = "해방된 칼레이도 박스 30개";
        } else if (rnd2 >=76243600 && rnd2 < 88843600) {
          snd = "지옥파티 초대장 상자";
        } else if (rnd2 >=88843600 && rnd2 < 95243600) {
          snd = "균열 탐지석 상자";
        } else if (rnd2 >=95243600 && rnd2 < 99243600) {
          snd = "시간의 인도석 상자";
        } else if (rnd2 >=99243600 && rnd2 < 99363600) {
          snd = "엠피리언 테크놀로지 장비 선택 상자";
        } else if (rnd2 >=99363600 && rnd2 < 99394880) {
          snd = "검은 성전의 기억 장비 선택 상자";
        } else if (rnd2 >=99394880 && rnd2 < 99430880) {
          snd = "엠피리언 컴벳 유니폼 천 세트 선택 상자";
        } else if (rnd2 >=99430880 && rnd2 < 99466880) {
          snd = "엠피리언 컴벳 유니폼 가죽 세트 선택 상자";
        } else if (rnd2 >=99466880 && rnd2 < 99502880) {
          snd = "엠피리언 컴벳 유니폼 경갑 세트 선택 상자";
        } else if (rnd2 >=99502880 && rnd2 < 99538880) {
          snd = "엠피리언 컴벳 유니폼 중갑 세트 선택 상자";
        } else if (rnd2 >=99538880 && rnd2 < 99574880) {
          snd = "엠피리언 컴벳 유니폼 판금 세트 선택 상자";
        } else if (rnd2 >=99574880 && rnd2 < 99724880) {
          snd = "엠피리언 퍼스트 컴벳 세트 선택 장비 상자";
        } else if (rnd2 >=99724880 && rnd2 < 99874880) {
          snd = "엠피리언 세컨드 컴벳 세트 선택 장비 상자";
        } else if (rnd2 >=99874880 && rnd2 < 99879572) {
          snd = "타락한 어둠의 힘 천 세트 선택 상자";
        } else if (rnd2 >=99879572 && rnd2 < 99884264) {
          snd = "타락한 어둠의 힘 가죽 세트 선택 상자";
        } else if (rnd2 >=99884264 && rnd2 < 99888956) {
          snd = "타락한 어둠의 힘 경갑 세트 선택 상자";
        } else if (rnd2 >=99888956 && rnd2 < 99893648) {
          snd = "타락한 어둠의 힘 중갑 세트 선택 상자";
        } else if (rnd2 >=99893648 && rnd2 < 99898340) {
          snd = "타락한 어둠의 힘 판금 세트 선택 상자";
        } else if (rnd2 >=99898340 && rnd2 < 99903032) {
          snd = "붉게 일렁이는 혈광갑주 천 세트 선택 상자";
        } else if (rnd2 >=99903032 && rnd2 < 99907724) {
          snd = "붉게 일렁이는 혈광갑주 가죽 세트 선택 상자";
        } else if (rnd2 >=99907724 && rnd2 < 99912416) {
          snd = "붉게 일렁이는 혈광갑주 경갑 세트 선택 상자";
        } else if (rnd2 >=99912416 && rnd2 < 99917108) {
          snd = "붉게 일렁이는 혈광갑주 중갑 세트 선택 상자";
        } else if (rnd2 >=99917108 && rnd2 < 99921800) {
          snd = "붉게 일렁이는 혈광갑주 판금 세트 선택 상자";
        } else if (rnd2 >=99921800 && rnd2 < 99960900) {
          snd = "디멘션 크래쉬 세트 선택 상자";
        } else if (rnd2 >=99960900 && rnd2 < 100000000) {
          snd = "어둠의 침식 세트 선택 상자";
        }
        result = result + i + "회차\n" + fst + "\n      +\n" + snd + "\n\n";
      }
      result = result + "총 소모한 열쇠 : " + n*3 + "개\n소모한 금액 : " + n*300 + "세라";
      replier.reply(result);
      return 0;
    } else if (n = "NaN") {
      var error = "《" + sender + " 님의 봉인된 자물쇠 개봉 실패》\n명령어 뒤에 숫자만 기입해주세요!\n숫자는 2부터 100까지만 기입해주세요!";
      replier.reply(error);
      return 0;
    }
  } else if (msg == "!봉자") {
    var error = "《" + sender + " 님의 봉인된 자물쇠 개봉 실패》\n명령어 뒤에 1부터 100까지 숫자를 기입해주세요!";
    replier.reply(error);
    return 0;
  }

  if (msg == "!가상보주" && room == "크리 톡방") {
    var hidden = Math.floor(Math.random() * 100);
    result = "《" + sender + "님의 가상 보주 시뮬레이터》\n아래의 보주가 부여되었습니다!\n";
    rnd = Math.floor(Math.random() * skill.length);
    rnd2 = Math.floor(Math.random() * leveling.length);
    result = result + skill[rnd] + leveling[rnd2];
    replier.reply(result);
    if (hidden >= 0 && hidden < 4) {
      rnd2 = Math.floor(Math.random() * leveling.length);
      result = "《히든 보주 발동!》\n대신 아래의 보주가 부여되었습니다!\n창조의 공간" + leveling[rnd2];
      replier.reply(result);
    }
    return 0;
  }
  
  if (msg.indexOf("!가상보주 ") == 0 && room == "크리 톡방") {
    var n = parseInt(msg.replace("!가상보주 ", ""));
    result = "《" + sender + "님의 가상 보주 시뮬레이터》\n아래의 보주가 순서대로 부여되었습니다!" + "​".repeat(495);
    if (n > 1 && n <= 100 && n != "NaN") {
      for (var i = 1; i <= n; i++) {
        rnd = Math.floor(Math.random() * skill.length);
        rnd2 = Math.floor(Math.random() * leveling.length);
        result = result + "\n\n" + i + "회차\n" + skill[rnd] + leveling[rnd2];
      }
      replier.reply(result);
      return 0;
    } else if (msg != "!가상보주") {
      var error = "《" + sender + " 님의 가상 보주 시뮬레이터 실패》\n명령어 뒤에 숫자만 기입해주세요!\n숫자는 2부터 100까지만 기입해주세요!";
      replier.reply(error);
      return 0;
    }
  }

  if (msg == "!에픽추천") {
    rnd = Math.floor(Math.random() * 50);
    if (rnd == 1) {
      sw = 1;
    } else if (rnd == 2) {
      sw = 2;
    } else if (rnd == 3) {
      sw = 3;
    }

    result = "《" + sender + "님의 에픽 추천》\n\n";

    rnd = Math.floor(Math.random() * sang.length);
    if (sw == 1) {
      result = result + "상의 : (신)" + sang[rnd] + "\n";
    } else {
      result = result + "상의 : " + sang[rnd] + "\n";
    }

    rnd = Math.floor(Math.random() * ha.length);
    result = result + "하의 : " + ha[rnd] + "\n";

    rnd = Math.floor(Math.random() * eo.length);
    result = result + "어깨 : " + eo[rnd] + "\n";

    rnd = Math.floor(Math.random() * bel.length);
    result = result + "벨트 : " + bel[rnd] + "\n";

    rnd = Math.floor(Math.random() * sin.length);
    result = result + "신발 : " + sin[rnd] + "\n\n";

    rnd = Math.floor(Math.random() * mok.length);
    result = result + "목걸이 : " + mok[rnd] + "\n";

    rnd = Math.floor(Math.random() * pal.length);
    if (sw == 2) {
      result = result + "팔찌 : (신)" + pal[rnd] + "\n";
    } else {
      result = result + "팔찌 : " + pal[rnd] + "\n";
    }

    rnd = Math.floor(Math.random() * van.length);
    result = result + "반지 : " + van[rnd] + "\n\n";

    rnd = Math.floor(Math.random() * bo.length);
    result = result + "보조장비 : " + bo[rnd] + "\n";

    rnd = Math.floor(Math.random() * beop.length);
    result = result + "마법석 : " + beop[rnd] + "\n";

    rnd = Math.floor(Math.random() * gui.length);
    if (sw == 3) {
      result = result + "귀걸이 : (신)" + gui[rnd];
    } else {
      result = result + "귀걸이 : " + gui[rnd];
    }
    
    replier.reply(result);
    return 0;
  }

  if (msg.indexOf("!사도 ") == 0) {
    var n = parseInt(msg.split(" ")[1]);
    var result = "《" + sender + " 님의 스페셜 보물상자 결과》\n";
    if (n > 0 && n <= 100 && n != "NaN") {
      if (n > 1) {
        result = result + "\u200b".repeat(495);
      }
      for (var i = 1; i <= n; i++) {
        rnd = Math.floor(Math.random() * 100000);
        var fst;
        if (rnd >= 0 && rnd < 125) {
          fst = "★ 뇌광의 사수 빅토리아 알 ★";
        } else if (rnd >= 125 && rnd < 250) {
          fst = "★ 폭풍을 부르는 성녀 글로리아 알 ★";
        } else if (rnd >= 250 && rnd < 375) {
          fst = "★ SD 프레이-이시스 알 ★";
        } else if (rnd >= 375 && rnd < 500) {
          fst = "★ SD 이시스-프레이 알 ★";
        } else if (rnd >= 500 && rnd < 625) {
          fst = "★ 남귀검사 히든 아바타 상자 ★";
        } else if (rnd >= 625 && rnd < 750) {
          fst = "★ 여귀검사 히든 아바타 상자 ★";
        } else if (rnd >= 750 && rnd < 1050) {
          fst = "스페셜 모자 아바타 선택 상자";
        } else if (rnd >= 1050 && rnd < 1550) {
          fst = "히든 칭호 상자";
        } else if (rnd >= 1550 && rnd < 2050) {
          fst = "남거너 무기 아바타 상자";
        } else if (rnd >= 2050 && rnd < 2550) {
          fst = "여귀검사 무기 아바타 상자";
        } else if (rnd >= 2550 && rnd < 3050) {
          fst = "여거너 무기 아바타 상자";
        } else if (rnd >= 3050 && rnd < 3550) {
          fst = "여격투가 무기 아바타 상자";
        } else if (rnd >= 3550 && rnd < 4050) {
          fst = "총검사 무기 아바타 상자";
        } else if (rnd >= 4050 && rnd < 4550) {
          fst = "여마법사/크리에이터 무기 아바타 상자";
        } else if (rnd >= 4550 && rnd < 5050) {
          fst = "도적 무기 아바타 상자";
        } else if (rnd >= 5050 && rnd < 5550) {
          fst = "남격투가 무기 아바타 상자";
        } else if (rnd >= 5550 && rnd < 6050) {
          fst = "남귀검사/다크나이트 무기 아바타 상자";
        } else if (rnd >= 6050 && rnd < 6550) {
          fst = "여프리스트 무기 아바타 상자";
        } else if (rnd >= 6550 && rnd < 7050) {
          fst = "마창사 무기 아바타 상자";
        } else if (rnd >= 7050 && rnd < 7550) {
          fst = "나이트 무기 아바타 상자";
        } else if (rnd >= 7550 && rnd < 8050) {
          fst = "남마법사 무기 아바타 상자";
        } else if (rnd >= 8050 && rnd < 8550) {
          fst = "남프리스트 무기 아바타 상자";
        } else if (rnd >= 8550 && rnd < 11550) {
          fst = "명속성 스페셜 보주";
        } else if (rnd >= 11550 && rnd < 14550) {
          fst = "수속성 스페셜 보주";
        } else if (rnd >= 14550 && rnd < 17550) {
          fst = "화속성 스페셜 보주";
        } else if (rnd >= 17550 && rnd < 20550) {
          fst = "암속성 스페셜 보주";
        } else if (rnd >= 20550 && rnd < 23550) {
          fst = "모든 속성 스페셜 보주";
        } else if (rnd >= 23550 && rnd < 31800) {
          fst = "칭호 변경권 1 ~ 5개 상자";
        } else if (rnd >= 31800 && rnd < 40050) {
          fst = "달인의 계약 3 ~ 5일 상자";
        } else if (rnd >= 40050 && rnd < 48300) {
          fst = "패왕의 계약 3 ~ 5일 상자";
        } else if (rnd >= 48300 && rnd < 61225) {
          fst = "반짝이는 세계의 장난감 10 ~ 50개 상자";
        } else if (rnd >= 61225 && rnd < 74150) {
          fst = "레미의 반짝이는 손길 10 ~ 50개 상자";
        } else if (rnd >= 74150 && rnd < 87075) {
          fst = "바인드 큐브 1 ~ 3개 상자";
        } else if (rnd >= 87075 && rnd < 100000) {
          fst = "해방된 칼레이도 박스 1 ~ 5개 상자";
        }

        result = result + "\n\n" + i + "회차\n" + fst;
      }
      replier.reply(result);
      return 0;
    } else if (n = "NaN") {
      var error = "《" + sender + " 님의 스페셜 보물상자 개봉 실패》\n명령어 뒤에 숫자만 기입해주세요!\n숫자는 2부터 100까지만 기입해주세요!";
      replier.reply(error);
      return 0;
    }
  } else if (msg == "!사도") {
    var error = "《" + sender + " 님의 스페셜 보물상자 개봉 실패》\n명령어 뒤에 1부터 100까지 숫자를 기입해주세요!";
    replier.reply(error);
    return 0;
  }

}

{
  var rnd;
  var rnd2;
  var skill = new Array("파이어 월", "운석 낙하", "아이스 스톤", "아이스 플레이트", "플레임 허리케인", "아이스 실드", "윈드 프레스", "윈드 스톰", "웜홀", "빙하시대", "링크", "상상력", "계열강화", "증폭");
  var leveling = new Array(" +1 Lv", " +2 Lv");
  
  var sang = new Array("제사장", "마법사", "무희", "그림자", "집행", "베테랑", "사막", "트로피카", "A.D.P", "개악", "역작", "구속", "흐름", "선택", "대자연", "심연", "황혼여행", "기구", "분노");
  var ha = new Array("제사장", "마법사", "무희", "그림자", "집행", "베테랑", "사막", "트로피카", "A.D.P", "개악", "역작", "구속", "흐름", "선택", "대자연", "흑마술", "시간여행", "함성", "광란");
  var eo = new Array("제사장", "마법사", "무희", "그림자", "집행", "베테랑", "사막", "트로피카", "A.D.P", "개악", "역작", "구속", "흐름", "선택", "대자연");
  var bel = new Array("제사장", "마법사", "무희", "그림자", "집행", "베테랑", "사막", "트로피카", "A.D.P", "개악", "역작", "구속", "흐름", "선택", "대자연");
  var sin = new Array("제사장", "마법사", "무희", "그림자", "집행", "베테랑", "사막", "트로피카", "A.D.P", "개악", "역작", "구속", "흐름", "선택", "대자연", "나락", "차원여행", "주사위", "아린비극");
  
  var mok = new Array("술식", "먼동", "트앵", "정령사", "심연", "황혼여행", "기구", "분노");
  var pal = new Array("술식", "먼동", "트앵", "정령사", "흑마술", "시간여행", "함성", "광란");
  var van = new Array("술식", "먼동", "트앵", "정령사", "나락", "차원여행", "주사위", "아린비극");
  
  var bo = new Array("군신", "영보", "시간전쟁", "싱크로", "심연", "황혼여행", "기구", "분노");
  var beop = new Array("군신", "영보", "시간전쟁", "싱크로", "흑마술", "시간여행", "함성", "광란");
  var gui = new Array("군신", "영보", "시간전쟁", "싱크로", "나락", "차원여행", "주사위", "아린비극");
  
  var emblem = new Array("용맹의 축복", "금단의 저주", "영광의 축복", "귀혼일체", "신검합일", "잔영의 케이가", "살의의 파동", "임무 시작", "데스 바이 리볼버(남)", "컨제스트", "페이스풀", "카이", "오버드라이브", "오버 차지(남)", "환수 폭주", "폭주", "광폭화", "오기조원", "전장의 여신", "신탁의 기원", "데스 바이 리볼버(여)", "엘레멘탈 번", "고대의 도서관", "광적인 믿음", "일곱개의 대죄", "폭음폭식", "다크니스", "전술 지휘", "독 바르기", "오버 차지(여)", "강권(남)", "윈드니스", "미라클 비전(남)", "역혈기공", "로보틱스(남)", "역전의 승부사", "미라클 비전(여)", "마나 익스트랙트", "로보틱스(여)", "반드시 잡는다!(남)", "열정의 챠크라", "셰이크 다운", "섀도우 박서", "블러드 번", "브레인 스톰", "오버플로우", "화둔 : 홍염", "암살자의 마음가짐", "마나 폭주", "증폭", "강권(여)", "마창 해방", "코어 프렉시스", "공명", "성령의 메이스", "오러 랜스", "뒷골목 싸움법", "암흑의 의식", "광명의 챠크라", "추락하는 영혼", "워크라이", "반드시 잡는다!(여)", "경계망상", "달의 커튼", "정신이 번쩍!", "혈십자", "청혈투귀", "무기의 극의", "견고의 대검 마스터리", "쾌속의 도 마스터리", "속성의 소검 마스터리", "파쇄의 둔기 마스터리", "이보브", "마검 제어", "삼화취정", "스타일리쉬", "중화기 마스터리(남)", "아크리액터", "병기 숙련(남)", "리볼버 강화", "중화기 마스터리(여)", "트랜스포메이션", "병기 숙련(여)", "뇌명 : 사나운 빛의 넨수", "머슬 시프트(남)", "도발(남)", "강렬한 테이크 다운(남)", "나선의 넨", "머슬 시프트(여)", "도발(여)", "강렬한 테이크 다운(여)", "속성 마스터리", "환수 강화 오라", "창 마스터리", "봉 마스터리", "퍼밀리어와 친하게 지내기", "퍼페티어", "엘레멘탈 실드", "발현", "블러드", "휘몰아치는 질풍의 봉 마스터리", "괴리 : 디멘션 할로우", "숙련된 전문가", "소태도 마스터리", "중검 마스터리", "코어 블레이드 마스터리", "계시 : 아리아", "배틀액스 마스터리", "법력 강화", "짊어진 자의 낫 마스터리", "수호의 은총", "윌 드라이버", "거병 마스터리", "환청", "마창 제어", "장창 숙련", "광창 마스터리", "잠식", "체인러쉬", "제노사이드 크러쉬", "세라픽 페더", "대식가", "쌍검 마스터리", "단검 마스터리", "발라크르의 맹약", "인법 : 잔영 남기기", "날카로운 단검", "어둠의 대검 마스터리", "어둠의 소검 마스터리", "어둠의 도 마스터리", "어둠의 둔기 마스터리", "어둠의 광검 마스터리", "계열강화");
  
  var buff = new Array("용맹의 축복", "영광의 축복", "임무 시작", "오버드라이브", "데스 바이 리볼버(남)", "페이스 풀", "신검합일", "전장의 여신", "잔영의 케이가", "살의의 파동", "전술 지휘", "폭주", "오기조원", "마나 익스트랙트", "컨제스트", "광폭화", "데스 바이 리볼버(여)", "환수 폭주", "다크니스", "엘레멘탈 번", "고대의 도서관", "셰이크 다운", "화둔 : 홍염", "폭음폭식", "카이", "오버 차지(남)", "광적인 믿음", "신탁의 기원", "브레인 스톰", "열정의 챠크라", "역전의 승부사", "미라클 비전(남)", "로보틱스(남)", "미라클 비전(여)", "오버 차지(여)", "윈드니스", "블러드 번", "일곱개의 대죄", "오버플로우", "오러 랜스", "강권(남)", "역혈기공", "섀도우 박서", "독 바르기", "강권(여)", "코어 프렉시스", "마창해방", "공명", "워크라이", "경계망상", "로보틱스(여)", "암살자의 마음가짐", "반드시 잡는다!(남)", "광명의 챠크라", "추락하는 영혼", "반드시 잡는다!(여)", "성령의 메이스", "마나 폭주", "암흑의 의식", "증폭", "뒷골목 싸움법", "귀혼일체", "금단의 저주");
  
  var UR = new Array(
    "요시코 [정말 굉장해! / 반짝반짝★나이트 퍼레이드 / 6차]",
  
    "카나타 [가자~~!! / 반짝반짝★나이트 퍼레이드 / 4차]",
  
    "치카 [아무리 해도 끝나지 않아 / Afternoon Tea♡ / 6차]",
  
    "아이 [다들 여길 찍어줘! / S.I.Collection / 4차]",
  
    "호노카 [첫 번째 모델 / S.I.Collection / 6차]",
  
    "우미 [훌륭해요, 정답이에요 / 매지컬☆할로윈 / 6차]",
  
    "마리 [마녀의 샤이니 스튜~! / 매지컬☆할로윈 / 6차]",
  
    "루비 [아무리 찾아도 없었던 굿즈! / 꿈이 가득한☆루비 랜드 / 6차]",
  
    "리코 [예쁘다… / 8월 대보름의 옥토끼 / 6차]",
  
    "시즈쿠 [\"달나라\"로 안내할게요 / 보름달과 옥토끼 / 4차]",
  
    "엠마 [이 생선 정말 맛있다! / 가을 식탁 / 4차]",
  
    "하나마루 [영차! 영차! / 가을 식탁 / 5차]",
  
    "노조미 [얘들아~ 밥 먹자~ / 알록달록 별사탕 / 5차]",
  
    "세츠나 [꼭 해야만 해요 / Pioneering a new World / 4차]",
  
    "코토리 [둘 다… 이제 그만해! / Pioneering a new World / 5차]",
  
    "니코 [소꿉놀이 세트를 쓰자! / 장난감 세상에 온 걸 환영해 / 5차]",
  
    "요우 [전철을 출발시키자~ 가라~!! / 장난감 세상에 온 걸 환영해 / 5차]",
  
    "아유무 [꼭 잡고 있어도 돼? / Present For You♡ / 3차]",
  
    "에리 [우승은… 내 거야! / Queen of the Circuit / 5차]",
  
    "마리 [우후후♪ 기운 넘치는 애네! / 트와일라이트 카우걸 / 5차]",
  
    "우미 [처, 천장!! 벽에도!! / 요괴 소녀 / 5차]",
  
    "리나 [리나보드 [크흐흐] / 요괴 소녀 / 3차]",
  
    "마키 […그러게, 정말 예쁘다 / 너에게 보내는 세레나데 / 5차]",
  
    "카나타 [카나타 등장! / 신출귀몰☆괴도 K / 3차]",
  
    "하나요 [나, 알았어! / 풋내기 탐정 / 5차]",
  
    "카난 [비에 씻겨 나가지 않도록 / 레인 드롭 / 4차]",
  
    "노조미 [이렇게 하면 돼! / 레인 드롭 / 4차]",
  
    "카스미 [카스밍, 이제 한계예요! / 레이디 데뷔 / 3차]",
  
    "카린 [그런 식으로 말하면 곤란해… / Noble Princess / 3차]",
  
    "리코 [공주님에 가까워지고 싶어 / Noble Princess / 4차]",
  
    "린 [다행이다~!! / 환영합니다☆차이냥 메이드 / 4차]",
  
    "아유무 [어서 오세요♪ / 환영합니다☆차이나 메이드 / 2차]",
  
    "마리 [우리들의 색깔 / 컬러풀 스플래시 / 4차]",
  
    "카나타 [천국이 보여… / 온천의 선녀 / 2차]",
  
    "하나마루 [몸도 같이 저절로 움직여유~! / 온천의 선녀 / 4차]",
  
    "세츠나 [아이스 스케이팅 대결을 시작합니다! / Snow Crystal / 2차]",
  
    "마키 [잠깐, 너무 빨라! / Snow Crystal / 4차]",
  
    "시즈쿠 [앗, 간지럽다니까! / 장미의 기사 / 2차]",
  
    "리나 [다 함께 전골 요리 / 베지터블☆원더랜드 / 2차]",
  
    "요시코 [저리 가… 앗!! / 베지터블☆원더랜드 / 4차]",
  
    "다이아 [포옹해 드릴게요 / 매지컬☆피버 / 3차]",
  
    "노조미 [내 손은 약손~♪ / 매지컬☆피버 / 3차]",
  
    "카린 [나 때문에 두근거렸어? / 셀러브리티 블루 / 2차]",
  
    "린 [전속력으로 간다냥~♪ / 숲속의 헌터 걸 / 3차]",
  
    "엠마 [가져왔어 / 순진한 빨간 모자 / 2차]",
  
    "아이 [UMA도 꼭 낚일 거야! / 용궁 공주님 / 1차]",
  
    "호노카 [잠깐만… 으아아앗. / 용궁 공주님 / 3차]",
  
    "리나 [꼭 클리어할 거야…! / 필링 시그널 / 1차]",
  
    "마키 [내… 탄생화인걸 / 플라워 심포니 / 3차]",
  
    "카스미 [오래 기다리셨죠? / 플라워 심포니 / 1차]",
  
    "아유무 [앗, 다들 와 주셨군요? / Sweets Deco / 1차]",
  
    "루비 [입에서 살살 녹아 / Sweets Deco / 3차]",
  
    "하나요 [너무 귀여우니까 꼬옥~ / 해피 퍼레이드 / 3차]",
  
    "시즈쿠 [여기서 넘어질 수는 없어요! / Miracle voyage / 1차]",
  
    "요우 [이 놀이기구, 신나는데~♪ / Miracle voyage / 3차]",
  
    "니코 [니코의 특제 도시락은 어떠세요? / 샛별의 기적 소리 / 2차]",
  
    "린 [여기야, 여기! 빨리 와라냥! / 애프터 스쿨 캣 / 2차]",
  
    "치카 [별똥별에 둘러싸여 / 레오 스타 브라이트 / 2차]",
  
    "에리 [바, 방금 저 수풀이 흔들렸어…. / 포레스트 페어리 / 2차]",
  
    "리코 [막힘없고 맑은 선율 / 프렐류드 블로섬 / 2차]",
  
    "카난 [이제는 하나가 됐잖아 / 블루 레브 / 2차]",
  
    "우미 [화살에 혼을 담아 / 블루 아모르 / 2차]",
  
    "다이아 [다음 포즈는 어떻게 할까요? / 라핀 미미 / 2차]",
  
    "요시코 [타락천사 강림! / 트와일라이트 데몬 / 2차]",
  
    "코토리 [이것 좀 도와줄래? / Welcome to the party / 2차]",
  
    "호노카 [동물원에서 대결! / 하이칼라 로맨스 / 1차]",
  
    "에리 [에리치카 선생님의 볼링 수업 / 이터널 프로미스 / 1차]",
  
    "코토리 [너와의 첫 추억 / 러블리 폴리스 / 1차]",
  
    "우미 [요조숙녀 패닉 / 여름 축제 심포니 / 1차]",
  
    "린 [린이 있으니까 괜찮아! / 달빛의 무희 / 1차]",
  
    "마키 [마키와 영화 데이트 / 스칼렛 로열 / 1차]",
  
    "노조미 [별빛 하늘 아래에서 / 스위트 나이트 퍼레이드 / 1차]",
  
    "하나요 [지금부터가 진짜! / 체리 플러터 / 1차]",
  
    "니코 [서프라이즈 선물 / My Sweet Devil / 1차]",
  
    "치카 [해변 산책 / 서머 어드벤처 / 1차]",
  
    "리코 [물의 심포니 / 로열 엔젤 / 1차]",
  
    "카난 [슬슬 같이 잠수해 볼래? / 해신의 무녀 / 1차]",
  
    "다이아 [비밀이에요 / 무녀춤 스텝 / 1차]",
  
    "요우 [수족관 데이트 / 래빗 인 원더랜드 / 1차]",
  
    "요시코 [엔젤 스나이퍼 / 헌티드 프린세스 / 1차]",
  
    "하나마루 [종이 너머의 인연 / 꿈꾸는 한 마리 양 / 1차]",
  
    "마리 [둘이 찍는 첫 사진 / Bitter & Sweet / 1차]",
  
    "루비 [꿈의 스위트 포테이토 / 판타스틱 피에로 / 1차]"
    );
  
    var SR = new Array(
      "린 [유메토비]",
      "마키 [유메토비]",
      "하나마루 [호라이즌]",
      "아유무 [SGBN]",
      "요우 [호라이즌]",
      "카나타 [메르헨]",
      "에리 [유메토비]",
      "니코 [유메토비]",
      "호노카 [원더러시]",
      "마리 [코이아쿠]",
      "우미 [원더러시]",
      "아이 [럽유마프]",
      "시즈쿠 [럽유마프]",
      "노조미 [원더러시]",
      "엠마 [럽유마프]",
      "카린 [럽유마프]",
      "치카 [코이아쿠]",
      "리나 [럽유마프]",
      "시오리코 [결빛]",
      "요우 [코이아쿠]",
      "니코 [원더러시]",
      "코토리 [원더러시]",
      "세츠나 [럽유마프]",
      "카난 [코이아쿠]",
      "카나타 [마칭 하모니]",
      "루비 [브라멜로]",
      "하나마루 [브라멜로]",
      "코토리 [소레키세]",
      "마키 [소레키세]",
      "카린 [마칭 하모니]",
      "요시코 [브라멜로]",
      "호노카 [소레키세]",
      "우미 [소레키세]",
      "노조미 [소레키세]",
      "아유무 [마칭 하모니]",
      "리코 [브라멜로]",
      "카스미 [마칭 하모니]",
      "하나요 [소레키세]",
      "엠마 [마칭 하모니]",
      "카나타 [레인로즈]",
      "아이 [레인로즈]",
      "리코 [아오점프]",
      "마리 [아오점프]",
      "우미 [보라라라]",
      "엠마 [레인로즈]",
      "린 [보라라라]",
      "아유무 [레인로즈]",
      "니코 [보라라라]",
      "에리 [보라라라]",
      "카스미 [레인로즈]",
      "리나 [레인로즈]",
      "세츠나 [레인로즈]",
      "다이아 [아오점프]",
      "카린 [애니멀]",
      "호노카 [보라라라]",
      "치카 [아오점프]",
      "다이아 [키미코코]",
      "카난 [키미코코]",
      "하나요 [스노하레]",
      "코토리 [스노하레]",
      "루비 [키미코코]",
      "요시코 [키미코코]",
      "노조미 [스노하레]",
      "린 [스노하레]",
      "하나마루 [키미코코]",
      "시즈쿠 [애니멀]",
      "마키 [스노하레]",
      "에리 [스노하레]",
      "요우 [키미코코]",
      "호노카 [프룻팔러]",
      "에리 [프룻팔러]",
      "코토리 [프룻팔러]",
      "우미 [프룻팔러]",
      "린 [프룻팔러]",
      "마키 [프룻팔러]",
      "노조미 [프룻팔러]",
      "하나요 [프룻팔러]",
      "니코 [프룻팔러]",
      "치카 [해피치어]",
      "리코 [해피치어]",
      "카난 [해피치어]",
      "다이아 [해피치어]",
      "요우 [해피치어]",
      "요시코 [해피치어]",
      "하나마루 [해피치어]",
      "마리 [해피치어]",
      "루비 [해피치어]",
      "아유무 [유메잇뽀]",
      "카스미 [다이아몬드]",
      "시즈쿠 [아리히로]",
      "카린 [스타라이트]",
      "아이 [메챠고잉]",
      "카나타 [네무모리]",
      "세츠나 [체이스]",
      "엠마 [에버그린]",
      "리나 [도키삐뽀]"
    );
  
    var NR = new Array("호노카 [교복]", "에리 [교복]", "코토리 [교복]", "우미 [교복]", "린 [교복]", "마키 [교복]", "노조미 [교복]", "하나요 [교복]", "니코 [교복]", "치카 [교복]", "리코 [교복]", "카난 [교복]", "다이아 [교복]", "요우 [교복]", "요시코 [교복]", "하나마루 [교복]", "마리 [교복]", "루비 [교복]", "아유무 [교복]", "카스미 [교복]", "시즈쿠 [교복]", "카린 [교복]", "아이 [교복]", "카나타 [교복]", "세츠나 [교복]", "엠마 [교복]", "리나 [교복]", "시오리코 [교복]", "호노카 [연습복]", "에리 [연습복]", "코토리 [연습복]", "우미 [연습복]", "린 [연습복]", "마키 [연습복]", "노조미 [연습복]", "하나요 [연습복]", "니코 [연습복]", "치카 [연습복]", "리코 [연습복]", "카난 [연습복]", "다이아 [연습복]", "요우 [연습복]", "요시코 [연습복]", "하나마루 [연습복]", "마리 [연습복]", "루비 [연습복]", "아유무 [연습복]", "카스미 [연습복]", "시즈쿠 [연습복]", "카린 [연습복]", "아이 [연습복]", "카나타 [연습복]", "세츠나 [연습복]", "엠마 [연습복]", "리나 [연습복]", "시오리코 [연습복]");
  }