import fetch from './fetch'
// import axios from 'axios'
// 获取首页统计数据
export const getAllGoods = () => fetch('/index/index');
// 获取未来请假情况
export const getLeaveList = data => fetch('/record/leavelist', data);
/**
 * 用户相关
 */
// 获取用户列表
export const getAdmins = () => fetch('/user/index');
// 修改用户资料
export const editAdmin = data => fetch('/user/edit', data, 'POST');
