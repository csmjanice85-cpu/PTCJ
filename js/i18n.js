/* 智励专业补习中心 — 三语言系统 (中文 / BM / EN) */
(function () {
  "use strict";

  var STORAGE_KEY = "ptcj_lang";

  var DICT = {
    page_title: {
      zh: "智励专业补习中心 Pusat Tuisyen Celik Jaya｜一站式安亲班 · 全科补习 · 幼儿园",
      bm: "Pusat Tuisyen Celik Jaya｜Jagaan Sehenti · Tuisyen Semua Subjek · Tadika",
      en: "Pusat Tuisyen Celik Jaya｜All-in-One Childcare · Full Tuition · Preschool"
    },
    page_description: {
      zh: "安心托育，用心育才。智励专业补习中心提供接送、餐食、功课指导、全科补习与幼儿园一站式服务，服务 2 岁至 SPM 学生，登嘉楼与怡保共 5 个据点，让忙碌的家长安心工作、安心陪伴孩子成长。",
      bm: "Jagaan yang tenang, pendidikan yang ikhlas. Pusat Tuisyen Celik Jaya menyediakan perkhidmatan sehenti untuk pelajar berusia 2 tahun hingga SPM, dengan 5 cawangan di Terengganu dan Ipoh.",
      en: "Caring hands, brighter minds. Pusat Tuisyen Celik Jaya offers an all-in-one service for students aged 2 to SPM, with 5 branches across Terengganu and Ipoh."
    },

    nav_services: { zh: "服务", bm: "Perkhidmatan", en: "Services" },
    nav_video: { zh: "视频", bm: "Video", en: "Video" },
    nav_branches: { zh: "据点", bm: "Cawangan", en: "Branches" },
    nav_schedule: { zh: "时间表", bm: "Jadual Waktu", en: "Schedule" },
    nav_contact: { zh: "联系我们", bm: "Hubungi Kami", en: "Contact Us" },
    header_wa: { zh: "WhatsApp 咨询", bm: "WhatsApp Kami", en: "WhatsApp Us" },
    back_home: { zh: "← 返回首页", bm: "← Kembali ke Laman Utama", en: "← Back to Homepage" },
    intensive_title: {
      zh: "60天小学考试特训班｜智励专业补习中心",
      bm: "Kem Intensif Peperiksaan 60 Hari｜Pusat Tuisyen Celik Jaya",
      en: "60-Day Exam Intensive Camp｜Pusat Tuisyen Celik Jaya"
    },
    intensive_desc: {
      zh: "智励专业补习中心 Bandar Seri Botani 分校，60天小学考试特训班，一年级至六年级，小班 10–12 人，即刻 WhatsApp 预留名额。",
      bm: "Kem Intensif Peperiksaan 60 Hari di Cawangan Bandar Seri Botani, Pusat Tuisyen Celik Jaya. Tahun 1 hingga 6, kelas kecil 10–12 pelajar. WhatsApp sekarang untuk tempah tempat.",
      en: "60-Day Exam Intensive Camp at our Bandar Seri Botani branch. Year 1 to 6, small class of 10–12. WhatsApp us now to reserve your spot."
    },

    hero_eyebrow: { zh: "一站式安亲 · 全科补习 · 幼儿园", bm: "Jagaan Sehenti · Tuisyen Semua Subjek · Tadika", en: "All-in-One Childcare · Full Tuition · Preschool" },
    hero_title: { zh: "忙碌上班，也能安心陪孩子长大", bm: "Sibuk bekerja, tetap tenang membesarkan anak", en: "Busy at work, still raise your child with peace of mind" },
    hero_lead: {
      zh: "智励专业补习中心提供接送、餐食、功课指导、全科补习与幼儿园一站式服务，服务 2 岁至 SPM 学生，让你安心工作，安心陪伴孩子成长——不用再焦虑教功课到深夜。",
      bm: "Pusat Tuisyen Celik Jaya menyediakan perkhidmatan sehenti — penghantaran, makanan, bimbingan kerja rumah, tuisyen semua subjek dan tadika — untuk pelajar berusia 2 tahun hingga SPM. Bekerja dengan tenang dan dampingi anak membesar tanpa perlu risau mengajar kerja rumah hingga larut malam.",
      en: "Pusat Tuisyen Celik Jaya offers an all-in-one service — pickup, meals, homework guidance, full-subject tuition and preschool — for students aged 2 to SPM. Work with peace of mind and be there for your child's growth, without the late-night homework stress."
    },
    hero_btn1: { zh: "WhatsApp 预约参观", bm: "WhatsApp Tempah Lawatan", en: "WhatsApp to Book a Visit" },
    hero_btn2: { zh: "查看服务详情", bm: "Lihat Perkhidmatan", en: "View Our Services" },

    trust1: { zh: "2 岁至 SPM 全阶段", bm: "2 tahun hingga SPM", en: "Ages 2 to SPM" },
    trust2: { zh: "接送 · 餐食 · 功课 · 补习一站包办", bm: "Penghantaran · Makanan · Kerja Rumah · Tuisyen", en: "Pickup · Meals · Homework · Tuition — all covered" },
    trust3: { zh: "专属教育辅导咨询", bm: "Kaunseling Pendidikan Peribadi", en: "Personalised Education Guidance" },
    trust4: { zh: "创立于 2010 · 5 个据点", bm: "Ditubuhkan 2010 · 5 Cawangan", en: "Established 2010 · 5 Branches" },

    svc_eyebrow: { zh: "我们的服务", bm: "Perkhidmatan Kami", en: "Our Services" },
    svc_title: { zh: "一个地方，搞定孩子放学后的一切", bm: "Satu tempat, selesaikan semua selepas sekolah", en: "One place for everything after school" },
    svc_desc: {
      zh: "接送、吃饭、写功课、补全科，再到幼儿园启蒙——全部交给我们，家长不用东奔西跑找不同的人。",
      bm: "Penghantaran, makan, kerja rumah, tuisyen semua subjek, hinggalah pendidikan awal tadika — serahkan semua kepada kami, ibu bapa tidak perlu berulang-alik mencari pelbagai pihak.",
      en: "Pickup, meals, homework, full-subject tuition, and early preschool learning — leave it all to us, so parents don't have to juggle multiple providers."
    },
    svc1_title: { zh: "接送服务", bm: "Perkhidmatan Penghantaran", en: "Pickup Service" },
    svc1_desc: { zh: "放学准时接送，家长不必抽空来回奔波，安全交接每一趟。", bm: "Penghantaran tepat masa selepas sekolah, ibu bapa tidak perlu bolak-balik, setiap penyerahan selamat.", en: "On-time pickup after school so parents don't have to shuttle back and forth — every handover is safe." },
    svc2_title: { zh: "营养餐食", bm: "Makanan Berkhasiat", en: "Nutritious Meals" },
    svc2_desc: { zh: "课后提供营养餐点，孩子放学不挨饿，专心学习有精神。", bm: "Makanan berkhasiat disediakan selepas sekolah, anak tidak lapar dan lebih bertenaga untuk belajar.", en: "Nutritious meals after school so your child never studies on an empty stomach, and stays energised to learn." },
    svc3_title: { zh: "功课指导", bm: "Bimbingan Kerja Rumah", en: "Homework Guidance" },
    svc3_desc: { zh: "每日功课有老师陪伴指导，当天完成，不留到深夜才赶工。", bm: "Kerja rumah harian dibimbing oleh guru dan diselesaikan pada hari yang sama, tiada lagi tergesa-gesa hingga larut malam.", en: "Teachers guide daily homework to completion the same day — no more rushing late into the night." },
    svc4_title: { zh: "全科补习", bm: "Tuisyen Semua Subjek", en: "Full-Subject Tuition" },
    svc4_desc: { zh: "小一至 SPM 全科师资，针对性补强弱科，稳步提升成绩。", bm: "Guru pelbagai subjek dari Tahun 1 hingga SPM, memperkukuh subjek lemah secara khusus untuk peningkatan prestasi yang stabil.", en: "Full-subject teachers from Year 1 to SPM, targeting weak subjects for steady academic improvement." },
    svc5_title: { zh: "幼儿园（2–6 岁）", bm: "Tadika (2–6 tahun)", en: "Preschool (Ages 2–6)" },
    svc5_desc: { zh: "Q-dees 品质幼教，从小培养学习习惯与自信，衔接小学更从容。", bm: "Pendidikan awal berkualiti Q-dees, memupuk tabiat belajar dan keyakinan sejak kecil, peralihan ke sekolah rendah lebih lancar.", en: "Quality Q-dees early education builds learning habits and confidence early, for a smoother transition into primary school." },
    svc6_title: { zh: "教育辅导咨询", bm: "Kaunseling Pendidikan", en: "Education Consulting" },
    svc6_desc: { zh: "额外提供专属咨询，针对孩子的具体问题给出方案，而非一套课程套用所有人。", bm: "Perkhidmatan kaunseling khas turut disediakan, menawarkan penyelesaian khusus untuk masalah anak anda, bukan satu kursus untuk semua.", en: "We also offer dedicated consulting, giving each child a tailored solution instead of a one-size-fits-all programme." },

    why_eyebrow: { zh: "为什么选择我们", bm: "Kenapa Pilih Kami", en: "Why Choose Us" },
    why_title: { zh: "不只是托管，是真正用心的教育伙伴", bm: "Bukan sekadar jagaan, tetapi rakan pendidikan yang ikhlas", en: "More than childcare — a genuine education partner" },
    why_desc: {
      zh: "创立于 2010，十多年办学经验——这些细节，是我们让家长安心的底气。",
      bm: "Ditubuhkan pada 2010, lebih 10 tahun pengalaman — butiran inilah yang memberi ketenangan kepada ibu bapa.",
      en: "Established in 2010, with over a decade of experience — these are the details that give parents peace of mind."
    },
    why1_title: { zh: "小班制教学", bm: "Kelas Bersaiz Kecil", en: "Small Class Sizes" },
    why1_desc: { zh: "每班人数精简，老师能照顾到每一个孩子。", bm: "Bilangan pelajar setiap kelas adalah kecil, guru dapat memberi perhatian kepada setiap anak.", en: "Small class sizes mean every child gets the teacher's attention." },
    why2_title: { zh: "资深师资团队", bm: "Pasukan Guru Berpengalaman", en: "Experienced Teaching Team" },
    why2_desc: { zh: "老师团队拥有超过 10 年教学经验。", bm: "Pasukan guru kami mempunyai lebih 10 tahun pengalaman mengajar.", en: "Our teaching team brings over 10 years of teaching experience." },
    why3_title: { zh: "专车载送服务", bm: "Perkhidmatan Kenderaan", en: "Dedicated Pickup Van" },
    why3_desc: { zh: "提供上下课接送，安全又省心。", bm: "Perkhidmatan penghantaran ke dan dari pusat, selamat dan menjimatkan masa.", en: "Door-to-door pickup and drop-off — safe and worry-free." },
    why4_title: { zh: "美味餐食", bm: "Makanan Sedap", en: "Delicious Meals" },
    why4_desc: { zh: "每日提供美味午餐与下午茶，孩子吃得开心。", bm: "Makan tengah hari dan minum petang yang lazat disediakan setiap hari, anak makan dengan gembira.", en: "Tasty lunch and tea time served daily — kids love mealtime here." },
    why5_title: { zh: "考前巩固班", bm: "Kelas Persediaan Peperiksaan", en: "Pre-Exam Reinforcement" },
    why5_desc: { zh: "考试前加强复习巩固，稳住成绩。", bm: "Ulang kaji intensif sebelum peperiksaan untuk mengekalkan prestasi.", en: "Intensive revision before exams to help lock in results." },
    why6_title: { zh: "学习报告", bm: "Laporan Pembelajaran", en: "Learning Reports" },
    why6_desc: { zh: "定期提供孩子的学习报告给家长。", bm: "Laporan pembelajaran anak diberikan kepada ibu bapa secara berkala.", en: "Regular learning progress reports sent to parents." },
    why7_title: { zh: "交通抵达通知", bm: "Notifikasi Ketibaan", en: "Arrival Notifications" },
    why7_desc: { zh: "孩子上车、平安抵达即时通知家长。", bm: "Ibu bapa dimaklumkan serta-merta apabila anak menaiki kenderaan dan tiba dengan selamat.", en: "Parents get instant alerts when their child boards the van and arrives safely." },
    why8_title: { zh: "每日功课记录", bm: "Rekod Kerja Rumah Harian", en: "Daily Homework Log" },
    why8_desc: { zh: "每天记录孩子的功课完成情况。", bm: "Status penyiapan kerja rumah anak direkodkan setiap hari.", en: "Your child's homework completion is logged every day." },
    why9_title: { zh: "假期活动营", bm: "Kem Aktiviti Cuti", en: "Holiday Activity Camps" },
    why9_desc: { zh: "假期安排丰富的活动营，孩子过得充实。", bm: "Kem aktiviti yang pelbagai dianjurkan semasa cuti sekolah, hari-hari anak lebih bermakna.", en: "Fun-packed holiday camps keep your child engaged during the break." },
    why10_title: { zh: "良好家校沟通", bm: "Komunikasi Ibu Bapa-Guru yang Baik", en: "Strong Parent-Teacher Communication" },
    why10_desc: { zh: "家长与老师保持密切、良好的沟通。", bm: "Ibu bapa dan guru sentiasa berkomunikasi secara rapat dan telus.", en: "Parents and teachers stay closely and openly connected." },

    video_eyebrow: { zh: "走进智励", bm: "Kenali Celik Jaya", en: "Step Inside Celik Jaya" },
    video_title: { zh: "看看孩子在这里的日常", bm: "Lihat kehidupan seharian anak di sini", en: "See what your child's day looks like here" },
    video_desc: {
      zh: "与其听我们说，不如亲眼看看——真实的学习环境、老师的用心陪伴，都在这段视频里。",
      bm: "Daripada mendengar kata-kata kami, lebih baik lihat sendiri — persekitaran pembelajaran sebenar dan bimbingan ikhlas guru, semuanya dalam video ini.",
      en: "Instead of just hearing us talk, see it for yourself — the real learning environment and caring teachers, all in this video."
    },
    video_btn: { zh: "预约实地参观", bm: "Tempah Lawatan", en: "Book a Visit" },

    gallery_eyebrow: { zh: "校园实况", bm: "Suasana Sebenar", en: "Real Classroom Moments" },
    gallery_title: { zh: "孩子们在这里的每一天", bm: "Hari-hari anak di sini", en: "Every day, right here" },
    gallery_desc: {
      zh: "专注做功课、开心互动——真实教室里的日常瞬间。",
      bm: "Fokus membuat kerja rumah, berinteraksi dengan gembira — detik seharian di dalam kelas sebenar.",
      en: "Focused on homework, having fun together — real moments from our classrooms."
    },

    branches_eyebrow: { zh: "服务据点", bm: "Cawangan Kami", en: "Our Branches" },
    branches_title: { zh: "五个据点，方便就近安排", bm: "Lima cawangan, mudah untuk anda", en: "Five branches, close to you" },
    branches_desc: {
      zh: "自 2010 年创立以来，我们在登嘉楼州与霹雳州怡保为家长和孩子提供补习、安亲与幼儿园服务：",
      bm: "Sejak ditubuhkan pada 2010, kami menyediakan perkhidmatan tuisyen, jagaan selepas sekolah dan tadika di Terengganu dan Ipoh, Perak untuk ibu bapa dan anak-anak:",
      en: "Since 2010, we've provided tuition, after-school care and preschool services across Terengganu and Ipoh, Perak:"
    },
    region_terengganu: { zh: "📍 登嘉楼州 · Kuala Terengganu, Terengganu", bm: "📍 Terengganu · Kuala Terengganu, Terengganu", en: "📍 Terengganu · Kuala Terengganu, Terengganu" },
    region_perak: { zh: "📍 霹雳州 · Ipoh, Perak", bm: "📍 Perak · Ipoh, Perak", en: "📍 Perak · Ipoh, Perak" },

    tag_tokjembal: { zh: "补习中心 · Since 2010", bm: "Pusat Tuisyen · Sejak 2010", en: "Tuition Centre · Since 2010" },
    tag_bsb: { zh: "安亲托育 · 中小学全科补习", bm: "Jagaan Selepas Sekolah · Tuisyen Semua Subjek", en: "Aftercare · Full-Subject Tuition" },
    tag_aftercare: { zh: "安亲托育中心", bm: "Pusat Jagaan Selepas Sekolah", en: "Aftercare Centre" },
    tag_kindergarten: { zh: "幼儿园（2–6 岁）· Tadika Celik Jaya", bm: "Tadika (2–6 tahun) · Tadika Celik Jaya", en: "Preschool (Ages 2–6) · Tadika Celik Jaya" },
    tag_qdees_short: { zh: "幼儿园（2–6 岁）", bm: "Tadika (2–6 tahun)", en: "Preschool (Ages 2–6)" },

    branch_hours_label: { zh: "营业时间：", bm: "Waktu Operasi:", en: "Operating Hours:" },
    branch_phone_label: { zh: "电话：", bm: "Telefon:", en: "Phone:" },
    branch_wa_btn: { zh: "WhatsApp 咨询", bm: "WhatsApp Kami", en: "WhatsApp Us" },
    branch_tt_btn: { zh: "了解补习时间表", bm: "Lihat Jadual Waktu", en: "View Timetable" },

    hours_tokjembal: {
      zh: "周一至周四 3:00pm–10:30pm<br/>周五、周六 8:00am–10:30pm",
      bm: "Isnin – Khamis 3:00pm–10:30pm<br/>Jumaat, Sabtu 8:00am–10:30pm",
      en: "Mon – Thu 3:00pm–10:30pm<br/>Fri, Sat 8:00am–10:30pm"
    },
    hours_bsb: { zh: "周一至周六 8:30am–10:00pm", bm: "Isnin – Sabtu 8:30am–10:00pm", en: "Mon – Sat 8:30am–10:00pm" },
    hours_tlh: { zh: "周一至周五 1:00pm–6:30pm", bm: "Isnin – Jumaat 1:00pm–6:30pm", en: "Mon – Fri 1:00pm–6:30pm" },
    hours_firstgarden: { zh: "周一至周五 11:30am–6:30pm", bm: "Isnin – Jumaat 11:30am–6:30pm", en: "Mon – Fri 11:30am–6:30pm" },
    hours_qdees: { zh: "每日 7:45am–6:30pm", bm: "Setiap hari 7:45am–6:30pm", en: "Daily 7:45am–6:30pm" },

    examcamp_badge: { zh: "限时招生", bm: "Pendaftaran Terhad", en: "Limited-Time Enrolment" },
    examcamp_teaser_title: { zh: "🎯 60天小学考试特训班", bm: "🎯 Kem Intensif Peperiksaan 60 Hari", en: "🎯 60-Day Exam Intensive Camp" },
    examcamp_teaser_desc: {
      zh: "1 Aug – 3 Oct 2026 · 一年级至六年级 · 小班 10–12 人",
      bm: "1 Ogos – 3 Okt 2026 · Tahun 1 hingga 6 · Kelas kecil 10–12 pelajar",
      en: "1 Aug – 3 Oct 2026 · Year 1 to 6 · Small class of 10–12"
    },
    examcamp_hint: { zh: "查看详情与时间表 →", bm: "Lihat butiran & jadual →", en: "View details & schedule →" },

    schedule_eyebrow: { zh: "营业时间", bm: "Waktu Operasi", en: "Operating Hours" },
    schedule_title: { zh: "各据点营业时间一览", bm: "Waktu operasi semua cawangan", en: "Branch Operating Hours at a Glance" },
    schedule_desc: {
      zh: "出发前先看一眼，安排接送、参观或咨询都更方便。",
      bm: "Semak dahulu sebelum datang, memudahkan urusan penghantaran, lawatan atau pertanyaan.",
      en: "Check before you head over — makes planning pickups, visits or enquiries easier."
    },
    schedule_col_branch: { zh: "据点", bm: "Cawangan", en: "Branch" },
    schedule_col_hours: { zh: "营业时间", bm: "Waktu Operasi", en: "Operating Hours" },
    schedule_note: {
      zh: "公共假期营业时间可能调整，出发前欢迎 WhatsApp 确认。",
      bm: "Waktu operasi mungkin berubah semasa cuti umum, sila WhatsApp kami untuk pengesahan sebelum datang.",
      en: "Hours may change on public holidays — feel free to WhatsApp us to confirm before you visit."
    },

    contact_eyebrow: { zh: "联系我们", bm: "Hubungi Kami", en: "Contact Us" },
    contact_title: { zh: "随时联系，我们很乐意和你聊聊", bm: "Hubungi kami bila-bila masa", en: "Reach out anytime, we'd love to chat" },
    contact_desc: {
      zh: "想预约参观、了解课程，或只是想先问问看？WhatsApp 是最快的方式，我们通常在营业时间内很快回复。",
      bm: "Ingin menempah lawatan, mengetahui lebih lanjut tentang kursus, atau sekadar bertanya? WhatsApp adalah cara terpantas — kami biasanya membalas dengan cepat semasa waktu operasi.",
      en: "Want to book a visit, learn about our programmes, or just have a question? WhatsApp is the fastest way — we usually reply quickly during business hours."
    },
    contact_wa_title: { zh: "WhatsApp（最快）", bm: "WhatsApp (Terpantas)", en: "WhatsApp (Fastest)" },
    contact_call_title: { zh: "电话", bm: "Telefon", en: "Phone" },
    contact_branches_title: { zh: "五个据点", bm: "Lima Cawangan", en: "Five Branches" },
    contact_branches_desc: {
      zh: "补习 · 安亲 · 幼儿园<br/>登嘉楼州 1 间 · 霹雳州怡保 4 间",
      bm: "Tuisyen · Jagaan Selepas Sekolah · Tadika<br/>1 di Terengganu · 4 di Ipoh, Perak",
      en: "Tuition · Aftercare · Preschool<br/>1 in Terengganu · 4 in Ipoh, Perak"
    },
    contact_wa_btn: { zh: "立即 WhatsApp", bm: "WhatsApp Sekarang", en: "WhatsApp Now" },
    contact_call_btn: { zh: "拨打电话", bm: "Hubungi Kami", en: "Call Now" },
    contact_branches_btn: { zh: "查看据点", bm: "Lihat Cawangan", en: "View Branches" },

    cta_title: { zh: "安心托育，用心育才", bm: "Jagaan yang Tenang, Pendidikan yang Ikhlas", en: "Caring hands, brighter minds" },
    cta_desc: {
      zh: "现在预约，让我们带你参观中心，了解适合孩子的方案。",
      bm: "Tempah sekarang, biar kami bawa anda melawat pusat kami dan mencari pakej yang sesuai untuk anak anda.",
      en: "Book now and let us show you around — we'll help find the right plan for your child."
    },
    cta_btn: { zh: "立即 WhatsApp 预约", bm: "WhatsApp Tempah Sekarang", en: "WhatsApp to Book Now" },

    footer_desc: {
      zh: "安心托育，用心育才。一站式安亲班服务：接送、餐食、功课指导、全科补习、幼儿园，让忙碌的你安心工作，安心陪伴孩子成长。",
      bm: "Jagaan yang tenang, pendidikan yang ikhlas. Perkhidmatan sehenti: penghantaran, makanan, bimbingan kerja rumah, tuisyen semua subjek, tadika — supaya anda boleh bekerja dengan tenang dan mendampingi anak membesar.",
      en: "Caring hands, brighter minds. All-in-one service: pickup, meals, homework guidance, full-subject tuition, preschool — so you can work with peace of mind and be there as your child grows."
    },
    footer_links_title: { zh: "快速链接", bm: "Pautan Pantas", en: "Quick Links" },
    footer_contact_title: { zh: "联系方式", bm: "Hubungi", en: "Contact" },
    footer_branches_text: {
      zh: "据点：登嘉楼州 1 间 · 霹雳州怡保 4 间",
      bm: "Cawangan: 1 di Terengganu · 4 di Ipoh, Perak",
      en: "Branches: 1 in Terengganu · 4 in Ipoh, Perak"
    },

    tt_modal_wa_btn: { zh: "WhatsApp 咨询这个据点", bm: "WhatsApp Cawangan Ini", en: "WhatsApp This Branch" },
    tt_modal_fallback: {
      zh: "时间表照片准备中，欢迎直接 WhatsApp 我们索取。",
      bm: "Jadual waktu sedang disediakan, sila WhatsApp kami untuk mendapatkannya.",
      en: "Timetable photo coming soon — feel free to WhatsApp us for it directly."
    },
    tt_modal_suffix: { zh: "· 补习时间表", bm: "· Jadual Waktu", en: "· Timetable" },
    tt_modal_close: { zh: "关闭", bm: "Tutup", en: "Close" },

    ec_badge: { zh: "Bandar Seri Botani 分校 · 限时招生", bm: "Cawangan Bandar Seri Botani · Pendaftaran Terhad", en: "Bandar Seri Botani Branch · Limited-Time Enrolment" },
    ec_title: { zh: "🎯 60天考试特训班", bm: "🎯 Kem Intensif Peperiksaan 60 Hari", en: "🎯 60-Day Exam Intensive Camp" },
    ec_lede: {
      zh: "抓对方法，60天从不会，到考试更有把握！",
      bm: "Dengan kaedah yang betul, 60 hari cukup untuk bina keyakinan menghadapi peperiksaan!",
      en: "With the right method, 60 days is enough to go from unsure to exam-ready!"
    },
    ec_pain_intro: {
      zh: "距离考试只剩60天，很多孩子不是不聪明，而是：",
      bm: "Tinggal 60 hari sebelum peperiksaan — kebanyakan anak bukan tidak pandai, tetapi:",
      en: "With only 60 days left before exams, most kids aren't lacking in ability — they just:"
    },
    ec_pain1: { zh: "❌ 不会读书方法", bm: "❌ Tidak tahu cara belajar yang betul", en: "❌ Don't know how to study effectively" },
    ec_pain2: { zh: "❌ 功课做了却不会应用", bm: "❌ Buat kerja rumah tetapi tidak tahu mengaplikasikannya", en: "❌ Do homework but can't apply what they learn" },
    ec_pain3: { zh: "❌ 考试看到题目就紧张", bm: "❌ Gementar apabila melihat soalan peperiksaan", en: "❌ Freeze up the moment they see exam questions" },
    ec_pain4: { zh: "❌ 成绩一直卡在 C、D、E", bm: "❌ Keputusan sentiasa tersekat di C, D, E", en: "❌ Grades stuck at C, D, E" },
    ec_pain5: { zh: "❌ 父母每天催促，孩子越来越抗拒学习", bm: "❌ Ibu bapa mengingatkan setiap hari, anak semakin menolak pembelajaran", en: "❌ Parents nag daily, and kids grow more resistant to studying" },
    ec_encourage: {
      zh: "别担心！现在开始，60天还来得及！",
      bm: "Jangan risau! Mulakan sekarang, 60 hari masih mencukupi!",
      en: "Don't worry! Start today — 60 days is still enough time!"
    },
    ec_why_title: { zh: "为什么选择我们的60天考试特训？", bm: "Kenapa pilih Kem Intensif 60 Hari kami?", en: "Why choose our 60-Day Exam Camp?" },
    ec_why_desc: {
      zh: "我们拥有 18 年以上教学经验，帮助无数学生建立正确学习方法，不只是背答案，而是真正学会理解。在60天内，我们将协助孩子：",
      bm: "Kami mempunyai lebih 18 tahun pengalaman mengajar, membantu ramai pelajar membina kaedah belajar yang betul — bukan sekadar menghafal jawapan, tetapi benar-benar memahami. Dalam 60 hari, kami akan membantu anak anda:",
      en: "With over 18 years of teaching experience, we've helped countless students build proper study methods — real understanding, not just memorised answers. In 60 days, we'll help your child:"
    },
    ec_why1: { zh: "✅ 找出每位学生的弱点", bm: "✅ Mengenal pasti kelemahan setiap pelajar", en: "✅ Identify each student's weak points" },
    ec_why2: { zh: "✅ 系统化复习重点章节", bm: "✅ Ulang kaji topik penting secara sistematik", en: "✅ Systematically review key topics" },
    ec_why3: { zh: "✅ 高频考题训练", bm: "✅ Latihan soalan peperiksaan kerap keluar", en: "✅ Practice high-frequency exam questions" },
    ec_why4: { zh: "✅ 每周模拟测验", bm: "✅ Ujian percubaan mingguan", en: "✅ Weekly mock tests" },
    ec_why5: { zh: "✅ 老师一对一讲解错误", bm: "✅ Bimbingan satu-satu oleh guru untuk kesilapan", en: "✅ One-on-one error review with teachers" },
    ec_why6: { zh: "✅ 建立答题技巧与考试策略", bm: "✅ Membina teknik menjawab dan strategi peperiksaan", en: "✅ Build answering techniques and exam strategy" },
    ec_why7: { zh: "✅ 提高学习信心", bm: "✅ Meningkatkan keyakinan belajar", en: "✅ Boost learning confidence" },
    ec_highlight: {
      zh: "我们相信，成绩不好，并不是孩子没有能力。很多时候，只是没有遇到适合的方法。只要方法正确，孩子也能慢慢从：",
      bm: "Kami percaya, keputusan yang kurang baik bukan bermakna anak tidak berkemampuan. Selalunya, mereka hanya belum menemui kaedah yang sesuai. Dengan kaedah yang betul, anak juga boleh beransur-ansur dari:",
      en: "We believe poor grades don't mean a child lacks ability. Often, they simply haven't found the right method yet. With the right approach, every child can gradually move from:"
    },
    ec_content_title: { zh: "课程内容", bm: "Kandungan Kursus", en: "Course Content" },
    ec_content1: { zh: "📚 重点考纲复习", bm: "📚 Ulang kaji sukatan penting", en: "📚 Key syllabus revision" },
    ec_content2: { zh: "📝 高频考题训练", bm: "📝 Latihan soalan kerap keluar", en: "📝 High-frequency question drills" },
    ec_content3: { zh: "🎯 答题技巧训练", bm: "🎯 Latihan teknik menjawab", en: "🎯 Answering technique training" },
    ec_content4: { zh: "📖 考前重点预测", bm: "📖 Ramalan topik sebelum peperiksaan", en: "📖 Pre-exam topic predictions" },
    ec_content5: { zh: "📊 每周成绩追踪", bm: "📊 Pemantauan prestasi mingguan", en: "📊 Weekly progress tracking" },
    ec_content6: {
      zh: "👩‍🏫 小班制教学（确保每位学生都被照顾）",
      bm: "👩‍🏫 Kelas bersaiz kecil (memastikan setiap pelajar diberi perhatian)",
      en: "👩‍🏫 Small class teaching (ensuring every student is cared for)"
    },
    ec_suit_title: { zh: "适合对象", bm: "Sesuai Untuk", en: "Who Is This For" },
    ec_suit1: { zh: "✔ 小学一年级至六年级", bm: "✔ Tahun 1 hingga Tahun 6", en: "✔ Primary Year 1 to Year 6" },
    ec_suit2: { zh: "✔ 成绩需要加强的学生", bm: "✔ Pelajar yang perlu meningkatkan prestasi", en: "✔ Students who need to strengthen their grades" },
    ec_suit3: { zh: "✔ 想冲刺 A 的学生", bm: "✔ Pelajar yang ingin mencapai A", en: "✔ Students aiming for straight A's" },
    ec_suit4: { zh: "✔ 基础不稳的学生", bm: "✔ Pelajar dengan asas yang lemah", en: "✔ Students with a shaky foundation" },
    ec_suit5: { zh: "✔ 希望建立学习习惯的学生", bm: "✔ Pelajar yang ingin membina tabiat belajar", en: "✔ Students who want to build strong study habits" },
    ec_parents_title: { zh: "家长最关心的是……", bm: "Apa yang paling dibimbangkan ibu bapa……", en: "What parents worry about most……" },
    ec_quote1: { zh: "“孩子真的会进步吗？”", bm: "“Adakah anak saya akan benar-benar meningkat?”", en: "“Will my child really improve?”" },
    ec_parents_desc: {
      zh: "我们无法承诺每位孩子一定拿 A。但我们承诺：",
      bm: "Kami tidak boleh menjanjikan setiap anak akan mendapat A. Tetapi kami berjanji:",
      en: "We can't promise every child will score straight A's. But we do promise:"
    },
    ec_promise1: { zh: "✅ 每位学生都会被认真指导", bm: "✅ Setiap pelajar dibimbing dengan bersungguh-sungguh", en: "✅ Every student is guided with genuine care" },
    ec_promise2: { zh: "✅ 找出真正不会的地方", bm: "✅ Mengenal pasti kelemahan sebenar", en: "✅ We identify what they truly don't understand" },
    ec_promise3: { zh: "✅ 不放弃任何一位孩子", bm: "✅ Tidak akan mengabaikan mana-mana anak", en: "✅ We never give up on any child" },
    ec_promise4: { zh: "✅ 陪伴孩子坚持完成60天训练", bm: "✅ Mendampingi anak menyelesaikan latihan 60 hari", en: "✅ We stay with your child through the full 60-day journey" },
    ec_60days_title: { zh: "60天可以改变什么？", bm: "Apa yang boleh berubah dalam 60 hari?", en: "What can 60 days change?" },
    ec_60days_desc: {
      zh: "60天，不能创造奇迹。但足够让孩子：",
      bm: "60 hari tidak boleh mencipta keajaiban. Tetapi cukup untuk anak:",
      en: "60 days can't create miracles. But it's enough for your child to become:"
    },
    ec_change1: { zh: "✔ 更有信心", bm: "✔ Lebih yakin", en: "✔ More confident" },
    ec_change2: { zh: "✔ 更懂得答题", bm: "✔ Lebih mahir menjawab soalan", en: "✔ Better at answering questions" },
    ec_change3: { zh: "✔ 更懂得读书", bm: "✔ Lebih tahu cara belajar", en: "✔ Better at studying" },
    ec_change4: { zh: "✔ 成绩比昨天更好", bm: "✔ Prestasi lebih baik dari semalam", en: "✔ Doing better than yesterday" },
    ec_change_footer: {
      zh: "因为，进步，永远比原地踏步更重要。",
      bm: "Kerana, kemajuan sentiasa lebih bermakna daripada kekal di tempat yang sama.",
      en: "Because progress always matters more than standing still."
    },
    ec_limited_title: { zh: "名额有限", bm: "Tempat Terhad", en: "Limited Slots" },
    ec_limited_desc: {
      zh: "为了保证教学品质，我们坚持：每班仅限 10–12 位学生。老师才能真正关注每位学生的学习情况。",
      bm: "Untuk memastikan kualiti pengajaran, kami hadkan setiap kelas kepada 10–12 pelajar sahaja, supaya guru benar-benar dapat memberi perhatian kepada setiap pelajar.",
      en: "To ensure teaching quality, we cap each class at just 10–12 students, so teachers can genuinely focus on every child."
    },
    ec_fact_start_label: { zh: "开课日期", bm: "Tarikh Mula", en: "Start Date" },
    ec_fact_end_label: { zh: "结束日期", bm: "Tarikh Tamat", en: "End Date" },
    ec_enroll_now: {
      zh: "现在报名，一起陪孩子冲刺考试！",
      bm: "Daftar sekarang, mari bantu anak bersedia untuk peperiksaan!",
      en: "Enrol now — let's help your child sprint toward exam success together!"
    },
    ec_grades_title: { zh: "各年级时间表", bm: "Jadual Setiap Tahun", en: "Schedule by Year" },
    ec_grade1: { zh: "一年级 时间表", bm: "Jadual Tahun 1", en: "Year 1 Schedule" },
    ec_grade2: { zh: "二年级 时间表", bm: "Jadual Tahun 2", en: "Year 2 Schedule" },
    ec_grade3: { zh: "三年级 时间表", bm: "Jadual Tahun 3", en: "Year 3 Schedule" },
    ec_grade4: { zh: "四年级 时间表", bm: "Jadual Tahun 4", en: "Year 4 Schedule" },
    ec_grade5: { zh: "五年级 时间表", bm: "Jadual Tahun 5", en: "Year 5 Schedule" },
    ec_grade6: { zh: "六年级 时间表", bm: "Jadual Tahun 6", en: "Year 6 Schedule" },
    ec_deadline_note: {
      zh: "请自备交通和午餐（详情以老师确认为准）",
      bm: "Sila bawa pengangkutan dan makanan sendiri (butiran tertakluk pengesahan guru)",
      en: "Please arrange your own transport and lunch (details subject to teacher confirmation)"
    },
    ec_final_quote: {
      zh: "60天后，孩子的成绩会不会改变，取决于今天是否愿意开始。",
      bm: "Sama ada keputusan anak akan berubah selepas 60 hari, bergantung sama ada anda sanggup mula hari ini.",
      en: "Whether your child's results change in 60 days depends on whether you're willing to start today."
    },
    ec_final_btn: { zh: "🔥 抢先预留考试特训名额！", bm: "🔥 Tempah tempat sekarang!", en: "🔥 Reserve Your Spot Now!" }
  };

  function getSavedLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "zh" || saved === "bm" || saved === "en") return saved;
    } catch (e) {}
    return "zh";
  }

  function t(key) {
    var entry = DICT[key];
    if (!entry) return "";
    return entry[window.currentLang] || entry.zh || "";
  }

  function applyLang(lang) {
    if (lang !== "zh" && lang !== "bm" && lang !== "en") lang = "zh";
    window.currentLang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    document.documentElement.lang = lang === "zh" ? "zh" : (lang === "bm" ? "ms" : "en");

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      var val = t(key);
      if (val) nodes[i].textContent = val;
    }

    var htmlNodes = document.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmlNodes.length; j++) {
      var hkey = htmlNodes[j].getAttribute("data-i18n-html");
      var hval = t(hkey);
      if (hval) htmlNodes[j].innerHTML = hval;
    }

    var contentNodes = document.querySelectorAll("[data-i18n-content]");
    for (var k = 0; k < contentNodes.length; k++) {
      var ckey = contentNodes[k].getAttribute("data-i18n-content");
      var cval = t(ckey);
      if (cval) contentNodes[k].setAttribute("content", cval);
    }

    var closeButtons = document.querySelectorAll(".timetable-modal-close");
    for (var m = 0; m < closeButtons.length; m++) {
      closeButtons[m].setAttribute("aria-label", t("tt_modal_close") || "关闭");
    }

    var langBtns = document.querySelectorAll(".lang-btn");
    for (var b = 0; b < langBtns.length; b++) {
      var isActive = langBtns[b].getAttribute("data-lang") === lang;
      langBtns[b].classList.toggle("active", isActive);
    }
  }

  window.I18N = DICT;
  window.i18nT = t;
  window.applyLang = applyLang;

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(getSavedLang());
    var langBtns = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < langBtns.length; i++) {
      langBtns[i].addEventListener("click", function () {
        applyLang(this.getAttribute("data-lang"));
      });
    }
  });
})();
