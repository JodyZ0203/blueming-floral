import { SearchOrders } from '../../../lib/square-sdk'

BigInt.prototype.toJSON = function() {return this.toString()}

export default async function orders(req, res) {
    const {
        query: { id },
        method,
      } = req
      const email = decodeURIComponent(id)
      console.log(email)
  switch(method){
   case 'GET':
    try {
        const data = await SearchOrders(email)
        console.log(data)
        res.status(200).json(data)
      } catch (error) {
        res.status(error.status || 500).end(error.message)
      } 
     break 
     default:
        res.status(400).json({success: false})
        break
    }
}