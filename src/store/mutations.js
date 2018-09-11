export default{
    changeCity (state,value) {
        debugger
        state.value=value.envri
        state.baseUrl=value.base
       // localStorage.city=city//localStorage是html5新出的api,他可以帮助我们实现类似cookie的功能，
        //做到本地存储，他的api要比cookie更简单
        try {
          localStorage.value=value.envri
          localStorage.baseUrl=value.base
        } catch (e) {
          
        }
      }
}