import Input from "./Input"
import React from "react"
import { useForm } from 'react-hook-form'
import { useDispatch, useStore} from 'react-redux'
import { chooseName, chooseModel, chooseYear, chooseColor, chooseGas, chooseMpg } from "../redux/slices/RootSlice"
import { server_calls } from '../api/server'

interface ContactFormProps {
    id?: string
}

const ContactForm = (props:ContactFormProps) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();


const onSubmit = (data: any, event:any ) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
        server_calls.update(props.id[0], data)
        console.log(`Updated: ${ data.name } ${ props.id }`)
        setTimeout(() => {window.location.reload()}, 200);
        event.target.reset()
    }else {
        dispatch(chooseName(data.name));
        dispatch(chooseModel(data.model));
        dispatch(chooseYear(data.year));
        dispatch(chooseGas(data.Gas));
        dispatch(chooseColor(data.color));
        dispatch(chooseMpg(data.mpg));


        server_calls.create(store.getState())
        setTimeout( () => {window.location.reload()}, 1000);
    }
    
}

    return ( 
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Contact Name</label>
                    <Input {...register('name')} name='name' placeholder="Name"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Input {...register('email')} name='name' placeholder="Name"/>
                </div>
                <div>
                    <label htmlFor="phone number">Phone Number</label>
                    <Input {...register('phone number')} name='name' placeholder="Name"/>
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <Input {...register('address')} name='name' placeholder="Name"/>
                </div>
                <div className="flex p-1">
                    <button
                    className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
                >
                    Submit
                </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm