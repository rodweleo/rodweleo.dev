import { supabase_client } from "@/db/supabase/supabase-client"
import { QuotationProps } from "@/utils/types"

export const sendQuotation = async (quotation: QuotationProps) => {
    if(quotation.attachments){
        if(quotation.attachments.length > 0){
            //save the attachments in an array first
            const { data, error } = await supabase_client.storage.from("project-quotations-files").upload("projects-quotations-files", quotation.attachments[0], {
                cacheControl: "3600",
                upsert: false
            })

            return {
                data, 
                error
            }
        }
    }else{
        const { data, error } = await supabase_client.from("projects-quotations").insert({
            customer_firstName: quotation.firstName,
            customer_lastName: quotation.lastName,
            phoneNumber: quotation.phone,
            emailAddress: quotation.email,
            services: quotation.services,
            description: quotation.description,
            message: quotation.message
        })

        return {
            data, error
        }
    }
}