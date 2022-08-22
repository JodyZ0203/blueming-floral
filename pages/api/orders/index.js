export default async function orders(req, res) {
    // After getting the session you may want to fetch for the user instead
    // of sending the session's payload directly, this example doesn't have a DB
    // so it won't matter in this case
    res.status(200).json({ success: true })
  }