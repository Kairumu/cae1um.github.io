const sides = [
    { 
        name : "int-dev",
        img  : "https://firebasestorage.googleapis.com/v0/b/potfolio-ebeda.appspot.com/o/int-devel.png?alt=media&token=dbea711e-b8c1-4b1d-808e-252591abb922",
        link : "https://int-devel.web.app/",
        role : "#Design #Develop",
        tech : "#react-js #canvas",
        desc : "Playing with canvas",

    },
    { 
        name : "pic_around",
        img  : "https://firebasestorage.googleapis.com/v0/b/potfolio-ebeda.appspot.com/o/pic_around.jpg?alt=media&token=5e8799ac-2c1b-4859-a937-1dc04327f046",
        link : "http://csmsk8x2004.nfra.io:7777/",
        role : "#Design #Develop",
        tech : "#flask #jquery #clous",
        desc : "Show user popular contents(imgs) around them, help user choose right POI for the moment",

    },
    { 
        name : "ourmap",
        img  : "https://firebasestorage.googleapis.com/v0/b/potfolio-ebeda.appspot.com/o/ourmap.jpg?alt=media&token=d14ee313-7b03-412d-9610-927b01de230d",
        link : "http://csmsk8x2004.nfra.io:7003/home", 
        role : "#Develop", 
        tech : "#flask #jquery #elasticsearch",
        desc : `Collaborative poi bookmark service... 
                Multiple users can participate making maps...`,
    },
    { 
        name : "What to Eat v2",
        img  : "https://firebasestorage.googleapis.com/v0/b/potfolio-ebeda.appspot.com/o/%E1%84%86%E1%85%AF%E1%84%86%E1%85%A5%E1%86%A8%E1%84%8B%E1%85%B3%E1%86%AF%E1%84%81%E1%85%A1.jpg?alt=media&token=9211f5fe-1546-4ebb-a378-2c5116e2b4cf",
        link : "http://asca0x1311.nfra.io:3004/", 
        role : "#DataRefine #DataServing #Prototype", 
        tech : "#flask #jquery",
        desc : "Internal project, menu based recommend service",
    },
    { 
        name : "What to Eat",
        img  : "https://firebasestorage.googleapis.com/v0/b/potfolio-ebeda.appspot.com/o/%E1%84%86%E1%85%AF%E1%84%86%E1%85%A5%E1%86%A8%E1%84%8C%E1%85%B5.jpg?alt=media&token=c652219d-cb2e-4d29-8956-d5d216d14b66",
        link : "http://asca0x1311.nfra.io:4004/", 
        role : "#DataRefine #DataServing #Prototype", 
        tech : "#flask #jquery",
        desc : "Internal project, menu based recommend service",
    },
    { 
        name : "ppopgi.io", 
        img  : "https://firebasestorage.googleapis.com/v0/b/potfolio-ebeda.appspot.com/o/ppopgi.jpg?alt=media&token=570c9caa-cb5f-4637-b272-d84c1afd6d5c",
        link : "https://ppopgi.io/",
        role : "#Design #Develop",
        tech : "#react.js #firebase",
        desc : 'Drawing user defined lots...',
    },
    { 
        name : "Résumé",
        img  : "https://firebasestorage.googleapis.com/v0/b/potfolio-ebeda.appspot.com/o/Resume.jpg?alt=media&token=347ed07b-9911-47eb-95a8-ae7b5a8b4293",
        link : "https://resume-db14c.web.app/",
        role : "#Design #Develop",
        tech : "#react.js #firebase",
        desc : "Simple résumé service...",
    },
];

