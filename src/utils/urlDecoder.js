// 解析页面的url参数专用函数，返回一个js对象
let urlDecoder = (url) =>{
    // 解析url的参数,返回当前的相关值
    let decodedurl = decodeURI(url);
    let theRequest = {};
    if ( decodedurl.indexOf( "?" ) !== -1 ) {
        let str = decodedurl.substring(1);
        // let str1 = docodeurl.substring(1);

        let strs = str.split( "&" );
        for ( let i = 0; i < strs.length; i++ ) {
            theRequest[strs[i].split("=" )[0]] = (strs[ i ].split("=" )[1]);
        }
    }
    return theRequest;
}

export {urlDecoder};