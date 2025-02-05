// if else
let name = " Alex"
let isAsk = prompt("Как вас зовут")
let assount = 7777
let are_assount = prompt("Ведите номер карты")
let money = 10000
let take= prompt("Сколька хотите отнять")


if (isAsk===name) {
    if (are_assount==assount) {
        if (take<money) {
            
            console.log("Всё идеально");
            console.log("У вас снята" + take + "dollars");
            console.log("У вас в счёту осталось" + (money-take) + "dollars");     
        
        }else{
            console.log("Недостаточно ваше средство");

        }
    }else{
        console.log("Ваша заявка не принят, досвидания");

    }
} else{
    console.log("Ваша заявка не принят, досвидания");  
      
}




