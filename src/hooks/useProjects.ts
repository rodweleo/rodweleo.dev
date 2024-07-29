import { useToast } from "@/components/ui/use-toast"
import { supabase_client } from "@/db/supabase/supabase-client"
import { ProjectProps } from "@/utils/types"
import { useEffect, useState } from "react"

export const useProjects = () => {
    const [projects, setProjects] = useState<ProjectProps[]>([])
    const { toast } = useToast()
    const fetchProjects = async () => {
        const { data, error } = await supabase_client.from("notable-projects").select("*")

        if(error){
            toast({
                variant: "destructive",
                title: error.code,
                description: error.message
            })
        }

        setProjects(data as ProjectProps[])
    }
    
    useEffect(() => {
        fetchProjects()
    }, [])

    return {
        projects
    }
}