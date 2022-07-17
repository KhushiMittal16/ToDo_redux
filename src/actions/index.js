export const addElement=(data)=>{
    return{
        type:"ADD_TODO",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}

export const delElement=(id)=>{
    return{
        type:"DELETE_TODO",
        payload:{
            id:id,
        }
    }
}

export const RemoveList=()=>{
    return{
        type:"REMOVE_LIST",
    }
}