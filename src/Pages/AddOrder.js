import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import axios from 'axios';
import { toast } from "react-toastify";


const AddOrder = ({url}) => {

    
    const[image, setImage] = useState(false);
    const [data, setdata] = useState({
        name: '',
        description: '',
        price: '',
        category: 'Salad'
    })

    const changeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setdata(data=> ({...data, [name]: value}))
        
    }

    const submitHandler = async (event) =>{
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name)
        formData.append('description', data.description)
        formData.append('price', data.price)
        formData.append('category', data.category)
        formData.append('image', image)

        const response = await axios.post(`${url}/api/food/add`, formData)
        if (response.data.success) {
            setdata({
                name: '',
                description: '',
                price: '',
                category: 'Salad'
            })
            setImage(false)
            toast.success(response.data.message)
        } else {
            
        }
    }

    
    useEffect(()=>{
        console.log(data)
    }, [data])

    return ( 
        <div className="addOrder">
            <form action="" className="flex-col" onSubmit={submitHandler}>
                <div className="imgUpload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image?URL.createObjectURL(image): assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
                </div>
                <div className="productName flex-col">
                    <p>Product name</p>
                    <input onChange={changeHandler} value={data.name} type="text" name="name" placeholder="Type here"/>
                </div>
                <div className="productDescription flex-col">
                    <p>Product Description</p>
                    <textarea onChange={changeHandler} value={data.description} name="description" rows="6" placeholder="write content" required></textarea>
                </div>
                <div className="categoryPrice">
                    <div className="addCategory flex-col">
                        <p>Product Category</p>
                        <select onChange={changeHandler} name="category">
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className="price flex-col">
                        <p>Product price</p>
                        <input onChange={changeHandler} value={data.price} type="Number" name="price" placeholder="$20"/>
                    </div>
                </div>
                <button type="submit" className="addBtn">ADD</button>
            </form>
        </div>
     );
}
 
export default AddOrder;