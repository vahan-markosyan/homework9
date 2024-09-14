import { Dispatch } from "react"

export interface IProduct{
    id:number,
    name:string,
    price:number,
    photo:string
}

export interface IState{
    products:IProduct[]
    basket:IBasketItem[]
}

export interface IAction {
    type:string //anunna funkciayi
    payload:number
}

export interface IContext {
    state:IState,
    dispatch:Dispatch<IAction>  //dispatchin IAction tipi obyekt pti poxancenq
}

export interface IBasketItem {
    id:number,
    count:number
}