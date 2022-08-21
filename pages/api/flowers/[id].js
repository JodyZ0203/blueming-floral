import getDriver from '../../../lib/neo4j'


export default async function handler(req, res) {
    const {
        query: { id },
        method,
      } = req
      const Id = decodeURIComponent(id)

  switch (method) {
    case 'GET':
      try {
        const driver = getDriver()
        const session = driver.session()
        const flowersTxResultPromise = session.readTransaction(
          async (transaction) => {
            const cypher = `
              MATCH (flower:Product {productId: $Id})
              WHERE flower.category = "flowers"
              RETURN flower {.*}
              ORDER BY flower.score DESC
            `
            const flowersTxResponse = await transaction.run(cypher, {Id})
            const flower = flowersTxResponse.records.map((r) => r.get('flower'))
            return flower
          }
        )
        const flowers = await flowersTxResultPromise
        await session.close()
        res.status(200).json({ success: true, flowers })
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
      }
      break
      default:
        res.status(400).json({ success: false })
        break
  }
}
