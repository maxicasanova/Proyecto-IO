import React, { createContext, useState } from 'react';

import { serverTimestamp } from 'firebase/firestore';

export const OrderContext = createContext();

function OrderContextProvider({children}) { 

    const [orders, setOrders] = useState();

    const addOrder = (order) => setOrders(order);

    const getOrder = (element, location) => {
        return {...element, location, date:serverTimestamp()}
    }

    const clearOrders = () => setOrders();

    return (
        <OrderContext.Provider 
            value={{
                addOrder, getOrder, orders, clearOrders
            }}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContextProvider