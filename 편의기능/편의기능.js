const scriptName = "편의기능";
const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule;
Kakao.init();
Kakao.login();

//변수
{
  var data;
  var searchvalue;
  var rnd;
  var rnd2;
  var counter = 0;
  var cardcounter = 0;
  var msgcount = 0;
  var preChat = [];
  //카링용 이미지
  {
    var sandbagimg = "https://blogfiles.pstatic.net/MjAyMDA4MjlfMTIg/MDAxNTk4NjM4NTQwMzMz.jAfBNGytwIKP4UsRVxm-XLwh_Sk9FuTAvYSwEZHJFYwg.wAmo47mGvH02EorvDkdwA7KdG8sXCXgz94wT2nJv1zYg.PNG.gocaps/%EC%A0%9C%EB%AA%A9_%EC%97%86%EC%9D%8C-4.png?type=w2";
    var logenimg = "https://blogfiles.pstatic.net/MjAyMDA4MjlfMTMx/MDAxNTk4NjM4NTQwNjIx.eJPe0rXVxDD5kt7yx3pRN4MHnga2zXXAfRI529Vu3rYg.Xl-rLnKelxK-VayOl3XRO3fMUzAw1tF5I7HjpvjELesg.PNG.gocaps/%EC%A0%9C%EB%AA%A9_%EC%97%86%EC%9D%8C-5.png?type=w2";
    var isisimg = "https://blogfiles.pstatic.net/MjAyMDA4MjlfMTQg/MDAxNTk4NjM4NTQwODE2.x1nroSeHhGt6aKT5jBx10P9aj-oORSRXLyuXDqUcNPkg.93c6CQGZw5WGtIQz1NdLtEYBd54lNnMnLf4CQXOvVLMg.PNG.gocaps/%EC%A0%9C%EB%AA%A9_%EC%97%86%EC%9D%8C-6.png?type=w2";
    var sirocoimg = "https://blogfiles.pstatic.net/MjAyMDA4MjlfMTk3/MDAxNTk4NjM4NTQxMDY0.8tmYmhfunJE8k2oirbQ013-aN2dTV5KGkRLaX-lwlOUg.beKckWfLzcNEUI2g85ExDPVgVDB2w05pkxJ1-AMvsaUg.PNG.gocaps/%EC%A0%9C%EB%AA%A9_%EC%97%86%EC%9D%8C-7.png?type=w2";
  }
  //var img = "";
}

