const { PrismaClient } = require("@prisma/client");
const { hash } = require("bcrypt");

var prismaClient = new PrismaClient();

async function main() {
  const password = await hash("admin", 12);
  const admin = await prismaClient.user.upsert({
    where: { username: "admin" },
    update: { password: password },
    create: {
      username: "admin",
      password: password,
    },
  });
  console.log({ admin });

  for (const disease of plantDiseases) {
    const result = await prismaClient.plantDisease.upsert({
      where: { disease: disease.disease },
      update: { en: disease.en, ta: disease.ta, sh: disease.sh },
      create: disease,
    });

    console.log(`Seeded: ${result.name}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });

const plantDiseases = [
  {
    disease: "brinjal-athilacna-beetles",
    en: "• Choose resistant or moderately resistant cultivars available in the region.\n• Pick off the insects by hand and destroy, if the eggplant is grown in smaller plots.\n • Protect the population of parasitoids such as Pediobius foveolatus (Crawford). \n• Reduced use of synthetic pesticides may enhance the activities of natural enemies. \n• If necessary, spray a selective pesticide after consulting with the local extension staff.",
    ta: "• பகுதியில் கிடைக்கக்கூடிய மிகுந்த தடுப்பு அல்லது நடுத்தர தடுப்பு வகைகளைத் தேர்ந்தெடுக்கவும்.\n• சிறிய தாவர வயல்களில் பாசிச்சியாழைக் கைகளால் பிடுங்கி அழிக்கவும்.\n• Pediobius foveolatus (Crawford) போன்ற பரஜிடக்கள் இனங்களின் மக்கள் தொகையைப் பாதுகாக்கவும்.\n• செயற்கை കीடுமருந்துகளைக் குறைத்தல் இயற்கை எதிரிகளின் செயல்பாடுகளை மேம்படுத்தலாம்.\n• அவசியமெனில், உள்ளூர் விரிவாக்க ஊழியரின் ஆலோசனையைப் பெற்ற பிறகு தேர்ந்தெடுக்கப்பட்ட கீடுமருந்தை தெளிக்கவும்.",
    sh: "• කලාපයේ පවතින ඔරුගමක් සහිත හෝ මධ්‍යම ඔරුගමක් සහිත වගා වර්ග තෝරා ගන්න.\n• කුඩා වගා තීරුවල වගා කරන අතර, පොතු මකුළුවන් අතින් කඩා දැමීම.\n• Pediobius foveolatus (Crawford) වැනි පරපෝෂිත ජනගහනය රැක ගැනීම.\n• සාම්ප්‍රදායික කෘමිනාශක අඩු කිරීම ස්වාභාවික සතුරන්ගේ ක්‍රියාකාරිත්වය වැඩි දියුණු කරනු ඇත.\n• අවශ්‍ය නම්, දේශීය විස්තාරක කාර්යාලයේ උපදෙස් සමඟ තෝරාගත් කෘමිනාශකය ඉසින්න.",
  },
  {
    disease: "brinjal-fruitborer",
    en: "• Any single method of pest management alone\n will not achieve a level of EFSB control acceptable\n to producers. A simple and economic IPM technique\n can provide satisfactory control.\n• Avoid monoculture and follow crop rotation.\n• Avoid growing eggplant seedlings near fields \nwith standing crops, in or near fields where the \ncrop was grown previously, or near dried eggplant \nheaps.\n• If seedlings must be grown in those areas, cover\n the beds with 30-mesh nylon net to prevent the\n entry of adult moth.\n• Choose resistant or moderately resistant cultivars\n available in the region.\n• Promptly remove and destroy infested shoots \nand fruit at regular intervals until final harvest.\n• Protect parasitoids\n• Reduced use of synthetic pesticides will enhance the activities of these natural enemies.\n• In addition, weekly releases of egg parasitoid, \nTrichogramma chilonis Ishii @ 1g parasitized \neggs/ha/week and larval parasitoid, Bracon \nhabetor Say @ 800-1000 adults/ha/week could \nbe followed\n",
    ta: "• ஒரு தனி கீட மேலாண்மை முறை மட்டுமே EFSB கட்டுப்பாட்டிற்கு உற்பத்தியாளர்கள் ஏற்றுக்கொள்ளக்கூடிய மட்டத்தை அடைய முடியாது. ஒரு சுலபமான மற்றும் பொருளாதார ஒருங்கிணைந்த பூச்சி மேலாண்மை தந்திரம் சிறப்பான கட்டுப்பாட்டை வழங்கக்கூடும்.\n• ஒரு வகை பயிரிடுதலைத் தவிர்த்து பயிர் மாற்றத்தைப் பின்பற்றுங்கள்.\n• நிலையான பயிர்கள் உள்ள வயல்கள் அருகில் அல்லது முந்தைய பயிரிடப்பட்ட வயல்கள் அருகில் அல்லது வறண்ட பைங்கனி குவியல்கள் அருகில் பைங்கனி நாற்றுகளைப் பயிரிடுவதைத் தவிர்க்கவும்.\n• நாற்றுகளை இந்த பகுதிகளில் வளர்க்க வேண்டுமெனில், வயது வந்த பூச்சிகளின் நுழைவைத் தடுக்க 30-மெஷ் நைலான் வலைக்கு மேல் படுக்கைகளைப் பொதிந்து கொள்ளுங்கள்.\n• பகுதியில் கிடைக்கக்கூடிய மிகுந்த தடுப்பு அல்லது நடுத்தர தடுப்பு வகைகளைத் தேர்ந்தெடுக்கவும்.\n• தொடர்ந்து பாதிக்கப்பட்ட கிளைகள் மற்றும் பழங்களை உடனடியாக நீக்கி அழிக்கவும் இறுதி அறுவடை வரை.\n• பரஜிடக்களைப் பாதுகாக்கவும்\n• செயற்கை கீடுமருந்துகளின் பயன்பாட்டைக் குறைப்பது இந்த இயற்கை எதிரிகளின் செயல்பாட்டை மேம்படுத்தும்.\n• மேலும், வாரந்தோறும் முட்டை பரஜிடக் Trichogramma chilonis Ishii @ 1g பரஜிடக் முட்டைகள்/ஹெக்டேர்/வாரம் மற்றும் லார்வல் பரஜிடக் Bracon habetor Say @ 800-1000 வயது வந்தவர்கள்/ஹெக்டேர்/வாரம் வரை வெளியிடப்பட்டது.",
    sh: "• එක් එක් කෘමි කළමනාකරණ ක්‍රමය එකක්ම EFSB පාලනය සඳහා නිෂ්පාදකයන්ට පිළිගත හැකි මට්ටමක් සපුරාලිය නොහැක. සරල සහ ආර්ථික සමස්ත කෘමි කළමනාකරණ තාක්ෂණයක් සෑහීමකට පත් වන පාලනයක් සැපයිය හැක.\n• එක් වගා වර්ගයකට පමණක් සීමා වීම වැළැක්වීම සහ වගා කිරීම් මාරුව අනුගමනය කරන්න.\n• දැනටමත් වගා කර ඇති කුඩු සහිත ඉඩම් අසල, පෙර වගා කල ඉඩම් අසල නැතහොත් වියළි පෙරටුරු කට්ටල අසල පෙරටුරු තවුල් වගා කිරීම වළක්වන්න.\n• තවුල් එම ප්‍රදේශවල වගා කිරීමට සිදු වුවහොත්, වයස් සහිත මදුරුවන්ගේ පිවිසීම වළක්වා ගැනීම සඳහා තවුල් බෑගයන් 30-මෙෂ් නයිලන් දැලින් වසා දැමිය යුතුය.\n• කලාපයේ පවතින ඔරුගමක් සහිත හෝ මධ්‍යම ඔරුගමක් සහිත වගා වර්ග තෝරා ගන්න.\n• වහාම ආක්‍රාන්ත වූ කොටස් සහ පලතුරු ඉවත් කර විනාශ කරන්න, අවසන් අස්වැන්න දක්වා නිත්‍ය කාලයක් සඳහා.\n• පරපෝෂිත සංරක්ෂණය\n• කෘමිනාශක භාවිතය අඩු කිරීම මේ ස්වාභාවික සතුරන්ගේ ක්‍රියාකාරිත්වය වැඩි දියුණු කරයි.\n• එම අමතර වශයෙන්, සෑම සතියකම මුද්‍රා පරපෝෂිත Trichogramma chilonis Ishii @ 1g පරපෝෂිත මුද්‍රා/ඳෙක්ටර්/සතිය සහ ලාර්වා පරපෝෂිත Bracon habetor Say @ 800-1000 වැඩිහිටියන්/ඳෙක්ටර්/සතිය මුදා හැරිය හැක.",
  },
  {
    disease: "brinjal-mites",
    en: "• Spray water to reduce mite population\n• Neem seed water extract at the rate of 400g/10l.\n• Sulphur 80% WP/WG : Do not apply sulphur when temperature is higher than 32C,    WHO class lll (Slightly hazardous).\n• Hexythiazox 10% WP : WHO Class U(Unlikely to present acute hazard in normal use). Mites growth regulator.\n",
    ta: "• மைட் மக்கள் தொகையைக் குறைக்க தண்ணீரைத் தெளிக்கவும்\n• நிம் வித்து நீர் சத்து 400 கிராம்/10 லிட்டர் வீதம்\n• சல்பர் 80% WP/WG : வெப்பநிலை 32°C அதிகமாக இருக்கும்போது சல்பரைப் பயன்படுத்தாதீர்கள், WHO வகுப்பு III (மிகக் குறைந்த அபாயகரமானது)\n• ஹெக்சிதயாசோக்ஸ் 10% WP : WHO வகுப்பு U (சாதாரண பயன்பாட்டில் கடுமையான அபாயம் இல்லை). மைட்ஸ் வளர்ச்சி சீரமைப்பாளர்.",
    sh: "• මයිට් සංඛ්‍යාව අඩු කිරීම සඳහා වතුර විසිකිරීම\n• නිම් බීජ වතුර නිෂ්කාෂණය 400 ග්‍රෑම්/10 ලීටර් මත\n• සල්ෆර් 80% WP/WG : උෂ්ණත්වය 32°C ට වඩා වැඩි විට සල්ෆර් භාවිතා නොකරන්න, WHO වර්ගය III (අරමුණු කිරීමට ඉඩ ඇත)\n• හෙක්සිතියසොක්ස් 10% WP : WHO වර්ගය U (සාමාන්‍ය භාවිතයේ දී දරුණු අවදානම් නැත). මයිට් වර්ධන නියාමකය.",
  },
  {
    disease: "brinjal-tobacco-mosaic-virus",
    en: "Organic Control\n• The efficacy of biological antagonism has been demonstrated in R. solani using Trichoderma sp.. Isolates of T. harzianum can reduce the growth of R. solani and enhance disease control in tobacco plants\n",
    ta: "தாவர மருத்துவ கட்டுப்பாடு\n• R. solani வகையைக் கொண்ட Trichoderma sp. பயன்படுத்தி உயிரியல் எதிர்ப்பின் திறன் நிரூபிக்கப்பட்டுள்ளது. T. harzianum இனங்கள் R. solani வளர்ச்சியைக் குறைக்கும் மற்றும் புகையிலை தாவரங்களில் நோய் கட்டுப்பாட்டை மேம்படுத்தும்.",
    sh: "සාම්ප්‍රදායික කළමනාකරණය\n• R. solani සඳහා Trichoderma sp. භාවිතයෙන් ජෛවික විරෝධී බවේ කාර්යක්ෂමතාව පෙන්නුම් කර තිබේ. T. harzianum වර්ගවල අභිවර්ධන මඟින් R. solani වර්ධනය අඩු කිරීමට සහ දුම්කොළ පැළෑටි තුළ රෝග පාලනය වැඩිදියුණු කිරීමට හැකියාව තිබේ.",
  },
  {
    disease: "chili-leaf-curl-complex",
    en: "Organic Control\nControl whitefly populations to reduce transmission of the virus. Neem oil or horticultural oils (petroleum-based oils) can be used. Make sure the oils thoroughly cover the plants, particularly the lower side of the leaves where whiteflies are most likely to be found. Some natural enemies such as lacewings, big-eyed bugs, and minute pirate bugs can control whitefly populations.\n\nChemical Control\nAlways consider an integrated approach with preventive measures together with biological treatments, if available. There are no known effective methods for preventing or reducing chilli leaf curl virus. Follow chemical control methods, such as imidacloprid or dinotefuran. Spray seedlings with imidacloprid or lambda- cyhalothrin before transplanting to control the vector. Excessive use of insecticides will harm beneficial insects and also make many whitefly species to become resistant. To prevent this, ensure proper rotation between insecticides and use only selective ones.\n",
    ta: "• முதல் அறிகுறிகள் தென்பட ஆரம்பித்தவுடன் உயர் அமுக்கதுடன் நீரைப் பிரயோகிப்பதன் மூலம் பீடைகளை அகற்றவும்.\n• மஞ்சள் நிற ஒட்டுப்பொறியை பயன்படுத்தவும்.\n• வேப்பம் வித்துச்சாறு விசிறவும்.\n(50g நசுக்கிய வேப்பம் வித்தை 1 லிற்றர் நீரில் 24 மணித்தியாலம் ஊறவிட்டு)\n\nஉயிரியல் கட்டுப்பாடு\nவைரஸ் பரப்பலைக் குறைக்க வெள்ளை மிதப்பான் மக்கள் தொகையைக் கட்டுப்படுத்தவும். நிம் எண்ணெய் அல்லது தோட்டக்கலை எண்ணெய்கள் (பெட்ரோலிய அடிப்படையிலான எண்ணெய்கள்) பயன்படுத்தப்பட்டன. தாவரங்கள் முழுவதும் எண்ணெய்கள் நன்றாக மூடப்பட்டுள்ளன என்பதை உறுதி செய்யவும், குறிப்பாக இலைகளின் கீழ் பகுதி, அங்கு வெள்ளை மிதப்பான்கள் அதிகம் காணப்படும். பல இயற்கை எதிரிகள் போன்ற திரிப்ஸ், பெரிய கண்கள் கொண்ட பூச்சிகள் மற்றும் நுண் கொள்ளைய பூச்சிகள் வெள்ளை மிதப்பான் மக்கள் தொகையைக் கட்டுப்படுத்தலாம்.\n\nஇரசாயன கட்டுப்பாடு\nஎப்பொழுதுமே தடுப்பு நடவடிக்கைகளுடன் பல்வகைப்பட்ட கட்டுப்பாட்டு முறையை கருத்தில் கொள்ளவும் மற்றும் உயிரியல் சிகிச்சைகள் கிடைத்தால் அவற்றையும் பயன்படுத்தவும். மிளகு இலை சுருக்கு வைரஸை தடுக்கவோ குறைக்கவோ எந்த பரிசிறந்த முறைகளும் அறியப்பட்டவை இல்லை. இமிடாக்ளோப்ரிட் அல்லது டினோடேப்யூரான் போன்ற இரசாயன கட்டுப்பாட்டு முறைகளைப் பின்பற்றவும். வக்டரைக் கட்டுப்படுத்த மாற்று நடவுக்கு முன் நாற்றுகளைப் பெயரிமிடாக்ளோப்ரிட் அல்லது லம்படா-சைகலோத்ரின் தெளிக்கவும். பூச்சிமருந்துகளின் அதிகப்பயன் பயனுள்ள பூச்சிகளுக்கு தீங்கு விளைவிக்கும் மற்றும் பல வெள்ளை மிதப்பான் இனங்கள் எதிர்ப்பு திறன் கொண்டதாகும். இதைத் தடுக்க, பூச்சிமருந்துகளுக்கிடையே சரியான மாற்று பயன்பாட்டை உறுதிசெய்யவும் மற்றும் தேர்ந்தெடுக்கப்பட்ட பூச்சிமருந்துகளே பயன்படுத்தவும்.",
    sh: "සාම්ප්‍රදායික කළමනාකරණය\nවයිරස් සම්ප්‍රේෂණය අඩු කිරීම සඳහා සුදු මැක්සි සංඛ්‍යාව පාලනය කරන්න. නිම් තෙල් හෝ උද්‍යාන තෙල් (පෙට්‍රොලියම් පදනම් තෙල්) භාවිතා කළ හැක. තෙල් පැළෑටි මත සම්පුර්ණයෙන් වැදුනු බව සහතික කරන්න, විශේෂයෙන්ම සුදු මැක්සි බහුලව සිටින පත්‍ර පෘෂ්ඨයේ පහළ පැත්තේ. කිසියම් ස්වාභාවික සතුරන් වැනි වැයිඩ් පැල්, විශාල කුරුලු මක්කඩ සහ සුළු මවුරුන් සුදු මැක්සි සංඛ්‍යාව පාලනය කළ හැක.\n\nරසායනික කළමනාකරණය\nසෑම විටම තවදුරටත් වැළැක්වීමේ පියවර සමඟ සමස්ත කළමනාකරණ ක්‍රමයක් සලකා බලන්න, තිබේ නම් ජෛවික සාරවාහී සමඟ. මිරිඟු පත්‍ර මුඩු වයිරසය වැළැක්වීම හෝ අඩු කිරීම සඳහා කිසිදු දන්නා කාර්යක්ෂම ක්‍රමයක් නැත. ඉමිඩක්ලෝප්‍රීඩ් හෝ ඩිනෝටෙෆුරාන් වැනි රසායනික පාලන ක්‍රම අනුගමනය කරන්න. වෙක්ටරය පාලනය කිරීම සඳහා නැවත සිටුවීමට පෙර නිෂ්පාදන තුනු ඉමිඩක්ලෝප්‍රීඩ් හෝ ලැම්බඩා-සයහලෝෆිරින් විසි කරන්න. කෘමිනාශක අධික භාවිතය සහායක කෘමි වලට හානි කරනු ඇත සහ සුදු මැක්සි විශේෂ රාශිය ප්‍රතිරෝධී වේ. මෙය වැළැක්වීම සඳහා, කෘමිනාශක අතර නිසි විරාම සහතික කර සෙදීම සහ තෝරාගත් කෘමිනාශක පමණක් භාවිතා කරන්න.",
  },
  {
    disease: "pumpkin-mosaic-virus",
    en: "Organic Control\n• If you treat seeds at 70°C dry heat for up to three days, they will be free from active virus particles, but still able to germinate. Apply CGMMV test kits, if available. Apply organic insecticides targeting chewing insects.\n\nChemical Control\n• Always consider an integrated approach with preventive measures together with biological treatments if available. The application of chemical insecticides targeting chewing insects can prevent spreading of the virus. The direct treatment of viral diseases like the cucumber green mottle virus is not possible.\n",
    ta: "உயிரியல் கட்டுப்பாடு\n• விதைகளை 70°C வெப்ப வெப்பத்தில் மூன்று நாட்கள் வரை சிகிச்சை செய்தால் அவை செயலில் உள்ள வைரஸ் துகள்களிலிருந்து விடுபடும், மேலும் முளைக்கும் திறன் இருக்கும். CGMMV சோதனைப் பொதிகள் இருப்பின் பயன்படுத்தவும். உண்ணும் பூச்சிகளைக் குறிவைக்கும் கரிம பூச்சிமருந்துகளைப் பயன்படுத்தவும்.\n\nஇரசாயன கட்டுப்பாடு\n• எப்பொழுதும் தடுப்பு நடவடிக்கைகளுடன் பல்வகைப்பட்ட கட்டுப்பாட்டு முறையை கருத்தில் கொள்ளவும் மற்றும் உயிரியல் சிகிச்சைகள் கிடைத்தால் அவற்றையும் பயன்படுத்தவும். உண்ணும் பூச்சிகளைக் குறிவைக்கும் இரசாயன பூச்சிமருந்துகளின் பயன்பாடு வைரஸ் பரப்பலைத் தடுக்கக் கூடும். வெள்ளரி பச்சை மஞ்சள் வைரஸ் போன்ற நேரடி வைரஸ் நோய்கள் சிகிச்சை சாத்தியமில்லை.",
    sh: "සාම්ප්‍රදායික කළමනාකරණය\n• බීජ 70°C වියළි තාපය යටතේ දින තුනක් දක්වා සලකා බැලීමේදී, ඒවා සක්‍රීය වයිරස් කැටි වලින් නිදහස් වේ, නමුත් අරුණලු දැමීමට හැකි වේ. CGMMV පරීක්ෂණ කට්ටල තිබේ නම් අදාළ කර ගන්න. අමු කන්නේ කෘමි මර්දනය සඳහා සාම්ප්‍රදායික කෘමිනාශක යෙදීම.\n\nරසායනික කළමනාකරණය\n• සෑම විටම වැළැක්වීමේ පියවර සමඟ සමස්ත කළමනාකරණ ක්‍රමයක් සලකා බලන්න, තිබේ නම් ජෛවික සාරවාහී සමඟ. අමු කන්නේ කෘමි මර්දනය සඳහа රසායනික කෘමිනාශක යෙදීම වයිරසය පැතිරීම වැළැක්විය හැක. පලා කරල්ලන් කෙළ කහ වයිරසය වැනි වයිරස් රෝග සෘජු ප්‍රතිකාර නොහැක.",
  },
];
