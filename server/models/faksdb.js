const Rental=require('./rental') 
const User=require("./user")
 
 class fakedb{
     constructor(){
         this.rentals = [{
             title: "Nice view on ocean",
             city: "San Francisco",
             street: "Main street",
             category: "condo",
             image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
             bedrooms: 4,
             shared: true,
             description: "Very nice apartment in center of the city.",
             dailyRate: 43
         },
         {
             title: "Modern apartment in center",
             city: "New York",
             street: "Time Square",
             category: "apartment",
             image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
             bedrooms: 1,
             shared: false,
             description: "Very nice apartment in center of the city.",
             dailyRate: 11
         },
         {
             title: "Old house in nature",
             city: "Spisska Nova Ves",
             street: "Banicka 1",
             category: "house",
             image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
             bedrooms: 5,
             shared: true,
             description: "Very nice apartment in center of the city.",
             dailyRate: 23
         }]

         this.users=[{
            username:"ayyanar",
            email:"ayyanar@gamil.in",
             password:"$2b$10$G6vD6Tgko9c.tWh50q6QiuvsxHifuH/BPJ1RSq5MRAYNa.vR7bufy"
         }];
     }
        async cleandb(){   
            await Rental.remove()
            await User.remove()

        }

        pushDatetodb(){
            console.log(this.users[0]);
            
            const user = new User(this.users[0])
            this.rentals.forEach((rental)=>{
                const newrentals = new Rental(rental)
                newrentals.user=user;
                console.log(newrentals);
                user.rentals.push(newrentals)
                newrentals.save(function (err,res) {
                    console.log(res);
                    
                    
                })
           })
           user.save()
        }
        async seeddb(){
           await this.cleandb()
            this.pushDatetodb()
        }
  }
    module.exports=fakedb;