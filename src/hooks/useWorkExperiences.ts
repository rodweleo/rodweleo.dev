import { supabase_client } from "@/db/supabase/supabase-client"
import { useEffect, useState } from "react"

export const useWorkExperiences = () => {
    const [workExperiences, setWorkExperience] = useState([])

    const fetchWorkExperience = async () => {
        const {data, error} = await supabase_client.from("work-experience").select("*")
        if(error){

        }else{
            setWorkExperience(data)
        }
    }
    useEffect(() => {
        fetchWorkExperience()
    }, [])

    return {
        workExperiences
    }
}