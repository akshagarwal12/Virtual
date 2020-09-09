class Food{
    constructor(){
        this.image=loadImage("images/Milk.png")
        this.foodStock
        this.lastFed
    }
    bedroom(){
        background(bedroomImg,550,500)
    }
    washroom(){
        background(washroomImg,550,500)

    }
    garden(){
        background(gardenImg,550,500)
    }
    getFoodStock(){
        database.ref("Food").on("value",function(data){
            foodStock=data.val
        })
    }
    updateFoodStock(){
        database.ref("/").update({
            "Food":foodStock
        })
    }
    deductFood(){
        if(foodStock<=0){
            foodStock=0
        }
        else{
            foodStock=foodStock-1
        }
        database.ref("/").update({
            "Food":foodStock
        })
    }
    
    display(){
        var x=90, y=180;
        imageMode(CENTER) 
        

        if(foodStock!=0){
            for(var i=0;i<foodStock;i++){
                if(i%10==0){
                    x=90;
                    y=y+50
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }

    }
}