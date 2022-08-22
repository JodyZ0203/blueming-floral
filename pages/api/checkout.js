import { Checkout } from '../../lib/square-sdk'

export default async function checkout(req, res) {
  try {
    const url = await Checkout(req.body.item, req.body.email)
    res.status(200).send({ success: true, url: url })
  } catch (error) {
    res.status(error.status || 500).end(error.message)
  }
}