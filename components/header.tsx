import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/client"
import { Button } from "semantic-ui-react"

const ButtonsConnection = () => (
  <div>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
  </div>
)

// The approach used in this component shows how to built a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const [session, loading] = useSession()

  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div /* className={styles.signedInStatus} */>
        <p
        /*       className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`} */
        >
          {!session && (
            <>
              <span>You are not signed in</span>
              <Button
                as="a"
                primary
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign In
              </Button>

              {/*         <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </a> */}
            </>
          )}
          {session?.user && (
            <>
              <span
                style={{ backgroundImage: `url(${session.user.image})` }}
                /* className={styles.avatar} */
              />
              <span /* className={styles.signedInText} */>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email || session.user.name}</strong>
              </span>
              <Button
                as="a"
                secondary
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign Out
              </Button>
              {/*       <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a> */}
            </>
          )}
        </p>
      </div>

      <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
        <div className="flex">
          {/*  <img src="/public/logo.png" alt="welygo logo" /> */}
          <span className="font-semibold text-xl tracking-tight">Welygo</span>
        </div>
        <ul className="hidden lg:flex flex-grow justify-center ">
          <li className="mr-xl font-semibold">
            <Link href="/client">Client</Link>
          </li>
          <li className="mr-xl font-semibold">
            <Link href="/server">
              <a>Server</a>
            </Link>
          </li>
          <li className="mr-xl font-semibold">
            <Link href="/protected">
              <a>Protected</a>
            </Link>
          </li>
          <li className="mr-xl font-semibold">
            <Link href="/api-example">
              <a>API</a>
            </Link>
          </li>
        </ul>
        <div className="hidden lg:flex">
          <ButtonsConnection />
        </div>
      </nav>
    </header>
  )
}
