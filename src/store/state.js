
let defaultValue = '北京'
try{//在某些浏览器，如果用户关闭了本地存储的功能，或者使用隐身模式，这样会导致浏览器直接抛异常，以此使用try catch
if(localStorage.value){

    defaultValue=localStorage.value
}
}catch(e){

}

const state={
    value:defaultValue
}


export default{
    //city: localStorage.city||'北京'
    value:defaultValue,
    baseUrl:localStorage.baseUrl,
    state
}                                    