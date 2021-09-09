import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/client"
import { Button, Icon } from "semantic-ui-react"
import { useEffect, useRef, useState } from "react"

import useOnClickOutside from "../hooks"
import { useRouter } from "next/router"
import { AppProps } from "next/app"

const ButtonsConnection = () => (
  <div>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
  </div>
)
const styles = {} as any

// The approach used in this component shows how to built a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header({
  isErrorPage,
}: AppProps & { isErrorPage: boolean }) {
  const [session, loading] = useSession()
  const ref = useRef(null)
  const [isMenuOpen, setMenuOpen] = useState(false)
  useOnClickOutside(ref, () => setMenuOpen(false))

  const router = useRouter()
  const arrayPaths = ["/"]

  const [onTop, setOnTop] = useState(
    !arrayPaths.includes(router.pathname) || isErrorPage ? false : true
  )

  const headerClass = () => {
    if (window.pageYOffset === 0) {
      setOnTop(true)
    } else {
      setOnTop(false)
    }
  }

  useEffect(() => {
    if (!arrayPaths.includes(router.pathname) || isErrorPage) {
      return
    }

    headerClass()
    window.onscroll = function () {
      headerClass()
    }
  }, [])

  return (
    <header
      className={`content-container site-header ${
        !onTop ? "site-header--fixed" : ""
      }`}
    >
      {/*    <div className={styles.signedInStatus}>
        <p
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
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

              <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </a>
            </>
          )}
          {session?.user && (
            <>
              <span
                style={{ backgroundImage: `url(${session.user.image})` }}
                className={styles.avatar}
              />
              <span className={styles.signedInText}>
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
              <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>
 */}
      <nav className="site-nav">
        <div className="flex">
          {/*  <img src="/public/logo.png" alt="welygo logo" /> */}
          <span className="font-semibold text-2xl tracking-tight">
            <Link href="/">
              <a className="link">Welygo</a>
            </Link>
          </span>
        </div>
        <ul
          ref={ref}
          className={`site-menu ${isMenuOpen ? "site-menu-open" : ""}`}
        >
          <li className="mr-xl font-semibold hover:text-white">
            <Link href="/client">
              <a className="link">Client</a>
            </Link>
          </li>
          <li className="mr-xl font-semibold">
            <Link href="/server">
              <a className="link">Server</a>
            </Link>
          </li>
          <li className="mr-xl font-semibold">
            <Link href="/protected">
              <a className="link">Protected</a>
            </Link>
          </li>
          <li className="mr-xl font-semibold">
            <Link href="/api-example">
              <a className="link">API</a>
            </Link>
          </li>
        </ul>
        <div className="flex ">
          <span className="cursor-pointer ml-2">
            <Icon name="user outline" size="large"></Icon>
          </span>
          <span
            className="ml-2 block lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <Icon name="bars" size="large"></Icon>
          </span>
        </div>
      </nav>
    </header>
  )
}