//배열
{
  var chtsev = new Array("카인", "디레", "시로", "프레", "카시", "힐더", "안톤", "바칼");
  var sevraw = new Array("cain", "diregie", "siroco", "prey", "casillas", "hilder", "anton", "bakal");
  var servername = new Array("카인", "디레지에", "시로코", "프레이", "카시야스", "힐더", "안톤", "바칼");
  var jobvalue = new Array("귀검사(남)", "격투가(여)", "거너(남)", "마법사(여)", "프리스트(남)", "거너(여)", "도적", "격투가(남)", "마법사(남)", "다크나이트", "크리에이터", "귀검사(여)", "나이트", "마창사", "프리스트(여)", "총검사");
  var grade = new Array("고급", "희귀", "영웅", "전설", "유물");
  var gradeRow = new Array("1", "2", "3", "4", "5");

  var resultImgName = new Array("주화", "골드", "카드", "실링");
  var resultImg = new Array(
    "https://ark.bynn.kr/assets/lostark/pirate_coin.png",
    "https://ark.bynn.kr/assets/lostark/gold_coin.png",
    "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_7_140.png",
    "https://ark.bynn.kr/assets/lostark/siling_coin.png"
  );

  var weaterText = new Array("맑음", "구름조금", "구름많음", "흐림", "소나기", "비", "가끔 비", "한때 비", "눈", "가끔 눈", "한때 눈", "비 또는 눈", "가끔 비 또는 눈", "한때 비 또는 눈", "눈 또는 비", "가끔 눈 또는 비", "한때 눈 또는 비", "천둥번개", "연무", "안개", "박무 (엷은 안개)", "황사");
  var weaterImg = new Array(  // 밤 = .png 앞에 _N 추가   ex) NB01_N.png    밤 = 18시~07시, 맑음/구름조금/구름많음 에만 적용
    /*맑음*/"https://www.weather.go.kr/home/images/icon/NW/NB01.png",
    /*구름조금*/"https://www.weather.go.kr/home/images/icon/NW/NB02.png",
    /*구름많음*/"https://www.weather.go.kr/home/images/icon/NW/NB03.png",
    /*흐림*/"https://www.weather.go.kr/home/images/icon/NW/NB04.png",
    /*소나기*/"https://www.weather.go.kr/home/images/icon/NW/NB07.png",
    /*비*/"https://www.weather.go.kr/home/images/icon/NW/NB08.png",
    /*가끔 비*/"https://www.weather.go.kr/home/images/icon/NW/NB20.png",
    /*한때 비*/"https://www.weather.go.kr/home/images/icon/NW/NB20.png",
    /*눈*/"https://www.weather.go.kr/home/images/icon/NW/NB11.png",
    /*가끔 눈*/"https://www.weather.go.kr/home/images/icon/NW/NB21.png",
    /*한때 눈*/"https://www.weather.go.kr/home/images/icon/NW/NB21.png",
    /*비 또는 눈*/"https://www.weather.go.kr/home/images/icon/NW/NB12.png",
    /*가끔 비 또는 눈*/"https://www.weather.go.kr/home/images/icon/NW/NB22.png",
    /*한때 비 또는 눈*/"https://www.weather.go.kr/home/images/icon/NW/NB22.png",
    /*눈 또는 비*/"https://www.weather.go.kr/home/images/icon/NW/NB13.png",
    /*가끔 눈 또는 비*/"https://www.weather.go.kr/home/images/icon/NW/NB23.png",
    /*한때 눈 또는 비*/"https://www.weather.go.kr/home/images/icon/NW/NB23.png",
    /*천둥번개*/"https://www.weather.go.kr/home/images/icon/NW/NB14.png",
    /*연무*/"https://www.weather.go.kr/home/images/icon/NW/NB18.png",
    /*안개*/"https://www.weather.go.kr/home/images/icon/NW/NB15.png",
    /*박무 (엷은 안개)*/"https://www.weather.go.kr/home/images/icon/NW/NB17.png",
    /*황사*/"https://www.weather.go.kr/home/images/icon/NW/NB16.png"
  );

  //메뉴 목록
  {
    var menu = new Array("찜닭", "김밥", "떡볶이", "곱창", "막창", "된장찌개", "동태찌개", "회덮밥", "쫄면", "물냉면", "비빔냉면", "돼지갈비", "소갈비", "삼겹살", "차돌박이", "갈매기살", "생선구이", "잔치국수", "비빔국수", "김치말이국수", "순대", "감자탕", "순대국", "곱창전골", "부대찌개", "만두국", "항정살", "부채살", "가브리살", "새우튀김", "야채튀김", "고구마튀김", "오뎅", "회무침", "비빔밥", "육회비빔밥", "굶어", "제육볶음", "참치찌개", "꽁치찌개", "치킨마요덮밥", "해물탕", "뼈해장국", "케이크", "오므라이스", "볶음밥", "짜장면", "라볶이", "짬뽕", "닭발", "오돌뼈", "주먹밥", "치즈떡볶이", "치즈김밥", "참치김밥", "땡초김밥", "꼬마김밥", "닭꼬치", "파전", "부추전", "감자전", "녹두전", "빈대떡", "짬뽕밥", "잡채밥", "짜장밥", "카레라이스", "소불고기", "뚝배기불고기", "해바라기씨", "개사료", "소금구이", "김치볶음밥", "김치덮밥", "돈까스", "치즈돈까스", "고구마돈까스", "고추돈까스", "짜장떡볶이", "햄버거", "에그버거", "와퍼", "치킨", "피자", "탕수육", "깐풍기", "라조기", "깐풍육", "라조육", "기스면", "울면", "닭강정", "새우볼", "새우볶음밥", "간장새우", "양념게장", "간장게장", "연포탕", "해신탕", "낙지볶음", "소머리국밥", "선지해장국", "콩나물국밥", "돼지국밥", "까르보나라", "봉골레파스타", "푸타네스카", "랍스타마리나라", "파마산볼로네제", "아라고스타로제", "포모도로", "알프레도폴로", "랍스터라비올리", "페투치네", "크레마빠네", "로마나", "족발", "보쌈", "대창", "양대창", "양꼬치", "곱창볶음", "순대곱창", "백순대", "들깨칼국수", "바지락칼국수", "칼국수", "등심스테이크", "안심스테이크", "티본스테이크", "한치구이", "롤케이크", "단팥빵", "도라야키", "자몽에이드", "초코렛", "우유", "씨리얼", "간고등어", "옥돔구이", "깅이죽", "자리물회", "한치물회", "갈낙탕", "닭갈비", "떡갈비", "숯불갈비", "찜갈비", "고갈비", "꼬막정식", "게꾹지", "고래고기", "곤드레밥", "과메기", "곰탕", "굴국밥", "수구레국밥", "따로국밥", "올갱이국밥", "창평국밥", "고기국수", "막국수", "메밀국수", "묵국수", "당면비빔", "어탕국수", "꼼장어구이", "충무김밥", "납짝만두", "진주냉면", "도리뱅뱅이", "돔배기", "두부두루치기", "뒷고기", "메밀묵", "몸국", "물회", "호박잎국", "갈치호박국", "순무김치", "식혜", "아구찜", "빙떡", "어리굴젓", "어묵국", "오겹살", "오리불고기", "오리탕", "유부보따리", "육회", "전복죽", "추어탕", "편수", "해물뚝배기", "호두과자", "홍어회", "흑돼지", "갓김치", "고들빼기김치", "갱시기", "중화비빔밥", "낫토", "라멘", "돈코츠라멘", "미소라멘", "모리오카냉면", "몬자야끼", "미소카츠", "복어회", "오코노미야키", "소바", "우동", "나가사키짬뽕", "카스텔라", "타이완라멘", "타코야끼", "테바사키", "동파육", "딤섬", "라면", "마파두부", "만두", "마라탕", "탄탄멘", "소롱포", "완탕", "할포", "우육면", "버블티", "차이푸단", "클램차우더", "라자냐", "마카로니", "스파게티", "펜네", "빠에야", "에그타르트", "브라트부르스트", "바이스부르스트", "아알주페", "슝켄", "함박스테이크", "비엔나소세지", "자허토르테", "라따뚜이", "에스카르고", "푸아그라", "퐁듀", "부야베스", "샴페인", "코냑", "로스트비프", "샌드위치", "포리지", "파스티", "피시앤칩스", "해기스", "라흐마준", "로쿰", "케밥", "캐비어", "샤슬릭", "우하", "안살라타디시저", "감바스", "굴라쉬", "슈페츨레", "하젠페퍼", "슈니첼", "자우어브라텐", "랑그드샤", "가렛트", "팬케이크", "오레오", "와플", "커피코카콜라", "무한으로 즐겨요 명륜진사갈비", "도너츠", "로우 앤 슬로우", "비프웰링턴", "온센타마고", "아이스크림", "메로나");
  }
  
  //메뉴 이미지
  {
    var mimg = new Array(
      /*찜닭*/"https://storage.wcuisine.net/image/production/service/image/recipe/235/7c2b5692-bf30-474b-b056-48a2827cbded.jpg",
      /*김밥*/"https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG",
      /*떡볶이*/"https://t1.daumcdn.net/cfile/tistory/99B6C24C5CA6ACBD02",
      /*곱창*/"https://img3.tmon.kr/cdn3/deals/2019/06/04/2138708266//2138708266_front_4V9N853ifu.jpg",
      /*막창*/"https://img-cf.kurly.com/shop/data/goodsview/20180426/gv10000022154_1.jpg",
      /*된장찌개*/"https://cdn.discordapp.com/attachments/778559127273734165/956626601997631488/ca8647124a4536b5dad3007a58181b7c1.png",
      /*동태찌개*/"https://ggtour.or.kr/wp-content/uploads/2014/02/489_03_800.jpg",
      /*회덮밥*/"http://item.ssgcdn.com/33/32/49/item/1000026493233_i1_1200.jpg",
      /*쫄면*/"https://thumbnail.10x10.co.kr/webimage/image/basic600/232/B002323279.jpg?cmd=thumb&w=500&h=500&fit=true&ws=false",
      /*물냉면*/"https://foodyap.co.kr/shopimages/goldplate1/072001000001.jpg?1560843496",
      /*비빔냉면*/"https://thumbnail.10x10.co.kr/webimage/image/basic600/232/B002325769.jpg?cmd=thumb&w=500&h=500&fit=true&ws=false",
      /*돼지갈비*/"https://product.hstatic.net/1000343598/product/303cb14543dd49f4873972a955fd1a2e_948a5c56a02c4e8fabb7041944164c61_grande.jpg",
      /*소갈비*/"https://img-cf.kurly.com/shop/data/goodsview/20180618/gv20000025499_1.jpg",
      /*삼겹살*/"https://post-phinf.pstatic.net/MjAxOTEwMDRfMjM2/MDAxNTcwMTc2MTgxMzAx.JLWXBjEweWWDIVxjWKMoSzzjJgo-bipwkFI3FnyWEvAg.QaWB2apDlQPiA8bTsVHl8xfcDyUAtiPtnz3q83wRDcMg.JPEG/%EC%8D%B8%EB%84%A4%EC%9D%BC-1.jpg?type=w1200",
      /*차돌박이*/"https://m.gosanmiso.com/web/product/big/201708/29_shop1_539875.jpg",
      /*갈매기살*/"https://www.nexentire.com/webzine/201812/kr/assets/images/contents/011_03.jpg",
      /*생선구이*/"https://i.ytimg.com/vi/WZVRxSgfnQA/maxresdefault.jpg",
      /*잔치국수*/"https://data.ygosu.com/editor/attach/20190611/20190611225958_fvbwkkgh.jpg",
      /*비빔국수*/"https://static.hubzum.zumst.com/hubzum/2017/06/20/13/ffb8ecd9a5964968aab11018ed9fd9cf_780x0c.jpg",
      /*김치말이국수*/"https://recipe1.ezmember.co.kr/cache/recipe/2018/07/24/aa413914e6829e7868e8f8d9dcabf6921.jpg",
      /*순대*/"https://t1.daumcdn.net/liveboard/dailylife/946d34355aab4a4a922de5215f8dc3ce.jpg",
      /*감자탕*/"https://minio.nculture.org/amsweb-opt/multimedia_assets/123/25487/7350/c/25487-medium-size.jpg",
      /*순대국*/"https://t1.daumcdn.net/liveboard/dailylife/94b862cfa7de44f88c080402840a141b.jpg",
      /*곱창전골*/"https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/dl/18/6/4/8/2/4/9/MUXYC/2047648249_125798838.jpg",
      /*부대찌개*/"https://t1.daumcdn.net/cfile/tistory/185A4C434D86861635?original",
      /*만두국*/"https://t1.daumcdn.net/cfile/blog/995219365D4DBFC206",
      /*항정살*/"https://cdn.discordapp.com/attachments/778559127273734165/786190757630574632/191735a0c6.png",
      /*부채살*/"https://mlb26.cafe24.com/img/usa_meat/chestake_mid.jpg",
      /*가브리살*/"https://cdn.discordapp.com/attachments/778559127273734165/786190663992737812/19172bb696.png",
      /*새우튀김*/"https://img1.tmon.kr/cdn3/deals/2019/09/24/2471902266/2471902266_front_f8c46bab61.jpg",
      /*야채튀김*/"https://t1.daumcdn.net/cfile/tistory/22579C4D58934EAD24",
      /*고구마튀김*/"https://img4.tmon.kr/cdn2/deals/2019/02/15/1831061342/front_3858e_lvpv0.jpg",
      /*오뎅*/"https://cdn.discordapp.com/attachments/778559127273734165/808930047708758076/19e28b1086.png",
      /*회무침*/"https://t1.daumcdn.net/cfile/tistory/1371791249D4AC052B",
      /*비빔밥*/"https://i.ytimg.com/vi/wRUGA314ey0/maxresdefault.jpg",
      /*육회비빔밥*/"https://img.etoday.co.kr/pto_db/2020/01/600/20200113154222_1412537_685_514.jpg",
      /*굶어*/"https://dreamout.github.io/Steady/%EC%9E%BC%EB%82%98%EC%84%B1.png",
      /*제육볶음*/"https://homecuisine.co.kr/files/attach/images/140/082/010/07112c7bd5887f9413dc6af17cc3a2d5.JPG",
      /*참치찌개*/"https://static.hubzum.zumst.com/hubzum/2017/12/12/11/fb06bafa40fb4237b20cdbb923a2bb2b_780x0c.jpg",
      /*꽁치찌개*/"https://mblogthumb-phinf.pstatic.net/20150108_282/dew36_14207285343923o3BK_JPEG/26.jpg?type=w2",
      /*치킨마요덮밥*/"https://cdn.discordapp.com/attachments/778559127273734165/956624659992948796/861059415e31a98ec4b8d5bd3f7be0ca1.png",
      /*해물탕*/"https://t1.daumcdn.net/cfile/tistory/144626124C900A9538?original",
      /*뼈해장국*/"https://t1.daumcdn.net/cfile/tistory/99E7A9335CCB94A70A",
      /*케이크*/"https://wow.zamimg.com/uploads/screenshots/normal/103603-.jpg",
      /*오므라이스*/"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fdwr127%2FbtqwBYp9q86%2FCL6rlEyQvviPWktTkamQXK%2Fimg.jpg",
      /*볶음밥*/"https://i.ytimg.com/vi/S_glK_h78xI/maxresdefault.jpg",
      /*짜장면*/"https://ojsfile.ohmynews.com/STD_IMG_FILE/2016/1214/IE002069160_STD.jpg",
      /*라볶이*/"https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/55oP/image/V00ogNI5g0y6RhtJ--AwBW74F_0.jpg",
      /*짬뽕*/"https://upload.wikimedia.org/wikipedia/commons/b/bb/Jjamppong.jpg",
      /*닭발*/"https://recipe1.ezmember.co.kr/cache/recipe/2018/11/27/8b4c6ee660517265e47420b0fda202da1.jpg",
      /*오돌뼈*/"https://m.coople.co.kr/web/product/big/201710/22_shop1_271151.jpg",
      /*주먹밥*/"https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/19447/pad_thumb_PA110029.JPG&convert=jpgmin&rt=600",
      /*치즈떡볶이*/"https://i.ytimg.com/vi/wgfDDn0uGOk/maxresdefault.jpg",
      /*치즈김밥*/"https://cdn.discordapp.com/attachments/778559127273734165/956626898820153384/ececca14b1c4867e67b7f4588cca32ea1.png",
      /*참치김밥*/"https://i.ytimg.com/vi/qzBgjrOECoA/maxresdefault.jpg",
      /*땡초김밥*/"https://t1.daumcdn.net/cfile/tistory/99E309395B80F91819",
      /*꼬마김밥*/"https://img.etoday.co.kr/pto_db/2019/10/600/20191007172602_1374013_685_514.jpg",
      /*닭꼬치*/"http://img.danawa.com/prod_img/500000/119/451/img/4451119_1.jpg?shrink=500:500&_v=20160919175559",
      /*파전*/"https://cdn.discordapp.com/attachments/778559127273734165/807526279024214016/46679f666a89926b5b47fb16758ec318.png",
      /*부추전*/"https://t1.daumcdn.net/cfile/tistory/992FCC505CE5391D19",
      /*감자전*/"https://img-global.cpcdn.com/recipes/0657e4baae1bfebb/751x532cq70/%EA%B0%84%EB%8B%A8%ED%95%9C-%EA%B0%90%EC%9E%90%EC%A0%84-recipe-main-photo.jpg",
      /*녹두전*/"https://recipe1.ezmember.co.kr/cache/recipe/2019/01/28/0567b430e6d2ce4939f056edc6cccd0a1.jpg",
      /*빈대떡*/"https://i.ytimg.com/vi/zqh2o10r9VU/maxresdefault.jpg",
      /*짬뽕밥*/"https://d3af5evjz6cdzs.cloudfront.net/images/uploads/800x0/_5a74142379b353371762624870810c851554713092.jpg",
      /*잡채밥*/"https://homecuisine.co.kr/files/attach/images/142/390/050/8d3b39baf50e7bfd4123e0609a641a8e.JPG",
      /*짜장밥*/"https://i.ytimg.com/vi/thD7PlACa14/maxresdefault.jpg",
      /*카레라이스*/"https://homecuisine.co.kr/files/attach/images/140/473/044/ffd1c5e129e4f7aa81d3c91bd60f3c14.JPG",
      /*소불고기*/"https://recipe1.ezmember.co.kr/cache/recipe/2017/07/27/b36c97b77acbf4f77f7d2448bfdec3751.jpg",
      /*뚝배기불고기*/"https://homecuisine.co.kr/files/attach/images/140/243/083/9d9ace4fc3126ccd3ea0c5d5b0549a53.JPG",
      /*해바라기씨*/"https://i.ytimg.com/vi/bfWiXlsBfno/maxresdefault.jpg",
      /*개사료*/"https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2fG8/image/jG0XnAMBwRw6wS9v-YxfA9PkOnQ.jpg",
      /*소금구이*/"https://i.pinimg.com/originals/4c/14/d4/4c14d4e41c4a07196326518532331091.jpg",
      /*김치볶음밥*/"https://cbmpress.sfo2.digitaloceanspaces.com/tfood/2516102861_Dou6sN2f_83893dfb9a46cdd27c7d3d51eff246dc766b2dc8.jpg",
      /*김치덮밥*/"https://recipe1.ezmember.co.kr/cache/recipe/2019/01/05/8cf7a3c0e113de435fa189b1d3e6984c1.jpg",
      /*돈까스*/"https://th2.tmon.kr/thumbs/image/423/336/e17/1b1492318_700x700_95_FIT.jpg",
      /*치즈돈까스*/"https://mp-seoul-image-production-s3.mangoplate.com/363712/465017_1564562372773_587882",
      /*고구마돈까스*/"https://cdn.discordapp.com/attachments/778559127273734165/956627106673082438/original_2796301094_front_247b9_1587445662production.png",
      /*고추돈까스*/"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F992C5C3359A3AEF316",
      /*짜장떡볶이*/"https://recipe1.ezmember.co.kr/cache/recipe/2018/11/15/1115933858c7ce661d92167f14e38e0b1.jpg",
      /*햄버거*/"https://img.hankyung.com/photo/201908/01.20330262.1.jpg",
      /*에그버거*/"https://cdn.discordapp.com/attachments/778559127273734165/782955633468112936/20180421134306744.png",
      /*와퍼*/"https://t1.daumcdn.net/cfile/blog/23731D43542CAEE136",
      /*치킨*/"https://t1.daumcdn.net/liveboard/interbiz/724b01edcbeb44dfa3fe10a3dbbda51f.JPG",
      /*피자*/"https://cdn.discordapp.com/attachments/778559127273734165/786191026712870912/5bed0be3220000bc04de3cbc.png",
      /*탕수육*/"https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/30m2/image/6Yl4H0xEzIrFALZd7MPxwnv8oFA.jpg",
      /*깐풍기*/"https://cdn.discordapp.com/attachments/778559127273734165/806882593563738122/2Q.png",
      /*라조기*/"https://cdn.discordapp.com/attachments/778559127273734165/806882473886613514/Z.png",
      /*깐풍육*/"https://cdn.discordapp.com/attachments/778559127273734165/806882298598391828/Z.png",
      /*라조육*/"https://www.siksinhot.com/media/img/story/1515293029984992.jpeg",
      /*기스면*/"https://recipe1.ezmember.co.kr/cache/recipe/2015/06/15/5a4284868f1c8ecb623c8881e91c0c431_f.jpg",
      /*울면*/"https://img.khan.co.kr/news/2018/05/17/l_2018051801002128800173492.jpg",
      /*닭강정*/"https://recipe1.ezmember.co.kr/cache/recipe/2015/09/15/434fb5ae1f84746d9427d81e33bf2aa51.jpg",
      /*새우볼*/"https://cdn.discordapp.com/attachments/778559127273734165/781103797886779432/1BMzHwLMCSSwvKq4Wy55ud4LPOOiaDtQlbttBuZR-01M64TL--KkXA48kqSHGsNtriW4iqksjejKiO1eY_sf8omZM2JR8kRJEQN4.png",
      /*새우볶음밥*/"https://recipe1.ezmember.co.kr/cache/recipe/2018/01/11/f283fa572173917c1f8e4d4ee900463d1.jpg",
      /*간장새우*/"https://recipe1.ezmember.co.kr/cache/recipe/2017/10/19/2c5f57314bdff067f118ba48afbe33991.jpg",
      /*양념게장*/"https://th4.tmon.kr/thumbs/image/bae/6c0/63f/fb7087403_700x700_95_FIT.jpg",
      /*간장게장*/"https://mblogthumb-phinf.pstatic.net/MjAxODEyMTNfMjg0/MDAxNTQ0NjY3ODQ3NTYw.2ozC8zo4SfwIdd5U3AAr4cr_YwXAiotFvPSJkQxhDmwg.VTPYuPOvztV0lWyvc2lO0vk2DH7wDcDvlUyBNCWDT-og.JPEG.nong-up/GettyImages-jv10965210.jpg?type=w800",
      /*연포탕*/"https://i.pinimg.com/originals/91/b8/83/91b88321be9f4edd7823cf5e67f391de.jpg",
      /*해신탕*/"http://food.chosun.com/site/data/img_dir/2017/04/20/2017042001212_0.jpg",
      /*낙지볶음*/"https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/14613/pad_thumb_______.PNG&convert=jpgmin&rt=600",
      /*소머리국밥*/"https://www.gyeongju.go.kr/upload/content/thumb/20200409/9BBBF856AE104EFFA8641F98DA1DBE4E.jpg",
      /*선지해장국*/"https://cdn.discordapp.com/attachments/778559127273734165/956628317321191504/gv20000047730_1.png",
      /*콩나물국밥*/"https://t1.daumcdn.net/cfile/tistory/99E2E94C5DAFF30E30",
      /*돼지국밥*/"https://img.insight.co.kr/static/2019/10/23/700/ha36aae74e192040wc5c.jpg",
      /*까르보나라*/"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F234631455571D04925",
      /*봉골레파스타*/"https://i.ytimg.com/vi/JxB3M76e6qA/maxresdefault.jpg",
      /*푸타네스카*/"https://t1.daumcdn.net/cfile/blog/2065BE4450D901A923",
      /*랍스타마리나라*/"http://www.sorrento.co.kr/img/menu/oil9.png",
      /*파마산볼로네제*/"http://www.sorrento.co.kr/img/menu/oil7.png",
      /*아라고스타로제*/"http://www.sorrento.co.kr/img/menu/napoli1.png",
      /*포모도로*/"http://www.sorrento.co.kr/img/menu/napoli5.png",
      /*알프레도폴로*/"http://www.sorrento.co.kr/img/menu/napoli9.png",
      /*랍스터라비올리*/"http://www.sorrento.co.kr/img/menu/napoli11.png",
      /*페투치네*/"https://image.fmkorea.com/files/attach/new/20181026/3655304/1318043332/1347325803/e2ff0740a3c86f440d456ca7b878ecb5.jpg",
      /*크레마빠네*/"https://pbs.twimg.com/media/D9Md4sTUYAA14il.jpg",
      /*로마나*/"http://www.sorrento.co.kr/img/menu/cream9.png",
      /*족발*/"https://post-phinf.pstatic.net/MjAxOTA3MTVfMTc5/MDAxNTYzMTgwMzQ3ODE5.L8a639GNF86TujJ7Wm7B25AMPP4shnnAJwzMyvIpuUAg.EwOHiJ_VZKFSCMMqMYKZ-e2vagzrn8S3mlqXhAeCuNkg.JPEG/%ED%97%88%EB%B8%8C%EC%A1%B1%EB%B0%9C%28%EC%9D%B8%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8ID_joossa_0515%29_%281%29.jpg?type=w1200",
      /*보쌈*/"https://t1.daumcdn.net/cfile/tistory/991F47465DB9C91301",
      /*대창*/"https://mblogthumb-phinf.pstatic.net/20160216_260/soyonmin_14556023800643fHsk_JPEG/dhdh.jpg?type=w2",
      /*양대창*/"https://img.siksinhot.com/place/1535942698237291.jpg?w=440&h=440&c=Y",
      /*양꼬치*/"https://t1.daumcdn.net/liveboard/dailylife/7e239e8f47dd47a9bd1ffb9079b3cfa0.jpg",
      /*곱창볶음*/"https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2Fa056b847f689487aaa8786c0280390f0.jpg",
      /*순대곱창*/"https://cdn.discordapp.com/attachments/778559127273734165/806878439709081626/maxresdefault.png",
      /*백순대*/"https://cdn.discordapp.com/attachments/778559127273734165/782031775110791209/unknown.png",
      /*들깨칼국수*/"https://t1.daumcdn.net/cfile/tistory/990E634B5EC8812C21",
      /*바지락칼국수*/"https://recipe1.ezmember.co.kr/cache/recipe/2015/06/08/f0d6aeecdae65b89e4e892236a29b83c.jpg",
      /*칼국수*/"https://craftlog.com/m/i/6243707=s1280=h960",
      /*등심스테이크*/"http://file3.instiz.net/data/file3/2018/03/01/6/5/d/65db538d12439844da2546de07530d63.jpg",
      /*안심스테이크*/"https://s3.ap-northeast-2.amazonaws.com/meesig/v3/prod/image/item/main/283/4ea273a3e02b4ca1a8e36e132d37c66620170515201125",
      /*티본스테이크*/"https://m.highmarble.com/web/product/big/201906/c86d2607d2ec03f7a98bb3b96de616ce.jpg",
      /*한치구이*/"https://recipe1.ezmember.co.kr/cache/recipe/2020/01/21/3826bc0c54631cccb6d9ad896c573b821.jpg",
      /*롤케이크*/"https://img-cf.kurly.com/shop/data/goodsview/20180322/gv40000020180_1.jpg",
      /*단팥빵*/"http://img.bakingschool.co.kr/data/recipe/recipe_main/2000/1943_recipe_main_504e",
      /*도라야키*/"https://ko.pic1.sayfamous.com/eating-snacks/61_8781072754051.jpg",
      /*자몽에이드*/"https://m.candlebada.com/web/product/big/20191207/5fbbde8d832476a256dd79c7e2746a5c.jpg",
      /*초코렛*/"https://t1.daumcdn.net/cfile/tistory/207463334FB66F9819",
      /*우유*/"https://news.kbs.co.kr/data/news/2015/11/23/3186995_vs2.jpg",
      /*씨리얼*/"https://cdn.discordapp.com/attachments/778559127273734165/781104844105711626/unknown.png",
      /*간고등어*/"https://t1.daumcdn.net/cfile/tistory/23625441591099840E",
      /*옥돔구이*/"https://www.jeju.go.kr/media/tIV",
      /*깅이죽*/"https://mblogthumb-phinf.pstatic.net/20140718_114/austinwine_1405665210792GWdyF_JPEG/IMG_7061.jpg?type=w2",
      /*자리물회*/"https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F0162484C519B895E12D7B0",
      /*한치물회*/"https://newsimg.hankookilbo.com/cms/articlerelease/2016/08/03/201608031127761182_1.jpg",
      /*갈낙탕*/"https://storage.wcuisine.net/image/production/service/image/recipe/38/0a35b6c0-b90f-495c-bad6-6799d226dfa9.jpg",
      /*닭갈비*/"https://craftlog.com/m/i/6061150=s1280=h960",
      /*떡갈비*/"https://homecuisine.co.kr/files/attach/images/140/690/015/0a931dd364ba93f002037227a1fc4295.JPG",
      /*숯불갈비*/"https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile27.uf.tistory.com%2Fimage%2F99FF0A345A6F8713060F0A",
      /*찜갈비*/"http://thum.buzzni.com/unsafe/640x640/http://cdn.image.buzzni.com/2018/01/23/4dDetHnHBx.jpg",
      /*고갈비*/"https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/64640/pad_thumb_0.JPG&convert=jpgmin&rt=600",
      /*꼬막정식*/"https://www.travie.com/news/photo/first/201702/img_19550_1.jpg",
      /*게꾹지*/"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F23107E48590FD55234",
      /*고래고기*/"http://www.busan.com/nas/data/content/image/2011/05/11/20110511000167_0.jpg",
      /*곤드레밥*/"https://storage.wcuisine.net/image/production/service/image/recipe/90/e7fdb8aa-ac29-407f-aa8c-f39e5c0ecec4.jpg",
      /*과메기*/"https://image.chosun.com/sitedata/image/201911/24/2019112400921_0.jpg",
      /*곰탕*/"https://recipe1.ezmember.co.kr/cache/recipe/2015/06/08/0a82a8054847196f44ce87700d51904b.jpg",
      /*굴국밥*/"https://recipe1.ezmember.co.kr/cache/recipe/2015/11/17/d9496892695f2a8580b0cf92933c14d81.jpg",
      /*수구레국밥*/"https://mblogthumb-phinf.pstatic.net/20150506_74/wys6309_1430884881916fMvhI_JPEG/2015-05-06-11-56-46_deco.jpg?type=w2",
      /*따로국밥*/"https://pbs.twimg.com/media/D1WWYuoVsAA43iv.jpg",
      /*올갱이국밥*/"https://www.dtnews24.com/news/photo/201512/59208_387832.jpg",
      /*창평국밥*/"http://food.chosun.com/site/data/img_dir/2015/01/29/2015012902149_0.jpg",
      /*고기국수*/"https://t1.daumcdn.net/liveboard/dailylife/ced5973f54fb47058eed5d045b0f4497.jpg",
      /*막국수*/"https://ojsfile.ohmynews.com/STD_IMG_FILE/2018/0430/IE002325808_STD.JPG",
      /*메밀국수*/"https://recipe1.ezmember.co.kr/cache/recipe/2017/07/25/2e956f8217b643fef8b94370dfd6ceda1.jpg",
      /*묵국수*/"https://i.ytimg.com/vi/s5wZosE82hs/maxresdefault.jpg",
      /*당면비빔*/"https://post-phinf.pstatic.net/MjAxNzA4MDZfNDQg/MDAxNTAyMDIxMTY4MTMz.OqBIV5C4ezh4WHVVOS1zyMZEbxS3923lo3CyF3P_AqMg.XRhrrFv_Omvy0piN7HKcLlPlYbCGV_3UcsizAYehqM0g.JPEG/Snapseed.jpg?type=w1200",
      /*어탕국수*/"https://t1.daumcdn.net/cfile/tistory/212DC640585A63AD28",
      /*꼼장어구이*/"https://static.hubzum.zumst.com/hubzum/2019/11/07/14/a204630f464b4723964f1cfb904f285f_780x585.jpg",
      /*충무김밥*/"https://post-phinf.pstatic.net/MjAxNzA2MTZfNDMg/MDAxNDk3NTg2NTY5MjUw.58LGMtSfGMKiaaO7zeJQI-QBZTlN6Boy95VIBontRXIg.tsPj_2sGRmYb1mlqM2AA5PxtJ7sZd9nZYNLkOqKfzTUg.JPEG/Snapseed.jpg?type=w1200",
      /*납짝만두*/"https://homecuisine.co.kr/files/attach/images/140/893/032/d27347099a478ccc2218bd67311d4b03.JPG",
      /*진주냉면*/"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F262236495763505D16",
      /*도리뱅뱅이*/"https://lampcook.com/wi_files/food_local/2116.jpg",
      /*돔배기*/"https://cdn.clien.net/web/api/file/F01/9736115/1a7ec7f2c0fbc5.jpg",
      /*두부두루치기*/"https://homecuisine.co.kr/files/attach/images/140/219/039/1f3d2e5ac2f942fe3a57cb18fbd9dccd.JPG",
      /*뒷고기*/"https://aseura.com/wp-content/uploads/2019/04/%EB%92%B7%EA%B3%A0%EA%B8%B0-%EB%B6%80%EC%9C%84.jpg",
      /*메밀묵*/"http://www.lampcook.com/wi_files/food_key_img/101520.jpg",
      /*몸국*/"https://post-phinf.pstatic.net/MjAxODAxMjZfNjYg/MDAxNTE2OTc4MTczNjE2.pEhzzcGuKEyL5cAOLwioMWNDngT9ee0u-W5Pd1GmlTkg.U79k4IlxAB3Ny_Ax2DzFNROuMVjalMIQ7B7WDp8l1zAg.JPEG/%EC%8B%A0%EC%84%A4%EC%98%A4%EB%A6%84sunnyp89_.jpg?type=w1200",
      /*물회*/"https://upload.wikimedia.org/wikipedia/commons/7/71/Mulhoe.jpg",
      /*호박잎국*/"http://www.lampcook.com/wi_files/food_key_img/104792.jpg",
      /*갈치호박국*/"http://db.kookje.co.kr/news2000/photo/2007/0713/20070713.22029201321i4.jpg",
      /*순무김치*/"https://sikdorak365.co.kr/web/product/big/201808/6127033aa0affefbd1cded62f6d0552e.jpg",
      /*식혜*/"https://i.ytimg.com/vi/hQV8thQh5W8/maxresdefault.jpg",
      /*아구찜*/"https://mp-seoul-image-production-s3.mangoplate.com/added_restaurants/14650_1465385764848732.jpg",
      /*빙떡*/"http://www.jejumenu.com/data/file/board1/2106109672_89b82154_BAF9B6B1.jpg",
      /*어리굴젓*/"https://m.thefreshop.co.kr/web/product/big/3345126380_Big.jpg",
      /*어묵국*/"https://post-phinf.pstatic.net/MjAxOTEwMDRfMjMz/MDAxNTcwMTY2NjQxNTM3.gif7oDun4f74UJxpOPjIhWeItougqtkNEcVArRuGdkwg.DqiDliqr6BL6h2ZxnL_-AEpBPEwJITYXYcsDACqPgD8g.JPEG/DSC09641.JPG?type=w1200",
      /*오겹살*/"https://cdn.crowdpic.net/list-thumb/thumb_l_8E8F51A5CDA19CC86E22D3D620ACFA1C.jpg",
      /*오리불고기*/"https://homecuisine.co.kr/files/attach/images/140/521/009/65e5a985cba348b399617dcbc01b9419.JPG",
      /*오리탕*/"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99CE53365BD6C4EB2D",
      /*유부보따리*/"https://funshop.akamaized.net//products/0000071974/vs_image800_1.jpg",
      /*육회*/"https://t1.daumcdn.net/liveboard/dailylife/37a2cd17d76c4f1fa0e427812db5df26.jpg",
      /*전복죽*/"https://recipe1.ezmember.co.kr/cache/recipe/2018/07/10/4258a33b05b7f1db4440cae38585fc851.jpg",
      /*추어탕*/"https://www.cheongdo.go.kr/images/open.content/food/representation/chueotang/img01.jpg",
      /*편수*/"https://recipe1.ezmember.co.kr/cache/recipe/2018/06/18/0941784cccd9cc612cbbbdc423966e461.jpg",
      /*해물뚝배기*/"https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/52374/pad_thumb_0.JPG&convert=jpgmin&rt=600",
      /*호두과자*/"https://m.eejmall.com/web/product/big/201709/259_shop1_460209.jpg",
      /*홍어회*/"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99A223365A895D4D1B",
      /*흑돼지*/"https://post-phinf.pstatic.net/MjAxODEwMzFfMjUw/MDAxNTQwOTQxNTQwMzUw.n4wmrsznPUxFIgBVsRH2O2vHphTHxciF2qkQaHR0S5og.ojlRZ1SGyBKeAudK-vjZynIwhxJPURjSnNymTXcWZh4g.JPEG/337.jpg?type=w1200",
      /*갓김치*/"https://recipe1.ezmember.co.kr/cache/recipe/2018/05/15/d54cc2f942d5c4ee180ecd7fe57a65851_f.jpg",
      /*고들빼기김치*/"https://recipe1.ezmember.co.kr/cache/recipe/2015/06/02/5eb5a4f785c0729d71d515008b9b9f2d1.jpg",
      /*갱시기*/"https://recipe1.ezmember.co.kr/cache/recipe/2017/08/25/d8eb2f288ce350c87a7cfc48390c564e1.jpg",
      /*중화비빔밥*/"https://cdn.clien.net/web/api/file/F01/8675614/24fc14a7eb6a8e.jpg",
      /*낫토*/"https://t1.daumcdn.net/cfile/tistory/99B41D4A5B5355E915",
      /*라멘*/"https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/01/a0001273/img/basic/a0001273_main.jpg?20200629193410&q=80&rw=750&rh=536",
      /*돈코츠라멘*/"https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/7CS/image/NQdxY_VJMc25GPK9nR57huPRQHI",
      /*미소라멘*/"https://homecuisine.co.kr/files/attach/images/142/012/002/168b4ef1394ab5e096f9062569c8c8ea.JPG",
      /*모리오카냉면*/"http://food.chosun.com/site/data/img_dir/2015/03/17/2015031701891_0.jpg",
      /*몬자야끼*/"https://mblogthumb-phinf.pstatic.net/20110119_260/pagodajan_1295389001568IXGdk_JPEG/oko_b_007.jpg?type=w2",
      /*미소카츠*/"https://mblogthumb-phinf.pstatic.net/MjAxNzA5MjVfMTkw/MDAxNTA2MzE2MjY0MTM2.EnpJkVCasE38u0aHJLJ44z_xl3g_0VaotznW2n6UiXEg.9Fmq2X3aKv48k5-J9CnJtp2OmCVjVOG1OwV8UfUSqBgg.JPEG.g1338818/%EB%82%98%EA%B3%A0%EC%95%BC_%EC%95%BC%EB%B0%94%ED%86%A4_%EB%AF%B8%EC%86%8C%EC%B9%B4%EC%B8%A0_%2851%29.JPG?type=w800",
      /*복어회*/"https://files.thinkpool.com/files/mini/2013/07/21/whdqo119_%EB%B3%B5%EC%96%B4%ED%9A%8C.jpg",
      /*오코노미야키*/"https://recipe1.ezmember.co.kr/cache/recipe/2018/02/21/115d2737840d2821c46251315e112a831.jpg",
      /*소바*/"https://i.ytimg.com/vi/xMM7etFZteA/maxresdefault.jpg",
      /*우동*/"http://udon0410.com/wp-content/themes/udon0410/assets/images/main_section02_01.png",
      /*나가사키짬뽕*/"https://japan-brand.jnto.go.jp/wp-content/uploads/2014/03/90-a.jpg",
      /*카스텔라*/"https://file2.instiz.net/data/file/20141015/3/0/5/30542f894743bfa7ac974f23803c15e2.jpg",
      /*타이완라멘*/"https://upload.wikimedia.org/wikipedia/commons/3/3a/CodazziTaiwanRamen.jpg",
      /*타코야끼*/"https://t1.daumcdn.net/liveboard/goodjob/885db8f5b0d94d1cbfd9ebc48d7a59c4.jpg",
      /*테바사키*/"https://recipe1.ezmember.co.kr/cache/recipe/2018/10/06/a524f2413c55329082ee6643637a32471.jpg",
      /*동파육*/"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F021E3E495132D12A21",
      /*딤섬*/"https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2AuX/image/6XpfRPo2kBn5FOFA6vCLJ5_XiCE.png",
      /*라면*/"http://image.nongshim.com/non/know/1589328533523.jpg",
      /*마파두부*/"https://homecuisine.co.kr/files/attach/images/142/849/001/e6317c5317ebf8d111a63e2fc46c8cac.JPG",
      /*만두*/"https://s3.ap-northeast-2.amazonaws.com/event-localnaeil/FileData/Article/202004/56c1b8c3-43e6-466b-8d66-6e56a770206c.jpg",
      /*마라탕*/"https://img-cf.kurly.com/shop/data/goodsview/20190508/gv00000049649_1.jpg",
      /*탄탄멘*/"https://t1.daumcdn.net/cfile/tistory/2163E13E56C2952031",
      /*소롱포*/"https://image.chosun.com/sitedata/image/201509/07/2015090702731_1.jpg",
      /*완탕*/"https://img2.tmon.kr/cdn3/deals/2019/06/21/2190170538/2190170538_front_a87725c65e.jpg",
      /*할포*/"https://cdn.discordapp.com/attachments/778559127273734165/806878727354056734/644f712a94beeea2013d7d3.png",
      /*우육면*/"https://www.topstarnews.net/news/photo/first/201712/img_335686_1.jpg",
      /*버블티*/"https://img.insight.co.kr/static/2019/06/06/700/h19ync102ln168c64p2t.jpg",
      /*차이푸단*/"https://mblogthumb-phinf.pstatic.net/MjAxOTA1MThfMjM5/MDAxNTU4MTc5NTA2Mjg2.9UJw5gWY2g8eFl3m8niTP5IyqH3HiJOzQXCYYAAh3ucg.62yjgA15z3RYDPs3HyHvbok6zhERgQGZMwtgYd1m41Qg.JPEG.sdcsh/Screenshot_20190518-190200_Dianping1.jpg?type=w800",
      /*클램차우더*/"https://storage.wcuisine.net/image/production/service/image/recipe/324/2057d2cb-eecd-4b94-9671-abafd7dbd1e7.jpg",
      /*라자냐*/"https://t1.daumcdn.net/liveboard/dailylife/f3a85820b2e44ee9806b9e519b7d24aa.jpg",
      /*마카로니*/"https://www.sk5.co.kr/img_src/s600/a091/a0910041.jpg",
      /*스파게티*/"https://www.tefal.co.kr/medias/?context=bWFzdGVyfHJvb3R8MjUyMTF8aW1hZ2UvanBlZ3xoZmYvaGFlLzE0MDcwMjU0NTY3NDU0LmpwZ3w0NmQ1Yjg3OTY0YzhlNDBlMjBiNzU5ZTE2N2RkNzBlZGRjMmRhYWJiMGQyOGIxMDEwZmM5MjFhNmM5OTYxNmE5",
      /*펜네*/"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Penne_with_sauce.jpg/220px-Penne_with_sauce.jpg",
      /*빠에야*/"https://www.pulmuone-lohas.com/upload/webimage/201808/201808089qU7A.jpg",
      /*에그타르트*/"https://i.ytimg.com/vi/AsIeQbrepT4/maxresdefault.jpg",
      /*브라트부르스트*/"https://www.hmap.co.kr/upload/editor/1537501829_ExE_Bratwurst.jpg",
      /*바이스부르스트*/"https://d3b39vpyptsv01.cloudfront.net/photo/1/2/2772cfcabe64a5993c21724a6da131b5_l.jpg",
      /*아알주페*/"https://post-phinf.pstatic.net/MjAyMDAxMjBfMTA5/MDAxNTc5NDk1NTM0MzY4._2Kt7cKXaamV-fyhGA7YC8xgmNjsZn9GWygnExYDGMgg.5sZ1AU5GRcMkih2iyPgVpOEe2nM4qMNJTwc-rrgUO4Yg.PNG/2020-01-20_12%3B59%3B29.PNG?type=w1200",
      /*슁켄*/"https://t1.daumcdn.net/liveboard/realfood/0ce70b49a47a43d59573c067567ae609.JPG",
      /*함박스테이크*/"https://shop.biumfood.com/upload/1535360125_721391.jpg",
      /*비엔나소세지*/"https://i.ytimg.com/vi/vgrNaufTv2o/maxresdefault.jpg",
      /*자허토르테*/"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F1738874C4E07E87B1F",
      /*라따뚜이*/"https://storage.googleapis.com/cbmpress/uploads/sites/3/2017/03/3_10-01.png",
      /*에스카르고*/"https://t1.daumcdn.net/liveboard/kurly/9390055359604b2f8bc83da90434043d.JPG",
      /*푸아그라*/"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99CD19505A6D9B7720",
      /*퐁듀*/"https://img-cf.kurly.com/shop/data/goodsview/20171128/gv00000012469_1.jpg",
      /*부야베스*/"https://t1.daumcdn.net/cfile/blog/2178AE4D549250A709",
      /*샴페인*/"https://pds.joins.com/news/component/htmlphoto_mmdata/201512/28/htm_2015122822652676673.jpg",
      /*코냑*/"https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F99CBD34A5A75601239FDB7",
      /*로스트비프*/"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F266325345776997B16",
      /*샌드위치*/"https://www.spcmagazine.com/wp-content/uploads/2019/04/SPC%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98_%EC%8D%B8%EB%84%A4%EC%9D%BC.png",
      /*포리지*/"http://www.koweekly.co.uk/data/euuk01/news/201307/20130710023950_3870.jpg",
      /*파스티*/"https://www.dogdrip.net/files/attach/images/79/232/405/030/894efcd8305cd97cc1c0d90ffa689260.jpg",
      /*피시앤칩스*/"https://d3b39vpyptsv01.cloudfront.net/photo/1/2/90c770fca1e5f1001f9f61d765494ffb.jpg",
      /*해기스*/"http://i.dailymail.co.uk/i/pix/2014/06/29/article-2674366-05ED5D7B000005DC-495_638x458.jpg",
      /*라흐마준*/"https://t1.daumcdn.net/cfile/tistory/243E3333541B96A223",
      /*로쿰*/"https://mblogthumb-phinf.pstatic.net/MjAxODA2MThfNzAg/MDAxNTI5Mjg1NDUxMzA4.KSTIr8iKmQ22_FEkjbAze7lWLMRTyPelogZo74o3pOcg.9lPfro0S1y4PU9tikFrhAj1gVHnPyjyY15EtgMFJGYwg.JPEG.coffeenamu9173/image_2084714791529285422427.jpg?type=w800",
      /*케밥*/"https://t1.daumcdn.net/cfile/blog/999AD23E5CD1475810",
      /*캐비어*/"https://pds.joins.com/news/component/htmlphoto_mmdata/201703/13/4563e668-7212-4a65-9a64-e6d0989056f9.jpg",
      /*샤슬릭*/"https://d3b39vpyptsv01.cloudfront.net/photo/1/2/f15fc39742d84c0f28235f7d63c5ebab.jpg",
      /*우하*/"https://d3b39vpyptsv01.cloudfront.net/photo/1/2/f3eeb6fda2992f8579ace25d4d243d38_l.jpg",
      /*인살라타디시저*/"https://www.myhawaii.kr/wp-content/uploads/2019/04/IMG_3359.jpg",
      /*감바스*/"https://recipe1.ezmember.co.kr/cache/recipe/2018/02/08/c725f3d5da7d74995b80140189fefaab1.jpg",
      /*굴라쉬*/"https://mblogthumb-phinf.pstatic.net/MjAxODA1MDlfMjAw/MDAxNTI1ODcxNjI3NDY0.uDR_t-2R3K6ygMqH7pmyLuyHh7jt7QEDT6Za-0QL7jYg.IlSC_DNhoXe2whTV7sWkPPEKSLk7mVzPI2qfJ2ATYWwg.JPEG.hnn888/CDE_3987.jpg?type=w800",
      /*슈페츨레*/"https://mblogthumb-phinf.pstatic.net/20121030_266/goyoung1_1351605576056bJIq7_JPEG/6131768154_3596498450_b.jpg?type=w2",
      /*하젠페퍼*/"https://vaya.in/recipes/wp-content/uploads/2018/09/Hasenpfeffer-Rabbit-Stew.jpg",
      /*슈니첼*/"https://d3b39vpyptsv01.cloudfront.net/photo/1/2/99425ee2b31dfb6514c280733b342ae7_l.jpg",
      /*자우어브라텐*/"https://mblogthumb-phinf.pstatic.net/MjAxODA2MTRfMjc3/MDAxNTI4OTc2Njk5Nzg0.pZ0tHhQt3vS3BarxoFmS_fIPdhJlFiCFkrszf4AVy20g.px-K0GoyPoe_fc6-VysoxqWjN6iv5IKQQFOULHBheUwg.JPEG.tastytravel/13.jpg?type=w800",
      /*랑그드샤*/"https://www.francine.com/uploads/media/recipe/0001/04/thumb_3656_recipe_big.jpeg",
      /*가렛트*/"https://cdn.discordapp.com/attachments/778559127273734165/844513430211526656/yoz0Uw3.png",
      /*팬케이크*/"https://topclass.chosun.com/news_img/2004/2004_102.jpg",
      /*오레오*/"https://t1.daumcdn.net/liveboard/the-edit/bbeb9e1d193744f1b947008c510e9bab.JPG",
      /*와플*/"https://img.theqoo.net/img/cKREe.jpg",
      /*커피코카콜라*/"https://t1.daumcdn.net/liveboard/dispatch/77ec99a5401d480fa47b5e5fedfb75cd.JPG",
      /*무한으로 즐겨요 명륜진사갈비*/"http://www.goodgag.net/_data/up/1907/c57265d3ae77d4cac12144308.jpg",
      /*도너츠*/"http://thumbnail.egloos.net/600x0/http://pds4.egloos.com/pds/200705/15/83/a0016483_1105438.jpg",
      /*로앤슬*/"https://cdn.discordapp.com/attachments/778559127273734165/956622716465725490/b0253212_5e293b7f8fe39.png",
      /*비프웰링턴*/"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Beef_Wellington_2019.jpg/640px-Beef_Wellington_2019.jpg",
      /*온센타마고*/"https://cdn.discordapp.com/attachments/778559127273734165/781102992522477588/unknown.png",
      /*아이스크림*/"https://cdn.discordapp.com/attachments/778559127273734165/811209809163714600/style_5c9c8c4ba29e7-930x523.png",
      /*메로나*/"https://cdn.discordapp.com/attachments/778559127273734165/811209935090221066/17342877_1683162561698884_356389164756563532_n.png"
    );
  }

  //영웅 목록
  {
    var hero = new Array("메이", "데스윙", "키히라", "안두인", "임페리우스", "오르피아", "말가니스", "메피스토", "화이트메인", "이렐", "데커드", "피닉스", "마이에브", "블레이즈", "한조", "알렉스트라자", "정크랫", "아나", "켈투자드", "가로쉬", "스투코프", "말티엘", "D.Va", "겐지", "카시아", "프로비우스", "루시우", "발리라", "줄진", "라그나로스", "바리안", "사무로", "자리야", "알라라크", "아우리엘", "굴단", "메디브", "크로미", "트레이서", "데하카", "줄", "리밍", "그레이메인", "루나라", "초", "갈", "아르타니스", "모랄레스 중위", "렉사르", "카라짐", "레오릭", "도살자", "요한나", "캘타스", "실바나스", "길 잃은 바이킹", "스랄", "제이나", "아즈모단", "아눕아락", "첸", "레가르", "자가라", "머키", "빛나래", "리 리", "타이커스", "아바투르", "아서스", "디아블로", "일리단", "케리건", "말퓨리온", "무라딘", "나지보", "노바", "레이너", "해머 상사", "소냐", "티리엘", "티란데", "우서", "발라", "제라툴", "정예 타우렌 족장", "폴스타트", "가즈로", "누더기", "태사다르");
  }

  //영웅 이미지
  {
    var himg = new Array(
      /*메이*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/mei/circleIcon.png",
      /*데스윙*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/deathwing/circleIcon.png",
      /*키히라*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/qhira/circleIcon.png",
      /*안두인*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/anduin/circleIcon.png",
      /*임페리우스*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/imperius/circleIcon.png",
      /*오르피아*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/orphea/circleIcon.png",
      /*말가니스*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malganis/circleIcon.png",
      /*메피스토*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/mephisto/circleIcon.png",
      /*화이트메인*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/whitemane/circleIcon.png",
      /*이렐*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/yrel/circleIcon.png",
      /*데커드*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/deckard/circleIcon.png",
      /*피닉스*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/fenix/circleIcon.png",
      /*마이에브*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/maiev/circleIcon.png",
      /*블레이즈*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/blaze/circleIcon.png",
      /*한조*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/hanzo/circleIcon.png",
      /*알렉스트라자*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/alexstrasza/circleIcon.png",
      /*정크랫*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/junkrat/circleIcon.png",
      /*아나*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/ana/circleIcon.png",
      /*켈투자드*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kelthuzad/circleIcon.png",
      /*가로쉬*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/garrosh/circleIcon.png",
      /*스투코프*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/stukov/circleIcon.png",
      /*말티엘*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malthael/circleIcon.png",
      /*D.Va*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/dva/circleIcon.png",
      /*겐지*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/genji/circleIcon.png",
      /*카시아*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/cassia/circleIcon.png",
      /*프로비우스*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/probius/circleIcon.png",
      /*루시우*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lucio/circleIcon.png",
      /*발리라*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/valeera/circleIcon.png",
      /*줄진*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zuljin/circleIcon.png",
      /*라그나로스*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/ragnaros/circleIcon.png",
      /*바리안*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/varian/circleIcon.png",
      /*사무로*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/samuro/circleIcon.png",
      /*자리야*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zarya/circleIcon.png",
      /*알라라크*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/alarak/circleIcon.png",
      /*아우리엘*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/auriel/circleIcon.png",
      /*굴단*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/guldan/circleIcon.png",
      /*메디브*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/medivh/circleIcon.png",
      /*크로미*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/chromie/circleIcon.png",
      /*트레이서*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tracer/circleIcon.png",
      /*데하카*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/dehaka/circleIcon.png",
      /*줄*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/xul/circleIcon.png",
      /*리밍*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/li-ming/circleIcon.png",
      /*그레이메인*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/greymane/circleIcon.png",
      /*루나라*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lunara/circleIcon.png",
      /*초*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/cho/circleIcon.png",
      /*갈*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/gall/circleIcon.png",
      /*아르타니스*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/artanis/circleIcon.png",
      /*모랄레스 중위*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/lt-morales/circleIcon.png",
      /*렉사르*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/rexxar/circleIcon.png",
      /*카라짐*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kharazim/circleIcon.png",
      /*레오릭*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/leoric/circleIcon.png",
      /*도살자*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-butcher/circleIcon.png",
      /*요한나*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/johanna/circleIcon.png",
      /*캘타스*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kaelthas/circleIcon.png",
      /*실바나스*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sylvanas/circleIcon.png",
      /*길 잃은 바이킹*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/the-lost-vikings/circleIcon.png",
      /*스랄*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/thrall/circleIcon.png",
      /*제이나*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/jaina/circleIcon.png",
      /*아즈모단*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/azmodan/circleIcon.png",
      /*아눕아락*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/anubarak/circleIcon.png",
      /*첸*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/chen/circleIcon.png",
      /*레가르*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/rehgar/circleIcon.png",
      /*자가라*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zagara/circleIcon.png",
      /*머키*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/murky/circleIcon.png",
      /*빛나래*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/brightwing/circleIcon.png",
      /*리 리*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/li-li/circleIcon.png",
      /*타이커스*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tychus/circleIcon.png",
      /*아바투르*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/abathur/circleIcon.png",
      /*아서스*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/arthas/circleIcon.png",
      /*디아블로*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/diablo/circleIcon.png",
      /*일리단*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/illidan/circleIcon.png",
      /*케리건*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/kerrigan/circleIcon.png",
      /*말퓨리온*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/malfurion/circleIcon.png",
      /*무라딘*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/muradin/circleIcon.png",
      /*나지보*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/nazeebo/circleIcon.png",
      /*노바*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/nova/circleIcon.png",
      /*레이너*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/raynor/circleIcon.png",
      /*해머 상사*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sgt-hammer/circleIcon.png",
      /*소냐*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/sonya/circleIcon.png",
      /*티리엘*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tyrael/circleIcon.png",
      /*티란데*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tyrande/circleIcon.png",
      /*우서*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/uther/circleIcon.png",
      /*발라*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/valla/circleIcon.png",
      /*제라툴*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/zeratul/circleIcon.png",
      /*정예 타우렌 족장*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/etc/circleIcon.png",
      /*폴스타트*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/falstad/circleIcon.png",
      /*가즈로*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/gazlowe/circleIcon.png",
      /*누더기*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/stitches/circleIcon.png",
      /*태사다르*/"https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/tassadar/circleIcon.png"
    );
  }

  //노래 목록
  {
    var music = new Array("僕らのLIVE 君とのLIFE (우리들의 LIVE 너와의 LIFE)", "友情ノーチェンジ (우정 노 체인지)", "Snow halation", "baby maybe 恋のボタン (baby maybe 사랑의 버튼)", "夏色えがおで1,2,Jump! (여름빛 미소로 1, 2, Jump!)", "Mermaid festa vol.1", "もぎゅっと“love”で接近中！ (꼬옥 “love”로 접근 중!)", "愛してるばんざーい！ (사랑해 만세!)", "Wonderful Rush", "Oh,Love＆Peace!", "Music S.T.A.R.T!!", "LOVELESS WORLD", "MOMENT RING", "さようならへさよなら！ (안녕이란 말에 안녕!)", "A song for You! You? You!!", "なってしまった！ (되어버렸다!)", "Love marginal", "sweet＆sweet holiday", "Pure girls project", "UNBALANCED LOVE", "永遠フレンズ (영원 프렌즈)", "小夜啼鳥恋詩 (나이팅게일 러브 송)", "WAO-WAO Powerful day!", "NO EXIT ORION", "知らないLove*教えてLove (모르겠어 Love*가르쳐줘 Love)", "あ・の・ね・が・ん・ば・れ！ (있・잖・아・힘・을・내!)", "微熱からMystery (미열에서 Mystery)", "キミのくせに！ (너 주제에!)", "秋のあなたの空遠く (가을의 당신의 하늘 저 멀리)", "ふたりハピネス (두 사람 해피니스)", "思い出以上になりたくて (추억 이상이 되고 싶어서)", "春情ロマンティック (춘정 로맨틱)", "ダイヤモンドプリンセスの憂鬱 (다이아몬드 프린세스의 우울)", "ラブノベルス (러브 노벨즈)", "Cutie Panther", "夏、終わらないで。 (여름, 끝나지 말아줘.)", "冬がくれた予感 (겨울이 준 예감)", "Trouble Busters", "錯覚CROSSROADS (착각 CROSSROADS)", "PSYCHIC FIRE", "僕らは今のなかで (우리들은 지금 속에서)", "WILD STARS", "きっと青春が聞こえる (분명 청춘이 들릴 거야)", "輝夜の城で踊りたい (카구야의 성에서 춤추고 싶어)", "それは僕たちの奇跡 (그것은 우리들의 기적)", "だってだって噫無情 (그치만 그치만 아아 무정)", "どんなときもずっと (어떤 때라도 계속)", "COLORFUL VOICE", "ススメ→トゥモロウ (나아가→Tomorrow)", "START:DASH!!", "これからのSomeday (앞으로 다가올 Someday)", "Wonder zone", "No brand girls", "ユメノトビラ (꿈의 문)", "SENTIMENTAL StepS", "Love wing bell", "Dancing stars on me!", "KiRa-KiRa Sensation!", "Happy maker!", "Angelic Angel", "Hello, 星を数えて (Hello, 별을 세며)", "SUNNY DAY SONG", "？←HEARTBEAT", "僕たちはひとつの光 (우리는 하나의 빛)", "Future style", "夢なき夢は夢じゃない (꿈 없는 꿈은 꿈이 아니야)", "Anemone heart", "なわとび (줄넘기)", "Beat in Angel", "にこぷり♥女子道 (니코프리♥여자의 길)", "硝子の花園 (유리의 화원)", "LONELIEST BABY", "ぷわぷわーお！ (푹신푹신-오!)", "シアワセ行きのSMILING! (행복을 향한 SMILING!)", "ずるいよMagnetic today (치사해 Magnetic today)", "くるりんMIRACLE (빙그르르 MIRACLE)", "Storm in Lover", "もしもからきっと (만약으로부터 분명)", "好きですが好きですか？ (좋아하는데 좋아하나요?)", "そして最後のページには (그리고 마지막 페이지에는)", "CheerDay CheerGirl!", "Silent tonight", "同じ星が見たい (같은 별이 보고 싶어)", "これから (지금부터)", "MUSEUMでどうしたい？ (MUSEUM에서 뭘하고 싶어?)", "乙姫心で恋宮殿 (용궁 공주의 마음으로 사랑의 궁전)", "最低で最高のParadiso (최저이자 최고의 Paradiso)", "Mermaid festa vol.2 ~Passionate~", "Someday of my life", "恋のシグナルRin rin rin! (사랑의 시그널 Rin rin rin!)", "乙女式れんあい塾 (소녀식 연애 학원)", "まほうつかいはじめました！ (마법사 시작했습니다!)", "純愛レンズ (순애 렌즈)", "告白日和、です！ (고백하기 좋은 날, 입니다!)", "ぶる~べりぃ♥とれいん (블루~베리♥트레인)", "孤独なHeaven (고독한 Heaven)", "soldier game", "Daring!!", "勇気のReason (용기의 Reason)", "ありふれた悲しみの果て (흔한 슬픔의 끝)", "革命ですね？神様！ (혁명이죠? 신님!)", "羽は知ってしまったの？ (날개는 알아버린 거야?)", "閃光Resolution (섬광 Resolution)", "斯くも憂美な日となりて (슬프고도 아름다운 날이 되어서)", "I'll smile for yours", "コドクの回廊(고독의 회랑)", "秘密と花園 (비밀과 화원)", "ここで待ってるよ (여기서 기다리고 있어)", "夢☆ONCE AGAIN (꿈☆ONCE AGAIN)", "NEURON,NEURON!!", "タカラモノズ (보물들)", "Paradise Live", "Shangri-La Shower", "るてしキスキしてる (해아좋아해)", "HEART to HEART!", "嵐のなかの恋だから (폭풍 속의 사랑이니까)", "ENDLESS PARADE", "Dreamin' Go! Go!!", "ワンデイ・ポリスストーリー (원데이 폴리스 스토리)", "ネクスト・アイドル・ジェネレーション (넥스트 아이돌 제네레이션)", "ホーム・ラブリー・ホーム (홈 러블리 홈)", "Listen to my heart!!", "after school NAVIGATORS", "ミはμ’sicのミ (미는 μ’sic의 미 / 나에게는 μ'sic뿐)", "Super LOVE＝Super LIVE!");
  }

  //채널 목록
  {
    var hellchannel = new Array(
      "벨마이어 공국 북부|1|12",
      "벨마이어 공국 남부|16|25",
      "흑요정 왕국|26|35",
      "미러 아라드|1|10",
      "황도|11|20",
      "수쥬|21|30",
      "이튼 공업지대|1|10",
      "센트럴파크|11|20",
      "할렘|21|30",
      "데 로스 제국|1|20",
      "비공정|1|10",
      "경매장|61|62"
      );
  }

  //채널 이미지
  {
    var chimg = new Array(
      /*벨마이어 공국 북부*/"https://cdn.discordapp.com/attachments/778559127273734165/806876132992745482/1.png",
      /*벨마이어 공국 남부*/"https://cdn.discordapp.com/attachments/778559127273734165/806876136675868692/2.png",
      /*흑요정 왕국*/"https://cdn.discordapp.com/attachments/778559127273734165/806876138273374278/3.png",
      /*미러 아라드*/"https://cdn.discordapp.com/attachments/778559127273734165/806876140093571072/4.png",
      /*황도*/"https://cdn.discordapp.com/attachments/778559127273734165/806876142094123008/5.png",
      /*수쥬*/"https://cdn.discordapp.com/attachments/778559127273734165/806876144694591518/6.png",
      /*이튼 공업지대*/"https://cdn.discordapp.com/attachments/778559127273734165/806876145646960681/7.png",
      /*센트럴파크*/"https://cdn.discordapp.com/attachments/778559127273734165/806876147249315840/8.png",
      /*할렘*/"https://cdn.discordapp.com/attachments/778559127273734165/806876149082357770/9.png",
      /*데 로스 제국*/"https://cdn.discordapp.com/attachments/778559127273734165/806876150986702878/10.png",
      /*비공정*/"https://cdn.discordapp.com/attachments/778559127273734165/806876180853948506/11.png",
      /*경매장*/"https://cdn.discordapp.com/attachments/778559127273734165/784720670436622336/21.png"
    );
  }

  // 시세 목록, 이미지
  {
    var quote = new Array(
      "에스더의 기운||에스더||기운", 
      "파괴석 결정||파결", 
      "파괴강석||파강", 
      "중급 오레하 융화 재료||중레하", 
      "상급 오레하 융화 재료||상레하", 
      "위대한 명예의 돌파석||위명돌||위명", 
      "수호강석||수강", 
      "경이로운 명예의 돌파석||경명돌||경명", 
      "태양의 은총||은총", 
      "태양의 축복||축복", 
      "태양의 가호||가호", 
      "명예의 파편 주머니(소)||명파소", 
      "명예의 파편 주머니(중)||명파중", 
      "명예의 파편 주머니(대)||명파대", 
      "야금술 : 단조 심화||단조 심화", 
      "재봉술 : 수선 심화||수선 심화", 
      "10레벨 멸화의 보석||10렙멸화||10멸", 
      "10레벨 홍염의 보석||10렙홍염||10홍", 
      "9레벨 멸화의 보석||9렙멸화||9멸", 
      "9레벨 홍염의 보석||9렙홍염||9홍", 
      "8레벨 멸화의 보석||8렙멸화||8멸", 
      "8레벨 홍염의 보석||8렙홍염||8홍", 
      "7레벨 멸화의 보석||7렙멸화||7멸", 
      "7레벨 홍염의 보석||7렙홍염||7홍", 
      "원한 각인서||원한", 
      "예리한 둔기 각인서||예리한 둔기||예둔", 
      "저주받은 인형 각인서||저주받은 인형||저받인||저받", 
      "절정 각인서||절정", 
      "점화 각인서||점화", 
      "절실한 구원 각인서||절실한 구원||절구", 
      "아드레날린 각인서||아드레날린||아드", 
      "잔재된 기운 각인서||잔재된 기운||잔재", 
      "축복의 오라 각인서||축복의 오라||축오", 
      "타격의 대가 각인서||타격의 대가||타대", 
      "돌격대장 각인서||돌격대장||돌대", 
      "광기 각인서||광기", 
      "전문의 각인서||전문의", 
      "환류 각인서||환류", 
      "각성 각인서||각성", 
      "버스트 각인서||버스트", 
      "피스메이커 각인서||피스메이커||피메", 
      "진화의 유산 각인서||진화의 유산||유산", 
      "일격필살 각인서||일격필살||일격", 
      "극의: 체술 각인서||극의: 체술||극의 체술||체술", 
      "질량 증가 각인서||질량 증가||질증", 
      "상급 소환사 각인서||상급 소환사||상소", 
      "기습의 대가 각인서||기습의 대가||기대||기습", 
      "고독한 기사 각인서||고독한 기사||고기", 
      "화력 강화 각인서||화력 강화||화강", 
      "바리케이드 각인서||바리케이드||바리", 
      "초심 각인서||초심", 
      "분노의 망치 각인서||분노의 망치||분망", 
      "갈증 각인서||갈증", 
      "정기 흡수 각인서||정기 흡수||정흡", 
      "죽음의 습격 각인서||죽음의 습격||습격||죽습", 
      "속전속결 각인서||속전속결||속속", 
      "충격 단련 각인서||충격 단련||충단", 
      "정밀 단도 각인서||정밀 단도||정단", 
      "달의 소리 각인서||달의 소리||달소", 
      "두 번째 동료 각인서||두 번째 동료||두번째 동료||두동", 
      "역천지체 각인서||역천지체||역천", 
      "중갑 착용 각인서||중갑 착용||중착", 
      "황후의 은총 각인서||황후의 은총||황후", 
      "슈퍼 차지 각인서||슈퍼 차지||슈차", 
      "중력 수련 각인서||중력 수련||중수", 
      "절제 각인서||절제", 
      "오의난무 각인서||오의난무||오의", 
      "핸드거너 각인서||핸드거너||잼드거너", 
      "안정된 상태 각인서||안정된 상태||안상", 
      "만개 각인서||만개", 
      "회귀 각인서||회귀"
    );

    var quoteImg = new Array(
      "https://loado-app.herokuapp.com/images/loa_icons/esder.PNG", /* 에스더의 기운 */
      "https://loado-app.herokuapp.com/images/loa_icons/redStoneLow.PNG", /* 파괴석 결정 */
      "https://loado-app.herokuapp.com/images/loa_icons/redStoneHigh.PNG", /* 파괴강석 */
      "https://loado-app.herokuapp.com/images/loa_icons/middleOreha.PNG", /* 중급 오레하 융화 재료 */
      "https://loado-app.herokuapp.com/images/loa_icons/highOreha.PNG", /* 상급 오레하 융화 재료 */
      "https://loado-app.herokuapp.com/images/loa_icons/breakStoneLow.PNG", /* 위대한 명예의 돌파석 */
      "https://loado-app.herokuapp.com/images/loa_icons/blueStoneHigh.PNG", /* 수호강석 */
      "https://loado-app.herokuapp.com/images/loa_icons/breakStoneHigh.PNG", /* 경이로운 명예의 돌파석 */
      "https://loado-app.herokuapp.com/images/loa_icons/sunLow.PNG", /* 태양의 은총 */
      "https://loado-app.herokuapp.com/images/loa_icons/sunMedium.PNG", /* 태양의 축복 */
      "https://loado-app.herokuapp.com/images/loa_icons/sunHigh.PNG", /* 태양의 가호 */
      "https://loado-app.herokuapp.com/images/loa_icons/fameLow.PNG", /* 명예의 파편 주머니(소) */
      "https://loado-app.herokuapp.com/images/loa_icons/fameMedium.PNG", /* 명예의 파편 주머니(중) */
      "https://loado-app.herokuapp.com/images/loa_icons/fameHigh.PNG", /* 명예의 파편 주머니(대) */
      "https://loado-app.herokuapp.com/images/loa_icons/accelaratorWeapon.PNG", /* 야금술 : 단조 심화 */
      "https://loado-app.herokuapp.com/images/loa_icons/accelaratorArmor.PNG", /* 재봉술 : 수선 심화 */
      "https://loado-app.herokuapp.com/images/loa_icons/10LevelDamage.PNG", /* 10레벨 멸화의 보석 */
      "https://loado-app.herokuapp.com/images/loa_icons/10LevelCoolDown.PNG", /* 10레벨 홍염의 보석 */
      "https://loado-app.herokuapp.com/images/loa_icons/9LevelDamage.PNG", /* 9레벨 멸화의 보석 */
      "https://loado-app.herokuapp.com/images/loa_icons/9LevelCoolDown.PNG", /* 9레벨 홍염의 보석 */
      "https://loado-app.herokuapp.com/images/loa_icons/8LevelDamage.PNG", /* 8레벨 멸화의 보석 */
      "https://loado-app.herokuapp.com/images/loa_icons/8LevelCoolDown.PNG", /* 8레벨 홍염의 보석 */
      "https://loado-app.herokuapp.com/images/loa_icons/7LevelDamage.PNG", /* 7레벨 멸화의 보석 */
      "https://loado-app.herokuapp.com/images/loa_icons/7LevelCoolDown.PNG", /* 7레벨 홍염의 보석 */
      "https://loado-app.herokuapp.com/images/loa_icons/legendBook.PNG" /* 각인서 */
    );
  }
}

