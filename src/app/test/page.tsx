'use client'
import React, { useState } from "react"

function FormTest() {
    const cantPersonas = 3

    const [passengers, setPassengers]:any = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const passenger = {
        name: name, 
        email: email
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        

        console.log(passengers)
    }

    
    
    return(
        <>
            <form>
                { 
                    Array.from( {length:cantPersonas}, (_,i) => i+1).map((personIndex) => {
                        return (
                            <>
                                <h1><strong>Pasajero {personIndex}</strong></h1>
                                <label>Nombre</label>
                                <input type="text" 
                                    onChange={(e:any) => {
                                        const newPassenger = {
                                            ...passenger, 
                                            name: e.currentTarget.value
                                        }
                                        const newList = [...passengers]
                                        newList[personIndex] = newPassenger
                                        setPassengers(newList)
                                        
                                    }}
                                />
                                <label>Email</label>
                                <input type="text" 
                                    onChange={(e:any) => {
                                        const newPassenger = {
                                            ...passenger, 
                                            em: e.currentTarget.value
                                        }
                                        const newList = [...passengers]
                                        newList[personIndex] = newPassenger
                                        setPassengers(newList)
                                        
                                    }}
                                />
                            </>
                        )

                    })
                }
                
                
                <button type="submit" className="bg-green-500 rounded-md text-white font-bold p-2" 
                onClick={handleSubmit} >Enviar</button>
            </form>
        </>
    )
}

export default FormTest