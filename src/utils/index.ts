export function formatCurrency(amount: number){
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
}
//FUNCIONES REUTILIZABLES
export function getImagePath(imagePath:string){
    //BASE
    const cloudinaryBaseUrl='https://res.cloudinary.com'
    if (imagePath.startsWith(cloudinaryBaseUrl)) {
        //RETORNAR LA IMG
        return  imagePath
    }else{
        return `/products/${imagePath}.jpg`
    }

}