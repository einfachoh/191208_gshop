import axios from "axios"

//ajax请求函数模块
//返回值：promise对象（异步返回的数据是：response.data），所以在外面再套一个promise对象
export default function ajax(url,data={},type="GET"){
    //resolve与reject都是函数类型，所以下方为一个高阶函数，成功调用resolve,失败调用reject
    return new Promise(function(resolve,reject){
        //执行异步ajax请求
        let promise
        if(type==='GET'){
            let dataStr=''
            Object.keys(data).forEach(key=>{
                dataStr+=key+'='+data[key]+'&'
            })
        if(dataStr!==''){
            dataStr=dataStr.substring(0,dataStr/lastIndexof('&'))
            url=url+'?'+dataStr
        }
        //发送get请求
        promise=axios.get(url)
    }else{
        promise=axios.post(url,data)
    }
    //promise异步成功返回的数据response,失败返回error
    promise.then(function(response){
        //成功调用resolve
        resolve(response.data)
    }).catch(function(error){
        //失败调用reject
        reject(error);
    })
    })
}



