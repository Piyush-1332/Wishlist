export class WishlistModel {
    public wishlistId:number;
    public productId: string;
    public userId:string;
    public productQuantity: number;
    public productCategory: string;
    public productName: string;
    public productPrice: number;
    public productColour: string;
    public productSpecification: string; 

    constructor(productId:string,userId:string){
        this.productId=productId;
        this.userId=userId;
    }
}
