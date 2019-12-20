import axios from 'axios'

axios.interceptors.request.use((req)=>{
    const token = sessionStorage.getItem('token');
    
    
    if(token){//给所有需要token的接口统一在请求头上添加token
        req.headers.token = token;
    }
    return req;
});

//响应拦截器
axios.interceptors.response.use((res)=>{
    return res.data;//过滤后台返回的数据
});