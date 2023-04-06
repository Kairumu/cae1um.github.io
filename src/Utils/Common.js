const getPage = ( pathname ) => {
    switch(pathname) {
        case '/' :
            return 'Home';
        case '/work' :
            return 'Work';
        case '/contact' :
            return 'Contact';
        default : 
            console.error(`Not able to parse '${pathname}'....`);
            return "Home";
    }
};

const share = (setInfo) => {
    const origin = window.location.origin;
    navigator.clipboard.writeText(origin); 
    setInfo({
        success : true,
        message : `:)\r포트폴리오 복사완료`,
    });
};


export { getPage, share, };
