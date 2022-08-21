import getDriver from '../../../lib/neo4j'

const driver = getDriver()
const session = driver.session()

export default async function handler(req, res) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const flowersTxResultPromise = session.readTransaction(
          async (transaction) => {
            const cypher = `
              MATCH (flower:Product)
              WHERE flower.category = "flowers"
              RETURN flower {.*}
              ORDER BY flower.score DESC
            `
            const flowersTxResponse = await transaction.run(cypher)
            const flower = flowersTxResponse.records.map((r) => r.get('flower'))
            return flower
          }
        )
        const flowers = await flowersTxResultPromise
        res.status(200).json({ success: true, flowers })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
