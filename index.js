
/*
  Define an easy structure for strings
  We have limited strings so this structure should do well
*/
const firstStringMap = {
"cs_CZ" : "Už tě nebaví čekat až se načte Chrome? Vyzkoušej naši BEZPLATNOU aplikaci: automatické runy, sady předmětů a statistiky.",
"de_DE" : "Keine Lust mehr zu warten, bis Chrome geladen ist? Probiere unsere KOSTENLOSE Desktop App aus: Automatischer Import von Runen und Builds, so wie Unterstützung beim Gewinnen deiner Lane.",
"es_ES" : "¿Cansado de que el chrome tarde en cargar? Prueba GRATIS nuestra aplicación de escritorio: runas automáticas, builds, y estadísticas de counter.",
"fr_FR" : "Fatigué d'attendre que votre navigateur se charge ? Essayez notre application de bureau GRATUITE : runes automatiques, builds et des astuces pour gagner votre lane, tout ça totalement automatisé.",
"ko_KR" : "크롬 로드를 기다리는게 지겨우세요?  저희의 무료 컴퓨터 앱을 사용해보세요:  자동 룬, 빌즈 그리고 상대 통계.",
"pt_BR" : "Cansado de esperar o Chrome carregar? Teste GRÁTIS nosso aplicativo para desktop: Runas, Arsenais e informações de counters de forma automática.",
"pt_PT" : "Cansado de esperar o Chrome carregar? Teste GRÁTIS nosso aplicativo para desktop: Runas, Arsenais e informações de counters de forma automática.",
"ru_RU" : "Устал ждать пока Chrome прогрузиться? Попробуй нашу БЕСПЛАТНУЮ Программу: автоматические руны, сборки, и контр-статистика.",
"zh_CN" : "厌倦了等待Chrome的加载？试试我们的免费桌面App：自动符文，出装，击杀等数据统计。",
"zh_TW" : "厭倦了等待Chrome的載入？試試我們的免費桌面App：自動符文，出裝，擊殺等資料統計。",
  "en_US": "Tired of waiting for Chrome to load? Try Our FREE Desktop App: automatic runes, builds, and counter stats.",
}

const secondStringMap = {
  "cs_CZ" : "Dozvědět se víc",
"de_DE" : "Erfahre mehr",
"es_ES" : "Leer más",
"fr_FR" : "En apprendre plus",
"ko_KR" : "더 알아보기",
"pt_BR" : "Saiba mais",
"pt_PT" : "Saiba mais",
"ru_RU" : "Узнай больше",
"zh_CN" : "获取更多信息",
"zh_TW" : "獲取更多資訊",
"en_US" : "Learn more",
}

/*
  Get language from navigator
*/
function getLanguage(){
  var language = "en_US";
  if (navigator.languages && navigator.languages.length) {
    language = navigator.languages[0];
  } else if (navigator.userLanguage) {
    language = navigator.userLanguage;
  } else if(navigator.language) {
    language = navigator.language;
  }
  return language;
}

/*Default language*/
var DEFAULT_LANGUAGE = "en_US"

/*For the map objects defined above, this function will give the right string */
function getStringFromMap(strMap){
  var language = getLanguage();
  return strMap[language] || strMap[DEFAULT_LANGUAGE]
}

/*Get the blitzheader string*/
function getBlitzHeader(){
  var firstString = getStringFromMap(firstStringMap);
  var secondString = getStringFromMap(secondStringMap);
  return firstString + '&nbsp; <u>' + secondString + '</u>'
}

/*Set the blitz header */
document.getElementById('blitzHeader').innerHTML =getBlitzHeader();