//함수
{
  function AddComma(x) {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return x.toString().replace(regexp, ',');
  }
  
  function math(a) {
    a = "0+" + a;
    var b = encodeURIComponent(a);
    b = b.trim();
    var u = Utils.getWebText("https://m.search.daum.net/kakao?w=tot&DA=SH1&rtmaxcoll=CC1&q=" + b);
    u = u.replace(/\"/gi, "");
    var answer = u.split("num_formula")[1].split(">")[1].split("<")[0];
    return answer;
  }
  
  function roundXL(n, digits) {
    if (digits >= 0) 
      return parseFloat(n.toFixed(digits));
    digits = Math.pow(10, digits);  // 정수부 반올림
    var t = Math.round(n * digits) / digits;
    return parseFloat(t.toFixed(0));
  }
}

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
{
  /*if (msg == "kaling_테스트_단진_F396") {
    Kakao.send(room, {
      "link_ver": "4.0",
      "template_id": 32925 , //템플릿 id 입력    피드(메인) : 32925 / 리스트 1 ~ 5: 35311 ~ 35315
      "template_args": { //${변수명}들 입력
        "title": result[0],
        "des": result[1],
        "img": result[2],
      }
    }, "custom");*/

  /*Kakao.send(room, {
    "link_ver": "4.0",
    "template_object": {
      "object_type": "feed",
      "button_title": "",
      "content": {
        "title": sender + "님의 캐릭터 정보",
        "image_url": "https://img-api.neople.co.kr/df/servers/cain/characters/b0bcd6e2a17b8338e8cf87e56d014708?zoom=1",
        "link": {
          "web_url": "",
          "mobile_web_url": ""
          },
        "description": "내용"
        },
        "buttons": [{
          "title": "",
          "link": {
            "web_url": "",
            "mobile_web_url": ""
          }
        }]
      }
    }, "default");
  }*/
}

/*Kakaosend=(roomname, conn, type)=>{
  replier.reply(roomname,Object.keys(conn["template_args"]).map(k => conn["template_args"][k]).join("\n\n"));
}*/

  if (msg == "!최근채팅" && (sender.indexOf("단진") != -1 || sender.indexOf("레일리루나") != -1 || sender.indexOf("‮") != -1)) {
    if (preChat[room] != undefined) {
      replier.reply(preChat[room]);
    } else {
      replier.reply("저장된 채팅이 없습니다.");
    }
    return 0;
  }

  if (msg == "!메뉴점검" && (sender.indexOf("단진") != -1 || sender.indexOf("레일리루나") != -1 || sender.indexOf("‮") != -1)) {
    let errCount = 0;
    for (let i = 0; i < mimg.length; i++) {
      try {
        var imgCheck = Utils.getWebText(mimg[i]);
      } catch (error) {
        replier.reply(menu[i]);
        errCount++;
      }
    }

    if (errCount > 0) {
      replier.reply("점검 종료");
    } else {
      replier.reply("이상 없음");
    }
  }

  if (preChat[room] != msg) {
    preChat[room] = sender + "\n" + msg;
  }

  var sw = 0;
  var i = 0;
  var count = 0;
  var api = "apikey=W9k8OZjtGTQwxK4gmRRudQZ6maXHI8Uj";
  var result = "";
  var temp = "";

  //계산
  if (msg.indexOf("!계산 ") == 0) {
    // msg = msg.replace("!계산 ", "");
    var searchValue = encodeURIComponent(msg.split("!계산 ")[1]);

    var searchWord = encodeURIComponent("계산기 ");
    try {
      var data = org.jsoup.Jsoup.connect("https://www.google.com/search?q=" + searchWord + searchValue).get().select("span#cwos");
      var resultValue = data.text().replace(/(<([^>]+)>)/g, "");
      replier.reply("《계산 결과》\n" + resultValue);
    } catch (error) {
      replier.reply("《계산 실패》\n지원하지 않는 수식이거나 수식이 아닙니다.");
    }
    
    // replier.reply("《계산 결과》\n" + math(msg));
  }

  if (msg.indexOf("!할인율 ") == 0) { // 원가와 할인가로 할인율 계산 
    msg = msg.replace("!할인율 ", "");
    var OriginalPrice = msg.split("-")[0];
    var DiscountPrice = msg.split("-")[1];
    var result = roundXL(100 - (DiscountPrice * 100 / OriginalPrice), 2) + " %";
    replier.reply("《할인율 계산기》\n" + result);
  }

  if (msg.indexOf("!구매가 ") == 0) { // 원가와 할인율로 구매가 계산
    msg = msg.replace("!구매가 ", "");
    var OriginalPrice = msg.split("-")[0];
    var DiscountPrice = msg.split("-")[1];
    var result = roundXL(OriginalPrice * (100 - DiscountPrice) / 100, 2) + " ";
    replier.reply("《구매가 계산기》\n" + result);
  }

  if (msg.indexOf("!할인가 ") == 0) { // 원가와 할인율로 할인가 계산
    msg = msg.replace("!할인가 ", "");
    var OriginalPrice = msg.split("-")[0];
    var DiscountPrice = msg.split("-")[1];
    var result = roundXL((OriginalPrice * DiscountPrice) / 100, 2) + " ";
    replier.reply("《할인가 계산기》\n" + result);
  }

  if (msg.indexOf("!치킨 ") == 0) {
    var people = parseInt(msg.replace("!치킨 ", ""));
    if (isNaN(people) == true) {
      replier.reply("명령어 뒤에는 숫자만 입력해주세요!");
      return 0;
    }
    var data = Utils.getWebText("http://fibonachicken.herokuapp.com/?people=" + people);
    if (data.indexOf("easter-egg") != -1) {
      sw = 1;
      var easter = data.split("easter-egg")[1].split("</div>")[0].split("<img src=\"")[1].split("\"")[0];
      var url = "http://fibonachicken.herokuapp.com/" + easter;
      if (url == "http://fibonachicken.herokuapp.com/static/1.png") {
        url = "https://cdn.discordapp.com/attachments/778559127273734165/783302766911029269/unknown.png";
      }
    }
    if (data.indexOf("혹시") != -1) {
      sw = 2;
      var result2 = data.split("<div class=\"panel-body\">")[1].split("<p>")[2].split("</p>")[0].replace(/(<([^>]+)>)/g, "");
    }
    result = data.split("<div class=\"panel-body\">")[1].split("<p>")[1].split("</p>")[0].replace(/(<([^>]+)>)/g, "");

    if (result.indexOf("치킨 파티") != -1) {
      result = result.replace("파티로구나! ", "파티로구나!\n").replace("시키거라. ", "시키거라.\n").replace("없느니라. ", "없느니라.\n");
    } else if (sw != 1) {
      result = result.replace(" 능히", "\n능히");
    }
    if (people == "123456789") {
      sw = 0;
    }

    switch (sw) {
      case 1:
        Kakao.send(room, {
          "link_ver": "4.0",
          "template_id": 32925 ,
          "template_args": {
            "title": result,
            "des": "",
            "img": url
          }
        }, "custom");
        //replier.reply(result);
        break;
    
      case 2:
        Kakao.send(room, {
          "link_ver": "4.0",
          "template_id": 32925 ,
          "template_args": {
            "title": result,
            "des": "",
            "img": url
          }
        }, "custom");
        //replier.reply(result);
        replier.reply(result2);
        break;

      default:
        replier.reply(result);
        break;
    }

    return 0;
  }

  if (msg == "!한강" || msg == "!한강수온" || msg == "!수온") {
    var data = Utils.getWebText("http://openapi.seoul.go.kr:8088/494e636954676f633132304e5a455565/json/WPOSInformationTime/5/5/");
    var date = data.split("MSR_DATE\":\"")[1].split("\",\"")[0];
    var time = data.split("MSR_TIME\":\"")[1].split("\",\"")[0];
    var degree = data.split("W_TEMP\":\"")[1].split("\",\"")[0];

    var year = date.substr(0, 4);
    var month = date.substr(4, 2);
    var day = date.substr(6, 2);

    var result = "현재 한강 수온은 " + degree + " ℃ 입니다.\n\n" + year + "년 " + month + "월 " + day + "일 " + time + " 기준";
    replier.reply(result);
  }

  if (msg == "!명령어") {
    if (room == "크리 톡방" || room == "커맨더 톡방" || room == "1해라 12야" || room == "라피니타" || room == "무속성 톡방" || room == "런처 톡방" || room == "허니꼬미" || room == "졸업생") {
      {
        var OrderSign = new Array(
          "\n[ ]로 묶여있는 부분은 사용자가 직접 해당 내용에 맞게 기재하여야 합니다.",
          "\n해당 내용을 기재할 때엔 [ ]는 제외하고 입력하시되, [ ]간의 띄어쓰기에 유의해주세요!",
          "\n예시) ![서버명][명령어] [캐릭터명] ☞ !디레장비 던파망해라\n",
          "\n!공지사항",
          "\n!후원",
          "\n!크리봇",
          //"\n\n★팁★",
          //"\n!가이드",
          //"\n!탈만가이드",
          //"\n!정옵",
          "\n\n☆편의기능☆",
          "\n!공홈",
          "\n!던담",
          "\n!던담 [캐릭터명]",
          "\n!던셋",
          "\n!던셋 [캐릭터명]",
          "\n!캐릭검색 [캐릭터명]",
          "\n\n![서버명][명령어] [캐릭터명]",
          "\n(서버명은 앞 두글자만, 명령어는 아래를 참조하여 기재)",
          "\n└ 던담 / 장비 / 스칭 / 스탯 / 캐릭 / 사진", //순위 / 버프 / 샌드 / 로젠 / 시스 / 로코 / 종합 / 딜표
          "\n└ 주간 / 에픽 / 기린 / 점수 / 가치 / 던조",
          "\n\n!딜[몬스터명] [딜량]/[퍼센트] (몬스터명은 아래를 참조하여 기재)",
          "\n└ 하니에르 / 비타 / 넥스",
          "\n└ 길리 / 레베체 / 레스테 / 시로코",
          "\n└ 반야 / 순혈자 / 데바스 / 데바스타르",
          "\n└ 1 ~ 3제트 / 1 ~ 3데스페로",
          "\n└ 1 ~ 3피반야 / 1 ~ 3티모르",
          "\n└ 1 ~ 3티아매트 / 1 ~ 3베리아스",
          "\n└ 1 ~ 4아스타",
          "\n\n!프로필",
          "\n!최저가 [아이템명]",
          "\n!카드 [카드명] +[업그레이드 수치]",
          "\n(카드명은 반드시 풀네임 기재)",
          /*"\n!검색 [아이템명]",
          "\n(최대 10개까지 표시)",
          "\n(모든 아이템 검색시 !검색풀 사용 - 오래걸림)",*/
          "\n!오늘등급 / !등급",
          //"\n!추출속도",
          "\n!조합기",
          "\n!계산기",
          /*"\n\n★간이 경매장★",
          "\n!목록",
          "\n!등록 [판매할 물품]",
          "\n※반드시 한줄로 작성할것 (엔터 금지)",
          "\n!완료(!삭제 / !취소) [등록한 내용]",*/
          "\n\n☆그 외☆",
          "\n!메뉴",
          "\n!치킨 [치킨을 먹을 인원수]",
          "\n!중복픽 [보유한 에픽 갯수]",
          "\n!계산 [식]",
          "\n!할인율 [원가]-[구매가]",
          "\n!구매가 [원가]-[할인율]",
          "\n!할인가 [원가]-[할인가]",
          "\n!날씨",
          "\n!별빛의노래",
          "\n!지역광고",
          "\n\n\n명령어는 추가될 수 있습니다",
          "\n\n비공식 명령어는 표기되지 않았습니다."
        );
      }
  } else if (room == "히오스 톡방") {
    var OrderSign = new Array(
      "\n!전적 닉네임 (#숫자 를 제외하고 입력)",
      "\n!업로드",
      "\n\n!후원",
      "\n\n\n명령어는 추가될 수 있습니다",
      "\n\n비공식 명령어는 표기되지 않았습니다."
    );
  } else if (room == "로아 톡방") {
    var OrderSign = new Array(
      "\n[ ]로 묶여있는 부분은 사용자가 직접 해당 내용에 맞게 기재하여야 합니다.",
      "\n해당 내용을 기재할 때엔 [ ]는 제외하고 입력하시되, [ ]간의 띄어쓰기에 유의해주세요!",
      "\n예시) !로아 [캐릭터명] ☞ !로아 빛강선최고다\n",
      "\n!후원",
      "\n\n☆편의기능☆",
      (room == "로아 톡방" ? "\n!로아/!루나 [닉네임]" : "\n!로아 [닉네임]"),
      "\n!각인 [닉네임]",
      "\n!수집 [닉네임]",
      "\n!시세 [아이템 명]",
      "\n\n☆그 외☆",
      "\n!메뉴",
      "\n!치킨 [치킨을 먹을 인원수]",
      "\n!계산 [식]",
      "\n!날씨",
      "\n!날씨 [행정구역]",
      "\n!별빛의노래",
      "\n\n\n명령어는 추가될 수 있습니다",
      "\n\n비공식 명령어는 표기되지 않았습니다."
    );
  } /* else if (room == "럽라 톡방") {
    var OrderSign = new Array(
      "\n[ ]로 묶여있는 부분은 사용자가 직접 해당 내용에 맞게 기재하여야 합니다.",
      "\n예시) !저격 [아이돌명] [종류] ☞ !저격 니코 장난감 / !저격 린 4차\n",
      //"\n!이벤트",
      //"\n!스카우트",
      "\n!미래시",
      "\n!성능",
      "\n!음악 / !노래",
      "\n!가챠",
      "\n!저격 [아이돌명] [종류]",
      "\n(아이돌명은 이름만, 종류는 미각성/각성명 중 일부 혹은 UR차수)",
      "\n\n!후원",
      "\n\n\n명령어는 추가될 수 있습니다",
      "\n\n비공식 명령어는 표기되지 않았습니다."
    );
  } */ else {
    var OrderSign = new Array("\n이 톡방에는 아직 공식 명령어가 활성화 되지 않았습니다.");
  }
    result = "♤" + room + " 명령어 목록♤\n\n∇▼전체 보기를 눌러주세요▼∇" + "​".repeat(495);
    for (var i = 0; i < OrderSign.length; i++) {
      result = result + OrderSign[i];
    }
    replier.reply(result);
    return 0;
  }

  if (msg == "!공지사항" || msg == "!공지") {
    result = "이 톡방에는 공지사항 등록이 요청되지 않았습니다.";
    /*if (room == "크리 톡방") {
      result = "《크리 톡방 규칙》\n" + "​".repeat(495);
      result = result + "\n";
      result = result + "■ 심한 욕설 . 분쟁 . 성 관련 발언 절대 금지\n";
      result = result + "■ 객관적 기준의 혐오감 조장하는 사진 금지\n";
      result = result + "■ 상습적인 도배 및 이모티콘 도배 금지\n";
      result = result + "■ 상호존중을하며 상대방을 배려해주세요.\n";
      result = result + "■ 커뮤니티어 사용금지 [일베.메갈 등등]\n";
      result = result + "■ 길드홍보는 가능하며 도배는 절대 금지\n";
      result = result + "■ 어그로.확인되지않은 찌라시 정보 강퇴\n";
      result = result + "■ 방장, 또는 부방장 사칭시 즉시 강퇴\n\n";
      result = result + "※규칙위반 적발시 강퇴처리 합니다.\n\n";
      result = result + "카톡방 닉네임은 서버명 / 캐릭터명 (크리에이터 캐릭) 으로 통일해주세요. [ 캐릭터 없을시 \"변경예정\" ]\n\n";
      result = result + "우측상단 ☰ 클릭 > 본인 닉네임 클릭 > 수정\n\n";
      result = result + "각종 봇 기능 사용 》 !명령어 채팅창 입력\n\n";
      result = result + "우측상단 ☰ 누르시고 ❤ 한번 눌러주세요.";
    }*/
    /* if (room == "럽라 톡방") {
      result = "《러브라이브 톡방 규칙》\n" + "​".repeat(495);
      result = result + "\n";
      result = result + "■ 심한 욕설 . 분쟁 . 성 관련 발언 절대 금지\n";
      result = result + "■ 객관적 기준의 혐오감 조장하는 사진 금지\n";
      result = result + "■ 상습적인 도배 및 이모티콘 도배 금지\n";
      result = result + "■ 상호존중을하며 상대방을 배려해주세요.\n";
      result = result + "■ 커뮤니티어 사용금지 [일베.메갈 등등]\n";
      result = result + "■ 친구 모집은 가능하며 도배는 절대 금지\n";
      result = result + "■ 어그로.확인되지않은 찌라시 정보 강퇴\n";
      result = result + "■ 방장, 또는 부방장 사칭시 즉시 강퇴\n\n";
      result = result + "※규칙위반 적발시 강퇴처리 합니다.\n\n";
      result = result + "카톡방 닉네임은 인게임 유저명 으로 통일해주세요. \n[ 유저 아이디 기입시 유저명 뒤에 \" / \"로 구분후 기입 ]\n\n";
      result = result + "우측상단 ☰ 클릭 > 본인 닉네임 클릭 > 수정\n\n";
      result = result + "각종 봇 기능 사용 》 !명령어 채팅창 입력\n\n";
      result = result + "우측상단 ☰ 누르시고 ❤ 한번 눌러주세요.";
    } */
    if (room == "커맨더 톡방") {
      result = "《커맨더 톡방 규칙》\n\n";
      result = result + "욕, 비하, 어그로, 무시, 농락, 싸움 - 강퇴 (관장 놀리기는 예외)\n\n";
      result = result + "카톡방 닉네임은 서버명 / 캐릭터명 으로 통일 [ 던파 캐릭 인증 필수 ]\n\n";
      result = result + "우측상단 ☰ 클릭 > 본인닉네임 클릭 > 수정\n\n";
      result = result + "각종 봇 기능 사용 》 !명령어 채팅창 입력";
    }
    replier.reply(result);
    return 0;
  }

  /*if (sender.indexOf("바칼 / 체이") != -1) {
    rnd = Math.floor(Math.random() * 100);
    if (rnd >= 0 && rnd < 2) {
      Kakao.send(room, {
        "link_ver": "4.0",
        "template_id": 45365 ,
        "template_args": {
          "title": "",
          "des": "",
          "wid": "200",
          "hei": "107",
          "img": "https://cdn.discordapp.com/attachments/778559127273734165/801388663924850708/unknown.png"
        }
      }, "custom");
      return 0;
    }
  }*/

  /*if (msg == "!공지등록" && room == "크리 톡방" && sender == "단진") {
    result = "♧크리에이터 톡방입니다♧\n◇채팅창에 !공지사항 입력후 숙지◇\n닉네임은 서버 / 캐릭터명 으로!";
    replier.reply(result);
    return 0;
  }*/

  if (msg == "!던담") {
    result = "《던담 캐릭터 정보 조회》\ndundam.xyz";
    replier.reply(result);
    return 0;
  }

  if (msg.indexOf("!던담 ") == 0) {
    searchvalue = msg.replace("!던담 ", "");
    result = "《" + searchvalue + "님의 던담 캐릭터 검색》\ndundam.xyz/search?server=all&name=" + encodeURIComponent(searchvalue);
    replier.reply(result);
    return 0;
  }

  if (msg == "!던셋") {
    result = "《획득한 에픽 정보 조회》\ndfset.me";
    replier.reply(result);
    return 0;
  }

  if (msg.indexOf("!던셋 ") == 0) {
    searchvalue = msg.replace("!던셋 ", "");
    result = "《" + searchvalue + "님의 던셋 캐릭터 검색》\ndfset.me/?serverId=all&charName=" + encodeURIComponent(searchvalue);
    replier.reply(result);
    return 0;
  }

  if (msg == "!프로필") {
    result = "《던파 캐릭터 프로필 생성기》\ndunp.net";
    replier.reply(result);
    return 0;
  }

  /*if (msg == "!가이드") {
    if (room == "크리 톡방") {
      result = "《크리에이터 기본 가이드》\nhttp://df.nexon.com/df/community/dnfboard?p=web&mode=view&no=1962674&job=10&grow_type=0";
    }
    if (room == "커맨더 톡방") {
      result = "《커맨더 기본 가이드》\n링크 제보가 필요합니다.";
    }
    if (room != "크리 톡방" && room != "커맨더 톡방") {
      result = "직업 톡방에서만 활성화 된 기능입니다."
    }
    replier.reply(result);
    return 0;
  }

  if (msg == "!탈만가이드") {
    if (room == "크리 톡방") {
      result = "《크리에이터 탈리스만 가이드》\nhttp://df.nexon.com/df/community/dnfboard?mode=view&no=2067474&job=10&grow_type=0";
    }
    if (room == "커맨더 톡방") {
      result = "《커맨더 탈리스만 가이드》\n링크 제보가 필요합니다.";
    }
    if (room != "크리 톡방" && room != "커맨더 톡방") {
      result = "직업 톡방에서만 활성화 된 기능입니다."
    }
    replier.reply(result);
    return 0;
  }

  if (msg == "!정옵") {
    if (room == "크리 톡방") {
      result = "《크리에이터 아바타 정식 옵션》\n링크 제보가 필요합니다.";
    }
    if (room == "커맨더 톡방") {
      result = "《커맨더 아바타 정식 옵션》\n링크 제보가 필요합니다.";
    }
    if (room != "크리 톡방" && room != "커맨더 톡방") {
      result = "직업 톡방에서만 활성화 된 기능입니다."
    }
    replier.reply(result);
    return 0;
  }*/

  if (msg == "!공홈") {
    result = "《던전 앤 파이터 공식 홈페이지》\n넥슨 : http://df.nexon.com" + "\n네이버 : http://df.game.naver.com/df/home";
    replier.reply(result);
    return 0;
  }

  if (msg == "!별빛의노래") {
    result = "《에일린 목소리 버전》\nhttps://youtu.be/6RAAEczM9vY\n《인게임 버전》\nhttps://youtu.be/Vqv4sxFANJE";
    replier.reply(result);
    return 0;
  }

  if (msg == "!지역광고") {
    result = "☆스팀게임☆♚♚엔터☆더☆건전♚♚구매시$$전원 캐릭터☜☜4종100%지급※♜한방쾌감♜연사쾌감 무료증정￥특정조건\xa7\xa7과거제거\xa7\xa7★패러독스★건슬링거획득기회@@@\nhttps://store.steampowered.com/app/311690/Enter_the_Gungeon/";
    replier.reply(result);
    return 0;
  }

  if (msg == "!메뉴") {
    rnd = Math.floor(Math.random() * menu.length);
    //mimg[rnd] = "현재 이미지는 제공되고 있지 않습니다.";

    Kakao.send(room, {
      "link_ver": "4.0",
      "template_id": 32925 ,
      "template_args": {
        "title": "《" + sender + "님의 추천 메뉴》",
        "des": menu[rnd],
        "img": mimg[rnd]
      }
    }, "custom");
    
    /*result = sender + " 님의 추천 메뉴는\n\n" + menu[rnd];
    replier.reply(result);*/
    return 0;
  }

  if (msg == "!음악" || msg == "!노래") {
    rnd = Math.floor(Math.random() * music.length);
    result = sender + " 님의 추천 음악은\n\n" + music[rnd];
    replier.reply(result);
    return 0;
  }

  if (msg == "!헬") {
    rnd = Math.floor(Math.random() * hellchannel.length);
    var chname = hellchannel[rnd].split("|")[0];
    var min = parseInt(hellchannel[rnd].split("|")[1]);
    var max = parseInt(hellchannel[rnd].split("|")[2]);
    rnd2 = Math.floor((Math.random() * (max - min + 1)) + min);

    //chimg[rnd] = "현재 이미지는 제공되고 있지 않습니다.";

    Kakao.send(room, {
      "link_ver": "4.0",
      "template_id": 38994 ,
      "template_args": {
        "title": "《" + sender + "님의 추천 채널》",
        "des": chname + " " + rnd2 + "채널",
        "img": chimg[rnd]
      }
    }, "custom");

    /*result = "《" + sender + "님의 추천 채널》\n" + chname + " " + rnd2 + "채널";
    replier.reply(result);*/
  }

  if (msg.indexOf("!중복픽 ") == 0) {
    var have = parseInt(msg.split(" ")[1]);
    if (have > 196 || have < 0) {
      replier.reply("소지한 에픽 종류는 최대 196개를 넘거나 0보다 작을수 없습니다.");
      return 0;
    }
    var epicper = have / 196 * 100;
    result = "《중복 에픽 확률 계산기》\n" + sender + " 님의 중복 에픽이 뜰 확률은\n\n" + epicper.toFixed(2) + "% 입니다";
    replier.reply(result);
    return 0;
  }

  if (msg == "!날씨") {
    data = Utils.getWebText("https://m.search.daum.net/search?w=tot&DA=Z8T&rtmaxcoll=Z8T&q=%EC%A0%84%EA%B5%AD%20%EB%82%A0%EC%94%A8");
    result = "《현재 전국 날씨》\n";
    data = data.split("data-first-view")[1].split("전국 날씨</strong>")[1].split("list_map hide")[0];
    var cutData = data.split("link_city now_info");
    for (let i = 1; i < cutData.length; i++) {
      let city = cutData[i].split('<span class="txt_name">')[1].split("</span>")[0];
      let weather = cutData[i].split('<span class="ico_ws')[1].split("</span>")[0].split(">")[1];
      let degree = cutData[i].split('<span class="txt_temp">')[1].split("<span")[0] + "°";
      result += "\n" + city + "　" + degree + "　" + weather;
    }
    replier.reply(result);
    return 0;
  }

  if (msg.indexOf("!날씨 ") == 0) {
    try {
      data = Utils.getWebText("https://m.search.daum.net/search?q=%EB%82%A0%EC%94%A8+" + encodeURIComponent(msg.replace("!날씨 ", "")));
      var place = data.split("tit_name")[1].split("<")[0].split(">")[1];
      var drgree = data.split("txt_temp")[1].split("<")[0].split(">")[1] + " °c";
      var text = data.split("desc_main mg_cont")[1].split("</p>")[0].replace(/(<([^>]+)>)/g, "").split(">")[1];
      var wet = data.split("<dd>")[1].split("</dd>")[0].replace(/\s+/gi, "");
      var windPosition = data.split("<dt>")[2].split("</dt>")[0].replace(/\s+/gi, "");
      var windSpeed = data.split("<dd>")[2].split("</dd>")[0].replace(/\s+/gi, "");
      var feel = data.split("<dd>")[3].split("</dd>")[0].replace(/\s+/gi, "");

      result = "기온 :" + drgree + "\n" + text + "\n체감온도 : " + feel + "\n습도 : " + wet + "\n" + windPosition + " " + windSpeed;

      replier.reply("《현재 " + place + " 날씨》\n\n" + result);
      return 0;
    } catch (error) {
      replier.reply("지원하지 않는 지역입니다.");
      return 0;
    }
  }
  
  if (msg.indexOf("!최저가 ") == 0) {
    if (msg.indexOf("플티") != -1) {
      msg = msg.replace("플티", "플래티넘 엠블렘");
    }
    try {
    var url = encodeURIComponent(msg.split("!최저가 ")[1]).replace(/%20/g, "+");

    var base = "https://api.neople.co.kr/df/auction?itemName=";
    var middle = "&sort=unitPrice:asc&wordType=";
    var word = new Array("full", "match", "front");
    var i = 0;
    var x = 0;

    while (x == 0) {
      if (i == 0) {
        base = base + "\"";
        middle = "\"" + middle;
      } else {
        base = base.replace(/\"/gi, "");
        middle = middle.replace(/\"/gi, "");
      }
      var data = Utils.getWebText(base + url + middle + word[i] + "&" + api);     //최저가 검색
      data = data.replace(/\"/gi, "");
      if (data.indexOf("{rows:[]}") != -1) {
        i++;
      } else {
        x = 1;
      }
      if (i == 3) {
        x = 2;
      }
    }

    // 에러 체크
    if (x == 2) {
      counter++;
      if (counter == 3) {
        result = "《최저가 검색 사용법》\n\n";
        result = result + "1. 검색하고자 하는 물품의 이름을 단어 단위로 입력해주세요\n\n";
        result = result + "2. 여러 단어 검색시 띄어쓰기까지 정확히 검색해주세요\n\n";
        result = result + "3. 아이템 이름이 정확히 기억나지 않을땐 구글 검색 등으로 정확한 아이템 이름을 검색해 주세요!";
        replier.reply(result);
        counter = 0;
        return 0;
      }
      replier.reply("《경매장 최저가 검색》\n검색 결과가 없습니다!");
      return 0;
    } /*else if (data.indexOf("error") != -1 && data.indexOf("DNF007") != -1 && data.indexOf("SEARCH_ITEM_OVER") != -1) {
      replier.reply("《경매장 최저가 검색》\n검색 결과가 너무 많습니다!");
      return 0;
    } else if (data.indexOf("error") != -1 && data.indexOf("API001") != -1 && data.indexOf("NOT_FOUND_SEARCH_VALUE") != -1) {
      replier.reply("《경매장 최저가 검색》\n검색 값을 찾을 수 없습니다!");
      return 0;
    }*/

    if (data.indexOf("remodelInfo") != -1) {
      var templory = data.split("remodelInfo")[1].split("},count")[0] + "},";
      data = data.replace(templory, "");
    }
    
    data = data.split("{")[2];
    sw = 0;
    // 아이디 추출
    var temid = data.split("itemId:")[1].split(",")[0];
    // 이름 추출
    var name = data.split("itemName:")[1].split(",")[0];
    // 개수 추출
    var num = data.split("count:")[1].split(",")[0].trim();
    // num 갯수 확인
    if (num > 1) {
      sw = 1;
      num = AddComma(num);
    }
    var price = data.split("currentPrice:")[1].split(",")[0].trim();
    price = AddComma(price);
    // 등록 만료 시간 추출
    var exp = data.split("expireDate:")[1].split(",")[0];
    //결과값 저장 및 출력
    var result = "《경매장 최저가 검색》\n" + name + "\n" + price + " 골드\n" + num + " 개\n유찰 시간 : " + exp;
    var plus = "";
    // 개당 가격 추출
    if (sw == 1) {
      plus = " / (총 " + price + "골드)";

      var ave = data.split("unitPrice:")[1].split(",")[0].trim();
      ave = AddComma(ave);
    } else {
      var ave = price;
    }

    Kakao.send(room, {
      "link_ver": "4.0",
      "template_id": 35311 ,
      "template_args": {
        "title": name,
        "data0": ave + " 골드",
        "data1": num + "개" + plus,
        "img": "https://img-api.neople.co.kr/df/items/" + temid
      }
    }, "custom");

    /*result = "《 " + name + " 》\n" + ave + " 골드\n" + num + "개" + plus;
    replier.reply(result);*/

  } catch (error) {
    replier.reply("《경매장 최저가 검색》\n검색 결과가 너무 많습니다.");

  }
    return 0;
  }

  if (msg.indexOf("!카드 ") == 0) {
    if (msg.indexOf("+") == -1) {
      replier.reply("《카드 최저가 검색 실패》\n카드의 업그레이드 수치를 맨 뒤쪽에 '+숫자' 형태로 적어주세요!");
      return 0;
    }
    if (isNaN(msg.split("+")[1]) != false || msg.split("+")[1] < 0) {           // 숫자 여부 판단
      replier.reply("《카드 최저가 검색 실패》\n카드의 업그레이드 수치를 맨 뒤쪽에 '+숫자' 형태로만 적어주세요!");
      return 0;
    }
    msg = msg.replace("+", "카드 +");
    var upnum = msg.split("+")[1];
    var url = encodeURIComponent(msg.split("!카드 ")[1].split("+")[0]);
    var data = Utils.getWebText("https://api.neople.co.kr/df/auction?itemName=" + url + "&sort=unitPrice:asc&limit=400&wordType=match&" + api);
    data = data.replace(/\"/gi, "");
    // 에러 체크
    if (data.indexOf("{rows:[]}") != -1) {
      cardcounter++;
      if (cardcounter == 3) {
        result = "《카드 검색 사용법》\n";
        result = result + "1. 검색하고자 하는 카드의 이름을 정확히 모두 입력해주세요\n";
        result = result + "2. 카드의 이름 뒤에 업그레이드 수치를 '+숫자' 형태로 적어주세요\n";
        result = result + "3. 카드 이름이 정확히 기억나지 않을땐 구글 검색 등으로 정확한 이름을 검색해 주세요!";
        replier.reply(result);
        cardcounter = 0;
        return 0;
      }
      replier.reply("《카드 최저가 검색》\n검색 결과가 없습니다!");
      return 0;
    } else if (data.indexOf("error") != -1 && data.indexOf("DNF007") != -1 && data.indexOf("SEARCH_ITEM_OVER") != -1) {
      replier.reply("《카드 최저가 검색》\n검색 결과가 너무 많습니다!");
      return 0;
    } else if (data.indexOf("error") != -1 && data.indexOf("API001") != -1 && data.indexOf("NOT_FOUND_SEARCH_VALUE") != -1) {
      replier.reply("《카드 최저가 검색》\n검색 값을 찾을 수 없습니다!");
      return 0;
    }
    data = data.replace("{rows:[", "");
    var temp = data.split("{");
    var temp2 = "";
    var i = 1;
    var x = 0;
    while (x == 0) {
      if (i == temp.length) {
        replier.reply("《카드 최저가 검색 실패》\n해당 업그레이드 수치를 찾을 수 없습니다!");
        return 0;
      }
      temp2 = temp[i].split("upgrade:")[1];
      if (temp2.indexOf(upnum) != -1) {
        x = 1;
        data = temp[i];
      }
      i++;
    }
    sw = 0;
    // 아이디 추출
    var temid = data.split("itemId:")[1].split(",")[0];
    // 이름 추출
    var name = data.split("itemName:")[1].split(",")[0];
    // 개수 추출
    var num = data.split("count:")[1].split(",")[0].trim();
    // num 갯수 확인
    if (num > 1) {
      sw = 1;
      num = AddComma(num);
    }
    var price = data.split("currentPrice:")[1].split(",")[0].trim();
    price = AddComma(price);
    // 등록 만료 시간 추출
    var exp = data.split("expireDate:")[1].split(",")[0];
    //결과값 저장 및 출력
    var result = "《카드 최저가 검색》\n" + name + "\n" + price + " 골드\n" + num + " 개\n유찰 시간 : " + exp;
    var plus = "";
    // 개당 가격 추출
    if (sw == 1) {
      var ave = data.split("unitPrice:")[1].split(",")[0].trim();
      ave = AddComma(ave);
      plus = " / (개당 " + ave + "골드)";
    }

    Kakao.send(room, {
      "link_ver": "4.0",
      "template_id": 35311 ,
      "template_args": {
        "title": name,
        "data0": price + " 골드",
        "data1": num + "개" + plus,
        "img": "https://img-api.neople.co.kr/df/items/" + temid
      }
    }, "custom");

    /*result = "《 " + name + " 》\n" + price + " 골드\n" + num + "개" + plus;
    replier.reply(result);*/

    return 0;
  }

  /*if (msg.indexOf("!검색 ") == 0) {
    var search = msg.replace("!검색 ", "");
    var url = "https://dunfa.in/" + encodeURIComponent("아이템") + "/" + encodeURIComponent(search);
    var data = Utils.getWebText(url);
    if (data.indexOf("검색결과가 없습니다.") != -1) {
      replier.reply("《아이템 검색 실패》\n검색 결과가 없습니다.");
      return 0;
    }
    var result = "《" + search + " 검색 결과》\n";
    var temp;
    var itemName;
    var lencheck = data.split("<div class=\"aleft\">");
    for (i = 0; i < lencheck.length - 1; i++) {
      temp = lencheck[i + 1];
      itemName = temp.split("</div>")[0].replace(/\n/g, "").replace(/\s\s/g, "");
      result = result + "\n" + itemName;
    }
    replier.reply(result);
    return 0;
  }

  if (msg.indexOf("!검색풀 ") == 0) {
    var search = msg.replace("!검색풀 ", "");
    var url = "https://dunfa.in/" + encodeURIComponent("아이템") + "/" + encodeURIComponent(search);
    var data = Utils.getWebText(url);
    data = data.replace(/\"/gi, "");
    if (data.indexOf("검색결과가 없습니다.") != -1) {
      replier.reply("《아이템 검색 실패》\n검색 결과가 없습니다.");
      return 0;
    }
    replier.reply("《" + search + " 검색 결과 집계중...》\n내용이 많을수록 오래걸립니다!");
    var result = "《" + search + " 검색 결과》\n" + "​".repeat(495);
    var x = 0;
    var p = 2;
    var tempurl = url + "/" + p;
    var temp;
    var itemName;
    while (x == 0) {
      tempurl = url + "/" + p;
      data = Utils.getWebText(tempurl);
      data = data.replace(/\"/gi, "");
      if (data.indexOf("검색결과가 없습니다.") != -1) {
        x = 1;
      } else {
        lencheck = data.split("<div class=aleft>");
        for (i = 0; i < lencheck.length - 1; i++) {
          temp = lencheck[i + 1];
          itemName = temp.split("</div>")[0].replace(/\n/g, "").replace(/\s\s/g, "");
          result = result + "\n" + itemName;
        }
      p = p + 1;
      }
    }
    replier.reply(result);
    return 0;
  }*/

  /*if (msg == "!오늘끄리") {
    var url = encodeURIComponent("끄리에이터");
    var base = "https://api.neople.co.kr/df/servers/cain";
    var data = Utils.getWebText(base + "/characters?characterName=" + url + "&" + api);
    var code = data.split("characterId\":\"")[1].split("\"")[0].trim();

    Kakao.send(room, {
      "link_ver": "4.0",
      "template_id": 32925 ,
      "template_args": {
        "title": "《오늘의 끄리님 캐릭터 이미지》",
        "des": "",
        "img": "https://img-api.neople.co.kr/df/servers/cain/characters/" + code + "?zoom=1",
      }
    }, "custom");
  }*/

  if (msg == "!오늘등급" || msg == "!등급" || msg == "아이템 등급 갱신!") {
    if (msg == "아이템 등급 갱신!" && sender != "방장봇") {
      return 0;
    }
    result = "《오늘의 아이템 등급》\n";
    var sum;
    var gradevalue;
    var itemlink = "https://api.neople.co.kr/df/items/";
    api = "/shop?" + api;
    sum = Utils.getWebText(itemlink + "a0f7e5708196556425497f731411cabe" + api);
    sum = sum.replace(/\"/gi, "");
    gradevalue = sum.split("itemGradeValue:")[1].split(",")[0];
    sum = sum.split("itemGradeName:")[1].split(",")[0];
    result = result + "종합 등급 : " + sum + " (" + gradevalue + "%)";
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    if (d < 10) {
      d = '0' + d;
    }
    if (m < 10) {
      m = '0' + m;
    }
    date = y + "년 " + m + "월 " + d + "일";
    result = result + "\n" + date + " 기준";
    if (sum != "최상급") {
      replier.reply(result);
      return 0;
    } else {
      result = result + "​".repeat(495) + "\n\n";
    }
    var code = new Array("ff3bdb021bcf73864005e78316dd961c", "6fa8fd063b358683d0e265c8100186f0", "8427cc02c72663ff1544223d3692257e", "71effccf1fbea04f108a28c29f3e9cbe", "60e38a4e488458fda644981f12f1deb4", "593a8a8d95b141d40b349854944e3f6e", "f390f7c26739284e835c13fd3bf03c51", "7e00042ac936e802d7eb2b73d0b97a38", "ceaac4710e340dcf7272d98d7abc1aa7", "4535b6afce6f255007a117feb93a3ee4", "418075fd74245049d0dac37753dfe0c3", "a54c4f71a373b49b89c840d133b9a28a", "3fc327c52262da11ce5470df4cf402c1", "d0b8d0649ca42241ea9f610f99651a5b", "b0e59e14c8ab5f604d8388902e1d70f3", "0d15e556e9a0740c1c9c7be6ba307f10");
    var data = new Array();
    for (var i = 0; i < code.length; i++) {
      data[i] = Utils.getWebText(itemlink + code[i] + api);
    }
    var sptdata = new Array("모든 속성 강화", "모든 속성 강화", "모든 속성 강화", "수속성강화", "명속성강화", "화속성강화", "모든 속성 강화", "암속성강화", "모든 속성 강화", "모든 속성 강화");
    var plus1 = new Array("〔속성 강화〕\n【영광】\n목걸이 : ", "팔찌 : ", "반지 : ", "\n【오광】\n상의 : ", "하의 : ", "어깨 : ", "벨트 : ", "신발 : ", "\n【만유】\n삼사라 : ", "\n【억년】\n신발 : ");
    var plus2 = new Array("\n", "\n", "\n(극 : 16)\n", "(극 : 16)\n", "(극 : 16)\n", "(극 : 16)\n", "(극 : 14)\n", "(극 : 16)\n", "(극 : 50)\n", "(극 : 30)\n");
    for (var i = 0; i < 10; i++) {
      var temp = data[i].split(sptdata[i])[1].split("}")[0].split(":")[1].trim();
      result = result + plus1[i] + temp + plus2[i];
    }
    var ultra1 = new Array("\n\n〔스탯〕\n【청화】\n목걸이\n지능 : ", "\n팔찌\n지능 : ", "\n반지\n지능 : ", "\n【시리네】\n보조장비\n지능 : ", "\n마법석\n지능 : ", "\n귀걸이\n지능 : ");
    var ultra2 = new Array("(극 : 166)\n체력 : ", "(극 : 254)\n체력 : ", "(극 : 193)\n체력 : ", "\n체력 : ", "\n체력 : ", "\n체력 : ");
    var ultra3 = new Array("(극 : 134)\n정신력 : ", "(극 : 246)\n정신력 : ", "(극 : 232)\n정신력 : ", "\n정신력 : ", "\n정신력 : ", "\n정신력 : ");
    var ultra4 = new Array("(극 : 246)\n", "(극 : 134)\n", "(극 : 232)\n", "\n(극 : 108)\n", "\n(극 : 143)\n", "\n(극 : 152)");
    for (var i = 0; i < 6; i++) {
      var j = i + 10;
      var temp1 = data[j];
      var temp2 = data[j];
      var temp3 = data[j];
      temp1 = temp1.split("체력")[1].split("}")[0].split(":")[1].trim();
      temp2 = temp2.split("정신력")[1].split("}")[0].split(":")[1].trim();
      temp3 = temp3.split("지능")[1].split("}")[0].split(":")[1].trim();
      result = result + ultra1[i] + temp3 + ultra2[i] + temp1 + ultra3[i] + temp2 + ultra4[i];
    }
    replier.reply(result);
  }

  if (msg == "!조합기") {
    result = "《100제 장비 조합기》\n\n자동 조합 계산기 : https://drive.google.com/file/d/1p8ZdzW_NzGKHHOtfPTuZSr1YgSEVtYCj/view" + "\n\n\n제작자 : 던파조선 - Dawnclass\nhttp://df.gamechosun.co.kr/board/list.php?bid=tip&col=nickname&kw=Dawnclass";
    replier.reply(result);
    return 0;
  }

  if (msg == "!계산기") {
    result = "《크리에이터 전용 계산기》\n\n https://drive.google.com/file/d/1_ZFpOF9i46C5Aizd-x2JnobHftYwFRur/view?usp=sharing" + "\n\n\n제작자 : 공홈 - NeoCreator\nhttp://df.nexon.com/df/community/dnfboard?mode=list&search_type=charac_name&keyword=NeoCreator&job=10&grow_type=0";
    replier.reply(result);
    return 0;
  }

  var sw;
  var chat = msg.split(" ");
  var chrname = chat[1];
  var order = chat[0];
  var chk = order.replace("!", "");

  if (msg.indexOf("!캐릭검색 ") == 0) {
    var url = encodeURIComponent(chrname);
    var data = Utils.getWebText("https://api.neople.co.kr/df/servers/all/characters?characterName=" + url + "&limit=200&wordType=full&" + api);
    data = data.trim();
    if (data.indexOf("{\"rows\":[]}") != -1) {
      replier.reply("《캐릭터 검색 실패》\n" + chrname + " 님은 존재하지 않는 캐릭터 입니다!");
      return 0;
    }
    data = data.replace(/\"/gi, "").trim();
    var lencheck = data.split("serverId");
    if (lencheck.length > 5) {
      var result = "《" + chrname + "님의 검색 결과》" + "​".repeat(495) + "\n";
    } else {
      var result = "《" + chrname + "님의 검색 결과》\n";
    }
    var temp;
    var servertemp;
    var nameTemp;
    var leveltemp;
    var job;
    var grow;
    var finaljob;
    for (i = 0; i < lencheck.length - 1; i++) {
      temp = data.split("serverId")[i + 1];
      servertemp = temp.split(":")[1].split(",")[0];
      nameTemp = temp.split("characterName:")[1].split(",")[0];
      leveltemp = temp.split("level:")[1].split(",")[0];
      
      job = temp.split("jobName:")[1].split(",")[0];
      grow = temp.split("jobGrowName:")[1].split("}")[0];
      if (grow.indexOf("자각") != -1) {
        finaljob = job + "(" + grow + ")";
      } else {
        finaljob = grow;
      }

      for (var j = 0; j < sevraw.length; j++) {
        if (servertemp == sevraw[j]) {
          var num = j;
        }
      }

      result = result + "\n" + servername[num] + " - " + nameTemp + "(Lv. " + leveltemp + ")\n직업 : " + finaljob + "\n";
    }
    replier.reply(result);
    return 0;
  }

  if (msg.indexOf("던담") == 3) {
    chk = chk.replace("던담", "");
    sw = 0;
  } else if (msg.indexOf("로젠") == 3) {
    chk = chk.replace("로젠", "");
    sw = 1;
  } else if (msg.indexOf("시스") == 3) {
    chk = chk.replace("시스", "");
    sw = 2;
  } else if (msg.indexOf("로코") == 3) {
    chk = chk.replace("로코", "");
    sw = 3;
  } else if (msg.indexOf("버프") == 3) {
    chk = chk.replace("버프", "");
    sw = 4;
  } else if (msg.indexOf("순위") == 3) {
    chk = chk.replace("순위", "");
    sw = 5;
  } else if (msg.indexOf("장비") == 3) {
    chk = chk.replace("장비", "");
    sw = 6;
  } else if (msg.indexOf("스칭") == 3) {
    chk = chk.replace("스칭", "");
    sw = 7;
  } else if (msg.indexOf("스탯") == 3) {
    chk = chk.replace("스탯", "");
    sw = 8;
  } else if (msg.indexOf("기린") == 3) {
    chk = chk.replace("기린", "");
    sw = 9;
  } else if (msg.indexOf("에픽") == 3) {
    chk = chk.replace("에픽", "");
    sw = 10;
  } else if (msg.indexOf("주간") == 3) {
    chk = chk.replace("주간", "");
    sw = 11;
  } else if (msg.indexOf("캐릭") == 3) {
    chk = chk.replace("캐릭", "");
    sw = 12;
  } else if (msg.indexOf("점수") == 3) {
    chk = chk.replace("점수", "");
    sw = 13;
  } else if (msg.indexOf("종합") == 3) {
    chk = chk.replace("종합", "");
    sw = 14;
  } else if (msg.indexOf("딜표") == 3) {
    chk = chk.replace("딜표", "");
    sw = 15;
  } else if (msg.indexOf("사진") == 3) {
    chk = chk.replace("사진", "");
    sw = 16;
  } else if (msg.indexOf("가치") == 3) {
    chk = chk.replace("가치", "");
    sw = 17;
  } else if (msg.indexOf("던조") == 3) {
    chk = chk.replace("던조", "");
    sw = 18;
  } else {
    sw = 19;
  }
  var count = 0;
  for (var i = 0; i < sevraw.length; i++) {
    if (chk == chtsev[i]) {
      var num = i;
    } else {
      count++;
    }
  }
  var ordchk = order.replace(chtsev[num], "");
  switch (sw) {

    case 0:
      if (ordchk == "!던담" && count == 8) {
        replier.reply("《캐릭터 검색 실패》\n서버명의 앞 두글자 및 캐릭터명을 기재해 주세요!");
        return 0;
      } else if (ordchk == "!던담" && count != 8 && msg.split("던담")[1] != "") {
        var url = encodeURIComponent(chrname);
        var data = Utils.getWebText("https://api.neople.co.kr/df/servers/" + sevraw[num] + "/characters?characterName=" + url + "&" + api);
        data = data.trim();
        if (data.indexOf("{\"rows\":[]}") != -1) {
          replier.reply("《캐릭터 검색 실패》\n" + chrname + " 님은 존재하지 않는 캐릭터 입니다!");
          return 0;
        }

        code = data.split("characterId\":\"")[1].split("\"")[0].trim();
        var rnd = Math.floor(Math.random() * 9000) + 1000;

        var info = "https://dundam.xyz/view40s?image=" + code + "&server=" + sevraw[num] + "&name=" + url + "&temp=" + rnd;

        var result = "《" + chrname + "님의 던담 검색》\n\n" + info;
        replier.reply(result);
      }
      break;

    case 1:
      if (ordchk == "!로젠" && count == 8) {
        replier.reply("《딜표 추출 실패》\n서버명의 앞 두글자 및 캐릭터명을 기재해 주세요!");
        return 0;
      } else if (ordchk == "!로젠" && count != 8 && msg.split("로젠")[1] != "") {
        /*if (msg.indexOf("로젠") != -1 && msg.indexOf("힐더") != -1 && msg.indexOf("단진") != -1 && msg.indexOf("!") != -1 && sender != "단진") {
          replier.reply("그 정보는 비공개입니다.");
          return 0;
        }*/
        var url = encodeURIComponent(chrname);
        var data = Utils.getWebText("https://api.neople.co.kr/df/servers/" + sevraw[num] + "/characters?characterName=" + url + "&" + api);
        data = data.trim();
        if (data.indexOf("{\"rows\":[]}") != -1) {
          replier.reply("《딜표 추출 실패》\n" + chrname + " 님은 존재하지 않는 캐릭터 입니다!");
          return 0;
        }

        replier.reply("현재 관리자의 요청에 의해 사용이 중단된 명령어입니다.");
        return 0;
        code = data.split("characterId\":\"")[1].split("\"")[0].trim();
        var info = Utils.getWebText("https://dundam.xyz/view.jsp?server=" + sevraw[num] + "&name=" + url + "&image=" + code + "&search=true&reloading=true");
        var dummy = info.split("<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-112985986-2\">")[1].split("<p align=\"center\"></p>")[0];
        info = info.replace(dummy, "");
        var temp = info.split("<div class=\"tab-pane fade in active\" id=\"rogen\">")[1];
        var temp2 = temp.split("<th style=\"background-color: #eeeeee; text-align: center; width: 33%\">")[2];
        var temp3 = temp.split("<th style=\"background-color: #eeeeee; text-align: center; width: 33%\">")[3];
        temp = temp.split("총 딜")[1];
        temp2 = temp2.split("</th>")[0];
        temp3 = temp3.split("</th>")[0];
        var dmg = temp.split("<td>")[1];
        var dmg2 = temp.split("<td>")[2];
        dmg = dmg.split("<")[0];
        dmg2 = dmg2.split("<")[0];
        dmg = dmg.trim();
        dmg2 = dmg2.trim();
        var job = info.replace(/(<([^>]+)>)/g, "").split(" / ")[1];

        Kakao.send(room, {
          "link_ver": "4.0",
          "template_id": 35312 ,
          "template_args": {
            "title": "《" + chrname + "님의 로젠 딜표》",
            "data0": "직업\n" + job,
            "data1": "",
            "data2": dmg + "\n" + dmg2,
            "data3": "",
            "head": "https://img-api.neople.co.kr/df/servers/" + sevraw[num] + "/characters/" + code + "?zoom=1",
            "img0": "https://img-api.neople.co.kr/df/servers/" + sevraw[num] + "/characters/" + code + "?zoom=3",
            "img1": logenimg
          }
        }, "custom");

        //var result = "《" + chrname + "님의 로젠 딜표》\n직업 : " + job + "\n" + temp2 + " : " + dmg + "\n" + temp3 + " : " + dmg2;
        //replier.reply(result);
      }
      break;

    case 2:
      if (ordchk == "!시스" && count == 8) {
        replier.reply("《딜표 추출 실패》\n서버명의 앞 두글자 및 캐릭터명을 기재해 주세요!");
        return 0;
      } else if (ordchk == "!시스" && count != 8 && msg.split("시스")[1] != "") {
        /*if (msg.indexOf("시스") != -1 && msg.indexOf("힐더") != -1 && msg.indexOf("단진") != -1 && msg.indexOf("!") != -1 && sender != "단진") {
          replier.reply("그 정보는 비공개입니다.");
          return 0;
        }*/
        var url = encodeURIComponent(chrname);
        var data = Utils.getWebText("https://api.neople.co.kr/df/servers/" + sevraw[num] + "/characters?characterName=" + url + "&" + api);
        data = data.trim();
        if (data.indexOf("{\"rows\":[]}") != -1) {
          replier.reply("《딜표 추출 실패》\n" + chrname + " 님은 존재하지 않는 캐릭터 입니다!");
          return 0;
        }

        replier.reply("현재 관리자의 요청에 의해 사용이 중단된 명령어입니다.");
        return 0;
        code = data.split("characterId\":\"")[1].split("\"")[0].trim();
        var info = Utils.getWebText("https://dundam.xyz/view.jsp?server=" + sevraw[num] + "&name=" + url + "&image=" + code + "&search=true&reloading=true");
        var dummy = info.split("<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-112985986-2\">")[1].split("<p align=\"center\"></p>")[0];
        info = info.replace(dummy, "");
        var temp = info.split("<div class=\"tab-pane fade\" id=\"prey\">")[1];
        var temp2 = temp.split("<th style=\"background-color: #eeeeee; text-align: center; width: 33%\">")[2];
        var temp3 = temp.split("<th style=\"background-color: #eeeeee; text-align: center; width: 33%\">")[3];
        temp = temp.split("총 딜")[1];
        temp2 = temp2.split("</th>")[0];
        temp3 = temp3.split("</th>")[0];
        var dmg = temp.split("<td>")[1];
        var dmg2 = temp.split("<td>")[2];
        dmg = dmg.split("<")[0];
        dmg2 = dmg2.split("<")[0];
        dmg = dmg.trim();
        dmg2 = dmg2.trim();
        var job = info.replace(/(<([^>]+)>)/g, "").split(" / ")[1];

        Kakao.send(room, {
          "link_ver": "4.0",
          "template_id": 35312 ,
          "template_args": {
            "title": "《" + chrname + "님의 이시스 딜표》",
            "data0": "직업\n" + job,
            "data1": "",
            "data2": dmg + "\n" + dmg2,
            "data3": "",
            "head": "https://img-api.neople.co.kr/df/servers/" + sevraw[num] + "/characters/" + code + "?zoom=1",
            "img0": "https://img-api.neople.co.kr/df/servers/" + sevraw[num] + "/characters/" + code + "?zoom=3",
            "img1": isisimg
          }
        }, "custom");

        //var result = "《" + chrname + "님의 이시스 딜표》\n직업 : " + job + "\n" + temp2 + " : " + dmg + "\n" + temp3 + " : " + dmg2;
        //replier.reply(result);
      }
      break;

    case 3:
      if (ordchk == "!로코" && count == 8) {
        replier.reply("《딜표 추출 실패》\n서버명의 앞 두글자 및 캐릭터명을 기재해 주세요!");
        return 0;
      } else if (ordchk == "!로코" && count != 8 && msg.split("로코")[1] != "") {
        /*if (msg.indexOf("로코") != -1 && msg.indexOf("힐더") != -1 && msg.indexOf("단진") != -1 && msg.indexOf("!") != -1 && sender != "단진") {
          replier.reply("그 정보는 비공개입니다.");
          return 0;
        }*/
        var url = encodeURIComponent(chrname);
        var data = Utils.getWebText("https://api.neople.co.kr/df/servers/" + sevraw[num] + "/characters?characterName=" + url + "&" + api);
        data = data.trim();
        if (data.indexOf("{\"rows\":[]}") != -1) {
          replier.reply("《딜표 추출 실패》\n" + chrname + " 님은 존재하지 않는 캐릭터 입니다!");
          return 0;
        }

        replier.reply("현재 관리자의 요청에 의해 사용이 중단된 명령어입니다.");
        return 0;
        code = data.split("characterId\":\"")[1].split("\"")[0].trim();
        var info = Utils.getWebText("https://dundam.xyz/view.jsp?server=" + sevraw[num] + "&name=" + url + "&image=" + code + "&search=true&reloading=true");
        var dummy = info.split("<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-112985986-2\">")[1].split("<p align=\"center\"></p>")[0];
        info = info.replace(dummy, "");
        var temp = info.split("<div class=\"tab-pane fade\" id=\"siroco\">")[1];
        var temp2 = temp.split("<th style=\"background-color: #eeeeee; text-align: center; width: 33%\">")[2];
        var temp3 = temp.split("<th style=\"background-color: #eeeeee; text-align: center; width: 33%\">")[3];
        temp = temp.split("총 딜")[1];
        temp2 = temp2.split("</th>")[0];
        temp3 = temp3.split("</th>")[0];
        var dmg = temp.split("<td>")[1];
        var dmg2 = temp.split("<td>")[2];
        dmg = dmg.split("<")[0];
        dmg2 = dmg2.split("<")[0];
        dmg = dmg.trim();
        dmg2 = dmg2.trim();
        var job = info.replace(/(<([^>]+)>)/g, "").split(" / ")[1];

        Kakao.send(room, {
          "link_ver": "4.0",
          "template_id": 35312 ,
          "template_args": {
            "title": "《" + chrname + "님의 시로코 딜표》",
            "data0": "직업\n" + job,
            "data1": "",
            "data2": dmg + "\n" + dmg2,
            "data3": "",
            "head": "https://img-api.neople.co.kr/df/servers/" + sevraw[num] + "/characters/" + code + "?zoom=1",
            "img0": "https://img-api.neople.co.kr/df/servers/" + sevraw[num] + "/characters/" + code + "?zoom=3",
            "img1": sirocoimg
          }
        }, "custom");

        //var result = "《" + chrname + "님의 시로코 딜표》\n직업 : " + job + "\n" + temp2 + " : " + dmg + "\n" + temp3 + " : " + dmg2;
        //replier.reply(result);
      }
      break;

    case 4:
      if (ordchk == "!버프" && count == 8) {
        replier.reply("《버프력 추출 실패》\n서버명의 앞 두글자 및 캐릭터명을 기재해 주세요!");
        return 0;
      } else if (ordchk == "!버프" && count != 8 && msg.split("버프")[1] != "") {
        var url = encodeURIComponent(chrname);
        var data = Utils.getWebText("https://api.neople.co.kr/df/servers/" + sevraw[num] + "/characters?characterName=" + url + "&" + api);
        data = data.trim();
        if (data.indexOf("{\"rows\":[]}") != -1) {
          replier.reply("《버프력 추출 실패》\n" + chrname + " 님은 존재하지 않는 캐릭터 입니다!");
          return 0;
        }

        replier.reply("현재 관리자의 요청에 의해 사용이 중단된 명령어입니다.");
        return 0;
        var code = data.split("characterId\":\"")[1].split("\"")[0].trim();
        var job = data.split("jobGrowName\":\"")[1].split("\"")[0].trim();
        var jname = data.split("jobName\":\"")[1].split("\"")[0].trim();
        if (job == "세인트" || job == "세라핌" || job == "헤카테" || job == "眞 크루세이더" || job == "眞 인챈트리스") {
          var info = Utils.getWebText("https://dundam.xyz/view.jsp?server=" + sevraw[num] + "&name=" + url + "&image=" + code + "&search=true&reloading=true");
          //var info = Utils.getWebText("https://dunfaoff.com/SearchResult.df?server=" + sevraw[num] + "&characterid=" + code + "#"); //던옵
          var dummy = info.split("<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-112985986-2\">")[1].split("<p align=\"center\"></p>")[0];
          info = info.replace(dummy, "");
          if (info.indexOf("버프 점수") != -1) {
            var stt = info.split("총 합")[1].split("<td>")[1].split("</td>")[0].replace("  ", " ");
            //var stt = info.split("총 힘")[2].split("bold;\">")[1].split("</a>")[0].replace(/<br>/g, "\n          "); //던옵
            var atk = info.split("총 합")[1].split("<td>")[3].split("</td>")[0].replace("  ", " ");
            //var atk = info.split("물공")[2].split("bold;\">")[1].split("</a>")[0].replace(/<br>/g, "\n          ");; //던옵
            var point = info.split("버프 점수")[1].split("<td colspan=\"5\">")[1].split("</td>")[0].replace(/\s/g, "");
            var offpoint = info.split("던오프")[1].split("<td colspan=\"5\">")[1].split("</td>")[0].replace(/\s/g, "");

            var face;
            var stat;
            var attack;
            var score;
            if (jname == "프리스트(여)") {
              face = "http://cdn.df.nexon.com/img/web/thum/category/category14.jpg";
              stat = "http://d-fighter.dn.nexoncdn.co.kr/samsungdnf/neople/swf/2019/skill/14/icon/086.png";
              attack = "http://d-fighter.dn.nexoncdn.co.kr/samsungdnf/neople/swf/2019/skill/14/icon/084.png";
              score = "http://d-fighter.dn.nexoncdn.co.kr/samsungdnf/neople/swf/2019/skill/14/icon/090.png";
            }
            if (jname == "마법사(여)") {
              face = "http://cdn.df.nexon.com/img/web/thum/category/category3.jpg";
              stat = "http://d-fighter.dn.nexoncdn.co.kr/samsungdnf/neople/swf/2019/skill/3/icon/708.png";
              attack = "http://d-fighter.dn.nexoncdn.co.kr/samsungdnf/neople/swf/2019/skill/3/icon/719.png";
              score = "http://d-fighter.dn.nexoncdn.co.kr/samsungdnf/neople/swf/2019/skill/3/icon/698.png";
            }
            if (jname == "프리스트(남)") {
              face = "http://cdn.df.nexon.com/img/web/thum/category/category4.jpg";
              stat = "http://d-fighter.dn.nexoncdn.co.kr/samsungdnf/neople/swf/2019/skill/4/icon/042.png";
              attack = "http://d-fighter.dn.nexoncdn.co.kr/samsungdnf/neople/swf/2019/skill/4/icon/112.png";
              score = "http://d-fighter.dn.nexoncdn.co.kr/samsungdnf/neople/swf/2019/skill/4/icon/214.png";
            }

            Kakao.send(room, {
              "link_ver": "4.0",
              "template_id": 35314 ,
              "template_args": {
                "title": "《" + chrname + "님의 버프력》",
                "data0": "직업",
                "data1": job,
                "data2": "스탯",
                "data3": stt,
                "data4": "공격력",
                "data5": atk,
                "data6": "버프 점수",
                "data7": point + " (" + offpoint + ")",
                "head": "https://img-api.neople.co.kr/df/servers/" + sevraw[num] + "/characters/" + code + "?zoom=1",
                "img0": face,
                "img1": stat,
                "img2": attack,
                "img3": score
              }
            }, "custom");

            //var result = "《" + chrname + "님의 버프력》\n직업 : " + job + "\n스탯 : " + stt + "\n공격력 : " + atk + "\n버프 점수 : " + point;
            //replier.reply(result);
            return 0;

          } else {
            replier.reply("《버프력 추출 실패》\n" + chrname + " 님은 현재 배틀 모드 입니다!");
            return 0;
          }
        } else {
          replier.reply("《버프력 추출 실패》\n" + chrname + " 님은 2차 각성 이상을 완료한 버퍼 캐릭터가 아닙니다!");
          return 0;
        }
      }
      break;

    case 5:
      if (ordchk == "!순위" && count == 8) {
        replier.reply("《순위 추출 실패》\n서버명의 앞 두글자 및 캐릭터명을 기재해 주세요!");
        return 0;
      } else if (ordchk == "!순위" && count != 8 && msg.split("순위")[1] != "") {
        /*if (msg.indexOf("순위") != -1 && msg.indexOf("힐더") != -1 && msg.indexOf("단진") != -1 && msg.indexOf("!") != -1 && sender != "단진") {
          replier.reply("그 정보는 비공개입니다.");
          return 0;
        }*/
        var url = encodeURIComponent(chrname);
        var data = Utils.getWebText("https://api.neople.co.kr/df/servers/" + sevraw[num] + "/characters?characterName=" + url + "&" + api);
        data = data.replace(/\"/gi, "").trim();
        if (data.indexOf("{rows:[]}") != -1) {
          replier.reply("《순위 검색 실패》\n" + chrname + " 님은 존재하지 않는 캐릭터 입니다!");
          return 0;
        }

        replier.reply("현재 관리자의 요청에 의해 사용이 중단된 명령어입니다.");
        return 0;
        code = data.split("characterId:")[1].split(",")[0];
        var info = Utils.getWebText("https://dundam.xyz/view.jsp?server=" + sevraw[num] + "&name=" + url + "&image=" + code + "&search=true&reloading=true");
        var dummy = info.split("<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-112985986-2\">")[1].split("<p align=\"center\"></p>")[0];
        info = info.replace(dummy, "").replace(/(<([^>]+)>)/g, "");
        var rank = info.split(" / ")[2].split("  ")[0];
        var job = info.split(" / ")[1];

        Kakao.send(room, {
          "link_ver": "4.0",
          "template_id": 35312 ,
          "template_args": {
            "title": "《" + chrname + "님의 순위》",
            "data0": "직업\n" + job,
            "data1": "",
            "data2": "순위\n" + rank,
            "data3": "",
            "head": "https://img-api.neople.co.kr/df/servers/" + sevraw[num] + "/characters/" + code + "?zoom=1",
            "img0": "https://img-api.neople.co.kr/df/servers/" + sevraw[num] + "/characters/" + code + "?zoom=3",
            "img1": ""
          }
        }, "custom");

        //var result = "《" + chrname + "님의 순위》\n직업 : " + job + "\n순위 : " + rank;
        //replier.reply(result);
      }
      break;

    case 6:
      if (ordchk == "!장비" && count == 8) {
        replier.reply("《캐릭터 장비 검색 실패》\n서버명의 앞 두글자 및 캐릭터명을 기재해 주세요!");
        return 0;
      } else if (ordchk == "!장비" && count != 8 && msg.split("장비")[1] != "") {
        /*if (msg.indexOf("장비") != -1 && msg.indexOf("힐더") != -1 && msg.indexOf("단진") != -1 && msg.indexOf("!") != -1 && sender != "단진") {
          replier.reply("그 정보는 비공개입니다.");
          return 0;
        }*/
        var url = encodeURIComponent(chrname);
        var base = "https://api.neople.co.kr/df/servers/" + sevraw[num] + "/characters";
        var data = Utils.getWebText(base + "?characterName=" + url + "&" + api);
        if (data.indexOf("{\"rows\":[]}") != -1) {
          replier.reply("《캐릭터 장비 검색 실패》\n" + chrname + " 님은 존재하지 않는 캐릭터 입니다!");
          return 0;
        }
        var level = data.split("level\":")[1].split(",")[0];
        code = data.split("characterId\":\"")[1].split("\"")[0].trim();
        base = base + "/" + code + "/equip/";
        var info = Utils.getWebText(base + "equipment?" + api);
        var creature = Utils.getWebText(base + "creature?" + api);
        var talisman = Utils.getWebText(base + "talisman?" + api);
        info = info.replace(/\"/gi, "");
        var job = info.split("jobName:")[1].split(",")[0];
        var grow = info.split("jobGrowName:")[1].split(",")[0];
        if (grow.indexOf("자각") != -1) {
          var finaljob = job + "(" + grow + ")";
        } else {
          var finaljob = grow;
        }
        if (info.indexOf("darkRevelation") != -1) {
          var dark = info.split("darkRevelation")[1].split("]}")[0];
          info = info.replace(dark, "");
        }
        if (info.indexOf("mythology") != -1) {
          var mytemp = info.split("mythology")[1].split("}]")[0];
          info = info.replace(mytemp, "");
        }
        if (info.indexOf("sirocoInfo") != -1) {
          var sirocolen = info.split("sirocoInfo");
          for (i = 0; i < sirocolen.length - 1; i++) {
            var sitemp = info.split("sirocoInfo")[1].split("}]")[0];
            var sitmetem = "sirocoInfo" + sitemp;
            info = info.replace(sitmetem, "");
          }
        }
        if (info.indexOf("setItemInfo") != -1) {
          var setiteminfo = info.split("setItemInfo")[1];
          info = info.replace(setiteminfo, "");
          setiteminfo = setiteminfo.split("</body>")[0];
        }
        creature = creature.replace(/\"/gi, "");
        talisman = talisman.replace(/\"/gi, "");
        var gld = info.split("guildName")[1];
        gld = gld.split(",")[0];
        gld = gld.replace(":", "");
        var adv = info.split("adventureName")[1];
        adv = adv.split(",")[0];
        adv = adv.replace(":", "");
        var result = "《" + chrname + "님의 장비 정보》" + "​".repeat(495) + "\nLv." + level + " " + finaljob + "\n모험단 : " + adv + "\n길드 : " + gld + "\n";
        var temp;
        var slot;
        var item;
        var set;
        var rein;
        var amp;
        var refi;
        var ect;
        var ectemp;
        var rare;
        var lencheck = info.split("{slotId");
        for (i = 0; i < lencheck.length - 1; i++) {
          temp = info.split("{slotId")[i + 1];
          slot = temp.split("slotName:")[1].split(",")[0];
          item = temp.split("itemName:")[1].split(",")[0];
          if (temp.indexOf("upgradeInfo") != -1) {
            var uptemtem = temp.split("upgradeInfo")[1].split("}")[0];
            var uptemp = "upgradeInfo" + uptemtem;
            temp = temp.replace(uptemp, "");
            uptemp = uptemp.split("itemName:")[1].split("}")[0];
            if (uptemp.indexOf("잔향") != -1) {
              uptemp = uptemp.replace("무형의 ", "");
            } else {
              uptemp = uptemp.split(" : ")[1].split("의")[0];
            }
            item = item + " + " + uptemp;
          }
          set = temp.split("setItemName:")[1].split(",")[0];
          rein = temp.split("reinforce:")[1].split(",")[0];
          amp = temp.split("amplificationName:")[1].split(",")[0];
          refi = temp.split("refine:")[1].split(",")[0];
          if (refi.indexOf("}") != -1) {
            refi = refi.replace("}", "");
          }
          if (refi.indexOf("]") != -1) {
            refi = refi.replace("]", "");
          }
          rare = temp.split("itemRarity:")[1].split(",")[0];
          ectemp = temp.split("enchant")[1];
          if (slot == "머리어깨") {
            slot = "어깨";
          } else if (slot == "보조장비") {
            slot = "보장";
          } else if (slot == "마법석") {
            slot = "법석";
          }
          if (amp.indexOf("}") != -1) {
            amp = amp.split("}")[0];
          }
          if (amp != "null") {
            amp = amp.replace("차원의 ", "");
          } else if (amp == "null") {
            amp = "강화";
          }
          if (ectemp != undefined) {
            if (ectemp.indexOf("status") != -1) {
              ectemp = ectemp.split("status")[1];
              var tp = ectemp.split("{");
            } else if (ectemp.indexOf("reinforceSkill") != -1) {
              ectemp = ectemp.split("reinforceSkill")[1];
              var tp = ectemp.split("skills");
            }
            var exp = "";
            for (var j = 0; j < tp.length - 1; j++) {
              var tmp = tp[j + 1];
              var name = tmp.split("name:")[1].split(",")[0];
              var value = tmp.split("value:")[1].split("}")[0];
              exp = exp + name + " +" + value;
              if (tp[j + 2] != undefined) {
                exp = exp + " / ";
              }
            }
            ect = exp;
          } else {
            ect = "null";
          }
          result = result + "\n" + slot + " : " + item;
          if (amp != "강화") {
            result = result + " (+" + rein + " " + amp;
            if (refi != 0) {
              result = result + " / " + refi + "재련)";
            } else {
              result = result + ")";
            }
          } else {
            if (rein != 0) {
              if (item.indexOf("원초") != -1) {
                amp = "개조";
              }
              result = result + " (+" + rein + " " + amp;
              if (refi != 0) {
                result = result + " / " + refi + "재련)";
              } else {
                result = result + ")";
              }
            }
          }
          if (rare == "신화") {
            result = result + " <- 기린템";
          }
          if (ect != "null") {
            result = result + "\n[ " + ect + " ]";
          }
          if (set != "null") {
            result = result + "\n(" + set + ")";
          }
          result = result + "\n";

        }
        if (setiteminfo != undefined && setiteminfo != ":[]}\n ") {
          var sii = setiteminfo.split("setItemId");
          var setname;
          var actno;
          result = result + "\n\n현재 적용중인 세트 효과";
          for (i = 0; i < sii.length - 1; i++) {
            temp = sii[i + 1];
            setname = temp.split("setItemName:")[1].split(",")[0];
            actno = temp.split("activeSetNo:")[1].split("}")[0];
            result = result + "\n└" + setname + " : " + actno + " 부위";
          }
        }
        var crt = creature.split("itemName:")[1];
        if (crt != undefined) {
          crt = crt.split(",")[0];
          result = result + "\n\n크리쳐 : " + crt;
        }
        var tcheck = talisman.split("talismans:")[1].split("}]}")[0];
        if (tcheck != "null") {
          var lencheck = talisman.split("talisman:");
          for (var i = 0; i < lencheck.length - 1; i++) {
            var talnum = i + 1;
            result = result + "\n\n탈리스만 " + talnum + "\n";
            var run = lencheck[talnum].split("runes:")[1].split("}]")[0];
            lencheck[talnum] = lencheck[talnum].replace(run, "");
            var talname = lencheck[talnum].split("itemName:")[1].split(",")[0];
            result = result + talname;
            var runtype = lencheck[talnum].split("runeTypes:")[1].split("}")[0];
            if (runtype != "null") {
              result = result + "\n" + runtype;
            }
            result = result + "\n룬\n";
            var runlen = run.split("slotNo:");
            for (var j = 0; j < runlen.length; j++) {
              var rune = runlen[j].split("itemName:")[1];
              if (rune != undefined) {
                rune = rune.split("]")[0];
                result = result + rune + "]\n";
              }
            }
          }
        }
        replier.reply(result);
      }
      break;

    case 7:
      if (ordchk == "!스칭" && count == 8) {
        replier.reply("《캐릭터 스위칭 검색 실패》\n서버명의 앞 두글자 및 캐릭터명을 기재해 주세요!");
        return 0;
      } else if (ordchk == "!스칭" && count != 8 && msg.split("스칭")[1] != "") {
        var url = encodeURIComponent(chrname);
        var base = "https://api.neople.co.kr/df/servers/" + sevraw[num] + "/characters";
        var data = Utils.getWebText(base + "?characterName=" + url + "&" + api);
        if (data.indexOf("{\"rows\":[]}") != -1) {
          replier.reply("《캐릭터 스위칭 검색 실패》\n" + chrname + " 님은 존재하지 않는 캐릭터 입니다!");
          return 0;
        }
        var result = "《" + chrname + "님의 스위칭 정보》\n";
        code = data.split("characterId\":\"")[1].split("\"")[0].trim();
        base = base + "/" + code + "/skill/buff/equip/";
        var info = Utils.getWebText(base + "equipment?" + api);
        var creature = Utils.getWebText(base + "creature?" + api);
        var avatar = Utils.getWebText(base + "avatar?" + api);
        info = info.replace(/\"/gi, "");
        if (info.indexOf("darkRevelation") != -1) {
          var dark = info.split("darkRevelation")[1].split("]}")[0];
          info = info.replace(dark, "");
        }
        if (info.indexOf("mythology") != -1) {
          var mytemp = info.split("mythology")[1].split("}]}}")[0];
          info = info.replace(mytemp, "");
        }
        if (info.indexOf("sirocoInfo") != -1) {
          var sirocolen = info.split("sirocoInfo");
          for (i = 0; i < sirocolen.length - 1; i++) {
            var sitemp = info.split("sirocoInfo")[1].split("}]")[0];
            var sitmetem = "sirocoInfo" + sitemp;
            info = info.replace(sitmetem, "");
          }
        }
        if (info.indexOf("setItemInfo") != -1) {
          var setiteminfo = info.split("setItemInfo")[1];
          info = info.replace(setiteminfo, "");
        }
        creature = creature.replace(/\"/gi, "");
        avatar = avatar.replace(/\"/gi, "");
        var buffname = info.split("buff:")[1].split("name:")[1];
        var level = buffname.split("level:")[1].split(",")[0];
        buffname = buffname.split(",")[0];
        result = result + buffname + " (" + level + " Lv)" + "​".repeat(495) + "\n";
        var temp;
        var slot;
        var item;
        var set;
        var rein;
        var amp;
        var refi;
        var ect;
        var ectemp;
        var lencheck = info.split("{slotId");
        for (i = 0; i < lencheck.length - 1; i++) {
          temp = info.split("{slotId")[i + 1];
          slot = temp.split("slotName:")[1].split(",")[0];
          item = temp.split("itemName:")[1].split(",")[0];
          if (temp.indexOf("upgradeInfo") != -1) {
            var uptemtem = temp.split("upgradeInfo")[1].split("}")[0];
            var uptemp = "upgradeInfo" + uptemtem;
            temp = temp.replace(uptemp, "");
            uptemp = uptemp.split("itemName:")[1].split("}")[0];
            item = item + " + " + uptemp;
          }
          set = temp.split("setItemName:")[1].split(",")[0];
          rein = temp.split("reinforce:")[1].split(",")[0];
          amp = temp.split("amplificationName:")[1].split(",")[0];
          refi = temp.split("refine:")[1].split(",")[0];
          if (refi.indexOf("}") != -1) {
            refi = refi.replace("}", "");
          }
          ectemp = temp.split("enchant")[1];
          if (slot == "머리어깨") {
            slot = "어깨";
          } else if (slot == "보조장비") {
            slot = "보장";
          } else if (slot == "마법석") {
            slot = "법석";
          }
          if (amp.indexOf("}") != -1) {
            amp = amp.split("}")[0];
          }
          if (amp != "null") {
            amp = amp.replace("차원의 ", "");
          } else if (amp == "null") {
            amp = "강화";
          }
          if (ectemp != undefined) {
            if (ectemp.indexOf("status") != -1) {
              ectemp = ectemp.split("status")[1];
              var tp = ectemp.split("{");
            } else if (ectemp.indexOf("reinforceSkill") != -1) {
              ectemp = ectemp.split("reinforceSkill")[1];
              var tp = ectemp.split("skills");
            }
            var exp = "";
            for (var j = 0; j < tp.length - 1; j++) {
              var tmp = tp[j + 1];
              var name = tmp.split("name:")[1].split(",")[0];
              var value = tmp.split("value:")[1].split("}")[0];
              exp = exp + name + " +" + value;
              if (tp[j + 2] != undefined) {
                exp = exp + " / ";
              }
            }
            ect = exp;
          } else {
            ect = "null";
          }
          result = result + "\n" + slot + " : " + item;
          if (amp != "강화") {
            result = result + "(+" + rein + " " + amp;
            if (refi != 0) {
              result = result + " / " + refi + "재련)";
            } else {
              result = result + ")";
            }
          } else {
            if (rein != 0) {
              result = result + "(+" + rein + " " + amp;
              if (refi != 0) {
                result = result + " / " + refi + "재련)";
              } else {
                result = result + ")";
              }
            }
          }
          if (ect != "null") {
            result = result + "\n[ " + ect + " ]";
          }
          if (set != "null") {
            result = result + "\n(" + set + ")";
          }
          if (slot == "무기" || slot == "칭호" || slot == "허리" || slot == "반지") {
            result = result + "\n";
          }
        }
        var crt = creature.split("itemName:")[1];
        var crtlvup;
        if (crt != undefined) {
          if (crt.indexOf("levelupCondition") != -1) {
            crtlvup = crt.split("levelupCondition:")[1];
            crtlvup = crtlvup.split("}")[0];
          }
          crt = crt.split(",")[0];
          result = result + "\n\n크리쳐 : " + crt;
          if (crtlvup != null || crtlvup != undefined) {
            result = result + "\n" + crtlvup;
          }
        }
        var avt = avatar.split("avatar:")[1].split("}")[0];
        if (avt != undefined && avt != "null") {
          result = result + "\n\n아바타";
          var rare;
          var option;
          var emblem;
          lencheck = avatar.split("{slotId");
          for (i = 0; i < lencheck.length - 1; i++) {
            temp = avatar.split("{slotId")[i + 1];
            slot = temp.split("slotName:")[1].split(",")[0].replace(" 아바타", "");
            item = temp.split("itemName:")[1].split(",")[0];
            rare = temp.split("itemRarity:")[1].split(",")[0];
            option = temp.split("optionAbility:")[1].split(",")[0];
            emblem = temp.split("emblems:[")[1];
            ectemp = emblem.split("]")[0];
            if (ectemp != undefined && ectemp != null) {
              emblem = emblem.split("}]}")[0];
              var tp = emblem.split("slotNo:");
              var exp = "";
              for (var j = 0; j < tp.length - 1; j++) {
                var tmp = tp[j + 1];
                var name = tmp.split("itemName:")[1].split(",")[0];
                exp = exp + name;
                if (tp[j + 2] != undefined) {
                  exp = exp + " / ";
                }
              }
              ect = exp;
            } else {
              ect = "null";
            }
            result = result + "\n" + slot + " : " + item + " (" + rare + ")";
            if (option != "null") {
              result = result + "\n -" + option;
            } else {
              result = result + "\n -옵션 없음";
            }
            if (ect != "null") {
              result = result + "\n└" + ect + "\n";
            }
          }
        }
        replier.reply(result);
      }
      break;

    case 8:
      if (ordchk == "!스탯" && count == 8) {
        replier.reply("《캐릭터 스탯 검색 실패》\n서버명의 앞 두글자 및 캐릭터명을 기재해 주세요!");
        return 0;
      } else if (ordchk == "!스탯" && count != 8 && msg.split("스탯")[1] != "") {
        var url = encodeURIComponent(chrname);
        var base = "https://api.neople.co.kr/df/servers/" + sevraw[num];
        var data = Utils.getWebText(base + "/characters?characterName=" + url + "&" + api);
        if (data == "{\"rows\":[]}") {
          replier.reply("《캐릭터 정보 검색 실패》\n" + chrname + " 님은 존재하지 않는 캐릭터 입니다!");
          return 0;
        }
        code = data.split("characterId\":\"")[1].split("\"")[0].trim();
        var info = Utils.getWebText(base + "/characters/" + code + "/status?" + api);
        info = info.replace(/\"/gi, "");
        var status = new Array("HP", "MP", "힘", "지능", "체력", "정신력", "물리 공격", "마법 공격", "독립 공격", "물리 크리", "마법 크리", "공격 속도", "캐스팅 속도", "이동 속도", "항마", "화속강", "수속강", "명속강", "암속강");
        var value = new Array();
        var cutting = new Array("모험단 버프", "무제한 길드능력치", "기간제 길드능력치");
        var cut;
        var cuttemp;
        for (var i = 0; i < cutting.length; i++) {
          if (info.indexOf(cutting[i]) != -1) {
            cuttemp = "name:" + cutting[i];
            cut = info.split(cuttemp)[1].split("]")[0];
            info = info.replace(cut, "").replace(cuttemp, "");
          }
        }
        var del = new Array("물리 방어", "마법 방어", "적중률", "회피율", "HP 회복량", "MP 회복량", "경직도", "히트리커버리", "화속성 저항", "수속성 저항", "명속성 저항", "암속성 저항");
        var deltemp;
        for (var j = 0; j < del.length; j++) {
          deltemp = "name:" + del[j];
          cut = info.split(deltemp)[1].split("}")[0];
          deltemp = deltemp + cut;
          info = info.replace(deltemp, "");
        }
        var temp;
        var stat = info.split("status")[1];
        for (i = 0; i < status.length; i++) {
          temp = stat.split("value")[i + 1].split("}")[0].replace(":", "");
          value[i] = temp;
        }
        var level = info.split("level:")[1].split(",")[0];
        var chrinfo = info.split("status")[0];
        var gld = chrinfo.split("guildName:")[1].split(",")[0];
        var adv = chrinfo.split("adventureName:")[1].split(",")[0];
        var job = chrinfo.split("jobName:")[1].split(",")[0];
        var grow = chrinfo.split("jobGrowName:")[1].split(",")[0];
        if (grow.indexOf("자각") != -1) {
          var finaljob = job + "(" + grow + ")";
        } else {
          var finaljob = grow;
        }
        var result = "《" + chrname + "님의 캐릭 정보》" + "​".repeat(495) + "\n레벨 : " + level + "\n직업 : " + finaljob + "\n모험단 : " + adv + "\n길드 : " + gld + "\n";
        for (i = 0; i < status.length; i++) {
          result = result + status[i] + " : " + value[i] + "\n";
        }
        result = result + "(모험단 및 길드 스탯 적용 기준)";
        replier.reply(result);
      }
      break;

    case 9:
      if (ordchk == "!기린" && count == 8) {
        replier.reply("《기린력 측정 실패》\n서버명의 앞 두글자 및 캐릭터명을 기재해 주세요!");
        return 0;
      } else if (ordchk == "!기린" && count != 8 && msg.split("기린")[1] != "") {
        var url = encodeURIComponent(chrname);
        var base = "https://api.neople.co.kr/df/servers/" + sevraw[num];
        var data = Utils.getWebText(base + "/characters?characterName=" + url + "&" + api);
        if (data.indexOf("{rows:[]}") != -1) {
          replier.reply("《기린력 측정 실패》\n" + chrname + " 님은 존재하지 않는 캐릭터 입니다!");
          return 0;
        }
        code = data.split("characterId\":\"")[1].split("\"")[0].trim();

        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var hh = date.getHours();
        var mm = date.getMinutes();

        if (m < 10) {
            m = '0' + m;
        }
        if (d < 10) {
            d = '0' + d;
        }
        if (hh < 10) {
            hh = '0' + hh;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var today = y + "" + m + "" + d + "T" + hh + mm;

        var webpast = Utils.getWebText("https://m.search.daum.net/search?nil_profile=btn&w=tot&DA=SBC&q=%EB%82%A0%EC%A7%9C+%EA%B3%84%EC%82%B0%EA%B8%B0");
        webpast = webpast.split("txtResultDateDday")[1].split(">")[1].split("<")[0];
        var year = webpast.split(".")[0];
        var month = webpast.split(".")[1] - 1;
        var day = webpast.split(".")[2];
        date = new Date(year, month, day);
        date.setDate(date.getDate() + 10);
        y = date.getFullYear();
        m = date.getMonth() + 1;
        d = date.getDate();
        hh = date.getHours();
        mm = date.getMinutes();

        if (m < 10) {
            m = '0' + m;
        }
        if (d < 10) {
            d = '0' + d;
        }
        if (hh < 10) {
            hh = '0' + hh;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var past = y + "" + m + "" + d + "T" + hh + mm;       

        var parsingurl = base + "/characters/" + code + "/timeline?limit=100&code=505,513&startDate=" + past + "&endDate=" + today + "&" + api;
        var x = 0;
        while (x == 0) {
            var TimeLine = Utils.getWebText(parsingurl);
            if (TimeLine != null && TimeLine != undefined) {
                x = 1;
            }
        }
        TimeLine = TimeLine.replace(/\"/gi, "");

        var chrinfo = TimeLine.split("timeline")[0];
        var gld = chrinfo.split("guildName:")[1].split(",")[0];
        var adv = chrinfo.split("adventureName:")[1].split(",")[0];
        var job = chrinfo.split("jobName:")[1].split(",")[0];
        var grow = chrinfo.split("jobGrowName:")[1].split(",")[0];
        
        if (grow.indexOf("자각") != -1) {
            var finaljob = job + "(" + grow + ")";
        } else {
            var finaljob = grow;
        }

        var indo = 0;
        var sin = 0;
        var ji = 0;
        var sinji = 0;
        var ohkhul = 0;
        var sinhwa = 0;
        if (TimeLine.indexOf("지혜의 인도") != -1) {
          indo = TimeLine.match(/지혜의 인도/g).length;
        }
        if (TimeLine.indexOf("검은 신전") != -1) {
          sin = TimeLine.match(/검은 신전/g).length;
        }
        if (TimeLine.indexOf("고통의 지하실") != -1) {
          ji = TimeLine.match(/고통의 지하실/g).length;
        }
        sinji = sin + ji;
        if (TimeLine.indexOf("더 오큘러스") != -1) {
          ohkhul = TimeLine.match(/더 오큘러스/g).length;
        }
        if (TimeLine.indexOf("신화") != -1) {
          sinhwa = TimeLine.match(/신화/g).length;
        }

        var next = TimeLine.split("next:")[1].split(",")[0];
        while (next != "null") {
          parsingurl = base + "/characters/" + code + "/timeline?next=" + next + "&" + api;
          var x = 0;
          while (x == 0) {
              var TimeLine = Utils.getWebText(parsingurl);
              if (TimeLine != null && TimeLine != undefined) {
                  x = 1;
              }
          }
          TimeLine = TimeLine.replace(/\"/gi, "");

          var indotemp = 0;
          var sintemp = 0;
          var jitemp = 0;
          var sinjitemp = 0;
          var ohkhultemp = 0;
          var sinhwatemp = 0;
          if (TimeLine.indexOf("지혜의 인도") != -1) {
            indotemp = TimeLine.match(/지혜의 인도/g).length;
          }
          if (TimeLine.indexOf("검은 신전") != -1) {
            sintemp = TimeLine.match(/검은 신전/g).length;
          }
          if (TimeLine.indexOf("고통의 지하실") != -1) {
            jitemp = TimeLine.match(/고통의 지하실/g).length;
          }
          sinjitemp = sintemp + jitemp;
          if (TimeLine.indexOf("더 오큘러스") != -1) {
            ohkhultemp = TimeLine.match(/더 오큘러스/g).length;
          }
          if (TimeLine.indexOf("신화") != -1) {
            sinhwatemp = TimeLine.match(/신화/g).length;
          }

          indo = indo + indotemp;
          sinji = sinji + sinjitemp;
          ohkhul = ohkhul + ohkhultemp;
          sinhwa = sinhwa + sinhwatemp;

          next = TimeLine.split("next:")[1].split(",")[0];
        }

        var result = "《" + chrname + "님의 기린력》\n직업 : " + finaljob + "\n모험단 : " + adv + "\n길드 : " + gld + "\n\n지혜의 인도 : " + indo + "개\n검은 신전 / 고통의 지하실 : " + sinji + "개\n\n더 오큘러스 : " + ohkhul + "개\n\n획득한 신화 : " + sinhwa + "개";

        replier.reply(result);
      }
      break;

    case 10:
      if (ordchk == "!에픽" && count == 8) {
        replier.reply("《획득 에픽 검색 실패》\n서버명의 앞 두글자 및 캐릭터명을 기재해 주세요!");
        return 0;
      } else if (ordchk == "!에픽" && count != 8 && msg.split("에픽")[1] != "") {
        var url = encodeURIComponent(chrname);
        var base = "https://api.neople.co.kr/df/servers/" + sevraw[num];
        var data = Utils.getWebText(base + "/characters?characterName=" + url + "&" + api);
        if (data.indexOf("{rows:[]}") != -1) {
          replier.reply("《획득 에픽 검색 실패》\n" + chrname + " 님은 존재하지 않는 캐릭터 입니다!");
          return 0;
        }
        code = data.split("characterId\":\"")[1].split("\"")[0].trim();

        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var tm = m;
        var td = d;
        var hh = date.getHours();
        var mm = date.getMinutes();

        if (tm < 10) {
            tm = '0' + tm;
        }
        if (td < 10) {
            td = '0' + td;
        }
        if (hh < 10) {
            hh = '0' + hh;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }

        var today = y + "" + tm + "" + td + "T" + hh + mm;

        var changeday = date.getDay() + 3;
        if (changeday > 6) {
            changeday = changeday - 7;
        }
        d = d - changeday;
        if (d <= 0) {
            m = m - 1;
            if (m == 0 || m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
                d = d + 31;
                if (m == 0) {
                    m = 12;
                }
            } else if (m == 2) {
                d = d + 28;
            } else {
                d = d + 30;
            }
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (d < 10) {
            d = '0' + d;
        }

        var thursday = y + "" + m + "" + d + "T0600";
        var parsingurl = base + "/characters/" + code + "/timeline?&code=505,513&startDate=" + thursday + "&endDate=" + today + "&" + api;
        var x = 0;
        while (x == 0) {
            var TimeLine = Utils.getWebText(parsingurl);
            if (TimeLine != null && TimeLine != undefined) {
                x = 1;
            }
        }
        TimeLine = TimeLine.replace(/\"/gi, "");

        var chrinfo = TimeLine.split("timeline")[0];
        var gld = chrinfo.split("guildName")[1].split("\,")[0].replace("\:","");
        var adv = chrinfo.split("adventureName")[1].split("\,")[0].replace("\:","");
        var job = chrinfo.split("jobName")[1].split("\,")[0].replace("\:","");
        var grow = chrinfo.split("jobGrowName")[1].split("\,")[0].replace("\:","");

        if (grow.indexOf("자각") != -1) {
            var finaljob = job + "(" + grow + ")";
        } else {
            var finaljob = grow;
        }

        var indo = 0;
        var sin = 0;
        var ji = 0;
        var sinji = 0;
        var ohkhul = 0;
        var sinhwa = 0;
        if (TimeLine.indexOf("지혜의 인도") != -1) {
          indo = TimeLine.match(/지혜의 인도/g).length;
        }
        if (TimeLine.indexOf("검은 신전") != -1) {
          sin = TimeLine.match(/검은 신전/g).length;
        }
        if (TimeLine.indexOf("고통의 지하실") != -1) {
          ji = TimeLine.match(/고통의 지하실/g).length;
        }
        sinji = sin + ji;
        if (TimeLine.indexOf("더 오큘러스") != -1) {
          ohkhul = TimeLine.match(/더 오큘러스/g).length;
        }
        if (TimeLine.indexOf("신화") != -1) {
          sinhwa = TimeLine.match(/신화/g).length;
        }

        var result = "《" + chrname + "님의 이번주 에픽》\n직업 : " + finaljob + "\n모험단 : " + adv + "\n길드 : " + gld + "\n\n지혜의 인도 : " + indo + "개\n검은 신전 / 고통의 지하실 : " + sinji + "개\n\n더 오큘러스 : " + ohkhul + "개\n\n획득한 신화 : " + sinhwa + "개";

        replier.reply(result);
      }
      break;

    case 11:
      if (ordchk == "!주간" && count == 8) {
        replier.reply("《주간던전 정보조회 실패》\n서버명의 앞 두글자 및 캐릭터명을 기재해 주세요!");
        return 0;
      } else if (ordchk == "!주간" && count != 8 && msg.split("주간")[1] != "") {
        var url = encodeURIComponent(chrname);
        var base = "https://api.neople.co.kr/df/servers/" + sevraw[num];
        var data = Utils.getWebText(base + "/characters?characterName=" + url + "&" + api);
        if (data.indexOf("{rows:[]}") != -1) {
          replier.reply("《주간던전 정보조회 실패》\n" + chrname + " 님은 존재하지 않는 캐릭터 입니다!");
          return 0;
        }
        code = data.split("characterId\":\"")[1].split("\"")[0].trim();

        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var tm = m;
        var td = d;
        var hh = date.getHours();
        var mm = date.getMinutes();

        if (tm < 10) {
            tm = '0' + tm;
        }
        if (td < 10) {
            td = '0' + td;
        }
        if (hh < 10) {
            hh = '0' + hh;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }

        var today = y + "" + tm + "" + td + "T" + hh + mm;

        var changeday = date.getDay() + 3;
        if (changeday > 6) {
            changeday = changeday - 7;
        }
        d = d - changeday;
        if (d <= 0) {
            m = m - 1;
            if (m == 0 || m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
                d = d + 31;
                if (m == 0) {
                    m = 12;
                }
            } else if (m == 2) {
                d = d + 28;
            } else {
                d = d + 30;
            }
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (d < 10) {
            d = '0' + d;
        }

        var thursday = y + "" + m + "" + d + "T0600";
        var parsingurl = base + "/characters/" + code + "/timeline?" + "&code=201,207" + "&startDate=" + thursday + "&endDate=" + today + "&" + api;
        var x = 0;
        while (x == 0) {
            var TimeLine = Utils.getWebText(parsingurl);
            if (TimeLine != null && TimeLine != undefined) {
                x = 1;
            }
        }
        TimeLine = TimeLine.replace(/\"/gi, "");

        var chrinfo = TimeLine.split("timeline")[0];
        var gld = chrinfo.split("guildName:")[1].split(",")[0];
        var adv = chrinfo.split("adventureName:")[1].split(",")[0];
        var job = chrinfo.split("jobName:")[1].split(",")[0];
        var grow = chrinfo.split("jobGrowName:")[1].split(",")[0];

        if (grow.indexOf("자각") != -1) {
            var finaljob = job + "(" + grow + ")";
        } else {
            var finaljob = grow;
        }

        var feind = 0;
        var isis = 0;
        for (var i = 0; i < 3; i++) {
            if (TimeLine.indexOf("핀드워") != -1) {
                TimeLine = TimeLine.replace("핀드워", "");
                feind++;
            }
            if (TimeLine.indexOf("이시스") != -1) {
                TimeLine = TimeLine.replace("이시스", "");
                isis++;
            }
        }

        feind = 2 - feind;
        isis = 2 - isis;
        var result = "《" + chrname + "님의 주간던전 정보》\n직업 : " + finaljob + "\n모험단 : " + adv + "\n길드 : " + gld + "\n\n이시스 : " + isis + "/2\n" + "핀드 : " + feind + "/2";

        replier.reply(result);
      }
      break;

    case 12:
      if (ordchk == "!캐릭" && count == 8) {
        replier.reply("《캐릭터 이미지 검색 실패》\n서버명의 앞 두글자 및 캐릭터명을 기재해 주세요!");
        return 0;
      } else if (ordchk == "!캐릭" && count != 8 && msg.split("캐릭")[1] != "") {
        var url = encodeURIComponent(chrname);
        var base = "https://api.neople.co.kr/df/servers/" + sevraw[num];
        var data = Utils.getWebText(base + "/characters?characterName=" + url + "&" + api);
        if (data.indexOf("{\"rows\":[]}") != -1) {
          replier.reply("《캐릭터 이미지 검색 실패》\n" + chrname + " 님은 존재하지 않는 캐릭터 입니다!");
          return 0;
        }
        code = data.split("characterId\":\"")[1].split("\"")[0].trim();
        var job = data.split("jobName\":\"")[1].split("\"")[0];
        var grow = data.split("jobGrowName\":\"")[1].split("\"")[0];
        var level = data.split("level\":")[1].split(",")[0];
        data = Utils.getWebText(base + "/characters/" + code + "?" + api);
        var gld = data.split("guildName\":")[1].split("}")[0].replace(/\"/gi, "");
        if (gld == "null") {
          gld = "없음";
        }
        var adv = data.split("adventureName\":")[1].split(",")[0].replace(/\"/gi, "");

        if (grow.indexOf("자각") != -1) {
            var finaljob = job + "(" + grow + ")";
        } else {
            var finaljob = grow;
        }

        for (var i = 0; i < jobvalue.length; i++) {
          if (job == jobvalue[i]) {
            var profileimg = "http://cdn.df.nexon.com/img/web/thum/category/category" + i + ".jpg";
          }
        }

        Kakao.send(room, {
          "link_ver": "4.0",
          "template_id": 44727 ,
          "template_args": {
            "title": "《" + chrname + "님의 캐릭터 이미지》",
            "profile_name": "Lv." + level + " " + finaljob,
            "des": "모험단 : " + adv + "\n길드 : " + gld,
            "img": "https://img-api.neople.co.kr/df/servers/" + sevraw[num] + "/characters/" + code + "?zoom=1",
            "profile_img": profileimg
          }
        }, "custom");

        /*replier.reply("《" + chrname + "님의 캐릭 이미지》\nLv." + level + " " + finaljob + "\n모험단 : " + adv + "\n길드 : " + gld + "\n\nhttps://img-api.neople.co.kr/df/servers/" + sevraw[num] + "/characters/" + code + "?zoom=2");*/
        return 0;
      }
      break;

    case 13:
      if (ordchk == "!점수" && count == 8) {
        replier.reply("《기린 점수 검색 실패》\n서버명의 앞 두글자 및 캐릭터명을 기재해 주세요!");
        return 0;
      } else if (ordchk == "!점수" && count != 8 && msg.split("점수")[1] != "") {
        var url = encodeURIComponent(chrname);
        var url2 = encodeURIComponent(servername[num]);
        var data = Utils.getWebText("http://duntoki.xyz/giraffe?serverNm=" + url2 + "&charNm=" + url).replace(/\"/gi, "");
        if (data.indexOf("존재하지 않는 캐릭터입니다.") != -1) {
          replier.reply("《기린 점수 검색 실패》\n" + chrname + " 님은 존재하지 않는 캐릭터 입니다!");
          return 0;
        }
        var score = data.split("현재 스코어")[1].split("<td>")[2].split("<")[0];
        var lencheck = data.split("대비");
        if (lencheck.length > 2) {
          var updown = data.split("변동계산")[1].split("대비")[1].split("<")[0].replace(/\s/g, "").replace("점", "점 ");
        } else {
          var updown = data.split("변동계산")[1].split(">")[1].split("<")[0].replace(/\s/g, "").replace("점", "점 ");
        }

        var epic = data.split("기타 경로")[1].split("<td>")[1].split("<")[0];
        var indo = data.split("기타 경로")[1].split("<td>")[2].split("<")[0];
        var etc = data.split("기타 경로")[1].split("<td>")[3].split("<")[0];
        
        var first = data.split("드랍산물")[1].split("<td>")[1].split("<")[0];
        var sinhwa = data.split("드랍산물")[1].split("<td>")[2].split("<")[0];
        var sanmul = data.split("드랍산물")[1].split("<td>")[3].split("<")[0];

        var dogam = data.split("수집률")[1].split("<td>")[1].split("<")[0];
        var siroraid = data.split("수집률")[1].split("<td>")[2].split("<")[0];
        var zan = data.split("수집률")[1].split("<td>")[3].split("<")[0];

        var best1 = data.split("던생")[1].split("<td>")[1].split("<")[0];
        var best2 = data.split("던생")[1].split("<td>")[2].split("<")[0];

        if (updown == "지난조회결과가없습니다.") {
          updown = "이전 조회값 없음";
        }

        var udimg = "https://cdn.discordapp.com/attachments/778559127273734165/807532995061088276/iconfinder_Minus_1084553.png";
        if (updown.indexOf("상승") != -1) {
          udimg = "https://cdn.discordapp.com/attachments/778559127273734165/807532991474565140/1.png";
        } else if (updown.indexOf("하락") != -1) {
          udimg = "https://cdn.discordapp.com/attachments/778559127273734165/807532993513259008/2.png";
        }

        if (first.indexOf("ㅠㅠ") != -1) {
          first = first.replace("못 먹었어요", "");
        } else {
          first = first.replace("에 득템!", "");
        }

        Kakao.send(room, {
          "link_ver": "4.0",
          "template_id": 35315 ,
          "template_args": {
            "title": "《" + chrname + "님의 기린 점수》",
            "data0": "현재 점수 : " + score,
            "data1": "변동 : " + updown,
            "data2": "수집률 : " + dogam + "\n총 에픽 : " + epic,
            "data3": "",
            "data4": "지혜의 인도 : " + indo + "\n기타 경로 : " + etc,
            "data5": "최고득 : " + best1 + " (" + best2 + ")",
            "data6": "첫 신화 :" + first + "\n총 신화 : " + sinhwa,
            "data7": "드랍 산물 : " + sanmul,
            "data8": "시로코 골카 : " + siroraid,
            "data9": "잔향 여부 : " + zan,
            "img0": udimg,
            "img1": "https://cdn.discordapp.com/attachments/778559127273734165/807540710261260288/48.png",
            "img2": "https://cdn.discordapp.com/attachments/778559127273734165/807543867988770816/000610_599eeb6298d8e.png",
            "img3": "https://img-api.neople.co.kr/df/items/e98db581d86ffc2098c66049b019cf83",
            "img4": sirocoimg
          }
        }, "custom");

        /*var result = "《" + chrname + "님의 기린 점수》\n현재 점수 : " + score + "\n변동 : " + updown + "\n\n수집률 : " + dogam + "\n" + "​".repeat(495) + "\n총 에픽 : " + epic + "\n지혜의 인도 : " + indo + "\n기타 경로 : " + etc + "\n\n첫번째 신화 : " + first + "\n총 신화 : " + sinhwa + "\n드랍 산물 : " + sanmul + "\n\n시로코 골카 : " + siroraid + "\n잔향 여부 : " + zan + "\n\n최고의 날 : " + best1 + "\n획득 에픽 : " + best2;

        replier.reply(result);*/
        return 0;
      }
      break;

    case 14:
      if (ordchk == "!종합" && count == 8) {
        replier.reply("《캐릭터 종합 검색 실패》\n서버명의 앞 두글자 및 캐릭터명을 기재해 주세요!");
        return 0;
      } else if (ordchk == "!종합" && count != 8 && msg.split("종합")[1] != "") {
        var url = encodeURIComponent(chrname);
        var data = Utils.getWebText("https://api.neople.co.kr/df/servers/" + sevraw[num] + "/characters?characterName=" + url + "&" + api);
        data = data.trim();
        if (data.indexOf("{\"rows\":[]}") != -1) {
          replier.reply("《캐릭터 종합 검색 실패》\n" + chrname + " 님은 존재하지 않는 캐릭터 입니다!");
          return 0;
        }

        replier.reply("현재 관리자의 요청에 의해 사용이 중단된 명령어입니다.");
        return 0;

        var level = data.split("level\":")[1].split(",")[0];
        code = data.split("characterId\":\"")[1].split("\"")[0].trim();
        var info = Utils.getWebText("https://dundam.xyz/view.jsp?server=" + sevraw[num] + "&name=" + url + "&image=" + code + "&search=true&reloading=true");
        var dummy = info.split("<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-112985986-2\">")[1].split("<p align=\"center\"></p>")[0];
        info = info.replace(dummy, "");
        var job = info.replace(/(<([^>]+)>)/g, "").split(" / ")[1];
        var result = "《" + chrname + "님의 종합 정보》\n레벨 : " + level + "\n직업 : " + job + "​".repeat(495) + "\n샌드백 딜표";
        var dmg = info.split("<div class=\"tab-pane fade\" id=\"sendbag\">")[1].split("총 딜")[1].split("<td>")[1].split("<")[0].trim();
        result = result + "\n총 딜 : " + dmg;

        var temp = info.split("<div class=\"tab-pane fade in active\" id=\"rogen\">")[1];
        var temp2 = temp.split("<th style=\"background-color: #eeeeee; text-align: center; width: 33%\">")[2];
        var temp3 = temp.split("<th style=\"background-color: #eeeeee; text-align: center; width: 33%\">")[3];
        temp = temp.split("총 딜")[1];
        temp2 = temp2.split("</th>")[0];
        temp3 = temp3.split("</th>")[0];
        dmg = temp.split("<td>")[1].split("<")[0].trim();
        var dmg2 = temp.split("<td>")[2].split("<")[0].trim();
        result = result + "\n\n로젠 딜표\n" + temp2 + " : " + dmg + "\n" + temp3 + " : " + dmg2;
        
        temp = info.split("<div class=\"tab-pane fade\" id=\"prey\">")[1];
        temp2 = temp.split("<th style=\"background-color: #eeeeee; text-align: center; width: 33%\">")[2];
        temp3 = temp.split("<th style=\"background-color: #eeeeee; text-align: center; width: 33%\">")[3];
        temp = temp.split("총 딜")[1];
        temp2 = temp2.split("</th>")[0];
        temp3 = temp3.split("</th>")[0];
        dmg = temp.split("<td>")[1].split("<")[0].trim();
        dmg2 = temp.split("<td>")[2].split("<")[0].trim();
        result = result + "\n\n이시스 딜표\n" + temp2 + " : " + dmg + "\n" + temp3 + " : " + dmg2;

        temp = info.split("<div class=\"tab-pane fade\" id=\"siroco\">")[1];
        temp2 = temp.split("<th style=\"background-color: #eeeeee; text-align: center; width: 33%\">")[2];
        temp3 = temp.split("<th style=\"background-color: #eeeeee; text-align: center; width: 33%\">")[3];
        temp = temp.split("총 딜")[1];
        temp2 = temp2.split("</th>")[0];
        temp3 = temp3.split("</th>")[0];
        dmg = temp.split("<td>")[1].split("<")[0].trim();
        dmg2 = temp.split("<td>")[2].split("<")[0].trim();
        result = result + "\n\n시로코 딜표\n" + temp2 + " : " + dmg + "\n" + temp3 + " : " + dmg2;

        if (job == "세라핌" || job == "헤카테" || job == "세인트") {
          var stt = info.split("총 합")[1].split("<td>")[1].split("</td>")[0].replace("  ", " ");
          var atk = info.split("총 합")[1].split("<td>")[3].split("</td>")[0].replace("  ", " ");
          result = result + "\n\n버프력\n스탯 : " + stt + "\n공격력 : " + atk;
        }

        info = info.replace(/(<([^>]+)>)/g, "");
        var rank = info.split(" / ")[2].split("  ")[0];
        result = result + "\n\n순위 : " + rank;
        
        url = encodeURIComponent(chrname);
        base = "https://api.neople.co.kr/df/servers/" + sevraw[num] + "/characters/" + code + "/equip/";
        var info = Utils.getWebText(base + "equipment?" + api);
        var creature = Utils.getWebText(base + "creature?" + api);
        var talisman = Utils.getWebText(base + "talisman?" + api);
        info = info.replace(/\"/gi, "");
        if (info.indexOf("darkRevelation") != -1) {
          var dark = info.split("darkRevelation")[1].split("]}")[0];
          info = info.replace(dark, "");
        }
        if (info.indexOf("mythology") != -1) {
          var mytemp = info.split("mythology")[1].split("}]")[0];
          info = info.replace(mytemp, "");
        }
        if (info.indexOf("sirocoInfo") != -1) {
          var sirocolen = info.split("sirocoInfo");
          for (i = 0; i < sirocolen.length - 1; i++) {
            var sitemp = info.split("sirocoInfo")[1].split("}]")[0];
            var sitmetem = "sirocoInfo" + sitemp;
            info = info.replace(sitmetem, "");
          }
        }
        if (info.indexOf("setItemInfo") != -1) {
          var setiteminfo = info.split("setItemInfo")[1];
          info = info.replace(setiteminfo, "");
          setiteminfo = setiteminfo.split("</body>")[0];
        }
        creature = creature.replace(/\"/gi, "");
        talisman = talisman.replace(/\"/gi, "");
        var gld = info.split("guildName")[1];
        gld = gld.split(",")[0];
        gld = gld.replace(":", "");
        var adv = info.split("adventureName")[1];
        adv = adv.split(",")[0];
        adv = adv.replace(":", "");
        result = result + "\n\n장비";
        var temp;
        var slot;
        var item;
        var set;
        var rein;
        var amp;
        var refi;
        var ect;
        var ectemp;
        var rare;
        var lencheck = info.split("{slotId");
        for (i = 0; i < lencheck.length - 1; i++) {
          temp = info.split("{slotId")[i + 1];
          slot = temp.split("slotName:")[1].split(",")[0];
          item = temp.split("itemName:")[1].split(",")[0];
          if (temp.indexOf("upgradeInfo") != -1) {
            var uptemtem = temp.split("upgradeInfo")[1].split("}")[0];
            var uptemp = "upgradeInfo" + uptemtem;
            temp = temp.replace(uptemp, "");
            uptemp = uptemp.split("itemName:")[1].split("}")[0];
            item = item + " + " + uptemp;
          }
          set = temp.split("setItemName:")[1].split(",")[0];
          rein = temp.split("reinforce:")[1].split(",")[0];
          amp = temp.split("amplificationName:")[1].split(",")[0];
          refi = temp.split("refine:")[1].split(",")[0];
          if (refi.indexOf("}") != -1) {
            refi = refi.replace("}", "");
          }
          rare = temp.split("itemRarity:")[1].split(",")[0];
          ectemp = temp.split("enchant")[1];
          if (slot == "머리어깨") {
            slot = "어깨";
          } else if (slot == "보조장비") {
            slot = "보장";
          } else if (slot == "마법석") {
            slot = "법석";
          }
          if (amp.indexOf("}") != -1) {
            amp = amp.split("}")[0];
          }
          if (amp != "null") {
            amp = amp.replace("차원의 ", "");
          } else if (amp == "null") {
            amp = "강화";
          }
          if (ectemp != undefined) {
            if (ectemp.indexOf("status") != -1) {
              ectemp = ectemp.split("status")[1];
              var tp = ectemp.split("{");
            } else if (ectemp.indexOf("reinforceSkill") != -1) {
              ectemp = ectemp.split("reinforceSkill")[1];
              var tp = ectemp.split("skills");
            }
            var exp = "";
            for (var j = 0; j < tp.length - 1; j++) {
              var tmp = tp[j + 1];
              var name = tmp.split("name:")[1].split(",")[0];
              var value = tmp.split("value:")[1].split("}")[0];
              exp = exp + name + " +" + value;
              if (tp[j + 2] != undefined) {
                exp = exp + " / ";
              }
            }
            ect = exp;
          } else {
            ect = "null";
          }
          result = result + "\n" + slot + " : " + item;
          if (amp != "강화") {
            result = result + "(+" + rein + " " + amp;
            if (refi != 0) {
              result = result + " / " + refi + "재련)";
            } else {
              result = result + ")";
            }
          } else {
            if (rein != 0) {
              result = result + "(+" + rein + " " + amp;
              if (refi != 0) {
                result = result + " / " + refi + "재련)";
              } else {
                result = result + ")";
              }
            }
          }
          if (rare == "신화") {
            result = result + " <- 기린템";
          }
          if (ect != "null") {
            result = result + "\n[ " + ect + " ]";
          }
          if (set != "null") {
            result = result + "\n(" + set + ")";
          }
          if (slot == "무기" || slot == "칭호" || slot == "허리" || slot == "반지") {
            result = result + "\n";
          }
        }
        if (setiteminfo != undefined && setiteminfo != ":[]}\n ") {
          var sii = setiteminfo.split("setItemId");
          var setname;
          var actno;
          result = result + "\n\n현재 적용중인 세트 효과";
          for (i = 0; i < sii.length - 1; i++) {
            temp = sii[i + 1];
            setname = temp.split("setItemName:")[1].split(",")[0];
            actno = temp.split("activeSetNo:")[1].split("}")[0];
            result = result + "\n└" + setname + " : " + actno + " 부위";
          }
        }
        var crt = creature.split("itemName:")[1];
        if (crt != undefined) {
          crt = crt.split(",")[0];
          result = result + "\n\n크리쳐 : " + crt;
        }
        var tcheck = talisman.split("talismans:")[1].split("}]}")[0];
        if (tcheck != "null") {
          var lencheck = talisman.split("talisman:");
          for (var i = 0; i < lencheck.length - 1; i++) {
            var talnum = i + 1;
            result = result + "\n\n탈리스만 " + talnum + "\n";
            var run = lencheck[talnum].split("runes:")[1].split("}]")[0];
            lencheck[talnum] = lencheck[talnum].replace(run, "");
            var talname = lencheck[talnum].split("itemName:")[1].split(",")[0];
            result = result + talname;
            var runtype = lencheck[talnum].split("runeTypes:")[1].split("}")[0];
            if (runtype != "null") {
              result = result + "\n" + runtype;
            }
            result = result + "\n룬\n";
            var runlen = run.split("slotNo:");
            for (var j = 0; j < runlen.length; j++) {
              var rune = runlen[j].split("itemName:")[1];
              if (rune != undefined) {
                rune = rune.split("]")[0];
                result = result + rune + "]\n";
              }
            }
          }
        }

        result = result + "\n\n스위칭\n";
        var url = encodeURIComponent(chrname);
        var base = "https://api.neople.co.kr/df/servers/" + sevraw[num] + "/characters";
        var data = Utils.getWebText(base + "?characterName=" + url + "&" + api);
        code = data.split("characterId\":\"")[1].split("\"")[0].trim();
        base = base + "/" + code + "/skill/buff/equip/";
        var info = Utils.getWebText(base + "equipment?" + api);
        var creature = Utils.getWebText(base + "creature?" + api);
        var avatar = Utils.getWebText(base + "avatar?" + api);
        info = info.replace(/\"/gi, "");
        if (info.indexOf("darkRevelation") != -1) {
          var dark = info.split("darkRevelation")[1].split("]}")[0];
          info = info.replace(dark, "");
        }
        if (info.indexOf("mythology") != -1) {
          var mytemp = info.split("mythology")[1].split("}]}}")[0];
          info = info.replace(mytemp, "");
        }
        if (info.indexOf("sirocoInfo") != -1) {
          var sirocolen = info.split("sirocoInfo");
          for (i = 0; i < sirocolen.length - 1; i++) {
            var sitemp = info.split("sirocoInfo")[1].split("}]")[0];
            var sitmetem = "sirocoInfo" + sitemp;
            info = info.replace(sitmetem, "");
          }
        }
        if (info.indexOf("setItemInfo") != -1) {
          var setiteminfo = info.split("setItemInfo")[1];
          info = info.replace(setiteminfo, "");
        }
        creature = creature.replace(/\"/gi, "");
        avatar = avatar.replace(/\"/gi, "");
        var buffname = info.split("buff:")[1].split("name:")[1];
        var level = buffname.split("level:")[1].split(",")[0];
        buffname = buffname.split(",")[0];
        result = result + buffname + " (" + level + " Lv)\n";
        var temp;
        var slot;
        var item;
        var set;
        var rein;
        var amp;
        var refi;
        var ect;
        var ectemp;
        var lencheck = info.split("{slotId");
        for (i = 0; i < lencheck.length - 1; i++) {
          temp = info.split("{slotId")[i + 1];
          slot = temp.split("slotName:")[1].split(",")[0];
          item = temp.split("itemName:")[1].split(",")[0];
          if (temp.indexOf("upgradeInfo") != -1) {
            var uptemtem = temp.split("upgradeInfo")[1].split("}")[0];
            var uptemp = "upgradeInfo" + uptemtem;
            temp = temp.replace(uptemp, "");
            uptemp = uptemp.split("itemName:")[1].split("}")[0];
            item = item + " + " + uptemp;
          }
          set = temp.split("setItemName:")[1].split(",")[0];
          rein = temp.split("reinforce:")[1].split(",")[0];
          amp = temp.split("amplificationName:")[1].split(",")[0];
          refi = temp.split("refine:")[1].split(",")[0];
          if (refi.indexOf("}") != -1) {
            refi = refi.replace("}", "");
          }
          ectemp = temp.split("enchant")[1];
          if (slot == "머리어깨") {
            slot = "어깨";
          } else if (slot == "보조장비") {
            slot = "보장";
          } else if (slot == "마법석") {
            slot = "법석";
          }
          if (amp.indexOf("}") != -1) {
            amp = amp.split("}")[0];
          }
          if (amp != "null") {
            amp = amp.replace("차원의 ", "");
          } else if (amp == "null") {
            amp = "강화";
          }
          if (ectemp != undefined) {
            if (ectemp.indexOf("status") != -1) {
              ectemp = ectemp.split("status")[1];
              var tp = ectemp.split("{");
            } else if (ectemp.indexOf("reinforceSkill") != -1) {
              ectemp = ectemp.split("reinforceSkill")[1];
              var tp = ectemp.split("skills");
            }
            var exp = "";
            for (var j = 0; j < tp.length - 1; j++) {
              var tmp = tp[j + 1];
              var name = tmp.split("name:")[1].split(",")[0];
              var value = tmp.split("value:")[1].split("}")[0];
              exp = exp + name + " +" + value;
              if (tp[j + 2] != undefined) {
                exp = exp + " / ";
              }
            }
            ect = exp;
          } else {
            ect = "null";
          }
          result = result + "\n" + slot + " : " + item;
          if (amp != "강화") {
            result = result + "(+" + rein + " " + amp;
            if (refi != 0) {
              result = result + " / " + refi + "재련)";
            } else {
              result = result + ")";
            }
          } else {
            if (rein != 0) {
              result = result + "(+" + rein + " " + amp;
              if (refi != 0) {
                result = result + " / " + refi + "재련)";
              } else {
                result = result + ")";
              }
            }
          }
          if (ect != "null") {
            result = result + "\n[ " + ect + " ]";
          }
          if (set != "null") {
            result = result + "\n(" + set + ")";
          }
          if (slot == "무기" || slot == "칭호" || slot == "허리" || slot == "반지") {
            result = result + "\n";
          }
        }
        var crt = creature.split("itemName:")[1];
        var crtlvup;
        if (crt != undefined) {
          if (crt.indexOf("levelupCondition") != -1) {
            crtlvup = crt.split("levelupCondition:")[1];
            crtlvup = crtlvup.split("}")[0];
          }
          crt = crt.split(",")[0];
          result = result + "\n\n크리쳐 : " + crt;
          if (crtlvup != null || crtlvup != undefined) {
            result = result + "\n" + crtlvup;
          }
        }
        var avt = avatar.split("avatar:")[1].split("}")[0];
        if (avt != undefined && avt != "null") {
          result = result + "\n\n아바타";
          var rare;
          var option;
          var emblem;
          lencheck = avatar.split("{slotId");
          for (i = 0; i < lencheck.length - 1; i++) {
            temp = avatar.split("{slotId")[i + 1];
            slot = temp.split("slotName:")[1].split(",")[0].replace(" 아바타", "");
            item = temp.split("itemName:")[1].split(",")[0];
            rare = temp.split("itemRarity:")[1].split(",")[0];
            option = temp.split("optionAbility:")[1].split(",")[0];
            emblem = temp.split("emblems:[")[1];
            ectemp = emblem.split("]")[0];
            if (ectemp != undefined && ectemp != null) {
              emblem = emblem.split("}]}")[0];
              var tp = emblem.split("slotNo:");
              var exp = "";
              for (var j = 0; j < tp.length - 1; j++) {
                var tmp = tp[j + 1];
                var name = tmp.split("itemName:")[1].split(",")[0];
                exp = exp + name;
                if (tp[j + 2] != undefined) {
                  exp = exp + " / ";
                }
              }
              ect = exp;
            } else {
              ect = "null";
            }
            result = result + "\n" + slot + " : " + item + " (" + rare + ")";
            if (option != "null") {
              result = result + "\n -" + option;
            } else {
              result = result + "\n -옵션 없음";
            }
            if (ect != "null") {
              result = result + "\n└" + ect + "\n";
            }
          }
        }
        
        var url = encodeURIComponent(chrname);
        var base = "https://api.neople.co.kr/df/servers/" + sevraw[num];
        var data = Utils.getWebText(base + "/characters?characterName=" + url + "&" + api);
        code = data.split("characterId\":\"")[1].split("\"")[0].trim();
        var info = Utils.getWebText(base + "/characters/" + code + "/status?" + api);
        info = info.replace(/\"/gi, "");
        var status = new Array("HP", "MP", "힘", "지능", "체력", "정신력", "물리 공격", "마법 공격", "독립 공격", "물리 크리", "마법 크리", "공격 속도", "캐스팅 속도", "이동 속도", "항마", "화속강", "수속강", "명속강", "암속강");
        var value = new Array();
        var cutting = new Array("모험단 버프", "무제한 길드능력치", "기간제 길드능력치");
        var cut;
        var cuttemp;
        for (var i = 0; i < cutting.length; i++) {
          if (info.indexOf(cutting[i]) != -1) {
            cuttemp = "name:" + cutting[i];
            cut = info.split(cuttemp)[1].split("]")[0];
            info = info.replace(cut, "").replace(cuttemp, "");
          }
        }
        var del = new Array("물리 방어", "마법 방어", "적중률", "회피율", "HP 회복량", "MP 회복량", "경직도", "히트리커버리", "화속성 저항", "수속성 저항", "명속성 저항", "암속성 저항");
        var deltemp;
        for (var j = 0; j < del.length; j++) {
          deltemp = "name:" + del[j];
          cut = info.split(deltemp)[1].split("}")[0];
          deltemp = deltemp + cut;
          info = info.replace(deltemp, "");
        }
        var temp;
        var stat = info.split("status")[1];
        for (i = 0; i < status.length; i++) {
          temp = stat.split("value")[i + 1].split("}")[0].replace(":", "");
          value[i] = temp;
        }
        var chrinfo = info.split("status")[0];
        var gld = chrinfo.split("guildName:")[1].split(",")[0];
        var adv = chrinfo.split("adventureName:")[1].split(",")[0];
        var job = chrinfo.split("jobName:")[1].split(",")[0];
        var grow = chrinfo.split("jobGrowName:")[1].split(",")[0];
        if (grow.indexOf("자각") != -1) {
          var finaljob = job + "(" + grow + ")";
        } else {
          var finaljob = grow;
        }
        result = result + "\n\n스탯\n";
        for (i = 0; i < status.length; i++) {
          result = result + status[i] + " : " + value[i] + "\n";
        }
        result = result + "(모험단 및 길드 스탯 적용 기준)";

        replier.reply(result);
        replier.reply("https://img-api.neople.co.kr/df/servers/" + sevraw[num] + "/characters/" + code + "?zoom=2");
      }
      break;

    case 15:
      if (ordchk == "!딜표" && count == 8) {
        replier.reply("《캐릭터 딜표 검색 실패》\n서버명의 앞 두글자 및 캐릭터명을 기재해 주세요!");
        return 0;
      } else if (ordchk == "!딜표" && count != 8 && msg.split("딜표")[1] != "") {
        var url = encodeURIComponent(chrname);
        var data = Utils.getWebText("https://api.neople.co.kr/df/servers/" + sevraw[num] + "/characters?characterName=" + url + "&" + api);
        data = data.trim();
        if (data.indexOf("{\"rows\":[]}") != -1) {
          replier.reply("《캐릭터 딜표 검색 실패》\n" + chrname + " 님은 존재하지 않는 캐릭터 입니다!");
          return 0;
        }

        replier.reply("현재 관리자의 요청에 의해 사용이 중단된 명령어입니다.");
        return 0;
  
        var level = data.split("level\":")[1].split(",")[0];
        code = data.split("characterId\":\"")[1].split("\"")[0].trim();
        var info = Utils.getWebText("https://dundam.xyz/view.jsp?server=" + sevraw[num] + "&name=" + url + "&image=" + code + "&search=true&reloading=true");
        var dummy = info.split("<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-112985986-2\">")[1].split("<p align=\"center\"></p>")[0];
        info = info.replace(dummy, "");
        var job = info.replace(/(<([^>]+)>)/g, "").split(" / ")[1];

        var sandbag = info.split("<div class=\"tab-pane fade\" id=\"sendbag\">")[1].split("총 딜")[1].split("<td>")[1].split("<")[0].trim();
  
        var temp = info.split("<div class=\"tab-pane fade in active\" id=\"rogen\">")[1];
        var temp2 = temp.split("<th style=\"background-color: #eeeeee; text-align: center; width: 33%\">")[2].split("</th>")[0];
        var temp3 = temp.split("<th style=\"background-color: #eeeeee; text-align: center; width: 33%\">")[3].split("</th>")[0];
        temp = temp.split("총 딜")[1];
        dmg = temp.split("<td>")[1].split("<")[0].trim();
        var dmg2 = temp.split("<td>")[2].split("<")[0].trim();
        var rogen = dmg + "\n" + dmg2;
        
        temp = info.split("<div class=\"tab-pane fade\" id=\"prey\">")[1];
        temp2 = temp.split("<th style=\"background-color: #eeeeee; text-align: center; width: 33%\">")[2].split("</th>")[0];
        temp3 = temp.split("<th style=\"background-color: #eeeeee; text-align: center; width: 33%\">")[3].split("</th>")[0];
        temp = temp.split("총 딜")[1];
        dmg = temp.split("<td>")[1].split("<")[0].trim();
        dmg2 = temp.split("<td>")[2].split("<")[0].trim();
        var prey = dmg + "\n" + dmg2;
  
        temp = info.split("<div class=\"tab-pane fade\" id=\"siroco\">")[1];
        temp2 = temp.split("<th style=\"background-color: #eeeeee; text-align: center; width: 33%\">")[2].split("</th>")[0];
        temp3 = temp.split("<th style=\"background-color: #eeeeee; text-align: center; width: 33%\">")[3].split("</th>")[0];
        temp = temp.split("총 딜")[1];
        dmg = temp.split("<td>")[1].split("<")[0].trim();
        dmg2 = temp.split("<td>")[2].split("<")[0].trim();
        var siroco = dmg + "\n" + dmg2;
  
        info = info.replace(/(<([^>]+)>)/g, "");
        var rank = info.split(" / ")[2].split("  ")[0];
        
        Kakao.send(room, {
          "link_ver": "4.0",
          "template_id": 35315 ,
          "template_args": {
            "title": "《" + chrname + "님의 딜표》",
            "data0": "Lv. " + level + " " + job,
            "data1": rank,
            "data2": sandbag,
            "data3": "",
            "data4": rogen,
            "data5": "",
            "data6": prey,
            "data7": "",
            "data8": siroco,
            "data9": "",
            "head": "https://img-api.neople.co.kr/df/servers/" + sevraw[num] + "/characters/" + code + "?zoom=1",
            "img0": "https://img-api.neople.co.kr/df/servers/" + sevraw[num] + "/characters/" + code + "?zoom=3",
            "img1": sandbagimg,
            "img2": logenimg,
            "img3": isisimg,
            "img4": sirocoimg
          }
        }, "custom");

      }
      break;

    case 16:
      if (ordchk == "!사진" && count == 8) {
        replier.reply("《프로필 사진 검색 실패》\n서버명의 앞 두글자 및 캐릭터명을 기재해 주세요!");
        return 0;
      } else if (ordchk == "!사진" && count != 8 && msg.split("사진")[1] != "") {
        var url = encodeURIComponent(chrname);
        var data = Utils.getWebText("https://api.neople.co.kr/df/servers/" + sevraw[num] + "/characters?characterName=" + url + "&" + api);
        data = data.trim();
        if (data.indexOf("{\"rows\":[]}") != -1) {
          replier.reply("《프로필 사진 검색 실패》\n" + chrname + " 님은 존재하지 않는 캐릭터 입니다!");
          return 0;
        }

        var code = data.split("characterId\":\"")[1].split("\"")[0];

        try {
          var request = Utils.getWebText("https://dnfp.xyz/request.html?mode=full&cinfo=true&charid=" + code + "&server=" + sevraw[num]);
          var timetest = Utils.getWebText("https://dnfp.xyz/view.html?cid=" + code + "&sid=" + sevraw[num] + "&count=1");
          var imgtest = Utils.getWebText("https://dnfp.xyz/df/view?sid=" + sevraw[num] + "&cid=" + code + "&count=1");
        } catch (e) {
          var result = "《프로필 사진 검색 실패》\nhttp://dnfp.xyz \n에서 먼저 검색 및 생성 후 사용해 주세요!";
          replier.reply(result);
          return 0;
        }
        
        rnd = Math.floor(Math.random() * 1000000000);
                
        Kakao.send(room, {
          "link_ver": "4.0",
          "template_id": 34026 ,
          "template_args": {
            "title": "《" + chrname + "님의 프로필 사진》",
            "img": "https://dnfp.xyz/df/view?sid=" + sevraw[num] + "&cid=" + code + "&count=" + rnd
          }
        }, "custom");

        /*result = "현재 일시적으로 사용이 중단된 명령어입니다.\n\nhttp://dnfp.xyz 에서 이용 바랍니다.";
        replier.reply(result);*/

      }
      break;

    case 17:
      if (ordchk == "!가치" && count == 8) {
        replier.reply("《캐릭터 가치 검색 실패》\n서버명의 앞 두글자 및 캐릭터명을 기재해 주세요!");
        return 0;
      } else if (ordchk == "!가치" && count != 8 && msg.split("사진")[1] != "") {
        var url = encodeURIComponent(chrname);
        var data = Utils.getWebText("https://api.neople.co.kr/df/servers/" + sevraw[num] + "/characters?characterName=" + url + "&" + api);
        data = data.trim();
        if (data.indexOf("{\"rows\":[]}") != -1) {
          replier.reply("《캐릭터 가치 검색 실패》\n" + chrname + " 님은 존재하지 않는 캐릭터 입니다!");
          return 0;
        }
  
        var code = data.split("characterId\":\"")[1].split("\"")[0];

        try {
          var info = Utils.getWebText("https://dunfamoa.com/characters/" + sevraw[num] + "/" + url + "/value");
        } catch (error) {
          replier.reply("《캐릭터 가치 검색 실패》\n서버 불안정으로 인해 검색에 실패하였습니다!\n\n잠시 후 다시 시도해주세요!\n\n영문이 포함된 캐릭터명은 대소문자를 구분하여 기입해주세요");
          return 0;
        }

        var gold = info.split("<span><strong>")[1].split("골드")[0].split("<")[0];
        var rank = info.split("가치 순위")[1].split("<span>")[1].split("<")[0];
        var ranktemp = info.split("가치 순위")[1].split("(")[1].split(")")[0];
        var temp1 = ranktemp.replace(/(<([^>]+)>)/gi, "");
        var temp2 = " (" + temp1 + ")";
        //var temp3 = temp1.split("}")[1];
        rank = rank + temp2;
        var epic = info.split("에픽도감")[1].split("<span>")[1].split("</span>")[0].replace(/(<([^>]+)>)/gi, "");
        var myth = info.split("신화도감")[1].split("<span>")[1].split("</span>")[0].replace(/(<([^>]+)>)/gi, "");

        Kakao.send(room, {
          "link_ver": "4.0",
          "template_id": 35314 ,
          "template_args": {
            "title": "《" + chrname + "님의 가치》",
            "data0": "캐릭터 가치\n" + gold + " 골드",
            "data1": "",
            "data2": "가치 순위\n" + rank,
            "data3": "",
            "data4": "에픽 도감\n" + epic,
            "data5": "",
            "data6": "신화 도감\n" + myth,
            "data7": "",
            "img0": "https://img-api.neople.co.kr/df/servers/" + sevraw[num] + "/characters/" + code + "?zoom=3",
            "img1": "",
            "img2": "",
            "img3": ""
          }
        }, "custom");

        /*rank = rank.replace("명", "명\n");
        var result = "《" + chrname + "님의 가치》\n캐릭터 가치\n" + gold + " 골드\n\n가치 순위\n" + rank + "\n\n에픽 도감\n" + epic + "\n\n신화 도감\n" + myth;
        replier.reply(result);*/
  
      }
      break;

    case 18:
      if (ordchk == "!던조" && count == 8) {
        replier.reply("《던파 조선 검색 실패》\n서버명의 앞 두글자 및 캐릭터명을 기재해 주세요!");
        return 0;
      } else if (ordchk == "!던조" && count != 8 && msg.split("던조")[1] != " ") {
        var url = encodeURIComponent(chrname);
        var data = Utils.getWebText("https://df.gamechosun.co.kr/info/tool/charSearchList.php?server=" + sevraw[num] + "&charName=" + url + "#1");
        var chrcheck = Utils.getWebText("https://api.neople.co.kr/df/servers/" + sevraw[num] + "/characters?characterName=" + url + "&" + api).trim();
        if (chrcheck.indexOf("{\"rows\":[]}") != -1) {
          replier.reply("《던파 조선 검색 실패》\n" + chrname + " 님은 존재하지 않는 캐릭터 입니다!");
          return 0;
        }

        var totalimg = data.split("totalRankUrl('")[1].split("')")[0];
        var zanimg = data.split("<img style=\"width:81%;\" src=\"")[4].split("\"")[0];
        var yunimg = data.split("<img style=\"width:81%;\" src=\"")[5].split("\"")[0];
        var sinimg = data.split("<img style=\"width:81%;\" src=\"")[6].split("\"")[0];
        var avaimg = data.split("<img style=\"width:81%;\" src=\"")[12].split("\"")[0];

        var zanscore = data.split("<p>잔향 : ")[1].split("</p>")[0];
        var yunscore = data.split("<p>연옥 : ")[1].split("</p>")[0];
        var sinscore = data.split("<p>신화 : ")[1].split("</p>")[0];
        var talscore = data.split("<p>탈리스만 : ")[1].split("</p>")[0];
        var bufscore = data.split("<p>버프장비 : ")[1].split("</p>")[0];
        var avascore = data.split("<p>아바타 : ")[1].split("</p>")[0];
        var perscore = data.split("<p>장비 완성도 : ")[1].split("</p>")[0];
        var sttscore = data.split("<p>스탯 : ")[1].split("</p>")[0];
        var atkscore = data.split("<p>공격력 : ")[1].split("</p>")[0];
        var emtscore = data.split("<p>속성강화 : ")[1].split("</p>")[0];
        var ttlscore = data.split("<p>총점 : ")[1].split("</p>")[0].slice(0, 4);

        Kakao.send(room, {
          "link_ver": "4.0",
          "template_id": 35315 ,
          "template_args": {
            "title": "《" + chrname + "님의 캐릭터 등급》",
            "data0": "총점 : " + ttlscore + "\n장비 완성도 : " + perscore,
            "data1": "",
            "data2": "잔향 : " + zanscore,
            "data3": "탈리스만 : " + talscore,
            "data4": "연옥 : " + yunscore,
            "data5": "버프장비 : " + bufscore,
            "data6": "신화 : " + sinscore ,
            "data7": "공격력 : " + atkscore,
            "data8": "아바타 : " + avascore + "\n스탯 : " + sttscore,
            "data9": "속성강화 : " + emtscore,
            "img0": totalimg,
            "img1": zanimg,
            "img2": yunimg,
            "img3": sinimg,
            "img4": avaimg
          }
        }, "custom");
  
        return 0;
      }
      break;
  
    default:
      break;
  }

  if (msg == "!추출속도") {
    replier.reply("현재 관리자의 요청에 의해 사용이 중단된 명령어입니다.");
    return 0;
    
    replier.reply("《버프력 추출 시간 계산》\n계산중입니다...");
    var s = java.lang.System.currentTimeMillis();
    Utils.getWebText("https://dundam.xyz/view.jsp?server=hilder&name=%EB%A3%A8%EC%8B%9C%EA%B7%B8%EB%9D%BC%EC%8B%9C%EC%95%84&image=a01c0095e5ac7e9077b554b690d77d25&search=true&reloading=true");
    var e = java.lang.System.currentTimeMillis();
    var t = e - s;
    var result = ("《버프력 추출 예상 소요 시간》\n약 " + t / 1000 + "초 소요 예정");
    replier.reply(result);
  }

  if (msg == "!후원") {
    if (room == "크리 톡방") {
      result = "《크리봇 후원하기》\n방장 - 단진 에게 문의  또는\nhttps://twip.kr/gocaps";
    }
    else if (room == "커맨더 톡방") {
      result = "《크리봇 후원하기》\n톡방 힐더 - DJ단진 에게 문의  또는\nhttps://twip.kr/gocaps";
    }
    else if (room == "런처 톡방") {
      result = "《크리봇 후원하기》\n스핏 톡방 힐더 - DJ단진 에게 문의  또는\nhttps://twip.kr/gocaps";
    }
    else if (room == "1해라 12야" || room == "라피니타" || room == "무속성 톡방") {
      result = "《크리봇 후원하기》\n톡방 - 단진 에게 문의  또는\nhttps://twip.kr/gocaps";
    }
    else if (room == "히오스 톡방") {
      result = "《시공봇 후원하기》\n톡방 - 단진#3496 에게 문의  또는\nhttps://twip.kr/gocaps";
    }
    else if (room == "로아 톡방") {
      result = "《루나봇 후원하기》\n톡방 - 레일리루나 에게 오픈 프로필 문의";
    }
    else if (room == "파티리듬담당") {
      result = "《루나봇 후원하기》\n로아 톡방 - 레일리루나 에게 오픈 프로필 문의\nhttps://open.kakao.com/me/Raily_Luna";
    }
    /*if (room == "럽라 톡방") {
      result = "《니코봇 후원하기》\n방장 - 단진 에게 문의  또는\nhttps://twip.kr/gocaps";
    }*/
    replier.reply(result);
    return 0;
  }


  if (msg.indexOf("!딜") == 0 && msg.indexOf(" ") != -1) {
    var voss = msg.split("!딜")[1].split(" ")[0];
    if (voss == "하니에르") {
      var hp = 42625;
    } else if (voss == "비타" || voss == "넥스") {
      var hp = 42675;
    } else if (voss == "길리" || voss == "레베체" || voss == "레스테" || voss == "시로코") {
      var hp = 88915;
    } else if (voss == "반야") {
      var hp = 53690;
    } else if (voss == "순혈자" || voss == "데바스" || voss == "데바스타르") {
      var hp = 60880;
      voss = "순혈자 데바스타르";
    } else if (voss == "1제트" || voss == "1데스페로" || voss == "1피반야") {
      var hp = 40850;
    } else if (voss == "2제트" || voss == "2데스페로" || voss == "2피반야") {
      var hp = 100215;
    } else if (voss == "3제트" || voss == "3데스페로" || voss == "3피반야") {
      var hp = 208445;
    } else if (voss == "1티모르" || voss == "1티아매트" || voss == "1베리아스") {
      var hp = 48105;
    } else if (voss == "2티모르" || voss == "2티아매트" || voss == "2베리아스") {
      var hp = 120000;
    } else if (voss == "3티모르" || voss == "3티아매트" || voss == "3베리아스") {
      var hp = 250150;
    } else if (voss == "1아스타") {
      var hp = 70150;
    } else if (voss == "2아스타") {
      var hp = 120255;
    } else if (voss == "3아스타") {
      var hp = 245520;
    } else if (voss == "4아스타") {
      var hp = 315670;
    } else if (msg.indexOf("!딜") == 0 && msg.indexOf(" ") == 2) {
      replier.reply("몬스터의 이름을 명령어와 붙여서 입력해주세요!");
      return 0;
    } else {
      replier.reply("등록되지 않은 몬스터입니다.");
      return 0;
    }

    voss = voss.replace("제트", "늘어진 어둠 제트").replace("데스페로", "순혈자 데스페로").replace("피반야", "피를 마신 반야").replace("티모르", "순혈자 티모르").replace("티아매트", "절망의 티아매트").replace("베리아스", "파멸의 베리아스").replace("아스타", "공포의 아스타로스").replace("1", "1단계 ").replace("2", "2단계 ").replace("3", "3단계 ").replace("4", "4단계 ");

    if (msg.indexOf("/") == -1) {
      msg = msg + "/100";
    }
    var damage = msg.split(" ")[1].split("/")[0].replace(/,/g, "");
    var percent = msg.split("/")[1].replace("%", "");
    var total = roundXL((100 / percent) * damage, 0);
    hp = hp * 100000;
    var boss = roundXL(total * 100 / hp, 2) + " %";

    var result = "《" + sender + "님의 " + voss + " 딜량》\n총 딜 : " + AddComma(total) + "\n딜 비율 : " + boss;
    replier.reply(result);
  }



  if (msg.indexOf("!전적 ") == 0) {
    var battletag = msg.split(" ")[1];
    var info = Utils.getWebText("https://www.heroesprofile.com/Search/?searched_battletag=" + encodeURIComponent(battletag));
    if (info.indexOf("No battletag found. Please try another search.") != -1) {
      replier.reply("업로드된 리플레이가 존재하지 않는 플레이어입니다.");
      return 0;
    }
    if (info.indexOf("choose_battletag") != -1) {
      var newsearch = "https://www.heroesprofile.com" + info.split("choose_battletag")[1].split("<script>")[0].replace(/\s\S+battletag=&amp\S+\s\(\)/gm, "").split("a href=\"")[1].split("\">")[0].replace(/amp;/g, "");
      info = Utils.getWebText(newsearch);
    }
    var aclevel = info.split("Account Level")[1].split("<span>")[1].split("</span>")[0];
    var onlywin = info.split("Wins")[1].split("value")[2].split("</div>")[0].replace(/">\s+/gm, "").replace(/\s+/gm, "");
    var onlylose = info.split("Losses")[1].split("value")[2].split("</div>")[0].replace(/">\s+/gm, "").replace(/\s+/gm, "");
    var kdr = info.split("KDR")[1].split("value")[2].split("</div>")[0].replace(/">\s+/gm, "").replace(/\s+/gm, "");
    var kda = info.split("KDA")[1].split("value")[2].split("</div>")[0].replace(/">\s+/gm, "").replace(/\s+/gm, "");
    var winrate = info.split("Win Rates")[1].split("<span>")[1].split("</span>")[0];
    var bruiser = info.split("Bruiser")[1].split("<span>")[1].split("</span>")[0];
    var support = info.split("Support")[1].split("<span>")[1].split("</span>")[0];
    var ranass = info.split("Ranged Assassin")[1].split("<span>")[1].split("</span>")[0];
    var melass = info.split("Melee Assassin")[1].split("<span>")[1].split("</span>")[0];
    var healer = info.split("Healer")[1].split("<span>")[1].split("</span>")[0];
    var tank = info.split("Tank")[1].split("<span>")[1].split("</span>")[0];
    // var link = "https://www.heroesprofile.com" + info.split("main-link")[16].split("=\"")[1].split("\">")[0].replace(/amp;/g, "");
    var most = info.split("Most Played")[1].split("img src")[1].split("</a>")[0].split("=\"")[1].split("\"")[0];

    Kakao.send(room, {
      "link_ver": "4.0",
      "template_id": 35315 ,
      "template_args": {
        "title": "《" + battletag + " 님의 전적》",
        "data0": "계정 레벨 : " + aclevel,
        "data1": "KDR " + kdr + " / KDA " + kda,
        "data2": "승리 " + onlywin + " / 패배 " + onlylose,
        "data3": "승률 : " + winrate,
        "data4": "투사 : " + bruiser + "\n지원가 : " + support,
        "data5": "",
        "data6": "원거리 암살자 : " + ranass + "\n근접 암살자 : " + melass,
        "data7": "",
        "data8": "치유사 : " + healer + "\n전사 : " + tank,
        "data9": "",
        "img0": "https://www.heroesprofile.com" + most,
        "img1": "",
        "img2": "",
        "img3": "",
        "img4": ""
      }
    }, "custom");

    /*var result = "《" + battletag + " 님의 전적》\n\n계정 레벨 : " + aclevel + "\nKDR : " + kdr + "\nKDA : " + kda + "\n승리 : " + onlywin + "\n패배 : " + onlylose + "\n승률 : " + winrate + "\n\n∇▼역할군 별 승률▼∇" + "​".repeat(495) + "\n투사 : " + bruiser + "\n지원가 : " + support + "\n원거리 암살자 : " + ranass + "\n근접 암살자 : " + melass + "\n치유사 : " + healer + "\n전사 : " + tank + "\n\n전체 영웅별 보기\n" + link;
    replier.reply(result);*/
    return 0;
  }

  if (msg == "!영웅") {
    rnd = Math.floor(Math.random() * hero.length);
    if (sender.indexOf("#") != -1) {
      sender = sender.split("#")[0];
    }
    //himg[rnd] = "현재 이미지는 제공되고 있지 않습니다.";

    Kakao.send(room, {
      "link_ver": "4.0",
      "template_id": 35311 ,
      "template_args": {
        "title": sender + "님의 추천 영웅",
        "data0": hero[rnd],
        "data1": "",
        "img": himg[rnd]
      }
    }, "custom");

    /*result = sender + " 님의 추천 영웅은\n\n" + hero[rnd];
    replier.reply(result);*/
    return 0;
  }

  if (msg == "!업로드") {
    result = "《히오스 리플레이 업로드》\n https://api.heroesprofile.com/upload";
    replier.reply(result);
    return 0;
  }

  if (msg == "!UTC" || msg == "!유티씨") {
    var info = Utils.getWebText("https://time.is/ko/UTC").split("<time id=\"clock\">")[1].split("</time>")[0];
    result = "《UTC 협정 세계 시각》\n" + info;
    replier.reply(result);
    return 0;
  }

  if (msg.indexOf("!로아 ") == 0 || msg.indexOf("!루나 ") == 0) {
    var today = new Date();
    if (today.getDay() == 3 && today.getHours() > 6 && today.getHours() < 10) {
      replier.reply("정기점검 시간입니다.");
      return 0;
    }
    var check = 0;
    var chrname = msg.split(" ")[1];
    if (room == "크리 톡방" || msg.indexOf("!로아 카링 ") == 0) {
      check = 1;
      chrname = msg.split(" ")[2];
    }
    var url = encodeURIComponent(chrname);
    try {
      var data = Utils.getWebText("https://lostark.game.onstove.com/Profile/Character/" + url);      
    } catch (error) {
      if (error.status == 500) {
        replier.reply("점검중입니다.")
      }
    }
    if (data.indexOf("캐릭터 정보가 없습니다.") != -1) {
      replier.reply(chrname + "님은 존재하지 않는 캐릭터명입니다.");
      return 0;
    }
    var imgurl = data.split("님의")[1].split("content=\"")[1].split("\">")[0];
    var engtemp = data.split("각인 효과")[1];
    data = data.replace(/(<([^>]+)>)/gi,"");
    var result = "《" + chrname + " 님의 정보》\n";
    var lv = data.split("캐릭터이름")[1].split("보유 캐릭터")[0].replace(/\n/gi, "").trim().split(" ")[0];
    var havechr = data.split("보유 캐릭터")[1].split(") ")[1].split("레이어 닫기")[0].replace(/              /gi, "").replace(/\n/gi, "").replace(/ Lv/gi, "\nLv").replace(/@/gi, "\n\n@");
    var serv = data.split(" 서버")[1].split("@")[1].split("\n")[0];
    var cls = data.split(" 서버")[1].split("클래스")[1].split("원정대")[0].replace(/\n/gi, "").trim();
    var exp = data.split(" 원정대")[1].split("칭호")[0].replace(/\n/gi, "").trim();
    var title = data.split(" 칭호")[1].split("장착")[0].replace(/\n/gi, "").trim();
    var temlev1 = data.split("장착 아이템 레벨")[1].split("달성 아이템 레벨")[0].replace(/\n/gi, "").trim();
    var temlev2 = data.split("달성 아이템 레벨")[1].split("길드명")[0].replace(/\n/gi, "").trim();
    var gld = data.split(" 길드명")[1].split("PVP")[0].replace(/\n/gi, "").trim();
    var pvp = data.split(" PVP")[1].split("영지")[0].replace(/\n/gi, "").trim();
    var land = data.split(" 영지")[1].split("특수장비")[0].replace(/\n/gi, "").trim();
    if (data.indexOf(" 공격력") != -1) {
      var atk = data.split(" 공격력 ")[1].split(" ")[0];
    } else {
      var atk = "-";
    }

    if (data.indexOf(" 생명력") != -1) {
      var hp = data.split(" 생명력 ")[1].split(" ")[0];
    } else {
      var hp = "-";
    }
    
    if (data.indexOf(" 치명") != -1) {
      var cri = data.split(" 치명 ")[1].split(" ")[0];
    } else {
      var cri = 0;
    }

    if (data.indexOf(" 특화") != -1) {
      var spe = data.split(" 특화 ")[1].split(" ")[0];
    } else {
      var spe = 0;
    }

    if (data.indexOf(" 신속") != -1) {
      var spd = data.split(" 신속 ")[1].split(" ")[0];
    } else {
      var spd = 0;
    }

    if (data.indexOf(" 제압") != -1) {
      var sup = data.split(" 제압 ")[1].split(" ")[0];
    } else {
      var sup = 0;
    }

    if (data.indexOf(" 인내") != -1) {
      var pat = data.split(" 인내 ")[1].split(" ")[0];
    } else {
      var pat = 0;
    }

    if (data.indexOf(" 숙련") != -1) {
      var skl = data.split(" 숙련 ")[1].split(" ")[0];
    } else {
      var skl = 0;
    }
    
    var life = data.split("생활스킬")[1].split("var")[0].replace(/\n/gi, "").trim().replace(/             /gi, "\n").replace(/Lv/gi, " Lv");
    var tend = data.split("id: '#chart-states',")[1].split("value: [")[1].split("],")[0].replace(/                            /gi, "").replace(/\s/gi, "").trim().split(",");

    if (engtemp.indexOf("<span>") != -1) {
      var lencheck = engtemp.split("<span>");
      var eng = "";
      for (var i = 1; i < lencheck.length; i++) {
        eng = eng + lencheck[i].split("</span>")[0] + "\n";
      }
    } else {
      var eng = "각인 효과가 없습니다.\n";
    }

    var checker = (Number(cri) + Number(spe) + Number(spd) + Number(sup) + Number(pat) + Number(skl)) / 6;

    result = result + lv + " " + cls + " (" + pvp + ") @" + serv
             + "\n원정대 레벨 : " + exp
             + "\n장착 아이템 레벨 : " + temlev1
             + "\n달성 아이템 레벨 : " + temlev2
             + "\n공격력 : " + atk
             + "\n생명력 : " + hp
             + (cri > 100 ? "\n치명 : " + cri : "")
             + (spe > 100 ? "\n특화 : " + spe : "")
             + (spd > 100 ? "\n신속 : " + spd : "")
             + (sup > 100 ? "\n제압 : " + sup : "")
             + (pat > 100 ? "\n인내 : " + pat : "")
             + (skl > 100 ? "\n숙련 : " + skl : "")
             + (checker <= 100 ? "\n수치가 100이 넘는 특성이 없습니다." : "")
             + "\n▽▼추가 정보 보기▼▽" + "​".repeat(495)
             + "\n칭호 : " + title
             + "\n길드 : " + gld
             + "\n영지 : " + land
             + "\n\n각인 효과\n" + eng
             + "\n생활 레벨\n" + life
             + "\n\n성향\n지성 " + tend[0]
             + "\n담력 " + tend[1]
             + "\n매력 " + tend[2]
             + "\n친절 " + tend[3]
             + "\n\n보유 캐릭터 목록" + havechr;

    switch (check) {
      case 0:
        replier.reply(result);
        break;

      case 1:
        Kakao.send(room, {
          "link_ver": "4.0",
          "template_id": 35315 ,
          "template_args": {
            "title": "《" + chrname + " 님의 정보》",
            "data0": lv + " " + cls + " (" + pvp + ")",
            "data1": "원정대 : Lv." + exp + " @" + serv,
            "data2": "장착 템렙 : " + temlev1 + "\n달성 템렙 : " + temlev2,
            "data3": "",
            "data4": "공격력 : " + atk + "\n생명력 : " + hp,
            "data5": "",
            "data6": "치명 : " + cri + "\n특화 : " + spe + "   신속 : " + spd,
            "data7": "",
            "data8": "지성 " + tend[0] + "   담력 " + tend[1] + "\n매력 " + tend[2] + "   친절 " + tend[3],
            "data9": "",
            "img0": imgurl,
            "img1": "https://cdn.discordapp.com/attachments/778559127273734165/846744210681102346/lvicon.png",
            "img2": "https://cdn.discordapp.com/attachments/778559127273734165/846743205852479488/sword-and-shield-icon-6.png",
            "img3": "https://cdn.discordapp.com/attachments/778559127273734165/846748097517977670/staticon.png",
            "img4": "https://cdn.discordapp.com/attachments/778559127273734165/846748121899335680/ninab.png"
          }
        }, "custom");        
        break;
    
      default:
        break;
    }
  }

  if (msg.indexOf("!장비 ") == 0) {
    var chrname = msg.split(" ")[1];
    var url = encodeURIComponent(chrname);
    var data = Utils.getWebText("https://lostark.game.onstove.com/Profile/Character/" + url);
    if (data.indexOf("캐릭터 정보가 없습니다.") != -1) {
      replier.reply(chrname + "님은 존재하지 않는 캐릭터명입니다.");
      return 0;
    }
    var imgurl = data.split("님의")[1].split("content=\"")[1].split("\">")[0];
    var engtemp = data.split("각인 효과")[1];
    data = data.replace(/(<([^>]+)>)/gi,"");
    var result = "《" + chrname + " 님의 정보》\n";
    var lv = data.split("캐릭터이름")[1].split("보유 캐릭터")[0].replace(/\n/gi, "").trim().split(" ")[0];
    var havechr = data.split("보유 캐릭터")[1].split(") ")[1].split("레이어 닫기")[0].replace(/              /gi, "").replace(/\n/gi, "").replace(/ Lv/gi, "\nLv").replace(/@/gi, "\n\n@");
    var serv = data.split(" 서버")[1].split("@")[1].split("\n")[0];
    var cls = data.split(" 서버")[1].split("클래스")[1].split("원정대")[0].replace(/\n/gi, "").trim();
    var exp = data.split(" 원정대")[1].split("칭호")[0].replace(/\n/gi, "").trim();
    var title = data.split(" 칭호")[1].split("장착")[0].replace(/\n/gi, "").trim();
    var temlev1 = data.split("장착 아이템 레벨")[1].split("달성 아이템 레벨")[0].replace(/\n/gi, "").trim();
    var temlev2 = data.split("달성 아이템 레벨")[1].split("길드명")[0].replace(/\n/gi, "").trim();
    var gld = data.split(" 길드명")[1].split("PVP")[0].replace(/\n/gi, "").trim();
    var pvp = data.split(" PVP")[1].split("영지")[0].replace(/\n/gi, "").trim();
    var land = data.split(" 영지")[1].split("특수장비")[0].replace(/\n/gi, "").trim();
    if (data.indexOf(" 공격력") != -1) {
      var atk = data.split(" 공격력 ")[1].split(" ")[0];
    } else {
      var atk = "-";
    }

    if (data.indexOf(" 생명력") != -1) {
      var hp = data.split(" 생명력 ")[1].split(" ")[0];
    } else {
      var hp = "-";
    }
    
    if (data.indexOf(" 치명") != -1) {
      var cri = data.split(" 치명 ")[1].split(" ")[0];
    } else {
      var cri = "-";
    }

    if (data.indexOf(" 특화") != -1) {
      var spe = data.split(" 특화 ")[1].split(" ")[0];
    } else {
      var spe = "-";
    }

    if (data.indexOf(" 신속") != -1) {
      var spd = data.split(" 신속 ")[1].split(" ")[0];
    } else {
      var spd = "-";
    }

    if (data.indexOf(" 제압") != -1) {
      var sup = data.split(" 제압 ")[1].split(" ")[0];
    } else {
      var sup = "-";
    }

    if (data.indexOf(" 인내") != -1) {
      var pat = data.split(" 인내 ")[1].split(" ")[0];
    } else {
      var pat = "-";
    }

    if (data.indexOf(" 숙련") != -1) {
      var skl = data.split(" 숙련 ")[1].split(" ")[0];
    } else {
      var skl = "-";
    }
    
    var life = data.split("생활스킬")[1].split("var")[0].replace(/\n/gi, "").trim().replace(/             /gi, "\n").replace(/Lv/gi, " Lv");
    var tend = data.split("id: '#chart-states',")[1].split("value: [")[1].split("],")[0].replace(/                            /gi, "").replace(/\s/gi, "").trim().split(",");

    if (engtemp.indexOf("<span>") != -1) {
      var lencheck = engtemp.split("<span>");
      var eng = "";
      for (var i = 1; i < lencheck.length; i++) {
        eng = eng + lencheck[i].split("</span>")[0] + "\n";
      }
    } else {
      var eng = "각인 효과가 없습니다.\n";
    }

    result = result + lv + " " + cls + " (" + pvp + ") @" + serv + "\n원정대 레벨 : " + exp + "\n장착 아이템 레벨 : " + temlev1 + "\n달성 아이템 레벨 : " + temlev2 + "\n공격력 : " + atk + "\n생명력 : " + hp + "\n치명 : " + cri + "\n특화 : " + spe + "\n신속 : " + spd + "\n제압 : " + sup + "\n인내 : " + pat + "\n숙련 : " + skl + "\n▽▼추가 정보 보기▼▽" + "​".repeat(495) + "\n칭호 : " + title + "\n길드 : " + gld + "\n영지 : " + land + "\n\n각인 효과\n" + eng + "\n생활 레벨\n" + life + "\n\n성향\n지성 " + tend[0] + "\n담력 " + tend[1] + "\n매력 " + tend[2] + "\n친절 " + tend[3] + "\n\n보유 캐릭터 목록" + havechr;

    switch (check) {
      case 0:
        replier.reply(result);
        break;

      case 1:
        Kakao.send(room, {
          "link_ver": "4.0",
          "template_id": 35315 ,
          "template_args": {
            "title": "《" + chrname + " 님의 정보》",
            "data0": lv + " " + cls + " (" + pvp + ")",
            "data1": "원정대 : Lv." + exp + " @" + serv,
            "data2": "장착 템렙 : " + temlev1 + "\n달성 템렙 : " + temlev2,
            "data3": "",
            "data4": "공격력 : " + atk + "\n생명력 : " + hp,
            "data5": "",
            "data6": "치명 : " + cri + "\n특화 : " + spe + "   신속 : " + spd,
            "data7": "",
            "data8": "지성 " + tend[0] + "   담력 " + tend[1] + "\n매력 " + tend[2] + "   친절 " + tend[3],
            "data9": "",
            "img0": imgurl,
            "img1": "https://cdn.discordapp.com/attachments/778559127273734165/846744210681102346/lvicon.png",
            "img2": "https://cdn.discordapp.com/attachments/778559127273734165/846743205852479488/sword-and-shield-icon-6.png",
            "img3": "https://cdn.discordapp.com/attachments/778559127273734165/846748097517977670/staticon.png",
            "img4": "https://cdn.discordapp.com/attachments/778559127273734165/846748121899335680/ninab.png"
          }
        }, "custom");
        break;
    
      default:
        break;
    }
  }
  
  if (msg.indexOf("!수집 ") == 0) {
    var today = new Date();
    if (today.getDay() == 3 && today.getHours() > 6 && today.getHours() < 10) {
      replier.reply("정기점검 시간입니다.");
      return 0;
    }

    var chrname = msg.split(" ")[1];
    var url = encodeURIComponent(chrname);

    var data = Utils.getWebText("https://lostark.game.onstove.com/Profile/Character/" + url);
    if (data.indexOf("캐릭터 정보가 없습니다.") != -1) {
      replier.reply(chrname + "님은 존재하지 않는 캐릭터명입니다.");
      return 0;
    }

    var cutting = data.split("memberNo")[1].split("'");
    var memberNo = cutting[1];
    var pcId = cutting[3];
    var worldNo = cutting[5];

    var collectData = org.jsoup.Jsoup.connect("https://m-lostark.game.onstove.com/Profile/GetCollection").data("memberNo", memberNo).data("pcId", pcId).data("worldNo", worldNo).post().toString();

    var collect = new Array("섬마", "오페", "거심", "미술품", "모코코", "모험물", "이그네아", "세계수");
    result = "《" + chrname + " 님의 수집형 포인트》\n";
    var now = "";
    var max = "";
    var tabSize, nowTab, maxTab;
    for (i = 0; i < 8; i++) {
      temp = collectData.split("획득 현황")[i + 1].split("/div")[0];
      now = temp.split("now-count")[1].split("<")[0].split(">")[1];
      max = temp.split("max-count")[1].split("<")[0].split(">")[1];
      tabSize = 5 - collect[i].length;
      nowTab = 4 - now.length + (now.length == 4 ? 0 : 1);
      maxTab = 4 - max.length + (max.length == 4 ? 0 : 1);
      result = result + "\n" + collect[i] + "　".repeat(tabSize) + " ".repeat(nowTab) + now + " / " + " ".repeat(maxTab) + max + " 개";
    }

    replier.reply(result);

    // Kakao.send(room, {
    //   "link_ver": "4.0",
    //   "template_id": 66529 ,
    //   "template_args": {
    //     "${img}": "",           // 탬플릿 상단 이미지
    //     "${imgWid}": "",        // 탬플릿 상단 이미지 너비
    //     "${imgHei}": "",        // 탬플릿 상단 이미지 높이
    //     "${proImg}": "",        // 프로필 이미지
    //     "${proImgWid}": "",     // 프로필 이미지 너비
    //     "${proImgHei}": "",     // 프로필 이미지 높이
    //     "${proName}": "",       // 프로필 이름
    //     "${imgItemTitle}": "",  // 이미지 아이템 제목
    //     "${imgItemDes}": "",    // 이미지 아이템 설명
    //     "${imgItemImg}": "",    // 이미지 아이템 이미지
    //     "${txtItemTitle1}": "", // 텍스트 아이템1 제목
    //     "${txtItemDes1}": "",   // 텍스트 아이템1 설명
    //     "${txtItemTitle2}": "", // 텍스트 아이템2 제목
    //     "${txtItemDes2}": "",   // 텍스트 아이템2 설명
    //     "${txtItemTitle3}": "", // 텍스트 아이템3 제목
    //     "${txtItemDes3}": "",   // 텍스트 아이템3 설명
    //     "${txtItemTitle4}": "", // 텍스트 아이템4 제목
    //     "${txtItemDes4}": "",   // 텍스트 아이템4 설명
    //     "${txtItemTitle5}": "", // 텍스트 아이템5 제목
    //     "${txtItemDes5}": "",   // 텍스트 아이템5 설명
    //     "${AL}": "",            // 텍스트 아이템 정렬 (left, right, center)
    //     "${totalItemTitle}": "", // 총합 아이템 제목
    //     "${totalItemDes}": "",   // 총합 아이템 설명
    //     "${title}": "",         // 제목
    //     "${des}": "",           // 설명
    //     "title": "《" + chrname + " 님의 수집형 포인트》",
    //     "data0": lv + " " + cls + " (" + pvp + ")",
    //     "data1": "원정대 : Lv." + exp + " @" + serv,
    //     "data2": "장착 템렙 : " + temlev1 + "\n달성 템렙 : " + temlev2,
    //     "data3": "",
    //     "data4": "공격력 : " + atk + "\n생명력 : " + hp,
    //     "data5": "",
    //     "data6": "치명 : " + cri + "\n특화 : " + spe + "   신속 : " + spd,
    //     "data7": "",
    //     "data8": "지성 " + tend[0] + "   담력 " + tend[1] + "\n매력 " + tend[2] + "   친절 " + tend[3],
    //     "data9": "",
    //     "img0": imgurl,
    //     "img1": "https://cdn.discordapp.com/attachments/778559127273734165/846744210681102346/lvicon.png",
    //     "img2": "https://cdn.discordapp.com/attachments/778559127273734165/846743205852479488/sword-and-shield-icon-6.png",
    //     "img3": "https://cdn.discordapp.com/attachments/778559127273734165/846748097517977670/staticon.png",
    //     "img4": "https://cdn.discordapp.com/attachments/778559127273734165/846748121899335680/ninab.png"
    //   }
    // }, "custom");
    
    return 0;
  }
    
  if (msg.indexOf("!각인 ") == 0) {
    var today = new Date();
    if (today.getDay() == 3 && today.getHours() > 6 && today.getHours() < 10) {
      replier.reply("정기점검 시간입니다.");
      return 0;
    }

    var chrname = msg.split(" ")[1];
    var url = encodeURIComponent(chrname);

    var data = Utils.getWebText("https://lostark.game.onstove.com/Profile/Character/" + url);
    if (data.indexOf("캐릭터 정보가 없습니다.") != -1) {
      replier.reply(chrname + "님은 존재하지 않는 캐릭터명입니다.");
      return 0;
    }

    var engtemp = data.split("각인 효과")[1];
    data = data.replace(/(<([^>]+)>)/gi, "");

    var result = "《" + chrname + " 님의 각인 정보》\n";

    var lv = data.split("캐릭터이름")[1].split("보유 캐릭터")[0].replace(/\n/gi, "").trim().split(" ")[0];
    var serv = data.split(" 서버")[1].split("@")[1].split("\n")[0];
    var cls = data.split(" 서버")[1].split("클래스")[1].split("원정대")[0].replace(/\n/gi, "").trim();
    var exp = data.split(" 원정대")[1].split("칭호")[0].replace(/\n/gi, "").trim();
    var temlev1 = data.split("장착 아이템 레벨")[1].split("달성 아이템 레벨")[0].replace(/\n/gi, "").trim();
    var temlev2 = data.split("달성 아이템 레벨")[1].split("길드명")[0].replace(/\n/gi, "").trim();


    if (engtemp.indexOf("<span>") != -1) {
      var lencheck = engtemp.split("<span>");
      var eng = "";
      for (var i = 1; i < lencheck.length; i++) {
        eng = eng + "\n" + lencheck[i].split("</span>")[0];
      }
    } else {
      var eng = "각인 효과가 없습니다.\n";
    }

    result = result + lv + " " + cls + " @" + serv + "\n원정대 레벨 : " + exp + "\n장착 아이템 레벨 : " + temlev1 + "\n달성 아이템 레벨 : " + temlev2 + "\n\n각인 효과\n" + eng;

    replier.reply(result);
    return 0;
  }

  /*
  if (msg.indexOf("!거래 ") == 0) {
    if (msg.indexOf("@") != -1) {
      var inputGrade = msg.split("@")[1];
      for (i = 0; i < grade.length; i++) {
        if (inputGrade == grade[i]) {
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
      var item = msg.split("!거래 ")[1].split("@")[0];
    } else {
      var inputGrade = "99";
      var item = msg.split("!거래 ")[1];
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
      nameRow = nameRow + " (" + grade[itemGrade - 1] + ")";
    }
    result = result + "\n최근 거래가 : " + latelyPrice + "\n현재 최저가 : " + nowPrice;

    Kakao.send(room, {
      "link_ver": "4.0",
      "template_id": 35311,
      "template_args": {
        "title": nameRow,
        "data0": "최저가 : " + nowPrice + " 골드",
        "data1": "최근 거래가 : " + latelyPrice + " 골드",
        "img": img
      }
    }, "custom");
    return 0;
  }*/

  if (msg == "!시세목록") {
    result = "《검색 가능 아이템 목록》\n\n∇▼전체 보기를 눌러주세요▼∇" + "​".repeat(495);
    for (let i = 0; i < quote.length; i++) {
      if (quote[i].indexOf("||") != -1) {
        result = result + "\n" + quote[i].replace(/\|\|/g, " / ");
      } else {
        result = result + "\n" + quote[i];
      }
    }

    replier.reply(result);
  }

  if (msg.indexOf("!시세 ") == 0) {
    var item = msg.split("!시세 ")[1];
    var itemCount = 0;
    var itemName = "";
    var itemIndex = 999;
    for (let i = 0; i < quote.length; i++) {
      if (quote[i].indexOf("||") != -1) {
        var shortCount = 0;
        var shortCheck = quote[i].split("||");
        for (let j = 0; j < shortCheck.length; j++) {
          if (item == shortCheck[j]) {
            itemName = shortCheck[0];
            itemIndex = i;
          } else {
            shortCount++;
          }
        }
        if (shortCount == shortCheck.length) {
          itemCount++;
        }
      } else {
        if (item == quote[i]) {
          itemName = quote[i];
          itemIndex = i;
        } else {
          itemCount++;
        }
      }
    }

    if (itemCount == quote.length) {
      replier.reply("해당 아이템을 찾을 수 없습니다.\n'!시세목록' 명령어를 통해 검색 가능한 아이템 목록을 확인해주세요.");
      return 0;
    }

    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var todayDate = y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d);

    var itemNameURI = encodeURI(itemName);
    var data = Utils.getWebText("https://loado-app.herokuapp.com/loado/api/itemPrice/getItemPrice/" + itemNameURI + "/" + todayDate + "/" + todayDate);
    if (data.split('"itemPriceLog":')[1].split("}")[0] == "{") {
      replier.reply("검색 결과가 없습니다.");
      return 0;
    }

    var dataDate = data.split('"createdDttm":"')[1].split('","')[0];
    var dataName = data.split('"itemName":"')[1].split('","')[0];
    var dataPrice = data.split('"itemPrice":')[1].split('}')[0];

    result = "《아이템 시세 검색 결과》\n";
    result = result + "\n이름 : " + dataName;
    result = result + "\n현재 시세 : " + dataPrice + " 골드";
    result = result + "\n\n" + dataDate + " 기준";

    var itemImg = (dataName.indexOf("각인서") != -1 ? quoteImg[quoteImg.length - 1] : quoteImg[itemIndex]);

    Kakao.send(room, {
      "link_ver": "4.0",
      "template_id": 35311,
      "template_args": {
        "title": dataName,
        "data0": dataPrice + " 골드",
        "data1": dataDate + " 기준",
        "img": itemImg
      }
    }, "custom");
    return 0;
  }

  if (msg == "!지도") {
    var data = Utils.getWebText("https://loatool.taeu.kr/calculator/secret-map");

    var mapPrice = data.split("전설지도 가격")[1].split('<span class="loa-gold font-weight-bold">')[1].split("</span>")[0];
    var tax = data.split("판매수수료")[1].split('<span class="loa-gold font-weight-bold">')[1].split("</span>")[0];
    var flagSpot = data.split("손익분기점")[1].split('<span class="loa-gold font-weight-bold">')[1].split("</span>")[0];
    var goodPrice = data.split("입찰적정가")[1].split('<span class="loa-gold green--text font-weight-bold">')[1].split("</span>")[0];
    var getGold = data.split("분배금")[1].split('<span class="loa-gold font-weight-bold">')[1].split("</span>")[0];

    Kakao.send(room, {
      "link_ver": "4.0",
      "template_id": 66529 ,
      "template_args": {
        "imgItemTitle": "베른 남부 전설 지도",
        "imgItemDes": "",
        "imgItemImg": "https://cdn.discordapp.com/attachments/778559127273734165/963127508037935115/unknown.png",
        "txtItemTitle1": "가격",
        "txtItemDes1": mapPrice,
        "txtItemTitle2": "수수료",
        "txtItemDes2": tax,
        "txtItemTitle3": "손익분기점",
        "txtItemDes3": flagSpot,
        "txtItemTitle4": "입찰적정가",
        "txtItemDes4": goodPrice,
        "txtItemTitle5": "분배금",
        "txtItemDes5": getGold,
        "AL": "right",
        "title": "실제 시세와 차이가 있을 수 있습니다"
      }
    }, "custom");
  }

  if (msg == "!모험섬") {
    var data = Utils.getWebText("https://loawa.com/");

    var extract = data.split("모험섬")[1];

    var islandName = new Array;
    var resultType = new Array;
    var resultTypeImg = new Array;
    
    var islandLength = extract.split("lang-main");
    for (let i = 1; i < islandLength.length; i++) {
      var nameTemp = islandLength[i].split(">")[1].split("<")[0];
      var typeTemp = islandLength[i].split("lang-text")[1].split(">")[1].split("<")[0];
      var imgTemp = "";
      for (let j = 0; j < resultImgName.length; j++) {
        if (resultImgName[j] == typeTemp) imgTemp = resultImg[j];
      }
      islandName.push(nameTemp);
      resultType.push(typeTemp);
      resultTypeImg.push(imgTemp);
    }

    Kakao.send(room, {
      "link_ver": "4.0",
      "template_id": 35313 ,
      "template_args": {
        "title": "모험섬 등장 정보",
        "data0": islandName[0],
        "data1": resultType[0],
        "img0" : resultTypeImg[0],
        "data2": islandName[1],
        "data3": resultType[1],
        "img1" : resultTypeImg[1],
        "data4": islandName[2],
        "data5": resultType[2],
        "img2" : resultTypeImg[2],
      }
    }, "custom");
  }

}
