
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const List = ({url}) => {

    
    const [list, setList] =useState([])
    const getList = async () =>{
        const response= await axios.get(`${url}/api/food/list`);
        
        if (response.data.success) {
            setList(response.data.data)
        } else {
            toast.error(response.data.error)
        }
    }
    const removeFood = async (foodid)=>{
        const response = await axios.post(`${url}/api/food/remove`, {id: foodid})
        await getList();

        if(response.data.success){
            toast.success(response.data.message)
        }else{
            toast.error(response.data.error)
        }
    }

    useEffect(()=>{
        getList();
    },[])

    

    return ( 
        <div className="list add flex-col">
            <p>All foods list</p>
            <div className="list table">
                <div className="tableFormat title">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>
                {list.map((item, index)=>{
                    return(
                        <div key={index} className="tableFormat">
                            <img src={`${url}/images/`+item.image} alt="" />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>${item.price}</p>
                            <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
                        </div>
                    )
                })}
            </div>
            
        </div>
     );
}
 
export default List;