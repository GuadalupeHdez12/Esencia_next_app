"use client"
import { createProduct } from "@/actions/create-product-action";
import { ProductSchema } from "@/src/schema";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


export default function AddProductForm({children}: {children:React.ReactNode}) {
    const router=useRouter()
    //VALIDAR CON EL 
    const handleSubmit = async(formData:FormData)=>{
        //RECUPERAR DATOS
        const data={
            name:formData.get('name'),
            price:formData.get('price'),
            categoryId:formData.get('categoryId'),
            image:formData.get('image')
        }
        
        const result =ProductSchema.safeParse(data)
        if (!result.success) {
            result.error.issues.forEach(issue=>{
                toast.error(issue.message)
            })
            return
        }
        //LLAMAR ESA ACCION
        const response=await createProduct(result.data)
        //Algun error
        if (response?.errors) {
             response.errors.forEach(issue=>{
                toast.error(issue.message)
            })
            return
        }
        //TODO BIEN 
        toast.success('Producto Creado Correctamente')
        router.push('/admin/products')
    }
    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">

            <form
                className="space-y-5"
                //ACTION
                action={handleSubmit}
            >
                {children}
                {/* <ProductForm />//renderizada un children y no un componente */}

                <input
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    value='Registrar producto'
                />

            </form>
        </div>
    )
}
