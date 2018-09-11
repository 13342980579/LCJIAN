export default{
    changeCity (state,value) {
        state.value=value.envri.value
        state.label=value.envri.label
        state.baseUrl=value.base
       // localStorage.city=city//localStorage是html5新出的api,他可以帮助我们实现类似cookie的功能，
        //做到本地存储，他的api要比cookie更简单
        try {
          localStorage.value=value.envri.value
          localStorage.label=value.envri.label
          localStorage.baseUrl=value.base
        } catch (e) {
          
        }
      }
}