import { configureStore } from "@reduxjs/toolkit"
import slice from './splice'
export const missions=configureStore({
    reducer:{
        missiondatas:slice,
    }
})