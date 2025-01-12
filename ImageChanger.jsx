import image1 from "../assets/image-product-1.jpg";
import image2 from "../assets/image-product-2.jpg";
import image3 from "../assets/image-product-3.jpg";
import image4 from "../assets/image-product-4.jpg";

function ImageChanger( {imageChanger}) {
    if(imageChanger == 1){
        return(
            <img src= {image1} className="w-full h-[85%] object-cover rounded-none md:rounded-[20px] xl:rounded-[30px] lg:rounded-[30px]"></img>
        )
    }else if(imageChanger ==2){
        return(
            <img src= {image2} className="w-full h-[85%] object-cover rounded-none md:rounded-[20px] xl:rounded-[30px] lg:rounded-[30px]"></img>
        )
    }else if(imageChanger ==3){
        return(
            <img src= {image3} className="w-full h-[85%] object-cover rounded-none md:rounded-[20px] xl:rounded-[30px] lg:rounded-[30px]"></img>
        )
    }else if(imageChanger == 4){
        return(
            <img src= {image4} className="w-full h-[85%] object-cover rounded-none md:rounded-[20px] xl:rounded-[30px] lg:rounded-[30px]"></img>
        )
    }else{
        return(
            <img src= {image1} className="w-full h-[85%] object-cover rounded-none md:rounded-[20px] xl:rounded-[30px] lg:rounded-[30px]"></img>
        )
    }
}

export default ImageChanger;