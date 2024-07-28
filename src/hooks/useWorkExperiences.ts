import { useToast } from "@/components/ui/use-toast"
import { supabase_client } from "@/db/supabase/supabase-client"
import { WorkExperienceProps } from "@/utils/types"
import { useEffect, useState } from "react"

export const useWorkExperiences = () => {
    const [workExperiences, setWorkExperience] = useState<WorkExperienceProps[]>([])
    const {toast } = useToast()
    const fetchWorkExperience = async () => {
        const {data, error} = await supabase_client.from("work-experience").select("*")
        if(error){
            toast({
                variant: "destructive",
                title: error.code,
                description: error.message
            })
        }else{
            setWorkExperience(data as WorkExperienceProps[])
        }
    }
    useEffect(() => {
        fetchWorkExperience()
    }, [])

    return {
        workExperiences
    }
}