const naver = [
    { 
        name : "Local DataPipe for Smartblock",
        img  : "https://firebasestorage.googleapis.com/v0/b/potfolio-ebeda.appspot.com/o/smartblock.png?alt=media&token=5386d236-d0d9-4518-a677-56cb3768fc93", 
        link : "https://m.search.naver.com/search.naver?query=%EB%B6%80%EC%82%B0+%EC%97%AC%ED%96%89",
        role : "#DataRefine #DataServing", 
        tech : "#spark #clous",
        desc : `Data pipeline for Search service`
    },
    { 
        name : "Demaecan Search",
        img  : "https://vos.line-scdn.net/strapi-cluster-instance-bucket-84/4_50f8a996f1.png", 
        link : "https://s.search.naver.com/p/around/search.naver?tab=shop",
        role : "#DataRefine #DataServing", 
        tech : "#spark #clous",
        desc : `Provided search model and data pipeline for Shop/Item Demaecan Delivery Service`
    },
    { 
        name : "Smartaround Shopping",
        img  : "https://firebasestorage.googleapis.com/v0/b/potfolio-ebeda.appspot.com/o/shop.jpg?alt=media&token=972692cb-f0f8-465a-8e31-1880e8269d44", 
        link : "https://s.search.naver.com/p/around/search.naver?tab=shop",
        role : "#DataRefine #DataServing #Prototype", 
        tech : "#spark #clous #react.js",
        desc : `Show POIs and Items around,
                that are registered in NAVER Shopping service`,
    },
    {
        name : "PICK for Light Users", 
        img  : "https://firebasestorage.googleapis.com/v0/b/potfolio-ebeda.appspot.com/o/light_pick.jpg?alt=media&token=1b4c62bd-8ba7-4a78-9d6a-2603c54bca6a",
        link : "http://asca0x1311.nfra.io:3000/?rcode=09680",
        role : "#DataRefine #DataServing #Prototype", 
        tech : "#spark #clous #Lambda #react.js",
        desc : "POI recommendation by gender-age group for NAVER users",
    },
    {
        name : "Smartaround PICK Timeline", 
        img  : "https://firebasestorage.googleapis.com/v0/b/potfolio-ebeda.appspot.com/o/pick.jpg?alt=media&token=f48ee6e4-06d5-4076-aa5e-24bbe629222e",
        link : "https://s.search.naver.com/p/around/search.naver?tab=pick",
        role : "#DataRefine #DataServing #Prototype", 
        tech : "#spark #clous #Lambda #react.js",
        desc : "Served Timeline data for Smartaround",
    },
    { 
        name : "Line x LocalAI",  
        img  : "https://firebasestorage.googleapis.com/v0/b/potfolio-ebeda.appspot.com/o/line_localSearch.jpg?alt=media&token=31a05303-6c2f-4c7a-94ec-b8ecd0c5de84", 
        link : "no links",
        role : "#Prototype", 
        tech : "#flask #jquery",
        desc : "POI(Places) on Search service for Japan LINE",
    },
    { 
        name : "C3S Fileviewer",
        img  : "https://firebasestorage.googleapis.com/v0/b/potfolio-ebeda.appspot.com/o/c3s_fv.jpg?alt=media&token=99b24a88-6ec6-4585-8b47-a8cce3e8533b",
        link : "http://asca0x1311.nfra.io:3003/?path=hdfs%3A%2F%2Fcamino%2Fuser%2Fsmartaround-modeling%2F", 
        role : "#Design #Develop",
        tech : "#flask #react.js #hdfs",
        desc : `Utility service used for browsing, viewing files in internal hdfs service,
                developed for internal use...`,
    },
    { 
        name : "Line Step (Deprecated)",
        img  : "https://d.line-scdn.net/stf/linecorp/ja/pr/STEP_main.png",
        link : "no links", 
        role : "#DataRefine #DataServing",
        tech : "#spark #clous",
        desc : "SNS like POI review service, refined keywords and POI data for the service.",
    },
];

const tmax = [
    { 
        name : "Tibero C Client",
        img  : "https://image.ajunews.com/content/image/2019/06/04/20190604090355429626.jpg",
        link : "https://technet.tmaxsoft.com/upload/download/online/tibero/pver-20150504-000002/index.html",
        role : "Develop",
        tech : "#C #COBOL #Oracle #LexYacc #Database",
        desc : "Worked on C client modules such as ESQL/C, ESQL/COBOL, ESQL/OCI, ODBC, CLI"
    },
    { 
        name : "PL/I runtime module",
        img  : "https://image.ajunews.com/content/image/2019/06/04/20190604090355429626.jpg",
        link : "no links",
        role : "Develop",
        tech : "#C #OCI",
        desc : "ESQL runtime module for precompiled  PL/I program with ESQL syntax",
    },
    { 
        name : "TCI for Tibero7",
        img  : "https://image.ajunews.com/content/image/2019/06/04/20190604090355429626.jpg",
        link : "no links",
        role : "Develop",
        tech : "#C++ #LexYacc",
        desc : `TCI is the base client module for Tibero 6/7.
                It was designed in flexible and scalable ways,
                so it would make developers with developing other client modules.`,
    },
];


export { sides, naver, tmax, };
