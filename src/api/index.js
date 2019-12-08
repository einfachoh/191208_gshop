import ajax from "./ajax";

//包含n个接口请求函数的模块
//函数的返回值：promise对象
//1.根据经纬度获取位置详情
export const reqAddress=(geohash)=>ajax(`position/${geohash}`)
//2.获取食物分类列表
export const reqFoodTypes=()=>ajax(`/index_category`)
//3.获取商家列表
export const reqShops=(latitude,longitude)=>ajax('/shops',{latitude,longitude})
//4、根据经纬度和关键字搜索商铺列表
export const reqSearch=({geohash,keyword})=>ajax('/search_shops',{geohash,keyword})
