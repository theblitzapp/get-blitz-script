/*
  Script to embed a multilingual Blitz banner
  on champion.gg, lolcounter.com & probuilds.net
*/

/* Language map */
var languageMap = {
  'bg': 'bg-BG',
  'bg-BG': 'bg-BG',
  'cs': 'cs-CZ',
  'cs-CZ': 'cs-CZ',
  'de': 'de-DE',
  'de-AT': 'de-DE',
  'de-CH': 'de-DE',
  'de-DE': 'de-DE',
  'el': 'el-GR',
  'el-GR': 'el-GR',
  'en-US': 'en-US',
  'es': 'es-ES',
  'es-419': 'es-ES',
  'es-AR': 'es-ES',
  'es-CL': 'es-ES',
  'es-CO': 'es-ES',
  'es-EC': 'es-ES',
  'es-ES': 'es-ES',
  'es-LA': 'es-ES',
  'es-MX': 'es-ES',
  'es-NI': 'es-ES',
  'es-US': 'es-ES',
  'es-VE': 'es-ES',
  'fi': 'fi-FI',
  'fi-FI': 'fi-FI',
  'fr': 'fr-FR',
  'fr-BE': 'fr-FR',
  'fr-CA': 'fr-FR',
  'fr-CH': 'fr-FR',
  'fr-FR': 'fr-FR',
  'ko-KR': 'ko-KR',
  'pl': 'pl-PL',
  'pl-PL': 'pl-PL',
  'pt': 'pt-PT',
  'pt-BR': 'pt-BR',
  'pt-PT': 'pt-PT',
  'ro': 'ro-RO',
  'ro-RO': 'ro-RO',
  'ru': 'ru-RU',
  'ru-RU': 'ru-RU',
  'sk': 'sk-SK',
  'sk-SK': 'sk-SK',
  'tr': 'tr-TR',
  'tr-TR': 'tr-TR',
  'vi': 'vi-VN',
  'vi-VN': 'vi-VN',
  'zh': 'zh-CN',
  'zh-CN': 'zh-CN',
  'zh-HK': 'zh-TW',
  'zh-Hans': 'zh-CN',
  'zh-Hant': 'zh-TW',
  'zh-SG': 'zh-CN',
  'zh-TW': 'zh-TW'
};

/* String map */
var stringMap = {
  'bg-BG': ['Пробвайте нашето десктоп приложение: автоматични руни, бюлдове, и каунтър статистики', 'Aflați mai multe'],
  'cs-CZ': ['Vyzkoušej naši BEZPLATNOU aplikaci: automatické runy, sady předmětů a statistiky.', 'Dozvědět se víc'],
  'de-DE': ['Probiere unsere KOSTENLOSE Desktop-App: automatische Runen, Builds und Counter-Statistiken.', 'Erfahre mehr'],
  'el-GR': ['Δοκιμάστε τη δωρεάν εφαρμογή υπολογιστή:αυτόματοι ρούνοι,αντικείμενα και στατιστικά παιξίματος.', 'Μάθετε περισσότερα.'],
  'en-US': ['Try Our FREE Desktop App: automatic runes, builds, and counter stats.', 'Learn more'],
  'es-ES': ['Prueba GRATIS nuestra aplicación de escritorio: runas automáticas, builds, y estadísticas de counter.', 'Leer más'],
  'fi-FI': ['Testaa meidän ILMAISTA työpöytäsovellusta: automaattiset runet, buildit ja vastastrategiat.', 'Opi lisää'],
  'fr-FR': ['Essayez notre application GRATUITE: runes automatiques, builds, et stats des counter.', 'En apprendre plus'],
  'ko-KR': ['저희의 무료 프로그램을 사용해 보세요: 자동으로 룬, 아이템빌드와 카운터 정보를 제공해 드립니다.', '자세히'],
  'pl-PL': ['Przetestuj nasza DARMOWA aplikacje na komputer: automatyczne runy, ekwipunek oraz statystyki przeciwnika', 'Dowiedz sie wiecej'],
  'pt-BR': ['Teste GRÁTIS nosso aplicativo para desktop: Runas, Arsenais e informações de counters de forma automática.', 'Saiba mais'],
  'pt-PT': ['Experimenta a nossa aplicação gratuita para Desktop: runas automáticas, builds e dicas para vencer.', 'Sabe mais'],
  'ro-RO': ['Încercați aplicația noastră gratuită Desktop: rune automate, build-uri și statistici contra adversarilor.', 'Aflați mai multe'],
  'ru-RU': ['Попробуйте нашу БЕСПЛАТНУЮ программу: автоматические руны, билды, контрпики.', 'Узнать больше'],
  'sk-SK': ['Vyskúšaj našu BEZPLATNÚ aplikáciu: automatické runy, sady predmetov a štatistiky.', 'Dozvedieť sa viac'],
  'tr-TR': ['ÜCRETSİZ Masaüstü Uygulamamızı Deneyin: otomatik rünler, eşya dizilimleri ve karşı takım istatistikleri.', 'Daha fazlası için tıklayın'],
  'vi-VN': ['Thử ngay ứng dụng trên máy tính MIỄN PHÍ của chúng tôi: tự động tìm ngọc, cách lên đồ, và các kèo khắc chế.', 'Tìm hiểu ngay'],
  'zh-CN': ['试试我们的免费桌面App：自动符文，出装，击杀等数据统计。', '获取更多信息'],
  'zh-TW': ['試試我們的免費桌面App：自動符文，出裝，擊殺等資料統計。', '獲取更多資訊']
};

/* Get language from navigator */
function getLanguage() {
  var languageCode;
  if (navigator.languages && navigator.languages.length) {
    languageCode = navigator.languages[0];
  } else if (navigator.userLanguage) {
    languageCode = navigator.userLanguage;
  } else if (navigator.language) {
    languageCode = navigator.language;
  }
  var language = languageMap[languageCode] || 'en-US';
  return language;
}

/* For the map object defined above, this function will give the right string */
function getStringFromMap(strMap, pos) {
  var language = getLanguage();
  return strMap[language][pos] || strMap[DEFAULT_LANGUAGE][pos];
}

/* Build the Blitz header */
function buildBlitzHeader() {
  var image = '<img src="https://s3.amazonaws.com/solomid-resources/probuilds/img/blitzheaderlogo.png">';
  var firstString = getStringFromMap(stringMap, 0);
  var secondString = getStringFromMap(stringMap, 1);
  return '<p>' + image + firstString + '&nbsp; <u>' + secondString + '</u></p>';
}

/* Set the blitz header */
void (function (global) {
  var bannerElement = document.getElementById('blitzBanner');
  if (!bannerElement) {
    bannerElement = document.createElement('div');
    bannerElement.id = 'blitzBanner';
    document.body.insertBefore(bannerElement, document.body.firstChild);
  }
  bannerElement.innerHTML = buildBlitzHeader();
})(this);
