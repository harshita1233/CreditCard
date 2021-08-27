import valid from 'card-validator'

export default function validateInfo(values){
let errors={}
let creditCard = valid.number(values.number
)
creditCard.expirationDate = valid.expirationDate(values.expiration)
creditCard.cardholderName = valid.cardholderName(values.name)
creditCard.cvv = valid.cvv(values.cvc)
console.log(creditCard)
errors.show=true
errors.variant = 'danger'
errors.message="Unknown error occured"
errors.cnamee=false;
errors.cnumber = false;
errors.cexp = false
errors.ccvc=false
if(values.cvc === null || !values.cvc.trim()){
errors.message = "Credit Card CVV not complete"
}
else if(creditCard.cvv.isValid)
	errors.ccvc = true
else{
	errors.message = "Credit Card CVV is invalid "
}

if(values.expiration === null || !values.expiration.trim()){
errors.message = "Credit Card expiration date not complete"
}
else if(creditCard.expirationDate.isValid)
	errors.cexp = true
else{
	errors.message = "Credit Card expiration date is invalid "
}

if(values.number === null || !values.number.trim()){
errors.message = "Credit Card number not complete"
}
else if(creditCard.isValid)
	errors.cnumber= true
else{
	errors.message = "Credit Card number is invalid "
} 

if(values.name === null || !values.name.trim()){
errors.message = "Credit Card name not complete"
}
else if(creditCard.cardholderName.isValid)
	errors.cname= true
else{
	errors.message = "Credit Card name is invalid "
}

if(errors.cname && errors.cnumber && errors.ccvc && errors.cexp){
	errors.variant="success"
errors.message="Card is valid"
}
return errors

}