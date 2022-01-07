const model = {
    app: {
        currentPage: 'google',
        currentUser: "",
        currentName: "",
        currentUserKlasse: "",
        currentTaskId: 2,
        currentVideo: '',
        pageId: 1,
        previousPage: [],
        inbox: [],
    },
    inputFields: {
        userName: null,
    },

    data: {
        taskNodes: [
            { id: 1, name: 'mainView', parent: null },
            { id: 2, name: 'Fysisk', parent: 1, videoUrl: "https://i.ibb.co/KLgPwPJ/fysisk.png" },
            { id: 3, name: 'Mental-styrke', parent: 1, videoUrl: "https://i.ibb.co/H27YZxv/mental-styrke.png" },
            { id: 4, name: 'Lagaand', parent: 1, videoUrl: 'https://www.youtube-nocookie.com/embed/JB-G_o9WB9E?rel=0;showinfo=0&modestbranding=1', },
            { id: 5, name: 'KNEBØY', parent: 2, videoUrl: 'https://www.youtube.com/embed/CzXVWOhalt4?rel=0;showinfo=0&modestbranding=1', },
            { id: 6, name: 'UTFALL', parent: 2, videoUrl: 'https://www.youtube.com/embed/0E70G3WtJ6k?rel=0;showinfo=0&modestbranding=1', },
            { id: 7, name: 'BURPEES', parent: 2, videoUrl: 'https://www.youtube.com/embed/Vokngk5RmZg?rel=0;showinfo=0&modestbranding=1', },
            { id: 8, name: 'DIAGONALHEV', parent: 2, videoUrl: 'https://www.youtube.com/embed/rsr_bARHAhQ?rel=0;showinfo=0&modestbranding=1', },
            { id: 9, name: 'TAKKNEMLIGHET', parent: 3, videoUrl: 'https://www.youtube.com/embed/4qO30SHSyAM?rel=0;showinfo=0&modestbranding=1', },
            { id: 10, name: 'KONSENTRASJON', parent: 3, videoUrl: 'https://www.youtube.com/embed/i9MOweVJzHE?rel=0;showinfo=0&modestbranding=1', },
            { id: 11, name: 'BLINDEBUKK', parent: 4, videoUrl: 'https://www.youtube.com/embed/ZVW6vVMAvrc?rel=0;showinfo=0&modestbranding=1', },
            { id: 12, name: 'SPEED DATE', parent: 4, videoUrl: 'https://www.youtube.com/embed/T70W-xYtjhc?rel=0;showinfo=0&modestbranding=1', },
            { id: 14, name: 'MAKS ANTALL REP', parent: 5, grandparent: 2, points: 5, },
            { id: 15, name: 'SLÅ EGEN REKORD', parent: 5, grandparent: 2, points: 10, },
            { id: 16, name: 'HEIE PÅ EN VENN', parent: 5, grandparent: 2, points: 15, },
            { id: 17, name: 'MAKS ANTALL REP', parent: 6, grandparent: 2, points: 5, },
            { id: 18, name: 'SLÅ EGEN REKORD', parent: 6, grandparent: 2, points: 10, },
            { id: 19, name: 'HEIE PÅ EN VENN', parent: 6, grandparent: 2, points: 15, },
            { id: 20, name: 'MAKS ANTALL REP', parent: 7, grandparent: 2, points: 5, },
            { id: 21, name: 'SLÅ EGEN REKORD', parent: 7, grandparent: 2, points: 10, },
            { id: 22, name: 'HEIE PÅ EN VENN', parent: 7, grandparent: 2, points: 15, },
            { id: 23, name: 'MAKS ANTALL REP', parent: 8, grandparent: 2, points: 5, },
            { id: 24, name: 'SLÅ EGEN REKORD', parent: 8, grandparent: 2, points: 10, },
            { id: 25, name: 'HEIE PÅ EN VENN', parent: 8, grandparent: 2, points: 15 },
            { id: 26, name: '3 TING DU ER TAKKNEMLIG FOR VED DEG SELV', parent: 9, grandparent: 3, points: 5, },
            { id: 27, name: '3 TING DU ER TAKKNEMLIG FOR VED EN ANNEN', parent: 9, grandparent: 3, points: 10, },
            { id: 28, name: 'SI HVORFOR DU ER TAKKNEMLIG FOR NOE', parent: 9, grandparent: 3, points: 15, },
            { id: 29, name: 'TELLE BAKLENGS FRA 10', parent: 10, grandparent: 3, points: 5 },
            { id: 30, name: 'TELLE BAKLENGS FRA 20', parent: 10, grandparent: 3, points: 10 },
            { id: 31, name: 'TENKE PÅ NOEN ANDRE OG SMILE I 20 SEKUNDER', parent: 10, grandparent: 3, points: 15 },
            { id: 32, name: 'DELTA PÅ EN AKTIVITET', parent: 11, grandparent: 4, points: 5 },
            { id: 33, name: 'TA INITIATIV TIL AKTIVITETEN', parent: 11, grandparent: 4, points: 10 },
            { id: 35, name: 'DELTA PÅ EN AKTIVITET', parent: 12, grandparent: 4, points: 5 },
            { id: 36, name: 'TA INITIATIV TIL AKTIVITETEN', parent: 12, grandparent: 4, points: 10 },
        ],
        statistikk: {
            antallMeldinger: 0,
            meldinger: [],
            instanser: [
                { id: 1, skole: "Hedrum Ungdomsskole", totalClasses: 5, parent: null, klasse: null, points: 0, navn: null },
                { id: 2, klasse: "8B", parent: 1, points: 0, totalStudents: 25, navn: null },
                { id: 3, klasse: "8A", parent: 1, points: 0, totalStudents: 24, navn: null },
                { id: 4, klasse: "8C", parent: 1, points: 0, totalStudents: 28, navn: null },
                { id: 5, klasse: "8D", parent: 1, points: 0, totalStudents: 27, navn: null },
                { id: 6, klasse: "8E", parent: 1, points: 0, totalStudents: 29, navn: null },
                { id: 7, klasse: "5A(TestKlasse)", parent: 1, totalStudents: 3, points: 0, navn: null },
                { id: 8, skole: "Hedrum Barneskole", totalClasses: 1, parent: null, klasse: null, points: 0, navn: null },
                { id: 9, klasse: "5", parent: 8, points: 0, totalStudents: 17, navn: null },
                { id: 10, skole: "Brunla Ungdomsskole", totalClasses: 3, parent: null, klasse: null, points: 0, navn: null },
                { id: 11, klasse: "8A", parent: 10, points: 0, totalStudents: 26, navn: null},
                { id: 12, klasse: "8B", parent: 10, points: 0, totalStudents: 27, navn: null},
                { id: 13, klasse: "8C", parent: 10, points: 0, totalStudents: 25, navn: null},
                { id: 14, skole: "Mellomhagen Ungdomsskole", totalClasses: 3, parent: null, klasse: null, points: 0, navn: null },
                { id: 15, klasse: "8A", parent: 14, points: 0, totalStudents: 27, navn: null},
                { id: 16, klasse: "8B", parent: 14, points: 0, totalStudents: 24, navn: null},
                { id: 17, klasse: "8C", parent: 14, points: 0, totalStudents: 26, navn: null},
                { id: 18, skole: "Tjodalyng skole", totalClasses: 3, parent: null, klasse: null, points: 0, navn: null },
                { id: 19, klasse: "8A", parent: 18, points: 0, totalStudents: 27, navn: null},
                { id: 20, klasse: "8B", parent: 18, points: 0, totalStudents: 27, navn: null},
                { id: 21, skole: "Jordet skole", totalClasses: 2, parent: null, klasse: null, points: 0, navn: null },
                { id: 22, klasse: "5A", parent: 21, points: 0, totalStudents: 17, navn: null},
                { id: 23, klasse: "5B", parent: 21, points: 0, totalStudents: 16, navn: null},
                { id: 24, skole: "Østre Halsen skole", totalClasses: 2, parent: null, klasse: null, points: 0, navn: null },
                { id: 25, klasse: "5A", parent: 24, points: 0, totalStudents: 17, navn: null},
                { id: 26, klasse: "5B", parent: 24, points: 0, totalStudents: 18, navn: null},
                { id: 27, klasse: "5C", parent: 24, points: 0, totalStudents: 19, navn: null},
                { id: 28, skole: "Valby skole", totalClasses: 2, parent: null, klasse: null, points: 0, navn: null },
                { id: 29, klasse: "5 Venus", parent: 28, points: 0, totalStudents: 23, navn: null},
                
                { id: 31, parent: 2, points: 0, navn: "Elias Bredesen", userName: "24breel2404@larvikskolen.no" },
                { id: 32, parent: 2, points: 0, navn: "Anna Isabell Issa Chey", userName: "24chean0509@larvikskolen.no" },
                { id: 33, parent: 2, points: 0, navn: "Åsmund Christensen", userName: "24chras1508@larvikskolen.no" },
                { id: 34, parent: 2, points: 0, navn: "Thale Gjevestad", userName: "24gjeth0909@larvikskolen.no" },
                { id: 35, parent: 2, points: 0, navn: "Victoria Hansen", userName: "20hanvi2703@larvikskolen.no" },
                { id: 36, parent: 2, points: 0, navn: "Edvard Hem", userName: "24hemed1811@larvikskolen.no" },
                { id: 37, parent: 2, points: 0, navn: "Adrian Jørgen Solheim Heum", userName: "24heuad2006@larvikskolen.no" },
                { id: 38, parent: 2, points: 0, navn: "Emelin Johanson", userName: "24johem1909@larvikskolen.no" },
                { id: 39, parent: 2, points: 0, navn: "Adrian Gulvik Kristiansen", userName: "24kriad1902@larvikskolen.no" },
                { id: 40, parent: 2, points: 0, navn: "Kristoffer Lomme Lofstad", userName: "24lofkr1708@larvikskolen.no" },
                { id: 41, parent: 2, points: 0, navn: "Leo Lønneberg", userName: "24lonle0611@larvikskolen.no" },
                { id: 42, parent: 2, points: 0, navn: "Kamal Husain Malahifji", userName: "24makam0501@larvikskolen.no" },
                { id: 43, parent: 2, points: 0, navn: "Sindre Berntsen Monsen", userName: "24monsi1903@larvikskolen.no" },
                { id: 44, parent: 2, points: 0, navn: "Simen Berntsen Monsen", userName: "24mosim1903@larvikskolen.no" },
                { id: 45, parent: 2, points: 0, navn: "Adam Piotr Nowak", userName: "24nowad3112@larvikskolen.no" },
                { id: 46, parent: 2, points: 0, navn: "Eirik Steinsholt Olsen-Nalum", userName: "24olsei1503@larvikskolen.no" },
                { id: 47, parent: 2, points: 0, navn: "Lucas André Omlandseter-Mathisen", userName: "24matlu1701@larvikskolen.no" },
                { id: 48, parent: 2, points: 0, navn: "Mali-Margrethe Heyn Rotbakken", userName: "24rotma0903@larvikskolen.no" },
                { id: 49, parent: 2, points: 0, navn: "Sara Moen Røsbek", userName: "24rossa2902@larvikskolen.no" },
                { id: 50, parent: 2, points: 0, navn: "Jon Mathias Skjelbred Samuelsen", userName: "24samjo0504@larvikskolen.no" },
                { id: 51, parent: 2, points: 0, navn: "Leah Nerli Skjærum", userName: "24skjle2909@larvikskolen.no" },
                { id: 52, parent: 2, points: 0, navn: "Kaja Sletsjøe-Moe", userName: "24sleka0405@larvikskolen.no" },
                { id: 53, parent: 2, points: 0, navn: "Kenny Tieu", userName: "24tieke0108@larvikskolen.no" },
                { id: 54, parent: 2, points: 0, navn: "Lidya Mehari Uqbe", userName: "26uqbli0812@larvikskolen.no" },
                { id: 55, parent: 2, points: 0, navn: "William Aarsum", userName: "24aaswi0909@larvikskolen" },
                { id: 56, parent: 2, points: 0, navn: "Gard Seim Amundrød", userName: "24amuga1305@larvikskolen.no" },
                { id: 57, parent: 2, navn: "Ine Wiik", userName: "ine.bjornstad@larvik.kommune.no" },

                //test klasse
                { id: 58, parent: 7, navn: "Kasper", userName: "kasper@getacademy.no" },
                { id: 59, parent: 7, navn: "Marius", userName: "mariussoerlie@gmail.com" },
                { id: 60, parent: 7, navn: "Merete", userName: "merete.berdal@gmail.com" },

                //8A
                { id: 60, parent: 3, points: 0, navn: "Omar Alali", userName: "24alaom1811@larvikskolen.no" },
                { id: 70, parent: 3, points: 0, navn: "Nikolai Andersen", userName: "24andni2807@larvikskolen.no" },
                { id: 71, parent: 3, points: 0, navn: "René Nathaniel Madelo Bjørndal", userName: "bjore1605@larvikskolen.no" },
                { id: 72, parent: 3, points: 0, navn: "Nicoline Jacobsen Einarsen", userName: "24einni1911@larvikskolen.no" },
                { id: 73, parent: 3, points: 0, navn: "Amalie Hundvin Sæther Eliassen", userName: "24eliam0507@larvikskolen.no" },
                { id: 74, parent: 3, points: 0, navn: "Ronya Melek Erdal", userName: "24erdro2012@larvikskolen.no" },
                { id: 75, parent: 3, points: 0, navn: "Sander Foldvik", userName: "24folsa0703@larvikskolen.no" },
                { id: 76, parent: 3, points: 0, navn: "Thea Sofie Bjerkholt Fuglevik", userName: "24fugth1208@larvikskolen.no" },
                { id: 77, parent: 3, points: 0, navn: "William Lyngdal Hellem", userName: "24helwi2602@larvikskolen.no" },
                { id: 78, parent: 3, points: 0, navn: "Zakariya Haysam Hindawi", userName: "24hinza1001@larvikskolen.no" },
                { id: 79, parent: 3, points: 0, navn: "Eirik Johannes Hygen", userName: "24hygei2510@larvikskolen.no" },
                { id: 80, parent: 3, points: 0, navn: "Nathan Jeznach", userName: "24jezna0302@larvikskolen.no" },
                { id: 81, parent: 3, points: 0, navn: "Nils Felix Johannessen-Jakobsen", userName: "24jakni2712@larvikskolen.no" },
                { id: 82, parent: 3, points: 0, navn: "Lania Bahzad Karim", userName: "24karla0608@larvikskolen.no" },
                { id: 83, parent: 3, points: 0, navn: "Elisabeth Foldvik Klevstuhl", userName: "24kleel0901@larvikskolen.no" },
                { id: 84, parent: 3, points: 0, navn: "Thanadon Nanthamuen", userName: "24nthan2101@larvikskolen.no" },
                { id: 85, parent: 3, points: 0, navn: "Edwin Olstad", userName: "24bered3108@larvikskolen.no" },
                { id: 86, parent: 3, points: 0, navn: "Badar Hassan Osman", userName: "23osmba2004@larvikskolen.no" },
                { id: 87, parent: 3, points: 0, navn: "Thea Bradley Posejpal", userName: "24posth1902@larvikskolen.no" },
                { id: 88, parent: 3, points: 0, navn: "Ulrick Rode", userName: "24rodul0206@larvikskolen.no" },
                { id: 89, parent: 3, points: 0, navn: "Shem Sfishta", userName: "24sfish1002@larvikskolen.no" },
                { id: 90, parent: 3, points: 0, navn: "Jad Ayman Shuhadeh Alrifaie", userName: "25aljad1312@larvikskolen.no" },
                { id: 91, parent: 3, points: 0, navn: "Madelen Steffner", userName: "24stema1210@larvikskolen.no" },
                { id: 92, parent: 3, points: 0, navn: "Mohammadou Lamin Touray", userName: "24toumo0607@larvikskolen.no" },

                //8C
                { id: 93, parent: 4, points: 0, navn: "Ardian Abduramani", userName: "24abdar3006@larvikskolen.no" },
                { id: 94, parent: 4, points: 0, navn: "Lukas Fevang Andreassen", userName: "24andlu2101@larvikskolen.no" },
                { id: 95, parent: 4, points: 0, navn: "Sebastian Ulrik Atkinson", userName: "24atkse0703@larvikskolen.no" },
                { id: 96, parent: 4, points: 0, navn: "Sebastian Berg-Tangen", userName: "24berse1404@larvikskolen.no" },
                { id: 97, parent: 4, points: 0, navn: "Tomas Dovydenas", userName: "24dovto2405@larvikskolen.no" },
                { id: 98, parent: 4, points: 0, navn: "Sara Fossum Eftang", userName: "24eftsa0808@larvikskolen.no" },
                { id: 99, parent: 4, points: 0, navn: "Christine-Therese Helgaker Gjerken", userName: "24gjech1709@larvikskolen.no" },
                { id: 100, parent: 4, points: 0, navn: "Hallvard Gulbrandsen", userName: "24gulha1701@larvikskolen.no" },
                { id: 101, parent: 4, points: 0, navn: "Medina Hodzic", userName: "24hogme0801@larvikskolen.no" },
                { id: 102, parent: 4, points: 0, navn: "Berken Kerim Hüyük", userName: "24huybe1611@larvikskolen.no" },
                { id: 103, parent: 4, points: 0, navn: "Rakel Kuijpers Jørgensen", userName: "24jorra2809@larvikskolen.no" },
                { id: 104, parent: 4, points: 0, navn: "Alexander Gundersen Kruse", userName: "24krual2605@larvikskolen.no" },
                { id: 105, parent: 4, points: 0, navn: "Vetle Bakke Kvamme", userName: "24kvave0909@larvikskolen.no" },
                { id: 106, parent: 4, points: 0, navn: "Iselin Lomme", userName: "24lomis2501@larvikskolen.no" },
                { id: 107, parent: 4, points: 0, navn: "Frida Helene Selbo Malmquist", userName: "24malfr1007@larvikskolen.no" },
                { id: 108, parent: 4, points: 0, navn: "Khaalid Abdulqadir Mohamed", userName: "24mohkh0201@larvikskolen.no" },
                { id: 109, parent: 4, points: 0, navn: "Daniel Abdukhader Mohammed", userName: "24mohda0101@larvikskolen.no" },
                { id: 100, parent: 4, points: 0, navn: "Elias Morshedy", userName: "24morel2709@larvikskolen.no" },
                { id: 101, parent: 4, points: 0, navn: "Oskar August Nilsson", userName: "24nilos0210@larvikskolen.no" },
                { id: 102, parent: 4, points: 0, navn: "Linnea Hansen Palmgren", userName: "24palli2710@larvikskolen.no" },
                { id: 103, parent: 4, points: 0, navn: "Mina Petersen", userName: "24petmi2008@larvikskolen.no" },
                { id: 104, parent: 4, points: 0, navn: "Alfons Bjørnæs Rauan", userName: "24raual0209@larvikskolen.no" },
                { id: 105, parent: 4, points: 0, navn: "Nora Karoline Ackenhausen Renholt", userName: "24renno1405@larvikskolen.no" },
                { id: 106, parent: 4, points: 0, navn: "Oliver Schøyen", userName: "24schol0712@larvikskolen.no" },
                { id: 107, parent: 4, points: 0, navn: "Alexander Ellefsen Solbu", userName: "24solal1801@larvikskolen.no" },
                { id: 108, parent: 4, points: 0, navn: "Milla Ravn Svanberg", userName: "24svami1505@larvikskolen.no" },
                { id: 109, parent: 4, points: 0, navn: "Johanne Vågen", userName: "24vagjo3007@larvikskolen.no" },
                { id: 110, parent: 4, points: 0, navn: "Selin Hansen Yeser", userName: "24yesse1410@larvikskolen.no" },

                //8D
                { id: 111, parent: 5, points: 0, navn: "Saifullah Abubakarov", userName: "24abusa2502@larvikskolen.no" },
                { id: 112, parent: 5, points: 0, navn: "Thea Amundsen", userName: "24amuth2012@larvikskolen.no" },
                { id: 113, parent: 5, points: 0, navn: "Dieu-Donne Tshimpo Badibanga", userName: "24baddi2011@larvikskolen.no" },
                { id: 114, parent: 5, points: 0, navn: "Rama Khalil Ibrahim Barakat", userName: "24barra1008@larvikskolen.no" },
                { id: 115, parent: 5, points: 0, navn: "Emilie Anett Fandal-Lysgård", userName: "24fanem1305@larvikskolen.no" },
                { id: 116, parent: 5, points: 0, navn: "Joakim Aleksander Gåsholt", userName: "24gasjo2501@larvikskolen.no" },
                { id: 117, parent: 5, points: 0, navn: "Eline Andrea Haugen", userName: "24hauel2202@larvikskolen.no" },
                { id: 118, parent: 5, points: 0, navn: "Amund Johansson Henden", userName: "24henam0508@larvikskolen.no" },
                { id: 119, parent: 5, points: 0, navn: "Ola Jansen Håstul", userName: "24hasol3004@larvikskolen.no" },
                { id: 120, parent: 5, points: 0, navn: "Daniel Tandberg Knudsen", userName: "24knuda2604@larvikskolen.no" },
                { id: 121, parent: 5, points: 0, navn: "Agnes Kornelia Ramberg Krongaard", userName: "24kroag1706@larvikskolen.no" },
                { id: 122, parent: 5, points: 0, navn: "Jessica Magnussen-Larsson", userName: "24magje1405@larvikskolen.no" },
                { id: 123, parent: 5, points: 0, navn: "Sarah Emilie Nakim Nystrand", userName: "24naksa0704@larvikskolen.no" },
                { id: 124, parent: 5, points: 0, navn: "Jakub Oniszczuk", userName: "24onija1712@larvikskolen.no" },
                { id: 125, parent: 5, points: 0, navn: "Elida Askim Pettersen", userName: "24petel1401@larvikskolen.no" },
                { id: 126, parent: 5, points: 0, navn: "Hieu Nicolai Hoang Pham", userName: "24phahi0310@larvikskolen.no" },
                { id: 127, parent: 5, points: 0, navn: "Nikolai Glittum Ringdal", userName: "24rinni0101@larvikskolen.no" },
                { id: 128, parent: 5, points: 0, navn: "Alexander Ringdal-Pedersen", userName: "24rinal1202@larvikskolen.no" },
                { id: 129, parent: 5, points: 0, navn: "Zofia Antonina Roznowska", userName: "24rozzo0704@larvikskolen.no" },
                { id: 130, parent: 5, points: 0, navn: "Mario Salihi", userName: "24salma0302@larvikskolen.no" },
                { id: 131, parent: 5, points: 0, navn: "Andrea Lyngra Seierstad", userName: "24seian0704@larvikskolen.no" },
                { id: 132, parent: 5, points: 0, navn: "Trygve Vannum Seierstad", userName: "24seitr1902@larvikskolen.no" },
                { id: 133, parent: 5, points: 0, navn: "Narin Nazir Sereroy", userName: "24serna1208@larvikskolen.no" },
                { id: 134, parent: 5, points: 0, navn: "Joris Simenas", userName: "24simjo1508@larvikskolen.no" },
                { id: 135, parent: 5, points: 0, navn: "Sofie Brudal Uglum", userName: "24uglso1606@larvikskolen.no" },
                { id: 136, parent: 5, points: 0, navn: "Satti Valaskeviciute", userName: "24valsa0502@larvikskolen.no" },
                { id: 137, parent: 5, points: 0, navn: "Ewelina Kamila Wiatr-Nowak", userName: "24wiaew1212@larvikskolen.no" },

                //8E
                { id: 138, parent: 6, points: 0, navn: "Leila Abdullah", userName: "24abdle1311@larvikskolen.no" },
                { id: 139, parent: 6, points: 0, navn: "Hala Haitam Alkhalaf", userName: "24ahala0508@larvikskolen.no" },
                { id: 140, parent: 6, points: 0, navn: "Yara Khalil Ibrahim Barakat", userName: "24barya1008@larvikskolen.no" },
                { id: 141, parent: 6, points: 0, navn: "Rikke-Emilie Blimyr-Andersen", userName: "24bliri1810@larvikskolen.no" },
                { id: 142, parent: 6, points: 0, navn: "Noah Rui Christensen", userName: "24chrno0610@larvikskolen.no" },
                { id: 143, parent: 6, points: 0, navn: "Alice Linnea Ditlefsen", userName: "24dital0103@larvikskolen.no" },
                { id: 144, parent: 6, points: 0, navn: "Jonatan Pedersen Eftedal", userName: "24eftjo0311@larvikskolen.no" },
                { id: 145, parent: 6, points: 0, navn: "Sofie Eidsten", userName: "24eidso0803@larvikskolen.no" },
                { id: 146, parent: 6, points: 0, navn: "Martine Bjanca Bolusan Eldevik", userName: "24eldma2401@larvikskolen.no" },
                { id: 147, parent: 6, points: 0, navn: "Christine Houtman Furustad", userName: "24furch1603@larvikskolen.no" },
                { id: 148, parent: 6, points: 0, navn: "Emma Kristiansen Hafstad", userName: "24hafem2106@larvikskolen.no" },
                { id: 149, parent: 6, points: 0, navn: "Emilian Haugen", userName: "24hauem1109@larvikskolen.no" },
                { id: 150, parent: 6, points: 0, navn: "Anna Sofie Hjartåker Haugen", userName: "24hauan2012@larvikskolen.no" },
                { id: 151, parent: 6, points: 0, navn: "Linnéa Holst", userName: "24holli1808@larvikskolen.no" },
                { id: 152, parent: 6, points: 0, navn: "Isho Hani Homa", userName: "2024homis0802@larvikskolen.no" },
                { id: 153, parent: 6, points: 0, navn: "Fredrik Thanh Huynh", userName: "24doafr0402@larvikskolen.no" },
                { id: 154, parent: 6, points: 0, navn: "Amy Le", userName: "24leaam1309@larvikskolen.no" },
                { id: 155, parent: 6, points: 0, navn: "Loran Alan Mamandy", userName: "24mamlo3010@larvikskolen.no" },
                { id: 156, parent: 6, points: 0, navn: "Fouad Hasan Mohammed", userName: "24mohfo2407@larvikskolen.no" },
                { id: 157, parent: 6, points: 0, navn: "Odin Eckell Molteberg", userName: "24molod1104@larvikskolen.no" },
                { id: 158, parent: 6, points: 0, navn: "Nikolai Jensen Nordby", userName: "24norni1712@larvikskolen.no" },
                { id: 159, parent: 6, points: 0, navn: "Madelén Andreassen Pedersen", userName: "24pedma1806@larvikskolen.no" },
                { id: 160, parent: 6, points: 0, navn: "Isabell Olavario Pettersen", userName: "24petis1909@larvikskolen.no" },
                { id: 161, parent: 6, points: 0, navn: "Julie Furuheim Rimstad", userName: "24rimju2903@larvikskolen.no" },
                { id: 162, parent: 6, points: 0, navn: "Marte Granli Saga", userName: "24sagma0902@larvikskolen.no" },
                { id: 163, parent: 6, points: 0, navn: "Håvar Becker Scavenius", userName: "24scaha1810@larvikskolen.no" },
                { id: 164, parent: 6, points: 0, navn: "Marie Olafsen Setervang", userName: "24setma1511@larvikskolen.no" },
                { id: 165, parent: 6, points: 0, navn: "Leon Svendsen", userName: "24svele2806@larvikskolen.no" },
                { id: 166, parent: 6, points: 0, navn: "Henrik Dinh Phong To", userName: "24toahe2312@larvikskolen.no" },

                { id: 167, parent: 2, points: 0, navn: "Lars-petter Sjovold", userName: "lars-petter.sjovold@larvik.kommune.no" },
                { id: 168, parent: 3, points: 0, navn: "Karoline Bjornstad", userName: "karoline.bjornstad.dolva@larvik.kommune.no" },
                { id: 169, parent: 4, points: 0, navn: "Rita Haglund", userName: "rita.haglund@larvik.kommune.no" },
                { id: 170, parent: 5, points: 0, navn: "Petter Duvholt Larsen", userName: "Petter.Duvholt.Larsen@larvik.kommune.no" },
                { id: 171, parent: 6, points: 0, navn: "Snorre Sageng Hoivik-carlin", userName: "snorre.sageng.hoivik-carlin@larvik.kommune.no" },
                
            ],
            achievements: [],
        },
        muligeMeldinger: [
            { text: "Du er tatt på fersken i å", ledd: 0 },
            { text: "være støttende.", ledd: 1 },
            { text: "hjelpe andre.", ledd: 1 },
            { text: "invitere andre med.", ledd: 1 },
            { text: "spre glede.", ledd: 1 },
            { text: "lage god stemning.", ledd: 1 },
            { text: "bli kjent med nye.", ledd: 1 },
            { text: "spre god energi.", ledd: 1 },
            { text: "heie på andre.", ledd: 1 },
            { text: "være modig.", ledd: 1 },
            { text: "utgjøre en positiv forskjell.", ledd: 1 },
            { text: "lytte.", ledd: 1 },
            { text: "utfordre deg selv.", ledd: 1 },
            { text: "jobbe målrettet.", ledd: 1 },
            { text: "prøve noe nytt.", ledd: 1 },
            { text: "se nye muligheter.", ledd: 1 },
            { text: "gi kompliment.", ledd: 1 },
            { text: "være raus.", ledd: 1 },
            { text: "samarbeide godt.", ledd: 1 },
            { text: "ta ansvar.", ledd: 1 },
            { text: "oppmuntre.", ledd: 1 },
            { text: "være tålmodig.", ledd: 1 },
            { text: "vise engasjement.", ledd: 1 },
            { text: "vise respekt.", ledd: 1 },
            { text: "lære bort noe du er god på.", ledd: 1 },
            { text: "være nysgjerrig.", ledd: 1 },
            { text: "være lojal.", ledd: 1 },
            { text: "inkludere andre.", ledd: 1 },
            { text: "invitere andre med.", ledd: 1 },

            { text: "Stå på,", ledd: 2 },
            { text: "Fortsett akkurat sånn,", ledd: 2 },
            { text: "Fortsatt å være den flotte personen du er,", ledd: 2 },
            { text: "Stå på videre,", ledd: 2 },
            { text: "Gjerne gjøre det igjen,", ledd: 2 },
            { text: "Gjenta suksessen,", ledd: 2 },
            { text: "Ikke slutte med det,", ledd: 2 },
            { text: "Ikke gi deg,", ledd: 2 },
            { text: "Utforsk enda mer,", ledd: 2 },

            { text: "du er fantastisk!", ledd: 3 },
            { text: "du er en god venn!", ledd: 3 },
            { text: "du motiverer!", ledd: 3 },
            { text: "du gjør meg glad!", ledd: 3 },
            { text: "du inspirerer!", ledd: 3 },
            { text: "du skaper trygghet!", ledd: 3 },
            { text: "du er en stjerne!", ledd: 3 },
            { text: "du går foran som et godt eksempel!", ledd: 3 },
            { text: "du er helt rå!", ledd: 3 },
            { text: "du er lett å like!", ledd: 3 },
            { text: "du er en nydelig person!", ledd: 3 },
        ],

        meldinger: {
            utbox: {
                dineSendteMeldinger: [
                    { melding: "" }
                ]
            },
        },
    }
}

