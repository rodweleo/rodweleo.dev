import { useToast } from "@/components/ui/use-toast"
import { supabase_client } from "@/db/supabase/supabase-client"
import { BlogPostProps } from "@/utils/types"
import { useEffect, useState } from "react"

export const useBlogPosts = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPostProps[]>([])
    const { toast} = useToast()
    const fetchBlogPosts = async() => {
        const {data, error} = await supabase_client.from("blog-posts").select("*")

        if(error){
            toast({
                variant: "destructive",
                title: error.code,
                description: error.message
            })
        }else{
            setBlogPosts(data as BlogPostProps[])
        }
    }
    useEffect(() => {
        fetchBlogPosts()
    }, [])

    return {
        blogPosts
    }
}