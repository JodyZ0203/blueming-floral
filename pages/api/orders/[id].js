import { SearchOrders, RetrieveOrder } from '../../../lib/square-sdk'

BigInt.prototype.toJSON = function() {return this.toString()}

export default async function orders(req, res) {
    const {
        query: { id },
        method,
      } = req
      const email = decodeURIComponent(id)
  switch(method){
   case 'GET':
    try {
        console.log(email.includes("@"))
        if (email.includes("@") == true){
          const data = await SearchOrders(email)
          console.log(data)
          res.status(200).json(data)
        }
        else{
          const data = await RetrieveOrder(email)
          console.log(data)
          res.status(200).json(data)
        }
      } catch (error) {
        res.status(error.status || 500).end(error.message)
      } 
     break 
     default:
        res.status(400).json({success: false})
        break
    }
}