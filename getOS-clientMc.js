function getClientOS() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    let os = "Unknown OS";

    switch (true) {
        case userAgent.includes("windows"):
            os = "Windows";
            break;
        case userAgent.includes("mac"):
            os = "MacOS";
            break;
        case userAgent.includes("linux"):
            os = "Linux";
            break;
        case userAgent.includes("android"):
            os = "Android";
            break;
        case userAgent.includes("iphone") || userAgent.includes("ipad") || userAgent.includes("ipod"):
            os = "iOS";
            break;
        default:
            os = "Unknown OS";
    }

    return os;
}

// console.log(`Client OS: ${getClientOS()}`);
