import { useUser } from '../lib/hooks'
import Layout from '../layout/Layout'

const Profile = () => {
  const user = useUser({ redirectTo: '/login' })
  const userData = JSON.stringify(user, null, 2)
  return (
    <Layout>
      <h1>Profile</h1>

      {user && (
        <>
          <p>Your session:</p>
          <pre>{userData.email}</pre>
        </>
      )}

      <style jsx>{`
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
    </Layout>
  )
}

export default Profile