async function getData() {
    if (!gapi.auth2.getAuthInstance().isSignedIn.get()) return;
    try {
        for (let i = 0; i < model.data.statistikk.instanser.length; i++) {
            model.data.statistikk.instanser[i].points = 0;
        }
        model.data.statistikk.achievements = [];
        let response = await Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQNw10gr74fMdO2wuZGzBYwBzuJsTcJZXmEP3daKXHJO1fEJy0Af-qlusaIn_kBrSrSk7BSWog-xcC7/pub?output=csv', {
            download: true,
            worker: true,
            complete: function (results) {
                const mappedData = results.data.map((e, index) => {
                    if (index == 0) return;
                    return { tid: e[0], userName: e[1].trim(), mottaker: e[2].trim(), taskId: parseInt(e[3]), points: parseInt(e[4]), pointsNotAdded: true }
                })
                const filterdData = mappedData.filter((e) => e)
                model.data.statistikk.achievements = filterdData;
                addPoints();
            }
        })
        await getMsgs();
    } catch (e) {
        console.error(e)
    }
}
async function loadClassList() {
    await fetchClassData(8, 'https://www.getacademy.no/assets/Q3bafZUFSkWaSYcyTUkXzA/wow/trinn-5/Hedrum%20barneskole%20-%205trinn%20-%205.csv')
    await fetchClassData(11, 'https://www.getacademy.no/assets/Q3bafZUFSkWaSYcyTUkXzA/wow/trinn-8/Brunla%20ungdomsskole%20-%208trinn%20-%208A.csv')
    await fetchClassData(12, 'https://www.getacademy.no/assets/Q3bafZUFSkWaSYcyTUkXzA/wow/trinn-8/Brunla%20ungdomsskole%20-%208trinn%20-%208B.csv')
    await fetchClassData(13, 'https://www.getacademy.no/assets/Q3bafZUFSkWaSYcyTUkXzA/wow/trinn-8/Brunla%20ungdomsskole%20-%208trinn%20-%208C.csv')
    await fetchClassData(15, 'https://www.getacademy.no/assets/Q3bafZUFSkWaSYcyTUkXzA/wow/trinn-8/Mellomhagen%20ungdomsskole%20-%208trinn%20-%208A.csv')
    addTeacherToClass(15, "Gro Bjørnødegård", 'Gro.Bjornodegard@larvikskolen.no');
    await fetchClassData(16, 'https://www.getacademy.no/assets/Q3bafZUFSkWaSYcyTUkXzA/wow/trinn-8/Mellomhagen%20ungdomsskole%20-%208trinn%20-%208B.csv')
    addTeacherToClass(16, "Eileen Langerud", 'Eileen.Langerud@larvikskolen.no');
    await fetchClassData(17, 'https://www.getacademy.no/assets/Q3bafZUFSkWaSYcyTUkXzA/wow/trinn-8/Mellomhagen%20ungdomsskole%20-%208trinn%20-%208C.csv')
    addTeacherToClass(17, "Therese Nørberg", 'Therese.Norberg@larvikskolen.no');
    await fetchClassData(19, 'https://www.getacademy.no/assets/Q3bafZUFSkWaSYcyTUkXzA/wow/trinn-8/Tjodalyng%20skole%20-%208trinn%20-%208A.csv')
    addTeacherToClass(19, "Kjetil Hobber", 'kjetil.hobber@larvik.kommune.no');
    await fetchClassData(20, 'https://www.getacademy.no/assets/Q3bafZUFSkWaSYcyTUkXzA/wow/trinn-8/Tjodalyng%20skole%20-%208trinn%20-%208B.csv')
    addTeacherToClass(20, "Regitze Ravnsborg", 'regitze.ravnsborg@larvik.kommune.no');
    await fetchClassData(22, 'https://www.getacademy.no/assets/Q3bafZUFSkWaSYcyTUkXzA/wow/trinn-5/Jordet%20skole%20-%205trinn%20-%205A.csv')
    addTeacherToClass(22, "Line Solid", "line.sollid@larvik.kommune.no");
    await fetchClassData(23, 'https://www.getacademy.no/assets/Q3bafZUFSkWaSYcyTUkXzA/wow/trinn-5/Jordet%20skole%20-%205trinn%20-%205B.csv')
    addTeacherToClass(23, "Birte Stovland Riksfjord", 'birte.stovland@larvik.kommune.no');
    await fetchClassData(25, 'https://www.getacademy.no/assets/Q3bafZUFSkWaSYcyTUkXzA/wow/trinn-5/%C2%A5stre%20Halsen%20skole%20-%205trinn%20-%205A.csv')
    await fetchClassData(26, 'https://www.getacademy.no/assets/Q3bafZUFSkWaSYcyTUkXzA/wow/trinn-5/%C2%A5stre%20Halsen%20skole%20-%205trinn%20-%205B.csv')
    await fetchClassData(27, 'https://www.getacademy.no/assets/Q3bafZUFSkWaSYcyTUkXzA/wow/trinn-5/%C2%A5stre%20Halsen%20skole%20-%205trinn%20-%205C.csv')
    await fetchClassData(29, 'https://www.getacademy.no/assets/Q3bafZUFSkWaSYcyTUkXzA/wow/trinn-5/Valby%20skole%20-%205trinn%20-%205.%20klasse%20Venus.csv')
}
function addTeacherToClass(_parent, name, email) {
    let newId = model.data.statistikk.instanser.length + 15;
    model.data.statistikk.instanser.push({id: newId, parent: _parent, points: 0, navn: name, userName: email});
}
var CLIENT_ID = '<YOUR_CLIENT_ID>';
let API_KEY = 'AIzaSyDObDZWxzHqPFghxyANvxwMbwmFFGumpTM';
//{input/googleuser} => 
//brukernavn, epost, 
//setter side til main og updater viewet
function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    model.app.currentName = profile.getName();
    model.app.currentUser = profile.getEmail(); // This is null if the 'email' scope is not present.
    model.app.currentPage = 'main'
    model.app.currentUserKlasse = findP();
    getData();
}
function findP() {
    var x = model.data.statistikk.instanser.find((p) => {
        if (p.userName == model.app.currentUser)
            return p.parent;
    })
    return x.parent;
}

// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
// Modify mail, readonly, compose and send => user must accept in order for us to access mail and send. 
const SCOPES = 'https://www.googleapis.com/auth/userinfo.profile';

function handleClientLoad() {
    console.log("handleCLientLoad")
    gapi.load('client:auth2', initClient)
}


function appendPre(message) {
    var textContent = document.createTextNode(message + '\n');
    console.log(textContent);
}

async function initClient() {
    console.log("initclient")
    try {
        await gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        });

        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
        getData();
    } catch (error) {
        appendPre(JSON.stringify(error, null, 2));
        console.error(error)
    }
}


function updateSigninStatus(isSignedIn) {
    console.log("isSignedIn")
    // if (isSignedIn) {
    // 	getData().then(() => {
    // 		console.log("signInStatusDone");
    // 		updateView();
    // 	})
    // }
}

async function handleSignoutClick(event, googleUser) {
    const signOut = await gapi.auth2.getAuthInstance().signOut();
    await signOut, model.app.currentPage = 'google';
    model.app.currentName = ""
    model.app.currentUser = ""
    updateView();
    window.location.reload(true);
}


function sendEmail(target, message, motakker = "") {
    const subject = 'Wishing others Well';
    const content = message;
    let mimeData = ""
    if (motakker == "") {
        mimeData = [
            `From: ${model.app.currentUser}`,
            "To: " + target,
            "Subject: =?utf-8?B?" + window.btoa(unescape(encodeURIComponent(subject))) + "?=",
            "MIME-Version: 1.0",
            "Content-Type: text/plain; charset=UTF-8",
            "Content-Transfer-Encoding: 7bit",
            "",
            "Du har fått en ny melding",
            "",
            content].join("\n").trim();
    } else {
        mimeData = [
            `From: ${model.app.currentUser}`,
            "To: " + target,
            "Subject: =?utf-8?B?" + window.btoa(unescape(encodeURIComponent(subject))) + "?=",
            "MIME-Version: 1.0",
            "Content-Type: text/plain; charset=UTF-8",
            "Content-Transfer-Encoding: 7bit",
            "",
            `Ny melding sendt til ${motakker}`,
            "",
            content].join("\n").trim();
    }
    //raw, data to latin-1/base64, avoids any special chars being removed.
    const raw = window.btoa(unescape(encodeURIComponent(mimeData))).replace(/\+/g, '-').replace(/\//g, '_');
    gapi.client.gmail.users.messages.send({
        'userId': 'me',
        'resource': {
            'raw': raw
        }
    }).execute(res => {
        console.log('Email sent', res);
        console.log('Success', res.result)
        getData();
    });
}

function addAch(_user, _kategori, _points, _motakker = "") {
    const opts = {
        method: "POST",
        mode: "no-cors",
        redirect: "follow",
        referrer: "no-referrer"
    }

    const url = `https://docs.google.com/forms/d/e/1FAIpQLSdEn9Gqb7Ie_ANQvMumGv1xidp1eqRO8PBl9y7PVeT5IKAflA/formResponse?usp=pp_url
    &entry.2113492938=${_user}
    &entry.940698215=${_motakker}
    &entry.1627599794=${_kategori}
    &entry.1541312260=${_points}
    &submit=SUBMIT`;

    return fetch(url, opts)
}
const firebaseConfig = {
    apiKey: "AIzaSyAdzRGnYxFXls-LxG8pBmgTN0aTDbfTJPw",
    authDomain: "wishotherswell-82682.firebaseapp.com",
    databaseURL: "https://wishotherswell-82682-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "wishotherswell-82682",
    storageBucket: "wishotherswell-82682.appspot.com",
    messagingSenderId: "416443676626",
    appId: "1:416443676626:web:7e24c3d0ad353b17693a0b",
    measurementId: "G-ZM70JWY8JE"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var meldingerCollection = db.collection("meldinger")
async function getMsgs() {
    if (!gapi.auth2.getAuthInstance().isSignedIn.get()) return;
    var auth2 = gapi.auth2.getAuthInstance();
    var profile = auth2.currentUser.get().getBasicProfile();
    model.app.inbox = [];
    await meldingerCollection.onSnapshot(
        function (meldingerCollection) {
            meldingerCollection.forEach(function (meldingCollectionSS) {
                let melding = meldingCollectionSS.data();
                if (profile.getEmail() == melding.reciver) {
                    model.app.inbox.push({ 
                        sender: melding.sender, 
                        data: melding.data, 
                        date: melding.date, 
                        reciver: melding.reciver, 
                        id: meldingCollectionSS.id.toString() });
                }
            });
        });
}

function sendMsg(_sender, _reciver, _data) {
    var d = new Date().toLocaleDateString("en-UK").replace(/\//g, '-');
    var melding = {
        sender: _sender,
        reciver: _reciver,
        data: _data,
        date: d
    }
    meldingerCollection.add(melding);
}

async function _delete(id) {
    await db.collection("meldinger").doc(id).delete();
    getMsgs();
    updateView();
}

async function searchClassListsForStudent(email) {
    for (let i = 0; i < classLists.length; i++) {
        if(searchClasslist(classList[i], email)) {
            return true;
        }
        return false;
    }
}

function deleteAll() {
    model.app.inbox.forEach((m) => {
        _delete(m.id);
    })
}
async function fetchClassData(parentId, url) {
    let prevLen = model.data.statistikk.instanser.length + 15 - 1;
    let response = await fetch(url);
    let data = await response.text();
    let parsed = Papa.parse(data);
    parsed.data.map((elev, index) => {
        if(index != 0 && index != parsed.data.length - 1) model.data.statistikk.instanser.push({id: prevLen + index, 
            parent: parentId, points: 0, navn: parsed.data[index][1], userName: parsed.data[index][0]}) 
    })
}
