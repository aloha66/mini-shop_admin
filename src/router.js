import React,{lazy} from 'react';

const Goods = lazy(() => import('views/goods/goods'))
const User = lazy(() => import('views/user/user'))
const Order = lazy(() => import('views/order/order'))

const routes = [
    {
        path: "/goods",
        exact: true,
        name: "商品",
        selected:false,
        icon:'shop',
        main: () => <Goods/>
      },
      {
        path: "/user",
        exact: true,
        name: "用户",
        main:() => <User/>,
        icon:'customer',
        selected:false,
      },
      {
        path: "/order",
        exact: true,
        name: "订单",
        main:() => <Order/>,
        icon:'order',
        selected:false,
      },
]
export default routes