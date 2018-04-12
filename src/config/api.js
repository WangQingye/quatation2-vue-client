import fetch from './fetch'
// 获取商品列表
export const getAllGoods = () => fetch('/goods');
// 获取商品种类
export const getCategory = () => fetch('/goods/category');
// 添加一个商品
export const addGood = data => fetch('/goods', data, 'POST');
// 删除一个商品
export const delGood = data => fetch('/goods', data, 'DELETE');
// 修改一个商品
export const changeGood = data => fetch('/goods', data, 'PUT');
// 操作库存
export const manageGood = data => fetch('/goods/manage', data, 'POST');
// 获取单个商品的操作记录
export const getOneGoodHis = data => fetch('/record', data);
